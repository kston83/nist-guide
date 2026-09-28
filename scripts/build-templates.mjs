#!/usr/bin/env node
/**
 * Builds template pages and the downloadable kit from the sources in templates/
 * (PRD Template system).
 *
 *   npm run templates             write the template pages into src/content/docs/templates
 *                                 (committed, like control pages; CI fails if they are stale)
 *   npm run kit                   write downloads into dist/downloads (part of npm run build)
 *   npm run kit -- --out <dir>    write them somewhere else
 *
 * Family policies: policy/_common.md plus each family's clauses, in catalog
 * order, one file per baseline (TPL-03), in a clean and an annotated edition
 * (TPL-04): <family>-policy-<baseline>.md and ...-annotated.md. Plans,
 * standards, procedures and forms: one file per edition. Decision worksheets
 * (TPL-08): worksheets/<family>-decisions-<baseline>.csv. Every document also
 * as .docx, styled by templates/reference.docx, and every family as a .zip
 * pack, plus the full kit (TPL-05).
 *
 * Downloads are build output and never committed.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { loadSources } from './lib/template-sources.mjs';
import {
	GENERATED_NOTE,
	indexPage,
	KIT_FILE,
	packFile,
	policyFile,
	policyPage,
	templateFile,
	templatePage,
	worksheetBaselines,
	worksheetFile,
	worksheetInput,
	worksheetPage,
} from './lib/template-pages.mjs';
import { assemblePolicy, policyBaselines } from '../src/lib/template-assemble.ts';
import { renderVariables } from '../src/lib/template-vars.ts';
import { renderBlocks } from '../src/lib/template-editions.ts';
import { worksheetCsv, worksheetRows } from '../src/lib/template-worksheet.ts';
import { documentHeader, findPandoc, kitReadme, NO_DOCX, toDocx, withHeader, zipDeterministic } from './lib/template-kit.mjs';

// Clean (ready to adopt) is the default file; annotated keeps the guidance (TPL-04).
const EDITIONS = ['clean', 'annotated'];
const PAGES = 'src/content/docs/templates';
const REFERENCE_DOC = 'templates/reference.docx';

// Timestamp for .docx metadata: the last commit, so rebuilding a commit gives the same files.
function lastCommitTime() {
	try {
		return Number(execFileSync('git', ['log', '-1', '--format=%ct'], { encoding: 'utf8' }).trim());
	} catch {
		return 0;
	}
}

const pagesMode = process.argv.includes('--pages');
const outArg = process.argv.indexOf('--out');
const OUT = path.join(outArg > 0 ? process.argv[outArg + 1] : 'dist', 'downloads');

const catalog = JSON.parse(await fs.readFile('src/data/catalog.json', 'utf8'));
// package.json: `version` is the template version; `homepage` is the site URL for "Latest version" links.
const { version, homepage } = JSON.parse(await fs.readFile('package.json', 'utf8'));
if (!homepage?.endsWith('/')) throw new Error('package.json needs "homepage": the site URL with a trailing slash.');
const { variables, common, families, clauses, templates } = await loadSources();
// Families in catalog order.
const familyOrder = [...new Set(catalog.controls.map((c) => c.family))];
const orderedFamilies = [...families.values()].sort((a, b) => familyOrder.indexOf(a.id) - familyOrder.indexOf(b.id));

const problems = [];
const attempt = async (what, fn) => {
	try {
		await fn();
	} catch (err) {
		problems.push(`${what}: ${err.message}`);
	}
};
const finish = (message) => {
	if (problems.length) {
		console.error(`Templates failed:\n  ${problems.join('\n  ')}`);
		process.exit(1);
	}
	console.log(message);
};

async function writeIfChanged(file, text) {
	let existing = null;
	try {
		existing = (await fs.readFile(file, 'utf8')).replace(/\r\n/g, '\n');
	} catch {}
	if (existing === text) return false;
	await fs.mkdir(path.dirname(file), { recursive: true });
	await fs.writeFile(file, text);
	return true;
}

if (pagesMode) {
	const pages = [];
	for (const [i, family] of orderedFamilies.entries())
		await attempt(`${family.id.toUpperCase()} policy page`, () =>
			pages.push(policyPage({ family, clauses, common, catalog, variables, version, order: i + 1 })),
		);
	for (const [i, family] of orderedFamilies.entries())
		await attempt(`${family.id.toUpperCase()} worksheet page`, () =>
			pages.push(worksheetPage({ family, clauses, catalog, variables, version, order: i + 1 })),
		);
	for (const [i, template] of templates.entries())
		await attempt(`templates/${template.id}.md page`, () =>
			pages.push(templatePage({ template, catalog, variables, version, order: i + 1 })),
		);
	pages.push({ file: 'index.md', text: indexPage(pages.map((p) => p.summary)) });

	let changed = 0;
	for (const p of pages) if (await writeIfChanged(path.join(PAGES, p.file), p.text)) changed++;
	// Remove generated pages whose source is gone.
	const keep = new Set(pages.map((p) => path.join(PAGES, p.file)));
	const walk = async (dir) => {
		for (const f of await fs.readdir(dir, { withFileTypes: true }).catch(() => [])) {
			const p = path.join(dir, f.name);
			if (f.isDirectory()) await walk(p);
			else if (!keep.has(p) && (await fs.readFile(p, 'utf8')).includes(GENERATED_NOTE)) {
				await fs.rm(p);
				changed++;
			}
		}
	};
	await walk(PAGES);
	finish(`Template pages: ${pages.length} page(s); ${changed} file(s) changed.`);
} else {
	// .docx needs pandoc (PRD TPL-05): CI installs a pinned version and fails
	// without it; a local build without pandoc skips .docx and says so.
	const pandoc = await findPandoc();
	if (!pandoc && process.env.CI) {
		problems.push('pandoc not found; CI installs it before the build (see .github/workflows)');
		finish();
	}
	if (!pandoc) console.warn('pandoc not found: skipping .docx files. Put pandoc on PATH or set PANDOC to build them.');
	const docxOptions = { pandoc, referenceDoc: REFERENCE_DOC, sourceDateEpoch: lastCommitTime() };

	const files = {}; // path under downloads/ -> contents, kept for the zips
	const write = async (rel, data) => {
		const file = path.join(OUT, rel);
		await fs.mkdir(path.dirname(file), { recursive: true });
		await fs.writeFile(file, data);
		files[rel] = typeof data === 'string' ? Buffer.from(data) : data;
	};
	const editions = async (source, ctx, file, { baseline, url }) => {
		for (const edition of EDITIONS) {
			const header = documentHeader({ version, baseline, edition, basis: catalog.source, url });
			const render = (target) => withHeader(renderVariables(renderBlocks(source, edition, target), ctx, target), header);
			await write(`${file(edition)}.md`, render('md'));
			if (pandoc) await write(`${file(edition)}.docx`, await toDocx(render('docx'), docxOptions));
		}
	};

	for (const family of orderedFamilies) {
		const own = clauses.filter((c) => c.id.startsWith(`policy/${family.id}/`));
		const url = `${homepage}templates/policies/${family.id}/`;
		for (const baseline of policyBaselines(family.id, own, catalog.controls))
			await attempt(`${family.id.toUpperCase()} policy (${baseline})`, () => {
				const policy = assemblePolicy({ common: common.body, family, clauses: own, controls: catalog.controls, baseline });
				const ctx = { variables, params: catalog.params, typical: policy.typical, family };
				return editions(policy.source, ctx, (e) => policyFile(family.id, baseline, e), { baseline, url });
			});
		for (const baseline of worksheetBaselines(family.id, catalog.controls))
			await attempt(`${family.id.toUpperCase()} worksheet (${baseline})`, () =>
				write(
					`${worksheetFile(family.id, baseline)}.csv`,
					worksheetCsv(worksheetRows(worksheetInput({ family, baseline, clauses, catalog, variables }))),
				),
			);
	}
	for (const template of templates)
		await attempt(`templates/${template.id}.md`, () =>
			editions(
				template.body,
				{ variables, params: catalog.params, typical: template.typical },
				(e) => templateFile(template.id, e),
				{ url: `${homepage}templates/${template.id}/` },
			),
		);

	// Zips: one pack per family, and the full kit (TPL-05).
	const documents = { ...files };
	const zip = async (rel, folder, names) => {
		const entries = Object.fromEntries(names.map((n) => [`${folder}/${n}`, new Uint8Array(documents[n])]));
		entries[`${folder}/README.txt`] = new TextEncoder().encode(kitReadme({ version, basis: catalog.source, url: `${homepage}templates/` }));
		await write(rel, zipDeterministic(entries));
	};
	for (const family of orderedFamilies)
		await attempt(`${family.id.toUpperCase()} pack`, () =>
			zip(
				packFile(family.id),
				`${family.id}-pack`,
				Object.keys(documents).filter((n) => n.startsWith(`policies/${family.id}-policy-`) || n.startsWith(`worksheets/${family.id}-decisions-`)),
			),
		);
	await attempt('full kit', () => zip(KIT_FILE, 'rmf-field-guide-kit', Object.keys(documents)));

	// Tells the link check that .docx links are expected to be missing in this build.
	if (!pandoc) await fs.writeFile(path.join(OUT, NO_DOCX), '');
	finish(`Template kit: ${Object.keys(files).length} file(s) in ${OUT}${pandoc ? '' : ' (no .docx: pandoc not found)'}.`);
}

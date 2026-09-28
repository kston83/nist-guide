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
 * (TPL-08): worksheets/<family>-decisions-<baseline>.csv.
 *
 * Downloads are build output and never committed.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { loadSources } from './lib/template-sources.mjs';
import {
	GENERATED_NOTE,
	indexPage,
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

// Clean (ready to adopt) is the default file; annotated keeps the guidance (TPL-04).
const EDITIONS = ['clean', 'annotated'];
const PAGES = 'src/content/docs/templates';

const pagesMode = process.argv.includes('--pages');
const outArg = process.argv.indexOf('--out');
const OUT = path.join(outArg > 0 ? process.argv[outArg + 1] : 'dist', 'downloads');

const catalog = JSON.parse(await fs.readFile('src/data/catalog.json', 'utf8'));
const { version } = JSON.parse(await fs.readFile('package.json', 'utf8'));
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
	let written = 0;
	const write = async (rel, text) => {
		const file = path.join(OUT, rel);
		await fs.mkdir(path.dirname(file), { recursive: true });
		await fs.writeFile(file, text);
		written++;
	};
	const editions = async (source, ctx, file) => {
		for (const edition of EDITIONS)
			await write(`${file(edition)}.md`, renderVariables(renderBlocks(source, edition, 'md'), ctx, 'md'));
	};

	for (const family of orderedFamilies) {
		const own = clauses.filter((c) => c.id.startsWith(`policy/${family.id}/`));
		for (const baseline of policyBaselines(family.id, own, catalog.controls))
			await attempt(`${family.id.toUpperCase()} policy (${baseline})`, () => {
				const policy = assemblePolicy({ common: common.body, family, clauses: own, controls: catalog.controls, baseline });
				const ctx = { variables, params: catalog.params, typical: policy.typical, family };
				return editions(policy.source, ctx, (e) => policyFile(family.id, baseline, e));
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
			editions(template.body, { variables, params: catalog.params, typical: template.typical }, (e) => templateFile(template.id, e)),
		);
	finish(`Template kit: ${written} file(s) in ${OUT}.`);
}

#!/usr/bin/env node
/**
 * Generates the SP 800-53 control pages from NIST's official OSCAL catalog.
 *
 *   npm run controls              use cached downloads if present
 *   npm run controls -- --refresh download the latest catalog from NIST
 *
 * Each control page has two parts:
 *   1. The NIST text, between <!-- nist:start --> and <!-- nist:end -->.
 *      This part (and the front matter) is rewritten every time the script runs.
 *   2. Your guidance, below <!-- guidance: write below this line -->.
 *      The script never touches anything after <!-- nist:end -->.
 */
import fs from 'node:fs/promises';
import path from 'node:path';

const SOURCE =
	'https://raw.githubusercontent.com/usnistgov/oscal-content/main/nist.gov/SP800-53/rev5/json';
const CATALOG = 'NIST_SP-800-53_rev5_catalog.json';
const BASELINES = { Low: 'LOW', Moderate: 'MODERATE', High: 'HIGH', Privacy: 'PRIVACY' };
const OUT = 'src/content/docs/controls';
const CACHE = '.cache/oscal';
const START = '<!-- nist:start -->';
const END = '<!-- nist:end -->';
const GUIDE = '<!-- guidance: write below this line -->';
const refresh = process.argv.includes('--refresh');

// ---------- download ----------
async function getJson(file) {
	const cached = path.join(CACHE, file);
	if (!refresh) {
		try {
			return JSON.parse(await fs.readFile(cached, 'utf8'));
		} catch {}
	}
	console.log(`Downloading ${file}`);
	const res = await fetch(`${SOURCE}/${file}`);
	if (!res.ok) throw new Error(`Download failed (${res.status}) for ${file}`);
	const text = await res.text();
	await fs.mkdir(CACHE, { recursive: true });
	await fs.writeFile(cached, text);
	return JSON.parse(text);
}

// ---------- OSCAL helpers ----------
const prop = (obj, name, cls) =>
	(obj.props ?? []).find((p) => p.name === name && (cls === undefined ? !p.class : p.class === cls))?.value;
const label = (c) => prop(c, 'label') ?? c.id.toUpperCase();
const isWithdrawn = (c) => prop(c, 'status') === 'withdrawn';
const sortKey = (c) => prop(c, 'sort-id') ?? c.id;
const baseId = (id) => id.split('.')[0];
const familyOf = (id) => id.split('-')[0];
const controlUrl = (id) => {
	const [base, enh] = id.split('.');
	return `/controls/${familyOf(base)}/${base}/${enh ? `#${id}` : ''}`;
};
const idLabel = (id) => {
	const [base, enh] = id.split('.');
	return base.toUpperCase() + (enh ? `(${enh})` : '');
};

const params = new Map();
function collectParams(c) {
	for (const p of c.params ?? []) params.set(p.id, p);
	for (const e of c.controls ?? []) collectParams(e);
}

function renderParam(id) {
	const p = params.get(id);
	if (!p) return `[${id}]`;
	if (p.select) {
		const choices = (p.select.choice ?? []).map((ch) => insertParams(ch)).join('; ');
		const many = p.select['how-many'] === 'one-or-more' ? ' (one or more)' : '';
		return `[Selection${many}: ${choices}]`;
	}
	if (p.label) return `[Assignment: organization-defined ${p.label}]`;
	return `[Assignment: ${p.guidelines?.[0]?.prose?.trim() ?? id}]`;
}

const insertParams = (text) =>
	text.replace(/\{\{\s*insert:\s*param,\s*([\w.-]+)\s*\}\}/g, (_, id) => renderParam(id));

function clean(text = '') {
	return insertParams(text)
		.replace(/\[([^\]]*)\]\(#[^)]*\)/g, '$1') // links to NIST back-matter anchors
		.replace(/</g, '&lt;')
		.trim();
}

function items(parts = [], depth = 0) {
	const pad = '  '.repeat(depth);
	return parts
		.filter((p) => p.name === 'item')
		.map((p) => {
			const l = prop(p, 'label');
			const line = `${pad}- ${l ? `**${l}** ` : ''}${clean(p.prose)}`;
			const sub = items(p.parts, depth + 1);
			return sub ? `${line}\n${sub}` : line;
		})
		.join('\n');
}

function statement(c) {
	const s = (c.parts ?? []).find((p) => p.name === 'statement');
	if (!s) return '';
	return [s.prose ? clean(s.prose) : '', items(s.parts)].filter(Boolean).join('\n\n');
}

const guidance = (c) => clean((c.parts ?? []).find((p) => p.name === 'guidance')?.prose);

function objectives(parts = [], depth = 0) {
	const pad = '  '.repeat(depth);
	return parts
		.filter((p) => p.name === 'assessment-objective')
		.map((p) => {
			const l = prop(p, 'label', 'sp800-53a');
			const line = p.prose ? `${pad}- ${l ? `**${l}** ` : ''}${clean(p.prose)}` : `${pad}- **${l ?? ''}**`;
			const sub = objectives(p.parts, depth + 1);
			return sub ? `${line}\n${sub}` : line;
		})
		.join('\n');
}

function assessment(c) {
	const obj = (c.parts ?? []).find((p) => p.name === 'assessment-objective');
	const out = [];
	if (obj) {
		const top = obj.prose ? `Determine if ${clean(obj.prose)}` : 'Determine if:';
		out.push(top, objectives(obj.parts));
	}
	for (const m of (c.parts ?? []).filter((p) => p.name === 'assessment-method')) {
		const method = prop(m, 'method') ?? '';
		const objects = (m.parts ?? [])
			.filter((p) => p.name === 'assessment-objects')
			.flatMap((p) => clean(p.prose).split(/\n+/))
			.map((s) => s.trim())
			.filter(Boolean);
		if (objects.length)
			out.push(`**${method.charAt(0) + method.slice(1).toLowerCase()}:** ${objects.join('; ')}.`);
	}
	return out.filter(Boolean).join('\n\n');
}

const related = (c) =>
	(c.links ?? [])
		.filter((l) => l.rel === 'related' && l.href.startsWith('#'))
		.map((l) => l.href.slice(1))
		.map((id) => (withdrawnIds.has(id) ? idLabel(id) : `[${idLabel(id)}](${controlUrl(id)})`))
		.join(', ');

const yaml = (s) => `'${String(s).replace(/'/g, "''")}'`;

// ---------- file writing ----------
async function writeGenerated(file, { frontmatter, body, tail = `\n${GUIDE}\n` }) {
	let existing = null;
	try {
		existing = await fs.readFile(file, 'utf8');
	} catch {}
	const block = `${START}\n${body.trim()}\n${END}`;
	let next;
	if (existing && existing.includes(START) && existing.includes(END)) {
		const before = existing.slice(0, existing.indexOf(START));
		const after = existing.slice(existing.indexOf(END) + END.length);
		const head = frontmatter ? `${frontmatter}\n\n` : before;
		next = `${head}${block}${after}`;
	} else if (existing) {
		console.warn(`Skipped ${file}: no generated markers found.`);
		return;
	} else {
		next = `${frontmatter ?? ''}\n\n${block}\n${tail}`;
	}
	if (next !== existing) {
		await fs.mkdir(path.dirname(file), { recursive: true });
		await fs.writeFile(file, next);
	}
}

// ---------- main ----------
const catalog = (await getJson(CATALOG)).catalog;
const version = catalog.metadata.version;
const inBaseline = new Map();
for (const [name, file] of Object.entries(BASELINES)) {
	const profile = (await getJson(`NIST_SP-800-53_rev5_${file}-baseline_profile.json`)).profile;
	for (const imp of profile.imports)
		for (const inc of imp['include-controls'] ?? [])
			for (const id of inc['with-ids'] ?? []) {
				if (!inBaseline.has(id)) inBaseline.set(id, []);
				inBaseline.get(id).push(name);
			}
}
const security = (id) => (inBaseline.get(id) ?? []).filter((b) => b !== 'Privacy');
const privacy = (id) => (inBaseline.get(id) ?? []).includes('Privacy');
const baselineText = (id) => {
	const b = [...security(id), ...(privacy(id) ? ['Privacy'] : [])];
	return b.length ? b.join(', ') : 'Not in a baseline';
};

const withdrawnIds = new Set();
for (const g of catalog.groups)
	for (const c of g.controls) {
		collectParams(c);
		for (const x of [c, ...(c.controls ?? [])]) if (isWithdrawn(x)) withdrawnIds.add(x.id);
	}

const note = `<!-- Generated from NIST SP 800-53 release ${version} (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->`;
const familyRows = [];
let pages = 0;

for (const group of catalog.groups) {
	const fam = group.id;
	const famLabel = `${group.title} (${fam.toUpperCase()})`;
	const rows = [];
	const withdrawn = [];

	for (const [i, c] of group.controls.entries()) {
		if (isWithdrawn(c)) {
			withdrawn.push(label(c));
			continue;
		}
		const enh = (c.controls ?? []).filter((e) => !isWithdrawn(e));
		const enhWithdrawn = (c.controls ?? []).filter(isWithdrawn);
		const tick = (b) => (security(c.id).includes(b) ? 'Yes' : '');
		rows.push(
			`| [${label(c)}](${controlUrl(c.id)}) | ${c.title} | ${tick('Low')} | ${tick('Moderate')} | ${tick('High')} | ${privacy(c.id) ? 'Yes' : ''} |`,
		);

		const frontmatter = [
			'---',
			`title: ${yaml(`${label(c)} ${c.title}`)}`,
			`description: ${yaml(`NIST SP 800-53 Rev. 5 control ${label(c)}, ${c.title}: requirement, baselines, enhancements and assessment objectives, with implementation guidance.`)}`,
			'sidebar:',
			`  label: ${yaml(`${label(c)} ${c.title}`)}`,
			`  order: ${i + 1}`,
			'control:',
			`  id: ${label(c)}`,
			`  family: ${fam.toUpperCase()}`,
			`  baselines: [${[...security(c.id), ...(privacy(c.id) ? ['Privacy'] : [])].join(', ')}]`,
			'---',
		].join('\n');

		const inBase = enh.filter((e) => security(e.id).length || privacy(e.id)).length;
		const level = prop(c, 'implementation-level');
		const body = [
			note,
			`| Baselines | Implementation level | Enhancements |\n| --- | --- | --- |\n| ${baselineText(c.id)} | ${level ? level[0].toUpperCase() + level.slice(1) : 'Not specified'} | ${enh.length ? `${enh.length} (${inBase} in a baseline)` : 'None'} |`,
			related(c) ? `**Related controls:** ${related(c)}` : '',
			'## Control statement',
			statement(c),
			guidance(c) ? `<details>\n<summary>NIST discussion</summary>\n\n${guidance(c)}\n\n</details>` : '',
			enh.length ? '## Control enhancements' : '',
			...enh.map((e) =>
				[
					`<a id="${e.id}"></a>\n\n### ${label(e)} ${e.title}`,
					`*Baselines: ${baselineText(e.id)}*`,
					statement(e),
					`<details>\n<summary>Discussion and assessment objectives for ${label(e)}</summary>\n\n${[guidance(e), assessment(e)].filter(Boolean).join('\n\n')}\n\n</details>`,
				].join('\n\n'),
			),
			enhWithdrawn.length ? `*Withdrawn enhancements: ${enhWithdrawn.map(label).join(', ')}.*` : '',
			'## Assessment objectives (SP 800-53A)',
			`<details>\n<summary>Objectives and methods for ${label(c)}</summary>\n\n${assessment(c)}\n\n</details>`,
		]
			.filter(Boolean)
			.join('\n\n');

		await writeGenerated(path.join(OUT, fam, `${c.id}.md`), { frontmatter, body });
		pages++;
	}

	const famFront = [
		'---',
		`title: ${yaml(famLabel)}`,
		`description: ${yaml(`The ${group.title} family of NIST SP 800-53 Rev. 5, with baseline membership for each control.`)}`,
		'sidebar:',
		'  label: Family overview',
		'  order: 0',
		'---',
	].join('\n');
	const famBody = [
		note,
		`The ${group.title} family has ${rows.length} active controls in SP 800-53 release ${version}. "Yes" marks membership in the SP 800-53B baselines.`,
		'| Control | Title | Low | Moderate | High | Privacy |\n| --- | --- | --- | --- | --- | --- |\n' +
			rows.join('\n'),
		withdrawn.length ? `*Withdrawn controls: ${withdrawn.join(', ')}.*` : '',
	]
		.filter(Boolean)
		.join('\n\n');
	await writeGenerated(path.join(OUT, fam, 'index.md'), { frontmatter: famFront, body: famBody });
	familyRows.push(`| [${fam.toUpperCase()}](/controls/${fam}/) | ${group.title} | ${rows.length} |`);
}

// Family table on the hand-written controls overview page (front matter left alone).
await writeGenerated(path.join(OUT, 'index.md'), {
	frontmatter: null,
	body: [
		note,
		`| Family | Name | Active controls |\n| --- | --- | --- |\n${familyRows.join('\n')}`,
	].join('\n\n'),
});

console.log(`SP 800-53 release ${version}: wrote ${pages} control pages in ${catalog.groups.length} families.`);

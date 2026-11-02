// Tests for "Methods" on control pages (METH-01) and the SSDF practice pages'
// SP 800-53 references (SSDF-02): the pure builder on fixtures, then the
// committed practice pages and src/data/ssdf.json.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { parse as parseYaml } from 'yaml';
import { methodOf, methodsFor, ssdfParts } from '../../src/lib/methods.ts';
import { splitFrontmatter } from '../lib/generated.mjs';
import { controlLabel, controlUrl, practiceControls, practiceSlug } from '../lib/ssdf.mjs';

const ssdf = JSON.parse(fs.readFileSync('src/data/ssdf.json', 'utf8'));
const SOURCE = { id: 'SP 800-218', version: '1.1', status: 'final' };
const part = (id, controls) => ({ id, href: `/methods/ssdf/x/#${id.toLowerCase()}`, controls });
const fixture = [
	{
		id: 'methods/ssdf/pw-1',
		title: 'PW.1 Design',
		order: 7,
		implements: ['sa-8', 'sa-15.5', 'sa-17'],
		source: SOURCE,
		parts: [part('PW.1.1', ['sa-8', 'sa-15.5']), part('PW.1.2', ['sa-8', 'sa-17'])],
	},
	{
		id: 'methods/ssdf/po-1',
		title: 'PO.1 Define',
		order: 1,
		implements: ['sa-1', 'sa-15'],
		source: SOURCE,
		parts: [part('PO.1.1', ['sa-1', 'sa-15']), part('PO.1.2', ['sa-15'])],
	},
	{ id: 'methods/sp-800-128', title: 'SP 800-128', implements: ['cm-3'], source: { id: 'SP 800-128', version: '1', status: 'draft' } },
];
const titles = new Map([['methods/ssdf', 'Secure Software Development Framework (SSDF)']]);

test('a page belongs to its folder method, or is a method of its own', () => {
	assert.equal(methodOf('methods/ssdf/po-1'), 'methods/ssdf');
	assert.equal(methodOf('methods/sp-800-128'), 'methods/sp-800-128');
});

test('groups pages by method, with the version, in sidebar order, naming the parts that cite the control', () => {
	const [m, ...rest] = methodsFor('SA-15', fixture, titles);
	assert.deepEqual(rest, []);
	assert.equal(m.href, '/methods/ssdf/');
	assert.equal(m.title, 'Secure Software Development Framework (SSDF)');
	assert.equal(m.source, 'SP 800-218, version 1.1');
	assert.deepEqual(
		m.pages.map((p) => [p.title, p.parts.map((t) => t.id + (t.enhancements.length ? ` (${t.enhancements})` : ''))]),
		[
			['PO.1 Define', ['PO.1.1', 'PO.1.2']],
			['PW.1 Design', ['PW.1.1 (SA-15(5))']],
		],
	);
	assert.equal(m.pages[0].parts[0].href, '/methods/ssdf/x/#po.1.1');
});

test('does not match a control that only shares a prefix (sa-1 vs sa-15), and an uncited control has no methods', () => {
	const sa1 = methodsFor('SA-1', fixture, titles);
	assert.deepEqual(
		sa1.flatMap((m) => m.pages.flatMap((p) => p.parts.map((t) => t.id))),
		['PO.1.1'],
	);
	assert.deepEqual(methodsFor('AC-2', fixture, titles), []);
});

test('a single-page method takes its own title, and a draft says so', () => {
	const [m] = methodsFor('CM-3', fixture, titles);
	assert.equal(m.title, 'SP 800-128');
	assert.equal(m.source, 'SP 800-128, version 1, draft');
	assert.deepEqual(m.pages.map((p) => [p.href, p.parts]), [['/methods/sp-800-128/', []]]);
});

// ---------- the committed SSDF pages ----------

const DIR = 'src/content/docs/methods/ssdf';
const practicePages = ssdf.practices.map((p) => {
	const id = `methods/ssdf/${practiceSlug(p.id)}`;
	const text = fs.readFileSync(path.join(DIR, `${practiceSlug(p.id)}.md`), 'utf8').replace(/\r\n/g, '\n');
	const data = parseYaml(splitFrontmatter(text).yaml);
	return { practice: p, text, page: { id, title: data.title, order: data.sidebar.order, implements: data.implements ?? [], source: data.source, parts: ssdfParts(id, ssdf) } };
});

test("each practice page's implements and SP 800-53 references table match ssdf.json", () => {
	for (const { practice, text, page } of practicePages) {
		assert.deepEqual(page.implements, practiceControls(practice), `${page.id}: implements`);
		const table = text.slice(text.indexOf('## SP 800-53 references'));
		for (const t of practice.tasks) {
			const refs = t.sp80053.map((id) => `[${controlLabel(id)}](${controlUrl(id)})`).join(', ') || "None in NIST's table";
			assert.ok(table.includes(`\n| [${t.id}](#${t.id.toLowerCase()}) | ${refs} |\n`), `${page.id}: ${t.id} row`);
		}
	}
	// Every SP 800-53 reference in NIST's table reaches some page's implements.
	const cited = new Set(ssdf.practices.flatMap((p) => p.tasks.flatMap((t) => t.sp80053)));
	const implemented = new Set(practicePages.flatMap((p) => p.page.implements));
	assert.deepEqual([...cited].sort(), [...implemented].sort());
});

test('SA-15 lists the SSDF tasks that cite it; AC-2, which no task cites, has no Methods section', () => {
	const pages = practicePages.map((p) => p.page);
	const overview = parseYaml(splitFrontmatter(fs.readFileSync(path.join(DIR, 'index.md'), 'utf8')).yaml);
	const realTitles = new Map([['methods/ssdf', overview.title]]);
	const [m, ...rest] = methodsFor('SA-15', pages, realTitles);
	assert.deepEqual(rest, []);
	assert.equal(m.title, 'Secure Software Development Framework (SSDF)');
	assert.equal(m.source, 'SP 800-218, version 1.1');
	const expected = ssdf.practices.flatMap((p) =>
		p.tasks.filter((t) => t.sp80053.some((c) => c === 'sa-15' || c.startsWith('sa-15.'))).map((t) => t.id),
	);
	const listed = m.pages.flatMap((p) => p.parts.map((t) => t.id));
	assert.deepEqual(listed, expected);
	assert.ok(listed.includes('PO.1.1') && listed.includes('RV.3.4'));
	const pw11 = m.pages.flatMap((p) => p.parts).find((t) => t.id === 'PW.1.1');
	assert.deepEqual(pw11.enhancements, ['SA-15(5)']);
	assert.equal(pw11.href, '/methods/ssdf/pw-1/#pw.1.1');
	assert.deepEqual(methodsFor('AC-2', pages, realTitles), []);
});

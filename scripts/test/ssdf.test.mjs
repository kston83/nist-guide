// Tests for the SSDF import (PRD SSDF-01): the .xlsx reader and the SSDF table
// parser and page builder, on a small workbook built here (no network).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { strToU8, zipSync } from 'fflate';
import { mergeGenerated, END, GUIDE } from '../lib/generated.mjs';
import { oscalId, parseSsdf, practiceSlug, SSDF_OWNED_KEYS, ssdfPages } from '../lib/ssdf.mjs';
import { columnIndex, decodeXml, readWorkbook, sharedStrings, sheetRows } from '../lib/xlsx.mjs';

// ---------- a minimal .xlsx ----------

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const col = (i) => String.fromCharCode(65 + i);

// Writes rows as shared strings, the way Excel does, so the reader's main path is tested.
function workbook(sheets) {
	const strings = [];
	const index = (s) => (strings.includes(s) ? strings.indexOf(s) : strings.push(s) - 1);
	const parts = {};
	const names = Object.keys(sheets);
	names.forEach((name, n) => {
		const rows = sheets[name]
			.map((row, r) => {
				const cells = row
					.map((v, c) => (v === '' ? '' : `<c r="${col(c)}${r + 1}" t="s"><v>${index(v)}</v></c>`))
					.join('');
				return `<row r="${r + 1}">${cells}</row>`;
			})
			.join('');
		parts[`xl/worksheets/sheet${n + 1}.xml`] = strToU8(`<worksheet><sheetData>${rows}</sheetData></worksheet>`);
	});
	const sheetList = names.map((name, n) => `<sheet name="${name}" sheetId="${n + 1}" r:id="rId${n + 1}"/>`).join('');
	const rels = names
		.map((_, n) => `<Relationship Id="rId${n + 1}" Type="worksheet" Target="worksheets/sheet${n + 1}.xml"/>`)
		.join('');
	parts['xl/workbook.xml'] = strToU8(`<workbook><sheets>${sheetList}</sheets></workbook>`);
	parts['xl/_rels/workbook.xml.rels'] = strToU8(`<Relationships>${rels}</Relationships>`);
	parts['xl/sharedStrings.xml'] = strToU8(`<sst>${strings.map((s) => `<si><t xml:space="preserve">${esc(s)}</t></si>`).join('')}</sst>`);
	return zipSync(parts);
}

const HEADER = ['Practices', 'Tasks', 'Notional Implementation Examples', 'References'];
const GROUPS = [['Prepare the Organization (PO): Organizations should prepare.'], ['Respond to Vulnerabilities (RV): Organizations should respond.']];
const PRACTICES = [
	['Practices'],
	['Define Security Requirements (PO.1): Ensure requirements are known.'],
	['Identify and Confirm Vulnerabilities (RV.1): Help ensure vulnerabilities are found.'],
];
const SSDF = [
	HEADER,
	[
		PRACTICES[1][0],
		'PO.1.1: Identify and document all security requirements.',
		'Example 1: Define policies.\r\nExample 2: Review them at least annually. ',
		'BSIMM: CP1.1\r\nSP80053: SA-1, SA-8(3), SR-3',
	],
	['', 'PO.1.2: Communicate requirements to third parties. [Formerly PW.3.1]', 'Example 1: Use contracts.', 'EO14028: 4e(ix)'],
	[PRACTICES[2][0], 'RV.1.1: Gather information about vulnerabilities.', 'Example 1: Monitor databases.', 'SP80053: SA-10'],
];
const CONTROLS = new Set(['sa-1', 'sa-8.3', 'sr-3', 'sa-10']);
const SOURCE = {
	version: '1.1',
	status: 'final',
	published: 'February 2022',
	checked: '2026-10',
	file: 'table.xlsx',
	landing: 'https://csrc.nist.gov/pubs/sp/800/218/final',
};
const sheets = () => readWorkbook(workbook({ SSDF, Groups: GROUPS, Practices: PRACTICES }));

// ---------- xlsx reader ----------

test('decodes XML entities and character references', () => {
	assert.equal(decodeXml('a &amp; b &lt;c&gt; &#8217; &#x2014; &quot;'), 'a & b <c> ’ — "');
});

test('column letters become zero-based indexes', () => {
	assert.equal(columnIndex('A1'), 0);
	assert.equal(columnIndex('D7'), 3);
	assert.equal(columnIndex('AA3'), 26);
});

test('shared strings join rich-text runs and skip phonetic text', () => {
	const xml = '<sst><si><t>plain</t></si><si><r><t>rich </t></r><r><t>text</t></r><rPh><t>x</t></rPh></si><si/></sst>';
	assert.deepEqual(sharedStrings(xml), ['plain', 'rich text', '']);
});

test('sheet rows keep column positions and row numbers', () => {
	const xml =
		'<sheetData><row r="1"><c r="A1" t="s"><v>0</v></c><c r="C1"><v>42</v></c></row>' +
		'<row r="3"><c r="B3" t="inlineStr"><is><t>inline</t></is></c></row></sheetData>';
	assert.deepEqual(sheetRows(xml, ['first']), [['first', '', '42'], [], ['', 'inline']]);
});

test('reads every sheet of a workbook by name', () => {
	const wb = sheets();
	assert.deepEqual(Object.keys(wb), ['SSDF', 'Groups', 'Practices']);
	assert.equal(wb.SSDF[1][1], SSDF[1][1]);
	assert.equal(wb.SSDF[2][0], '');
});

// ---------- SSDF table ----------

test('SP 800-53 references become OSCAL ids', () => {
	assert.equal(oscalId('SA-15'), 'sa-15');
	assert.equal(oscalId('SA-8(23)'), 'sa-8.23');
	assert.throws(() => oscalId('SA 15'), /Unexpected/);
});

test('parses groups, practices, tasks, examples and references', () => {
	const { groups, practices } = parseSsdf(sheets(), CONTROLS);
	assert.deepEqual(
		groups.map((g) => g.id),
		['PO', 'RV'],
	);
	assert.equal(practices.length, 2);
	const [po1, rv1] = practices;
	assert.equal(po1.id, 'PO.1');
	assert.equal(po1.name, 'Define Security Requirements');
	assert.equal(po1.group, 'PO');
	assert.deepEqual(
		po1.tasks.map((t) => t.id),
		['PO.1.1', 'PO.1.2'],
	);
	assert.deepEqual(po1.tasks[0].examples, ['Example 1: Define policies.', 'Example 2: Review them at least annually.']);
	assert.deepEqual(po1.tasks[0].references, { BSIMM: 'CP1.1', SP80053: 'SA-1, SA-8(3), SR-3' });
	assert.deepEqual(po1.tasks[0].sp80053, ['sa-1', 'sa-8.3', 'sr-3']);
	assert.deepEqual(po1.tasks[1].sp80053, []);
	assert.equal(po1.tasks[1].text, 'Communicate requirements to third parties. [Formerly PW.3.1]');
	assert.equal(rv1.tasks[0].id, 'RV.1.1');
});

test('stops on an SP 800-53 reference that is not in the catalog', () => {
	assert.throws(() => parseSsdf(sheets(), new Set(['sa-1'])), /PO\.1\.1: SP 800-53 references not in the catalog: sa-8\.3, sr-3/);
});

test('stops on a changed header, a task under the wrong practice, or mismatched sheets', () => {
	const read = (ssdf, practices = PRACTICES) => readWorkbook(workbook({ SSDF: ssdf, Groups: GROUPS, Practices: practices }));
	assert.throws(() => parseSsdf(read([['Practice', 'Tasks', 'Examples', 'References'], ...SSDF.slice(1)]), CONTROLS), /header/);
	const wrong = structuredClone(SSDF);
	wrong[2][1] = 'RV.1.9: Misplaced.';
	assert.throws(() => parseSsdf(read(wrong), CONTROLS), /RV\.1\.9 is listed under practice PO\.1/);
	assert.throws(() => parseSsdf(read(SSDF, PRACTICES.slice(0, 2)), CONTROLS), /different practices/);
});

// ---------- pages ----------

test('one page per practice, plus the overview block', () => {
	const pages = ssdfPages(parseSsdf(sheets(), CONTROLS), SOURCE);
	assert.deepEqual(
		pages.map((p) => p.file),
		['po-1.md', 'rv-1.md', 'index.md'],
	);
	assert.equal(practiceSlug('PW.4'), 'pw-4');
	const po1 = pages[0];
	assert.match(po1.frontmatter, /^title: 'PO\.1 Define Security Requirements'$/m);
	assert.match(po1.frontmatter, /^source:\n {2}id: 'SP 800-218'\n {2}version: '1\.1'\n {2}status: final\n {2}checked: '2026-10'$/m);
	assert.match(po1.body, /^## Practice\n\nEnsure requirements are known\.$/m);
	assert.match(po1.body, /^NIST lists two tasks for this practice\./m);
	assert.match(po1.body, /<a id="po\.1\.1"><\/a>\n\n### PO\.1\.1\n\nIdentify and document all security requirements\./);
	assert.match(po1.body, /^- \*\*Example 2:\*\* Review them at least annually\.$/m);
	assert.match(po1.body, /\[Prepare the Organization \(PO\)\]\(\/methods\/ssdf\/#po\)/);
	// SP 800-53 references are data only until SSDF-02 shows them.
	assert.doesNotMatch(po1.body, /SA-8|BSIMM/);
	const overview = pages[2];
	assert.equal(overview.frontmatter, null);
	assert.match(overview.body, /^### Respond to Vulnerabilities \(RV\)$/m);
	assert.match(overview.body, /^\| \[PO\.1 Define Security Requirements\]\(\/methods\/ssdf\/po-1\/\) \| PO\.1\.1, PO\.1\.2 \|$/m);
});

test('a rerun keeps hand-set front matter and guidance on practice pages', () => {
	const [po1] = ssdfPages(parseSsdf(sheets(), CONTROLS), SOURCE);
	const first = mergeGenerated(null, po1, SSDF_OWNED_KEYS);
	const edited = first
		.replace("  checked: '2026-10'\n---", "  checked: '2026-10'\nguidance: draft\nimplements: [sa-1]\n---")
		.replace(GUIDE, `${GUIDE}\n\n## How to apply it\n\nOur text.`);
	const next = mergeGenerated(edited, { ...po1, frontmatter: po1.frontmatter.replace("'2026-10'", "'2026-11'") }, SSDF_OWNED_KEYS);
	assert.match(next, /checked: '2026-11'\nguidance: draft\nimplements: \[sa-1\]\n---/);
	assert.ok(next.slice(next.indexOf(END)).includes('Our text.'));
});

// Tests for the consolidated Information Security and Privacy Policy (TPL-09).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assembleConsolidated, assemblePolicy, consolidatedBaselines, consolidatedFamilies } from '../../src/lib/template-assemble.ts';
import { consolidatedPage, consolidatedParams } from '../lib/template-pages.mjs';
import { renderVariables } from '../../src/lib/template-vars.ts';

const controls = [
	{ id: 'ac-1', label: 'AC-1', family: 'ac', baselines: ['Low', 'Moderate', 'High', 'Privacy'] },
	{ id: 'ac-2', label: 'AC-2', family: 'ac', baselines: ['Low', 'Moderate', 'High'] },
	{ id: 'ac-2.3', label: 'AC-2(3)', family: 'ac', baselines: ['Moderate', 'High'] },
	{ id: 'ac-3.14', label: 'AC-3(14)', family: 'ac', baselines: ['Privacy'] },
	{ id: 'pe-1', label: 'PE-1', family: 'pe', baselines: ['Low', 'Moderate', 'High'] },
	{ id: 'pe-3', label: 'PE-3', family: 'pe', baselines: ['Low', 'Moderate', 'High'] },
	{ id: 'pm-1', label: 'PM-1', family: 'pm', baselines: [] },
	{ id: 'pm-2', label: 'PM-2', family: 'pm', baselines: [] },
	{ id: 'pt-1', label: 'PT-1', family: 'pt', baselines: ['Privacy'] },
	{ id: 'pt-2', label: 'PT-2', family: 'pt', baselines: ['Privacy'] },
];
const common =
	'# {{family:title}} Policy\n\n:::guidance\nFamily intro. (XX-1)\n:::\n\n## Purpose\n\nWhat {{family:title}} needs. (XX-1a.1(a))\n\n## Scope\n\nEverything.\n\n' +
	'## Roles and responsibilities\n\n- The {{family:role}} is accountable. (XX-1a.1(a))\n\n## Policy statements\n\nIntro.\n\n## Review and update\n\nReview {{param:xx-01_odp.05}}. (XX-1c.1)\n\n' +
	':::federal\nShared federal text.\n:::\n';
const pmCommon =
	'# {{family:title}} Policy\n\n## Purpose\n\nPM purpose.\n\n## Roles and responsibilities\n\n- PM roles.\n\n## Program plan\n\n:::guidance\nWhy a plan.\n:::\n\n' +
	'- The {{family:role}} shall keep a plan, reviewed {{param:pm-01_odp.01}}. (PM-1a)\n\n## Policy statements\n\n## Review and update\n\n- Review it. (PM-1b)\n\n' +
	':::federal\nPM federal text. (PM-1a)\n:::\n';
const ac = { family: { id: 'ac', title: 'Access Control', role: 'ciso' }, clauses: [
	{ control: 'ac-2.3', title: 'Disable accounts', typical: { 'ac-02.03_odp.01': '90 days' }, body: '- Disable. (AC-2(3))' },
	{ control: 'ac-2', title: 'Account management', body: '- Manage. (AC-2a)\n' },
	{ control: 'ac-3.14', title: 'Individual access', body: '- Allow access. (AC-3(14))' },
] };
const pe = { family: { id: 'pe', title: 'Physical and Environmental Protection', role: 'facilities-manager' }, clauses: [
	{ control: 'pe-3', title: 'Physical access control', body: '- Control entry. (PE-3)' },
] };
const pm = {
	family: { id: 'pm', title: 'Program Management', role: 'ciso' },
	clauses: [{ control: 'pm-2', title: 'Program leadership role', body: '- Appoint. (PM-2)' }],
	common: pmCommon,
	typical: { 'pm-01_odp.01': 'annually' },
	organizationWide: true,
};
const pt = { family: { id: 'pt', title: 'PII Processing and Transparency', role: 'privacy-official' }, clauses: [
	{ control: 'pt-2', title: 'Authority to process', body: '- Cite the authority. (PT-2)' },
] };
const families = [ac, pe, pm, pt];
const assemble = (baseline, list = families, extra = {}) => assembleConsolidated({ common, families: list, controls, baseline, ...extra });

test('one document: the shared sections once, then a part per family in the order given', () => {
	const { source } = assemble('Moderate');
	assert.equal(source.match(/^## Purpose$/gm).length, 1);
	assert.equal(source.match(/^## Review and update$/gm).length, 1);
	assert.match(source, /^# \{\{family:title\}\} Policy\n\n:::guidance\nThis policy brings every family policy into one document/);
	assert.doesNotMatch(source, /Family intro/);
	const headings = [...source.matchAll(/^#{2,4} .*$/gm)].map((m) => m[0]);
	assert.deepEqual(headings, [
		'## Purpose',
		'## Scope',
		'## Control families',
		'## Roles and responsibilities',
		'## Policy statements',
		'### Access Control (AC)',
		'#### Account management (AC-2)',
		'#### Disable accounts (AC-2(3))',
		'### Physical and Environmental Protection (PE)',
		'#### Physical access control (PE-3)',
		'### Program Management (PM)',
		'#### Program plan (PM-1)',
		'#### Program leadership role (PM-2)',
		'## Review and update',
	]);
	// The shared federal block stays at the end, once.
	assert.match(source, /Review \{\{param:xx-01_odp\.05\}\}\. \(XX-1c\.1\)\n\n:::federal\nShared federal text\.\n:::\n$/);
});

test('clause text is the same as in the family policy', () => {
	const family = assemblePolicy({ common, family: ac.family, clauses: ac.clauses, controls, baseline: 'Moderate' }).source;
	const one = assemble('Moderate').source;
	for (const block of ['#### Account management (AC-2)\n\n- Manage. (AC-2a)', '#### Disable accounts (AC-2(3))\n\n- Disable. (AC-2(3))']) {
		assert.ok(one.includes(block));
		assert.ok(family.includes(block.replace(/^####/, '###')));
	}
});

test('-1 references stay XX-1 and the Control families section explains them, with each family and role', () => {
	const { source } = assemble('Low');
	assert.match(source, /What \{\{family:title\}\} needs\. \(XX-1a\.1\(a\)\)/);
	assert.match(source, /a reference such as \(XX-1a\.1\(a\)\) cites that item of the -1 control of every family below\./);
	assert.match(source, /PM-1 asks for different elements, so the Program Management part opens with its own statements for it\./);
	assert.match(source, /\| Access Control \(AC\) \| AC-1 \| \{\{org:ciso\}\} \|\n\| Physical and Environmental Protection \(PE\) \| PE-1 \| \{\{org:facilities-manager\}\} \|\n\| Program Management \(PM\) \| PM-1 \| \{\{org:ciso\}\} \|/);
	assert.match(source, /- Where the table names a role other than the \{\{family:role\}\} for a family, that role shall be accountable/);
	assert.doesNotMatch(assemble('Low', [ac]).source, /Where the table names a role other than/);
});

test('each variant has only the clauses in its baseline; PM is in every variant; PT only in Privacy', () => {
	const low = assemble('Low');
	assert.deepEqual(low.families, ['ac', 'pe', 'pm']);
	assert.deepEqual(low.controls, ['ac-1', 'ac-2', 'pe-1', 'pe-3', 'pm-1', 'pm-2']);
	assert.deepEqual(low.typical, { 'pm-01_odp.01': 'annually' });
	assert.deepEqual(assemble('Moderate').typical, { 'ac-02.03_odp.01': '90 days', 'pm-01_odp.01': 'annually' });
	const privacy = assemble('Privacy');
	assert.deepEqual(privacy.families, ['ac', 'pm', 'pt']);
	assert.deepEqual(privacy.controls, ['ac-1', 'ac-3.14', 'pm-1', 'pm-2', 'pt-1', 'pt-2']);
	assert.match(privacy.source, /\| PII Processing and Transparency \(PT\) \| PT-1 \| \{\{org:privacy-official\}\} \|/);
	assert.deepEqual(consolidatedBaselines(families, controls), ['Low', 'Moderate', 'High', 'Privacy']);
	assert.deepEqual(consolidatedFamilies(families, controls, 'High').map((f) => f.family.id), ['ac', 'pe', 'pm']);
});

test("a family's own opening sections add only what the shared ones lack, plus their federal blocks, resolved", () => {
	const { source } = assemble('High');
	const part = source.slice(source.indexOf('### Program Management (PM)'), source.indexOf('## Review and update'));
	assert.equal(
		part,
		'### Program Management (PM)\n\n#### Program plan (PM-1)\n\n:::guidance\nWhy a plan.\n:::\n\n' +
			'- The {{org:ciso}} shall keep a plan, reviewed {{param:pm-01_odp.01}}. (PM-1a)\n\n' +
			':::federal\nPM federal text. (PM-1a)\n:::\n\n#### Program leadership role (PM-2)\n\n- Appoint. (PM-2)\n\n',
	);
	assert.doesNotMatch(source, /PM purpose|PM roles|Review it\. \(PM-1b\)/);
});

test('a family with no clause in the variant says so in its part', () => {
	const bare = { family: ac.family, clauses: [] };
	assert.match(assemble('Low', [bare]).source, /### Access Control \(AC\)\n\nThis policy has no Access Control statements beyond the shared sections for the Low baseline\./);
});

test('summary mode replaces each part for the site preview', () => {
	const { source, controls: covered } = assemble('Moderate', families, { summary: (f, ids) => `See ${f.id}: ${ids.length - 1}.` });
	assert.match(source, /### Access Control \(AC\)\n\nSee ac: 2\.\n\n### Physical and Environmental Protection \(PE\)\n\nSee pe: 1\./);
	assert.doesNotMatch(source, /#### /);
	assert.deepEqual(covered, assemble('Moderate').controls);
});

test('the Policy statements heading is required', () => {
	assert.throws(() => assembleConsolidated({ common: '# T\n\n## Purpose\n', families, controls, baseline: 'Low' }), /needs a "## Policy statements" heading/);
});

// Page and parameters, on a small catalog.
const catalog = {
	source: 'SP 800-53 release 9.9.9',
	controls: [
		{ id: 'ac-1', label: 'AC-1', title: 'Policy and Procedures', family: 'ac', baselines: ['Low', 'Moderate', 'High'], params: ['ac-01_odp.05'] },
		{ id: 'ac-2', label: 'AC-2', title: 'Account Management', family: 'ac', baselines: ['Low', 'Moderate', 'High'], params: [] },
		{ id: 'pm-1', label: 'PM-1', title: 'Program Plan', family: 'pm', baselines: [], params: ['pm-01_odp.01'] },
	],
	params: {
		'ac-01_odp.05': { label: 'frequency', prompt: 'the frequency at which the current access control policy is reviewed and updated' },
		'pm-01_odp.01': { label: 'frequency', prompt: 'the frequency at which to review the program plan' },
	},
};
const variables = { name: { label: 'Organization name' }, ciso: { label: 'Chief Information Security Officer' } };
const pageFamilies = [
	{ id: 'ac', title: 'Access Control', role: 'ciso', stage: 'core' },
	{ id: 'pm', title: 'Program Management', role: 'ciso', stage: 'foundation', baseline: 'none', common: { data: { status: 'draft' }, body: pmCommon } },
];
const pageClauses = [
	{ id: 'policy/ac/ac-2', control: 'ac-2', title: 'Account management', status: 'draft', body: '- Manage. (AC-2a)' },
	{ id: 'policy/pm/pm-2', control: 'pm-2', title: 'Leadership', status: 'draft', body: '- Appoint. (PM-2)' },
];
const sharedCommon = { data: { status: 'draft', typical: { 'xx-01_odp.05': 'annually' } }, body: common };

test('the shared -1 parameters take the first family\'s 800-53A text, renamed for this policy', () => {
	const params = consolidatedParams(catalog, pageFamilies);
	assert.deepEqual(Object.keys(params), ['xx-01_odp.05']);
	assert.equal(params['xx-01_odp.05'].prompt, 'the frequency at which the current information security and privacy policy is reviewed and updated');
	const text = renderVariables('{{param:xx-01_odp.05}}', { variables, params, family: { id: 'xx', title: 'T', role: 'ciso' } }, 'md');
	assert.equal(text, '[Fill in: the frequency at which the current information security and privacy policy is reviewed and updated]');
});

test('the page lists the -1 controls, counts per variant, downloads per baseline and a summarized preview', () => {
	const { file, text, summary } = consolidatedPage({ families: pageFamilies, clauses: pageClauses, common: sharedCommon, catalog, variables, version: '1.2.3' });
	assert.equal(file, 'policies/consolidated.md');
	assert.match(text, /^---\ntitle: 'Information Security and Privacy Policy'\n/);
	assert.match(text, /\n {2}label: 'Consolidated policy'\n {2}order: 0\ncontrols: \[ac-1, pm-1\]\n---\n/);
	assert.match(text, /\| \[Access Control \(AC\)\]\(\/templates\/policies\/ac\/\) \| 2 \| 2 \| 2 \|\n\| \[Program Management \(PM\)\]\(\/templates\/policies\/pm\/\) \| 1 \| 1 \| 1 \|/);
	assert.match(text, /\| Moderate \| \[Word\]\(\/downloads\/policies\/consolidated-policy-moderate\.docx\)/);
	assert.match(text, /## Preview \(Moderate baseline, annotated\)/);
	assert.match(text, /The statements of the \[Access Control Policy\]\(\/templates\/policies\/ac\/\), Moderate variant: 1 controls and enhancements\./);
	assert.match(text, /Typical: annually/);
	assert.doesNotMatch(text, /\{\{/);
	assert.deepEqual(summary, { title: 'Information Security and Privacy Policy', href: '/templates/policies/consolidated/', type: 'policy', stage: 'foundation', status: 'draft' });
});

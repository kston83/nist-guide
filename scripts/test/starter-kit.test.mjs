// Tests for the starter kit (PROG-02).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { resolveStarterKit, starterKitFile, starterKitPage } from '../lib/starter-kit.mjs';

const catalog = {
	source: 'SP 800-53 release 9.9.9',
	controls: [
		{ id: 'ac-1', label: 'AC-1', family: 'ac', baselines: ['Low', 'Moderate', 'High'] },
		{ id: 'ac-2', label: 'AC-2', family: 'ac', baselines: ['Low', 'Moderate', 'High'] },
		{ id: 'pl-4', label: 'PL-4', family: 'pl', baselines: ['Low', 'Moderate', 'High'] },
		{ id: 'ca-5', label: 'CA-5', family: 'ca', baselines: ['Low', 'Moderate', 'High'] },
	],
};
const sources = {
	families: new Map([['ac', { id: 'ac', title: 'Access Control' }]]),
	clauses: [{ id: 'policy/ac/ac-2', control: 'ac-2' }],
	templates: [{ id: 'forms/poam', title: 'POA&M', type: 'form', controls: ['ca-5'] }],
	catalog,
};
const kit = (items) => resolveStarterKit({ ...sources, starterKit: { items } });

test('items resolve to rows with the files for each baseline', () => {
	const rows = kit([
		{ include: 'policies' },
		{ template: 'forms/poam' },
		{ include: 'worksheets' },
		{ title: 'Rules of Behavior', controls: ['pl-4'], planned: true },
	]);
	assert.deepEqual(rows.map((r) => [r.title, r.planned]), [
		['Family policies (AC)', false],
		['POA&M', false],
		['Decision worksheets for those families', false],
		['Rules of Behavior', true],
	]);
	assert.deepEqual(rows[0].files('Moderate'), [
		'policies/ac-policy-moderate.md',
		'policies/ac-policy-moderate.docx',
		'policies/ac-policy-moderate-annotated.md',
		'policies/ac-policy-moderate-annotated.docx',
	]);
	assert.ok(rows[1].files('Low').includes('forms/poam.csv'));
	assert.deepEqual(rows[2].files('High'), ['worksheets/ac-decisions-high.csv']);
	assert.deepEqual(rows[3].files('Low'), []);
});

test('unknown templates and malformed items fail', () => {
	assert.throws(() => kit([{ template: 'plans/nope' }]), /item 1: no template "plans\/nope"/);
	assert.throws(() => kit([{ title: 'Something' }]), /item 1: use template:/);
});

test('the page marks planned items and links a zip per baseline', () => {
	const page = starterKitPage({ rows: kit([{ template: 'forms/poam' }, { title: 'Rules of Behavior', controls: ['pl-4'], planned: true }]), catalog, version: '1.0.0' });
	assert.match(page, /\| \[POA&M\]\(\/templates\/forms\/poam\/\) \| CA-5 \| Included \|/);
	assert.match(page, /\| Rules of Behavior \| PL-4 \| Coming in a later kit version \|/);
	assert.ok(page.includes(`(/downloads/${starterKitFile('High')})`));
});

test('an organization-wide policy and worksheet go in every baseline kit', () => {
	const pm = { id: 'pm', title: 'Program Management', baseline: 'none' };
	const rows = resolveStarterKit({
		...sources,
		families: new Map([...sources.families, ['pm', pm]]),
		starterKit: { items: [{ include: 'policies' }, { include: 'worksheets' }] },
	});
	for (const b of ['Low', 'High']) {
		assert.ok(rows[0].files(b).includes('policies/pm-policy-organization.md'));
		assert.ok(rows[1].files(b).includes('worksheets/pm-decisions-organization.csv'));
	}
});

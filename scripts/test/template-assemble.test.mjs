// Tests for family policy assembly (TPL-03).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assemblePolicy, policyBaselines } from '../../src/lib/template-assemble.ts';

const controls = [
	{ id: 'ac-1', label: 'AC-1', family: 'ac', baselines: ['Low', 'Moderate', 'High', 'Privacy'] },
	{ id: 'ac-2', label: 'AC-2', family: 'ac', baselines: ['Low', 'Moderate', 'High'] },
	{ id: 'ac-2.3', label: 'AC-2(3)', family: 'ac', baselines: ['Moderate', 'High'] },
	{ id: 'ac-2.6', label: 'AC-2(6)', family: 'ac', baselines: [] },
	{ id: 'ac-3', label: 'AC-3', family: 'ac', baselines: ['Low', 'Moderate', 'High'] },
	{ id: 'ac-3.14', label: 'AC-3(14)', family: 'ac', baselines: ['Privacy'] },
	{ id: 'au-1', label: 'AU-1', family: 'au', baselines: ['Low'] },
];
const family = { id: 'ac', title: 'Access Control', role: 'ciso' };
const common = '# {{family:title}} Policy\n\n## Purpose\n\nText. (XX-1a.1(a))\n\n## Policy statements\n\nIntro.\n\n## Review\n\nReview it. (XX-1c.1) Not XX-12.\n';
// Deliberately out of catalog order.
const clauses = [
	{ control: 'ac-3', title: 'Access enforcement', body: '- Enforce. (AC-3)\n' },
	{ control: 'ac-2.3', title: 'Disable accounts', typical: { 'ac-02.03_odp.01': '90 days' }, body: '- Disable. (AC-2(3))' },
	{ control: 'ac-2', title: 'Account management', typical: { 'ac-02_odp.10': 'quarterly' }, body: '- Manage. (AC-2a)' },
	{ control: 'ac-2.6', title: 'Dynamic privilege management', body: '- Not in a baseline.' },
];
const assemble = (baseline, list = clauses, cat = controls) =>
	assemblePolicy({ common, family, clauses: list, controls: cat, baseline });

test('clauses go under Policy statements, in catalog order, for the baseline', () => {
	const { source, controls: covered } = assemble('Moderate');
	assert.equal(
		source,
		'# {{family:title}} Policy\n\n## Purpose\n\nText. (AC-1a.1(a))\n\n## Policy statements\n\nIntro.\n\n' +
			'### Account management (AC-2)\n\n- Manage. (AC-2a)\n\n' +
			'### Disable accounts (AC-2(3))\n\n- Disable. (AC-2(3))\n\n' +
			'### Access enforcement (AC-3)\n\n- Enforce. (AC-3)\n\n' +
			'## Review\n\nReview it. (AC-1c.1) Not XX-12.\n',
	);
	assert.deepEqual(covered, ['ac-1', 'ac-2', 'ac-2.3', 'ac-3']);
});

test('Low leaves out enhancements that are only in Moderate and High', () => {
	const { source, controls: covered } = assemble('Low');
	assert.doesNotMatch(source, /AC-2\(3\)/);
	assert.deepEqual(covered, ['ac-1', 'ac-2', 'ac-3']);
});

test('clauses for controls in no baseline appear in no variant', () => {
	for (const b of ['Low', 'Moderate', 'High', 'Privacy']) assert.doesNotMatch(assemble(b).source, /AC-2\(6\)/);
});

test('typical values are merged from the clauses in the variant', () => {
	assert.deepEqual(assemble('Moderate').typical, { 'ac-02_odp.10': 'quarterly', 'ac-02.03_odp.01': '90 days' });
	assert.deepEqual(assemble('Low').typical, { 'ac-02_odp.10': 'quarterly' });
});

test('a control added to a baseline appears in that variant with no other change', () => {
	const moved = controls.map((c) => (c.id === 'ac-2.6' ? { ...c, baselines: ['High'] } : c));
	assert.match(assemble('High', clauses, moved).source, /### Dynamic privilege management \(AC-2\(6\)\)/);
	assert.doesNotMatch(assemble('Moderate', clauses, moved).source, /AC-2\(6\)/);
});

test('an empty variant says so instead of leaving the section blank', () => {
	assert.match(assemble('Privacy', []).source, /## Policy statements\n\nIntro\.\n\nThis policy has no statements beyond the sections above for the Privacy baseline\.\n\n## Review/);
});

test('the Privacy variant exists only when a clause of the family is in it', () => {
	assert.deepEqual(policyBaselines('ac', clauses, controls), ['Low', 'Moderate', 'High']);
	const withPrivacy = [...clauses, { control: 'ac-3.14', title: 'Individual access', body: '- x' }];
	assert.deepEqual(policyBaselines('ac', withPrivacy, controls), ['Low', 'Moderate', 'High', 'Privacy']);
});

test('the Policy statements heading is required; statements can be the last section', () => {
	assert.throws(
		() => assemblePolicy({ common: '# T\n\n## Purpose\n', family, clauses, controls, baseline: 'Low' }),
		/needs a "## Policy statements" heading/,
	);
	const last = assemblePolicy({ common: '# T\n\n## Policy statements\n', family, clauses, controls, baseline: 'Low' });
	assert.ok(last.source.endsWith('### Access enforcement (AC-3)\n\n- Enforce. (AC-3)\n'));
});

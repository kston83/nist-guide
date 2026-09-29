// Tests for template source schemas and checks (TPL-01).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { clauseProblems, templateProblems, templateSchemas } from '../../src/lib/template-schema.ts';

const catalog = {
	controls: [
		{ id: 'ac-2', params: ['ac-02_odp.01', 'ac-02_odp.02'] },
		{ id: 'ac-2.3', params: ['ac-02.03_odp.01'] },
		{ id: 'ir-8', params: [] },
	],
};
const { clause, template, family, variable } = templateSchemas(catalog);
const messages = (result) => result.error?.issues.map((i) => `${i.path.join('.')}: ${i.message}`) ?? [];

const goodClause = { control: 'ac-2', title: 'Account management', status: 'draft', stage: 'core' };

test('a valid clause parses, with typical and set values for its own parameters', () => {
	const r = clause.safeParse({
		...goodClause,
		reviewed: '2026-09-28',
		typical: { 'ac-02_odp.01': 'a completed request' },
		set: { 'ac-02_odp.02': 'Set in the procedure.' },
	});
	assert.ok(r.success, messages(r).join('\n'));
	assert.ok(r.data.reviewed instanceof Date);
});

test('clauses reject unknown controls, with a lowercase hint', () => {
	assert.match(messages(clause.safeParse({ ...goodClause, control: 'ac-99' }))[0], /Unknown control id "ac-99"/);
	assert.match(messages(clause.safeParse({ ...goodClause, control: 'AC-2' }))[0], /Write it in lowercase: "ac-2"/);
});

test('clauses reject a bad status or stage, and unknown keys', () => {
	assert.match(messages(clause.safeParse({ ...goodClause, status: 'done' }))[0], /^status:/);
	assert.match(messages(clause.safeParse({ ...goodClause, stage: 'later' }))[0], /^stage:/);
	assert.equal(clause.safeParse({ ...goodClause, owner: 'someone' }).success, false);
});

test('typical and set values must name the clause control’s parameters', () => {
	const [m] = messages(clause.safeParse({ ...goodClause, typical: { 'ac-02.03_odp.01': 'x' } }));
	assert.match(m, /^typical\.ac-02\.03_odp\.01: "ac-02\.03_odp\.01" is not a parameter of ac-2/);
});

test('variables must use the org:, param: or fill: form', () => {
	assert.ok(clause.safeParse({ ...goodClause, variables: ['org:name', 'param:ac-02_odp.01', 'fill:a prompt'] }).success);
	assert.equal(clause.safeParse({ ...goodClause, variables: ['name'] }).success, false);
});

const goodTemplate = {
	title: 'Incident Response Plan',
	type: 'plan',
	description: 'The plan IR-8 requires.',
	controls: ['ir-8'],
	status: 'draft',
	stage: 'core',
};

test('templates need a known type, at least one control, and valid SSDF ids', () => {
	assert.ok(template.safeParse({ ...goodTemplate, ssdf: ['RV.1', 'PO.3'] }).success);
	assert.match(messages(template.safeParse({ ...goodTemplate, type: 'memo' }))[0], /^type:/);
	assert.match(messages(template.safeParse({ ...goodTemplate, controls: [] }))[0], /List the controls/);
	assert.match(messages(template.safeParse({ ...goodTemplate, ssdf: ['XX.1'] }))[0], /SSDF practice id/);
});

test('template typical values must belong to one of the listed controls', () => {
	assert.ok(template.safeParse({ ...goodTemplate, controls: ['ac-2', 'ir-8'], typical: { 'ac-02_odp.01': 'x' } }).success);
	assert.match(
		messages(template.safeParse({ ...goodTemplate, typical: { 'ac-02_odp.01': 'x' } }))[0],
		/^typical\.ac-02_odp\.01: "ac-02_odp\.01" is not a parameter of any control this template lists \(ir-8\)/,
	);
});

test('family metadata needs a title and role key; questions name controls and who decides', () => {
	const good = {
		title: 'Access Control',
		role: 'ciso',
		stage: 'core',
		questions: [{ question: 'Which account types?', controls: ['ac-2'], decides: 'System owner' }],
	};
	assert.ok(family.safeParse(good).success);
	assert.deepEqual(family.parse({ title: 'Access Control', role: 'ciso', stage: 'core' }).questions, []);
	assert.equal(family.safeParse({ ...good, stage: undefined }).success, false);
	assert.equal(family.safeParse({ ...good, role: 'Chief Officer' }).success, false);
	assert.equal(family.safeParse({ ...good, questions: [{ question: 'Q', controls: ['zz-1'], decides: 'X' }] }).success, false);
});

test('variables need a label', () => {
	assert.ok(variable.safeParse({ label: 'Organization name' }).success);
	assert.equal(variable.safeParse({ description: 'no label' }).success, false);
});

test('a clause must live at policy/<family>/<control>, once per control', () => {
	assert.deepEqual(clauseProblems([{ id: 'policy/ac/ac-2.3', data: { control: 'ac-2.3' } }]), []);
	assert.deepEqual(
		clauseProblems([
			{ id: 'policy/ac/ac-2', data: { control: 'ac-2' } },
			{ id: 'policy/au/ac-2', data: { control: 'ac-2' } },
		]),
		[
			'templates/policy/au/ac-2.md: a clause for ac-2 belongs at templates/policy/ac/ac-2.md.',
			'templates/policy/au/ac-2.md: ac-2 already has a clause in templates/policy/ac/ac-2.md.',
		],
	);
});

test('a template’s folder must match its type', () => {
	assert.deepEqual(templateProblems([{ id: 'plans/incident-response-plan', data: { type: 'plan' } }]), []);
	assert.deepEqual(templateProblems([{ id: 'reports/risk-assessment-report', data: { type: 'report' } }]), []);
	assert.deepEqual(templateProblems([{ id: 'plans/x', data: { type: 'form' } }]), [
		'templates/plans/x.md: type "form" templates belong under templates/forms/.',
	]);
});

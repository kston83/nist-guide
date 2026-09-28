// Tests for the template lint (QA-05).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { lintTemplates } from '../lib/template-lint.mjs';

const catalog = {
	controls: [
		{ id: 'ac-1', label: 'AC-1', params: ['ac-1_prm_1', 'ac-01_odp.01', 'ac-01_odp.02'] },
		{ id: 'ac-2', label: 'AC-2', params: ['ac-2_prm_1', 'ac-02_odp.01', 'ac-02_odp.02', 'ac-02_odp.03'] },
	],
	params: {
		'ac-1_prm_1': { aggregates: ['ac-01_odp.01'] },
		'ac-01_odp.01': {},
		'ac-01_odp.02': {},
		'ac-2_prm_1': { aggregates: ['ac-02_odp.02'] },
		'ac-02_odp.01': {},
		'ac-02_odp.02': {},
		'ac-02_odp.03': {},
	},
};
const good = () => ({
	variables: { name: { label: 'Organization name' }, ciso: { label: 'CISO' } },
	common: {
		body: '# {{family:title}} Policy\n\n:::guidance\nWhy these sections exist and what assessors check for.\n:::\n\n- {{org:name}} shall disseminate to {{param:xx-01_odp.01}} and {{param:xx-01_odp.02}}. (XX-1a)\n',
	},
	families: new Map([['ac', { id: 'ac', role: 'ciso' }]]),
	clauses: [
		{
			id: 'policy/ac/ac-2',
			control: 'ac-2',
			typical: { 'ac-02_odp.01': 'x' },
			set: { 'ac-02_odp.03': 'Set to the procedure.' },
			body: ':::guidance\nAC-2 makes account management a controlled life cycle.\n:::\n\n- The owner shall require {{param:ac-02_odp.01}}. (AC-2c)\n- The owner shall record {{param:ac-2_prm_1}}. (AC-2d)\n',
		},
	],
	templates: [{ id: 'plans/ir-plan', controls: ['ir-8'], body: '# Plan\n\nThe team shall respond. (IR-8a)\n' }],
});
const lint = (mutate = () => {}) => {
	const sources = good();
	mutate(sources);
	return lintTemplates(sources, catalog);
};

test('valid sources pass, counting aggregated parameters as handled', () => {
	assert.deepEqual(lint(), []);
});

test('a clause with no shall statement outside guidance fails', () => {
	const problems = lint((s) => {
		s.clauses[0].body = ':::guidance\nThe owner shall do it. (AC-2a)\n:::\n\nNothing here.\n';
		s.clauses[0].typical = {};
		s.clauses[0].set = { 'ac-02_odp.01': 'x', 'ac-02_odp.02': 'x', 'ac-02_odp.03': 'x' };
	});
	assert.deepEqual(problems, ['templates/policy/ac/ac-2.md: no "shall" statement outside guidance']);
});

test('shall statements need a trailing control reference, nested parentheses allowed', () => {
	const problems = lint((s) => {
		s.clauses[0].body += '- The owner shall act.\n- The owner shall disable. (AC-2(3)(a))\n';
	});
	assert.deepEqual(problems, ['templates/policy/ac/ac-2.md: statement has no trailing control reference: "- The owner shall act."']);
});

test('every parameter must be a field or listed under set, not both', () => {
	assert.deepEqual(
		lint((s) => delete s.clauses[0].set),
		['templates/policy/ac/ac-2.md: parameter ac-02_odp.03 is neither a {{param:ac-02_odp.03}} field nor listed under set'],
	);
	assert.deepEqual(
		lint((s) => (s.clauses[0].set['ac-02_odp.01'] = 'x')),
		['templates/policy/ac/ac-2.md: parameter ac-02_odp.01 is both a field and listed under set'],
	);
});

test('a shown selection also handles the parameters nested in its choices', () => {
	const problems = lint((s) => {
		catalog.params['ac-02_odp.01'] = { select: { howMany: 'one', choices: ['x'], nested: ['ac-02_odp.03'] } };
		delete s.clauses[0].set;
	});
	catalog.params['ac-02_odp.01'] = {};
	assert.deepEqual(problems, []);
});

test('typical values must belong to a parameter shown as a field', () => {
	assert.deepEqual(
		lint((s) => (s.clauses[0].typical['ac-02_odp.03'] = 'y')),
		['templates/policy/ac/ac-2.md: typical value for ac-02_odp.03, which the clause never shows as a field'],
	);
});

test('the common sections must show every -1 parameter of each family with a policy', () => {
	assert.deepEqual(
		lint((s) => (s.common.body = s.common.body.replace(' and {{param:xx-01_odp.02}}', ''))),
		['templates/policy/_common.md: ac-01_odp.02 (AC-1) is not a field; add {{param:xx-01_odp.02}}'],
	);
});

test('templates must list controls', () => {
	assert.deepEqual(lint((s) => (s.templates[0].controls = [])), ['templates/plans/ir-plan.md: lists no controls']);
});

test('guidance that survives into the clean edition fails', () => {
	// Guidance text pasted into the body as well as the guidance block.
	const problems = lint((s) => (s.clauses[0].body += '\nAC-2 makes account management a controlled life cycle.\n'));
	assert.deepEqual(problems, ['templates/policy/ac/ac-2.md: clean edition still contains guidance: "AC-2 makes account management a controlled life cycle...."']);
});

test('variables used by no template fail; a family role counts as a use', () => {
	assert.deepEqual(lint((s) => (s.variables.cfo = { label: 'CFO' })), ['templates/variables.yml: "cfo" is used by no template']);
	assert.deepEqual(lint((s) => s.families.clear()).filter((p) => p.includes('variables.yml')), [
		'templates/variables.yml: "ciso" is used by no template',
	]);
});

test("a family's own common sections are checked for its -1 parameters, written in full", () => {
	const own = (s, body) => {
		s.families.set('ac', { id: 'ac', role: 'ciso', common: { body } });
	};
	assert.deepEqual(lint((s) => own(s, '# P\n\n- The owner shall share it with {{param:ac-01_odp.01}} and {{param:ac-01_odp.02}}. (AC-1a)\n')), []);
	assert.deepEqual(lint((s) => own(s, '# P\n\n- The owner shall share it with {{param:ac-01_odp.01}}. (AC-1a)\n')), [
		'templates/policy/ac/_common.md: ac-01_odp.02 (AC-1) is not a field; add {{param:ac-01_odp.02}}',
	]);
	assert.deepEqual(lint((s) => own(s, '# P\n\n- The owner shall share it. \n')).slice(0, 1), [
		'templates/policy/ac/_common.md: statement has no trailing control reference: "- The owner shall share it."',
	]);
});

// Tests for fill-in variable rendering (TPL-02).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { paramPrompt, renderVariables, variablesIn, VariableError } from '../../src/lib/template-vars.ts';

const ctx = {
	variables: { name: { label: 'Organization name' }, ciso: { label: 'Chief Information Security Officer' } },
	params: {
		'ac-02_odp.10': { label: 'frequency', prompt: 'the frequency of account review' },
		'ac-1_prm_1': { label: 'organization-defined personnel or roles' },
		'ac-01_odp.03': { select: { howMany: 'one-or-more', choices: ['organization-level', 'system-level'] } },
		'ac-01_odp.05': { label: 'frequency', prompt: 'the frequency at which the policy is reviewed' },
		'au-01_odp.05': { label: 'frequency', prompt: 'the frequency at which the audit policy is reviewed' },
	},
	typical: { 'ac-02_odp.10': 'quarterly' },
};
const family = { id: 'au', title: 'Audit and Accountability', role: 'ciso' };

test('org variables render as a labelled field in each target', () => {
	const src = '{{org:name}} shall';
	assert.equal(renderVariables(src, ctx, 'site'), '<span class="tpl-field tpl-org">Organization name</span> shall');
	assert.equal(renderVariables(src, ctx, 'md'), '[Organization name] shall');
	assert.equal(renderVariables(src, ctx, 'docx'), '[\\[Organization name\\]]{custom-style="Fill-in"} shall');
});

test('parameters use the 800-53A description and the typical value', () => {
	const src = 'review {{param:ac-02_odp.10}}.';
	assert.equal(renderVariables(src, ctx, 'md'), 'review [Fill in: the frequency of account review. Typical: quarterly].');
	assert.equal(
		renderVariables(src, ctx, 'site'),
		'review <span class="tpl-field tpl-param">Fill in: the frequency of account review <span class="tpl-typical">Typical: quarterly</span></span>.',
	);
	assert.equal(
		renderVariables(src, ctx, 'docx'),
		'review [\\[Fill in: the frequency of account review. Typical: quarterly\\]]{custom-style="Fill-in"}.',
	);
});

test('parameters without a description or typical value fall back to the label', () => {
	assert.equal(renderVariables('{{param:ac-1_prm_1}}', ctx, 'md'), '[Fill in: personnel or roles]');
	assert.equal(paramPrompt({}), 'Fill in: value');
});

test('selection parameters list their choices', () => {
	assert.equal(
		renderVariables('{{ param:ac-01_odp.03 }}', ctx, 'md'),
		'[Select one or more: organization-level; system-level]',
	);
	assert.equal(paramPrompt({ select: { howMany: 'one', choices: ['a', 'b'] } }), 'Select one: a; b');
	// OSCAL leaves a space after an embedded assignment.
	assert.equal(
		paramPrompt({ select: { howMany: 'one-or-more', choices: ['standard', '[Assignment: organization-defined other] '] } }),
		'Select one or more: standard; [Assignment: organization-defined other]',
	);
});

test('references to 800-53A parameter labels are dropped from descriptions and labels', () => {
	assert.equal(
		paramPrompt({ prompt: 'the event types (subset of AU-02_ODP[01]) for logging within the system' }),
		'Fill in: the event types for logging within the system',
	);
	assert.equal(
		paramPrompt({ prompt: 'alerts when audit failure events (defined in AU-05(02)_ODP[03]) occur' }),
		'Fill in: alerts when audit failure events occur',
	);
	assert.equal(paramPrompt({ label: 'organization-defined event types (subset of AU-02_ODP[01])' }), 'Fill in: event types');
	// Other parentheticals stay.
	assert.equal(paramPrompt({ prompt: 'attributes (as required)' }), 'Fill in: attributes (as required)');
});

test('parameters inserted in a description read as text, not OSCAL', () => {
	const params = {
		'sa-11_odp.01': { select: { howMany: 'one-or-more', choices: ['unit', 'integration', 'system', 'regression'] } },
		'sa-11_odp.02': { prompt: 'frequency at which to conduct {{ insert: param, sa-11_odp.01 }} testing/evaluation' },
		'sa-09.05_odp.01': { select: { howMany: 'one-or-more', choices: ['information processing', 'information or data', 'system services'] } },
		'sa-09.05_odp.03': { prompt: 'requirements for restricting the location of {{ insert: param, sa-09.05_odp.01 }}' },
		'ps-03.04_odp.01': { prompt: 'information types that require individuals to meet {{ insert: param, ps-03.04_odp.02 }}' },
		'ps-03.04_odp.02': { label: 'citizenship requirements' },
	};
	assert.equal(
		paramPrompt(params['sa-11_odp.02'], params),
		'Fill in: frequency at which to conduct the selected unit, integration, system or regression testing/evaluation',
	);
	assert.equal(
		paramPrompt(params['sa-09.05_odp.03'], params),
		'Fill in: requirements for restricting the location of the selected information processing; information or data; or system services',
	);
	assert.equal(paramPrompt(params['ps-03.04_odp.01'], params), 'Fill in: information types that require individuals to meet the citizenship requirements');
	assert.equal(
		renderVariables('{{param:sa-11_odp.02}}', { ...ctx, params }, 'md'),
		'[Fill in: frequency at which to conduct the selected unit, integration, system or regression testing/evaluation]',
	);
});

test('one-off fill-ins show their prompt; site text is HTML-escaped', () => {
	assert.equal(renderVariables('{{fill:date <approved>}}', ctx, 'md'), '[Fill in: date <approved>]');
	assert.equal(
		renderVariables('{{fill:date <approved>}}', ctx, 'site'),
		'<span class="tpl-field tpl-fill">Fill in: date &lt;approved&gt;</span>',
	);
	assert.equal(
		renderVariables('{{fill:a_b}}', ctx, 'docx'),
		'[\\[Fill in: a\\_b\\]]{custom-style="Fill-in"}',
	);
});

test('family variables and the xx- prefix resolve against the family', () => {
	const src = 'The {{family:role}} shall review the {{family:title}} policy {{param:xx-01_odp.05}}.';
	assert.equal(
		renderVariables(src, { ...ctx, family }, 'md'),
		'The [Chief Information Security Officer] shall review the Audit and Accountability policy [Fill in: the frequency at which the audit policy is reviewed].',
	);
});

test('family variables and xx- fail outside a family context', () => {
	assert.throws(() => renderVariables('{{family:title}}', ctx, 'md'), /only in policy\/_common\.md/);
	assert.throws(() => renderVariables('{{param:xx-01_odp.05}}', ctx, 'md'), /only in policy\/_common\.md/);
});

test('unknown variables and parameters fail, listing every problem', () => {
	assert.throws(
		() => renderVariables('{{org:nope}} {{param:zz-01_odp.01}} {{bogus}} {{fill:}} {{family:owner}}', { ...ctx, family }, 'site'),
		(err) =>
			err instanceof VariableError &&
			/unknown variable "org:nope"/.test(err.message) &&
			/unknown parameter "zz-01_odp.01"/.test(err.message) &&
			/unknown variable "\{\{bogus\}\}"/.test(err.message) &&
			/unknown variable "\{\{fill:\}\}"/.test(err.message) &&
			/unknown family variable "\{\{family:owner\}\}"/.test(err.message),
	);
});

test('variablesIn lists references as written', () => {
	assert.deepEqual(variablesIn('a {{org:name}} b {{ param:ac-02_odp.10 }} c {{fill:x}}'), [
		'org:name',
		'param:ac-02_odp.10',
		'fill:x',
	]);
});

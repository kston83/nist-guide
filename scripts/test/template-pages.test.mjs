// Tests for generated template pages (TPL-07).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { indexPage, policyFile, policyPage, templateFile, templatePage } from '../lib/template-pages.mjs';

const catalog = {
	source: 'SP 800-53 release 9.9.9',
	controls: [
		{ id: 'ac-1', label: 'AC-1', title: 'Policy and Procedures', family: 'ac', baselines: ['Low', 'Moderate', 'High'], params: ['ac-01_odp.01'] },
		{ id: 'ac-2', label: 'AC-2', title: 'Account Management', family: 'ac', baselines: ['Low', 'Moderate', 'High'], params: ['ac-2_prm_1', 'ac-02_odp.10'] },
		{ id: 'ac-2.3', label: 'AC-2(3)', title: 'Disable Accounts', family: 'ac', baselines: ['Moderate', 'High'], params: [] },
		{ id: 'ir-8', label: 'IR-8', title: 'Incident Response Plan', family: 'ir', baselines: ['Low'], params: [] },
	],
	params: {
		'ac-01_odp.01': { prompt: 'personnel to receive the policy' },
		'ac-2_prm_1': { label: 'organization-defined frequency', aggregates: ['ac-02_odp.10'] },
		'ac-02_odp.10': { prompt: 'the frequency of account review' },
	},
};
const variables = { name: { label: 'Organization name' }, ciso: { label: 'Chief Information Security Officer' } };
const family = { id: 'ac', title: 'Access Control', role: 'ciso', stage: 'core', questions: [] };
const common = {
	data: { status: 'draft' },
	body: '# {{family:title}} Policy\n\n:::guidance\nWhy.\n:::\n\n## Purpose\n\n{{org:name}} policy. (XX-1a)\n\n## Policy statements\n\n## Review\n\nReview {{param:xx-01_odp.01}}.\n',
};
const clauses = [
	{ id: 'policy/ac/ac-2', control: 'ac-2', title: 'Account management', status: 'draft', typical: { 'ac-02_odp.10': 'quarterly' }, body: '- Review {{param:ac-02_odp.10}}. (AC-2j)' },
	{ id: 'policy/ac/ac-2.3', control: 'ac-2.3', title: 'Disable accounts', status: 'draft', body: '- Disable. (AC-2(3))' },
];
const ac = policyPage({ family, clauses, common, catalog, variables, version: '1.2.3', order: 1 });

test('policy pages list every control covered, in catalog order, in front matter', () => {
	assert.equal(ac.file, 'policies/ac.md');
	assert.match(ac.text, /^---\ntitle: 'Access Control Policy'\n/);
	assert.match(ac.text, /\ncontrols: \[ac-1, ac-2, ac-2\.3\]\n---\n/);
});

test('policy pages show facts, a baseline table and a count of non-aggregate parameters', () => {
	assert.match(ac.text, /\| Policy \| \[Core\]\(\/program\/core\/\) \| Draft \| 1\.2\.3 \| SP 800-53 release 9\.9\.9 \|/);
	assert.match(ac.text, /\| \[AC-2\(3\)\]\(\/controls\/ac\/ac-2\/#ac-2\.3\) \| Disable Accounts \|  \| Yes \| Yes \|  \|/);
	assert.match(ac.text, /has 2 organization-defined parameters/);
});

test('policy pages link each baseline download in both editions', () => {
	for (const b of ['low', 'moderate', 'high']) {
		assert.ok(ac.text.includes(`(/downloads/policies/ac-policy-${b}.md)`));
		assert.ok(ac.text.includes(`(/downloads/policies/ac-policy-${b}-annotated.md)`));
	}
	assert.doesNotMatch(ac.text, /policy-privacy/);
	assert.equal(policyFile('ac', 'Moderate', 'annotated'), 'policies/ac-policy-moderate-annotated');
});

test('the preview is the annotated Moderate variant, headings one level down, fields highlighted', () => {
	const preview = ac.text.slice(ac.text.indexOf('## Preview (Moderate baseline, annotated)'));
	assert.doesNotMatch(preview, /\n# /);
	assert.match(preview, /:::note\[Guidance\]\nWhy\.\n:::/);
	assert.match(preview, /\n### Purpose\n\n<span class="tpl-field tpl-org">Organization name<\/span> policy\. \(AC-1a\)/);
	assert.match(preview, /#### Disable accounts \(AC-2\(3\)\)/);
	assert.match(preview, /Fill in: the frequency of account review <span class="tpl-typical">Typical: quarterly<\/span>/);
});

test('status is reviewed only when the common sections and every clause are', () => {
	assert.equal(ac.summary.status, 'draft');
	const reviewed = policyPage({
		family,
		clauses: clauses.map((c) => ({ ...c, status: 'reviewed' })),
		common: { ...common, data: { status: 'reviewed' } },
		catalog,
		variables,
		version: '1',
		order: 1,
	});
	assert.equal(reviewed.summary.status, 'reviewed');
});

const plan = templatePage({
	template: {
		id: 'plans/incident-response-plan',
		title: 'Incident Response Plan',
		type: 'plan',
		description: 'The plan IR-8 requires.',
		controls: ['ir-8'],
		ssdf: ['RV.1'],
		status: 'draft',
		stage: 'core',
		body: '# Incident Response Plan\n\n## Scope\n\n{{org:name}} plan.\n',
	},
	catalog,
	variables,
	version: '1.2.3',
	order: 1,
});

test('other templates get a page at their source path with both editions', () => {
	assert.equal(plan.file, 'plans/incident-response-plan.md');
	assert.match(plan.text, /\| Plan \| \[Core\]\(\/program\/core\/\) \| Draft \|/);
	assert.match(plan.text, /\*\*SSDF practices:\*\* RV\.1/);
	assert.ok(plan.text.includes('(/downloads/plans/incident-response-plan-annotated.md)'));
	assert.match(plan.text, /### Scope/);
	assert.equal(templateFile('forms/poam', 'clean'), 'forms/poam');
	assert.equal(plan.summary.href, '/templates/plans/incident-response-plan/');
});

test('the index groups pages by type', () => {
	const index = indexPage([ac.summary, plan.summary]);
	assert.match(index, /\n## Policies\n/);
	assert.match(index, /\| \[Access Control Policy\]\(\/templates\/policies\/ac\/\) \| \[Core\]\(\/program\/core\/\) \| Draft \|/);
	assert.match(index, /## Plans\n\n\| Template/);
});

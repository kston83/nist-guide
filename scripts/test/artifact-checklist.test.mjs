// Tests for the program artifact checklist (PROG-03).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CHECKLIST_COLUMNS, CHECKLIST_FILE, checklistCsv, checklistPage, checklistRows } from '../lib/artifact-checklist.mjs';

const catalog = {
	source: 'SP 800-53 release 9.9.9',
	controls: [
		{ id: 'ac-1', label: 'AC-1', family: 'ac', baselines: ['Low', 'Moderate', 'High'] },
		{ id: 'ac-2', label: 'AC-2', family: 'ac', baselines: ['Low', 'Moderate', 'High'] },
		{ id: 'ac-2.3', label: 'AC-2(3)', family: 'ac', baselines: ['Moderate', 'High'] },
		{ id: 'pe-1', label: 'PE-1', family: 'pe', baselines: ['Low', 'Moderate', 'High'] },
		{ id: 'pe-8', label: 'PE-8', family: 'pe', baselines: ['Low', 'Moderate', 'High'] },
		{ id: 'pm-1', label: 'PM-1', family: 'pm', baselines: [] },
		{ id: 'pm-5', label: 'PM-5', family: 'pm', baselines: [] },
	],
};
const variables = {
	ciso: { label: 'Chief Information Security Officer' },
	'facilities-manager': { label: 'Facilities manager' },
};
const reviewed = { data: { status: 'reviewed' }, body: '' };
const sources = (overrides = {}) => ({
	// Not in catalog order, to check the rows do not depend on it.
	families: new Map([
		['pm', { id: 'pm', title: 'Program Management', role: 'ciso', stage: 'foundation', baseline: 'none', common: reviewed }],
		['pe', { id: 'pe', title: 'Physical and Environmental Protection', role: 'facilities-manager', stage: 'operate' }],
		['ac', { id: 'ac', title: 'Access Control', role: 'ciso', stage: 'core' }],
	]),
	clauses: [
		{ id: 'policy/ac/ac-2', control: 'ac-2', status: 'reviewed' },
		{ id: 'policy/ac/ac-2.3', control: 'ac-2.3', status: 'reviewed' },
		{ id: 'policy/pe/pe-8', control: 'pe-8', status: 'draft' },
		{ id: 'policy/pm/pm-5', control: 'pm-5', status: 'reviewed' },
	],
	common: reviewed,
	templates: [
		{ id: 'forms/visitor-log', title: 'Visitor Log', type: 'form', stage: 'operate', controls: ['pe-8', 'ac-2'], status: 'draft' },
		{ id: 'forms/system-inventory', title: 'System Inventory', type: 'form', stage: 'foundation', controls: ['pm-5'], status: 'draft' },
		{ id: 'plans/access-plan', title: 'Access Plan', type: 'plan', stage: 'core', controls: ['ac-2'], status: 'reviewed' },
	],
	catalog,
	...overrides,
});

test('every artifact gets a row: the consolidated policy, each family policy and worksheet, each template', () => {
	const rows = checklistRows(sources());
	assert.equal(rows.length, 1 + 3 * 2 + 3);
	assert.deepEqual(
		rows.map((r) => [r.title, r.type, r.stage]),
		[
			['Information Security and Privacy Policy', 'policy', 'foundation'],
			['Program Management Policy', 'policy', 'foundation'],
			['Program Management Decision Worksheet', 'worksheet', 'foundation'],
			['System Inventory', 'form', 'foundation'],
			['Access Control Policy', 'policy', 'core'],
			['Access Control Decision Worksheet', 'worksheet', 'core'],
			['Access Plan', 'plan', 'core'],
			['Physical and Environmental Protection Policy', 'policy', 'operate'],
			['Physical and Environmental Protection Decision Worksheet', 'worksheet', 'operate'],
			['Visitor Log', 'form', 'operate'],
		],
	);
});

test('policies show their -1 control; the consolidated policy every family it covers, in catalog order', () => {
	const rows = checklistRows(sources());
	const byTitle = new Map(rows.map((r) => [r.title, r]));
	assert.deepEqual(byTitle.get('Information Security and Privacy Policy').controls, ['ac-1', 'pe-1', 'pm-1']);
	assert.deepEqual(byTitle.get('Access Control Policy').controls, ['ac-1']);
	assert.deepEqual(byTitle.get('Visitor Log').controls, ['pe-8', 'ac-2']);
	assert.equal(byTitle.get('Information Security and Privacy Policy').href, '/templates/policies/consolidated/');
	assert.equal(byTitle.get('Visitor Log').href, '/templates/forms/visitor-log/');
});

test('roles come from the family policy; a template takes its first control\'s family', () => {
	const roles = Object.fromEntries(checklistRows(sources()).map((r) => [r.title, r.role]));
	assert.equal(roles['Physical and Environmental Protection Policy'], 'facilities-manager');
	assert.equal(roles['Visitor Log'], 'facilities-manager');
	assert.equal(roles['Access Plan'], 'ciso');
	assert.equal(roles['Information Security and Privacy Policy'], 'ciso');
	assert.throws(
		() => checklistRows(sources({ templates: [{ id: 'forms/x', title: 'X', type: 'form', stage: 'core', controls: ['sr-2'], status: 'draft' }] })),
		/no role, and no family policy for sr-2/,
	);
});

test('a template\'s own role wins over the family fallback', () => {
	const templates = [
		{ id: 'plans/access-plan', title: 'Access Plan', type: 'plan', stage: 'core', controls: ['ac-2'], status: 'draft', role: 'system-owner' },
		{ id: 'forms/other', title: 'Other', type: 'form', stage: 'core', controls: ['sr-2'], status: 'draft', role: 'hr-office' },
	];
	const roles = Object.fromEntries(checklistRows(sources({ templates })).map((r) => [r.title, r.role]));
	assert.equal(roles['Access Plan'], 'system-owner');
	// With a role of its own, a template needs no family policy for its first control.
	assert.equal(roles.Other, 'hr-office');
});

test('status: a policy is reviewed only when its sources are; worksheets stay draft', () => {
	const status = Object.fromEntries(checklistRows(sources()).map((r) => [r.title, r.status]));
	assert.equal(status['Access Control Policy'], 'reviewed');
	assert.equal(status['Physical and Environmental Protection Policy'], 'draft');
	assert.equal(status['Information Security and Privacy Policy'], 'draft');
	assert.equal(status['Access Control Decision Worksheet'], 'draft');
	assert.equal(status['Access Plan'], 'reviewed');
});

test('the CSV has a header, one line per row, absolute links and empty tracking columns', () => {
	const rows = checklistRows(sources());
	const csv = checklistCsv({ rows, catalog, variables, homepage: 'https://example.org/guide/' });
	assert.ok(csv.startsWith('﻿'));
	assert.ok(csv.endsWith('\r\n'));
	const lines = csv.slice(1).trimEnd().split('\r\n');
	assert.equal(lines.length, rows.length + 1);
	assert.equal(lines[0], CHECKLIST_COLUMNS.join(','));
	assert.equal(
		lines.find((l) => l.startsWith('Visitor Log')),
		'Visitor Log,Form or register,Operate,PE-8; AC-2,Facilities manager,Draft,https://example.org/guide/templates/forms/visitor-log/,,,,',
	);
	assert.ok(lines.some((l) => l.startsWith('Information Security and Privacy Policy,Policy,Foundation,AC-1; PE-1; PM-1,Chief Information Security Officer,')));
});

test('the page links the CSV and lists every row', () => {
	const rows = checklistRows(sources());
	const page = checklistPage({ rows, catalog, variables });
	assert.match(page, new RegExp(`\\(/downloads/${CHECKLIST_FILE}\\)`));
	assert.match(page, /10 documents across the four stages/);
	assert.match(page, /\| \[Visitor Log\]\(\/templates\/forms\/visitor-log\/\) \| Form or register \| \[Operate\]\(\/program\/operate\/\) \| PE-8, AC-2 \| Facilities manager \| Draft \|/);
	assert.equal(page.split('\n').filter((l) => l.startsWith('| [')).length, rows.length);
});

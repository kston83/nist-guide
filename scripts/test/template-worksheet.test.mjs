// Tests for decision worksheets (TPL-08).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { COVERED, SEE_ABOVE, worksheetCsv, worksheetRows } from '../../src/lib/template-worksheet.ts';
import fs from 'node:fs/promises';
import path from 'node:path';
import { renderVariables } from '../../src/lib/template-vars.ts';
import { commonTypical, worksheetBaselines, worksheetPage } from '../lib/template-pages.mjs';

const controls = [
	{ id: 'ac-1', label: 'AC-1', title: 'Policy and Procedures', family: 'ac', baselines: ['Low', 'Moderate'], params: ['ac-01_odp.01', 'ac-01_odp.02'] },
	{ id: 'ac-2', label: 'AC-2', title: 'Account Management', family: 'ac', baselines: ['Low', 'Moderate'], params: ['ac-2_prm_1', 'ac-02_odp.10'] },
	{ id: 'ac-2.3', label: 'AC-2(3)', title: 'Disable Accounts', family: 'ac', baselines: ['Moderate'], params: ['ac-02.03_odp.01'] },
	{ id: 'ac-2.6', label: 'AC-2(6)', title: 'Dynamic Privilege Management', family: 'ac', baselines: [], params: ['ac-02.06_odp.01'] },
	{ id: 'au-2', label: 'AU-2', title: 'Event Logging', family: 'au', baselines: ['Moderate', 'Privacy'], params: ['au-02_odp.01'] },
];
const params = {
	'ac-01_odp.01': { prompt: 'personnel to receive the policy' },
	'ac-01_odp.02': { select: { howMany: 'one-or-more', choices: ['organization-level', 'system-level'] } },
	'ac-2_prm_1': { label: 'organization-defined frequency', aggregates: ['ac-02_odp.10'] },
	'ac-02_odp.10': { prompt: 'the frequency of account review' },
	'ac-02.03_odp.01': { prompt: 'time period, "inactive"' },
	'ac-02.06_odp.01': { prompt: 'dynamic privilege rules' },
	'au-02_odp.01': { prompt: 'event types' },
};
const questions = [{ question: 'Which account types?', controls: ['ac-2'], typical: 'Individual', decides: 'System owner' }];
const rows = (baseline) =>
	worksheetRows({
		family: 'ac',
		baseline,
		questions,
		controls,
		params,
		typical: { 'ac-02_odp.10': 'quarterly' },
		defaultDecider: 'Chief Information Security Officer',
	});

test('rows are the family questions, then every parameter of family controls in the baseline', () => {
	assert.deepEqual(rows('Moderate'), [
		{ decision: 'Which account types?', controls: ['AC-2'], typical: 'Individual', decides: 'System owner' },
		{ decision: 'Personnel to receive the policy', controls: ['AC-1'], typical: '', decides: 'Chief Information Security Officer' },
		{ decision: 'Select one or more: organization-level; system-level', controls: ['AC-1'], typical: '', decides: 'Chief Information Security Officer' },
		{ decision: 'The frequency of account review', controls: ['AC-2'], typical: 'Quarterly', decides: 'Chief Information Security Officer' },
		{ decision: 'Time period, "inactive"', controls: ['AC-2(3)'], typical: '', decides: 'Chief Information Security Officer' },
	]);
});

test('lower baselines leave out their enhancements; controls in no baseline never appear', () => {
	const low = rows('Low').map((r) => r.controls[0]);
	assert.ok(!low.includes('AC-2(3)'));
	for (const b of ['Low', 'Moderate', 'High']) assert.ok(!rows(b).some((r) => r.controls.includes('AC-2(6)')));
});

test('the CSV has a BOM, a header, quoted cells where needed, an empty value column and CRLF', () => {
	const csv = worksheetCsv(rows('Moderate'));
	assert.ok(csv.startsWith('﻿Decision,Control,Typical value,Who decides,Your value\r\n'));
	assert.match(csv, /\r\nThe frequency of account review,AC-2,Quarterly,Chief Information Security Officer,\r\n/);
	assert.match(csv, /\r\n"Time period, ""inactive""",AC-2\(3\),,Chief Information Security Officer,\r\n$/);
	assert.equal(csv.split('\r\n').length, 7);
});

// SA-4, SA-11 and SA-22 as the catalog has them: a selection with an embedded
// assignment (and OSCAL's trailing space), and descriptions that insert a selection.
const sa = {
	controls: [
		{ id: 'sa-4', label: 'SA-4', title: 'Acquisition Process', family: 'sa', baselines: ['Moderate'], params: ['sa-04_odp.01', 'sa-04_odp.02'] },
		{ id: 'sa-11', label: 'SA-11', title: 'Developer Testing', family: 'sa', baselines: ['Moderate'], params: ['sa-11_odp.01', 'sa-11_odp.02'] },
		{ id: 'sa-22', label: 'SA-22', title: 'Unsupported Components', family: 'sa', baselines: ['Moderate'], params: ['sa-22_odp.01', 'sa-22_odp.02'] },
	],
	params: {
		'sa-04_odp.01': {
			select: { howMany: 'one-or-more', choices: ['standardized contract language', '[Assignment: organization-defined contract language] '], nested: ['sa-04_odp.02'] },
		},
		'sa-04_odp.02': { label: 'contract language', prompt: 'contract language' },
		'sa-11_odp.01': { select: { howMany: 'one-or-more', choices: ['unit', 'integration', 'system', 'regression'] } },
		'sa-11_odp.02': { prompt: 'frequency at which to conduct {{ insert: param, sa-11_odp.01 }} testing/evaluation' },
		'sa-22_odp.01': {
			select: { howMany: 'one-or-more', choices: ['in-house support', '[Assignment: organization-defined support from external providers] '], nested: ['sa-22_odp.02'] },
		},
		'sa-22_odp.02': { label: 'support from external providers', prompt: 'support from external providers' },
	},
};
const saRows = (typical) =>
	worksheetRows({ family: 'sa', baseline: 'Moderate', questions: [], ...sa, typical, defaultDecider: 'CISO' }).map((r) => [r.decision, r.typical]);

test('typical values start with a capital in the worksheet; values starting with a non-letter stay as they are', () => {
	const typical = { 'sa-11_odp.01': 'unit and system', 'sa-11_odp.02': '30 days after each release' };
	assert.deepEqual(saRows(typical).slice(2, 4), [
		['Select one or more: unit; integration; system; regression', 'Unit and system'],
		['Frequency at which to conduct the selected unit, integration, system or regression testing/evaluation', '30 days after each release'],
	]);
});

test('an embedded assignment points to its own row, and that row is covered by the selection typical value', () => {
	assert.deepEqual(saRows({ 'sa-04_odp.01': 'standardized contract language' }), [
		['Select one or more: standardized contract language; organization-defined contract language (see its row below)', 'Standardized contract language'],
		['Contract language', COVERED],
		['Select one or more: unit; integration; system; regression', ''],
		['Frequency at which to conduct the selected unit, integration, system or regression testing/evaluation', ''],
		['Select one or more: in-house support; organization-defined support from external providers (see its row below)', ''],
		// No typical value on the selection, so nothing to point to.
		['Support from external providers', ''],
	]);
	// A follow-on's own typical value wins.
	assert.equal(saRows({ 'sa-04_odp.01': 'standardized contract language', 'sa-04_odp.02': 'the privacy clauses' })[1][1], 'The privacy clauses');
});

test('parts of an aggregate with no value of their own show the aggregate value once, then "See the row above"', () => {
	// IR-8 as the catalog has it: ir-8_prm_5 combines .06, .05 and .07, and .05 has its own value.
	const controls = [{ id: 'ir-8', label: 'IR-8', title: 'Incident Response Plan', family: 'ir', baselines: ['Moderate'], params: ['ir-08_odp.05', 'ir-08_odp.06', 'ir-08_odp.07', 'ir-08_odp.08', 'ir-8_prm_5'] }];
	const params = {
		'ir-08_odp.05': { prompt: 'elements that get copies' },
		'ir-08_odp.06': { prompt: 'personnel told of changes' },
		'ir-08_odp.07': { prompt: 'elements told of changes' },
		'ir-08_odp.08': { prompt: 'where the plan is kept' },
		'ir-8_prm_5': { label: 'organization-defined personnel', aggregates: ['ir-08_odp.06', 'ir-08_odp.05', 'ir-08_odp.07'] },
	};
	const got = worksheetRows({
		family: 'ir',
		baseline: 'Moderate',
		questions: [],
		controls,
		params,
		typical: { 'ir-08_odp.05': 'the legal function', 'ir-8_prm_5': 'everyone who received the plan' },
		set: { 'ir-08_odp.08': 'Set to the policy library.' },
		defaultDecider: 'CISO',
	}).map((r) => r.typical);
	assert.deepEqual(got, ['The legal function', 'Everyone who received the plan', SEE_ABOVE, 'Set to the policy library.']);
});

test('worksheet baselines add Privacy only when a family control is in it', () => {
	assert.deepEqual(worksheetBaselines('ac', controls), ['Low', 'Moderate', 'High']);
	assert.deepEqual(worksheetBaselines('au', controls), ['Low', 'Moderate', 'High', 'Privacy']);
	const pt = [{ id: 'pt-2', label: 'PT-2', title: 'Authority', family: 'pt', baselines: ['Privacy'], params: [] }];
	assert.deepEqual(worksheetBaselines('pt', pt), ['Privacy']);
});

test('the worksheet page links each CSV and shows the Moderate rows', () => {
	const page = worksheetPage({
		family: { id: 'ac', title: 'Access Control', role: 'ciso', stage: 'core', questions },
		clauses: [{ id: 'policy/ac/ac-2', typical: { 'ac-02_odp.10': 'quarterly' } }],
		catalog: { source: 'SP 800-53 release 9.9.9', controls, params },
		variables: { ciso: { label: 'Chief Information Security Officer' } },
		version: '1.0.0',
		order: 1,
	});
	assert.equal(page.file, 'worksheets/ac.md');
	assert.match(page.text, /\ncontrols: \[ac-1, ac-2, ac-2\.3\]\n/);
	assert.ok(page.text.includes('[CSV](/downloads/worksheets/ac-decisions-high.csv)'));
	assert.match(page.text, /\| The frequency of account review \| AC-2 \| Quarterly \| Chief Information Security Officer \|/);
	assert.match(page.text, /5 decisions\./);
});

// The shared -1 sections: xx- keys become the family's ids, and the managing
// official defaults to the family's accountable role.
const sharedCommon = {
	body: '- The {{param:xx-01_odp.04}} shall disseminate this policy to {{param:xx-01_odp.01}}. (XX-1a)\n',
	data: { typical: { 'xx-01_odp.01': 'everyone within its scope, through the policy library' } },
};
const roles = { ciso: { label: 'Chief Information Security Officer' }, 'privacy-official': { label: 'Senior privacy official' } };

test('shared common typical values take the family id, and the managing official is the family role', () => {
	assert.deepEqual(commonTypical({ id: 'ac', role: 'ciso' }, sharedCommon, roles), {
		'ac-01_odp.01': 'everyone within its scope, through the policy library',
		'ac-01_odp.04': 'Chief Information Security Officer',
	});
	assert.equal(commonTypical({ id: 'pt', role: 'privacy-official' }, sharedCommon, roles)['pt-01_odp.04'], 'senior privacy official');
	// A value the common sections give wins over the role default.
	const own = { ...sharedCommon, data: { typical: { 'xx-01_odp.04': 'head of security' } } };
	assert.equal(commonTypical({ id: 'ac', role: 'ciso' }, own, roles)['ac-01_odp.04'], 'head of security');
	// A family with its own common sections (PM) keeps exactly its own values.
	const pm = { id: 'pm', role: 'ciso', common: { body: '', data: { typical: { 'pm-01_odp.01': 'annually' } } } };
	assert.deepEqual(commonTypical(pm, sharedCommon, roles), { 'pm-01_odp.01': 'annually' });
});

test('the shared typical values and the role-filled official render in a policy sentence', () => {
	const p = {
		'ac-01_odp.01': { prompt: 'personnel to receive the access control policy' },
		'ac-01_odp.04': { prompt: 'an official to manage the access control policy' },
		'pt-01_odp.01': { prompt: 'personnel to receive the PT policy' },
		'pt-01_odp.04': { prompt: 'an official to manage the PT policy' },
	};
	const render = (family) =>
		renderVariables(sharedCommon.body, { variables: roles, params: p, typical: commonTypical(family, sharedCommon, roles), family }, 'md');
	assert.equal(
		render({ id: 'ac', title: 'Access Control', role: 'ciso' }),
		'- The [Fill in: an official to manage the access control policy. Typical: Chief Information Security Officer] shall disseminate this policy to [Fill in: personnel to receive the access control policy. Typical: everyone within its scope, through the policy library]. (XX-1a)\n',
	);
	assert.match(render({ id: 'pt', title: 'PT', role: 'privacy-official' }), /^- The \[Fill in: an official to manage the PT policy\. Typical: senior privacy official\] shall/);
});

test('the worksheet page shows the shared -1 values, and the -1 official as the family role', () => {
	const page = worksheetPage({
		family: { id: 'ac', title: 'Access Control', role: 'ciso', stage: 'core', questions },
		clauses: [],
		common: { body: '', data: { typical: { 'xx-01_odp.01': 'everyone within its scope', 'xx-01_odp.02': 'organization-level' } } },
		catalog: { source: 'SP 800-53 release 9.9.9', controls, params },
		variables: roles,
		version: '1.0.0',
		order: 1,
	});
	assert.match(page.text, /\| Personnel to receive the policy \| AC-1 \| Everyone within its scope \| Chief Information Security Officer \|/);
	assert.match(page.text, /\| Select one or more: organization-level; system-level \| AC-1 \| Organization-level \|/);
});

test('no generated worksheet page has a blank typical value', async () => {
	const dir = 'src/content/docs/templates/worksheets';
	const files = (await fs.readdir(dir)).filter((f) => f.endsWith('.md') && f !== 'index.md');
	assert.ok(files.length >= 16, `expected at least 16 worksheet pages, found ${files.length}`);
	for (const f of files) {
		const text = await fs.readFile(path.join(dir, f), 'utf8');
		const decisions = text.slice(text.indexOf('## Decisions'));
		const rows = decisions.split('\n').filter((l) => l.startsWith('| ') && !l.startsWith('| Decision |') && !l.startsWith('| ---'));
		assert.ok(rows.length, `${f}: no decision rows`);
		for (const row of rows) {
			const typical = row.split(/(?<!\\)\|/)[3].trim();
			assert.ok(typical, `${f}: blank typical value in ${row}`);
			assert.ok(!/^[a-z]/.test(typical), `${f}: typical value starts lowercase in ${row}`);
			assert.ok(!/\{\{ ?insert|\[Assignment|_ODP\[/.test(row), `${f}: raw OSCAL text in ${row}`);
		}
	}
});

test('the Organization worksheet of an organization-wide family lists every family control', () => {
	assert.deepEqual(worksheetBaselines('ac', controls, true), ['Organization']);
	const org = rows('Organization').map((r) => r.controls[0]);
	assert.ok(org.includes('AC-2(3)') && org.includes('AC-2(6)'));
	assert.ok(!org.includes('AU-2'));
});

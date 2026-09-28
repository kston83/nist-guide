// Tests for decision worksheets (TPL-08).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { worksheetCsv, worksheetRows } from '../../src/lib/template-worksheet.ts';
import { worksheetBaselines, worksheetPage } from '../lib/template-pages.mjs';

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
		{ decision: 'The frequency of account review', controls: ['AC-2'], typical: 'quarterly', decides: 'Chief Information Security Officer' },
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
	assert.match(csv, /\r\n"Time period, ""inactive""",AC-2\(3\),,Chief Information Security Officer,\r\n$/);
	assert.equal(csv.split('\r\n').length, 7);
});

test('worksheet baselines add Privacy only when a family control is in it', () => {
	assert.deepEqual(worksheetBaselines('ac', controls), ['Low', 'Moderate', 'High']);
	assert.deepEqual(worksheetBaselines('au', controls), ['Low', 'Moderate', 'High', 'Privacy']);
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
	assert.match(page.text, /\| The frequency of account review \| AC-2 \| quarterly \| Chief Information Security Officer \|/);
	assert.match(page.text, /5 decisions\./);
});

test('the Organization worksheet of an organization-wide family lists every family control', () => {
	assert.deepEqual(worksheetBaselines('ac', controls, true), ['Organization']);
	const org = rows('Organization').map((r) => r.controls[0]);
	assert.ok(org.includes('AC-2(3)') && org.includes('AC-2(6)'));
	assert.ok(!org.includes('AU-2'));
});

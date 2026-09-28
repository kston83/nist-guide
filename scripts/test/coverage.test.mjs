// Tests for control coverage status (PRD CTRL-05, CTRL-06).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { coverageRows, statusOf, totalsBy, BASELINES } from '../../src/lib/coverage.ts';

const controls = [
	{ id: 'ac-1', label: 'AC-1', title: 'Policy and Procedures', family: 'ac', baselines: ['Low', 'Moderate', 'High', 'Privacy'] },
	{ id: 'ac-2', label: 'AC-2', title: 'Account Management', family: 'ac', baselines: ['Low', 'Moderate', 'High'] },
	{ id: 'ac-2.1', label: 'AC-2(1)', title: 'Automated', family: 'ac', baselines: ['Moderate', 'High'] },
	{ id: 'ac-4', label: 'AC-4', title: 'Information Flow', family: 'ac', baselines: ['Moderate', 'High'] },
	{ id: 'pm-1', label: 'PM-1', title: 'Program Plan', family: 'pm', baselines: [] },
];
const sources = {
	guidance: new Map([['ac-2', 'reviewed']]),
	clauses: new Map([
		['ac-2', 'draft'],
		['ac-2.1', 'draft'],
	]),
	common: new Map([['ac', 'draft']]),
};

test('statuses default to none; a -1 control takes its family policy status', () => {
	assert.deepEqual(statusOf('ac-2', sources), { guidance: 'reviewed', clause: 'draft' });
	assert.deepEqual(statusOf('ac-4', sources), { guidance: 'none', clause: 'none' });
	assert.deepEqual(statusOf('ac-1', sources), { guidance: 'none', clause: 'draft' });
	assert.deepEqual(statusOf('pm-1', sources), { guidance: 'none', clause: 'none' });
});

test('coverage rows cover base controls only, in catalog order', () => {
	assert.deepEqual(
		coverageRows(controls, sources).map((r) => [r.id, r.guidance, r.clause]),
		[
			['ac-1', 'none', 'draft'],
			['ac-2', 'reviewed', 'draft'],
			['ac-4', 'none', 'none'],
			['pm-1', 'none', 'none'],
		],
	);
});

test('totals by family and by baseline count each status', () => {
	const rows = coverageRows(controls, sources);
	const byFamily = totalsBy(rows, (r) => [r.family]);
	assert.deepEqual(
		byFamily.map((t) => [t.group, t.controls, t.guidance.reviewed, t.clause.draft, t.clause.none]),
		[
			['ac', 3, 1, 2, 1],
			['pm', 1, 0, 0, 1],
		],
	);
	const byBaseline = totalsBy(rows, (r) => r.baselines, BASELINES);
	assert.deepEqual(
		byBaseline.map((t) => [t.group, t.controls]),
		[
			['Low', 2],
			['Moderate', 3],
			['High', 3],
			['Privacy', 1],
		],
	);
});

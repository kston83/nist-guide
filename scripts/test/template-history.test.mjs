// Tests for the template change history (TPL-11).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { entryParts } from '../lib/changelog.mjs';
import { currentPaths, pageSources, parseLog, templateHistory } from '../lib/template-history.mjs';

// One commit as git log --format=%x1e%H%x1f%cI%x1f%s%x1f%D --name-status -M prints it.
const record = (sha, date, subject, refs, ...files) =>
	`\x1e${sha}\x1f${date}T10:00:00-05:00\x1f${subject}\x1f${refs}\n\n${files.join('\n')}\n`;

const log = [
	record('9', '2026-10-16', 'Merge-free: progress notes (#140)', '', 'M\tPROGRESS.md'),
	record('8', '2026-10-15', 'TPL-09: consolidated policy (#137)', '', 'M\tsrc/lib/template-assemble.ts', 'A\tsrc/content/docs/templates/policies/consolidated.md'),
	record('7', '2026-10-10', 'Content: PM policy (#45)', '', 'A\ttemplates/policy/pm/_common.md', 'A\ttemplates/policy/pm/pm-2.md'),
	record('6', '2026-10-05', 'W2: typical values for the -1 controls (#83)', '', 'M\ttemplates/policy/_common.md'),
	record(
		'5',
		'2026-10-03',
		'TPL-01: add a report template type (#51)',
		'',
		'R099\ttemplates/plans/risk-assessment-report.md\ttemplates/reports/risk-assessment-report.md',
		'R100\tsrc/content/docs/templates/plans/risk-assessment-report.md\tsrc/content/docs/templates/reports/risk-assessment-report.md',
	),
	record('4', '2026-10-02', 'TPL-10: release kit v1.0.0 (#41)', 'tag: v1.0.0', 'M\tpackage.json'),
	record(
		'3',
		'2026-10-01',
		'Content: RA artifacts (#50)',
		'',
		'A\ttemplates/plans/risk-assessment-report.md',
		'A\tsrc/content/docs/templates/plans/risk-assessment-report.md',
		'M\ttemplates/policy/ac/ac-2.md',
	),
	record('2', '2026-09-20', 'TPL-07: generated template pages (#16)', '', 'A\tsrc/content/docs/templates/policies/ac.md', 'M\ttemplates/policy/ac/_family.yml'),
	record('1', '2026-09-10', 'TPL-01: template sources (#12)', '', 'A\ttemplates/policy/_common.md', 'A\ttemplates/policy/ac/ac-2.md'),
].join('');

test('the log parses into commits with the files each changed, renames keeping both paths', () => {
	const commits = parseLog(log);
	assert.equal(commits.length, 9);
	assert.deepEqual(commits[3].files, [{ status: 'M', path: 'templates/policy/_common.md' }]);
	assert.deepEqual(commits[4].files[0], {
		status: 'R',
		from: 'templates/plans/risk-assessment-report.md',
		path: 'templates/reports/risk-assessment-report.md',
	});
	assert.equal(commits[5].tags[0], 'v1.0.0');
	assert.equal(commits[1].pr, 137);
	assert.deepEqual(parseLog(log.replace(/\n/g, '\r\n'))[3].files, commits[3].files);
	assert.deepEqual(parseLog(''), []);
});

test('paths are named as they are today, so a moved file keeps its history', () => {
	const paths = currentPaths(parseLog(log));
	assert.ok(paths[6].has('templates/reports/risk-assessment-report.md'));
	assert.ok(paths[6].has('src/content/docs/templates/reports/risk-assessment-report.md'));
	assert.ok(!paths[6].has('templates/plans/risk-assessment-report.md'));
	assert.ok(paths[8].has('templates/policy/ac/ac-2.md'));
});

test('each page has its sources: the family folder and shared sections, or its own file', () => {
	const pm = new Set(['pm']);
	assert.deepEqual(pageSources('templates/policies/ac', pm), ['templates/policy/ac/', 'templates/policy/_common.md']);
	assert.deepEqual(pageSources('templates/worksheets/ac', pm), ['templates/policy/ac/', 'templates/policy/_common.md']);
	assert.deepEqual(pageSources('templates/policies/pm', pm), ['templates/policy/pm/']);
	assert.deepEqual(pageSources('templates/policies/consolidated', pm), ['templates/policy/', 'src/lib/template-assemble.ts']);
	assert.deepEqual(pageSources('templates/forms/visitor-log'), ['templates/forms/visitor-log.md']);
	assert.deepEqual(pageSources('templates/starter-kit'), ['templates/starter-kit.yml']);
	assert.equal(pageSources('templates'), null);
	assert.equal(pageSources('templates/index'), null);
});

const pages = [
	'templates',
	'templates/policies/ac',
	'templates/policies/pm',
	'templates/policies/consolidated',
	'templates/reports/risk-assessment-report',
	'templates/forms/visitor-log',
];
const history = templateHistory(parseLog(log), pages, { ownCommon: new Set(['pm']) });

test('a family policy lists its own and shared changes by kit version, from when its page was published', () => {
	assert.deepEqual(history['templates/policies/ac'], [
		{ title: 'Unreleased (since v1.0.0)', entries: [{ id: null, text: 'W2: typical values for the -1 controls', pr: 83 }] },
		{
			title: 'v1.0.0 (2026-10-02)',
			version: 'v1.0.0',
			entries: [
				{ id: null, text: 'RA artifacts', pr: 50 },
				{ id: 'TPL-07', text: 'Generated template pages', pr: 16 },
			],
		},
	]);
});

test('a family with its own common sections ignores the shared ones', () => {
	assert.deepEqual(
		history['templates/policies/pm'].map((s) => s.entries.map((e) => e.pr)),
		[[45]],
	);
});

test('the consolidated policy starts with its own page and counts the assembly code', () => {
	assert.deepEqual(history['templates/policies/consolidated'], [
		{ title: 'Unreleased (since v1.0.0)', entries: [{ id: 'TPL-09', text: 'Consolidated policy', pr: 137 }] },
	]);
});

test('a moved template keeps the history from before the move', () => {
	assert.deepEqual(
		history['templates/reports/risk-assessment-report'].map((s) => [s.title, s.entries.map((e) => e.pr)]),
		[
			['Unreleased (since v1.0.0)', [51]],
			['v1.0.0 (2026-10-02)', [50]],
		],
	);
});

test('pages with no history, and the index, are left out', () => {
	assert.deepEqual(Object.keys(history).sort(), [
		'templates/policies/ac',
		'templates/policies/consolidated',
		'templates/policies/pm',
		'templates/reports/risk-assessment-report',
	]);
	assert.deepEqual(templateHistory([], pages), {});
});

test('without release tags, sections are months and "Unreleased" is not used', () => {
	const untagged = parseLog(log).map((c) => ({ ...c, tags: [] }));
	assert.deepEqual(
		templateHistory(untagged, ['templates/policies/ac'])['templates/policies/ac'].map((s) => s.title),
		['October 2026', 'September 2026'],
	);
});

test('entry parts split the requirement id from the subject', () => {
	assert.deepEqual(entryParts({ subject: 'CTRL-01 to CTRL-03: generator tests', pr: 3 }), { id: 'CTRL-01 to CTRL-03', text: 'Generator tests', pr: 3 });
	assert.deepEqual(entryParts({ subject: 'Content: IR plan', pr: null }), { id: null, text: 'IR plan', pr: null });
});

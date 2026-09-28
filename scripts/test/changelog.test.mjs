// Tests for the changelog (FEAT-04).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { changelogPage, parseCommit, sectionNotes, sections } from '../lib/changelog.mjs';

const REPO = 'https://github.com/o/r';
const line = (sha, date, subject, refs = '') => `${sha}\x1f${date}T10:00:00-05:00\x1f${subject}\x1f${refs}`;

test('commits parse into subject, pull request, release tags and type', () => {
	assert.deepEqual(parseCommit(line('a1', '2026-10-02', 'TPL-05: Word downloads (#19)', 'HEAD -> main, tag: v1.0.0, origin/main')), {
		sha: 'a1',
		date: '2026-10-02',
		subject: 'TPL-05: Word downloads',
		pr: 19,
		tags: ['v1.0.0'],
		type: 'feature',
	});
	assert.equal(parseCommit(line('b', '2026-10-01', 'Content: IR plan (#27)')).type, 'content');
	assert.equal(parseCommit(line('c', '2026-10-01', 'Bump astro from 7.2 to 7.3 (#40)')).type, 'dependency');
	assert.equal(parseCommit(line('d', '2026-10-01', 'Progress: notes (#33)')).type, 'project');
	assert.equal(parseCommit(line('e', '2026-10-01', 'initial commit')).pr, null);
	assert.deepEqual(parseCommit(line('f', '2026-10-01', 'x', 'tag: not-a-version')).tags, []);
});

const history = [
	line('5', '2026-10-05', 'Content: guidance batch 3 (#36)'),
	line('4', '2026-10-03', 'TPL-10: release kit (#35)', 'tag: v1.0.0'),
	line('3', '2026-09-30', 'FEAT-04: changelog from git history (#34)'),
	line('2', '2026-09-28', 'CTRL-01 to CTRL-03: generator tests (#3)'),
	line('1', '2026-08-20', 'initial commit'),
].map(parseCommit);

test('without release tags, sections are months, newest first', () => {
	const s = sections(history.map((c) => ({ ...c, tags: [] })));
	assert.deepEqual(s.map((x) => [x.title, x.commits.length]), [['October 2026', 2], ['September 2026', 2], ['August 2026', 1]]);
});

test('with release tags, sections are Unreleased then each release', () => {
	const s = sections(history);
	assert.deepEqual(s.map((x) => [x.title, x.commits.map((c) => c.sha).join('')]), [
		['Unreleased', '5'],
		['v1.0.0 (2026-10-03)', '4321'],
	]);
	assert.equal(s[1].version, 'v1.0.0');
	assert.deepEqual(sections(history.slice(1)).map((x) => x.title), ['v1.0.0 (2026-10-03)']);
});

test('notes group entries by type, bold the requirement id, link the pull request', () => {
	const notes = sectionNotes(sections(history)[1], REPO);
	assert.equal(
		notes,
		[
			'### Site and template kit',
			'',
			'- **TPL-10** Release kit ([#35](https://github.com/o/r/pull/35))',
			'- **FEAT-04** Changelog from git history ([#34](https://github.com/o/r/pull/34))',
			'- **CTRL-01 to CTRL-03** Generator tests ([#3](https://github.com/o/r/pull/3))',
			'',
			'### Other changes',
			'',
			'- Initial commit',
		].join('\n'),
	);
});

test('markdown in subjects is escaped', () => {
	const notes = sectionNotes({ commits: [parseCommit(line('x', '2026-10-01', 'Content: fix `code` and *stars* <tags> (#9)'))] }, REPO);
	assert.match(notes, /- Fix \\`code\\` and \\\*stars\\\* \\<tags\\> \(\[#9\]/);
});

test('the page has front matter, no edit link, and notes a shallow history', () => {
	const page = changelogPage(history, { repoUrl: REPO, shallow: true });
	assert.match(page, /^---\ntitle: 'Changelog'\n[\s\S]*editUrl: false\n/);
	assert.match(page, /each kit release has its own section/);
	assert.match(page, /only part of the history/);
	assert.match(page, /\n## Unreleased\n\n### Content\n\n- Guidance batch 3/);
	assert.doesNotMatch(page, /\n\n\n/);
});

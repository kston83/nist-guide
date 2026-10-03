// Tests for the working records (PRD, Instructions for Claude Code): PROGRESS.md stays
// small because every task reads it; the log and source notes live in docs/.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';

const MAX_PROGRESS_BYTES = 40 * 1024;
const progress = readFileSync('PROGRESS.md', 'utf8');
const log = readFileSync('docs/progress-log.md', 'utf8');
const sources = readFileSync('docs/sources.md', 'utf8');

test('PROGRESS.md stays under 40 KB', () => {
	const size = statSync('PROGRESS.md').size;
	assert.ok(
		size <= MAX_PROGRESS_BYTES,
		`PROGRESS.md is ${size} bytes; move history to docs/progress-log.md and source checks to docs/sources.md`,
	);
});

test('PROGRESS.md holds no log table or verification notes', () => {
	assert.doesNotMatch(progress, /^## Log$/m, 'the log belongs in docs/progress-log.md');
	assert.doesNotMatch(progress, /^- \*\*Verified /m, 'verification notes belong in docs/sources.md');
});

test('the log keeps its table, one row per entry', () => {
	assert.match(log, /^## Log\n\n\| ID \| Status \| Date \| Notes \|\n\| --- \| --- \| --- \| --- \|$/m);
});

test('every source registry row has a status and a last-checked date', () => {
	const registry = sources.slice(sources.indexOf('## Registry'), sources.indexOf('## Verification notes'));
	const rows = registry.split('\n').filter((l) => l.startsWith('| ') && !/^\| (Source|---) /.test(l));
	assert.ok(rows.length > 0, 'the registry has rows');
	for (const row of rows) {
		const cells = row.split(' | ');
		assert.equal(cells.length, 4, `four cells: ${row.slice(0, 60)}`);
		assert.match(cells[2], /^\d{4}-\d{2}-\d{2}$/, `last checked is a date: ${row.slice(0, 60)}`);
	}
});

#!/usr/bin/env node
/**
 * Builds the changelog page from git history (PRD FEAT-04). Runs before every
 * build, so each merge to main updates the page on the next deploy.
 *
 *   node scripts/build-changelog.mjs                 write src/content/docs/reference/changelog.md
 *   node scripts/build-changelog.mjs --notes <tag>   print one release's notes (for a GitHub Release)
 *   node scripts/build-changelog.mjs --notes Unreleased
 *
 * The page is build output, ignored by git. Needs full history: CI and deploy
 * check out with fetch-depth 0.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs/promises';
import { changelogPage, parseCommit, sectionNotes, sections } from './lib/changelog.mjs';

const OUT = 'src/content/docs/reference/changelog.md';
const git = (...args) => execFileSync('git', args, { encoding: 'utf8' }).trim();

const { repository } = JSON.parse(await fs.readFile('package.json', 'utf8'));
const repoUrl = repository.url.replace(/\.git$/, '');

let commits = [];
let shallow = false;
try {
	shallow = git('rev-parse', '--is-shallow-repository') === 'true';
	// First-parent history of what is being built; skips the synthetic merge
	// commits GitHub makes for pull request checks.
	commits = git('log', '--first-parent', '--decorate=short', '--format=%H%x1f%cI%x1f%s%x1f%D')
		.split('\n')
		.filter(Boolean)
		.map(parseCommit)
		.filter((c) => !/^Merge [0-9a-f]{7,} into [0-9a-f]{7,}$/.test(c.subject));
} catch (err) {
	console.warn(`Changelog: git history unavailable (${err.message.split('\n')[0]}); writing an empty changelog.`);
	shallow = true;
}
if (shallow) console.warn('Changelog: shallow clone; the page will list only the commits available.');

const notesArg = process.argv.indexOf('--notes');
if (notesArg > 0) {
	const wanted = process.argv[notesArg + 1];
	const section = sections(commits).find((s) => s.version === wanted || s.title === wanted);
	if (!section) {
		console.error(`No changelog section "${wanted}".`);
		process.exit(1);
	}
	console.log(sectionNotes(section, repoUrl));
} else {
	await fs.writeFile(OUT, changelogPage(commits, { repoUrl, shallow }));
	console.log(`Changelog: ${commits.length} change(s) written to ${OUT}.`);
}

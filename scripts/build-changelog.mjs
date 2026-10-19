#!/usr/bin/env node
/**
 * Builds the changelog page (PRD FEAT-04) and the template change history
 * (PRD TPL-11) from git history. Runs before every build, so each merge to main
 * updates both on the next deploy.
 *
 *   node scripts/build-changelog.mjs                 write src/content/docs/reference/changelog.md
 *                                                    and src/data/template-history.json
 *   node scripts/build-changelog.mjs --notes <tag>   print one release's notes (for a GitHub Release)
 *   node scripts/build-changelog.mjs --notes Unreleased
 *
 * Both files are build output, ignored by git. Needs full history: CI and deploy
 * check out with fetch-depth 0.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { changelogPage, sectionNotes, sections } from './lib/changelog.mjs';
import { HISTORY_FILE, parseLog, templateHistory } from './lib/template-history.mjs';

const OUT = 'src/content/docs/reference/changelog.md';
const PAGES = 'src/content/docs/templates';
const git = (...args) => execFileSync('git', args, { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 }).trim();

const { repository } = JSON.parse(await fs.readFile('package.json', 'utf8'));
const repoUrl = repository.url.replace(/\.git$/, '');

let commits = [];
let shallow = false;
try {
	shallow = git('rev-parse', '--is-shallow-repository') === 'true';
	// First-parent history of what is being built, with the files each commit
	// changed (renames followed, for the template history); skips the synthetic
	// merge commits GitHub makes for pull request checks.
	commits = parseLog(git('log', '--first-parent', '--decorate=short', '-M', '--name-status', '--format=%x1e%H%x1f%cI%x1f%s%x1f%D')).filter(
		(c) => !/^Merge [0-9a-f]{7,} into [0-9a-f]{7,}$/.test(c.subject),
	);
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

	// Template change history (TPL-11): every generated template page, by content id.
	const pageIds = [];
	const walk = async (dir) => {
		for (const f of await fs.readdir(dir, { withFileTypes: true }).catch(() => [])) {
			const p = path.join(dir, f.name);
			if (f.isDirectory()) await walk(p);
			else if (f.name.endsWith('.md')) pageIds.push(path.relative('src/content/docs', p).replace(/\\/g, '/').slice(0, -3));
		}
	};
	await walk(PAGES);
	// Families with their own common sections (PM) do not use templates/policy/_common.md.
	const ownCommon = new Set();
	for (const f of await fs.readdir('templates/policy', { withFileTypes: true }))
		if (f.isDirectory() && (await fs.stat(`templates/policy/${f.name}/_common.md`).catch(() => null))) ownCommon.add(f.name);
	const pages = templateHistory(commits, pageIds, { ownCommon });
	await fs.writeFile(HISTORY_FILE, `${JSON.stringify({ repoUrl, shallow, pages }, null, '\t')}\n`);
	console.log(`Template history: ${Object.keys(pages).length} template page(s) written to ${HISTORY_FILE}.`);
}

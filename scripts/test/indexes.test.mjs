// Tests for the generated indexes (NAV-02): the templates index from the
// template pages' front matter, and the industry and technology indexes from
// their sections' pages.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { parse as parseYaml } from 'yaml';
import { indexPage } from '../lib/template-pages.mjs';
import { STARTER_KIT_SUMMARY } from '../lib/starter-kit.mjs';
import { sectionPages } from '../../src/lib/section-index.mjs';

const summary = (over) => ({ title: 'T', href: '/templates/plans/t/', type: 'plan', stage: 'core', status: 'draft', description: 'What T is for.', ...over });

test('the templates index shows each summary, the starter kit first and groups in sidebar order', () => {
	const index = indexPage([
		STARTER_KIT_SUMMARY,
		summary({ title: 'Log Review Procedure', href: '/templates/procedures/log-review-procedure/', type: 'procedure', description: 'The steps for log review.' }),
		summary({ title: 'Audit Logging Standard', href: '/templates/standards/audit-logging-standard/', type: 'standard', stage: 'operate', status: 'reviewed', description: 'What a | pipe does.' }),
	]);
	assert.ok(index.includes(`## Starter kit\n\n- [Starter kit](/templates/starter-kit/): ${STARTER_KIT_SUMMARY.description}\n`));
	assert.ok(index.includes('| Template | What it is | Program stage | Status |'));
	assert.ok(index.includes('| [Log Review Procedure](/templates/procedures/log-review-procedure/) | The steps for log review. | [Core](/program/core/) | Draft |'));
	assert.ok(index.includes('| [Audit Logging Standard](/templates/standards/audit-logging-standard/) | What a \\| pipe does. | [Operate](/program/operate/) | Reviewed |'));
	const at = (h) => index.indexOf(`\n## ${h}\n`);
	assert.ok(at('Starter kit') < at('Standards') && at('Standards') < at('Procedures'), 'procedures follow standards, as in the sidebar');
	assert.equal(at('Plans'), -1, 'a type with no pages has no section');
});

test('the templates index fails on a page with no summary or an unknown type', () => {
	assert.throws(() => indexPage([summary({ description: ' ' })]), /\/templates\/plans\/t\/: no description/);
	assert.throws(() => indexPage([summary({ type: 'memo' })]), /type "memo" has no group/);
});

// The committed index lists every committed template page with its own front matter description.
test('the committed templates index lists every template page with its description', () => {
	const root = 'src/content/docs/templates';
	const index = fs.readFileSync(path.join(root, 'index.md'), 'utf8').replace(/\r\n/g, '\n');
	const files = fs.readdirSync(root, { recursive: true }).filter((f) => f.endsWith('.md') && f !== 'index.md');
	assert.ok(files.length > 90);
	for (const file of files) {
		const text = fs.readFileSync(path.join(root, file), 'utf8').replace(/\r\n/g, '\n');
		const { title, description } = parseYaml(text.match(/^---\n([\s\S]*?)\n---\n/)[1]);
		const href = `/templates/${file.replace(/\\/g, '/').replace(/\.md$/, '')}/`;
		assert.ok(description?.trim(), `${file} has a description`);
		const row = `| [${title}](${href}) | ${description.replace(/\|/g, '\\|')} |`;
		const item = `- [${title}](${href}): ${description}`;
		assert.ok(index.includes(row) || index.includes(item), `the index lists ${file} with its description`);
	}
});

const entry = (id, data) => ({ id, data: { title: id, description: `About ${id}.`, ...data } });

test('a section index lists the section pages, without the index or drafts, in sidebar order', () => {
	const entries = [
		entry('industries', { title: 'Industry guides' }),
		entry('industries/healthcare', { title: 'Healthcare' }),
		entry('industries/defense', { title: 'Defense', sidebar: { order: 1 } }),
		entry('industries/energy', { title: 'Energy', draft: true }),
		entry('industries/financial', { title: 'Financial services', description: '  Banks.  ' }),
		entry('technology/cloud/aws', { title: 'AWS' }),
		entry('industries-other/x', { title: 'Not in the section' }),
	];
	assert.deepEqual(sectionPages(entries, 'industries'), [
		{ title: 'Defense', href: '/industries/defense/', description: 'About industries/defense.' },
		{ title: 'Financial services', href: '/industries/financial/', description: 'Banks.' },
		{ title: 'Healthcare', href: '/industries/healthcare/', description: 'About industries/healthcare.' },
	]);
	assert.deepEqual(sectionPages(entries, 'technology'), [{ title: 'AWS', href: '/technology/cloud/aws/', description: 'About technology/cloud/aws.' }]);
});

test('a section with no published pages gives an empty list, so the index shows what is planned', () => {
	assert.deepEqual(sectionPages([entry('industries', {}), entry('industries/draft', { draft: true })], 'industries'), []);
});

test('a section page with no description fails the build', () => {
	assert.throws(
		() => sectionPages([entry('technology/identity/okta', { description: undefined }), entry('technology/x', { description: '' })], 'technology'),
		/technology index: give each page a front matter description, the one-line summary the index shows: technology\/identity\/okta, technology\/x\./,
	);
});

test('a DevSecOps page with no controls fails the build (DSO-03); other sections do not need them', () => {
	const pages = [
		entry('devsecops', { title: 'DevSecOps' }),
		entry('devsecops/change-management', { title: 'Change management', controls: ['cm-3', 'cm-4'] }),
		entry('devsecops/baselines', { title: 'Baselines' }),
		entry('devsecops/findings', { title: 'Findings', controls: [] }),
	];
	assert.throws(
		() => sectionPages(pages, 'devsecops'),
		/devsecops index: give each page a front matter `controls` list, the controls it gives guidance on: devsecops\/baselines, devsecops\/findings\./,
	);
	assert.deepEqual(sectionPages(pages.slice(0, 2), 'devsecops'), [
		{ title: 'Change management', href: '/devsecops/change-management/', description: 'About devsecops/change-management.' },
	]);
	assert.throws(() => sectionPages([entry('devsecops/x', { controls: ['cm-3'], description: ' ' })], 'devsecops'), /give each page a front matter description/);
	assert.equal(sectionPages([entry('industries/healthcare', {})], 'industries').length, 1);
});

test('the industry, technology and DevSecOps index pages are generated, not hand lists', () => {
	for (const section of ['industries', 'technology', 'devsecops']) {
		const text = fs.readFileSync(`src/content/docs/${section}/index.mdx`, 'utf8');
		assert.match(text, new RegExp(`<SectionIndex section="${section}"`));
	}
});

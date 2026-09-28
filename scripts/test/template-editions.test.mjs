// Tests for editions and federal sections (TPL-04).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { BlockError, renderBlocks } from '../../src/lib/template-editions.ts';

const src = [
	'# Policy',
	'',
	':::guidance',
	'Why this exists.',
	'',
	'What assessors ask for.',
	':::',
	'',
	'## Review',
	'',
	'- Review it. (AC-1c)',
	'',
	':::federal',
	'Federal text citing [OMB A-130](https://example.gov/a130).',
	':::',
	'',
	'End.',
].join('\n');

test('the clean edition drops guidance entirely and keeps federal sections', () => {
	const out = renderBlocks(src, 'clean', 'md');
	assert.doesNotMatch(out, /Why this exists|assessors|Guidance/);
	assert.equal(
		out,
		'# Policy\n\n## Review\n\n- Review it. (AC-1c)\n\n### Federal systems\n\nFederal text citing [OMB A-130](https://example.gov/a130).\n\nEnd.',
	);
});

test('the annotated .md edition shows guidance as a labelled blockquote', () => {
	const out = renderBlocks(src, 'annotated', 'md');
	assert.match(out, /# Policy\n\n> \*\*Guidance:\*\* Why this exists\.\n>\n> What assessors ask for\.\n\n## Review/);
	assert.match(out, /### Federal systems\n\nFederal text/);
});

test('the site shows guidance as an aside and wraps federal sections', () => {
	const out = renderBlocks(src, 'annotated', 'site');
	assert.match(out, /:::note\[Guidance\]\nWhy this exists\.\n\nWhat assessors ask for\.\n:::/);
	assert.match(out, /<div class="tpl-federal">\n\n### Federal systems\n\nFederal text[^\n]*\n\n<\/div>/);
});

test('.docx gets pandoc custom-style divs for guidance', () => {
	assert.match(renderBlocks(src, 'annotated', 'docx'), /::: \{custom-style="Guidance"\}\nWhy this exists\.\n\nWhat assessors ask for\.\n:::/);
	assert.doesNotMatch(renderBlocks(src, 'clean', 'docx'), /Guidance/);
});

test('the federal heading sits one level below its section, between 2 and 6', () => {
	assert.match(renderBlocks(':::federal\nx\n:::', 'clean', 'md'), /^## Federal systems/);
	assert.match(renderBlocks('###### Deep\n\n:::federal\nx\n:::', 'clean', 'md'), /\n###### Federal systems/);
});

test('annotated site and .md editions carry the same words', () => {
	const words = (s) => s.replace(/[^A-Za-z ]+/g, ' ').split(/\s+/).filter((w) => !['note', 'Guidance', 'div', 'class', 'tpl', 'federal'].includes(w));
	assert.deepEqual(words(renderBlocks(src, 'annotated', 'site')), words(renderBlocks(src, 'annotated', 'md')));
});

test('bad blocks fail with a line number', () => {
	assert.throws(() => renderBlocks(':::tip\nx\n:::', 'clean', 'md'), (e) => e instanceof BlockError && /line 1: unknown block ":::tip"/.test(e.message));
	assert.throws(() => renderBlocks('a\n:::guidance\nx', 'clean', 'md'), /line 2: :::guidance is never closed/);
	assert.throws(() => renderBlocks(':::federal\n:::guidance\n:::\n:::', 'clean', 'md'), /line 2: blocks can't nest/);
	assert.throws(() => renderBlocks('a\n:::', 'clean', 'md'), /line 2: ":::" closes no block/);
});

// Tests for control and enhancement search tokens (NAV-01).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cleanExcerpt, controlTokenFor, processTerm, rehypeEnhancementTokens, tokenFor } from '../../src/lib/search-tokens.mjs';

test('enhancement ids in any common form become the token', () => {
	for (const q of ['AC-2(3)', 'ac-2(3)', 'AC-2 (3)', 'AC2(3)', 'ac-2.3']) assert.equal(processTerm(q), 'ac2e3', q);
	assert.equal(processTerm('SC-7(21)'), 'sc7e21');
	assert.equal(tokenFor('SI', '04', '05'), 'si4e5');
});

test('base control ids become the control token', () => {
	for (const q of ['AC-2', 'ac-2', 'AC2']) assert.equal(processTerm(q), 'ac2ctl', q);
	assert.equal(processTerm('AC-23'), 'ac23ctl');
	assert.equal(processTerm('sc-7(21) and SC-7'), 'sc7e21 and sc7ctl');
	assert.equal(processTerm('AC-2(3) disable'), 'ac2e3 disable');
	assert.equal(controlTokenFor('PM', '30'), 'pm30ctl');
});

test('other words are left alone, including statement parts and non-family ids', () => {
	for (const q of ['account management', 'SP 800-53', 'MD5', 'IPv4', 'SHA256', 'AC-2c', 'FIPS 140-3']) assert.equal(processTerm(q), q);
});

test('tokens are removed from excerpts, highlighted or not', () => {
	assert.equal(cleanExcerpt('AC-2(3) Disable Accounts. <mark>ac2e3</mark> Baselines: Moderate'), 'AC-2(3) Disable Accounts. Baselines: Moderate');
	assert.equal(cleanExcerpt('Accounts. ac2e3 Baselines'), 'Accounts. Baselines');
	assert.equal(cleanExcerpt('What these mean. <mark>ac2ctl</mark> Baselines'), 'What these mean. Baselines');
	assert.equal(cleanExcerpt('SHA-256 and AC-23 stay'), 'SHA-256 and AC-23 stay');
	assert.equal(cleanExcerpt('part (AC-2c) stays'), 'part (AC-2c) stays');
});

// The hast Astro gives rehype plugins for "<a id="ac-2.3"></a>\n\n### AC-2(3) Disable Accounts".
const tree = () => ({
	type: 'root',
	children: [
		{ type: 'element', tagName: 'p', properties: {}, children: [{ type: 'raw', value: '<a id="ac-2.3">' }, { type: 'raw', value: '</a>' }] },
		{ type: 'text', value: '\n' },
		{ type: 'element', tagName: 'h3', properties: {}, children: [{ type: 'text', value: 'AC-2(3) Disable Accounts' }] },
		{ type: 'element', tagName: 'p', properties: {}, children: [{ type: 'text', value: 'Body.' }] },
	],
});

test('the rehype plugin adds a hidden token right after the enhancement heading', () => {
	const t = tree();
	rehypeEnhancementTokens()(t);
	const span = t.children[3];
	assert.equal(span.tagName, 'span');
	assert.equal(span.properties.hidden, true);
	assert.equal(span.children[0].value, 'ac2e3');
	assert.equal(t.children[2].tagName, 'h3');
});

test('the rehype plugin ignores other anchors and paragraphs', () => {
	const t = tree();
	t.children[0].children = [{ type: 'raw', value: '<a id="ac-2">' }, { type: 'raw', value: '</a>' }];
	rehypeEnhancementTokens()(t);
	assert.equal(t.children.length, 4);
});

test('the rehype plugin adds the control token at the top of a control page', () => {
	const t = tree();
	rehypeEnhancementTokens()(t, { data: { astro: { frontmatter: { control: { id: 'AC-2' } } } } });
	assert.equal(t.children[0].tagName, 'span');
	assert.equal(t.children[0].properties.hidden, true);
	assert.equal(t.children[0].children[0].value, 'ac2ctl');
});

test('the rehype plugin adds no control token to other pages', () => {
	const t = tree();
	rehypeEnhancementTokens()(t, { data: { astro: { frontmatter: { title: 'Access Control Policy' } } } });
	assert.equal(t.children[0].tagName, 'p');
});

// Tests for control enhancement search tokens (NAV-01).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cleanExcerpt, processTerm, rehypeEnhancementTokens, tokenFor } from '../../src/lib/search-tokens.mjs';

test('enhancement ids in any common form become the token', () => {
	for (const q of ['AC-2(3)', 'ac-2(3)', 'AC-2 (3)', 'AC2(3)', 'ac-2.3']) assert.equal(processTerm(q), 'ac2e3', q);
	assert.equal(processTerm('SC-7(21)'), 'sc7e21');
	assert.equal(tokenFor('SI', '04', '05'), 'si4e5');
});

test('base control ids and other words are left alone', () => {
	for (const q of ['AC-2', 'AC-23', 'ac-20', 'account management', 'SP 800-53']) assert.equal(processTerm(q), q);
	assert.equal(processTerm('AC-2(3) disable'), 'ac2e3 disable');
});

test('tokens are removed from excerpts, highlighted or not', () => {
	assert.equal(cleanExcerpt('AC-2(3) Disable Accounts. <mark>ac2e3</mark> Baselines: Moderate'), 'AC-2(3) Disable Accounts. Baselines: Moderate');
	assert.equal(cleanExcerpt('Accounts. ac2e3 Baselines'), 'Accounts. Baselines');
	assert.equal(cleanExcerpt('SHA-256 and AC-23 stay'), 'SHA-256 and AC-23 stay');
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

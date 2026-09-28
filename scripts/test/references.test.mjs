// Tests for "Referenced by" on control pages (LINK-01).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { referencesFor } from '../../src/lib/references.ts';

const pages = [
	{ id: 'technology/entra-id', title: 'Microsoft Entra ID', controls: ['ac-2', 'ia-2'] },
	{ id: 'industries/healthcare', title: 'Healthcare', controls: ['ac-2.3', 'ac-2.12'] },
	{ id: 'templates/account-procedure', title: 'Account procedure', controls: ['ac-2', 'ac-2.3'] },
	{ id: 'articles/lessons', title: 'Lessons learned', controls: ['ac-2'] },
	{ id: 'technology/aws', title: 'AWS', controls: ['ac-20', 'ac-21'] },
];

test('lists every page citing the control or its enhancements, grouped by kind', () => {
	assert.deepEqual(
		referencesFor('AC-2', pages).map((r) => [r.kind, r.title]),
		[
			['Template', 'Account procedure'],
			['Industry guide', 'Healthcare'],
			['Technology playbook', 'Microsoft Entra ID'],
			['Page', 'Lessons learned'],
		],
	);
});

test('does not match controls that only share a prefix (ac-2 vs ac-20)', () => {
	assert.ok(!referencesFor('AC-2', pages).some((r) => r.title === 'AWS'));
	assert.deepEqual(referencesFor('AC-20', pages).map((r) => r.title), ['AWS']);
});

test('names enhancements only when the page does not cite the base control', () => {
	const refs = referencesFor('AC-2', pages);
	assert.deepEqual(refs.find((r) => r.title === 'Healthcare').enhancements, ['AC-2(3)', 'AC-2(12)']);
	assert.deepEqual(refs.find((r) => r.title === 'Account procedure').enhancements, []);
});

test('links are root-relative page paths, and no match gives an empty list', () => {
	assert.equal(referencesFor('IA-2', pages)[0].href, '/technology/entra-id/');
	assert.deepEqual(referencesFor('SI-4', pages), []);
});

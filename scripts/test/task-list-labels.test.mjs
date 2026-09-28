// Tests for task list checkbox labels (PRES-03).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { rehypeTaskListLabels } from '../../src/lib/task-list-labels.mjs';

const el = (tagName, children = [], properties = {}) => ({ type: 'element', tagName, properties, children });
const text = (value) => ({ type: 'text', value });
const box = () => el('input', [], { type: 'checkbox', disabled: true });
const run = (tree) => (rehypeTaskListLabels()(tree), tree);

test('a tight task item gets its checkbox and text wrapped in a label', () => {
	const li = el('li', [box(), text(' Roles named '), el('code', [text('AO')])], { className: ['task-list-item'] });
	run(el('ul', [li]));
	assert.equal(li.children.length, 1);
	const [label] = li.children;
	assert.equal(label.tagName, 'label');
	assert.deepEqual(label.children.map((c) => c.tagName ?? c.value), ['input', ' Roles named ', 'code']);
});

test('the label stops before a nested list', () => {
	const nested = el('ul', [el('li', [text('child')])]);
	const li = el('li', [box(), text(' Parent'), nested]);
	run(el('ul', [li]));
	assert.deepEqual(li.children.map((c) => c.tagName), ['label', 'ul']);
	assert.equal(li.children[1], nested);
});

test('a loose task item is labelled inside its paragraph', () => {
	const p = el('p', [box(), text(' Item')]);
	const li = el('li', [p]);
	run(el('ul', [li]));
	assert.equal(li.children[0], p);
	assert.equal(p.children[0].tagName, 'label');
});

test('other lists and inputs are left alone', () => {
	const plain = el('li', [text('No checkbox')]);
	run(el('ul', [plain]));
	assert.deepEqual(plain.children, [text('No checkbox')]);
});

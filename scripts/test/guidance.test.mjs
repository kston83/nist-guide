import { test } from 'node:test';
import assert from 'node:assert/strict';
import { builtPath, hasGuidance, missingGuidance } from '../lib/guidance.mjs';
import { END, GUIDE, tailProblem } from '../lib/generated.mjs';

const md = (fm, body = '') => `---\ntitle: X\n${fm}---\n\n${body}`;
const shown = '<h2 id="how-to-apply-it">How to apply it</h2>';

test('guidance front matter is detected, and only as a top-level key', () => {
	assert.equal(hasGuidance(md('guidance: draft\n')), true);
	assert.equal(hasGuidance(md('')), false);
	assert.equal(hasGuidance(md('control:\n  guidance: draft\n')), false);
	assert.equal(hasGuidance('no front matter'), false);
});

test('control pages map to their built index.html', () => {
	assert.equal(builtPath('ac/ac-2.md'), 'ac/ac-2/index.html');
	assert.equal(builtPath('controls\\sc\\sc-7.md'), 'controls/sc/sc-7/index.html');
});

test('pages with guidance but no rendered heading are reported (G0)', () => {
	const pages = [
		{ rel: 'ok.md', markdown: md('guidance: draft\n'), html: `<p>x</p>${shown}` },
		{ rel: 'hidden.md', markdown: md('guidance: draft\n'), html: '<p>NIST text only</p>' },
		{ rel: 'unbuilt.md', markdown: md('guidance: draft\n'), html: null },
		{ rel: 'none.md', markdown: md(''), html: '<p>x</p>' },
	];
	assert.deepEqual(missingGuidance(pages), ['hidden.md', 'unbuilt.md']);
});

test('a guidance marker cut short is caught before the build (G0)', () => {
	const page = (tail) => `${md('')}<!-- nist:start -->\nx\n${END}\n${tail}`;
	assert.equal(tailProblem(page(`\n${GUIDE}\n\n## How to apply it\n`)), null);
	assert.equal(tailProblem(page(`\n${GUIDE}\n<!-- TODO(verify): a date -->\n`)), null);
	assert.match(tailProblem(page('\n<!-- guidance: write bel\n\n## How to apply it\n')), /unclosed HTML comment/);
	assert.match(tailProblem(page('\n<!-- guidance: write here -->\n')), /guidance marker altered/);
	assert.match(tailProblem(page(`\n${GUIDE}\n<!-- a note\n`)), /unclosed/);
	// Pages without the marker (baseline and family pages) are fine.
	assert.equal(tailProblem(page('\nFamily intro.\n')), null);
	assert.equal(tailProblem('no markers'), null);
});

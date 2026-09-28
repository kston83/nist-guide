// Tests for kit helpers (TPL-05). The .docx test runs only where pandoc is available.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { strFromU8, unzipSync } from 'fflate';
import { documentHeader, findPandoc, kitReadme, registerCsv, toDocx, withHeader, zipDeterministic } from '../lib/template-kit.mjs';

const header = documentHeader({
	version: '1.0.0',
	baseline: 'Moderate',
	edition: 'clean',
	basis: 'SP 800-53 release 5.2.0',
	url: 'https://example.org/templates/policies/ac/',
});

test('the header names version, baseline, edition, NIST basis, and carries the notices', () => {
	assert.match(header, /^\*\*Template version:\*\* 1\.0\.0 · \*\*Baseline:\*\* Moderate · \*\*Edition:\*\* Ready to adopt · \*\*NIST basis:\*\* SP 800-53 Rev\. 5, release 5\.2\.0\n\n/);
	assert.match(header, /not legal advice/);
	assert.match(header, /CC0 1\.0/);
	assert.match(header, /<https:\/\/example\.org\/templates\/policies\/ac\/>/);
	assert.doesNotMatch(documentHeader({ version: '1', edition: 'annotated', basis: 'x', url: 'u' }), /Baseline/);
});

test('the header goes right after the title, or at the top without one', () => {
	assert.equal(withHeader('# Title\n\n## Purpose\n', 'HEADER'), '# Title\n\nHEADER\n\n## Purpose\n');
	assert.equal(withHeader('No title.\n', 'HEADER'), 'HEADER\n\nNo title.\n');
});

test('zips are deterministic, sorted, and hold the files unchanged', () => {
	const files = { 'b/two.md': new TextEncoder().encode('two'), 'a/one.csv': new TextEncoder().encode('one') };
	const first = zipDeterministic(files);
	const second = zipDeterministic({ 'a/one.csv': files['a/one.csv'], 'b/two.md': files['b/two.md'] });
	assert.deepEqual(first, second);
	const back = unzipSync(first);
	assert.deepEqual(Object.keys(back), ['a/one.csv', 'b/two.md']);
	assert.equal(strFromU8(back['b/two.md']), 'two');
});

test('a form register becomes a CSV header row; forms without one give null', () => {
	const body = 'Intro.\n\n| Field | Meaning |\n| --- | --- |\n| A | B |\n\n## Register\n\n| ID | Weakness, short | Owner |\n| --- | --- | --- |\n| {{fill:ID}} | x | y |\n';
	assert.equal(registerCsv(body), '﻿ID,"Weakness, short",Owner\r\n');
	assert.equal(registerCsv('## Other\n\n| A |\n'), null);
});

test('the kit readme states version, basis, license and the not-legal-advice notice', () => {
	const text = kitReadme({ version: '1.0.0', basis: 'SP 800-53 release 5.2.0', url: 'https://example.org/templates/' });
	assert.match(text, /Template version 1\.0\.0, based on NIST SP 800-53 Rev\. 5, release 5\.2\.0\./);
	assert.match(text, /CC0 1\.0 Universal/);
	assert.match(text, /not legal advice/);
});

test('pandoc makes a .docx that uses the reference styles for fields and guidance', async (t) => {
	const pandoc = await findPandoc();
	if (!pandoc) return t.skip('pandoc not found');
	const docx = await toDocx('# T\n\nThe [\\[Owner\\]]{custom-style="Fill-in"} shall act. $5 @x\n\n::: {custom-style="Guidance"}\nWhy.\n:::\n', {
		pandoc,
		referenceDoc: 'templates/reference.docx',
		sourceDateEpoch: 1790000000,
	});
	const parts = unzipSync(new Uint8Array(docx));
	const doc = strFromU8(parts['word/document.xml']);
	const styles = strFromU8(parts['word/styles.xml']);
	assert.match(doc, /<w:rStyle w:val="Fill-in"\s*\/>/);
	assert.match(doc, /<w:pStyle w:val="Guidance"\s*\/>/);
	assert.match(doc, /\$5 @x/); // no math or citation parsing
	assert.match(styles, /w:styleId="Fill-in"[\s\S]*?<w:highlight w:val="yellow"\s*\/>/);
	assert.ok(fs.existsSync('templates/reference.docx'));
});

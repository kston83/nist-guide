#!/usr/bin/env node
/**
 * Checks site search after a build (PRD NAV-01): searching a control or
 * enhancement id returns that control's page first.
 *
 *   npm run build && npm run check:search
 *
 * Runs Pagefind's own search client on dist/pagefind in Node, applying the
 * same processTerm the search box uses (src/lib/search-tokens.mjs).
 */
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { ENHANCEMENT_ID, processTerm } from '../src/lib/search-tokens.mjs';

const BASE = '/nist-guide';
const bundle = new URL('../dist/pagefind/', import.meta.url);

// query -> expected first result (and, for enhancements, the sub-result anchor prefix)
const CASES = [
	['AC-2', '/controls/ac/ac-2/'],
	['ac-2', '/controls/ac/ac-2/'],
	['AC-20', '/controls/ac/ac-20/'],
	['AC-23', '/controls/ac/ac-23/'],
	['SI-4', '/controls/si/si-4/'],
	['AC-2(3)', '/controls/ac/ac-2/', '#ac-23-'],
	['ac-2 (3)', '/controls/ac/ac-2/', '#ac-23-'],
	['ac-2.3', '/controls/ac/ac-2/', '#ac-23-'],
	['IA-2(1)', '/controls/ia/ia-2/', '#ia-21-'],
	['SC-7(21)', '/controls/sc/sc-7/', '#sc-721-'],
	['SI-4(5)', '/controls/si/si-4/', '#si-45-'],
	['account management', '/controls/ac/ac-2/'],
	// Template titles: the PRD's "incident response plan" case.
	['incident response plan', '/templates/plans/incident-response-plan/'],
];

// The search box must use the wrapped Pagefind UI (Vite alias in astro.config.mjs).
const assets = new URL('../dist/_astro/', import.meta.url);
const scripts = (await fs.readdir(assets)).filter((f) => f.endsWith('.js'));
const wrapped = await Promise.all(scripts.map(async (f) => (await fs.readFile(new URL(f, assets), 'utf8')).includes(ENHANCEMENT_ID.source)));
if (!wrapped.some(Boolean)) {
	console.error('FAIL the built search box does not include processTerm; check the @pagefind/default-ui alias in astro.config.mjs.');
	process.exit(1);
}
console.log('ok   search box bundle includes processTerm');

// Pagefind fetches its index files; serve them from disk.
globalThis.fetch = async (url) => new Response(await fs.readFile(fileURLToPath(String(url).split('?')[0])));

const pagefind = await import(new URL('pagefind.js', bundle).href);
await pagefind.options({ basePath: bundle.href, baseUrl: `${BASE}/` });
await pagefind.init();

const path = (url) => url.slice(url.indexOf(BASE) + BASE.length);
let failed = 0;
for (const [query, page, anchor] of CASES) {
	const { results } = await pagefind.search(processTerm(query));
	const first = results[0] && (await results[0].data());
	const got = first ? path(first.url) : '(no results)';
	const sub = anchor && first?.sub_results.map((s) => path(s.url)).find((u) => u.includes('#'));
	const ok = got === page && (!anchor || sub?.startsWith(page + anchor));
	if (!ok) failed++;
	console.log(`${ok ? 'ok  ' : 'FAIL'} "${query}" -> ${got}${anchor ? ` (${sub ?? 'no section'})` : ''}${ok ? '' : `, expected ${page}${anchor ?? ''}`}`);
}
if (failed) {
	console.error(`\n${failed} search check(s) failed.`);
	process.exit(1);
}
console.log(`\nAll ${CASES.length} search checks passed.`);

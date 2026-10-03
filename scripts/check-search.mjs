#!/usr/bin/env node
/**
 * Checks site search after a build (PRD NAV-01): searching a control or
 * enhancement id returns that control's page first. Besides the cases below,
 * every base control id in the catalog is searched as "AC-2", "ac-2" and "AC2".
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
	// A control title no template shares. "account management" was the case until
	// row 27: a template whose title contains a control's title ranks above the
	// control, by design (its lead paragraph carries data-pagefind-weight="10"),
	// so it now finds the Account Management Procedure first, as "incident response
	// plan" finds the plan before IR-8.
	['access enforcement', '/controls/ac/ac-3/'],
	// Template titles: the PRD's "incident response plan" case.
	['incident response plan', '/templates/plans/incident-response-plan/'],
	['account management procedure', '/templates/procedures/account-management-procedure/'],
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

// Every base control id, in three common forms; only failures are printed for these.
const named = CASES.length;
const catalog = JSON.parse(await fs.readFile(new URL('../src/data/catalog.json', import.meta.url), 'utf8'));
for (const { id, label, family } of catalog.controls.filter((c) => !c.id.includes('.'))) {
	const page = `/controls/${family}/${id}/`;
	CASES.push([label, page], [label.toLowerCase(), page], [label.replace('-', ''), page]);
}

const path = (url) => url.slice(url.indexOf(BASE) + BASE.length);
let failed = 0;
for (const [i, [query, page, anchor]] of CASES.entries()) {
	const { results } = await pagefind.search(processTerm(query));
	const first = results[0] && (await results[0].data());
	const got = first ? path(first.url) : '(no results)';
	const sub = anchor && first?.sub_results.map((s) => path(s.url)).find((u) => u.includes('#'));
	const ok = got === page && (!anchor || sub?.startsWith(page + anchor));
	if (!ok) failed++;
	if (!ok || i < named) console.log(`${ok ? 'ok  ' : 'FAIL'} "${query}" -> ${got}${anchor ? ` (${sub ?? 'no section'})` : ''}${ok ? '' : `, expected ${page}${anchor ?? ''}`}`);
}
if (failed) {
	console.error(`\n${failed} search check(s) failed.`);
	process.exit(1);
}
console.log(`\nAll ${CASES.length} search checks passed.`);

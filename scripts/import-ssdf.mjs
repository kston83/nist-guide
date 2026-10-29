#!/usr/bin/env node
/**
 * Generates the SSDF practice pages (PRD SSDF-01) from NIST's SP 800-218
 * table, the Excel supplement published with SP 800-218 (SSDF version 1.1).
 *
 *   npm run ssdf              use the cached download if present
 *   npm run ssdf -- --refresh download the table again from NIST
 *
 * Writes, under src/content/docs/methods/ssdf/:
 *   <practice>.md  one page per practice (po-1.md ... rv-3.md): NIST's practice,
 *                  task and notional implementation example text between
 *                  <!-- nist:start --> and <!-- nist:end -->, rewritten every run
 *                  with the front matter keys the generator owns (title,
 *                  description, sidebar, source). Other keys and everything
 *                  below the nist:end marker are kept, as on control pages.
 *   index.md       the overview, hand-written; only its nist block (the list of
 *                  groups and practices) is generated. The run fails if it is missing.
 * and src/data/ssdf.json, the parsed table (groups, practices, tasks, and each
 * task's references, with its SP 800-53 references as control ids), committed so
 * the build needs no download.
 *
 * The table's URL carries no version, so the download is pinned by its SHA-256:
 * if NIST replaces the file, the run stops. To take a new table, check the
 * landing page, update SHA256 (and VERSION and the rest of SOURCE if the
 * version changed), run with --refresh, and review the diff.
 */
import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { mergeGenerated, tailProblem } from './lib/generated.mjs';
import { parseSsdf, SSDF_OWNED_KEYS, ssdfPages } from './lib/ssdf.mjs';
import { readWorkbook } from './lib/xlsx.mjs';

const FILE = 'nist.sp.800-218.ssdf-table.xlsx';
const URL = `https://csrc.nist.gov/files/pubs/sp/800/218/final/docs/${FILE}`;
// The file NIST served on 2026-10-29 (Last-Modified: Sun, 29 Sep 2024 23:20:56 GMT, 50,039 bytes).
const SHA256 = 'f5729c4c6c792cbf6cfbea74eee7cc84c579b2109006fe3cbfa8934eb460bd55';
const SOURCE = {
	title: 'Secure Software Development Framework (SSDF) Version 1.1: Recommendations for Mitigating the Risk of Software Vulnerabilities',
	publication: 'SP 800-218',
	version: '1.1',
	status: 'final',
	published: 'February 2022',
	// Month the publication's status was last checked at its landing page; update it with each recheck.
	checked: '2026-10',
	landing: 'https://csrc.nist.gov/pubs/sp/800/218/final',
	file: FILE,
	url: URL,
	sha256: SHA256,
};
const OUT = 'src/content/docs/methods/ssdf';
const DATA = 'src/data/ssdf.json';
const IDS = 'src/data/control-ids.json';
const CACHE = path.join('.cache/ssdf', SHA256.slice(0, 12));
const refresh = process.argv.includes('--refresh');

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex');

async function getTable() {
	const cached = path.join(CACHE, FILE);
	if (!refresh) {
		try {
			const bytes = await fs.readFile(cached);
			if (sha256(bytes) === SHA256) return bytes;
		} catch {}
	}
	console.log(`Downloading ${FILE}`);
	const res = await fetch(URL, { headers: { 'user-agent': 'rmf-field-guide (npm run ssdf)' } });
	if (!res.ok) throw new Error(`Download failed (${res.status}) for ${URL}`);
	const bytes = new Uint8Array(await res.arrayBuffer());
	const digest = sha256(bytes);
	if (digest !== SHA256)
		throw new Error(
			`${FILE} has changed at NIST (SHA-256 ${digest}, pinned ${SHA256}). Check the SP 800-218 landing page, then update the pin and review the diff.`,
		);
	await fs.mkdir(CACHE, { recursive: true });
	await fs.writeFile(cached, bytes);
	return bytes;
}

const controlIds = new Set(JSON.parse(await fs.readFile(IDS, 'utf8')).ids);
const data = parseSsdf(readWorkbook(await getTable()), controlIds);
const pages = ssdfPages(data, SOURCE);

let changed = 0;
const problems = [];
for (const page of pages) {
	const file = path.join(OUT, page.file);
	let existing = null;
	try {
		existing = await fs.readFile(file, 'utf8');
	} catch {}
	if (existing === null && page.frontmatter === null) throw new Error(`${file} is missing; it is hand-written around its nist block.`);
	const next = mergeGenerated(existing, page, SSDF_OWNED_KEYS);
	if (next === null) throw new Error(`${file} has no nist markers.`);
	const problem = tailProblem(next);
	if (problem) problems.push(`${file}: ${problem}`);
	if (next !== existing?.replace(/\r\n/g, '\n')) {
		await fs.mkdir(path.dirname(file), { recursive: true });
		await fs.writeFile(file, next);
		changed++;
	}
}

// A page whose practice is no longer in the table (after a version change) is
// not deleted, as it may hold hand-written guidance: move or remove it by hand.
const expected = new Set(pages.map((p) => p.file));
const stale = (await fs.readdir(OUT)).filter((f) => f.endsWith('.md') && !expected.has(f));
for (const f of stale) problems.push(`${path.join(OUT, f)}: not a practice in the SSDF table; move its guidance and delete it`);

if (problems.length) {
	for (const p of problems) console.error(p);
	throw new Error(`${problems.length} SSDF page(s) need fixing.`);
}

const text = `${JSON.stringify({ source: SOURCE, ...data }, null, '\t')}\n`;
let existingData = null;
try {
	existingData = (await fs.readFile(DATA, 'utf8')).replace(/\r\n/g, '\n');
} catch {}
if (text !== existingData) {
	await fs.writeFile(DATA, text);
	changed++;
}

const tasks = data.practices.reduce((n, p) => n + p.tasks.length, 0);
console.log(
	`SSDF version ${SOURCE.version}: ${data.practices.length} practice pages in ${data.groups.length} groups, ${tasks} tasks; ${changed} file(s) changed.`,
);

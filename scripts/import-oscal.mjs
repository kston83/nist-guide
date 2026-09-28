#!/usr/bin/env node
/**
 * Generates the SP 800-53 control pages from NIST's official OSCAL catalog.
 *
 *   npm run controls              use cached downloads if present
 *   npm run controls -- --refresh download the catalog again from NIST
 *
 * Each control page has two parts:
 *   1. The NIST text, between <!-- nist:start --> and <!-- nist:end -->.
 *      This part, and the front matter keys the generator owns (title,
 *      description, sidebar, control), are rewritten every time the script runs.
 *      Other front matter keys, such as guidance and reviewed, are kept.
 *   2. Your guidance, below <!-- guidance: write below this line -->.
 *      The script never touches anything after <!-- nist:end -->.
 *
 * The page-building logic lives in scripts/lib/ and is covered by npm test.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { buildPages } from './lib/oscal.mjs';
import { mergeGenerated } from './lib/generated.mjs';

// NIST oscal-content is pinned to a commit so every machine and CI run
// generates the same pages. To take a new NIST release, update OSCAL_REF
// (and the tag in the comment), run with --refresh, and review the diff.
const OSCAL_REF = '78650f02ad9321bb7b817846f8fbd4f2bcd620de'; // tag v1.5.0: SP 800-53 release 5.2.0
const SOURCE = `https://raw.githubusercontent.com/usnistgov/oscal-content/${OSCAL_REF}/nist.gov/SP800-53/rev5/json`;
const CATALOG = 'NIST_SP-800-53_rev5_catalog.json';
const BASELINES = { Low: 'LOW', Moderate: 'MODERATE', High: 'HIGH', Privacy: 'PRIVACY' };
const OUT = 'src/content/docs/controls';
const CACHE = path.join('.cache/oscal', OSCAL_REF);
const refresh = process.argv.includes('--refresh');

async function getJson(file) {
	const cached = path.join(CACHE, file);
	if (!refresh) {
		try {
			return JSON.parse(await fs.readFile(cached, 'utf8'));
		} catch {}
	}
	console.log(`Downloading ${file}`);
	const res = await fetch(`${SOURCE}/${file}`);
	if (!res.ok) throw new Error(`Download failed (${res.status}) for ${file}`);
	const text = await res.text();
	await fs.mkdir(CACHE, { recursive: true });
	await fs.writeFile(cached, text);
	return JSON.parse(text);
}

const catalog = (await getJson(CATALOG)).catalog;
const profiles = {};
for (const [name, file] of Object.entries(BASELINES))
	profiles[name] = (await getJson(`NIST_SP-800-53_rev5_${file}-baseline_profile.json`)).profile;

const { version, pages } = buildPages(catalog, profiles);

let changed = 0;
for (const page of pages) {
	const file = path.join(OUT, page.file);
	let existing = null;
	try {
		existing = await fs.readFile(file, 'utf8');
	} catch {}
	const next = mergeGenerated(existing, page);
	if (next === null) {
		console.warn(`Skipped ${file}: no generated markers found.`);
		continue;
	}
	if (next !== existing?.replace(/\r\n/g, '\n')) {
		await fs.mkdir(path.dirname(file), { recursive: true });
		await fs.writeFile(file, next);
		changed++;
	}
}

const controls = pages.filter((p) => !p.file.endsWith('index.md')).length;
console.log(
	`SP 800-53 release ${version}: ${controls} control pages in ${catalog.groups.length} families; ${changed} file(s) changed.`,
);

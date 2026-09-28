#!/usr/bin/env node
/**
 * Builds the template kit from the sources in templates/ (PRD Template system).
 *
 *   npm run kit                   write downloads into dist/downloads (run after npm run build)
 *   npm run kit -- --out <dir>    write them somewhere else
 *
 * Family policies: policy/_common.md plus each family's clauses, in catalog
 * order, one file per baseline (TPL-03).
 *
 * Downloads are build output and never committed.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { loadSources } from './lib/template-sources.mjs';
import { assemblePolicy, policyBaselines } from '../src/lib/template-assemble.ts';
import { renderVariables } from '../src/lib/template-vars.ts';

const outArg = process.argv.indexOf('--out');
const OUT = path.join(outArg > 0 ? process.argv[outArg + 1] : 'dist', 'downloads');

const catalog = JSON.parse(await fs.readFile('src/data/catalog.json', 'utf8'));
const { variables, common, families, clauses } = await loadSources();

const written = [];
async function write(rel, text) {
	const file = path.join(OUT, rel);
	await fs.mkdir(path.dirname(file), { recursive: true });
	await fs.writeFile(file, text);
	written.push(rel);
}

const problems = [];
for (const family of families.values()) {
	const own = clauses.filter((c) => c.id.startsWith(`policy/${family.id}/`));
	for (const baseline of policyBaselines(family.id, own, catalog.controls)) {
		const policy = assemblePolicy({ common: common.body, family, clauses: own, controls: catalog.controls, baseline });
		try {
			const md = renderVariables(policy.source, { variables, params: catalog.params, typical: policy.typical, family }, 'md');
			await write(`policies/${family.id}-policy-${baseline.toLowerCase()}.md`, md);
		} catch (err) {
			problems.push(`${family.id.toUpperCase()} policy (${baseline}): ${err.message}`);
		}
	}
}

if (problems.length) {
	console.error(`Template kit failed:\n  ${problems.join('\n  ')}`);
	process.exit(1);
}
console.log(`Template kit: ${written.length} file(s) in ${OUT}.`);

#!/usr/bin/env node
// Lints the template sources in templates/ (PRD QA-05); part of `npm run lint`.
// The rules are in scripts/lib/template-lint.mjs.
import fs from 'node:fs/promises';
import { loadSources } from './lib/template-sources.mjs';
import { lintTemplates } from './lib/template-lint.mjs';

const catalog = JSON.parse(await fs.readFile('src/data/catalog.json', 'utf8'));
const sources = await loadSources();
const problems = lintTemplates(sources, catalog);
if (problems.length) {
	console.error(`Template lint: ${problems.length} problem(s)\n  ${problems.join('\n  ')}`);
	process.exit(1);
}
console.log(`Template lint: ${sources.clauses.length} clause(s), ${sources.templates.length} template(s), no problems.`);

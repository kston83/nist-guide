#!/usr/bin/env node
/**
 * Checks control guidance shows on the built site (PRD 3.5): every control
 * page with `guidance:` in its front matter renders a "How to apply it"
 * heading in dist/. Runs as part of `npm run build`.
 *
 * A guidance marker left unclosed (for example "<!-- guidance: write bel")
 * turns everything below it into an HTML comment, so the page builds but the
 * guidance is hidden; this check catches that and any similar loss.
 */
import fs from 'node:fs';
import path from 'node:path';
import { builtPath, hasGuidance, missingGuidance } from './lib/guidance.mjs';

const SRC = 'src/content/docs';
const DIST = 'dist';

const pages = [];
(function walk(dir) {
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const p = path.join(dir, entry.name);
		if (entry.isDirectory()) walk(p);
		else if (/\.mdx?$/.test(p)) {
			const rel = path.relative(SRC, p).split(path.sep).join('/');
			const built = path.join(DIST, builtPath(rel));
			pages.push({ rel, markdown: fs.readFileSync(p, 'utf8'), html: fs.existsSync(built) ? fs.readFileSync(built, 'utf8') : null });
		}
	}
})(path.join(SRC, 'controls'));

const missing = missingGuidance(pages);
for (const rel of missing) console.error(`FAIL ${rel}: guidance is set but ${builtPath(rel)} has no "How to apply it" heading`);
if (missing.length) {
	console.error(`\n${missing.length} control page(s) hide their guidance. Check the <!-- guidance: write below this line --> marker is whole.`);
	process.exit(1);
}
console.log(`ok   ${pages.filter((p) => hasGuidance(p.markdown)).length} control pages with guidance render "How to apply it"`);

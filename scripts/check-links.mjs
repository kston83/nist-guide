// Checks every internal link and #anchor in the built site (dist/) and exits
// non-zero if any point at a missing page or id. Run after `npm run build`.
// The site base path is read from the sitemap so it always matches astro.config.mjs.
import fs from 'node:fs';
import path from 'node:path';

const DIST = 'dist';
const sitemap = fs.readFileSync(path.join(DIST, 'sitemap-index.xml'), 'utf8');
const origin = new URL(sitemap.match(/<loc>([^<]+)<\/loc>/)[1]);
const base = origin.pathname.replace(/[^/]*$/, ''); // "/nist-guide/"

const pages = new Map(); // file path -> html
(function walk(dir) {
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const p = path.join(dir, entry.name);
		if (entry.isDirectory()) walk(p);
		else if (p.endsWith('.html')) pages.set(p, fs.readFileSync(p, 'utf8'));
	}
})(DIST);

const idCache = new Map();
function idsOf(file) {
	if (!idCache.has(file)) {
		const html = pages.get(file) ?? '';
		idCache.set(file, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
	}
	return idCache.get(file);
}

// Map a site URL path to the dist file that serves it, or null.
function resolveFile(urlPath) {
	if (!urlPath.startsWith(base) && `${urlPath}/` !== base) return null;
	const rel = decodeURIComponent(urlPath.slice(base.length));
	const candidate = path.join(DIST, rel);
	if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) return candidate;
	const index = path.join(candidate, 'index.html');
	return fs.existsSync(index) ? index : null;
}

function pageUrl(file) {
	const rel = path.relative(DIST, file).split(path.sep).join('/');
	return new URL(base + rel.replace(/index\.html$/, ''), origin);
}

// A local build without pandoc skips .docx downloads and leaves this marker
// (scripts/build-templates.mjs); CI always builds them, so there it never applies.
const noDocx = !process.env.CI && fs.existsSync(path.join(DIST, 'downloads', '.no-docx'));
let skippedDocx = 0;

const broken = [];
for (const [file, html] of pages) {
	// The 404 page is served at every missing URL, and its canonical link points at /404/.
	if (file === path.join(DIST, '404.html')) continue;
	const here = pageUrl(file);
	for (const [, raw] of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
		const value = raw.replaceAll('&amp;', '&');
		if (/^(?:[a-z]+:|\/\/)/i.test(value) && !value.startsWith(origin.origin)) continue;
		const url = new URL(value, here);
		if (url.origin !== origin.origin) continue;
		const target = resolveFile(url.pathname);
		if (!target && noDocx && url.pathname.startsWith(`${base}downloads/`) && url.pathname.endsWith('.docx')) {
			skippedDocx++;
		} else if (!target) {
			broken.push(`${file}: ${value} (no such page)`);
		} else if (url.hash && target.endsWith('.html')) {
			const id = decodeURIComponent(url.hash.slice(1));
			if (id && !idsOf(target).has(id)) broken.push(`${file}: ${value} (no such anchor)`);
		}
	}
}

if (broken.length) {
	console.error(`${broken.length} broken internal link(s):`);
	for (const b of broken) console.error(`  ${b}`);
	process.exit(1);
}
if (skippedDocx) console.warn(`Skipped ${skippedDocx} .docx link(s): this build has no .docx files (pandoc not found).`);
console.log(`Checked ${pages.size} pages under ${base}: no broken internal links.`);

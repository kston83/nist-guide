// Checks that control guidance shows on the built site (PRD 3.5, row G0).
// Pure functions (no file access) so they can be tested directly.
import { splitFrontmatter, topLevelEntries } from './generated.mjs';

// The heading every guidance section opens with (AC-2 model).
export const HEADING = /<h2 id="how-to-apply-it"[^>]*>\s*How to apply it\s*<\/h2>/;

// True when the page's front matter sets `guidance:` (draft, reviewed, ...).
export function hasGuidance(markdown) {
	const { yaml } = splitFrontmatter(markdown);
	return !!yaml && topLevelEntries(yaml).some((e) => e.key === 'guidance');
}

// Built page for a control page: controls/ac/ac-2.md -> controls/ac/ac-2/index.html
export function builtPath(rel) {
	return rel.replace(/\\/g, '/').replace(/\.mdx?$/, '/index.html');
}

// Pages with guidance set whose built HTML lacks the heading. `pages` is a list
// of { rel, markdown, html } with html null when the built page is missing.
export function missingGuidance(pages) {
	return pages.filter((p) => hasGuidance(p.markdown) && !(p.html && HEADING.test(p.html))).map((p) => p.rel);
}

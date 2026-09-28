// Search for control enhancement ids (PRD NAV-01).
//
// Pagefind strips punctuation, so "AC-2(3)" and "AC-23" become the same word
// and AC-23 ranks first. Each enhancement gets a unique hidden token ("ac2e3")
// right after its heading, and the search box rewrites enhancement ids in the
// query to that token (processTerm, via src/lib/pagefind-ui.mjs), so the query
// lands on the enhancement's section of the base control page.
import { visit } from 'unist-util-visit';

export const tokenFor = (family, control, enhancement) =>
	`${family.toLowerCase()}${Number(control)}e${Number(enhancement)}`;

// "AC-2(3)", "ac-2 (3)", "AC2(3)", "ac-2.3" -> "ac2e3"; the rest of the query is kept.
export const ENHANCEMENT_ID = /\b([a-z]{2})-?(\d{1,2})(?:\s*\((\d{1,2})\)|\.(\d{1,2}))(?!\d)/gi;
export function processTerm(term) {
	return term.replace(ENHANCEMENT_ID, (_, fam, ctl, a, b) => tokenFor(fam, ctl, a ?? b));
}

// Remove tokens (highlighted or not) from result excerpts before they are shown.
const TOKEN_IN_EXCERPT = /(?:<mark>)?\b[a-z]{2}\d{1,2}e\d{1,2}\b(?:<\/mark>)? ?/g;
export const cleanExcerpt = (excerpt) => excerpt?.replace(TOKEN_IN_EXCERPT, '');

// Rehype plugin: after each enhancement heading on a control page (the
// generator writes <a id="ac-2.3"></a> just before it), add the hidden token.
// `hidden` keeps it off screen and away from screen readers; Pagefind still indexes it.
// Markdown passes the anchor through as raw HTML nodes ("<a id=…>", "</a>"), not an element.
const ANCHOR = /^<a id="([a-z]{2})-(\d+)\.(\d+)"><\/a>$/;
export function rehypeEnhancementTokens() {
	return (tree) => {
		visit(tree, 'element', (node, index, parent) => {
			if (node.tagName !== 'p' || !parent || index === undefined) return;
			const kids = node.children.filter((c) => c.type !== 'text' || c.value.trim());
			const m =
				kids.every((c) => c.type === 'raw') &&
				kids
					.map((c) => c.value)
					.join('')
					.trim()
					.match(ANCHOR);
			if (!m) return;
			const heading = parent.children.findIndex((c, i) => i > index && c.type === 'element');
			if (heading === -1 || !/^h[2-6]$/.test(parent.children[heading].tagName)) return;
			parent.children.splice(heading + 1, 0, {
				type: 'element',
				tagName: 'span',
				properties: { hidden: true, dataSearchToken: '' },
				children: [{ type: 'text', value: tokenFor(m[1], m[2], m[3]) }],
			});
		});
	};
}

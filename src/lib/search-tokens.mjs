// Search for control and enhancement ids (PRD NAV-01).
//
// Pagefind strips punctuation, so "AC-2(3)" and "AC-23" become the same word,
// and "AC-2" is a prefix of "AC-20" to "AC-25". Ranking alone cannot put the
// right page first for every id (it depends on page length and on how Pagefind
// chunks its index), so each control page gets a unique hidden token for its
// own id ("ac2ctl"; not "ac2c", which is how a part reference such as "(AC-2c)"
// is indexed) and one after each enhancement heading ("ac2e3"). The search box
// rewrites ids in the query to those tokens (processTerm, via
// src/lib/pagefind-ui.mjs), so the query lands on the control's page, or on the
// enhancement's section of it.
import { visit } from 'unist-util-visit';

export const tokenFor = (family, control, enhancement) =>
	`${family.toLowerCase()}${Number(control)}e${Number(enhancement)}`;
export const controlTokenFor = (family, control) => `${family.toLowerCase()}${Number(control)}ctl`;

// "AC-2(3)", "ac-2 (3)", "AC2(3)", "ac-2.3" -> "ac2e3"; the rest of the query is kept.
export const ENHANCEMENT_ID = /\b([a-z]{2})-?(\d{1,2})(?:\s*\((\d{1,2})\)|\.(\d{1,2}))(?!\d)/gi;
// "AC-2", "ac2" -> "ac2ctl". Runs after ENHANCEMENT_ID, whose tokens ("ac2e3") it cannot match.
// Only SP 800-53 Rev. 5 family identifiers, so words such as "MD5" or "IPv4" are left alone.
export const CONTROL_ID = /\b(ac|at|au|ca|cm|cp|ia|ir|ma|mp|pe|pl|pm|ps|pt|ra|sa|sc|si|sr)-?(\d{1,2})\b/gi;
export function processTerm(term) {
	return term
		.replace(ENHANCEMENT_ID, (_, fam, ctl, a, b) => tokenFor(fam, ctl, a ?? b))
		.replace(CONTROL_ID, (_, fam, ctl) => controlTokenFor(fam, ctl));
}

// Remove tokens (highlighted or not) from result excerpts before they are shown.
const TOKEN_IN_EXCERPT = /(?:<mark>)?\b[a-z]{2}\d{1,2}(?:e\d{1,2}|ctl)\b(?:<\/mark>)? ?/g;
export const cleanExcerpt = (excerpt) => excerpt?.replace(TOKEN_IN_EXCERPT, '');

const hiddenToken = (value) => ({
	type: 'element',
	tagName: 'span',
	properties: { hidden: true, dataSearchToken: '' },
	children: [{ type: 'text', value }],
});

// Rehype plugin. On a control page (front matter `control.id`, such as "AC-2"),
// add the control token at the top. After each enhancement heading (the
// generator writes <a id="ac-2.3"></a> just before it), add the enhancement token.
// `hidden` keeps them off screen and away from screen readers; Pagefind still indexes them.
// Markdown passes the anchor through as raw HTML nodes ("<a id=…>", "</a>"), not an element.
const ANCHOR = /^<a id="([a-z]{2})-(\d+)\.(\d+)"><\/a>$/;
const CONTROL = /^([a-z]{2})-(\d+)$/i;
export function rehypeEnhancementTokens() {
	return (tree, file) => {
		const control = String(file?.data?.astro?.frontmatter?.control?.id ?? '').match(CONTROL);
		if (control) tree.children.unshift(hiddenToken(controlTokenFor(control[1], control[2])));
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
			parent.children.splice(heading + 1, 0, hiddenToken(tokenFor(m[1], m[2], m[3])));
		});
	};
}

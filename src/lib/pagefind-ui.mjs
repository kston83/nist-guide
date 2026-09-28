// Starlight's search box builds the Pagefind UI with only serializable options,
// so astro.config.mjs aliases "@pagefind/default-ui" to this file, which adds
// enhancement id handling (PRD NAV-01): processTerm rewrites "AC-2(3)" to its
// search token, and processResult removes tokens from excerpts. Starlight's own
// options, including its processResult, still apply.
import { PagefindUI as Base } from '@pagefind/default-ui/npm_dist/mjs/ui-core.mjs';
import { cleanExcerpt, processTerm } from './search-tokens.mjs';

export class PagefindUI extends Base {
	constructor(options) {
		const { processTerm: ownTerm, processResult: ownResult } = options;
		super({
			...options,
			processTerm: (term) => processTerm(ownTerm ? ownTerm(term) : term),
			processResult: (result) => {
				const out = ownResult?.(result) ?? result;
				out.excerpt = cleanExcerpt(out.excerpt);
				for (const sub of out.sub_results ?? []) sub.excerpt = cleanExcerpt(sub.excerpt);
				return out;
			},
		});
	}
}

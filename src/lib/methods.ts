// "Methods" on control pages (PRD METH-01): the method and SSDF pages whose
// `implements` front matter names a control or one of its enhancements, grouped
// by method, with the tasks or sections that cite it. Pure, so npm test can run
// it; src/components/MarkdownContent.astro feeds it the docs collection.
//
// A page under methods/<method>/ belongs to that method, whose overview is the
// folder's index (methods/ssdf/po-1 -> methods/ssdf); a page directly under
// methods/ is a method of its own. `implements` says which pages cite the
// control; `parts` (for SSDF pages, the tasks in src/data/ssdf.json, from which
// the generator also writes `implements`) say where on the page it is cited.

export interface MethodPart {
	id: string; // as the publication numbers it, for example "PO.1.1"
	href: string; // root-relative, with the part's anchor
	controls: string[]; // lowercase OSCAL ids the publication cites for this part
}

export interface MethodPage {
	id: string; // content id, for example "methods/ssdf/po-1"
	title: string;
	order?: number; // sidebar order
	implements: string[]; // lowercase OSCAL ids, validated by the content schema
	source?: { id: string; version: string; status: string };
	parts?: MethodPart[];
}

export interface MethodCitation {
	id: string;
	href: string;
	enhancements: string[]; // labels such as "SA-15(7)" when the part cites enhancements only
}

export interface MethodEntry {
	href: string; // root-relative; wrap in withBase() before rendering
	title: string;
	enhancements: string[];
	parts: MethodCitation[];
}

export interface Method {
	href: string;
	title: string;
	source: string; // "SP 800-218, version 1.1"
	pages: MethodEntry[]; // a method that is a single page lists that page only
}

const label = (id: string) => {
	const [base, enh] = id.split('.');
	return base.toUpperCase() + (enh ? `(${enh})` : '');
};

/** The method a page belongs to: "methods/ssdf/po-1" -> "methods/ssdf"; "methods/sp-800-128" -> itself. */
export const methodOf = (pageId: string) => pageId.split('/').slice(0, 2).join('/');

// The hits of a control id list on one control: the base control or its enhancements.
const hitsOf = (base: string, ids: string[]) => ids.filter((c) => c === base || c.startsWith(`${base}.`));
// Citing the base control covers it all; name the enhancements only otherwise.
const enhancementsOf = (base: string, hits: string[]) => (hits.includes(base) ? [] : hits.map(label));

/**
 * @param controlId the page's control id as the generator writes it, for example "SA-15"
 * @param pages method and SSDF pages with `implements`
 * @param titles content id -> title, for each method's overview page (methods/ssdf)
 */
export function methodsFor(controlId: string, pages: MethodPage[], titles: Map<string, string>): Method[] {
	const base = controlId.toLowerCase();
	const methods = new Map<string, Omit<Method, 'pages'> & { pages: (MethodEntry & { order: number })[] }>();
	for (const page of pages) {
		const hits = hitsOf(base, page.implements);
		if (!hits.length) continue;
		const key = methodOf(page.id);
		if (!methods.has(key)) {
			const v = page.source;
			methods.set(key, {
				href: `/${key}/`,
				title: titles.get(key) ?? page.title,
				source: v ? `${v.id}, version ${v.version}${v.status === 'final' ? '' : `, ${v.status}`}` : '',
				pages: [],
			});
		}
		methods.get(key)!.pages.push({
			href: `/${page.id}/`,
			title: page.title,
			enhancements: enhancementsOf(base, hits),
			parts: (page.parts ?? []).flatMap((part) => {
				const partHits = hitsOf(base, part.controls);
				return partHits.length ? [{ id: part.id, href: part.href, enhancements: enhancementsOf(base, partHits) }] : [];
			}),
			order: page.order ?? Number.MAX_SAFE_INTEGER,
		});
	}
	return [...methods.values()]
		.sort((a, b) => a.title.localeCompare(b.title))
		.map((m) => ({
			...m,
			pages: m.pages
				.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title))
				.map(({ order: _order, ...p }) => p),
		}));
}

interface SsdfData {
	practices: { id: string; tasks: { id: string; sp80053: string[] }[] }[];
}

/**
 * The tasks of an SSDF practice page as parts, from src/data/ssdf.json; none for
 * other pages. The slug and anchor rules are the generator's (scripts/lib/ssdf.mjs).
 */
export function ssdfParts(pageId: string, ssdf: SsdfData): MethodPart[] | undefined {
	const m = pageId.match(/^methods\/ssdf\/([a-z]{2}-\d+)$/);
	if (!m) return undefined;
	const practice = ssdf.practices.find((p) => p.id.toLowerCase().replace('.', '-') === m[1]);
	return practice?.tasks.map((t) => ({ id: t.id, href: `/${pageId}/#${t.id.toLowerCase()}`, controls: t.sp80053 }));
}

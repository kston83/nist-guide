// "Referenced by" on control pages (PRD LINK-01): pages whose `controls`
// front matter names a control or one of its enhancements. Pure, so npm test
// can run it; src/components/MarkdownContent.astro feeds it the docs collection.

export interface ReferencingPage {
	id: string; // content id, for example "technology/entra-id"
	title: string;
	controls: string[]; // lowercase OSCAL ids, validated by the content schema
}

export interface Reference {
	href: string; // root-relative; wrap in withBase() before rendering
	title: string;
	kind: string;
	enhancements: string[]; // labels such as "AC-2(3)" when the page cites enhancements only
}

// Section folder -> label, in display order. Other folders sort last as "Page".
const KINDS: [string, string][] = [
	['templates', 'Template'],
	['ssdf', 'SSDF practice'],
	['industries', 'Industry guide'],
	['technology', 'Technology playbook'],
];

const label = (id: string) => {
	const [base, enh] = id.split('.');
	return base.toUpperCase() + (enh ? `(${enh})` : '');
};

/** @param controlId the page's control id as the generator writes it, for example "AC-2" */
export function referencesFor(controlId: string, pages: ReferencingPage[]): Reference[] {
	const base = controlId.toLowerCase();
	const refs: (Reference & { order: number })[] = [];
	for (const page of pages) {
		const hits = page.controls.filter((c) => c === base || c.startsWith(`${base}.`));
		if (!hits.length) continue;
		const folder = page.id.split('/')[0];
		const order = KINDS.findIndex(([f]) => f === folder);
		refs.push({
			href: `/${page.id}/`,
			title: page.title,
			kind: order === -1 ? 'Page' : KINDS[order][1],
			// Citing the base control covers the whole page; list enhancements only otherwise.
			enhancements: hits.includes(base) ? [] : hits.map(label),
			order: order === -1 ? KINDS.length : order,
		});
	}
	return refs
		.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title))
		.map(({ order: _order, ...ref }) => ref);
}

// Section indexes (PRD NAV-02): the published pages of a docs section, such as
// industries/ or technology/, each with the one-line summary in its front
// matter `description`. The index pages list them through SectionIndex.astro,
// so a new page appears with no edit to the index. No Astro imports, so
// npm test can run it on plain objects shaped like docs collection entries.

/**
 * Pages under `section/`, except the section's own index and Starlight drafts
 * (`draft: true`, which production builds leave out, so a link would break),
 * sorted by sidebar order, then title. Throws when a page has no description,
 * so the build fails rather than showing a blank summary.
 * @param {{ id: string, data: { title: string, description?: string, draft?: boolean, sidebar?: { order?: number } } }[]} entries
 * @param {string} section
 */
export function sectionPages(entries, section) {
	const pages = entries.filter(
		(e) => e.id.startsWith(`${section}/`) && e.id !== `${section}/index` && !e.data.draft,
	);
	const missing = pages.filter((e) => !e.data.description?.trim()).map((e) => e.id);
	if (missing.length)
		throw new Error(
			`${section} index: give each page a front matter description, the one-line summary the index shows: ${missing.join(', ')}.`,
		);
	const order = (e) => e.data.sidebar?.order ?? Number.MAX_SAFE_INTEGER;
	return pages
		.sort((a, b) => order(a) - order(b) || a.data.title.localeCompare(b.data.title))
		.map((e) => ({ title: e.data.title, href: `/${e.id}/`, description: e.data.description.trim() }));
}

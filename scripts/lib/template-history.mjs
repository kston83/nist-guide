// Template change history (PRD TPL-11): on each template page, the merged pull
// requests that changed the page's sources in templates/, grouped by kit
// version, from the same first-parent git history as the changelog (FEAT-04).
// Built before every build by scripts/build-changelog.mjs into
// src/data/template-history.json (not committed), which
// src/components/TemplateHistory.astro renders. The template pages themselves
// stay free of git-derived text, so npm run templates gives no diff.
// No file or git access here, so npm test can run it.
import { entryParts, parseCommit, sections } from './changelog.mjs';

export const HISTORY_FILE = 'src/data/template-history.json';

/**
 * Parses `git log --format=%x1e%H%x1f%cI%x1f%s%x1f%D --name-status -M`: one
 * record per commit, the header line then one "<status>\t<path>[\t<path>]"
 * line per file. A rename or copy ("R099\told\tnew") keeps both paths.
 * @returns commits as parseCommit gives them, newest first, each with
 *   files: [{ status, path, from? }]
 */
export function parseLog(text) {
	return text
		.split('\x1e')
		.filter((r) => r.trim())
		.map((record) => {
			const [header, ...rest] = record.replace(/\r\n/g, '\n').split('\n');
			const files = rest
				.filter((l) => l.includes('\t'))
				.map((l) => {
					const [status, a, b] = l.split('\t');
					return b ? { status: status[0], from: a, path: b } : { status: status[0], path: a };
				});
			return { ...parseCommit(header), files };
		});
}

/**
 * The paths each commit touched, as they are named today: a file renamed later
 * (templates/plans/risk-assessment-report.md moved to templates/reports/ in
 * TPL-01) keeps its earlier history. Walks newest first, so each rename maps the
 * old name to the current one for every older commit.
 * @returns one Set of current paths per commit, in the same order
 */
export function currentPaths(commits) {
	const renamed = new Map(); // old path -> current path
	const now = (p) => renamed.get(p) ?? p;
	return commits.map((c) => {
		const touched = new Set();
		for (const f of c.files ?? []) {
			touched.add(now(f.path));
			if (f.status === 'R') renamed.set(f.from, now(f.path));
		}
		return touched;
	});
}

/**
 * The sources a generated template page is built from, as paths (a trailing
 * slash means the whole folder). Template text only: generator code and
 * templates/variables.yml (field labels every template shares) are left out,
 * since the site changelog lists those changes. The one exception is the
 * consolidated policy, which has no source file: its opening guidance and
 * Control families section are written in src/lib/template-assemble.ts.
 * @param pageId content id, such as "templates/policies/ac"
 * @param ownCommon families with their own _common.md (PM), which do not use the shared one
 * @returns paths, or null for a page with no history (the templates index)
 */
export function pageSources(pageId, ownCommon = new Set()) {
	const [, folder, slug] = pageId.split('/');
	if (pageId === 'templates/starter-kit') return ['templates/starter-kit.yml'];
	if (!slug) return null;
	if (folder === 'policies' && slug === 'consolidated') return ['templates/policy/', 'src/lib/template-assemble.ts'];
	// A family policy and its decision worksheet: the family's clauses (statements
	// and typical values), _family.yml (title, role, questions) and the shared
	// sections, which hold the -1 statements and their typical values.
	if (folder === 'policies' || folder === 'worksheets')
		return [`templates/policy/${slug}/`, ...(ownCommon.has(slug) ? [] : ['templates/policy/_common.md'])];
	return [`templates/${pageId.slice('templates/'.length)}.md`];
}

const matches = (sources, path) => sources.some((s) => (s.endsWith('/') ? path.startsWith(s) : path === s));

/**
 * Each page's history: kit versions (release tags) newest first, then
 * "Unreleased" on top for changes since the last tag, each with the commits
 * that touched the page's sources. Versions with no such commit are left out.
 * @param commits newest first, from parseLog
 * @param pageIds content ids of the generated template pages
 * @returns { [pageId]: [{ title, version?, entries: [{ id, text, pr }] }] }
 */
export function templateHistory(commits, pageIds, { ownCommon = new Set() } = {}) {
	const paths = currentPaths(commits);
	const index = new Map(commits.map((c, i) => [c, i]));
	const all = sections(commits);
	// "Unreleased" says what it follows, since the site and its downloads already have these changes.
	const latest = all.find((s) => s.version)?.version;
	const label = (s) => (s.title === 'Unreleased' && latest ? `Unreleased (since ${latest})` : s.title);
	const out = {};
	for (const id of [...pageIds].sort()) {
		const sources = pageSources(id, ownCommon);
		if (!sources) continue;
		// History starts with the commit that published the page, so a template's
		// sources from before it had a page (clauses written before the consolidated
		// policy existed, say) do not count; the whole history if it never did.
		const page = `src/content/docs/${id}.md`;
		const published = paths.findLastIndex((p) => p.has(page));
		const first = published < 0 ? commits.length - 1 : published;
		const counts = (c) => index.get(c) <= first && [...paths[index.get(c)]].some((p) => matches(sources, p));
		const list = all
			.map((s) => ({
				title: label(s),
				...(s.version ? { version: s.version } : {}),
				entries: s.commits.filter(counts).map(entryParts),
			}))
			.filter((s) => s.entries.length);
		if (list.length) out[id] = list;
	}
	return out;
}

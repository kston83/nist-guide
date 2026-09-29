// Merging generated content into files that also hold hand-written content.
// Pure functions (no file access) so they can be tested directly.

export const START = '<!-- nist:start -->';
export const END = '<!-- nist:end -->';
export const GUIDE = '<!-- guidance: write below this line -->';
// Markdown lint skips the generated NIST text (QA-02); hand-written content is linted.
export const LINT_OFF = '<!-- markdownlint-disable -->';
export const LINT_ON = '<!-- markdownlint-restore -->';

// Front matter keys the generator writes. Every other top-level key in an
// existing file (guidance, reviewed, anything added later) is hand-set and kept.
export const OWNED_KEYS = new Set(['title', 'description', 'sidebar', 'control']);

const normalize = (text) => text.replace(/\r\n/g, '\n');

// Split "---\n...\n---" at the top of a file. Returns the YAML between the
// fences (null if there is none) and everything after the closing fence.
export function splitFrontmatter(text) {
	const m = normalize(text).match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
	if (!m) return { yaml: null, rest: normalize(text) };
	return { yaml: m[1], rest: normalize(text).slice(m[0].length) };
}

// Split YAML into top-level entries: a line starting "key:" begins an entry,
// and indented lines, list items, comments and blanks that follow belong to it.
// Enough for front matter without pulling in a YAML parser.
export function topLevelEntries(yaml) {
	const entries = [];
	for (const line of yaml.split('\n')) {
		const key = line.match(/^([A-Za-z_][\w-]*)\s*:/)?.[1];
		if (key) entries.push({ key, lines: [line] });
		else if (entries.length) entries.at(-1).lines.push(line);
	}
	for (const e of entries) while (e.lines.length > 1 && e.lines.at(-1).trim() === '') e.lines.pop();
	return entries;
}

// Generated front matter plus any hand-set keys from the existing front matter,
// in their original order, just before the closing fence.
export function mergeFrontmatter(generated, existingYaml) {
	if (!existingYaml) return generated;
	const kept = topLevelEntries(existingYaml)
		.filter((e) => !OWNED_KEYS.has(e.key))
		.flatMap((e) => e.lines);
	if (!kept.length) return generated;
	const lines = generated.split('\n');
	return [...lines.slice(0, -1), ...kept, lines.at(-1)].join('\n');
}

// Next contents of a generated file, or null when the file exists but has no
// markers (hand-written; leave it alone). `frontmatter` null keeps the file's own.
export function mergeGenerated(existing, { frontmatter, body, tail = `\n${GUIDE}\n` }) {
	const block = `${START}\n${LINT_OFF}\n${body.trim()}\n${LINT_ON}\n${END}`;
	if (existing == null) return `${frontmatter ?? ''}\n\n${block}\n${tail}`;
	const text = normalize(existing);
	if (!text.includes(START) || !text.includes(END)) return null;
	const before = text.slice(0, text.indexOf(START));
	const after = text.slice(text.indexOf(END) + END.length);
	const head = frontmatter ? `${mergeFrontmatter(frontmatter, splitFrontmatter(text).yaml)}\n\n` : before;
	return `${head}${block}${after}`;
}

// A problem with the hand-written part of a file (after the end marker), or
// null. An HTML comment left open there (for example a guidance marker cut to
// "<!-- guidance: write bel") hides everything below it on the site, and the
// generator would otherwise keep it as is.
export function tailProblem(text) {
	const t = normalize(text);
	const at = t.indexOf(END);
	if (at === -1) return null;
	const tail = t.slice(at + END.length);
	for (let i = tail.indexOf('<!--'); i !== -1; i = tail.indexOf('<!--', i)) {
		const close = tail.indexOf('-->', i + 4);
		if (close === -1) {
			const line = tail.slice(i).split('\n')[0];
			return `unclosed HTML comment after ${END} ("${line}"); it hides the text below it`;
		}
		i = close + 3;
	}
	const marker = tail.split('\n').find((l) => l.startsWith('<!-- guidance') && l.trim() !== GUIDE);
	if (marker) return `guidance marker altered ("${marker}"); it must read ${GUIDE}`;
	return null;
}

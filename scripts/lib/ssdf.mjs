// Builds the SSDF data and practice pages (PRD SSDF-01) from the worksheets of
// NIST's SP 800-218 table (nist.sp.800-218.ssdf-table.xlsx), as read by
// scripts/lib/xlsx.mjs. No file or network access, so npm test can run it on
// a small fixture workbook.

// The SSDF sheet's header row, as NIST publishes it; anything else stops the run.
export const HEADER = ['Practices', 'Tasks', 'Notional Implementation Examples', 'References'];

// Front matter keys the SSDF generator writes on practice pages. Every other key
// (guidance, reviewed, implements once row 5 adds it) is hand-set and kept.
export const SSDF_OWNED_KEYS = new Set(['title', 'description', 'sidebar', 'source']);

const clean = (s) => s.replace(/\r\n?/g, '\n').replace(/[ \t]+/g, ' ').trim();

// NIST's text contains no Markdown syntax; escape the few characters that would
// change its meaning if a later version did.
const md = (s) => s.replace(/([\\`*_<])/g, '\\$1');
const yaml = (s) => `'${String(s).replace(/'/g, "''")}'`;

/** "PO.1" -> "po-1", the page slug; "PO.1.2" -> "po.1.2", the task anchor. */
export const practiceSlug = (id) => id.toLowerCase().replace('.', '-');
export const taskAnchor = (id) => id.toLowerCase();
export const practiceUrl = (id) => `/methods/ssdf/${practiceSlug(id)}/`;

// "Name (ID): statement" in the Groups, Practices and SSDF sheets.
function named(cell, idPattern, what) {
	const m = clean(cell).match(new RegExp(`^(.+?) \\((${idPattern})\\): ([\\s\\S]+)$`));
	if (!m) throw new Error(`Unexpected ${what} cell: "${clean(cell).slice(0, 80)}"`);
	return { id: m[2], name: m[1], text: m[3] };
}

/** "SA-8(3)" -> "sa-8.3", the lowercase OSCAL id the rest of the site uses. */
export function oscalId(label) {
	const m = label.trim().match(/^([A-Z]{2})-(\d+)(?:\((\d+)\))?$/);
	if (!m) throw new Error(`Unexpected SP 800-53 reference "${label}"`);
	return `${m[1].toLowerCase()}-${m[2]}${m[3] ? `.${m[3]}` : ''}`;
}

// "SP80053: SA-1, SA-8" lines -> { SP80053: 'SA-1, SA-8', ... }, in NIST's order.
function parseReferences(cell) {
	const refs = {};
	for (const line of clean(cell).split('\n')) {
		if (!line.trim()) continue;
		const m = line.match(/^([A-Za-z0-9]+): ([\s\S]+)$/);
		if (!m) throw new Error(`Unexpected reference line "${line}"`);
		refs[m[1]] = m[2].trim();
	}
	return refs;
}

// "Example 1: ...\nExample 2: ..." -> ['Example 1: ...', ...].
function parseExamples(cell, taskId) {
	const lines = clean(cell)
		.split('\n')
		.map((l) => l.trim())
		.filter(Boolean);
	lines.forEach((line, i) => {
		if (!line.startsWith(`Example ${i + 1}: `))
			throw new Error(`${taskId}: expected "Example ${i + 1}:", found "${line.slice(0, 40)}"`);
	});
	return lines;
}

/**
 * The groups, practices and tasks of the SSDF table.
 * @param {Record<string, string[][]>} sheets from readWorkbook
 * @param {Set<string>} controlIds active SP 800-53 ids ("sa-8.3"); an SP 800-53 reference outside it stops the run
 */
export function parseSsdf(sheets, controlIds) {
	for (const name of ['SSDF', 'Groups', 'Practices'])
		if (!sheets[name]) throw new Error(`The SSDF table has no "${name}" sheet.`);
	const [header, ...rows] = sheets.SSDF;
	if (HEADER.some((h, i) => clean(header?.[i] ?? '') !== h))
		throw new Error(`Unexpected SSDF header row: ${JSON.stringify(header)}`);

	const groups = sheets.Groups.filter((r) => r[0]?.trim()).map((r) => named(r[0], '[A-Z]{2}', 'group'));
	const practices = [];
	for (const row of rows) {
		const [practiceCell = '', taskCell = '', examplesCell = '', referencesCell = ''] = row;
		if (!row.some((c) => c?.trim())) continue;
		if (practiceCell.trim()) {
			const p = named(practiceCell, '[A-Z]{2}\\.\\d+', 'practice');
			const group = p.id.split('.')[0];
			if (!groups.some((g) => g.id === group)) throw new Error(`${p.id}: no group "${group}" in the Groups sheet.`);
			practices.push({ ...p, group, tasks: [] });
		}
		const practice = practices.at(-1);
		if (!practice) throw new Error('The SSDF sheet lists a task before any practice.');
		const t = clean(taskCell).match(/^([A-Z]{2}\.\d+\.\d+): ([\s\S]+)$/);
		if (!t) throw new Error(`Unexpected task cell: "${clean(taskCell).slice(0, 80)}"`);
		if (!t[1].startsWith(`${practice.id}.`)) throw new Error(`Task ${t[1]} is listed under practice ${practice.id}.`);
		const references = parseReferences(referencesCell);
		const sp80053 = (references.SP80053 ?? '')
			.split(',')
			.filter((s) => s.trim())
			.map(oscalId);
		const unknown = sp80053.filter((id) => !controlIds.has(id));
		if (unknown.length) throw new Error(`${t[1]}: SP 800-53 references not in the catalog: ${unknown.join(', ')}`);
		practice.tasks.push({ id: t[1], text: t[2], examples: parseExamples(examplesCell, t[1]), references, sp80053 });
	}

	// The Practices sheet lists the same practices with the same statements.
	const listed = sheets.Practices.slice(1)
		.filter((r) => r[0]?.trim())
		.map((r) => named(r[0], '[A-Z]{2}\\.\\d+', 'practice'));
	const a = listed.map((p) => `${p.id} ${p.name}: ${p.text}`).join('\n');
	const b = practices.map((p) => `${p.id} ${p.name}: ${p.text}`).join('\n');
	if (a !== b) throw new Error('The Practices sheet and the SSDF sheet list different practices.');
	for (const p of practices) if (!p.tasks.length) throw new Error(`${p.id} has no tasks.`);
	return { groups, practices };
}

/**
 * Practice pages and the overview's generated block.
 * @param {{ groups, practices }} data from parseSsdf
 * @param {{ title: string, version: string, published: string, status: string, checked: string, file: string, url: string, landing: string }} source
 * @returns {{ file: string, frontmatter: string | null, body: string }[]} file is relative to methods/ssdf/;
 *          frontmatter null keeps the file's own (the overview, which is hand-written around its block)
 */
export function ssdfPages({ groups, practices }, source) {
	const cite = `NIST SP 800-218, SSDF version ${source.version}`;
	const note = `<!-- Generated from the ${cite} table (${source.file}). Edits between the nist markers are overwritten by npm run ssdf. -->`;
	const pages = practices.map((p, i) => {
		const group = groups.find((g) => g.id === p.group);
		const title = `${p.id} ${p.name}`;
		const frontmatter = [
			'---',
			`title: ${yaml(title)}`,
			`description: ${yaml(`SSDF practice ${p.id}, ${p.name} (NIST SP 800-218, version ${source.version}): the practice, its tasks and NIST's notional implementation examples.`)}`,
			'sidebar:',
			`  label: ${yaml(title)}`,
			`  order: ${i + 1}`,
			'source:',
			"  id: 'SP 800-218'",
			`  version: ${yaml(source.version)}`,
			`  status: ${source.status}`,
			`  checked: ${yaml(source.checked)}`,
			'---',
		].join('\n');
		const tasks = p.tasks.flatMap((t) => [
			`<a id="${taskAnchor(t.id)}"></a>`,
			'',
			`### ${t.id}`,
			'',
			md(t.text),
			'',
			'<details>',
			`<summary>Notional implementation examples for ${t.id}</summary>`,
			'',
			...t.examples.map((e) => {
				const [, n, text] = e.match(/^(Example \d+): ([\s\S]+)$/);
				return `- **${n}:** ${md(text)}`;
			}),
			'',
			'</details>',
			'',
		]);
		const body = [
			note,
			'',
			`Practice ${p.id} of the [Secure Software Development Framework](/methods/ssdf/) (SSDF) version ${source.version}, in the group [${group.name} (${group.id})](/methods/ssdf/#${group.id.toLowerCase()}). The practice, task and example text is NIST's, from the table published with [SP 800-218](${source.landing}) (${source.published}, ${source.status}).`,
			'',
			'## Practice',
			'',
			md(p.text),
			'',
			'## Tasks',
			'',
			`NIST lists ${['no', 'one', 'two', 'three', 'four', 'five'][p.tasks.length] ?? p.tasks.length} task${p.tasks.length === 1 ? '' : 's'} for this practice. The examples under each are notional: no example or combination of examples is required, and they are not the only feasible options (SP 800-218, section 2).`,
			'',
			...tasks,
		].join('\n');
		return { file: `${practiceSlug(p.id)}.md`, frontmatter, body };
	});

	// The overview lists every group and practice from the data, so no list is kept by hand.
	const overview = [
		note,
		'',
		...groups.flatMap((g) => {
			const ps = practices.filter((p) => p.group === g.id);
			return [
				`<a id="${g.id.toLowerCase()}"></a>`,
				'',
				`### ${g.name} (${g.id})`,
				'',
				md(g.text),
				'',
				'| Practice | Tasks |',
				'| --- | --- |',
				...ps.map((p) => `| [${p.id} ${p.name}](${practiceUrl(p.id)}) | ${p.tasks.map((t) => t.id).join(', ')} |`),
				'',
			];
		}),
	].join('\n');
	pages.push({ file: 'index.md', frontmatter: null, body: overview });
	return pages;
}


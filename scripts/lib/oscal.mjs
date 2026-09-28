// Builds SP 800-53 control and family pages from an OSCAL catalog and baseline
// profiles. No file or network access, so tests can run it on a fixture catalog.

// ---------- OSCAL helpers ----------
const prop = (obj, name, cls) =>
	(obj.props ?? []).find((p) => p.name === name && (cls === undefined ? !p.class : p.class === cls))?.value;
const label = (c) => prop(c, 'label') ?? c.id.toUpperCase();
const isWithdrawn = (c) => prop(c, 'status') === 'withdrawn';
const familyOf = (id) => id.split('-')[0];
export const controlUrl = (id) => {
	const [base, enh] = id.split('.');
	return `/controls/${familyOf(base)}/${base}/${enh ? `#${id}` : ''}`;
};
const idLabel = (id) => {
	const [base, enh] = id.split('.');
	return base.toUpperCase() + (enh ? `(${enh})` : '');
};
const yaml = (s) => `'${String(s).replace(/'/g, "''")}'`;

// Every parameter in the catalog, keyed by id (for example "ac-02_odp.01").
export function collectParams(catalog) {
	const params = new Map();
	const walk = (c) => {
		for (const p of c.params ?? []) params.set(p.id, p);
		for (const e of c.controls ?? []) walk(e);
	};
	for (const g of catalog.groups) for (const c of g.controls) walk(c);
	return params;
}

// Parameter placeholders in NIST's own style: [Assignment: ...] or [Selection: ...].
export function createParamRenderer(params) {
	function renderParam(id) {
		const p = params.get(id);
		if (!p) return `[${id}]`;
		if (p.select) {
			const choices = (p.select.choice ?? []).map((ch) => insertParams(ch)).join('; ');
			const many = p.select['how-many'] === 'one-or-more' ? ' (one or more)' : '';
			return `[Selection${many}: ${choices}]`;
		}
		// Some NIST labels already begin "organization-defined"; don't double it.
		if (p.label)
			return /^organization-defined\b/i.test(p.label)
				? `[Assignment: ${p.label}]`
				: `[Assignment: organization-defined ${p.label}]`;
		return `[Assignment: ${p.guidelines?.[0]?.prose?.trim() ?? id}]`;
	}
	const insertParams = (text) =>
		text.replace(/\{\{\s*insert:\s*param,\s*([\w.-]+)\s*\}\}/g, (_, id) => renderParam(id));
	return { renderParam, insertParams };
}

// Control id -> baseline names, from the profiles' include-controls lists.
export function baselineMembership(profiles) {
	const inBaseline = new Map();
	for (const [name, profile] of Object.entries(profiles))
		for (const imp of profile.imports)
			for (const inc of imp['include-controls'] ?? [])
				for (const id of inc['with-ids'] ?? []) {
					if (!inBaseline.has(id)) inBaseline.set(id, []);
					inBaseline.get(id).push(name);
				}
	return inBaseline;
}

/**
 * @param catalog  OSCAL catalog object (the value of the top-level "catalog" key)
 * @param profiles { Low, Moderate, High, Privacy } OSCAL profile objects
 * @returns { version, pages: [{ file, frontmatter, body }] } where file is
 *          relative to the controls folder and frontmatter null means "keep the file's own"
 */
export function buildPages(catalog, profiles) {
	const version = catalog.metadata.version;
	const params = collectParams(catalog);
	const { insertParams } = createParamRenderer(params);
	const inBaseline = baselineMembership(profiles);

	const security = (id) => (inBaseline.get(id) ?? []).filter((b) => b !== 'Privacy');
	const privacy = (id) => (inBaseline.get(id) ?? []).includes('Privacy');
	const baselineText = (id) => {
		const b = [...security(id), ...(privacy(id) ? ['Privacy'] : [])];
		return b.length ? b.join(', ') : 'Not in a baseline';
	};

	const withdrawnIds = new Set();
	for (const g of catalog.groups)
		for (const c of g.controls)
			for (const x of [c, ...(c.controls ?? [])]) if (isWithdrawn(x)) withdrawnIds.add(x.id);

	function clean(text = '') {
		return insertParams(text)
			.replace(/\[([^\]]*)\]\(#[^)]*\)/g, '$1') // links to NIST back-matter anchors
			.replace(/</g, '&lt;')
			.trim();
	}

	function items(parts = [], depth = 0) {
		const pad = '  '.repeat(depth);
		return parts
			.filter((p) => p.name === 'item')
			.map((p) => {
				const l = prop(p, 'label');
				const line = `${pad}- ${l ? `**${l}** ` : ''}${clean(p.prose)}`;
				const sub = items(p.parts, depth + 1);
				return sub ? `${line}\n${sub}` : line;
			})
			.join('\n');
	}

	function statement(c) {
		const s = (c.parts ?? []).find((p) => p.name === 'statement');
		if (!s) return '';
		return [s.prose ? clean(s.prose) : '', items(s.parts)].filter(Boolean).join('\n\n');
	}

	const guidance = (c) => clean((c.parts ?? []).find((p) => p.name === 'guidance')?.prose);

	function objectives(parts = [], depth = 0) {
		const pad = '  '.repeat(depth);
		return parts
			.filter((p) => p.name === 'assessment-objective')
			.map((p) => {
				const l = prop(p, 'label', 'sp800-53a');
				const line = p.prose ? `${pad}- ${l ? `**${l}** ` : ''}${clean(p.prose)}` : `${pad}- **${l ?? ''}**`;
				const sub = objectives(p.parts, depth + 1);
				return sub ? `${line}\n${sub}` : line;
			})
			.join('\n');
	}

	function assessment(c) {
		const obj = (c.parts ?? []).find((p) => p.name === 'assessment-objective');
		const out = [];
		if (obj) {
			const top = obj.prose ? `Determine if ${clean(obj.prose)}` : 'Determine if:';
			out.push(top, objectives(obj.parts));
		}
		for (const m of (c.parts ?? []).filter((p) => p.name === 'assessment-method')) {
			const method = prop(m, 'method') ?? '';
			const objects = (m.parts ?? [])
				.filter((p) => p.name === 'assessment-objects')
				.flatMap((p) => clean(p.prose).split(/\n+/))
				.map((s) => s.trim())
				.filter(Boolean);
			if (objects.length)
				out.push(`**${method.charAt(0) + method.slice(1).toLowerCase()}:** ${objects.join('; ')}.`);
		}
		return out.filter(Boolean).join('\n\n');
	}

	const related = (c) =>
		(c.links ?? [])
			.filter((l) => l.rel === 'related' && l.href.startsWith('#'))
			.map((l) => l.href.slice(1))
			.map((id) => (withdrawnIds.has(id) ? idLabel(id) : `[${idLabel(id)}](${controlUrl(id)})`))
			.join(', ');

	const note = `<!-- Generated from NIST SP 800-53 release ${version} (OSCAL). Edits between the nist markers are overwritten by npm run controls. -->`;
	const pages = [];
	const familyRows = [];

	for (const group of catalog.groups) {
		const fam = group.id;
		const famLabel = `${group.title} (${fam.toUpperCase()})`;
		const rows = [];
		const withdrawn = [];

		for (const [i, c] of group.controls.entries()) {
			if (isWithdrawn(c)) {
				withdrawn.push(label(c));
				continue;
			}
			const enh = (c.controls ?? []).filter((e) => !isWithdrawn(e));
			const enhWithdrawn = (c.controls ?? []).filter(isWithdrawn);
			const tick = (b) => (security(c.id).includes(b) ? 'Yes' : '');
			rows.push(
				`| [${label(c)}](${controlUrl(c.id)}) | ${c.title} | ${tick('Low')} | ${tick('Moderate')} | ${tick('High')} | ${privacy(c.id) ? 'Yes' : ''} |`,
			);

			const frontmatter = [
				'---',
				`title: ${yaml(`${label(c)} ${c.title}`)}`,
				`description: ${yaml(`NIST SP 800-53 Rev. 5 control ${label(c)}, ${c.title}: requirement, baselines, enhancements and assessment objectives, with implementation guidance.`)}`,
				'sidebar:',
				`  label: ${yaml(`${label(c)} ${c.title}`)}`,
				`  order: ${i + 1}`,
				'control:',
				`  id: ${label(c)}`,
				`  family: ${fam.toUpperCase()}`,
				`  baselines: [${[...security(c.id), ...(privacy(c.id) ? ['Privacy'] : [])].join(', ')}]`,
				'---',
			].join('\n');

			const inBase = enh.filter((e) => security(e.id).length || privacy(e.id)).length;
			const level = prop(c, 'implementation-level');
			const body = [
				note,
				`| Baselines | Implementation level | Enhancements |\n| --- | --- | --- |\n| ${baselineText(c.id)} | ${level ? level[0].toUpperCase() + level.slice(1) : 'Not specified'} | ${enh.length ? `${enh.length} (${inBase} in a baseline)` : 'None'} |`,
				related(c) ? `**Related controls:** ${related(c)}` : '',
				'## Control statement',
				statement(c),
				guidance(c) ? `<details>\n<summary>NIST discussion</summary>\n\n${guidance(c)}\n\n</details>` : '',
				enh.length ? '## Control enhancements' : '',
				...enh.map((e) =>
					[
						`<a id="${e.id}"></a>\n\n### ${label(e)} ${e.title}`,
						`*Baselines: ${baselineText(e.id)}*`,
						statement(e),
						`<details>\n<summary>Discussion and assessment objectives for ${label(e)}</summary>\n\n${[guidance(e), assessment(e)].filter(Boolean).join('\n\n')}\n\n</details>`,
					].join('\n\n'),
				),
				enhWithdrawn.length ? `*Withdrawn enhancements: ${enhWithdrawn.map(label).join(', ')}.*` : '',
				'## Assessment objectives (SP 800-53A)',
				`<details>\n<summary>Objectives and methods for ${label(c)}</summary>\n\n${assessment(c)}\n\n</details>`,
			]
				.filter(Boolean)
				.join('\n\n');

			pages.push({ file: `${fam}/${c.id}.md`, frontmatter, body });
		}

		const famFront = [
			'---',
			`title: ${yaml(famLabel)}`,
			`description: ${yaml(`The ${group.title} family of NIST SP 800-53 Rev. 5, with baseline membership for each control.`)}`,
			'sidebar:',
			'  label: Family overview',
			'  order: 0',
			'---',
		].join('\n');
		const famBody = [
			note,
			`The ${group.title} family has ${rows.length} active controls in SP 800-53 release ${version}. "Yes" marks membership in the SP 800-53B baselines.`,
			'| Control | Title | Low | Moderate | High | Privacy |\n| --- | --- | --- | --- | --- | --- |\n' +
				rows.join('\n'),
			withdrawn.length ? `*Withdrawn controls: ${withdrawn.join(', ')}.*` : '',
		]
			.filter(Boolean)
			.join('\n\n');
		pages.push({ file: `${fam}/index.md`, frontmatter: famFront, body: famBody });
		familyRows.push(`| [${fam.toUpperCase()}](/controls/${fam}/) | ${group.title} | ${rows.length} |`);
	}

	// Family table on the hand-written controls overview page (front matter left alone).
	pages.push({
		file: 'index.md',
		frontmatter: null,
		body: [note, `| Family | Name | Active controls |\n| --- | --- | --- |\n${familyRows.join('\n')}`].join('\n\n'),
	});

	return { version, pages };
}

// Schemas and checks for template sources in templates/ (PRD TPL-01). Pure, so
// npm test can run them; src/content.config.ts feeds them the catalog data and
// a bad source fails the build.
import { z } from 'astro/zod';

export const STATUS = ['none', 'draft', 'reviewed'] as const;
export const STAGES = ['foundation', 'core', 'operate', 'mature'] as const;
export const TYPES = ['plan', 'standard', 'procedure', 'form'] as const;

// Folder under templates/ for each non-policy type.
export const TYPE_FOLDERS: Record<(typeof TYPES)[number], string> = {
	plan: 'plans',
	standard: 'standards',
	procedure: 'procedures',
	form: 'forms',
};

export interface CatalogData {
	controls: { id: string; params: string[] }[];
}

// Keys of templates/variables.yml and fill-in references: lowercase, single hyphens.
const key = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use a lowercase key with single hyphens, such as "system-owner".');
const variableRef = z
	.string()
	.regex(
		/^(?:org:[a-z0-9-]+|param:[a-z0-9.\-_]+|fill:.+)$/,
		'Write variables as "org:<key>", "param:<parameter id>" or "fill:<prompt>".',
	);
// SSDF practice ids from SP 800-218: PO.1, PS.2, PW.4, RV.1.
const ssdfId = z.string().regex(/^(?:PO|PS|PW|RV)\.\d+$/, 'Use an SSDF practice id such as "PO.1" or "RV.2".');

export function templateSchemas(catalog: CatalogData) {
	const paramsOf = new Map(catalog.controls.map((c) => [c.id, new Set(c.params)]));

	const controlId = z.string().superRefine((id, ctx) => {
		if (paramsOf.has(id)) return;
		const hint = paramsOf.has(id.toLowerCase())
			? ` Write it in lowercase: "${id.toLowerCase()}".`
			: ' Use the lowercase OSCAL id of an active control or enhancement, such as "ac-2" or "ac-2.3".';
		ctx.addIssue({ code: 'custom', message: `Unknown control id "${id}".${hint}` });
	});

	const common = {
		title: z.string().min(1),
		status: z.enum(STATUS),
		reviewed: z.coerce.date().optional(),
		stage: z.enum(STAGES),
		variables: z.array(variableRef).optional(),
	};

	// templates/policy/<family>/<control>.md: one policy clause per control or enhancement.
	// `typical` gives the typical value shown with a {{param:...}} field; `set` records a
	// parameter the clause fixes in its text instead of leaving it to fill in.
	const clause = z
		.object({
			...common,
			control: controlId,
			typical: z.record(z.string(), z.string().min(1)).optional(),
			set: z.record(z.string(), z.string().min(1)).optional(),
		})
		.strict()
		.superRefine((c, ctx) => {
			const own = paramsOf.get(c.control);
			if (!own) return;
			for (const field of ['typical', 'set'] as const)
				for (const id of Object.keys(c[field] ?? {}))
					if (!own.has(id))
						ctx.addIssue({
							code: 'custom',
							path: [field, id],
							message: `"${id}" is not a parameter of ${c.control}. Its parameters are: ${[...own].join(', ') || 'none'}.`,
						});
		});

	// templates/{plans,standards,procedures,forms}/**/*.md: one file per artifact.
	// `typical` gives the typical value for a {{param:...}} field of one of its controls.
	const template = z
		.object({
			...common,
			type: z.enum(TYPES),
			description: z.string().min(1),
			controls: z.array(controlId).min(1, 'List the controls this artifact satisfies or supports.'),
			ssdf: z.array(ssdfId).optional(),
			typical: z.record(z.string(), z.string().min(1)).optional(),
		})
		.strict()
		.superRefine((t, ctx) => {
			const own = new Set(t.controls.flatMap((c) => [...(paramsOf.get(c) ?? [])]));
			for (const id of Object.keys(t.typical ?? {}))
				if (!own.has(id))
					ctx.addIssue({
						code: 'custom',
						path: ['typical', id],
						message: `"${id}" is not a parameter of any control this template lists (${t.controls.join(', ')}).`,
					});
		});

	// templates/policy/<family>/_family.yml: family metadata and decision questions.
	const family = z
		.object({
			title: z.string().min(1),
			// Key in templates/variables.yml for the role accountable for the family policy.
			role: key,
			// When a new program should adopt the family policy (PRD artifact catalog).
			stage: z.enum(STAGES),
			questions: z
				.array(
					z
						.object({
							question: z.string().min(1),
							controls: z.array(controlId).min(1),
							typical: z.string().min(1).optional(),
							decides: z.string().min(1),
						})
						.strict(),
				)
				.default([]),
		})
		.strict();

	// templates/variables.yml: organization-wide values, used as {{org:<key>}}.
	const variable = z
		.object({
			label: z.string().min(1),
			description: z.string().min(1).optional(),
		})
		.strict();

	return { clause, template, family, variable, key };
}

export interface SourceEntry {
	id: string; // path under templates/ without the extension, for example "policy/ac/ac-2"
	data: Record<string, unknown>;
}

// Checks that need every entry at once, or the file path: a clause lives at
// policy/<family>/<control>.md, one per control; a template's folder matches its type.
export function clauseProblems(entries: SourceEntry[]): string[] {
	const problems: string[] = [];
	const seen = new Map<string, string>();
	for (const { id, data } of entries) {
		const control = String(data.control);
		const expected = `policy/${control.split('-')[0]}/${control}`;
		if (id !== expected) problems.push(`templates/${id}.md: a clause for ${control} belongs at templates/${expected}.md.`);
		const first = seen.get(control);
		if (first) problems.push(`templates/${id}.md: ${control} already has a clause in templates/${first}.md.`);
		else seen.set(control, id);
	}
	return problems;
}

export function templateProblems(entries: SourceEntry[]): string[] {
	const problems: string[] = [];
	for (const { id, data } of entries) {
		const folder = TYPE_FOLDERS[data.type as (typeof TYPES)[number]];
		if (folder && id.split('/')[0] !== folder)
			problems.push(`templates/${id}.md: type "${data.type}" templates belong under templates/${folder}/.`);
	}
	return problems;
}

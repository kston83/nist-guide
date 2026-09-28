import { defineCollection } from 'astro:content';
import { file, glob, type Loader } from 'astro/loaders';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import controlIds from './data/control-ids.json';
import catalog from './data/catalog.json';
import { clauseProblems, templateProblems, templateSchemas, type SourceEntry } from './lib/template-schema';

// Template sources in templates/ (PRD TPL-01). Ids are paths without the
// extension ("policy/ac/ac-2.3"); the default slug would drop the dot.
const pathId = ({ entry }: { entry: string }) => entry.replace(/\.(md|ya?ml)$/, '');
const templates = templateSchemas(catalog);

// Runs checks that need the whole collection after it loads; any problem fails the build.
function checked(loader: Loader, check: (entries: SourceEntry[]) => string[]): Loader {
	return {
		...loader,
		load: async (context) => {
			await loader.load(context);
			const problems = check(context.store.values());
			if (problems.length) throw new Error(`Template sources:\n  ${problems.join('\n  ')}`);
		},
	};
}
const families = new Set(catalog.controls.map((c) => c.family));

// Front matter validation (PRD QA-04): a bad value fails the build.

// Active SP 800-53 control and enhancement ids, written by `npm run controls`
// from the pinned OSCAL catalog: "ac-2", "ac-2.3".
const knownControls = new Set(controlIds.ids);
const controlId = z.string().superRefine((id, ctx) => {
	if (knownControls.has(id)) return;
	const hint = knownControls.has(id.toLowerCase())
		? ` Write it in lowercase: "${id.toLowerCase()}".`
		: ' Use the lowercase OSCAL id of an active control or enhancement, such as "ac-2" or "ac-2.3".';
	ctx.addIssue({ code: 'custom', message: `Unknown control id "${id}".${hint}` });
});

// Industry and technology slugs: lowercase letters and digits, single hyphens.
const slug = z
	.string()
	.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use a lowercase slug with single hyphens, such as "entra-id".');

// Extra front matter used by control, industry and technology pages.
export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				control: z
					.object({
						id: z.string(),
						family: z.string(),
						baselines: z.array(z.string()).default([]),
					})
					.optional(),
				// Hand-set on control pages; the generator keeps them (PRD CTRL-01).
				// Only the owner sets "reviewed".
				guidance: z.enum(['none', 'draft', 'reviewed']).optional(),
				reviewed: z.coerce.date().optional(),
				industries: z.array(slug).optional(),
				technologies: z.array(slug).optional(),
				// Controls a page gives guidance on; feeds "Referenced by" (PRD LINK-01).
				controls: z.array(controlId).optional(),
			}),
		}),
	}),
	// One policy clause per control or enhancement: templates/policy/<family>/<control>.md.
	clauses: defineCollection({
		loader: checked(
			glob({ base: './templates', pattern: ['policy/*/*.md', '!policy/*/_*.md'], generateId: pathId }),
			clauseProblems,
		),
		schema: templates.clause,
	}),
	// Plans, standards, procedures and forms: templates/<type folder>/**/*.md.
	templates: defineCollection({
		loader: checked(
			glob({ base: './templates', pattern: '{plans,standards,procedures,forms}/**/*.md', generateId: pathId }),
			templateProblems,
		),
		schema: templates.template,
	}),
	// Family metadata: templates/policy/<family>/_family.yml, with the family id as the entry id.
	families: defineCollection({
		loader: checked(
			glob({
				base: './templates',
				pattern: 'policy/*/_family.yml',
				generateId: ({ entry }) => entry.split('/')[1],
			}),
			(entries) =>
				entries
					.filter((e) => !families.has(e.id))
					.map((e) => `templates/policy/${e.id}/: "${e.id}" is not an SP 800-53 family id.`),
		),
		schema: templates.family,
	}),
	// Organization-wide fill-in values, used as {{org:<key>}}.
	variables: defineCollection({
		loader: checked(file('./templates/variables.yml'), (entries) =>
			entries
				.filter((e) => !templates.key.safeParse(e.id).success)
				.map((e) => `templates/variables.yml: "${e.id}" must be a lowercase key with single hyphens.`),
		),
		schema: templates.variable,
	}),
};

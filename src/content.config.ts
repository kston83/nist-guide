import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import controlIds from './data/control-ids.json';

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
};

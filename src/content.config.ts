import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

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
				industries: z.array(z.string()).optional(),
				technologies: z.array(z.string()).optional(),
			}),
		}),
	}),
};

// Loads the status sources for src/lib/coverage.ts from the content collections.
// Cached, so the 300 control pages share one load per build.
import { getCollection } from 'astro:content';
import fs from 'node:fs/promises';
import { splitFrontMatter } from '../../scripts/lib/template-sources.mjs';
import type { Sources, Status } from './coverage';

let cached: Promise<Sources> | undefined;

async function load(): Promise<Sources> {
	const pages = await getCollection('docs', (e) => !!e.data.control);
	const guidance = new Map<string, Status>(
		pages.filter((p) => p.data.guidance).map((p) => [p.data.control!.id.toLowerCase(), p.data.guidance as Status]),
	);
	const clauses = new Map<string, Status>(
		(await getCollection('clauses')).map((c) => [c.data.control, c.data.status as Status]),
	);
	// A -1 control is met by the shared sections in templates/policy/_common.md,
	// or by the family's own policy/<family>/_common.md where it has one (PM).
	const status = async (file: string) => {
		const { data } = splitFrontMatter(await fs.readFile(file, 'utf8'));
		return (data.status ?? 'draft') as Status;
	};
	const shared = await status('templates/policy/_common.md');
	const common = new Map<string, Status>();
	for (const f of await getCollection('families'))
		common.set(f.id, await status(`templates/policy/${f.id}/_common.md`).catch(() => shared));
	return { guidance, clauses, common };
}

export function coverageSources(): Promise<Sources> {
	cached ??= load();
	return cached;
}

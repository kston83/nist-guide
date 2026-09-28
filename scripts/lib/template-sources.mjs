// Reads the template sources in templates/ for scripts/build-templates.mjs.
// The Astro content collections validate the same files (src/content.config.ts);
// `npm run build` runs first in CI, so this reader assumes valid sources.
import fs from 'node:fs/promises';
import path from 'node:path';
import { parse as parseYaml } from 'yaml';

const FRONT_MATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

export function splitFrontMatter(text) {
	const m = text.match(FRONT_MATTER);
	if (!m) return { data: {}, body: text.replace(/\r\n/g, '\n') };
	return { data: parseYaml(m[1]) ?? {}, body: text.slice(m[0].length).replace(/\r\n/g, '\n') };
}

async function readMarkdown(file) {
	return splitFrontMatter(await fs.readFile(file, 'utf8'));
}

async function list(dir) {
	try {
		return await fs.readdir(dir, { withFileTypes: true });
	} catch {
		return [];
	}
}

export async function loadSources(root = 'templates') {
	const variables = parseYaml(await fs.readFile(path.join(root, 'variables.yml'), 'utf8')) ?? {};
	const common = await readMarkdown(path.join(root, 'policy', '_common.md'));

	const families = new Map();
	const clauses = [];
	for (const dir of await list(path.join(root, 'policy'))) {
		if (!dir.isDirectory()) continue;
		const folder = path.join(root, 'policy', dir.name);
		try {
			families.set(dir.name, {
				id: dir.name,
				...parseYaml(await fs.readFile(path.join(folder, '_family.yml'), 'utf8')),
			});
		} catch (err) {
			if (err.code !== 'ENOENT') throw err;
		}
		for (const f of await list(folder)) {
			if (!f.isFile() || !f.name.endsWith('.md') || f.name.startsWith('_')) continue;
			const { data, body } = await readMarkdown(path.join(folder, f.name));
			clauses.push({ id: `policy/${dir.name}/${f.name.slice(0, -3)}`, ...data, body });
		}
	}

	const templates = [];
	for (const type of ['plans', 'standards', 'procedures', 'forms']) {
		const walk = async (dir) => {
			for (const f of await list(dir)) {
				const p = path.join(dir, f.name);
				if (f.isDirectory()) await walk(p);
				else if (f.name.endsWith('.md')) {
					const { data, body } = await readMarkdown(p);
					const id = path.relative(root, p).replace(/\\/g, '/').slice(0, -3);
					templates.push({ id, ...data, body });
				}
			}
		};
		await walk(path.join(root, type));
	}

	clauses.sort((a, b) => a.id.localeCompare(b.id));
	templates.sort((a, b) => a.id.localeCompare(b.id));
	const starterKit = parseYaml(await fs.readFile(path.join(root, 'starter-kit.yml'), 'utf8')) ?? { items: [] };
	return { variables, common, families, clauses, templates, starterKit };
}

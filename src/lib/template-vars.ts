// Fill-in variables in template sources (PRD TPL-02), rendered three ways:
//   site  highlighted HTML field in the generated template page
//   md    plain bracketed text in the .md download: [Organization name]
//   docx  the same text in pandoc Markdown, in the "Fill-in" character style
//         that reference.docx highlights
// Pure, so npm test can run it; scripts/build-templates.mjs calls it.
//
//   {{org:name}}             organization-wide value from templates/variables.yml
//   {{param:ac-02_odp.01}}   NIST organization-defined parameter
//   {{fill:prompt text}}     one-off fill-in
//   {{family:title}}         in policy/_common.md only: the family title, and
//   {{family:role}}          its accountable role (an org variable)
//   {{param:xx-01_odp.05}}   in policy/_common.md only: xx becomes the family id

export type Target = 'site' | 'md' | 'docx';

export interface Param {
	label?: string;
	prompt?: string;
	select?: { howMany: string; choices: string[] };
}

export interface VariableContext {
	variables: Record<string, { label: string }>;
	params: Record<string, Param>;
	typical?: Record<string, string>; // parameter id -> typical value, from clause front matter
	family?: { id: string; title: string; role: string };
}

const VARIABLE = /\{\{\s*([^{}]*?)\s*\}\}/g;

// Every variable reference in a source, as written: "org:name", "param:ac-02_odp.01".
export function variablesIn(text: string): string[] {
	return [...text.matchAll(VARIABLE)].map((m) => m[1]);
}

const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// Pandoc Markdown treats these as syntax inside a span.
const escapePandoc = (s: string) => s.replace(/([\\[\]*_`<>{}#$^~|])/g, '\\$1');

// The text a reader sees for a parameter: its 800-53A description, else its
// NIST label without the "organization-defined" prefix.
export function paramPrompt(p: Param): string {
	if (p.select) {
		const how = p.select.howMany === 'one-or-more' ? 'Select one or more' : 'Select one';
		return `${how}: ${p.select.choices.join('; ')}`;
	}
	const text = p.prompt ?? p.label?.replace(/^organization-defined\s+/i, '') ?? 'value';
	return `Fill in: ${text}`;
}

export class VariableError extends Error {}

/**
 * Replaces every {{...}} in `text` for the target. Throws a VariableError that
 * lists every unknown variable or parameter, so one build shows all of them.
 */
export function renderVariables(text: string, ctx: VariableContext, target: Target): string {
	const problems: string[] = [];

	const field = (kind: string, main: string, typical?: string) => {
		if (target === 'site') {
			const typ = typical ? ` <span class="tpl-typical">Typical: ${escapeHtml(typical)}</span>` : '';
			return `<span class="tpl-field tpl-${kind}">${escapeHtml(main)}${typ}</span>`;
		}
		const plain = `[${main}${typical ? `. Typical: ${typical}` : ''}]`;
		return target === 'md' ? plain : `[${escapePandoc(plain)}]{custom-style="Fill-in"}`;
	};

	const org = (key: string) => {
		const v = ctx.variables[key];
		if (!v) {
			problems.push(`unknown variable "org:${key}" (not in templates/variables.yml)`);
			return '';
		}
		return field('org', v.label);
	};

	const out = text.replace(VARIABLE, (whole, ref: string) => {
		const colon = ref.indexOf(':');
		const kind = colon > 0 ? ref.slice(0, colon) : '';
		const value = ref.slice(colon + 1).trim();
		switch (kind) {
			case 'org':
				return org(value);
			case 'fill':
				if (!value) break;
				return field('fill', `Fill in: ${value}`);
			case 'param': {
				let id = value;
				if (id.startsWith('xx-')) {
					if (!ctx.family) {
						problems.push(`"${whole}": the xx- prefix works only in policy/_common.md`);
						return '';
					}
					id = ctx.family.id + id.slice(2);
				}
				const p = ctx.params[id];
				if (!p) {
					problems.push(`unknown parameter "${id}"`);
					return '';
				}
				return field('param', paramPrompt(p), ctx.typical?.[id]);
			}
			case 'family':
				if (!ctx.family) {
					problems.push(`"${whole}": family variables work only in policy/_common.md`);
					return '';
				}
				if (value === 'title') return ctx.family.title;
				if (value === 'role') return org(ctx.family.role);
				problems.push(`unknown family variable "${whole}" (use family:title or family:role)`);
				return '';
		}
		problems.push(`unknown variable "${whole}" (use org:, param: or fill:)`);
		return '';
	});

	if (problems.length) throw new VariableError(problems.join('; '));
	return out;
}

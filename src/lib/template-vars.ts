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
	select?: { howMany: string; choices: string[]; nested?: string[] };
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

const INSERT = /\{\{\s*insert:\s*param,\s*([\w.-]+)\s*\}\}/g;
// 800-53A descriptions cite other parameters by their assessment label:
// "the event types (subset of AU-02_ODP[01]) for logging". The sentence reads
// the same without the parenthetical, and the label means nothing in a policy.
const ODP_REFERENCE = /\s*\([^()]*?[A-Z]{2}-\d{2}(?:\(\d{2}\))?_ODP\[\d{2}\]\)/g;
const withoutOdpReferences = (s: string) => s.replace(ODP_REFERENCE, '');
const unprefixed = (label?: string) => label && withoutOdpReferences(label.replace(/^organization-defined\s+/i, ''));

// "a", "a or b", "a, b or c"; semicolons when a choice has its own "or" or comma.
function orList(items: string[]): string {
	if (items.length < 2) return items.join('');
	const sep = items.some((x) => /,| or /.test(x)) ? '; ' : ', ';
	return `${items.slice(0, -1).join(sep)}${sep === '; ' ? '; or ' : ' or '}${items.at(-1)}`;
}

// Readable text for a parameter that another parameter's 800-53A description
// inserts ("frequency at which to conduct {{ insert: param, sa-11_odp.01 }}
// testing/evaluation"): "the selected unit, integration, system or regression"
// for a selection, else "the" and its label.
function insertedText(p?: Param): string {
	if (p?.select) return `the selected ${orList(p.select.choices.map((c) => c.trim()))}`;
	const label = unprefixed(p?.label);
	return label ? `the ${label}` : 'the value';
}

// The text a reader sees for a parameter: its 800-53A description, else its
// NIST label without the "organization-defined" prefix. `params` resolves the
// parameters a description inserts; references to 800-53A labels are dropped.
// Choices lose the trailing space OSCAL leaves after an embedded assignment.
export function paramPrompt(p: Param, params: Record<string, Param> = {}): string {
	if (p.select) {
		const how = p.select.howMany === 'one-or-more' ? 'Select one or more' : 'Select one';
		return `${how}: ${p.select.choices.map((c) => c.trim()).join('; ')}`;
	}
	const text = withoutOdpReferences(p.prompt ?? unprefixed(p.label) ?? 'value').replace(INSERT, (_, id: string) => insertedText(params[id]));
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
				return field('param', paramPrompt(p, ctx.params), ctx.typical?.[id]);
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

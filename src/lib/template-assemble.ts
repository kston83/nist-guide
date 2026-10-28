// Family policy assembly (PRD TPL-03): policy/_common.md (or the family's own
// policy/<family>/_common.md) plus the family's clauses, in catalog order, for
// one baseline. Baseline membership comes from
// the NIST profiles through src/data/catalog.json, so a control NIST adds to a
// baseline appears in that variant once its clause exists, with no manual step.
// The consolidated policy (PRD TPL-09, assembleConsolidated below) is built from
// the same sources: the shared sections once, then every family's clauses.
// Pure, so npm test can run it; scripts/build-templates.mjs and the template
// pages call it. The result is still source text: variables and ::: blocks are
// rendered afterwards for each target and edition.

export const BASELINES = ['Low', 'Moderate', 'High', 'Privacy'] as const;
// SP 800-53B allocates no PM control to a security baseline: the organization
// deploys them once, whatever its systems' baselines. A family marked
// `baseline: none` in _family.yml has one variant with every clause.
export const ORGANIZATION = 'Organization';
export type Baseline = (typeof BASELINES)[number] | typeof ORGANIZATION;

export interface CatalogControl {
	id: string;
	label: string;
	family: string;
	baselines: string[];
}

export interface ClauseSource {
	control: string;
	title: string;
	typical?: Record<string, string>;
	body: string;
}

export interface Family {
	id: string;
	title: string;
	role: string;
}

// Heading in _common.md under which the clauses go.
export const STATEMENTS_HEADING = '## Policy statements';

const inFamily = (family: string, controls: CatalogControl[]) => controls.filter((c) => c.family === family);

// Whether any control of the family is in a security baseline (Low, Moderate or
// High). SP 800-53B places every PT control in the Privacy baseline only.
export const inSecurityBaseline = (family: string, controls: CatalogControl[]) =>
	inFamily(family, controls).some((c) => c.baselines.some((b) => b !== 'Privacy'));

// Security baselines when the family has a control in one; Privacy when a clause
// of the family is in it, or when the family is in no security baseline (PT).
// An organization-wide family has the one Organization variant.
export function policyBaselines(
	family: string,
	clauses: ClauseSource[],
	controls: CatalogControl[],
	organizationWide = false,
): Baseline[] {
	if (organizationWide) return [ORGANIZATION];
	const security = inSecurityBaseline(family, controls);
	const privacy = new Set(inFamily(family, controls).filter((c) => c.baselines.includes('Privacy')).map((c) => c.id));
	const hasPrivacy = clauses.some((c) => privacy.has(c.control));
	return BASELINES.filter((b) => (b === 'Privacy' ? hasPrivacy || !security : security));
}

export interface AssembledPolicy {
	source: string;
	controls: string[]; // control ids the document covers, the -1 control first
	typical: Record<string, string>;
}

// The family's clauses in the baseline, in catalog order, each under a heading
// at `level`: "### Account management (AC-2)". The family policies and the
// consolidated policy both use it, so each clause is written once.
export function familyStatements({
	family,
	clauses,
	controls,
	baseline,
	level = 3,
}: {
	family: Family;
	clauses: ClauseSource[];
	controls: CatalogControl[];
	baseline: Baseline;
	level?: number;
}): { policyControl: CatalogControl; chosen: ClauseSource[]; text: string } {
	const familyControls = inFamily(family.id, controls);
	const order = new Map(familyControls.map((c, i) => [c.id, i]));
	const byId = new Map(familyControls.map((c) => [c.id, c]));
	const policyControl = byId.get(`${family.id}-1`);
	if (!policyControl) throw new Error(`No ${family.id.toUpperCase()}-1 control in the catalog.`);

	const chosen = clauses
		.filter((c) => byId.has(c.control) && (baseline === ORGANIZATION || byId.get(c.control)!.baselines.includes(baseline)))
		.sort((a, b) => order.get(a.control)! - order.get(b.control)!);
	const hashes = '#'.repeat(level);
	const text = chosen.map((c) => `${hashes} ${c.title} (${byId.get(c.control)!.label})\n\n${c.body.trim()}`).join('\n\n');
	return { policyControl, chosen, text };
}

export function assemblePolicy({
	common,
	family,
	clauses,
	controls,
	baseline,
}: {
	common: string; // body of the family's _common.md, without front matter
	family: Family;
	clauses: ClauseSource[];
	controls: CatalogControl[];
	baseline: Baseline;
}): AssembledPolicy {
	const { policyControl, chosen, text } = familyStatements({ family, clauses, controls, baseline });
	const sections =
		text || `This policy has no statements beyond the sections above${baseline === ORGANIZATION ? '' : ` for the ${baseline} baseline`}.`;

	const start = common.indexOf(`\n${STATEMENTS_HEADING}\n`);
	if (start < 0) throw new Error(`_common.md needs a "${STATEMENTS_HEADING}" heading for the clauses.`);
	const next = common.indexOf('\n## ', start + STATEMENTS_HEADING.length + 1);
	const end = next < 0 ? common.length : next;
	const source = `${common.slice(0, end).trimEnd()}\n\n${sections}\n${common.slice(end)}`
		.replace(/\bXX-1(?!\d)/g, policyControl.label) // "(XX-1a.1(a))" -> "(AC-1a.1(a))"
		.replace(/^\n+/, '');

	return {
		source,
		controls: [policyControl.id, ...chosen.map((c) => c.control)],
		typical: Object.assign({}, ...chosen.map((c) => c.typical ?? {})),
	};
}

// The consolidated Information Security and Privacy Policy (PRD TPL-09): one
// document in place of the family policies, per baseline. It has no source of
// its own. The shared sections of policy/_common.md appear once, rendered for
// this pseudo-family: {{family:title}} and {{family:role}} come from it, and
// {{param:xx-01_odp.05}} stays xx-01_odp.05, a parameter the caller derives
// from the -1 parameters (scripts/lib/template-pages.mjs). References to the
// -1 control stay "(XX-1a.1(a))", and the Control families section says they
// cite that item of every family's -1 control. Each family then has its own
// part under Policy statements, with the same clauses its family policy has.
export const CONSOLIDATED: Family = { id: 'xx', title: 'Information Security and Privacy', role: 'ciso' };
export const CONSOLIDATED_TITLE = `${CONSOLIDATED.title} Policy`;

export interface ConsolidatedFamily {
	family: Family;
	clauses: ClauseSource[]; // the family's own clauses
	common?: string; // body of the family's own _common.md (PM), if it has one
	typical?: Record<string, string>; // typical values for the parameters in that body
	organizationWide?: boolean;
}

// The families with a part in the variant: an organization-wide family (PM) in
// every variant, as its policy goes in every baseline's kit; any other family
// in the variants its own policy has, so PT is in the Privacy variant only.
export function consolidatedFamilies(families: ConsolidatedFamily[], controls: CatalogControl[], baseline: Baseline): ConsolidatedFamily[] {
	return families.filter(
		(f) => f.organizationWide || policyBaselines(f.family.id, f.clauses, controls).includes(baseline),
	);
}

// Low, Moderate, High and Privacy: each baseline that some family policy has.
export const consolidatedBaselines = (families: ConsolidatedFamily[], controls: CatalogControl[]): Baseline[] =>
	BASELINES.filter((b) => families.some((f) => !f.organizationWide && policyBaselines(f.family.id, f.clauses, controls).includes(b)));

const SECTION = /\n(?=## )/;
const headingOf = (section: string) => section.match(/^## (.+)$/m)?.[1]?.trim();
const FEDERAL_BLOCK = /^:::federal[ \t]*\n[\s\S]*?^:::[ \t]*$/gm;

// A family's text written for its own policy, made to stand in the
// consolidated one: its family variables and -1 references resolved.
const localize = (text: string, family: Family, label: string) =>
	text
		.replace(/\{\{\s*family:title\s*\}\}/g, family.title)
		.replace(/\{\{\s*family:role\s*\}\}/g, `{{org:${family.role}}}`)
		.replace(/\{\{\s*param:\s*xx-/g, `{{param:${family.id}-`)
		.replace(/\bXX-1(?!\d)/g, label);

// From a family's own _common.md (PM), what the shared sections do not already
// say: each section whose heading the shared sections lack ("Information
// security program plan"), at `level`, then the family's federal blocks.
function ownOpening(own: string, shared: Set<string | undefined>, family: Family, label: string, level: number): string {
	const sections = own.split(SECTION).slice(1);
	const demote = '#'.repeat(level - 2);
	const unique = sections
		.filter((s) => !shared.has(headingOf(s)))
		.map((s) => s.trim().replace(/^(#{2,6}) (.+)$/gm, (_, h: string, t: string) => (h === '##' ? `${demote}## ${t.trim()} (${label})` : `${demote}${h} ${t}`)));
	const federal = sections.filter((s) => shared.has(headingOf(s))).flatMap((s) => s.match(FEDERAL_BLOCK) ?? []);
	return localize([...unique, ...federal].join('\n\n'), family, label);
}

const INTRO = `:::guidance
This policy brings every family policy into one document, as an alternative to adopting a policy per family. It is assembled from the same sources. The sections every family policy shares are written once, and each family's statements are in its own part under Policy statements. Each family's -1 control asks for a policy that addresses purpose, scope, roles, responsibilities, management commitment, coordination and compliance, plus procedures, dissemination, a designated official and a review cycle; the shared sections meet those elements for every family listed under Control families. Assessors check each element for each family, so keep every shared section even when it is short. For any one scope, adopt either this policy or the family policies, not both, so each requirement has one source.
:::`;

export function assembleConsolidated({
	common,
	families,
	controls,
	baseline,
	summary,
}: {
	common: string; // body of policy/_common.md, without front matter
	families: ConsolidatedFamily[]; // in catalog order
	controls: CatalogControl[];
	baseline: Baseline;
	// For the site preview: text that stands in for a family's part, given the
	// controls it covers in the variant. Omitted, the part has its statements.
	summary?: (family: Family, controls: string[]) => string;
}): AssembledPolicy & { families: string[] } {
	const included = consolidatedFamilies(families, controls, baseline);
	const [preamble, ...sections] = common.split(SECTION);
	const shared = new Set(sections.map(headingOf));
	const statementsAt = sections.findIndex((s) => `## ${headingOf(s)}` === STATEMENTS_HEADING);
	if (statementsAt < 0) throw new Error(`_common.md needs a "${STATEMENTS_HEADING}" heading for the clauses.`);

	const covered: string[] = [];
	const typical: Record<string, string> = {};
	const parts = included.map((f) => {
		const { policyControl, chosen, text } = familyStatements({
			family: f.family,
			clauses: f.clauses,
			controls,
			baseline: f.organizationWide ? ORGANIZATION : baseline,
			level: 4,
		});
		const ids = [policyControl.id, ...chosen.map((c) => c.control)];
		covered.push(...ids);
		Object.assign(typical, f.common ? (f.typical ?? {}) : {}, ...chosen.map((c) => c.typical ?? {}));
		const heading = `### ${f.family.title} (${f.family.id.toUpperCase()})`;
		if (summary) return `${heading}\n\n${summary(f.family, ids)}`;
		const opening = f.common ? ownOpening(f.common, shared, f.family, policyControl.label, 4) : '';
		const body =
			[opening, text].filter(Boolean).join('\n\n') ||
			`This policy has no ${f.family.title} statements beyond the shared sections${f.organizationWide ? '' : ` for the ${baseline} baseline`}.`;
		return `${heading}\n\n${body}`;
	});

	const label = (f: ConsolidatedFamily) => `${f.family.id.toUpperCase()}-1`;
	const own = included.filter((f) => f.common);
	const roles = included.some((f) => f.family.role !== CONSOLIDATED.role);
	const familiesSection = [
		'## Control families',
		`This policy is the policy of each control family below, in place of separate family policies. Its shared sections meet the first control of each family, the -1 control, which asks for a policy and procedures; a reference such as (XX-1a.1(a)) cites that item of the -1 control of every family below.${own
			.map((f) => ` ${label(f)} asks for different elements, so the ${f.family.title} part opens with its own statements for it.`)
			.join('')} Each family's statements are in its own part under Policy statements.`,
		[
			'| Family | Policy control | Accountable role |',
			'| --- | --- | --- |',
			...included.map((f) => `| ${f.family.title} (${f.family.id.toUpperCase()}) | ${label(f)} | {{org:${f.family.role}}} |`),
		].join('\n'),
		roles
			? '- Where the table names a role other than the {{family:role}} for a family, that role shall be accountable for the family\'s part of this policy and shall approve exceptions to it, in coordination with the {{family:role}}. (XX-1a.1(a))'
			: '',
	]
		.filter(Boolean)
		.join('\n\n');

	// The Control families section follows Scope, or comes right before the statements.
	const scopeAt = sections.findIndex((s) => headingOf(s) === 'Scope');
	const after = scopeAt >= 0 ? scopeAt : statementsAt - 1;
	const out = [preamble.match(/^# .*$/m)?.[0] ?? '# {{family:title}} Policy', INTRO];
	if (after < 0) out.push(familiesSection);
	sections.forEach((s, i) => {
		out.push(i === statementsAt ? [s.trim(), ...parts].join('\n\n') : s.trim());
		if (i === after) out.push(familiesSection);
	});

	return {
		source: `${out.join('\n\n').replace(/\n{3,}/g, '\n\n')}\n`,
		controls: covered,
		typical,
		families: included.map((f) => f.family.id),
	};
}

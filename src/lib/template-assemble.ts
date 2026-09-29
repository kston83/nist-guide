// Family policy assembly (PRD TPL-03): policy/_common.md (or the family's own
// policy/<family>/_common.md) plus the family's clauses, in catalog order, for
// one baseline. Baseline membership comes from
// the NIST profiles through src/data/catalog.json, so a control NIST adds to a
// baseline appears in that variant once its clause exists, with no manual step.
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
	const familyControls = inFamily(family.id, controls);
	const order = new Map(familyControls.map((c, i) => [c.id, i]));
	const byId = new Map(familyControls.map((c) => [c.id, c]));
	const policyControl = byId.get(`${family.id}-1`);
	if (!policyControl) throw new Error(`No ${family.id.toUpperCase()}-1 control in the catalog.`);

	const chosen = clauses
		.filter((c) => byId.has(c.control) && (baseline === ORGANIZATION || byId.get(c.control)!.baselines.includes(baseline)))
		.sort((a, b) => order.get(a.control)! - order.get(b.control)!);

	const sections = chosen.length
		? chosen.map((c) => `### ${c.title} (${byId.get(c.control)!.label})\n\n${c.body.trim()}`).join('\n\n')
		: `This policy has no statements beyond the sections above${baseline === ORGANIZATION ? '' : ` for the ${baseline} baseline`}.`;

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

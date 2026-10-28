// Decision worksheet per family and baseline (PRD TPL-08): every choice the
// family forces. Rows come from the family's _family.yml questions, then the
// organization-defined parameters of every family control in the baseline
// (every family control, for the Organization variant), whether or not it has
// a clause yet, in catalog order. Each parameter row names the decider of the
// question that lists its control (questionDeciders). Pure, so npm test can
// run it; scripts/build-templates.mjs writes the .csv and the page.
import { ORGANIZATION, type Baseline, type CatalogControl } from './template-assemble.ts';
import { paramPrompt, type Param } from './template-vars.ts';

export interface WorksheetRow {
	decision: string;
	controls: string[]; // control labels, for example "AC-2(3)"
	typical: string;
	decides: string;
}

export interface Question {
	question: string;
	controls: string[];
	typical?: string;
	decides: string;
}

export const WORKSHEET_COLUMNS = ['Decision', 'Control', 'Typical value', 'Who decides', 'Your value'];

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

// A follow-on parameter nested in a selection has its own row below the
// selection's, so the choice points there instead of repeating NIST's brackets.
export const NESTED_NOTE = 'see its row below';
// Typical value of a follow-on row whose selection's typical value answers it.
export const COVERED = 'See the selection above';
// Typical value of a part of an aggregated parameter right below another part
// that shows the aggregate's typical value.
export const SEE_ABOVE = 'See the row above';

// "Fill in: the frequency of account review" -> "The frequency of account review";
// "[Assignment: organization-defined contract language]" in a choice ->
// "organization-defined contract language (see its row below)".
const decisionText = (p: Param, params: Record<string, Param>) =>
	capitalize(
		paramPrompt(p, params)
			.replace(/^Fill in: /, '')
			.replace(/\[Assignment: ([^\]]+)\]/g, `$1 (${NESTED_NOTE})`),
	);

// Who decides a parameter (owner, 2026-10-28; PRD 3.16): the decider of the
// family question that lists its control. A question covers only the control
// ids it lists; an enhancement does not take its base control's question. When
// no question lists the control, or the questions that do name different
// deciders, the family policy's role decides.
export function questionDeciders(questions: Question[], defaultDecider: string): (control: string) => string {
	const deciders = new Map<string, Set<string>>();
	for (const q of questions)
		for (const id of q.controls) deciders.set(id, (deciders.get(id) ?? new Set()).add(q.decides));
	return (control) => {
		const named = deciders.get(control);
		return named?.size === 1 ? [...named][0] : defaultDecider;
	};
}

export function worksheetRows({
	family,
	baseline,
	questions,
	controls,
	params,
	typical,
	set = {},
	defaultDecider,
}: {
	family: string;
	baseline: Baseline;
	questions: Question[];
	controls: (CatalogControl & { params: string[] })[];
	params: Record<string, Param & { aggregates?: string[] }>;
	typical: Record<string, string>; // parameter id -> typical value, from the clauses
	set?: Record<string, string>; // parameter id -> the text a clause fixes it to ("Set to ...")
	defaultDecider: string; // label of the family's accountable role
}): WorksheetRow[] {
	const labels = new Map(controls.map((c) => [c.id, c.label]));
	const decides = questionDeciders(questions, defaultDecider);
	// Follow-on parameter id -> the selection whose choices embed it (OSCAL nests it there).
	const selectionOf = new Map<string, string>();
	for (const [id, p] of Object.entries(params))
		if (!p.aggregates) for (const inner of p.select?.nested ?? []) selectionOf.set(inner, id);
	// Part -> the aggregating parameters that combine it. Clauses often give the
	// typical value on the aggregate, which has no row of its own.
	const aggregatesOf = new Map<string, string[]>();
	for (const [id, p] of Object.entries(params))
		for (const part of p.aggregates ?? []) aggregatesOf.set(part, [...(aggregatesOf.get(part) ?? []), id]);
	// The aggregate whose value the previous row showed.
	let shownAggregate: string | undefined;
	// Clause typical values are lowercase to slot into policy sentences; a worksheet
	// cell starts with a capital. A parameter's own typical (or set) value comes
	// first. A part of an aggregate with none shows the aggregate's value, or
	// "See the row above" right below a part that shows it. A follow-on nested in
	// a selection points to the selection, when that has a typical value.
	const typicalFor = (id: string) => {
		const prev = shownAggregate;
		shownAggregate = undefined;
		const own = typical[id] ?? set[id];
		if (own) return capitalize(own);
		const agg = aggregatesOf.get(id)?.find((a) => typical[a]);
		if (agg) {
			shownAggregate = agg;
			return agg === prev ? SEE_ABOVE : capitalize(typical[agg]);
		}
		const sel = selectionOf.get(id);
		return sel && typical[sel] ? COVERED : '';
	};
	const rows: WorksheetRow[] = questions.map((q) => ({
		decision: q.question,
		controls: q.controls.map((id) => labels.get(id) ?? id),
		typical: q.typical ?? '',
		decides: q.decides,
	}));
	for (const c of controls) {
		if (c.family !== family || (baseline !== ORGANIZATION && !c.baselines.includes(baseline))) continue;
		for (const id of c.params) {
			const p = params[id];
			// Aggregating parameters repeat the ones they combine.
			if (!p || p.aggregates) continue;
			rows.push({ decision: decisionText(p, params), controls: [c.label], typical: typicalFor(id), decides: decides(c.id) });
		}
	}
	return rows;
}

const csvCell = (s: string) => (/[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s);

// CSV with a header row and an empty "Your value" column; CRLF line ends, as RFC 4180
// specifies, and a byte order mark so Excel reads it as UTF-8.
export function worksheetCsv(rows: WorksheetRow[]): string {
	return '﻿' + [WORKSHEET_COLUMNS, ...rows.map((r) => [r.decision, r.controls.join('; '), r.typical, r.decides, ''])]
		.map((cells) => cells.map(csvCell).join(','))
		.join('\r\n')
		.concat('\r\n');
}

// Decision worksheet per family and baseline (PRD TPL-08): every choice the
// family forces. Rows come from the family's _family.yml questions, then the
// organization-defined parameters of every family control in the baseline
// (every family control, for the Organization variant), whether or not it has
// a clause yet, in catalog order. Pure, so npm test can
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

// "Fill in: the frequency of account review" -> "The frequency of account review"
const decisionText = (p: Param) => {
	const text = paramPrompt(p).replace(/^Fill in: /, '');
	return text.charAt(0).toUpperCase() + text.slice(1);
};

export function worksheetRows({
	family,
	baseline,
	questions,
	controls,
	params,
	typical,
	defaultDecider,
}: {
	family: string;
	baseline: Baseline;
	questions: Question[];
	controls: (CatalogControl & { params: string[] })[];
	params: Record<string, Param & { aggregates?: string[] }>;
	typical: Record<string, string>; // parameter id -> typical value, from the clauses
	defaultDecider: string; // label of the family's accountable role
}): WorksheetRow[] {
	const labels = new Map(controls.map((c) => [c.id, c.label]));
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
			rows.push({ decision: decisionText(p), controls: [c.label], typical: typical[id] ?? '', decides: defaultDecider });
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

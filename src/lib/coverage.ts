// Guidance and policy-clause status per control: the badges on control pages
// (PRD CTRL-06) and the coverage page (PRD CTRL-05). Pure, so npm test can run
// it; the components feed it the collections and src/data/catalog.json.

export type Status = 'none' | 'draft' | 'reviewed';
export const STATUSES: Status[] = ['none', 'draft', 'reviewed'];
export const BASELINES = ['Low', 'Moderate', 'High', 'Privacy'];

export interface CatalogControl {
	id: string; // "ac-2" or "ac-2.3"
	label: string;
	title: string;
	family: string;
	baselines: string[];
}

export interface Sources {
	guidance: Map<string, Status>; // base control id -> control page `guidance`
	clauses: Map<string, Status>; // control or enhancement id -> clause `status`
	common: Map<string, Status>; // family with a policy -> `_common.md` status, which meets its -1 control
}

export interface CoverageRow extends CatalogControl {
	guidance: Status;
	clause: Status;
}

/** A base control's statuses. A -1 control's clause is the family policy's shared sections. */
export function statusOf(id: string, { guidance, clauses, common }: Sources): { guidance: Status; clause: Status } {
	const family = id.split('-')[0];
	const clause = clauses.get(id) ?? (id === `${family}-1` ? common.get(family) : undefined) ?? 'none';
	return { guidance: guidance.get(id) ?? 'none', clause };
}

/** One row per active base control (enhancements are covered on their control's page), in catalog order. */
export function coverageRows(controls: CatalogControl[], sources: Sources): CoverageRow[] {
	return controls.filter((c) => !c.id.includes('.')).map((c) => ({ ...c, ...statusOf(c.id, sources) }));
}

export interface Totals {
	group: string;
	controls: number;
	guidance: Record<Status, number>;
	clause: Record<Status, number>;
}

const empty = (group: string): Totals => ({
	group,
	controls: 0,
	guidance: { none: 0, draft: 0, reviewed: 0 },
	clause: { none: 0, draft: 0, reviewed: 0 },
});

/** Totals per group, in first-seen order; a row may fall in several groups (baselines) or none. */
export function totalsBy(rows: CoverageRow[], groupsOf: (row: CoverageRow) => string[], order: string[] = []): Totals[] {
	const totals = new Map<string, Totals>(order.map((g) => [g, empty(g)]));
	for (const row of rows)
		for (const g of groupsOf(row)) {
			if (!totals.has(g)) totals.set(g, empty(g));
			const t = totals.get(g)!;
			t.controls++;
			t.guidance[row.guidance]++;
			t.clause[row.clause]++;
		}
	return [...totals.values()];
}

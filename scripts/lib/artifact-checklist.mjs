// The program artifact checklist (PRD PROG-03): every artifact the kit has a
// template for, with its type, program stage, controls, accountable role and
// status, generated from the template sources so new templates appear on their
// own. One row for the consolidated policy, one per family policy and decision
// worksheet, one per plan, standard, procedure, form and report.
// No file access, so npm test can run it; scripts/build-templates.mjs writes
// the page (npm run templates) and the .csv (npm run kit).
import { CONSOLIDATED, CONSOLIDATED_TITLE, consolidatedBaselines, consolidatedFamilies } from '../../src/lib/template-assemble.ts';
import {
	CONSOLIDATED_SLUG,
	CONSOLIDATED_STAGE,
	consolidatedSources,
	consolidatedStatus,
	GENERATED_NOTE,
	policyStatus,
	TYPE_LABEL,
} from './template-pages.mjs';

export const CHECKLIST_FILE = 'program-artifact-checklist.csv';
// Written by npm run templates, next to the hand-written stage pages.
export const CHECKLIST_PAGE = 'src/content/docs/program/checklist.md';

const STAGE_ORDER = ['foundation', 'core', 'operate', 'mature'];
const TYPE_ORDER = ['policy', 'worksheet', 'plan', 'standard', 'procedure', 'form', 'report'];
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

/**
 * The checklist rows, in stage order, then type, then title:
 * { title, href, type, stage, controls, role, status }. `role` is a key in
 * variables.yml. A policy lists its -1 control (the consolidated policy, every
 * family's), as the stage pages do; a plan, standard, procedure, form or report
 * lists its own `controls`, and takes its `role` front matter, or without one
 * the accountable role of the family policy its first control belongs to.
 */
export function checklistRows({ families, clauses, common, templates, catalog }) {
	const familyOrder = [...new Set(catalog.controls.map((c) => c.family))];
	const ordered = [...families.values()].sort((a, b) => familyOrder.indexOf(a.id) - familyOrder.indexOf(b.id));
	const byFamily = new Map(ordered.map((f) => [f.id, f]));

	const sources = consolidatedSources({ families: ordered, clauses });
	const inConsolidated = new Set(
		consolidatedBaselines(sources, catalog.controls).flatMap((b) => consolidatedFamilies(sources, catalog.controls, b).map((f) => f.family.id)),
	);
	const rows = [
		{
			title: CONSOLIDATED_TITLE,
			href: `/templates/policies/${CONSOLIDATED_SLUG}/`,
			type: 'policy',
			stage: CONSOLIDATED_STAGE,
			controls: ordered.filter((f) => inConsolidated.has(f.id)).map((f) => `${f.id}-1`),
			role: CONSOLIDATED.role,
			status: consolidatedStatus(ordered, clauses, common),
		},
		...ordered.flatMap((f) => [
			{
				title: `${f.title} Policy`,
				href: `/templates/policies/${f.id}/`,
				type: 'policy',
				stage: f.stage,
				controls: [`${f.id}-1`],
				role: f.role,
				status: policyStatus(f, clauses, common),
			},
			{
				title: `${f.title} Decision Worksheet`,
				href: `/templates/worksheets/${f.id}/`,
				type: 'worksheet',
				stage: f.stage,
				controls: [`${f.id}-1`],
				role: f.role,
				// As on the worksheet page: generated from the policy's parameters, never reviewed on its own.
				status: 'draft',
			},
		]),
		...templates.map((t) => {
			const family = byFamily.get(t.controls[0].split('-')[0]);
			if (!t.role && !family) throw new Error(`templates/${t.id}.md: no role, and no family policy for ${t.controls[0]} to take one from`);
			return { title: t.title, href: `/templates/${t.id}/`, type: t.type, stage: t.stage, controls: t.controls, role: t.role ?? family.role, status: t.status };
		}),
	];
	const rank = (r) => [STAGE_ORDER.indexOf(r.stage), TYPE_ORDER.indexOf(r.type)];
	return rows.sort((a, b) => {
		const [sa, ta] = rank(a);
		const [sb, tb] = rank(b);
		return sa - sb || ta - tb || a.title.localeCompare(b.title);
	});
}

const labelsOf = (catalog) => {
	const labels = new Map(catalog.controls.map((c) => [c.id, c.label]));
	return (ids) => ids.map((id) => labels.get(id) ?? id.toUpperCase());
};
const roleLabel = (variables, role) => variables[role]?.label ?? role;
const cell = (s) => String(s).replace(/\|/g, '\\|').replace(/\n/g, ' ');

export const CHECKLIST_COLUMNS = [
	'Artifact',
	'Type',
	'Stage',
	'Controls',
	'Accountable role',
	'Template status',
	'Template page',
	'Your status',
	'Assigned to',
	'Target date',
	'Notes',
];
const csvCell = (s) => (/[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s);

/**
 * The checklist as CSV, with empty columns for tracking adoption. UTF-8 with a
 * byte order mark and CRLF line ends, like the decision worksheets. `homepage`
 * (the site URL, with a trailing slash) makes the template links absolute.
 */
export function checklistCsv({ rows, catalog, variables, homepage }) {
	const labels = labelsOf(catalog);
	return (
		'﻿' +
		[
			CHECKLIST_COLUMNS,
			...rows.map((r) => [
				r.title,
				TYPE_LABEL[r.type],
				cap(r.stage),
				labels(r.controls).join('; '),
				roleLabel(variables, r.role),
				cap(r.status),
				homepage + r.href.slice(1),
				'',
				'',
				'',
				'',
			]),
		]
			.map((cells) => cells.map(csvCell).join(','))
			.join('\r\n') +
		'\r\n'
	);
}

/** The checklist page under program/: how to read it, the download, and the table. */
export function checklistPage({ rows, catalog, variables }) {
	const labels = labelsOf(catalog);
	const count = (stage) => rows.filter((r) => r.stage === stage).length;
	return [
		'---',
		"title: 'Program artifact checklist'",
		"description: 'Every artifact a security program built on the NIST RMF and SP 800-53 produces, with its type, program stage, controls, accountable role and template status, as a table and a spreadsheet for tracking.'",
		'sidebar:',
		"  label: 'Artifact checklist'",
		'  order: 5',
		'---',
		'',
		GENERATED_NOTE,
		'',
		`Every artifact this guide has a template for, in one list: ${rows.length} documents across the four stages of the [program path](/program/) (${STAGE_ORDER.map((s) => `${cap(s)} ${count(s)}`).join(', ')}). It is generated from the templates themselves, so it grows with the kit. Use it to track which documents your program has adopted, who owns each, and what is still to do.`,
		'',
		`**Download:** [Program artifact checklist (.csv)](/downloads/${CHECKLIST_FILE}): the table below, with each template's address and empty columns for your own status, owner, target date and notes. The [full kit](/templates/) includes it.`,
		'',
		'## How to read it',
		'',
		'- **Stage:** when a new program should adopt the artifact. Each stage\'s page, linked from the Stage column, says what the stage achieves and which decisions it needs.',
		'- **Controls:** the SP 800-53 controls the artifact satisfies or supports. A policy and its decision worksheet show the family\'s -1 control, which the policy\'s common sections meet; the policy\'s page lists every control it has statements for. The consolidated policy shows the -1 control of every family it covers.',
		'- **Accountable role:** for a policy and its worksheet, the role the policy holds accountable. For a plan, standard, procedure, form or report, the role its template names as accountable for it, such as the system owner for a system\'s own documents; a template that names none shows the role accountable for the family policy of its first-listed control. Assign each artifact to a named person in your program.',
		'- **Status:** the template\'s status in this guide: Draft until the author has reviewed it. It says nothing about your program; the spreadsheet\'s own columns are for that.',
		'',
		'Policies come two ways: the Information Security and Privacy Policy covers every family in one document, and the family policies cover one family each. For any one scope, adopt one or the other, not both, and track the one you adopt. The decision worksheets serve either.',
		'',
		'## Artifacts',
		'',
		'| Artifact | Type | Stage | Controls | Accountable role | Status |',
		'| --- | --- | --- | --- | --- | --- |',
		...rows.map(
			(r) =>
				`| [${cell(r.title)}](${r.href}) | ${TYPE_LABEL[r.type]} | [${cap(r.stage)}](/program/${r.stage}/) | ${labels(r.controls).join(', ')} | ${cell(roleLabel(variables, r.role))} | ${cap(r.status)} |`,
		),
		'',
	].join('\n');
}

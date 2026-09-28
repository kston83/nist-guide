// The starter kit (PRD PROG-02): resolves templates/starter-kit.yml against the
// sources, lists the files it contains per baseline, and builds its page.
// No file access, so npm test can run it.
import { policyBaselines } from '../../src/lib/template-assemble.ts';
import { GENERATED_NOTE, policyFile, templateFile, worksheetBaselines, worksheetFile } from './template-pages.mjs';

export const STARTER_BASELINES = ['Low', 'Moderate', 'High'];
export const starterKitFile = (baseline) => `starter-kit-${baseline.toLowerCase()}.zip`;

/**
 * Checks each item and resolves it to a row: { title, href?, controls, planned, files(baseline) }.
 * Throws on an unknown template id or a malformed item.
 */
export function resolveStarterKit({ starterKit, families, clauses, templates, catalog }) {
	const byId = new Map(templates.map((t) => [t.id, t]));
	const familyList = [...families.values()];
	const editions = (file) => ['clean', 'annotated'].flatMap((e) => [`${file(e)}.md`, `${file(e)}.docx`]);
	return (starterKit.items ?? []).map((item, i) => {
		if (item.template) {
			const t = byId.get(item.template);
			if (!t) throw new Error(`starter-kit.yml item ${i + 1}: no template "${item.template}"`);
			return {
				title: t.title,
				href: `/templates/${t.id}/`,
				controls: t.controls,
				planned: false,
				files: () => [...editions((e) => templateFile(t.id, e)), ...(t.type === 'form' ? [`${templateFile(t.id, 'clean')}.csv`] : [])],
			};
		}
		if (item.include === 'policies')
			return {
				title: `Family policies (${familyList.map((f) => f.id.toUpperCase()).join(', ')})`,
				href: '/templates/#policies',
				controls: familyList.map((f) => `${f.id}-1`),
				planned: false,
				files: (b) =>
					familyList
						.filter((f) => policyBaselines(f.id, clauses.filter((c) => c.id.startsWith(`policy/${f.id}/`)), catalog.controls).includes(b))
						.flatMap((f) => editions((e) => policyFile(f.id, b, e))),
			};
		if (item.include === 'worksheets')
			return {
				title: 'Decision worksheets for those families',
				href: '/templates/#decision-worksheets',
				controls: [],
				planned: false,
				files: (b) =>
					familyList.filter((f) => worksheetBaselines(f.id, catalog.controls).includes(b)).map((f) => `${worksheetFile(f.id, b)}.csv`),
			};
		if (item.planned && item.title && item.controls?.length)
			return { title: item.title, controls: item.controls, planned: true, files: () => [] };
		throw new Error(`starter-kit.yml item ${i + 1}: use template:, include: policies|worksheets, or title + controls + planned: true`);
	});
}

const controlLabel = (catalog, id) => catalog.controls.find((c) => c.id === id)?.label ?? id.toUpperCase();

export function starterKitPage({ rows, catalog, version }) {
	const table = [
		'| Artifact | Main controls | In this version |',
		'| --- | --- | --- |',
		...rows.map(
			(r) =>
				`| ${r.href ? `[${r.title}](${r.href})` : r.title} | ${r.controls.map((id) => controlLabel(catalog, id)).join(', ')} | ${r.planned ? 'Coming in a later kit version' : 'Included'} |`,
		),
	].join('\n');
	const downloads = [
		'| Baseline | Download |',
		'| --- | --- |',
		...STARTER_BASELINES.map((b) => `| ${b} | [Starter kit, ${b} (.zip)](/downloads/${starterKitFile(b)}) |`),
	].join('\n');
	return [
		'---',
		"title: 'Starter kit'",
		"description: 'The minimal set of security program templates a new program adopts first, for NIST RMF and SP 800-53, in one download per baseline.'",
		'sidebar:',
		"  label: 'Starter kit'",
		'  order: 1',
		'---',
		'',
		GENERATED_NOTE,
		'',
		`<p class="tpl-lead" data-pagefind-weight="10">Starter kit template: the minimal set of documents to adopt first when building a program from nothing.</p>`,
		'',
		`Download one file for your baseline and you have the documents a new program adopts first: the plans and policies the [Foundation](/program/foundation/) and [Core](/program/core/) stages call for, with the decision worksheets that tell you what to fill in. Each document comes ready to adopt and annotated, in Word and Markdown. Template version ${version}, based on NIST ${catalog.source.replace(/^SP 800-53 release/, 'SP 800-53 Rev. 5, release')}.`,
		'',
		'## What it contains',
		'',
		table,
		'',
		'Until the consolidated policy is published, the kit carries the family policies for your baseline.',
		'',
		'## Downloads',
		'',
		downloads,
		'',
		'## Where to start',
		'',
		'1. Fill in the decision worksheets with the people who own each decision.',
		'2. Adopt the family policies, carrying the worksheet values into their highlighted fields.',
		'3. Write the System Security Plan for your first system, and start its POA&M.',
		'4. Adopt the Incident Response Plan and test it with a tabletop exercise.',
		'',
	].join('\n');
}

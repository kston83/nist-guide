// Template lint (PRD QA-05, and the Writing templates rules). No file access,
// so npm test can run it; scripts/lint-templates.mjs feeds it the sources.
//
// Fails when:
//   - a clause has no "shall" statement
//   - a "shall" statement has no trailing control reference, such as "(AC-2a)"
//   - a clause leaves one of its control's parameters unhandled: neither a
//     {{param:...}} field (directly or through a parameter that aggregates it)
//     nor listed under `set`
//   - `typical` names a parameter the clause never shows as a field
//   - a template (plan, standard, procedure, form) lists no controls
//   - a clean edition still contains guidance text
//   - a variable in templates/variables.yml is used nowhere
import { renderBlocks } from '../../src/lib/template-editions.ts';
import { variablesIn } from '../../src/lib/template-vars.ts';

const GUIDANCE = /^:::\s*guidance\s*$([\s\S]*?)^:::\s*$/gm;
const REFERENCE = /\((?:[A-Z]{2}|XX)-\d+[^()]*(?:\([^()]*\)[^()]*)*\)\.?$/;

// Lines of body text outside guidance that make a "shall" statement.
const shallLines = (clean) =>
	clean
		.split('\n')
		.map((l) => l.trim())
		.filter((l) => /\bshall\b/.test(l) && !l.startsWith('#'));

function guidanceLeaks(source, clean) {
	const leaks = [];
	for (const [, text] of source.matchAll(GUIDANCE))
		for (const para of text.split(/\n\s*\n/).map((p) => p.trim()).filter((p) => p.length > 20))
			if (clean.includes(para)) leaks.push(para.slice(0, 60));
	return leaks;
}

function statementProblems(where, source) {
	const problems = [];
	const clean = renderBlocks(source, 'clean', 'md');
	for (const line of shallLines(clean))
		if (!REFERENCE.test(line)) problems.push(`${where}: statement has no trailing control reference: "${line.slice(0, 70)}"`);
	for (const leak of guidanceLeaks(source, clean)) problems.push(`${where}: clean edition still contains guidance: "${leak}..."`);
	return { problems, clean };
}

/**
 * @param sources { variables, common, families: Map, clauses: [], templates: [] } as loadSources returns
 * @param catalog src/data/catalog.json
 * @returns problems, one string each
 */
export function lintTemplates({ variables, common, families, clauses, templates }, catalog) {
	const problems = [];
	const controls = new Map(catalog.controls.map((c) => [c.id, c]));
	const used = new Set();
	const noteUses = (text) => {
		for (const ref of variablesIn(text)) if (ref.startsWith('org:')) used.add(ref.slice(4));
	};

	// Common sections: policy/_common.md, shared by most families, and a
	// family's own policy/<family>/_common.md (PM-1 has different parameters).
	const lintCommon = (where, body, users) => {
		problems.push(...statementProblems(where, body).problems);
		noteUses(body);
		const refs = variablesIn(body).filter((r) => r.startsWith('param:')).map((r) => r.slice(6));
		// Every -1 control of a family using these sections must have each parameter shown.
		for (const family of users) {
			const shown = new Set(refs.map((r) => (r.startsWith('xx-') ? family.id + r.slice(2) : r)));
			const policyControl = controls.get(`${family.id}-1`);
			for (const id of policyControl?.params ?? []) {
				if (catalog.params[id]?.aggregates) continue;
				if (!shown.has(id))
					problems.push(`${where}: ${id} (${policyControl.label}) is not a field; add {{param:${family.common ? id : `xx-${id.slice(family.id.length + 1)}`}}}`);
			}
		}
	};
	const all = [...families.values()];
	lintCommon('templates/policy/_common.md', common.body, all.filter((f) => !f.common));
	for (const family of all.filter((f) => f.common)) lintCommon(`templates/policy/${family.id}/_common.md`, family.common.body, [family]);

	for (const family of families.values()) used.add(family.role);

	for (const clause of clauses) {
		const where = `templates/${clause.id}.md`;
		const { problems: found, clean } = statementProblems(where, clause.body);
		problems.push(...found);
		if (!shallLines(clean).length) problems.push(`${where}: no "shall" statement outside guidance`);
		noteUses(clause.body);

		const control = controls.get(clause.control);
		if (!control) continue; // the content schema reports unknown controls
		const shown = new Set(variablesIn(clause.body).filter((r) => r.startsWith('param:')).map((r) => r.slice(6)));
		// A shown parameter also shows the ones it aggregates and those nested in its choices.
		for (const id of [...shown])
			for (const inner of [...(catalog.params[id]?.aggregates ?? []), ...(catalog.params[id]?.select?.nested ?? [])]) shown.add(inner);
		const set = new Set(Object.keys(clause.set ?? {}));
		for (const id of control.params) {
			if (catalog.params[id]?.aggregates) continue;
			if (!shown.has(id) && !set.has(id))
				problems.push(`${where}: parameter ${id} is neither a {{param:${id}}} field nor listed under set`);
			if (shown.has(id) && set.has(id)) problems.push(`${where}: parameter ${id} is both a field and listed under set`);
		}
		for (const id of Object.keys(clause.typical ?? {}))
			if (!shown.has(id)) problems.push(`${where}: typical value for ${id}, which the clause never shows as a field`);
	}

	for (const template of templates) {
		const where = `templates/${template.id}.md`;
		if (!template.controls?.length) problems.push(`${where}: lists no controls`);
		const shown = new Set(variablesIn(template.body).filter((r) => r.startsWith('param:')).map((r) => r.slice(6)));
		for (const id of Object.keys(template.typical ?? {}))
			if (!shown.has(id)) problems.push(`${where}: typical value for ${id}, which the template never shows as a field`);
		problems.push(...statementProblems(where, template.body).problems);
		noteUses(template.body);
	}

	for (const key of Object.keys(variables))
		if (!used.has(key)) problems.push(`templates/variables.yml: "${key}" is used by no template`);

	return problems;
}

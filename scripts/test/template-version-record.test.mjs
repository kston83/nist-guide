// Tests for the standard approval and version history section (PRD TPL-13):
// every template in scope ends with the same section, written into each source
// (policy/_common.md and policy/pm/_common.md for the policies), so the family
// policies, the consolidated policy and every download carry it.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { loadSources } from '../lib/template-sources.mjs';
import { consolidatedSources } from '../lib/template-pages.mjs';
import { assembleConsolidated, assemblePolicy, consolidatedBaselines, policyBaselines } from '../../src/lib/template-assemble.ts';
import { renderBlocks } from '../../src/lib/template-editions.ts';

const HEADING = '## Approval and version history';

// Forms that are themselves controlled documents: a text the organization
// approves and reviews on a cycle (PS-6b, CA-3c, PT-5, PL-4c). The other forms
// are records filled in per event, or living registers, and do not carry it.
const CONTROLLED_FORMS = ['forms/access-agreement', 'forms/information-exchange-agreement', 'forms/privacy-notice', 'forms/rules-of-behavior'];

const sources = await loadSources();
const catalog = JSON.parse(fs.readFileSync('src/data/catalog.json', 'utf8'));

// The section as written in policy/_common.md: from its heading to the end.
const tail = (text) => {
	const at = text.lastIndexOf(`\n${HEADING}\n`);
	return at < 0 ? null : text.slice(at + 1).trimEnd();
};
const SECTION = tail(sources.common.body);

test('the shared policy sections end with the section, with both tables', () => {
	assert.ok(SECTION, `templates/policy/_common.md ends with "${HEADING}"`);
	assert.doesNotMatch(SECTION.slice(HEADING.length), /^## /m, 'no section follows it');
	assert.match(SECTION, /^### Approval\n\n\| Version \| Name, role and title \| Signature \| Date \|$/m);
	assert.match(SECTION, /^### Version history\n\n\| Version and date \| Review or change \(what, where and why\) \| By \(name and role\) \| Approved by \|$/m);
	// It cites the review and update element it records, and stays the same in every family.
	assert.match(SECTION, /AC-1c/);
	assert.match(SECTION, /PM-1b/);
	assert.doesNotMatch(SECTION, /XX-1|\{\{(family|param):/);
});

test('every plan, standard, procedure and report, and each controlled form, ends with the same section', () => {
	const inScope = (t) => t.type !== 'form' || CONTROLLED_FORMS.includes(t.id);
	for (const t of sources.templates.filter(inScope)) assert.equal(tail(t.body), SECTION, `templates/${t.id}.md`);
	assert.equal(tail(sources.families.get('pm').common.body), SECTION, 'templates/policy/pm/_common.md');
	for (const id of CONTROLLED_FORMS) assert.ok(sources.templates.some((t) => t.id === id), `${id} exists`);
});

test('forms filled in per event, and registers, do not carry it', () => {
	for (const t of sources.templates.filter((t) => t.type === 'form' && !CONTROLLED_FORMS.includes(t.id)))
		assert.ok(!t.body.includes(HEADING), `templates/${t.id}.md: add it to CONTROLLED_FORMS if it is a controlled document`);
});

test('no template keeps a version or change history table of its own', () => {
	const old = /^\| (Version \| Date|Date \| Version) \|/m;
	for (const t of sources.templates) {
		const body = t.body.includes(HEADING) ? t.body.slice(0, t.body.lastIndexOf(HEADING)) : t.body;
		assert.doesNotMatch(body, old, `templates/${t.id}.md`);
	}
});

test('every family policy and consolidated policy variant ends with the section, in both editions', () => {
	const ends = (source, what) => {
		assert.equal(tail(source), SECTION, what);
		const clean = renderBlocks(source, 'clean', 'md').trimEnd();
		assert.ok(clean.endsWith(SECTION.slice(SECTION.indexOf('### Approval'))), `${what}, clean edition`);
	};
	for (const family of sources.families.values()) {
		const own = sources.clauses.filter((c) => c.id.startsWith(`policy/${family.id}/`));
		for (const baseline of policyBaselines(family.id, own, catalog.controls, family.baseline === 'none')) {
			const { source } = assemblePolicy({ common: (family.common ?? sources.common).body, family, clauses: own, controls: catalog.controls, baseline });
			ends(source, `${family.id} policy (${baseline})`);
		}
	}
	const families = [...sources.families.values()];
	const consolidated = consolidatedSources({ families, clauses: sources.clauses, common: sources.common, variables: sources.variables });
	for (const baseline of consolidatedBaselines(consolidated, catalog.controls)) {
		const { source } = assembleConsolidated({ common: sources.common.body, families: consolidated, controls: catalog.controls, baseline });
		ends(source, `consolidated policy (${baseline})`);
		assert.equal(source.split(`\n${HEADING}\n`).length, 2, `consolidated policy (${baseline}) has the section once`);
	}
});

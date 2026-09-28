// Tests for the SP 800-53 page generator, run on a small fixture catalog (no network).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { activeControlIds, buildControlData, buildPages, collectParams, createParamRenderer } from '../lib/oscal.mjs';
import { mergeGenerated, START, END, GUIDE, LINT_OFF, LINT_ON } from '../lib/generated.mjs';

const { catalog } = JSON.parse(fs.readFileSync(new URL('./fixtures/catalog.json', import.meta.url), 'utf8'));
const profile = (ids) => ({ imports: [{ 'include-controls': [{ 'with-ids': ids }] }] });
const profiles = {
	Low: profile(['ac-1', 'ac-2']),
	Moderate: profile(['ac-1', 'ac-2', 'ac-2.1']),
	High: profile(['ac-1', 'ac-2', 'ac-2.1']),
	Privacy: profile(['ac-1']),
};
const { version, pages } = buildPages(catalog, profiles);
const page = (file) => pages.find((p) => p.file === file);

// ---------- parameter rendering ----------

test('assignment parameters get the organization-defined prefix once', () => {
	const { renderParam } = createParamRenderer(collectParams(catalog));
	assert.equal(renderParam('ac-01_odp.01'), '[Assignment: organization-defined personnel or roles]');
	assert.equal(renderParam('ac-01_odp.02'), '[Assignment: organization-defined official]');
});

test('selection parameters list choices, noting one-or-more', () => {
	const { renderParam } = createParamRenderer(collectParams(catalog));
	assert.equal(renderParam('ac-01_odp.03'), '[Selection (one or more): organization-level; system-level]');
});

test('parameters nested inside selection choices are rendered', () => {
	const { renderParam } = createParamRenderer(collectParams(catalog));
	assert.equal(renderParam('ac-01_odp.04'), '[Selection: [Assignment: organization-defined frequency]; never]');
});

test('parameters without a label fall back to guidelines, then the id', () => {
	const { renderParam } = createParamRenderer(collectParams(catalog));
	assert.equal(renderParam('ac-01_odp.06'), '[Assignment: events that trigger review]');
	assert.equal(renderParam('zz-99_odp.01'), '[zz-99_odp.01]');
});

test('control statements render parameters, labels, and escape angle brackets', () => {
	const { body } = page('ac/ac-1.md');
	assert.match(body, /- \*\*a\.\*\* Disseminate to \[Assignment: organization-defined personnel or roles\]/);
	assert.doesNotMatch(body, /organization-defined organization-defined/);
	assert.match(body, /Policy &lt;discussion> for AC-2 and a reference\./);
});

test('front matter carries id, family and baselines, privacy last', () => {
	const { frontmatter } = page('ac/ac-1.md');
	assert.match(frontmatter, /^---\ntitle: 'AC-1 Policy and Procedures'\n/);
	assert.match(frontmatter, /control:\n {2}id: AC-1\n {2}family: AC\n {2}baselines: \[Low, Moderate, High, Privacy\]/);
});

// ---------- withdrawn controls ----------

test('withdrawn controls get no page and are listed on the family page', () => {
	assert.equal(page('ac/ac-3.md'), undefined);
	assert.match(page('ac/index.md').body, /\*Withdrawn controls: AC-3\.\*/);
	assert.match(page('ac/index.md').body, /has 2 active controls in SP 800-53 release 9\.9\.9/);
	assert.equal(version, '9.9.9');
});

test('withdrawn enhancements are listed, not rendered', () => {
	const { body } = page('ac/ac-2.md');
	assert.match(body, /### AC-2\(1\) Automated Account Management/);
	assert.doesNotMatch(body, /### AC-2\(2\)/);
	assert.match(body, /\*Withdrawn enhancements: AC-2\(2\)\.\*/);
	assert.match(body, /\| 1 \(1 in a baseline\) \|/);
});

test('active control ids include enhancements and skip withdrawn ones (QA-04)', () => {
	assert.deepEqual(activeControlIds(catalog), ['ac-1', 'ac-2', 'ac-2.1']);
});

test('related links to withdrawn controls are plain text', () => {
	assert.match(page('ac/ac-1.md').body, /\*\*Related controls:\*\* \[AC-2\]\(\/controls\/ac\/ac-2\/\), AC-3\n/);
});

// ---------- marker preservation ----------

const ac2 = page('ac/ac-2.md');

test('a new file gets front matter, the NIST block and the guidance marker', () => {
	const out = mergeGenerated(null, ac2);
	assert.ok(out.startsWith(ac2.frontmatter));
	assert.ok(out.includes(`${START}\n`) && out.includes(`\n${END}\n`));
	assert.ok(out.trimEnd().endsWith(GUIDE));
});

test('guidance below the end marker survives regeneration untouched', () => {
	const guidance = `\n${GUIDE}\n\n## How to apply it\n\nHand-written text with <!-- nist:start --> lookalikes avoided.\n`;
	const existing = `${ac2.frontmatter}\n\n${START}\nOLD NIST TEXT\n${END}${guidance}`;
	const out = mergeGenerated(existing, ac2);
	assert.ok(out.endsWith(`${END}${guidance}`));
	assert.doesNotMatch(out, /OLD NIST TEXT/);
	assert.match(out, /Manage accounts\./);
});

test('files without markers are left alone', () => {
	assert.equal(mergeGenerated('---\ntitle: Hand written\n---\n\nNo markers here.\n', ac2), null);
});

test('frontmatter null keeps the file’s own front matter and intro', () => {
	const existing = `---\ntitle: Using the control pages\n---\n\nIntro text.\n\n${START}\nold\n${END}\n\nMore.\n`;
	const out = mergeGenerated(existing, { frontmatter: null, body: 'new table' });
	assert.equal(
		out,
		`---\ntitle: Using the control pages\n---\n\nIntro text.\n\n${START}\n${LINT_OFF}\nnew table\n${LINT_ON}\n${END}\n\nMore.\n`,
	);
});

test('the generated block is wrapped so markdown lint skips NIST text (QA-02)', () => {
	const out = mergeGenerated(null, ac2);
	assert.ok(out.includes(`${START}\n${LINT_OFF}\n`) && out.includes(`\n${LINT_ON}\n${END}\n`));
});

// ---------- front matter merge (CTRL-01) ----------

test('hand-set front matter keys survive; generator-owned keys are replaced', () => {
	const stale = ac2.frontmatter.replace("title: 'AC-2 Account Management'", "title: 'Stale title'");
	const handSet = stale.replace(
		'\ncontrol:',
		'\nguidance: draft\nreviewed: 2026-09-28\ntags:\n  - identity\n  - accounts\ncontrol:',
	);
	const existing = `${handSet}\n\n${START}\nold\n${END}\n\n${GUIDE}\n`;
	const out = mergeGenerated(existing, ac2);
	assert.match(out, /title: 'AC-2 Account Management'/);
	assert.doesNotMatch(out, /Stale title/);
	assert.match(out, /\nguidance: draft\nreviewed: 2026-09-28\ntags:\n {2}- identity\n {2}- accounts\n---\n/);
	assert.equal((out.match(/^control:/gm) ?? []).length, 1);
});

test('CRLF files merge the same as LF files', () => {
	const lf = `${ac2.frontmatter.replace('\ncontrol:', '\nguidance: draft\ncontrol:')}\n\n${START}\nold\n${END}\n\n${GUIDE}\n`;
	assert.equal(mergeGenerated(lf.replace(/\n/g, '\r\n'), ac2), mergeGenerated(lf, ac2));
});

// ---------- idempotency (CTRL-02) ----------

test('regenerating is idempotent, with and without hand-set keys and guidance', () => {
	for (const p of pages) {
		const first = mergeGenerated(null, p);
		assert.equal(mergeGenerated(first, p), first, p.file);
	}
	const edited = mergeGenerated(null, ac2)
		.replace('\ncontrol:', '\nguidance: reviewed\ncontrol:')
		.concat('\n## How to apply it\n\nText.\n');
	// The first run may move hand-set keys below the generated ones; after that nothing changes.
	const once = mergeGenerated(edited, ac2);
	assert.match(once, /\nguidance: reviewed\n---\n/);
	assert.ok(once.endsWith('\n## How to apply it\n\nText.\n'));
	assert.equal(mergeGenerated(once, ac2), once);
});

test('building pages twice gives identical output', () => {
	assert.deepEqual(buildPages(catalog, profiles), { version, pages });
});

// ---------- control and parameter data for templates (CTRL-08) ----------

const data = buildControlData(catalog, profiles);

test('control data lists active controls and enhancements in catalog order, with baselines', () => {
	assert.equal(data.version, '9.9.9');
	assert.deepEqual(
		data.controls.map((c) => [c.id, c.label, c.baselines]),
		[
			['ac-1', 'AC-1', ['Low', 'Moderate', 'High', 'Privacy']],
			['ac-2', 'AC-2', ['Low', 'Moderate', 'High']],
			['ac-2.1', 'AC-2(1)', ['Moderate', 'High']],
		],
	);
	assert.deepEqual(data.controls[1], {
		id: 'ac-2',
		label: 'AC-2',
		title: 'Account Management',
		family: 'ac',
		baselines: ['Low', 'Moderate', 'High'],
		params: ['ac-2_prm_1', 'ac-02_odp.01', 'ac-02_odp.02'],
	});
});

test('parameters carry the 800-53A label, NIST label, prompt and page text', () => {
	assert.deepEqual(data.params['ac-02_odp.01'], {
		control: 'ac-2',
		odp: 'AC-02_ODP[01]',
		label: 'time period',
		prompt: 'time period within which to notify account managers',
		text: '[Assignment: organization-defined time period]',
	});
});

test('prompts drop "defined", "(if selected)" and links to other parameters', () => {
	assert.equal(data.params['ac-02_odp.02'].prompt, 'attributes (as required) for AC-02_ODP');
	assert.equal(data.params['ac-01_odp.06'].prompt, 'events that trigger review');
	assert.equal(data.params['ac-01_odp.01'].prompt, undefined);
});

test('selections list choices with nested parameters rendered', () => {
	assert.deepEqual(data.params['ac-01_odp.03'].select, {
		howMany: 'one-or-more',
		choices: ['organization-level', 'system-level'],
	});
	assert.deepEqual(data.params['ac-01_odp.04'].select, {
		howMany: 'one',
		choices: ['[Assignment: organization-defined frequency]', 'never'],
		nested: ['ac-01_odp.05'],
	});
});

test('aggregating parameters list the parameters they combine', () => {
	assert.deepEqual(data.params['ac-2_prm_1'].aggregates, ['ac-02_odp.01', 'ac-02_odp.02']);
	assert.equal(data.params['ac-2_prm_1'].odp, undefined);
});

test('parameters of withdrawn controls are left out', () => {
	for (const p of Object.values(data.params)) assert.ok(['ac-1', 'ac-2', 'ac-2.1'].includes(p.control));
});

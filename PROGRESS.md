# Progress

Tracks work against [`docs/PRD.md`](docs/PRD.md). Update at the end of each task.

## Current phase: 2 Template system and first kit

Phase 1 is complete: approved by the owner and merged (2026-09-28).

Phase 2 work is in stacked pull requests, each based on the one before it, starting at #11. Merge them in order; after each merge, point the next one at `main`.

### Phase 2 status

| Item | Status | Pull request |
| --- | --- | --- |
| CTRL-08, TPL-01 to TPL-08, QA-05 | Built | #11 to #20 |
| PROG-01, PROG-05 | Built | #21 |
| PROG-02 Starter kit | Waiting for the SSP, IR plan and POA&M templates | |
| Family policies: AC, AU, CM | Draft | #22 to #24 |
| Family policy: IA | Draft | #25 |
| Family policy: IR | Draft | #26 |
| Guidance for the 30 priority controls | Not started | |
| Incident Response Plan | Draft | #27 |
| System Security Plan | Draft | #28 |
| POA&M template | Draft | #29 |
| P2: CTRL-04, CTRL-05, CTRL-06, QA-03, PRES-06, FEAT-04, TPL-10 | Not started; PRES-06 needs the owner's input on the Word look | |

Exit criteria: 31 controls at `guidance: draft` or better; 5 family policies downloadable per baseline; kit v1.0.0 released.

### Carried from Phase 1

- ~~**NAV-01:** "incident response plan" returns the template first~~ (done, #27).
- **PRES-03:** add an industry guide to `.pa11yci.json` in Phase 4.

Decisions recorded in the PRD this phase: `yaml` and `fflate` dependencies, `_common.md` variables (2026-09-28).

## Log

| ID | Status | Date | Notes |
| --- | --- | --- | --- |
| Content: POA&M | Draft | 2026-09-28 | `templates/forms/plan-of-action-and-milestones.md` (stage Operate): usage rules citing CA-5a and CA-5b, a field guide, and a register. The kit exports any form register (the table under `## Register`) as a CSV header row; form pages link it. Forms sidebar group |
| Content: System Security Plan | Draft | 2026-09-28 | `templates/plans/system-security-plan.md` follows the System Security Plan Outline Example published with NIST SP 800-18 Rev. 2 (final, June 30, 2026; it replaced Rev. 1, withdrawn the same day; checked at csrc.nist.gov) and cites every PL-2a to PL-2e element; federal blocks for SP 800-60 and FIPS 199 categorization and the SP 800-63-4 Digital Identity Acceptance Statement. Library and Select step now cite SP 800-18 Rev. 2 |
| Content: Incident Response Plan | Draft | 2026-09-28 | `templates/plans/incident-response-plan.md`: the ten IR-8a elements, handling organized by the CSF 2.0 Functions as NIST SP 800-61 Rev. 3 (final, April 2025; checked at csrc.nist.gov) does, CISA federal block, contact appendix. Template pages get a Pagefind-weighted lead so "incident response plan" finds the template first (NAV-01 carry-over done). Templates may now give `typical` values; downloads take their H1 from `title`. Plans sidebar group |
| Content: IR policy | Draft | 2026-09-28 | `_family.yml` and clauses for all 17 IR controls and enhancements in the Low, Moderate and High baselines; new `incident-response-team` variable. IR-6 federal block: report to CISA within one hour, per the CISA Federal Incident Notification Guidelines (effective April 1, 2017; checked at cisa.gov, "as of September 2026"). Privacy-only IR-2(3) and IR-8(1), and AC-3(14), are not written yet, so Privacy variants cover security-baseline clauses only. Also: prompts drop "is identified" and "is determined" |
| Content: IA policy | Draft | 2026-09-28 | `_family.yml` and clauses for all 25 IA controls and enhancements in the Low, Moderate and High baselines. Password typical values follow NIST SP 800-63B-4 (final, July 2025; checked at csrc.nist.gov): 15 characters when used alone, 8 with another factor, no composition rules, no periodic change. IA-2(12) has a federal block (HSPD-12, FIPS 201-3, January 2022, checked); IA-2(12) and IA-8(1) are conditional in the body for non-federal use |
| Content: CM policy | Draft | 2026-09-28 | `_family.yml` (three worksheet questions) and clauses for all 31 CM controls and enhancements in the Low, Moderate and High baselines; CM-6 guidance points to vendor baselines and the NIST National Checklist Program (SP 800-70 Rev. 4) |
| Content: AU policy | Draft | 2026-09-28 | `_family.yml` and clauses for all 24 AU controls and enhancements in the Low, Moderate and High baselines; new `security-operations` variable. AU-11 has a TODO(verify) for federal retention (see Open questions) |
| Content: AC policy | Draft | 2026-09-28 | Clauses for all 45 AC controls and enhancements in the Low, Moderate and High baselines (AC-1 through `_common.md`), each written from the NIST statement, every parameter a field with a typical value or set; AC-8 has a federal block for the two U.S. Government notices (AC-8a.1, a.3). Assembled policy: Low 10 statement groups, Moderate 38, High 45. Privacy-only AC-3(14) not yet written. Added a remote access question to `_family.yml`. Also: `catalog.json` lists parameters nested in selections (lint counts them), and downloads use absolute links |
| PROG-01, PROG-05 | Done | 2026-09-28 | `program/` section (draft): overview plus Foundation, Core, Operate and Mature pages with outcome, artifacts to produce (from the PRD artifact catalog), decisions, roles, done checklist, and the organization-level Prepare tasks (SP 800-37 Rev. 2, P-1 to P-7) each stage carries out, labelled as the author's mapping. `StageArtifacts.astro` lists each stage's available templates from front matter (`_family.yml` and template `stage`). Template pages and the index link their stage. New "Build your program" sidebar group; Core page in the axe check |
| QA-05 | Done | 2026-09-28 | `npm run lint` now also runs `scripts/lint-templates.mjs` (rules in `scripts/lib/template-lint.mjs`). Fails on: a clause with no "shall" statement outside guidance; a "shall" statement without a trailing control reference; a clause parameter that is neither a `{{param:...}}` field (directly or through an aggregating parameter) nor under `set`, or is both; a `typical` value for a parameter not shown; a -1 parameter missing from `_common.md`; a template with no controls; guidance text left in a clean edition; a `variables.yml` key used nowhere (a family `role` counts). 9 tests |
| TPL-05 | Done | 2026-09-28 | Every document as `.docx` (pandoc 3.11, pinned by version and SHA-256, installed only in CI by `check.yml` and `deploy.yml`) and `.md`, with a header block (version, baseline, edition, NIST basis, latest-version link, not-legal-advice and CC0 notices). `templates/reference.docx` made by `npm run reference-docx` from pandoc's default plus `Fill-in` (highlight) and `Guidance` (shaded, left rule) styles; PRES-06 will refine the look. Zips with the approved `fflate`: `packs/<family>-pack.zip` and `rmf-field-guide-kit.zip` (deterministic, with a README). Pages link Word and Markdown for each variant, the family pack, and the kit. CI fails without pandoc; a local build without it skips `.docx` with a warning and the link check tolerates those links only then. Word/LibreOffice open check: see PR |
| TPL-08 | Done | 2026-09-28 | `src/lib/template-worksheet.ts`: rows are the `_family.yml` questions, then every non-aggregate parameter of every family control in the baseline (with or without a clause), in catalog order; typical values from the family's clauses; "Who decides" defaults to the family role. Kit writes `worksheets/<family>-decisions-<baseline>.csv` (UTF-8 BOM, CRLF, empty "Your value" column; Privacy variant when a family control is in it). Page per family at `/templates/worksheets/<family>/` (Moderate table, CSV per baseline), linked from the policy page; new sidebar group and index section. AC Moderate: 64 decisions. 5 tests |
| TPL-06 | Done | 2026-09-28 | `MarkdownContent` override inserts "Policy statement" right after the NIST block (split at `<!-- nist:end -->`): the control's clause and its enhancements' clauses (under an `h3` each), clean edition with highlighted fields, and a line naming the source template and its draft status. A -1 control explains that the family policy's common sections meet it and links there. "Artifacts" lists template pages whose `controls` name the control; "Referenced by" now lists only non-template pages. The `clauses` loader pre-renders the clean statements through Astro's Markdown pipeline (own digest, `deferredRender: false`). No control file changes (CI diff check) |
| TPL-07 | Done | 2026-09-28 | `npm run templates` writes one committed page per family policy (`templates/policies/<family>/`) and per plan, standard, procedure or form (at its source path), plus a generated index; stale generated pages are removed. Each page: facts (type, stage, status, version from `package.json`, NIST basis), what it is, controls satisfied by baseline, decisions (`_family.yml` questions and parameter count), downloads per baseline and edition, and the annotated preview (Moderate for policies). `controls` front matter feeds "Referenced by" on control pages. CI fails on stale pages. New "Templates" sidebar group; `.tpl-field`/`.tpl-federal` styles from existing tokens. `_family.yml` gains a required `stage`. AC policy page added to the axe check (PRES-03 carry-over; 0 errors in both themes). 7 tests |
| TPL-04 | Done | 2026-09-28 | `src/lib/template-editions.ts`: `:::guidance` kept in the annotated edition (site: Starlight note aside; `.md`: labelled blockquote; `.docx`: pandoc div in a `Guidance` paragraph style) and removed from the clean edition; `:::federal` kept in both under a "Federal systems" heading one level below its section (site wraps it in `.tpl-federal`). Malformed, unknown or nested blocks fail the build with a line number (collection checks and kit). Kit writes `<family>-policy-<baseline>.md` (clean) and `-annotated.md`. 7 tests |
| TPL-03 | Done | 2026-09-28 | `src/lib/template-assemble.ts` inserts the family's clauses under `## Policy statements` in `policy/_common.md`, in catalog order, keeping only controls in the chosen baseline (from `catalog.json`, so a control NIST adds to a baseline appears with no manual step); `XX-1` references become the family label. Low, Moderate and High always; Privacy only when a clause is in it. `scripts/build-templates.mjs` (`npm run kit`, now part of `npm run build`, so CI, deploy and the link check all include it) writes `dist/downloads/policies/<family>-policy-<baseline>.md`. `_common.md` written (draft) for the 19 families that share the -1 parameter layout; federal block cites 44 U.S.C. § 3554 and OMB A-130 Appendix I. 8 tests. Completes the QA-01 kit-build carry-over |
| TPL-02 | Done | 2026-09-28 | `src/lib/template-vars.ts` renders `org:`, `param:`, `fill:` and (in `_common.md`) `family:` and `xx-` variables for site (HTML field with typical value), `.md` (`[Fill in: ... Typical: ...]`) and `.docx` (pandoc span in a `Fill-in` character style for `reference.docx`). Parameters show their 800-53A description; selections list choices. Unknown variables and parameters fail the build via the `clauses` and `templates` collection checks, all listed at once. 9 tests. Adds the approved `yaml` dependency |
| TPL-01 | Done | 2026-09-28 | Collections `clauses`, `templates`, `families`, `variables` over `templates/` (glob and file loaders; ids are paths, so `ac-2.3` keeps its dot). Schemas and whole-collection checks in `src/lib/template-schema.ts`, 10 tests. Build fails on an unknown control, bad `status`/`stage`/`type`, a clause not at `policy/<family>/<control>.md`, a duplicate clause, a template in the wrong type folder, or `typical`/`set` naming another control's parameter. First sources: `variables.yml`, `policy/ac/_family.yml`, the AC-2 clause (`status: draft`). Owner decisions recorded in the PRD: `yaml` and `fflate` dependencies, `family:` variables and the `xx-` prefix in `_common.md`; `typical`, `set` and `description` front matter added |
| CTRL-08 | Done | 2026-09-28 | `npm run controls` also writes `src/data/catalog.json` (committed; CI diff check covers it): 1,014 active controls and enhancements in catalog order with baselines and parameter ids, and 1,600 parameters with 800-53A label, NIST label, selection choices, aggregated parameters, the control page placeholder text and a `prompt` taken from the 800-53A guideline ("time period within which to disable accounts"). 6 new tests on the fixture catalog |
| PRES-03 | Done (PR #10 open) | 2026-09-28 | Owner chose `pa11y-ci` (dev dependency). `npm run check:a11y` (CI) serves the build and runs axe on home, About, a step page (Prepare), a control page (AC-2) and the industries index, in light and dark themes; fails on serious or critical issues. First run found 11 unlabelled task-list checkboxes on Prepare (51 across the seven step pages): fixed with a rehype plugin that wraps each in a `<label>`. Add a template page and an industry guide to `.pa11yci.json` when they exist. `npm audit` flags `extract-zip` (used only by Puppeteer to unpack its Chrome download); dev only |
| PRES-01 | Done | 2026-09-28 | PR #9. Owner chose a branded default over per-page images. `public/og-default.png` (1200x630, Source Serif 4 and Public Sans, theme teal) made by `npm run og-image` with sharp (no new dependency) and committed; `og:image`, size, alt and `twitter:image` on every page via Starlight `head`. Starlight already sets og:title and og:site_name |
| NAV-01 | Done (control ids) | 2026-09-28 | PR #8. Pagefind drops punctuation, so "AC-2(3)" matched AC-23 first. A rehype plugin adds a hidden token (`ac2e3`) after each of the 714 enhancement headings; a Vite alias wraps `@pagefind/default-ui` so the search box rewrites enhancement ids to the token and strips it from excerpts. `npm run check:search` (CI) checks 12 queries and that the wrapper is in the bundle. The PRD's "incident response plan returns the template first" case waits for templates (Phase 2): add it to `scripts/check-search.mjs` then |
| LINK-01 | Done | 2026-09-28 | PR #7. `MarkdownContent` override adds "Referenced by" to control pages from any page's `controls` front matter (templates, SSDF, industries, technology, then other pages); enhancement-only citations are named, for example "(IA-2(1))". Hidden when nothing refers to the control. Logic in `src/lib/references.ts`, 4 tests |
| QA-02 | Done | 2026-09-28 | PR #6. `markdownlint-cli2` (`npm run lint`, config `.markdownlint-cli2.jsonc`) in CI. Line length, inline HTML and table column style off. Generator wraps the NIST block in `markdownlint-disable`/`restore` so only hand-written content is linted. Fixed tabs in `index.mdx`, a README code fence, two PRD pseudo-headings |
| QA-04 | Done | 2026-09-28 | PR #5. Schema rejects unknown or withdrawn `controls` ids (checked against `src/data/control-ids.json`, 1,014 active ids written by `npm run controls` and covered by the CI diff check) and malformed `industries`/`technologies` slugs; rules documented on the Page templates page |
| QA-01 | Done (Phase 1 scope) | 2026-09-28 | `check.yml` runs tests, lint, generated-page check, build and link check on every PR. The PRD also lists the kit build; add that step when the kit exists (Phase 2) |
| PRES-04 | Done | 2026-09-28 | PR #2, #4. Name, bio (AI security lead, CISSP) and LinkedIn on About and home; LinkedIn in header; "Your Name" replaced everywhere. Headshot optional; add if the owner provides one |
| CTRL-03 | Done | 2026-09-28 | PR #3. `npm test` (node:test, fixture catalog, no network): 17 tests for parameters, withdrawn controls, markers, front matter merge, idempotency. Fixed doubled "organization-defined organization-defined" in 121 places |
| CTRL-02 | Done | 2026-09-28 | PR #3. Generator idempotent; NIST source pinned to oscal-content v1.5.0 (release 5.2.0); CI fails if regenerating changes any page |
| CTRL-01 | Done | 2026-09-28 | PR #3. Generator keeps hand-set front matter keys (anything but `title`, `description`, `sidebar`, `control`); `guidance` and `reviewed` added to the content schema |
| — | Done | 2026-09-27 | PR #2. PRD version 2: template system, artifact catalog, program path, SSDF; phases reordered |
| LINK-03 | Done | 2026-09-27 | PR #1. `scripts/check-links.mjs` (`npm run check:links`) fails on missing pages and `#anchors`; runs in `.github/workflows/check.yml` |
| — | Done | 2026-09-27 | PR #1. Fixed home page links that 404'd under the `/nist-guide/` base path (hero, step strip, cards) |
| — | Done | 2026-09-27 | PR #1. Repo hardening: `main` ruleset (PR + required check), SHA-pinned actions, least-privilege workflow permissions, Dependabot |

## Open questions

From the PRD. The owner deferred every open item on 2026-09-28; raise each again when its phase starts.

- [x] Name, short bio and LinkedIn URL for the About page (2026-09-28)
- [ ] Headshot for the About page (deferred)
- [x] Name the current employer in the bio: no; keep the employer out of the site (2026-09-28)
- [x] GitHub username: `kston83`; site is at `https://kston83.github.io/nist-guide/`
- [ ] Custom domain now or later (deferred)
- [x] Site title: keep "RMF Field Guide" for now; may change later (2026-09-28)
- [x] Template license: CC0 1.0 for templates and the kit (2026-09-27)
- [x] Packaging: free kit only; revisit if it becomes something to sell (2026-09-27)
- [x] Template voice: any organization, federal-only requirements in `:::federal` sections (2026-09-27)
- [x] `.docx` tool: pandoc, pinned, in CI (2026-09-27)
- [x] Employer publishing policy: no issues (2026-09-28)
- [ ] Which three industries to cover first (proposed: defense, healthcare, financial services); deferred, needed by Phase 4
- [ ] Which four platforms to cover first (proposed: AWS, Azure, Microsoft 365 with Entra ID, Kubernetes); deferred, needed by Phase 4
- [ ] Privacy-friendly analytics: yes or no; deferred (PRES-05, Phase 5)
- [ ] TODO(verify), `templates/policy/au/au-11.md`: federal log retention. OMB M-21-31 required 12 months active and 18 months cold storage; a search on 2026-09-28 indicates OMB M-26-14 (May 2026) replaced it, but its PDF could not be read here. Confirm M-26-14's requirements, then add a federal block to AU-11 (and AU-2 if it sets event types)

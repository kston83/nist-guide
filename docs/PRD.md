# RMF Field Guide: Product Requirements

Version 2.1 · Sep 27, 2026 · @Kris · [Revision history](#revision-history)

## Summary

The RMF Field Guide is a free, public, static website that helps an organization **learn, build and prove** a security program based on the NIST Risk Management Framework (RMF) and SP 800-53. It explains every step and control, and it ships the artifacts to act on them: policy templates for every control family, procedures, plans, forms and worksheets, ready to fill in or modify. A reader with no program can start from zero and follow a staged path; a reader with a program can take just the pieces they need.

The same templates serve three uses: as teaching material inside the guide, as a downloadable, versioned kit other organizations can adopt, and as the owner's consulting playbook. Secure software development (the NIST SSDF, SP 800-218) is folded in as part of the same program, not a separate site.

This document tells a Claude Code session what to build on top of the existing repo, in what order, and how to know each piece is done.

### Vision

Every control on the site answers five questions, in order, and every answer after the first is something the reader can copy:

```text
Requirement   What NIST requires              Generated from OSCAL (exists)
Policy        What we commit to               Policy clause template, per control
Procedure     How we do it                    Procedure or standard template
Implementation Where it's configured          Technology playbook (Phase 4)
Evidence      How we prove it                 Evidence list and forms
```

Families roll the per-control pieces up into artifacts an organization actually adopts: a policy per family (or one consolidated policy), the plans the controls require (SSP, incident response plan, contingency plan and so on), and a decision worksheet listing every choice the family forces the organization to make.

#### Goals

1. Be the most practical free reference for applying the RMF and SP 800-53: every page answers "what do I actually do, and what will the assessor ask for?"
2. Let an organization build a program from scratch: a staged path plus a plug-and-play artifact for every requirement that needs one.
3. Keep the guide and the kit as one source: a policy clause is written once and appears on its control page, in its family policy, in the consolidated policy and in the downloadable kit.
4. Cover five layers: the framework, every control, program templates, industry-specific application, and technology-specific implementation, with secure software development (SSDF) woven through.
5. Present the owner as a credible, organized leader in the field: professional look, accurate content, cited sources, visible upkeep.
6. Stay cheap and low-maintenance: static site, GitHub Pages, no paid services, one command to refresh NIST content, one command to rebuild the kit.

#### Success measures

| Measure | Target |
| --- | --- |
| Controls with written guidance | 30 highest-value controls in Phase 2; all Moderate-baseline controls in Phase 5 |
| Controls with a policy clause | Controls in 5 families in Phase 2; every Low and Moderate control and enhancement in Phase 3; High in Phase 5 |
| Family policy templates | 5 in Phase 2; all 20 plus a consolidated policy in Phase 3 |
| Plans, procedures and forms | Every artifact in the [artifact catalog](#artifact-catalog) by end of Phase 3 |
| Program kit | Versioned release with every template in `.docx` and `.md`, per baseline, from Phase 2 |
| SSDF | Every SSDF practice has a page and a mapping to 800-53 by end of Phase 3 |
| Industry guides and technology playbooks | 3 and 4 in Phase 4 |
| Broken internal links | 0 on every build |
| Build time | Under 3 minutes in CI, including kit generation |
| Accessibility | WCAG 2.2 AA on all page templates |
| Accuracy | Every factual claim about a rule or date cites a primary source |

## Audience and use cases

The primary reader is a practitioner mid-task who needs a concrete answer or a usable document fast; the secondary reader is someone evaluating the owner's expertise. Every page should serve both: direct and usable first, polished second.

| Persona | Arrives with | Needs from the site | Most-used sections |
| --- | --- | --- | --- |
| Security lead building a program from nothing | A mandate and no documents | Where to start, what to write first, templates that are close to done | Build your program, templates |
| ISSO or system owner | A system heading toward an ATO | What to produce at each step, SSP wording, evidence lists | RMF steps, control guidance, plan templates |
| Control assessor | A control to test | Assessment objectives, what good evidence looks like, common findings | Control pages |
| New practitioner or student | A new job or certification goal | Plain explanations, glossary, the big picture | RMF overview, glossary |
| Engineer or cloud architect | A platform to harden | Which settings meet which controls, customer vs provider responsibility | Technology playbooks, standards |
| Software producer | Customers or contracts asking about secure development | SSDF practices, a secure development policy, attestation readiness | SSDF, SA family templates |
| Compliance lead in a regulated industry | A sector rule (HIPAA, NERC CIP, PCI DSS) | How 800-53 overlaps, what extra is required | Industry guides |
| Hiring manager or prospective client | The owner's name | Evidence of depth, clarity and currency | Home, About, articles |
| The owner, as consultant | A client engagement | The kit, tailored per client; checklists and talking points | Everything, plus the kit |

## Current state

The repo builds 340 pages with zero broken internal links; `npm run check:links` enforces that in CI. Build on it; do not restructure it without a stated reason.

| Area | Status | Location |
| --- | --- | --- |
| Stack | Astro 7.3 with Starlight 0.42, Node 22+, Pagefind search, sitemap | `package.json`, `astro.config.mjs` |
| Deploy | GitHub Actions to GitHub Pages at `https://kston83.github.io/nist-guide/` (subpath; see `BASE_PATH`) | `.github/workflows/deploy.yml` |
| Checks | Build and link check on every PR, required on `main`; actions pinned to SHAs; Dependabot | `.github/workflows/check.yml`, `scripts/check-links.mjs` |
| Theme | Public Sans body, Source Serif 4 headings, teal accent, light and dark | `src/styles/theme.css` |
| Home page | Hero, clickable seven-step strip, section cards, about blurb | `src/content/docs/index.mdx`, `src/components/StepStrip.astro` |
| RMF section | Overview, roles, 7 step pages, ATO checklist, program variants, 2 SVG diagrams | `src/content/docs/rmf/`, `public/diagrams/` |
| Control pages | 300 active controls in 20 families from NIST OSCAL release 5.2.0; baselines, enhancements, 800-53A objectives, parameters | `src/content/docs/controls/`, `scripts/import-oscal.mjs` |
| Control guidance | One worked example (AC-2) below the guidance marker | `controls/ac/ac-2.md` |
| Templates | None yet. Reference has page templates for authors only | `reference/page-templates.md` |
| Industries, technology | Overview pages with planned topics only | `industries/`, `technology/` |
| Reference | Library, glossary, page templates | `reference/` |
| Footer | Disclaimer and CC BY 4.0 notice | `src/components/Footer.astro` |
| Author identity | Name, bio and LinkedIn in place; LinkedIn in the header. Headshot still to come | `about.md`, `index.mdx`, `LICENSE`, `astro.config.mjs` |

## Information architecture

The site has five content layers linked through shared front matter, so a control page can list its policy clause, the templates that satisfy it, and every guide and playbook that mentions it, without hand-maintained links.

```text
src/content/docs/
  index.mdx                 Home
  about.md                  About the guide and author
  program/                  NEW: Build your program (staged path, starter kit, artifact checklist)
  rmf/                      Layer 1: the framework (exists)
    steps/                  One page per RMF step (exists)
  controls/                 Layer 2: SP 800-53 (generated + guidance)
    <family>/index.md       Family hub: overview, decisions, artifacts, controls
    <family>/<id>.md        One page per control
    baselines/              NEW: Low, Moderate, High, Privacy lists
    coverage.md             NEW: guidance and policy-clause progress by control
    crosswalks/             NEW: NIST-published mappings (CSF 2.0, 800-171, SSDF)
  templates/                Layer 3 (NEW, generated): one page per template, with preview and downloads
    policies/  plans/  procedures/  standards/  forms/  worksheets/
  ssdf/                     NEW: SSDF overview and one page per practice
  industries/               Layer 4: one page per industry
  technology/               Layer 5: one folder per platform area
    <area>/<platform>.md
  articles/                 NEW: dated articles (separate collection or blog plugin)
  reference/                Library, glossary, author page templates (exists)

templates/                  NEW: template SOURCES, outside src/content/docs (see Template system)
scripts/build-templates.mjs NEW: renders template pages and the downloadable kit
```

### Page types

| Page type | Purpose | Required sections |
| --- | --- | --- |
| Program stage | One stage of building a program | Outcome, artifacts to produce (linked), decisions to make, roles, done checklist |
| RMF step | Explain one step | Purpose, tasks table, how to apply, done checklist, common findings, key references |
| Family hub | Entry point to a control family | What the family covers, decisions it forces, artifacts (policy, plans, forms), control list |
| Control | Requirement plus everything needed to meet it | Generated NIST block; then Policy statement, How to apply it, parameters, procedure outline, evidence, inheritance, common findings, artifacts |
| Template | Preview and download one artifact | What it is, when to use it, controls satisfied, decisions to make first, preview, downloads (clean, annotated, per baseline), version |
| SSDF practice | Explain one SSDF practice | Practice and tasks (NIST text), how to apply it, 800-53 mapping (NIST-published), related templates, evidence |
| Industry guide | Apply RMF and 800-53 under sector rules | Rules that apply, how the steps change, controls with extra weight, findings, references |
| Technology playbook | Implement controls on a platform | Controls covered, recommended configuration, evidence to collect, findings, references |
| Article | Opinion, lessons learned, news analysis | Date, author, summary, body, sources |

### Front matter contract

These fields drive cross-linking and must be validated by the content schema in `src/content.config.ts`.

```yaml
# Control pages: the generator owns title, description, sidebar and control.
control: { id: AC-2, family: AC, baselines: [Low, Moderate, High] }
# NEW, hand-set; the generator must preserve it (requirement CTRL-01)
guidance: none | draft | reviewed

# Industry guides, technology playbooks, SSDF pages
industries: [healthcare]               # slug list
technologies: [entra-id]               # slug list
controls: [ac-2, ia-2, ia-5]           # NEW: controls this page gives guidance on
reviewed: 2026-09-27                   # NEW: date of last full accuracy review
```

Template source front matter is defined in [Template system](#template-system).

## Template system

Templates are the core addition in this version. They must be written once, reused everywhere, and tailored by baseline without hand-copying. The design below is the requirement; implementation details can change with a stated reason.

### Artifact types

| Type | Answers | Example | Source granularity |
| --- | --- | --- | --- |
| Policy | What the organization commits to, and who is accountable | Access Control Policy | One clause per control or enhancement, assembled per family |
| Standard | The specific values and settings that make policy measurable | Password and authenticator standard | One file per standard |
| Procedure | Step-by-step how, by role | Account provisioning and review procedure | One file per procedure |
| Plan | A required plan document | System Security Plan, Incident Response Plan | One file per plan, with sections |
| Form or register | A record the program keeps | POA&M, access review record, visitor log | `.csv` or `.md` table |
| Decision worksheet | Every choice a family forces, with typical values | Access Control decisions | Generated from parameters plus family questions |

Policy says what and who, standards say how much, procedures say how. NIST's own discussion of the -1 controls warns that "simply restating controls does not constitute an organizational policy or procedure" (SP 800-53 Rev. 5, AC-1 discussion), so clauses must commit to something specific.

### Sources and layout

```text
templates/
  variables.yml                    Organization-wide variables (org name, CISO title, review cycle...)
  policy/
    _common.md                     Sections every family policy shares (purpose, scope, roles,
                                   management commitment, coordination, compliance, review),
                                   which is what each -1 control requires
    <family>/_family.yml           Family title, accountable role, decision questions, artifact list
    <family>/<control>.md          Clause for one control or enhancement, e.g. ac/ac-2.md, ac/ac-2.3.md
  standards/<slug>.md
  procedures/<family>/<slug>.md
  plans/<slug>.md
  forms/<slug>.csv | .md
  reference.docx                   Word styles for generated .docx files
```

Template sources live outside `src/content/docs` so they are not pages themselves. They are loaded as an Astro content collection (glob loader) so pages can query them, and read by `scripts/build-templates.mjs` to produce downloads. Generated template pages are committed like control pages; binary downloads are built in CI and never committed.

### Clause and template front matter

```yaml
# templates/policy/ac/ac-2.md
control: ac-2                  # must exist in the OSCAL catalog; file must be policy/<family>/<control>.md
title: Account management
status: none | draft | reviewed
reviewed: 2026-09-27
stage: foundation | core | operate | mature   # when a new program should adopt it
variables: [param:ac-02_odp.01, org:access-approver]  # optional; derived if omitted
typical:                       # optional: typical value shown with each {{param:...}} field
  ac-02_odp.10: quarterly for privileged accounts
set:                           # optional: parameters the clause fixes in its text, with a note
  ac-02_odp.04: Set to this policy and the account management procedure.

# templates/plans/incident-response-plan.md (and other non-policy templates)
title: Incident Response Plan
type: plan | standard | procedure | form      # folder must match: plans/, standards/, procedures/, forms/
description: One sentence on what the artifact is for
controls: [ir-8, ir-4, ir-6]   # controls this artifact satisfies or supports
ssdf: [RV.1]                   # SSDF practices it supports, if any
status, reviewed, stage        # as above

# templates/policy/ac/_family.yml
title: Access Control
role: ciso                     # key in variables.yml: the role accountable for the family policy
questions:                     # decisions beyond the parameters, for the worksheet (TPL-08)
  - { question: ..., controls: [ac-2], typical: ..., decides: System owner }
```

`typical` and `set` together let the template lint (QA-05) check that every parameter is handled. Validation lives in `src/lib/template-schema.ts`; a bad source fails the build.

### Fill-in variables

| Syntax in source | Meaning | Renders on site | Renders in `.docx` / `.md` |
| --- | --- | --- | --- |
| `{{org:name}}` | Organization-wide value from `variables.yml` | Highlighted field with label | Highlighted `[Organization name]` |
| `{{param:ac-02_odp.01}}` | A NIST organization-defined parameter, looked up from the OSCAL catalog | Field with the parameter label and the typical value from guidance | `[Fill in: <label>. Typical: <value>]` |
| `{{fill:prompt text}}` | One-off fill-in with no NIST parameter | Field with the prompt | `[Fill in: prompt text]` |

An unknown variable or parameter fails the build. Parameter labels always come from OSCAL, never retyped. The fill-in text uses the parameter's 800-53A description, which is more specific than its label ("time period within which to disable accounts" rather than "time period").

Two additions apply only in `policy/_common.md`, the sections every family policy shares (approved Sep 28, 2026):

| Syntax | Meaning |
| --- | --- |
| `{{family:title}}`, `{{family:role}}` | The family's title, and its accountable role from `_family.yml` (rendered as that `org:` variable) |
| `{{param:xx-01_odp.05}}` | The `xx` becomes the family id, so one sentence fills AC-1, AU-1 and so on. PM-1 has a different parameter set and needs its own sections (Phase 3) |

### Outputs

Every template is produced in two editions and, where it applies, per baseline:

- **Annotated:** includes `:::guidance` blocks explaining each section, why it exists and what assessors look for. This is the edition the site shows.
- **Clean:** guidance stripped; ready to adopt.
- **Federal sections:** requirements that apply only to federal systems (for example FIPS 199 categorization, agency ATO, FedRAMP, OMB and CISA directives) live in `:::federal` blocks. Both editions keep them, rendered under a clearly labelled "Federal systems" heading, so a federal reader has everything and a non-federal reader can delete the marked sections without reading around them.
- **Baseline variants:** family and consolidated policies are assembled for Low, Moderate and High (plus the Privacy baseline for privacy clauses), including only clauses whose control is in that baseline. Baseline membership comes from the NIST OSCAL profiles, never hand-set.

Formats: `.docx` (primary; what most organizations adopt) and `.md` for every template; `.csv` for registers and worksheets. Downloads are offered per template, per family pack (`.zip`) and as the full kit (`.zip`).

Every generated document carries a header block: title, template version, NIST release basis (for example SP 800-53 release 5.2.0), a "tailor before adoption; not legal advice" notice, and a CC0 notice.

### License and packaging

Templates and the kit are dedicated to the public domain under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/), so organizations can adopt them without attribution; the rest of the site stays CC BY 4.0 (see `LICENSE`). The kit is free, with no paid edition planned. A CC0 dedication cannot be withdrawn from versions already released; if a paid edition is ever offered, it would apply to new material, and the license terms for it would be decided then.

## Functional requirements

Priority: P1 = needed for the phase it's scheduled in, P2 = next, P3 = later. Each requirement is done only when its acceptance criteria pass on a clean build.

### Controls pipeline (CTRL)

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| CTRL-01 | The generator preserves hand-set front matter keys it does not own (`guidance`, `reviewed`, any future keys) | P1 | Add `guidance: draft` to a control, run `npm run controls`; the key survives and the NIST block is unchanged |
| CTRL-02 | Generator is idempotent | P1 | Running `npm run controls` twice produces no `git diff` |
| CTRL-03 | Generator has tests for parameter rendering, withdrawn controls, marker preservation and front matter merge | P1 | `npm test` passes; tests use a small fixture catalog, not the network |
| CTRL-04 | Baseline list pages for Low, Moderate, High and Privacy | P2 | Each lists every control and enhancement in that baseline with links; counts match the NIST profile |
| CTRL-05 | Coverage page showing guidance and policy-clause status per control | P2 | Generated table of all controls with `guidance` and clause `status`; totals by family and by baseline |
| CTRL-06 | Status badges on each control page | P2 | Page shows "Guidance: none / draft / reviewed" and "Policy clause: none / draft / reviewed" near the title |
| CTRL-07 | Scheduled check for new NIST releases | P3 | A monthly GitHub Action runs `npm run controls -- --refresh` and opens a pull request only if files changed |
| CTRL-08 | Generator exposes parameter data (ID, label, selection options) for templates | P1 | A JSON file or module generated from the OSCAL cache that `build-templates` reads; covered by tests |

### Templates (TPL)

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| TPL-01 | Template sources as a content collection with a validated schema | P1 | Build fails on a clause whose `control` is not in the catalog, a bad `type`, `status` or `stage`, or a duplicate clause for one control |
| TPL-02 | Variable renderer for site, `.md` and `.docx` | P1 | All three syntaxes render as specified; an unknown variable or parameter fails the build; unit tests cover each |
| TPL-03 | Family policy assembly | P1 | `_common.md` + family metadata + clauses in catalog order, per baseline; a control added to a baseline appears in that variant with no manual step |
| TPL-04 | Annotated and clean editions, with marked federal sections | P1 | Clean edition contains no `:::guidance` content; annotated edition matches the site preview; `:::federal` blocks render under a "Federal systems" heading in both editions and on the site |
| TPL-05 | Downloads per template, per family pack and full kit | P1 | `.docx` and `.md` for every template, `.zip` packs; `.docx` opens in Word and LibreOffice without repair prompts and uses `reference.docx` styles. `.docx` is produced with pandoc (approved) at a pinned version, installed only in CI |
| TPL-06 | Control page integration | P1 | Control pages show a "Policy statement" section from the clause and an "Artifacts" list of templates whose `controls` include it, with no edit to the control file |
| TPL-07 | Template pages | P1 | One generated page per template: purpose, controls satisfied, decisions, annotated preview, downloads, version, NIST basis |
| TPL-08 | Decision worksheet per family | P1 | Generated from the parameters of controls in the chosen baseline plus `_family.yml` questions; columns: decision, control, typical value, who decides, your value. `.csv` and page |
| TPL-09 | Consolidated policy | P2 | A single Information Security and Privacy Policy assembled from all family clauses, per baseline, as an alternative to 20 documents |
| TPL-10 | Versioned kit releases | P2 | Tagging `vX.Y.Z` publishes the kit `.zip` files to a GitHub Release, with release notes and the NIST release basis |
| TPL-11 | Template changelog | P2 | Each template page shows what changed in each kit version, from git history or front matter |
| TPL-12 | In-browser fill-in | P3 | Owner decision. A reader enters `variables.yml` values in a form and downloads filled documents; nothing leaves the browser; no server |

### Build your program (PROG)

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| PROG-01 | Staged program path | P1 | `program/` pages for four stages (Foundation, Core, Operate, Mature), each listing the artifacts whose `stage` matches, generated from template front matter |
| PROG-02 | Starter kit | P1 | A named minimal set (see [Artifact catalog](#artifact-catalog)) downloadable as one `.zip` and described on one page |
| PROG-03 | Program artifact checklist | P2 | Generated table of every artifact: type, stage, controls, accountable role, status; downloadable as `.csv` for tracking |
| PROG-04 | Scaling guidance | P2 | One page on which artifacts can be merged or skipped for a small organization, and which a federal system cannot skip, with sources |
| PROG-05 | Alignment with RMF Prepare | P1 | Each stage page links the organization-level Prepare tasks it fulfills (SP 800-37 Rev. 2) |

### Secure software development (SSDF)

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| SSDF-01 | SSDF section with one page per practice in the four groups (PO, PS, PW, RV) | P1 | Practice and task text from SP 800-218 v1.1 (final), imported from a NIST machine-readable source, with source and version cited |
| SSDF-02 | SSDF to 800-53 mapping from NIST's own references | P1 | Shown on SSDF practice pages and on the mapped control pages; only mappings NIST publishes |
| SSDF-03 | Secure Software Development Policy and SDLC standard | P1 | Templates organized by SSDF practice, cross-referenced to SA controls, with `ssdf` front matter |
| SSDF-04 | Software producer artifacts | P2 | Vulnerability disclosure policy, SBOM guidance, and attestation readiness checklist; every program-status claim carries an "as of" month |
| SSDF-05 | Track SSDF v1.2 | P2 | SP 800-218 Rev. 1 (SSDF v1.2) is an initial public draft (Dec 2025). Note it on the SSDF overview; migrate when final, in a dedicated PR |

### Cross-linking (LINK)

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| LINK-01 | "Referenced by" section on control pages, built from the `controls` front matter of industry, technology, SSDF and template pages | P1 | Adding `controls: [ac-2]` to a playbook makes it appear on the AC-2 page after build, with no edit to `ac-2.md` |
| LINK-02 | Industry and technology pages list the controls they cover, with titles, from front matter | P2 | Rendered automatically from `controls` |
| LINK-03 | Build fails on broken internal links and anchors | P1 | Done: `npm run check:links` in `check.yml` |
| LINK-04 | Control IDs in prose can be written as a short component or remark plugin that renders a link | P3 | Writing the ID token renders a link to the control or enhancement anchor |

### Navigation and discovery (NAV)

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| NAV-01 | Search covers all pages, including control IDs like "AC-2(3)" and template titles | P1 | Searching an ID returns that control first; searching "incident response plan" returns the template first |
| NAV-02 | Industry, technology and template indexes list published pages with a one-line summary | P2 | Generated from front matter; no hand-maintained lists |
| NAV-03 | Tag filtering by industry, technology, template type and stage | P3 | A reader can list all `plan` templates, or all pages tagged `healthcare` |

### Content features (FEAT)

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| FEAT-01 | Articles section with dated posts and an RSS feed | P2 | Use the `starlight-blog` plugin if compatible with the installed Starlight; otherwise a separate content collection. Feed validates |
| FEAT-02 | Toolkit of downloadable templates | — | Superseded by the TPL requirements |
| FEAT-03 | Crosswalk pages from NIST-published mappings only | P3 | 800-53 to CSF 2.0, to SP 800-171 Rev. 3 and to SSDF, imported from NIST files, with source and version cited |
| FEAT-04 | Changelog page and versioned releases | P2 | Git tags `vX.Y.Z`; `CHANGELOG.md` rendered as a page; shares versions with the kit (TPL-10) |

### Presentation, SEO and sharing (PRES)

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| PRES-01 | Open Graph and Twitter card images for every page | P1 | Generated at build (for example with `astro-og-canvas`) or a branded default; link previews show title and site name |
| PRES-02 | Print styles for step, control and template pages | P2 | Printing gives clean output with no navigation chrome |
| PRES-03 | Accessibility at WCAG 2.2 AA | P1 | Automated axe check on home, a step page, a control page, a template page and an industry page shows no serious or critical issues |
| PRES-04 | Author identity: About page with bio, photo, LinkedIn link; social links in header | P1 | Placeholders replaced with owner-provided content |
| PRES-05 | Privacy-friendly analytics, if the owner chooses | P3 | No cookies; documented in About |
| PRES-06 | Generated `.docx` files look professional | P2 | Styles from `reference.docx`: site fonts, heading hierarchy, table style, header with title and version, page numbers |

### Quality and CI (QA)

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| QA-01 | Pull request workflow builds the site and runs checks without deploying | P1 | `check.yml` runs build, link check, lint, tests and kit build on every PR. Build and link check exist |
| QA-02 | Markdown lint with a committed config | P1 | `markdownlint-cli2` passes on content and template sources; rules suited to tables and long lines |
| QA-03 | Spell check with a domain dictionary | P2 | `cspell` passes; dictionary includes RMF, 800-53 and SSDF terms |
| QA-04 | Front matter validation | P1 | Build fails on unknown `controls` IDs or malformed `industries`/`technologies` slugs |
| QA-05 | Template lint | P1 | Fails when a clause has no `shall` statement, a template has no `controls`, a clean edition still contains guidance, or a variable is unused in `variables.yml` |

## Content requirements

Content quality is the product. Accuracy and usefulness win over volume: one correct, specific page or template beats five generic ones.

### Voice and structure

- Write for a practitioner in the middle of a task: lead with what to do, then why. Plain words, active voice, second person.
- Keep sentences under about 25 words and paragraphs to three sentences. Use tables for comparisons and checklists for completion criteria.
- Follow the page-type structure in Information architecture and the templates in `reference/page-templates.md`. AC-2 is the reference example for control guidance.
- Be specific: name the setting, the artifact, the role and the frequency. Mark typical values as typical and say who actually sets them.
- Use Starlight asides (`:::note`, `:::caution`) sparingly, for real warnings only.

### Writing templates

- **Adoptable as written.** A reader who fills every field and deletes nothing should have a document an assessor would accept as a first draft.
- **Policy clauses** use "shall", one requirement per sentence, name an accountable role (as a variable, never a person), and cite the control ID in a trailing reference, for example "(AC-2)".
- **Every parameter is handled.** Each organization-defined parameter of a clause's control is either a `{{param:...}}` field or explicitly set with a note that it is a typical value.
- **Any organization, federal-ready.** Write the body for any organization ("the organization", not "the agency"). Put federal-only requirements in `:::federal` blocks, and write them as carefully as the body: federal systems are the most common place these templates will be applied. Cite the federal source (OMB, CISA, FedRAMP, DoD) in each block.
- **Guidance is separable.** All teaching text lives in `:::guidance` blocks so the clean edition is produced mechanically.
- **Procedures** are numbered steps by role, with inputs, outputs and the record each step leaves behind (the evidence).
- **Plans** follow the structure NIST or the owning program publishes (for example SP 800-34 for contingency plans, SP 800-61 for incident response) and cite it.

### Sourcing and accuracy

- Every claim about a law, rule, deadline, version or program status cites a primary source: NIST, OMB, CISA, FedRAMP, DoD, the regulator, or the standards body.
- Program facts that change (FedRAMP, DoD CSRMC, CMMC, CISA secure software attestation) carry an "as of" month and are re-checked at each release.
- Never invent numbers, control mappings or requirements. If a fact cannot be verified, leave an HTML comment `<!-- TODO(verify): ... -->` and add it to the open questions list instead of guessing.
- Cross-framework mappings come only from published sources (NIST OLIR and CPRT, the SSDF's own references, the regulator's own crosswalks). Label any author-made mapping as the author's judgment.

### Copyright and sensitivity

| Source | Can be reproduced? | Rule |
| --- | --- | --- |
| NIST SPs (including SP 800-218), FIPS, OMB circulars and memos, U.S. regulations (for example 45 CFR Part 164) | Yes, public domain | Quote as needed; cite |
| U.S. government templates (for example FedRAMP, CISA) | Generally yes | Adapt with citation after confirming the page carries no restrictive terms |
| DISA STIGs | Generally yes (U.S. government work) | Quote settings sparingly; link the STIG and version |
| Commercial policy template libraries (for example SANS), PCI DSS, ISO/IEC 27001, HITRUST, CIS Benchmarks, NERC CIP standards text, vendor documentation | No | Never copy or closely paraphrase; write templates from the NIST requirement up. Link where useful |
| Client or employer material | No | Never include names, system details, findings, policies or artifacts from real engagements, even as a starting point |
| Controlled Unclassified Information or nonpublic government material | No | Never include, even if anonymized |

## Content backlog

Write guidance and templates for what assessors test hardest and what a new program needs first, then branch into industries and platforms. Every item ships as `draft` and moves to `reviewed` only after the owner signs off.

### Priority controls (Phase 2)

Thirty controls plus the existing AC-2 example, all in the Moderate baseline. Each gets guidance and, where its family is in the Phase 2 template set, a policy clause:

| Family | Controls | Why first |
| --- | --- | --- |
| Access control | AC-3, AC-6, AC-17 | Enforcement, least privilege and remote access dominate findings |
| Awareness and training | AT-2 | Evidence every system needs |
| Audit | AU-2, AU-6, AU-12 | What to log, who reviews it, how it is generated |
| Assessment and monitoring | CA-2, CA-5, CA-7 | Assessments, the POA&M and ConMon strategy |
| Configuration management | CM-2, CM-6, CM-7, CM-8 | Baselines, settings, least functionality, inventory |
| Contingency planning | CP-2, CP-9 | Plans and backups; frequently untested |
| Identification and authentication | IA-2, IA-5 | MFA and authenticator management |
| Incident response | IR-4, IR-8 | Handling and the plan |
| Planning | PL-2 | The SSP itself |
| Risk assessment | RA-3, RA-5 | Risk assessment and vulnerability scanning |
| Acquisition | SA-9 | External and cloud services |
| Communications protection | SC-7, SC-8, SC-13, SC-28 | Boundary protection and encryption in transit and at rest |
| Integrity | SI-2, SI-4 | Patching and monitoring |

The -1 controls (AC-1, AU-1 and so on) are met by the family policies themselves; each -1 control page links to its family policy template and explains how `_common.md` addresses every element the control lists.

### Artifact catalog

Every family gets a policy and a decision worksheet. The table lists the other artifacts, the controls that call for them, and the proposed stage. The list is a starting point; add to it through the PRD, not ad hoc.

| Family | Artifacts beyond the policy | Main controls | Stage |
| --- | --- | --- | --- |
| PM Program management | Information Security Program Plan; Risk Management Strategy; system inventory | PM-1, PM-9, PM-5 | Foundation |
| PL Planning | System Security Plan; Rules of Behavior | PL-2, PL-4 | Foundation |
| RA Risk assessment | Security categorization worksheet; risk assessment report; risk register; vulnerability management standard | RA-2, RA-3, RA-5 | Foundation / Core |
| AC Access control | Account management procedure; access request form; access review record; remote access standard | AC-2, AC-17 | Core |
| IA Identification and authentication | Identification and authentication standard | IA-2, IA-5 | Core |
| CM Configuration management | Configuration Management Plan; baseline configuration standard; change request form; component inventory | CM-9, CM-2, CM-6, CM-3, CM-8 | Core |
| AU Audit and accountability | Audit logging standard (event list); log review procedure | AU-2, AU-6 | Core |
| IR Incident response | Incident Response Plan; incident handling playbook; incident report form; tabletop exercise kit | IR-8, IR-4, IR-6, IR-3 | Core |
| CP Contingency planning | Contingency Plan; business impact analysis; test plan and after-action report | CP-2, CP-4 | Core |
| AT Awareness and training | Training plan; training record log | AT-2, AT-3, AT-4 | Core |
| PS Personnel security | Access agreement; onboarding, transfer and termination checklist | PS-6, PS-4, PS-5 | Core |
| SC System and communications protection | Encryption and key management standard; boundary protection standard | SC-8, SC-12, SC-13, SC-28, SC-7 | Core |
| SI System and information integrity | Patch and flaw remediation standard; system monitoring standard | SI-2, SI-4 | Operate |
| CA Assessment, authorization and monitoring | Assessment plan and report; POA&M; Continuous Monitoring Strategy; information exchange agreement | CA-2, CA-5, CA-7, CA-3 | Operate |
| SA System and services acquisition | Secure Software Development Policy and SDLC standard (SSDF); acquisition security requirements; external service review | SA-3, SA-8, SA-15, SA-4, SA-9 | Operate |
| SR Supply chain risk management | Supply Chain Risk Management Plan; supplier assessment questionnaire | SR-2, SR-6 | Mature |
| PT PII processing and transparency | Privacy notice; privacy impact assessment | PT-5, RA-8 | Core (if PII) |
| MA Maintenance | Maintenance log | MA-2 | Operate |
| MP Media protection | Media sanitization record | MP-6 | Operate |
| PE Physical and environmental protection | Physical access list; visitor log | PE-2, PE-8 | Operate |

**Starter kit (PROG-02):** Information Security Program Plan, Risk Management Strategy, consolidated policy at the chosen baseline, System Security Plan, Rules of Behavior, Incident Response Plan, POA&M, system inventory, and the decision worksheets. Until the consolidated policy exists (TPL-09), the starter kit carries the Phase 2 family policies.

### SSDF content (Phase 3)

- Overview: what the SSDF is, who it applies to, how it relates to SA and SR controls, current version status with an "as of" month.
- One page per practice, grouped: Prepare the Organization (PO), Protect the Software (PS), Produce Well-Secured Software (PW), Respond to Vulnerabilities (RV).
- Templates: Secure Software Development Policy, SDLC standard, vulnerability disclosure policy, SBOM guidance, attestation readiness checklist.
- Mapping: NIST's 800-53 references for each task, shown both ways.

### Industry guides (Phase 4, proposed)

| Guide | Main rules alongside 800-53 |
| --- | --- |
| Defense and defense industrial base | DoDI 8510.01, CNSSI 1253, CSRMC status, CMMC and SP 800-171 Rev. 3 |
| Healthcare | HIPAA Security Rule (45 CFR Part 164), HHS 405(d) practices |
| Financial services | GLBA Safeguards Rule, FFIEC guidance, PCI DSS (paraphrased only) |

### Technology playbooks (Phase 4, proposed)

| Playbook | Folder | First controls to cover |
| --- | --- | --- |
| AWS | `technology/cloud/aws.md` | AC-2, AU-2, AU-12, CM-6, SC-7, SC-13, SC-28 |
| Microsoft Azure | `technology/cloud/azure.md` | Same set, for comparison |
| Microsoft 365 and Entra ID | `technology/identity/entra-id.md` | AC-2, AC-17, IA-2, IA-5, AU-6 |
| Kubernetes | `technology/platforms/kubernetes.md` | CM-2, CM-7, SC-7, SI-2, RA-5 |

## Technical requirements and constraints

The site stays fully static and free to host; anything that needs a server, a database or a paid account is out of scope unless the owner approves it.

| Area | Requirement |
| --- | --- |
| Framework | Astro Starlight as installed (Astro 7.3, Starlight 0.42). Upgrade only in a dedicated pull request with a clean build |
| Runtime | Node 22 or later locally; CI pins Node in `check.yml` and uses the `withastro/action` default for deploy |
| Hosting | GitHub Pages via `deploy.yml` at `https://kston83.github.io/nist-guide/`; custom domain later via `public/CNAME`, `SITE_URL` and `BASE_PATH = '/'` |
| Links | Root-relative links in Markdown are rebased automatically; links in components and MDX props use `withBase()` from `src/lib/url.ts` |
| Limits | Published site under 1 GB (GitHub Pages limit), including downloads; current build is about 41 MB. Deploy job under 10 minutes |
| Performance | Build under 3 minutes in CI; home and control pages score 90+ on Lighthouse performance and accessibility |
| Dependencies | Prefer Starlight built-ins. Each new dependency needs a one-line reason in the pull request. No client-side frameworks for static content. Build-time tools (pandoc, approved for `.docx`) are pinned and installed only in CI; local kit builds need pandoc on the path |
| External services | None required at build or run time except fetching NIST data (OSCAL, SSDF) in import scripts |
| Data sources | NIST [oscal-content](https://github.com/usnistgov/oscal-content) SP 800-53 Rev. 5 catalog and baseline profiles, cached in `.cache/oscal`; SSDF from a NIST machine-readable source, cached in `.cache/ssdf` |
| Generated files | Pages committed to git so edit links and diffs work; never hand-edited between `nist:start` and `nist:end`. Binary downloads built in CI, never committed |
| Browsers | Last two versions of Chrome, Edge, Firefox and Safari; mobile layout from 360 px wide |
| Documents | `.docx` opens cleanly in current Microsoft Word and LibreOffice |
| Styling | Keep the existing tokens in `theme.css` (Public Sans, Source Serif 4, one teal accent). No new colours without a reason |
| Actions security | Actions pinned to full commit SHAs; `permissions: {}` at top level with per-job least privilege; only allow-listed actions |

## Delivery phases

Work in five phases; each ends with an owner review before the next starts. Phases are ordered by dependency, not by date. Templates now come before industry and technology content because they depend only on the controls layer and deliver the most value to a program builder.

| Phase | Scope | Requirements | Exit criteria |
| --- | --- | --- | --- |
| 1 Launch foundation | Make the existing site production-ready and public | CTRL-01, CTRL-02, CTRL-03, LINK-01, LINK-03 (done), NAV-01, PRES-01, PRES-03, PRES-04, QA-01, QA-02, QA-04 | Site live; PR checks green; placeholders replaced; owner approves home and About |
| 2 Template system and first kit | Template pipeline; guidance for the 30 priority controls; policies, clauses and worksheets for AC, AU, CM, IA and IR; SSP, IR plan and POA&M | CTRL-04, CTRL-05, CTRL-06, CTRL-08, TPL-01 to TPL-08, TPL-10, PROG-01, PROG-02, PROG-05, FEAT-04, QA-03, QA-05, PRES-06 | 31 controls at `guidance: draft` or better; 5 family policies downloadable per baseline; kit v1.0.0 released |
| 3 Full program kit and SSDF | Remaining 15 family policies, consolidated policy, every catalog artifact, program path complete, SSDF section | TPL-09, TPL-11, PROG-03, PROG-04, SSDF-01 to SSDF-05, FEAT-01, PRES-02, NAV-02 | Every Low and Moderate control has a clause at `draft` or better; every catalog artifact published; SSDF pages and mapping live; kit v2.0.0 |
| 4 Industries and technology | 3 industry guides, 4 playbooks, articles | LINK-02 | All seven pages published with `controls` front matter; control pages show them under "Referenced by"; first article published |
| 5 Depth | Guidance for every Moderate control, High clauses, crosswalks, automation | FEAT-03, NAV-03, CTRL-07, LINK-04, TPL-12, PRES-05 | Coverage page shows every Moderate control at `draft` or better; High variants complete; monthly NIST check running |

## Non-goals

- No user accounts, comments, forums or anything needing a server.
- No GRC tooling: the site does not store organization data, track POA&Ms or act as a system of record. Templates are documents the reader downloads and completes in their own tools. An optional in-browser fill-in (TPL-12) keeps all data in the browser.
- No reproduction or close paraphrase of copyrighted standards or commercial template libraries; write from the NIST requirement up.
- No official or legal advice; the disclaimer stays on every page and in every generated document.
- No private or client-specific content in this repository.

## Instructions for Claude Code

Save this document as `docs/PRD.md` in the repo and keep `CLAUDE.md` at the repo root in step with this section, so every session starts with it.

### Getting oriented

1. Read `README.md`, this PRD and `controls/ac/ac-2.md` (the guidance example) before changing anything. Once they exist, also read `templates/policy/_common.md` and `templates/policy/ac/ac-2.md` (the clause example).
2. Run `npm install`, `npm run controls` and `npm run build`. Confirm the build and `npm run check:links` are clean before starting work.
3. Work in phase order. Within a phase, do P1 requirements first.

### How to work

- One requirement or one content item per branch and commit, with the ID in the message, for example `CTRL-01: preserve hand-set front matter` or `TPL-03: assemble family policies`.
- `main` is protected: open a pull request; the Check workflow must pass before merge.
- Before every commit: `npm test`, `npm run lint` and `npm run build` pass, the link check passes, and `npm run controls` produces no diff.
- Never edit between `<!-- nist:start -->` and `<!-- nist:end -->`. Change `scripts/import-oscal.mjs` instead, then regenerate. Never hand-edit generated template pages; change the source in `templates/`.
- Keep a `PROGRESS.md` at the repo root: requirement ID, status, date, notes. Update it at the end of each task.
- Prefer small, reviewable changes over large rewrites. Do not rename folders or slugs; existing links depend on them.

### Writing content and templates

- Follow Content requirements exactly, including Writing templates. Use AC-2 as the model for control guidance.
- Verify every factual claim about rules, versions, dates and program status against a primary source before writing it, and cite it on the page. Use web search when available.
- If a fact cannot be verified, write `<!-- TODO(verify): what and why -->` and add it to Open questions in `PROGRESS.md`. Do not guess.
- Set `guidance: draft` or `status: draft` on anything you write. Only the owner sets `reviewed`.
- Never base a template on a commercial template library or on any real organization's documents.

### When to stop and ask the owner

- At the end of each phase, before starting the next.
- For anything personal: name, bio, photo, LinkedIn, custom domain, analytics choice.
- Before adding a dependency or build tool the PRD does not name, changing the visual design, or restructuring navigation.
- Before changing the template source format, variable syntax or license, since published kits depend on them.
- When sources conflict on a rule or date.

## Open questions for the owner

None of these block Phase 1.

- [ ] Headshot for the About page (optional; name, bio and LinkedIn are in place)
- [ ] Custom domain now or later (site is at `kston83.github.io/nist-guide` today)
- [ ] Which three industries to cover first (proposed: defense, healthcare, financial services)
- [ ] Which four platforms to cover first (proposed: AWS, Azure, Microsoft 365 with Entra ID, Kubernetes)
- [ ] Privacy-friendly analytics: yes or no

### Decided

| Decision | Answer | Date |
| --- | --- | --- |
| Template license | CC0 1.0 for templates and the kit; site content stays CC BY 4.0 | Sep 27, 2026 |
| Packaging | Free kit only; revisit if it ever becomes something to sell | Sep 27, 2026 |
| Template voice | Any organization, with federal-only requirements in marked `:::federal` sections | Sep 27, 2026 |
| `.docx` tool | pandoc, pinned, in CI | Sep 27, 2026 |
| Site title | Keep "RMF Field Guide" for now; may change later | Sep 28, 2026 |
| Employer publishing policy | No issues | Sep 28, 2026 |
| Employer in the bio | Not named; keep the employer out of the site | Sep 28, 2026 |
| Phase 1 | Approved; remaining open questions deferred to the phase that needs them | Sep 28, 2026 |
| YAML parser | `yaml` package, for `build-templates.mjs` | Sep 28, 2026 |
| Zip packs | `fflate` package, so zips build the same on Windows and in CI | Sep 28, 2026 |
| `_common.md` variables | `{{family:title}}`, `{{family:role}}` and the `xx-` parameter prefix (see Fill-in variables) | Sep 28, 2026 |

## Revision history

| Version | Date | Change |
| --- | --- | --- |
| 1 | Sep 27, 2026 | First version |
| 2 | Sep 27, 2026 | Vision widened to learn, build and prove a program. Added Template system, artifact catalog, starter kit, Build your program (PROG), SSDF, template lint (QA-05) and `.docx` styling (PRES-06). FEAT-02 superseded by TPL. Phases reordered: templates before industries and technology; five phases. Current state updated for the subpath deploy and CI |
| 2.1 | Sep 27, 2026 | Owner decisions recorded: CC0 templates, free kit, any-organization voice with `:::federal` sections, pandoc approved |

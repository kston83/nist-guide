# RMF Field Guide: Product Requirements

Version 3.1 · Sep 28, 2026 · @Kris · [Revision history](#revision-history)

## Summary

The RMF Field Guide is a free, public, static website that helps an organization **learn, build and prove** a security program based on the NIST Risk Management Framework (RMF) and SP 800-53. It explains every step and control, and it ships the artifacts to act on them: policy templates for every control family, procedures, plans, forms and worksheets, ready to fill in or modify. A reader with no program can start from zero and follow a staged path; a reader with a program can take just the pieces they need.

The same templates serve three uses: as teaching material inside the guide, as a downloadable, versioned kit other organizations can adopt, and as the owner's consulting playbook.

Two further strands build on the controls, each kept as its own topic:

- **Methods.** For many controls NIST also publishes *how* to meet them: an established process or practice set. The Secure Software Development Framework (SSDF, SP 800-218) is the first example; its task table cites the SP 800-53 controls each task supports, mainly in the SA and SR families. Others include SP 800-61 for incident handling and SP 800-34 for contingency planning. Each control page names the NIST methods that implement it, so a reader meeting SA-15 is pointed to the SSDF.
- **AI security guide.** A guide within the guide for adopting and securing AI in an organization and in a system authorized under the RMF and SP 800-53, built on two sources only: NIST guidance (the AI Risk Management Framework (AI RMF) and its profiles, NIST's AI security publications, and NIST's SP 800-53 control overlays for AI systems once NIST publishes them) and OWASP's AI security guidance (the OWASP Top 10 lists for LLM and agentic applications and the OWASP AI Exchange) for application-level threats and mitigations. It links into the RMF steps, control pages and templates, but it is a separate section with its own entry point.

This document tells a Claude Code session what to build on top of the existing repo, in what order, and how to know each piece is done.

### Vision

Every control on the site answers six questions, in order, and every answer after the first is something the reader can copy or follow:

```text
Requirement   What NIST requires              Generated from OSCAL (exists)
Policy        What we commit to               Policy clause template, per control
Method        The established way to do it    NIST implementation guidance (SSDF, SP 800-61 ...) (Phase 4)
Procedure     How we do it here               Procedure or standard template
Implementation Where it's configured          Technology playbook (Phase 6)
Evidence      How we prove it                 Evidence list and forms
```

Families roll the per-control pieces up into artifacts an organization actually adopts: a policy per family (or one consolidated policy), the plans the controls require (SSP, incident response plan, contingency plan and so on), and a decision worksheet listing every choice the family forces the organization to make.

#### Goals

1. Be the most practical free reference for applying the RMF and SP 800-53: every page answers "what do I actually do, and what will the assessor ask for?"
2. Let an organization build a program from scratch: a staged path plus a plug-and-play artifact for every requirement that needs one.
3. Keep the guide and the kit as one source: a policy clause is written once and appears on its control page, in its family policy, in the consolidated policy and in the downloadable kit.
4. Cover five layers: the framework, every control, program templates, industry-specific application, and technology-specific implementation. Point every control to the NIST methods that implement it (the SSDF first), and give AI its own guide that uses the same layers.
5. Present the owner as a credible, organized leader in the field: professional look, accurate content, cited sources, visible upkeep.
6. Stay cheap and low-maintenance: static site, GitHub Pages, no paid services, one command to refresh NIST content, one command to rebuild the kit.

#### Success measures

| Measure | Target |
| --- | --- |
| Controls with written guidance | 30 highest-value controls in Phase 2; all Moderate-baseline controls in Phase 7 |
| Controls with a policy clause | Controls in 5 families in Phase 2; every Low and Moderate control and enhancement in Phase 3; High in Phase 7 |
| Family policy templates | 5 in Phase 2; all 20 plus a consolidated policy in Phase 3 |
| Plans, procedures and forms | Every artifact in the [artifact catalog](#artifact-catalog) by end of Phase 3 (the SSDF-based SA artifacts in Phase 4) |
| Program kit | Versioned release with every template in `.docx` and `.md`, per baseline, from Phase 2 |
| AI security guide | Overview, AI RMF pages, securing AI through the RMF steps, OWASP LLM and agentic Top 10 pages, and AI templates by end of Phase 5; new OWASP editions reflected within one release; NIST's AI control overlays reflected within one release of each final publication |
| Methods | Every family hub names NIST's implementation guidance; every SSDF practice has a page and its NIST-published 800-53 references, shown on the control pages, by end of Phase 4 |
| Industry guides and technology playbooks | 3 and 4 in Phase 6 |
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
| Software producer | Customers or contracts asking about secure development | SSDF practices, a secure development policy, attestation readiness | Methods (SSDF), SA family templates |
| AI adopter or AI system owner | An AI tool, model or agent heading into the organization or into an authorized system | What NIST expects, how the RMF steps change for AI, an AI use policy and inventory, what to tell the authorizing official | AI security guide, RMF steps, templates |
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
  methods/                  NEW (Phase 4): NIST implementation guidance, by family
    index.md                What a method is; each family's NIST methods, with versions
    ssdf/                   SSDF overview and one page per practice (the first method)
  ai/                       NEW (Phase 5): AI security guide, its own sidebar group
    index.md                Start here: what applies, NIST AI publications and their status
    ai-rmf/                 AI RMF overview and one page per function (GOVERN, MAP, MEASURE, MANAGE)
    securing-ai-systems.md  An AI system through the seven RMF steps
    owasp/                  OWASP Top 10 for LLM Applications and for Agentic Applications
    ...                     Topic pages (generative AI profile, adversarial ML, AI in the SDLC, federal)
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
| Control | Requirement plus everything needed to meet it | Generated NIST block; then Policy statement, Methods (NIST implementation guidance that cites the control), How to apply it, parameters, procedure outline, evidence, inheritance, common findings, artifacts |
| Template | Preview and download one artifact | What it is, when to use it, controls satisfied, decisions to make first, preview, downloads (clean, annotated, per baseline), version |
| Method | Explain one NIST method: a process or practice set that implements controls | What it is and who it is for, version and status ("as of" month), the controls it implements (only as NIST states), how to adopt it, related templates |
| SSDF practice | Explain one SSDF practice | Practice and tasks (NIST text), how to apply it, 800-53 references (NIST-published), related templates, evidence |
| AI guide page | One topic in the AI security guide | What NIST and OWASP say (cited, with version or edition and status), what to do, how it connects to the RMF steps and controls (NIST-stated links only; see AI-07), templates, federal notes in `:::federal`-style asides |
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

# Industry guides, technology playbooks, method, SSDF and AI guide pages
industries: [healthcare]               # slug list
technologies: [entra-id]               # slug list
controls: [ac-2, ia-2, ia-5]           # NEW: controls this page gives guidance on
reviewed: 2026-09-27                   # NEW: date of last full accuracy review

# Method and SSDF pages
implements: [sa-15, sa-11]             # NEW: controls the method implements, only as NIST cites them;
                                       # feeds the Methods section on control pages (METH-01)
source: { id: 'SP 800-218', version: '1.1', status: final, checked: 2026-09 }

# AI guide pages and AI templates
airmf: [GOVERN 1.6, MAP 1.1]           # NEW: AI RMF subcategories the page or template supports;
                                       # validated against the imported AI RMF core (AI-02)
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
    <family>/_common.md            Optional: the family's own shared sections, where its -1 control
                                   differs from the rest (PM-1)
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
airmf: [GOVERN 1.6]            # AI RMF subcategories it supports, if any (AI templates)
status, reviewed, stage        # as above

# templates/policy/ac/_family.yml
title: Access Control
role: ciso                     # key in variables.yml: the role accountable for the family policy
baseline: none                 # optional: SP 800-53B allocates no control of the family to a
                               # baseline (PM), so the policy has one organization-wide edition
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
| `{{param:xx-01_odp.05}}` | The `xx` becomes the family id, so one sentence fills AC-1, AU-1 and so on. PM-1 has a different parameter set, so PM has its own `policy/pm/_common.md`, which may give `typical` values for PM-1's parameters |
| `(XX-1c.1)` in text | Control references to the -1 control become the family's label: `(AC-1c.1)` |

Clauses are inserted under the `## Policy statements` heading of `_common.md`, each under a `### <title> (<control label>)` heading.

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

### Methods (METH)

A method is an established process or practice set that NIST publishes for meeting controls. The control says what; the method says how it is normally done. Methods are linked to controls only where NIST itself makes the link (for example the SSDF task table's SP 800-53 references). Phase 4, after the program kit: each family's methods are added to its finished policy and artifacts.

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| METH-01 | "Methods" section on control pages | P1 | Built from the `implements` front matter of method and SSDF pages; lists each method with its version, links to the page, and names the task or section that cites the control. Hidden when there is none. No edit to control files |
| METH-02 | Methods index by family | P1 | `methods/index.md`: for each family, NIST's implementation publications (number, title, version, status, "as of" month), each checked at csrc.nist.gov before writing; family hubs link their row |
| METH-03 | One method page per family's main NIST guide | P2 | Page-type sections; `implements` only from controls the publication itself cites, otherwise the page names the family without control-level links. Candidates to verify before writing: SP 800-61 (incident response), SP 800-34 (contingency planning), SP 800-40 (patch management), SP 800-92 (log management), SP 800-128 (configuration management), SP 800-137 (continuous monitoring), SP 800-161 (supply chain), SP 800-88 (media sanitization), SP 800-50 (awareness and training), SP 800-30 (risk assessment), SP 800-63 (digital identity), SP 800-57 (key management) |

### Secure software development (SSDF)

The SSDF is the first method: NIST's practice set for SA and SR controls on secure development and acquisition. Pages live under `methods/ssdf/`.

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| SSDF-01 | SSDF section with one page per practice in the four groups (PO, PS, PW, RV) | P1 | Practice and task text from SP 800-218 v1.1 (final), imported from NIST's machine-readable SSDF table (the Excel supplement published with SP 800-218, or CPRT if the owner prefers), with source and version cited |
| SSDF-02 | SSDF to 800-53 references from NIST's own table | P1 | Shown on SSDF practice pages and in the Methods section (METH-01) of every cited control, for example SA-15 lists the tasks that cite it; only references NIST publishes |
| SSDF-03 | Secure Software Development Policy and SDLC standard | P1 | Templates organized by SSDF practice, cross-referenced to SA controls, with `ssdf` front matter |
| SSDF-04 | Software producer artifacts | P2 | Vulnerability disclosure policy, SBOM guidance, and attestation readiness checklist; every program-status claim (including current federal secure software attestation policy) is checked at the source and carries an "as of" month |
| SSDF-05 | Track SSDF v1.2 | P2 | SP 800-218 Rev. 1 (SSDF v1.2) was an initial public draft (Dec 2025); NIST's SSDF project page still listed v1.1 as current when checked on Sep 28, 2026. Note it on the SSDF overview; migrate when final, in a dedicated PR |

### AI security guide (AI)

A guide within the guide: how an organization adopts and secures AI, and how an AI system is taken through the RMF under SP 800-53. Built only on NIST publications and OWASP's AI security guidance (and, for federal notes, OMB and CISA). NIST sets the framework and, once published, the controls; OWASP supplies the practitioner view of how AI applications and agents are attacked and defended. A separate section with its own sidebar group and entry page, linked from the RMF steps, the home page and relevant control pages. Phase 5.

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| AI-01 | AI guide entry page | P1 | `ai/index.md`: who it is for, how the AI RMF relates to the RMF (SP 800-37) and SP 800-53, what NIST and OWASP each contribute, the path through the guide, and a status table of every NIST and OWASP AI publication the guide uses (number or name, title, version or edition, status, date, license for OWASP, "as of" month), rechecked at every kit release |
| AI-02 | AI RMF core pages | P1 | Overview plus one page per function (GOVERN, MAP, MEASURE, MANAGE) with its categories and subcategories from AI RMF 1.0 (NIST AI 100-1), imported from a NIST machine-readable source chosen with the owner, cached like the OSCAL catalog, with source and version cited; each subcategory links its NIST AI RMF Playbook entry. `airmf` front matter is validated against the imported IDs |
| AI-03 | The AI RMF alongside the RMF | P1 | One page on how AI RMF functions sit with the RMF steps and the organization-level Prepare tasks. Any alignment NIST does not publish is labelled as the author's mapping, as the program pages do |
| AI-04 | Securing an AI system through the RMF steps | P1 | `ai/securing-ai-systems.md` walks a system with AI components (a hosted model, an AI service, an agent) through the seven steps: inventory and categorization of AI components and their data, the boundary (models, endpoints, data pipelines, tools an agent can call, third-party AI services), what the SSP records, supply chain and external services, assessment and monitoring. Draws only on published NIST text (AI 600-1, AI 100-2 E2025, SP 800-218A, and IR 8596 once final) and OWASP guidance (AI-10); names 800-53 controls only where NIST does (see AI-07) |
| AI-05 | Topic pages | P2 | Generative AI Profile (NIST AI 600-1): its risks and suggested actions. Adversarial machine learning (NIST AI 100-2 E2025): attack classes and mitigations as NIST describes them. Secure AI development (SP 800-218A), linked to the SSDF method pages. Cyber AI Profile (NIST IR 8596) once a public draft or final is out |
| AI-06 | AI templates | P2 | AI acceptable use standard, AI system and use-case inventory (register), AI system description appendix for the SSP, AI risk and impact assessment form, third-party AI service review checklist. Written from the AI RMF and the OWASP AI Exchange (CC0), with OWASP Top 10 entries referenced by ID. Each has `airmf` front matter, and `controls` only where the link is direct (for example the SSP appendix supports PL-2). In the kit from the Phase 5 release |
| AI-07 | NIST AI control overlays (COSAIS) | P1 | Until NIST publishes an overlay, the guide makes **no AI-specific control selections, tailoring or control mappings of its own** (owner decision). OWASP's own published crosswalks may be cited on AI guide pages as OWASP's mapping, never as NIST's, and do not add anything to control pages (see Open questions). Track each COSAIS use case on the entry page's status table. When an overlay is final, publish its use-case page and an "AI overlay" note on each control it changes, one PR per overlay, imported from NIST's machine-readable form if one is published. Public drafts are noted with an "as of" month but not built into control pages |
| AI-08 | Federal AI requirements | P2 | OMB AI policy (M-25-21, April 3, 2025, which replaced M-24-10, unless since replaced: confirm first) and related federal requirements in federal asides and `:::federal` template blocks, each with an "as of" month, rechecked at every kit release |
| AI-09 | Track AI RMF changes | P2 | AI RMF 1.0 is being revised under the White House AI Action Plan (NIST, as of Sep 2026). Note new versions and profiles on the entry page; migrate AI-02 pages in a dedicated PR when a new version is final |
| AI-10 | OWASP AI risk lists | P1 | One page per list: OWASP Top 10 for LLM Applications (current edition) and OWASP Top 10 for Agentic Applications, each entry with its OWASP ID and title, what it is and how it is mitigated, in the author's own words with a link to the OWASP entry (CC BY-SA 4.0: no copied text; see Copyright). The OWASP Machine Learning Security Top Ten is linked only, since OWASP still marks it a draft (v0.3). AI-04 and the AI templates link the relevant entries |
| AI-11 | OWASP AI Exchange as the threat and control reference | P2 | The AI Exchange (CC0 1.0, an OWASP Flagship project) is the source for AI threat and mitigation detail beyond the Top 10 lists; its text may be adapted into pages and templates, credited as a courtesy. Mitigations are described as AI-application practices, not as SP 800-53 control selections |
| AI-12 | Track OWASP changes | P2 | OWASP lists get new editions yearly or faster (the LLM list went from 2025 to 2026 in 2026). Note new editions on the entry page with an "as of" month; update AI-10 pages in a dedicated PR per edition, keeping old IDs findable |

### Cross-linking (LINK)

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| LINK-01 | "Referenced by" section on control pages, built from the `controls` front matter of industry, technology, AI guide and template pages (method and SSDF pages feed the Methods section instead, METH-01) | P1 | Adding `controls: [ac-2]` to a playbook makes it appear on the AC-2 page after build, with no edit to `ac-2.md` |
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
| FEAT-04 | Changelog page and versioned releases | P2 | A changelog page generated at build time from the squash-merge history of `main`, one entry per merged pull request, grouped by release tag `vX.Y.Z` (by month before the first tag), so every merge updates it on the next deploy. `node scripts/build-changelog.mjs --notes vX.Y.Z` prints a release's notes for its GitHub Release; shares versions with the kit (TPL-10). Replaces a hand-kept `CHANGELOG.md` (owner decision, Sep 28, 2026) |

### Presentation, SEO and sharing (PRES)

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| PRES-01 | Open Graph and Twitter card images for every page | P1 | Generated at build (for example with `astro-og-canvas`) or a branded default; link previews show title and site name |
| PRES-02 | Print styles for step, control and template pages | P2 | Printing gives clean output with no navigation chrome |
| PRES-03 | Accessibility at WCAG 2.2 AA | P1 | Automated axe check on home, a step page, a control page, a template page and an industry page shows no serious or critical issues |
| PRES-04 | Author identity: About page with bio, photo, LinkedIn link; social links in header | P1 | Placeholders replaced with owner-provided content |
| PRES-05 | Privacy-friendly analytics, if the owner chooses | P3 | No cookies; documented in About |
| PRES-06 | Generated `.docx` files look professional | P2 | Styles from `reference.docx`: fonts close to the site's that Office installs (Calibri body, Georgia headings; owner decision, Sep 28, 2026, so every reader sees the same document), heading hierarchy, table style, header with title and version, page numbers. The site's teal accent on headings and table header rows; no guide name or logo |

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
- Program facts that change (FedRAMP, DoD CSRMC, CMMC, CISA secure software attestation, NIST AI publications and their draft status, OMB AI policy) carry an "as of" month and are re-checked at each release.
- AI guidance states only what NIST or OWASP publishes (and OMB and CISA, for federal notes), attributing each point to its source. No AI-specific control selections, tailoring or control mappings of the author's own until NIST's overlays are final (AI-07).
- Never invent numbers, control mappings or requirements. If a fact cannot be verified, leave an HTML comment `<!-- TODO(verify): ... -->` and add it to the open questions list instead of guessing.
- Cross-framework mappings come only from published sources (NIST OLIR and CPRT, the SSDF's own references, the regulator's own crosswalks). Label any author-made mapping as the author's judgment.

### Copyright and sensitivity

| Source | Can be reproduced? | Rule |
| --- | --- | --- |
| NIST SPs (including SP 800-218), FIPS, OMB circulars and memos, U.S. regulations (for example 45 CFR Part 164) | Yes, public domain | Quote as needed; cite |
| U.S. government templates (for example FedRAMP, CISA) | Generally yes | Adapt with citation after confirming the page carries no restrictive terms |
| DISA STIGs | Generally yes (U.S. government work) | Quote settings sparingly; link the STIG and version |
| OWASP AI Exchange | Yes, CC0 1.0 (checked Sep 28, 2026) | May be adapted into pages and templates; credit and link as a courtesy |
| OWASP GenAI Security Project (Top 10 for LLM Applications, Top 10 for Agentic Applications, crosswalk) and the OWASP ML Security Top Ten | Not into this site: CC BY-SA 4.0, whose share-alike terms conflict with the site's CC BY 4.0 and the templates' CC0 | Cite IDs and titles, explain in your own words, link each entry. Never copy descriptions, examples or mitigation text into pages or templates |
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

### AI security guide (Phase 5)

NIST sources, as checked at csrc.nist.gov and nist.gov on Sep 28, 2026. Recheck each before writing; this table seeds the AI-01 status table.

| Publication | Status (Sep 2026) | Used for |
| --- | --- | --- |
| AI RMF 1.0, NIST AI 100-1 (Jan 26, 2023), with the AI RMF Playbook | Current; NIST states it is being revised under the White House AI Action Plan | AI-02, AI-03 |
| Generative AI Profile, NIST AI 600-1 (Jul 26, 2024) | Final | AI-04, AI-05 |
| Adversarial Machine Learning: A Taxonomy and Terminology of Attacks and Mitigations, NIST AI 100-2 E2025 (Mar 24, 2025) | Final | AI-04, AI-05 |
| Secure Software Development Practices for Generative AI and Dual-Use Foundation Models, SP 800-218A (Jul 26, 2024) | Final; an SSDF community profile | AI-05, link to the SSDF method |
| Cybersecurity Framework Profile for Artificial Intelligence (Cyber AI Profile), NIST IR 8596 | Preliminary draft (Dec 16, 2025) | AI-05 once a public draft or final is out |
| SP 800-53 Control Overlays for Securing AI Systems (COSAIS) | Concept paper (Aug 14, 2025); predictive AI annotated outline (Jan 8, 2026). No overlay published. Five planned use cases: generative AI assistant/LLM, predictive AI, single agent, multi-agent, AI developers | AI-07, when final |
| AI RMF Profile on Trustworthy AI in Critical Infrastructure | Concept note (Apr 7, 2026) | AI-09 |
| OMB M-25-21, Accelerating Federal Use of AI through Innovation, Governance, and Public Trust (Apr 3, 2025) | Replaced M-24-10; agency compliance plans cite it (Sep 2025). Not yet confirmed at an OMB page: confirm current status before writing AI-08 | AI-08 |

OWASP sources, as checked at `genai.owasp.org`, `owaspai.org` and `owasp.org` on Sep 28, 2026:

| Publication | Status (Sep 2026) | License | Used for |
| --- | --- | --- | --- |
| OWASP Top 10 for LLM Applications 2026 (v1.0) | Published; resource page dated Aug 3, 2026, announced Sep 1, 2026 (confirm the date before citing). The 2025 edition (Nov 2024) is still listed | CC BY-SA 4.0 | AI-10 |
| OWASP Top 10 for Agentic Applications for 2026 | Published Dec 9, 2025 | CC BY-SA 4.0 | AI-10 |
| OWASP AI Exchange | Living guidance; OWASP Flagship project since Mar 2025; contributes to ISO/IEC 27090 and the EU AI Act standards | CC0 1.0 | AI-11, AI templates |
| GenAI Security Industry Framework Crosswalk | Released Sep 1, 2026; maps 51 GenAI risks to controls in 25 frameworks "including NIST" (which NIST documents is not stated on the page) | CC BY-SA 4.0 | Possibly AI-07 note (open question) |
| OWASP Machine Learning Security Top Ten | Draft, v0.3 (2023 edition) | CC BY-SA 4.0 | Link only |
| Agent Control Standard | Donated to the GenAI Security Project (announced Sep 1, 2026); status unclear | Check | Track only (AI-12) |

Pages (P1 first): entry page, AI RMF overview and four function pages, the AI RMF alongside the RMF, securing an AI system through the RMF steps, the two OWASP Top 10 pages; then the topic pages and the five AI templates (AI-06).

### Methods and SSDF (Phase 4)

- Methods index: each family's NIST implementation publications, verified, with versions (METH-02). Added family by family once the program kit (Phase 3) is complete.
- SSDF overview: what the SSDF is, who it applies to (software producers, and acquirers who require it of suppliers), how it relates to SA and SR controls, current version status with an "as of" month.
- One page per practice, grouped: Prepare the Organization (PO), Protect the Software (PS), Produce Well-Secured Software (PW), Respond to Vulnerabilities (RV).
- Templates: Secure Software Development Policy, SDLC standard, vulnerability disclosure policy, SBOM guidance, attestation readiness checklist.
- References: NIST's 800-53 references for each task, on the practice page and in the Methods section of each cited control.

### Industry guides (Phase 6, proposed)

| Guide | Main rules alongside 800-53 |
| --- | --- |
| Defense and defense industrial base | DoDI 8510.01, CNSSI 1253, CSRMC status, CMMC and SP 800-171 Rev. 3 |
| Healthcare | HIPAA Security Rule (45 CFR Part 164), HHS 405(d) practices |
| Financial services | GLBA Safeguards Rule, FFIEC guidance, PCI DSS (paraphrased only) |

### Technology playbooks (Phase 6, proposed)

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
| External services | None required at build or run time except fetching NIST data (OSCAL, SSDF, AI RMF) in import scripts |
| Data sources | NIST [oscal-content](https://github.com/usnistgov/oscal-content) SP 800-53 Rev. 5 catalog and baseline profiles, cached in `.cache/oscal`; SSDF from NIST's SSDF table (SP 800-218 supplement) or CPRT, cached in `.cache/ssdf`; AI RMF core from a NIST machine-readable source chosen with the owner, cached in `.cache/airmf`; COSAIS overlays from NIST's machine-readable form when published. Each import is pinned to a version and committed as data, like `catalog.json` |
| Generated files | Pages committed to git so edit links and diffs work; never hand-edited between `nist:start` and `nist:end`. Binary downloads built in CI, never committed |
| Browsers | Last two versions of Chrome, Edge, Firefox and Safari; mobile layout from 360 px wide |
| Documents | `.docx` opens cleanly in current Microsoft Word and LibreOffice |
| Styling | Keep the existing tokens in `theme.css` (Public Sans, Source Serif 4, one teal accent). No new colors without a reason |
| Actions security | Actions pinned to full commit SHAs; `permissions: {}` at top level with per-job least privilege; only allow-listed actions |

## Delivery phases

Work in seven phases; each ends with an owner review before the next starts. Phases are ordered by dependency and priority, not by date. Templates come before industry and technology content because they depend only on the controls layer and deliver the most value to a program builder. What the guide already covers is finished first: the full program kit (owner decision). Then methods and the SSDF, which add NIST's how-to to the finished families, then the AI security guide. Both depend only on the RMF and controls layers.

| Phase | Scope | Requirements | Exit criteria |
| --- | --- | --- | --- |
| 1 Launch foundation | Make the existing site production-ready and public | CTRL-01, CTRL-02, CTRL-03, LINK-01, LINK-03 (done), NAV-01, PRES-01, PRES-03, PRES-04, QA-01, QA-02, QA-04 | Site live; PR checks green; placeholders replaced; owner approves home and About |
| 2 Template system and first kit | Template pipeline; guidance for the 30 priority controls; policies, clauses and worksheets for AC, AU, CM, IA and IR; SSP, IR plan and POA&M | CTRL-04, CTRL-05, CTRL-06, CTRL-08, TPL-01 to TPL-08, TPL-10, PROG-01, PROG-02, PROG-05, FEAT-04, QA-03, QA-05, PRES-06 | Done (Sep 28, 2026): 31 controls at `guidance: draft`; 5 family policies downloadable per baseline; kit v1.0.0 released |
| 3 Full program kit | Finish what the guide already covers: the remaining 15 family policies, the consolidated policy, every catalog artifact except the SSDF-based SA artifacts, the program path | TPL-09, TPL-11, PROG-03, PROG-04, PRES-02, NAV-02 | Every Low and Moderate control has a clause at `draft` or better; every catalog artifact published except the SSDF-based SA artifacts; program path complete; kit v2.0.0 |
| 4 Methods and the SSDF | Each family's NIST methods, the SSDF section, and the SSDF-based SA artifacts (Secure Software Development Policy, SDLC standard) and software producer artifacts | METH-01 to METH-03, SSDF-01 to SSDF-05 | Methods index complete; SSDF pages live and shown in control pages' Methods sections; SSDF templates at `draft` in the kit; kit v2.1.0 |
| 5 AI security guide | The AI guide as its own section: entry page, AI RMF pages, the AI RMF alongside the RMF, securing an AI system through the RMF steps, OWASP Top 10 pages, topic pages, AI templates, federal notes; tracking of NIST's AI overlays and OWASP editions | AI-01 to AI-12 | Entry page with a current NIST and OWASP status table; AI RMF function pages from NIST data; the RMF-steps walkthrough; OWASP LLM and agentic Top 10 pages; five AI templates at `draft` in the kit; kit v2.2.0 |
| 6 Industries and technology | 3 industry guides, 4 playbooks, articles | LINK-02, FEAT-01 | All seven pages published with `controls` front matter; control pages show them under "Referenced by"; first article published |
| 7 Depth | Guidance for every Moderate control, High clauses, crosswalks, automation | FEAT-03, NAV-03, CTRL-07, LINK-04, TPL-12, PRES-05 | Coverage page shows every Moderate control at `draft` or better; High variants complete; monthly NIST check running |

AI-07's tracking is part of Phase 5; publishing an overlay happens whenever NIST finalizes one, in whatever phase is current.

## Non-goals

- No user accounts, comments, forums or anything needing a server.
- No GRC tooling: the site does not store organization data, track POA&Ms or act as a system of record. Templates are documents the reader downloads and completes in their own tools. An optional in-browser fill-in (TPL-12) keeps all data in the browser.
- No reproduction or close paraphrase of copyrighted standards or commercial template libraries; write from the NIST requirement up.
- No official or legal advice; the disclaimer stays on every page and in every generated document.
- No private or client-specific content in this repository.
- No AI tooling: the site does not test, evaluate, red-team or monitor models, and runs no AI at build or run time. The AI guide is guidance and templates only.
- No home-made AI control overlays: the guide waits for NIST's (AI-07).

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
- Link a method to a control only where the method's NIST publication cites that control. In the AI guide, state only what NIST or OWASP publishes (or OMB and CISA, for federal notes), with each publication's status and an "as of" month; make no AI-specific control selections or mappings until NIST's overlays are final. OWASP GenAI Security Project text is CC BY-SA 4.0: cite IDs and titles and write in your own words, never copy; the OWASP AI Exchange is CC0 and may be adapted.

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
- [ ] AI RMF machine-readable source for AI-02 (Phase 5): NIST's AI RMF Playbook data, CPRT, or another NIST export
- [ ] SSDF source for SSDF-01 (Phase 4): the SP 800-218 Excel table or CPRT
- [ ] AI templates (AI-06): confirm the list of five before Phase 5 writing starts
- [ ] OWASP's GenAI framework crosswalk (Sep 2026) maps AI risks to controls in 25 frameworks "including NIST". If it maps to SP 800-53, may AI guide pages cite it as OWASP's mapping before NIST's overlays exist? Default until decided: yes on AI guide pages, clearly labelled as OWASP's; never on control pages

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
| Word styling | Calibri body, Georgia headings, teal accent, title and version header, page numbers, no guide branding (PRES-06) | Sep 28, 2026 |
| Methods | NIST implementation guidance (the SSDF first) is shown as a Methods section on control pages, linked only where NIST cites the control | Sep 28, 2026 |
| AI security guide | A separate section (a guide within the guide), kept separate from the SSDF and methods work. Phase 5, after the RMF program kit and methods | Sep 28, 2026 |
| Phase order | Finish what the guide already covers first: the RMF program kit as first scoped (Phase 3). Then methods and the SSDF (Phase 4), then the AI guide (Phase 5). "RMF complete" means the full program kit, not Moderate guidance or High clauses, which stay in Depth | Sep 28, 2026 |
| AI control guidance | Wait for NIST's COSAIS overlays; no AI-specific control selections, tailoring or mappings of the author's own until they are final | Sep 28, 2026 |
| AI guide sources | NIST and OWASP only (plus OMB and CISA for federal notes): the OWASP Top 10 for LLM and for Agentic Applications, and the OWASP AI Exchange | Sep 28, 2026 |
| Articles (FEAT-01) | Deferred to Phase 6, with the first article; `starlight-blog` is compatible with Starlight 0.42 and remains the first choice | Sep 28, 2026 |
| PM policy | One organization-wide edition (`baseline: none` in `_family.yml`), included in every baseline's kit, with PM-1's own shared sections in `policy/pm/_common.md` | Sep 28, 2026 |
| Privacy-baseline clauses | Written in Phase 3 with each family (the PT policy and the privacy-only controls of other families), so each Privacy variant is complete | Sep 28, 2026 |

## Revision history

| Version | Date | Change |
| --- | --- | --- |
| 1 | Sep 27, 2026 | First version |
| 2 | Sep 27, 2026 | Vision widened to learn, build and prove a program. Added Template system, artifact catalog, starter kit, Build your program (PROG), SSDF, template lint (QA-05) and `.docx` styling (PRES-06). FEAT-02 superseded by TPL. Phases reordered: templates before industries and technology; five phases. Current state updated for the subpath deploy and CI |
| 2.1 | Sep 27, 2026 | Owner decisions recorded: CC0 templates, free kit, any-organization voice with `:::federal` sections, pandoc approved |
| 3 | Sep 28, 2026 | Phase 2 marked done. Methods added: NIST implementation guidance as a sixth question on each control and a Methods section on control pages (METH-01 to METH-03); the SSDF becomes the first method, under `methods/ssdf/`. AI security guide added as a separate section built on NIST guidance (AI-01 to AI-09), with a checked status table of NIST AI publications; no author-made AI control overlays. New persona, page types and `implements` and `airmf` front matter. Phases now six: 3 full program kit and methods, 4 AI security guide, 5 industries and technology, 6 depth (order set in 3.1). OWASP added as the AI guide's second source (AI-10 to AI-12): the Top 10 for LLM and for Agentic Applications (CC BY-SA 4.0: own words and links only) and the AI Exchange (CC0), with a checked status and license table |
| 3.1 | Sep 28, 2026 | Phase order (owner decision): finish what the guide already covers first. Seven phases: 3 full program kit (kit v2.0.0), 4 methods and the SSDF (kit v2.1.0), 5 AI security guide (kit v2.2.0), 6 industries and technology, 7 depth. "RMF complete" means the full program kit; Moderate guidance and High clauses stay in Depth |
| 3.2 | Sep 28, 2026 | Owner decisions at the start of Phase 3: FEAT-01 moves to Phase 6; one organization-wide PM policy (`baseline: none`, `policy/pm/_common.md`); privacy-baseline clauses written with each family |

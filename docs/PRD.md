# RMF Field Guide: Product Requirements

Sep 27, 2026 · @Kris

## Summary

The RMF Field Guide is a free, public, static website that teaches practitioners how to apply the NIST Risk Management Framework (RMF) and SP 800-53 controls to real systems, from general process down to platform-specific configuration. It is the owner's public portfolio piece and, over time, their internal consulting playbook. This document tells a Claude Code session what to build on top of the existing starter repo, in what order, and how to know each piece is done.

**Goals**

1. Be the most practical free reference for applying the RMF and SP 800-53: every page answers "what do I actually do, and what will the assessor ask for?"
2. Cover four layers: the framework, every control, industry-specific application, and technology-specific implementation.
3. Present the owner as a credible, organized leader in the field: professional look, accurate content, cited sources, visible upkeep.
4. Stay cheap and low-maintenance: static site, GitHub Pages, no paid services, one command to refresh NIST content.

**Success measures**

| Measure | Target |
| --- | --- |
| Controls with written guidance | 30 highest-value controls in Phase 2; all Moderate-baseline controls in Phase 4 |
| Industry guides published | 3 in Phase 3 |
| Technology playbooks published | 4 in Phase 3 |
| Broken internal links | 0 on every build |
| Build time | Under 2 minutes in CI |
| Accessibility | WCAG 2.2 AA on all page templates |
| Accuracy | Every factual claim about a rule or date cites a primary source |

## Audience and use cases

The primary reader is a practitioner mid-task who needs a concrete answer fast; the secondary reader is someone evaluating the owner's expertise. Every page should serve both: direct and usable first, polished second.

| Persona | Arrives with | Needs from the site | Most-used sections |
| --- | --- | --- | --- |
| ISSO or system owner | A system heading toward an ATO | What to produce at each step, SSP wording, evidence lists | RMF steps, control guidance |
| Control assessor | A control to test | Assessment objectives, what good evidence looks like, common findings | Control pages |
| New practitioner or student | A new job or certification goal | Plain explanations, glossary, the big picture | RMF overview, glossary |
| Engineer or cloud architect | A platform to harden | Which settings meet which controls, customer vs provider responsibility | Technology playbooks |
| Compliance lead in a regulated industry | A sector rule (HIPAA, NERC CIP, PCI DSS) | How 800-53 overlaps, what extra is required | Industry guides |
| Hiring manager or prospective client | The owner's name | Evidence of depth, clarity and currency | Home, About, articles |
| The owner, as consultant | A client engagement | Reusable checklists, templates, talking points | Everything, plus downloads |

## Current state

The starter repo builds 340 pages in about 10 seconds with zero broken internal links. Build on it; do not restructure it without a stated reason.

| Area | Status | Location |
| --- | --- | --- |
| Stack | Astro 7.3 with Starlight 0.42, Node 22+, Pagefind search, sitemap | `package.json`, `astro.config.mjs` |
| Deploy | GitHub Actions to GitHub Pages at `<user>.github.io` | `.github/workflows/deploy.yml` |
| Theme | Public Sans body, Source Serif 4 headings, teal accent, light and dark | `src/styles/theme.css` |
| Home page | Hero, clickable seven-step strip, section cards, about blurb | `src/content/docs/index.mdx`, `src/components/StepStrip.astro` |
| RMF section | Overview, roles, 7 step pages, ATO checklist, program variants, 2 SVG diagrams | `src/content/docs/rmf/`, `public/diagrams/` |
| Control pages | 300 active controls in 20 families from NIST OSCAL release 5.2.0; baselines, enhancements, 800-53A objectives | `src/content/docs/controls/`, `scripts/import-oscal.mjs` |
| Control guidance | One worked example (AC-2) below the guidance marker | `controls/ac/ac-2.md` |
| Industries, technology | Overview pages with planned topics only | `industries/`, `technology/` |
| Reference | Library, glossary, page templates | `reference/` |
| Footer | Disclaimer and CC BY 4.0 notice | `src/components/Footer.astro` |
| Placeholders | "Your Name", `your-username` | `index.mdx`, `about.md`, `LICENSE`, `astro.config.mjs` |

## Information architecture

The site has four content layers that link to each other through shared front matter, so a control page can list every industry guide and technology playbook that mentions it without hand-maintained links.

```text
src/content/docs/
  index.mdx                 Home
  about.md                  About the guide and author
  rmf/                      Layer 1: the framework (exists)
    steps/                  One page per RMF step (exists)
  controls/                 Layer 2: SP 800-53 (generated + guidance)
    <family>/index.md       Family overview (generated)
    <family>/<id>.md        One page per control
    baselines/              NEW: Low, Moderate, High, Privacy lists
    coverage.md             NEW: guidance progress by control
    crosswalks/             NEW: NIST-published mappings (CSF 2.0, 800-171)
  industries/               Layer 3: one page per industry
  technology/               Layer 4: one folder per platform area
    <area>/<platform>.md
  articles/                 NEW: dated articles (separate collection or blog plugin)
  toolkit/                  NEW: downloadable templates and checklists
  reference/                Library, glossary, templates (exists)
public/downloads/           NEW: template files (.md, .csv, .docx)
```

### Page types

| Page type | Purpose | Required sections |
| --- | --- | --- |
| RMF step | Explain one step | Purpose, tasks table, how to apply, done checklist, common findings, key references |
| Control | Requirement plus practical guidance | Generated NIST block; then How to apply it, parameters, evidence, inheritance, common findings |
| Industry guide | Apply RMF and 800-53 under sector rules | Rules that apply, how the steps change, controls with extra weight, findings, references |
| Technology playbook | Implement controls on a platform | Controls covered, recommended configuration, evidence to collect, findings, references |
| Article | Opinion, lessons learned, news analysis | Date, author, summary, body, sources |
| Toolkit item | A reusable artifact | What it is, when to use it, download link, related steps and controls |

### Front matter contract

These fields drive cross-linking and must be validated by the content schema in `src/content.config.ts`.

```yaml
# Control pages: the generator owns title, description, sidebar and control.
control: { id: AC-2, family: AC, baselines: [Low, Moderate, High] }
# NEW, hand-set; the generator must preserve it (requirement CTRL-01)
guidance: none | draft | reviewed

# Industry guides and technology playbooks
industries: [healthcare]               # slug list
technologies: [entra-id]               # slug list
controls: [ac-2, ia-2, ia-5]           # NEW: controls this page gives guidance on
reviewed: 2026-09-27                   # NEW: date of last full accuracy review
```

## Functional requirements

Priority: P1 = needed for launch, P2 = next, P3 = later. Each requirement is done only when its acceptance criteria pass on a clean build.

### Controls pipeline (CTRL)

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| CTRL-01 | The generator preserves hand-set front matter keys it does not own (`guidance`, `reviewed`, any future keys) | P1 | Add `guidance: draft` to a control, run `npm run controls`; the key survives and the NIST block is unchanged |
| CTRL-02 | Generator is idempotent | P1 | Running `npm run controls` twice produces no `git diff` |
| CTRL-03 | Generator has tests for parameter rendering, withdrawn controls, marker preservation and front matter merge | P1 | `npm test` passes; tests use a small fixture catalog, not the network |
| CTRL-04 | Baseline list pages for Low, Moderate, High and Privacy | P2 | Each lists every control and enhancement in that baseline with links; counts match the NIST profile |
| CTRL-05 | Coverage page showing guidance status per control | P2 | Generated table of all controls with `guidance` status; totals by family and by baseline |
| CTRL-06 | Guidance status badge on each control page | P2 | Page shows "Guidance: none / draft / reviewed" near the title |
| CTRL-07 | Scheduled check for new NIST releases | P3 | A monthly GitHub Action runs `npm run controls -- --refresh` and opens a pull request only if files changed |

### Cross-linking (LINK)

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| LINK-01 | "Referenced by" section on control pages, built from the `controls` front matter of industry and technology pages | P1 | Adding `controls: [ac-2]` to a playbook makes it appear on the AC-2 page after build, with no edit to `ac-2.md` |
| LINK-02 | Industry and technology pages list the controls they cover, with titles, from front matter | P2 | Rendered automatically from `controls` |
| LINK-03 | Build fails on broken internal links and anchors | P1 | CI job fails when a link to a missing page or `#anchor` is introduced |
| LINK-04 | Control IDs in prose can be written as a short component or remark plugin that renders a link | P3 | Writing the ID token renders a link to the control or enhancement anchor |

### Navigation and discovery (NAV)

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| NAV-01 | Search covers all pages, including control IDs like "AC-2(3)" | P1 | Searching an ID returns that control first |
| NAV-02 | Industry and technology indexes list published pages with a one-line summary | P2 | Generated from front matter; no hand-maintained lists |
| NAV-03 | Tag filtering by industry and technology | P3 | A reader can list all pages tagged `healthcare` |

### Content features (FEAT)

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| FEAT-01 | Articles section with dated posts and an RSS feed | P2 | Use the `starlight-blog` plugin if compatible with the installed Starlight; otherwise a separate content collection. Feed validates |
| FEAT-02 | Toolkit of downloadable templates | P2 | At least: POA&M template (CSV), boundary and inventory checklist, SSP implementation statement guide, AO briefing outline, significant change worksheet |
| FEAT-03 | Crosswalk pages from NIST-published mappings only | P3 | 800-53 to CSF 2.0 and to SP 800-171 Rev. 3, imported from NIST files, with source and version cited |
| FEAT-04 | Changelog page and versioned releases | P2 | Git tags `vX.Y.Z`; `CHANGELOG.md` rendered as a page |

### Presentation, SEO and sharing (PRES)

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| PRES-01 | Open Graph and Twitter card images for every page | P1 | Generated at build (for example with `astro-og-canvas`) or a branded default; link previews show title and site name |
| PRES-02 | Print styles for step pages and control pages | P2 | Printing a step page gives clean output with no navigation chrome |
| PRES-03 | Accessibility at WCAG 2.2 AA | P1 | Automated axe check on home, a step page, a control page and an industry page shows no serious or critical issues |
| PRES-04 | Author identity: About page with bio, photo, LinkedIn link; social links in header | P1 | Placeholders replaced with owner-provided content |
| PRES-05 | Privacy-friendly analytics, if the owner chooses | P3 | No cookies; documented in About |

### Quality and CI (QA)

| ID | Requirement | Priority | Acceptance criteria |
| --- | --- | --- | --- |
| QA-01 | Pull request workflow builds the site and runs checks without deploying | P1 | `.github/workflows/check.yml` runs build, link check, lint and tests on every PR |
| QA-02 | Markdown lint with a committed config | P1 | `markdownlint-cli2` passes; rules suited to tables and long lines |
| QA-03 | Spell check with a domain dictionary | P2 | `cspell` passes; dictionary includes RMF and 800-53 terms |
| QA-04 | Front matter validation | P1 | Build fails on unknown `controls` IDs or malformed `industries`/`technologies` slugs |

## Content requirements

Content quality is the product. Accuracy and usefulness win over volume: one correct, specific page beats five generic ones.

### Voice and structure

- Write for a practitioner in the middle of a task: lead with what to do, then why. Plain words, active voice, second person.
- Keep sentences under about 25 words and paragraphs to three sentences. Use tables for comparisons and checklists for completion criteria.
- Follow the page-type structure in Information architecture and the templates in `reference/page-templates.md`. AC-2 is the reference example for control guidance.
- Be specific: name the setting, the artifact, the role and the frequency. Mark typical values as typical and say who actually sets them.
- Use Starlight asides (`:::note`, `:::caution`) sparingly, for real warnings only.

### Sourcing and accuracy

- Every claim about a law, rule, deadline, version or program status cites a primary source: NIST, OMB, CISA, FedRAMP, DoD, the regulator, or the standards body.
- Program facts that change (FedRAMP, DoD CSRMC, CMMC) carry an "as of" month and are re-checked at each release.
- Never invent numbers, control mappings or requirements. If a fact cannot be verified, leave an HTML comment `<!-- TODO(verify): ... -->` and add it to the open questions list instead of guessing.
- Cross-framework mappings come only from published sources (NIST OLIR and CPRT, the regulator's own crosswalks). Label any author-made mapping as the author's judgment.

### Copyright and sensitivity

| Source | Can be reproduced? | Rule |
| --- | --- | --- |
| NIST SPs, FIPS, OMB circulars and memos, U.S. regulations (for example 45 CFR Part 164) | Yes, public domain | Quote as needed; cite |
| DISA STIGs | Generally yes (U.S. government work) | Quote settings sparingly; link the STIG and version |
| PCI DSS, ISO/IEC 27001, HITRUST, CIS Benchmarks, NERC CIP standards text, vendor documentation | No | Paraphrase and link; never paste requirement text or tables |
| Client or employer material | No | Never include names, system details, findings or artifacts from real engagements |
| Controlled Unclassified Information or nonpublic government material | No | Never include, even if anonymized |

## Content backlog

Write guidance for the controls that assessors test hardest and that most systems implement themselves, then branch into industries and platforms. Every item ships as `guidance: draft` and moves to `reviewed` only after the owner signs off.

### Priority controls (Phase 2)

Thirty controls plus the existing AC-2 example, all in the Moderate baseline:

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

Also write one shared page on the policy and procedures controls (AC-1, AU-1 and the other -1 controls) and link it from each.

### Industry guides (Phase 3, proposed)

| Guide | Main rules alongside 800-53 |
| --- | --- |
| Defense and defense industrial base | DoDI 8510.01, CNSSI 1253, CSRMC status, CMMC and SP 800-171 Rev. 3 |
| Healthcare | HIPAA Security Rule (45 CFR Part 164), HHS 405(d) practices |
| Financial services | GLBA Safeguards Rule, FFIEC guidance, PCI DSS (paraphrased only) |

### Technology playbooks (Phase 3, proposed)

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
| Runtime | Node 22 or later locally; CI uses the `withastro/action` default |
| Hosting | GitHub Pages via `.github/workflows/deploy.yml`; site at `https://<user>.github.io`, custom domain later via `public/CNAME` and `SITE_URL` |
| Limits | Published site under 1 GB (GitHub Pages limit); current build is about 41 MB. Deploy job under 10 minutes |
| Performance | Build under 2 minutes in CI; home and control pages score 90+ on Lighthouse performance and accessibility |
| Dependencies | Prefer Starlight built-ins. Each new dependency needs a one-line reason in the pull request. No client-side frameworks for static content |
| External services | None required at build or run time except fetching NIST OSCAL files in the controls script |
| Data source | NIST [oscal-content](https://github.com/usnistgov/oscal-content) SP 800-53 Rev. 5 catalog and baseline profiles, cached in `.cache/oscal` |
| Generated files | Committed to git so edit links and diffs work; never hand-edited between `nist:start` and `nist:end` |
| Browsers | Last two versions of Chrome, Edge, Firefox and Safari; mobile layout from 360 px wide |
| Styling | Keep the existing tokens in `theme.css` (Public Sans, Source Serif 4, one teal accent). No new colours without a reason |

## Delivery phases

Work in four phases; each ends with an owner review before the next starts. Phases are ordered by dependency, not by date.

| Phase | Scope | Requirements | Exit criteria |
| --- | --- | --- | --- |
| 1 Launch foundation | Make the existing site production-ready and public | CTRL-01, CTRL-02, CTRL-03, LINK-01, LINK-03, NAV-01, PRES-01, PRES-03, PRES-04, QA-01, QA-02, QA-04 | Site live at the owner's address; PR checks green; placeholders replaced; owner approves home and About |
| 2 Control guidance | Guidance for the 30 priority controls and the policy page | CTRL-04, CTRL-05, CTRL-06, FEAT-04, QA-03 | 31 controls at `guidance: draft` or better; coverage page live; release v1.0.0 tagged |
| 3 Industries and technology | 3 industry guides, 4 playbooks, articles, toolkit | LINK-02, NAV-02, FEAT-01, FEAT-02, PRES-02 | All seven pages published with `controls` front matter; control pages show them under "Referenced by"; first article published |
| 4 Depth | Guidance for every Moderate-baseline control, crosswalks, automation | FEAT-03, NAV-03, CTRL-07, LINK-04, PRES-05 | Coverage page shows every Moderate control at `draft` or better; monthly NIST check running |

## Non-goals

- No user accounts, comments, forums or anything needing a server.
- No GRC tooling: the site does not generate SSPs, track POA&Ms or store system data.
- No reproduction of copyrighted standards (PCI DSS, ISO, CIS, HITRUST); paraphrase and link only.
- No official or legal advice; the disclaimer stays on every page.
- No private or client-specific content in this repository.

## Instructions for Claude Code

Save this document as `docs/PRD.md` in the repo and copy this section into `CLAUDE.md` at the repo root so every session starts with it.

### Getting oriented

1. Read `README.md`, this PRD and `controls/ac/ac-2.md` (the guidance example) before changing anything.
2. Run `npm install`, `npm run controls` and `npm run build`. Confirm the build is clean before starting work.
3. Work in phase order. Within a phase, do P1 requirements first.

### How to work

- One requirement or one content item per branch and commit, with the ID in the message, for example `CTRL-01: preserve hand-set front matter`.
- Before every commit: `npm run build` passes, the link check passes, and `npm run controls` produces no diff.
- Never edit between `<!-- nist:start -->` and `<!-- nist:end -->`. Change `scripts/import-oscal.mjs` instead, then regenerate.
- Keep a `PROGRESS.md` at the repo root: requirement ID, status, date, notes. Update it at the end of each task.
- Prefer small, reviewable changes over large rewrites. Do not rename folders or slugs; existing links depend on them.

### Writing content

- Follow Content requirements exactly, and use AC-2 as the model for control guidance.
- Verify every factual claim about rules, versions, dates and program status against a primary source before writing it, and cite it on the page. Use web search when available.
- If a fact cannot be verified, write `<!-- TODO(verify): what and why -->` and add it to Open questions in `PROGRESS.md`. Do not guess.
- Set `guidance: draft` on anything you write. Only the owner sets `reviewed`.

### When to stop and ask the owner

- At the end of each phase, before starting the next.
- For anything personal: name, bio, photo, LinkedIn, custom domain, analytics choice.
- Before adding a dependency the PRD does not name, changing the visual design, or restructuring navigation.
- When sources conflict on a rule or date.

## Open questions for the owner

Phase 1 cannot finish until the first four are answered.

- [ ] Name, short professional bio, headshot and LinkedIn URL for the About page
- [ ] GitHub username (sets the site address), and whether to buy a custom domain now or later
- [ ] Site title: keep "RMF Field Guide" or choose another
- [ ] Any employer policy on publishing, such as a required disclaimer or pre-publication review
- [ ] Which three industries to cover first (proposed: defense, healthcare, financial services)
- [ ] Which four platforms to cover first (proposed: AWS, Azure, Microsoft 365 with Entra ID, Kubernetes)
- [ ] Privacy-friendly analytics: yes or no

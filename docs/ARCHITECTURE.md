# Architecture

How the RMF Field Guide is built: where content comes from, what is generated and what is written by hand, and what checks it. [`docs/PRD.md`](PRD.md) says what to build and why; this file says how the existing pieces fit together. Each script and module opens with a comment naming the PRD requirement it implements, so read those for detail.

## Overview

The site is static: [Astro Starlight](https://starlight.astro.build) builds Markdown into HTML, Pagefind indexes it for search, and GitHub Pages serves it. Nothing runs at request time. Two generators turn source data into committed Markdown pages, and the build turns template sources into downloadable documents.

```mermaid
flowchart LR
  oscal["NIST oscal-content<br/>(pinned commit)"] -->|npm run controls| ctrl["Control, family and<br/>baseline pages"]
  oscal -->|npm run controls| data["src/data/<br/>catalog.json, control-ids.json"]
  tpl["templates/<br/>clauses, plans, forms ..."] -->|npm run templates| pages["Template pages"]
  data --> pages
  hand["Hand-written pages<br/>and guidance"] --> astro
  ctrl --> astro["astro build"]
  pages --> astro
  tpl -->|content collections| astro
  git["git history of main"] -->|build-changelog| astro
  astro --> site["dist/ site + Pagefind index"]
  tpl -->|npm run kit + pandoc| kit["dist/downloads/<br/>.docx, .md, .csv, .zip"]
  data --> kit
```

## Sources of content

| Content | Source of truth | Written by | Committed? |
| --- | --- | --- | --- |
| Control text, parameters, assessment objectives | NIST OSCAL catalog and baseline profiles | `scripts/import-oscal.mjs` | Yes, between `<!-- nist:start -->` and `<!-- nist:end -->` |
| Control guidance | The control page, below `<!-- guidance: write below this line -->` | Hand | Yes |
| Family hubs (`controls/<family>/index.md`) and baseline lists (`controls/baselines/`) | OSCAL | `scripts/import-oscal.mjs` | Yes |
| `src/data/catalog.json`, `src/data/control-ids.json` | OSCAL | `scripts/import-oscal.mjs` | Yes, so the build needs no network or OSCAL cache |
| Policy clauses, plans, standards, procedures, forms, reports, variables | `templates/` | Hand | Yes |
| Template pages (`src/content/docs/templates/`) and the program artifact checklist (`src/content/docs/program/checklist.md`) | `templates/` | `npm run templates` | Yes, so diffs and edit links work |
| Downloadable kit (`.docx`, `.md`, `.csv`, `.zip`) | `templates/` | `npm run kit` (part of `npm run build`) | No: build output in `dist/downloads/` |
| Changelog page (`reference/changelog.md`) | First-parent git history of `main` | `scripts/build-changelog.mjs` (runs before `dev` and `build`) | No: in `.gitignore` |
| RMF, program, industry, technology and reference pages | `src/content/docs/` | Hand | Yes |

Never hand-edit generated text. Change the generator or the source in `templates/`, then regenerate. CI regenerates both and fails on any diff.

## Controls pipeline

`npm run controls` reads the SP 800-53 Rev. 5 catalog and the Low, Moderate, High and Privacy baseline profiles from NIST's [oscal-content](https://github.com/usnistgov/oscal-content) repository at the commit pinned in `OSCAL_REF` (release 5.2.0 today). Downloads are cached in `.cache/oscal/<ref>/`; `--refresh` fetches them again.

- `scripts/lib/oscal.mjs` builds the page bodies: statement, parameters, discussion, related controls, enhancements (each with an `id` anchor such as `#ac-2.3`) and 800-53A assessment objectives.
- `scripts/lib/generated.mjs` merges them into existing files. It rewrites only the NIST block and the front matter keys the generator owns (`title`, `description`, `sidebar`, `control`). Every other key, such as `guidance` and `reviewed`, and everything below the guidance marker is kept (CTRL-01). The run fails if a comment below the marker is left open or the marker line is changed.
- Each baseline page's count is checked against its NIST profile.

Both libraries are pure functions, tested in `scripts/test/` against a small fixture catalog with no network access.

## Template system

Template sources live in `templates/`, outside `src/content/docs`, so they are not pages themselves. The PRD's [Template system](PRD.md#template-system) section defines the format; this is how it is wired.

```text
templates/
  variables.yml               {{org:...}} values
  starter-kit.yml             what the starter kit contains (the consolidated policy, not family policies)
  reference.docx              Word styles (npm run reference-docx remakes it)
  policy/_common.md           shared sections of every family policy (the -1 control)
  policy/<family>/_family.yml family title, role, stage, worksheet questions
  policy/<family>/_common.md  optional family override (PM)
  policy/<family>/<id>.md     one clause per control or enhancement
  plans/ standards/ procedures/ forms/ reports/   one file per artifact
```

Every type folder is flat, procedures included (`templates/procedures/account-management-procedure.md`), so each template page sits one level under its type in the sidebar and the URL. The owner chose this layout in the row 27 review (PRD 3.9); a family subfolder would add a sidebar group named by its folder (`ac`).

1. **Validation.** `src/content.config.ts` loads the sources as Astro content collections (`clauses`, `templates`, `families`, `variables`) and checks them with the schemas in `src/lib/template-schema.ts` against `src/data/catalog.json`. A bad control ID, type, status, stage or variable fails the build (TPL-01), as does a template `role` that is not a key in `templates/variables.yml`.
2. **Assembly.** `src/lib/template-assemble.ts` builds each family policy from `_common.md` plus the family's clauses in catalog order, once per baseline. Baseline membership comes from the catalog, never from the sources (TPL-03). A family with `baseline: none` (PM) gets one organization-wide edition; a privacy-only family (PT) gets only a Privacy edition.
3. **Consolidated policy.** `assembleConsolidated` in the same module builds the Information Security and Privacy Policy (TPL-09) for Low, Moderate, High and Privacy from the same sources; it has no source file of its own. The shared sections of `_common.md` appear once, rendered for a pseudo-family (`CONSOLIDATED`: title "Information Security and Privacy", role `ciso`, id `xx`), so `{{param:xx-01_odp.05}}` stays one field whose label is the first family's -1 parameter renamed for this policy (`consolidatedParams` in `scripts/lib/template-pages.mjs`), and -1 references stay `(XX-1a.1(a))`. A generated Control families section after Scope lists each family with its -1 control and accountable role and says what those references mean. Under Policy statements, each family has a `###` part with the same clauses its family policy has (`familyStatements`, shared by both assemblies), one heading level down. A family is in a variant when its own policy has that variant, so PT is in Privacy only; PM is in every variant with all its clauses. From a family's own `_common.md` (PM), only the sections the shared one lacks (the program plan, PM-1) and its federal blocks open its part.
4. **Editions.** `src/lib/template-editions.ts` keeps `:::guidance` blocks in the annotated edition and drops them from the clean one; `:::federal` blocks stay in both under a "Federal systems" heading (TPL-04).
5. **Variables.** `src/lib/template-vars.ts` renders `{{org:}}`, `{{param:}}`, `{{fill:}}` and `{{family:}}` for three targets: the site, `.md` and `.docx` (TPL-02). Parameter labels and prompts come from the catalog.
6. **Worksheets.** `src/lib/template-worksheet.ts` builds the decision worksheet for each family and baseline from `_family.yml` questions and the parameters of every family control in the baseline (TPL-08).
7. **Pages.** `scripts/build-templates.mjs --pages` (`npm run templates`) writes the pages under `src/content/docs/templates/` using `scripts/lib/template-pages.mjs` and `scripts/lib/starter-kit.mjs` (TPL-07, PROG-02). The consolidated policy's page (`policies/consolidated.md`, first in the Policies sidebar group) counts each family's controls per variant and previews the Moderate variant with each family's part summarized and linked to its family policy, since the full text is the family policies' text; its front matter `controls` lists the -1 controls only, so it shows as an artifact on the -1 control pages and not on every control page.

   The same run writes the program artifact checklist (PROG-03), `src/content/docs/program/checklist.md`, with `scripts/lib/artifact-checklist.mjs`: one row for the consolidated policy, one per family policy and decision worksheet, and one per plan, standard, procedure, form and report, each with its type, stage, controls, accountable role and status, all from front matter. A policy and its worksheet take the role and stage of `_family.yml` and show the -1 control; the consolidated policy takes `CONSOLIDATED_STAGE` and the -1 control of every family it covers; a template takes its optional `role` front matter (a `variables.yml` key, such as `system-owner` for the System Security Plan), or without one the role of the family policy of its first-listed control. Status uses the same rules as the template pages (`policyStatus`, `consolidatedStatus` in `template-pages.mjs`). The page lives under `program/` (an autogenerated sidebar group), outside the folder whose stale generated pages the run removes.
8. **Kit.** `scripts/build-templates.mjs` without `--pages` (`npm run kit`) writes every document to `dist/downloads/`: `.md`, `.docx` through pandoc with `templates/reference.docx`, `.csv` for registers and worksheets, the consolidated policy as `policies/consolidated-policy-<baseline>`, a `.zip` per family, per-baseline starter kits and the full kit (TPL-05), and the artifact checklist as `program-artifact-checklist.csv` (PROG-03), with absolute template links and empty tracking columns, which the full kit also carries. `templates/starter-kit.yml` names the starter kit's contents: its `include: consolidated-policy` item puts the consolidated policy at the kit's baseline in each starter kit, in place of the family policies (`include: policies`, still supported), which stay in the family packs and the full kit. Zips are built with `fflate` with a fixed entry time, and `.docx` files take the last commit's time, so rebuilding the same commit gives the same files.

`npm run lint:templates` (part of `npm run lint`) applies the writing rules in `scripts/lib/template-lint.mjs`: every clause has a "shall" statement with a control reference, every parameter is handled, every non-policy template lists controls (QA-05).

### pandoc

`.docx` files need [pandoc](https://pandoc.org). CI installs a pinned version (3.11, checksum-verified) in `check.yml`, `deploy.yml` and `release.yml`; keep the three in step. Locally, put pandoc on `PATH` or set `PANDOC` to its path. Without it, a local build skips `.docx`, says so, and the link check expects those links to be missing; in CI a missing pandoc fails the build.

## How pages are put together at build time

Control files hold only the NIST block and the guidance. Everything else on a control page is added at build time by `src/components/MarkdownContent.astro`, which overrides Starlight's component of the same name, so control files are never edited for it:

| Section | From | Requirement |
| --- | --- | --- |
| Status badges | `guidance` front matter and the clause's `status` (`src/lib/coverage.ts`) | CTRL-06 |
| Policy statement | The control's clause and its enhancements' clauses, clean edition; a -1 control links its family policy | TPL-06 |
| Artifacts | Template pages whose `controls` name the control | TPL-06 |
| Referenced by | Other pages whose `controls` front matter names the control or an enhancement (`src/lib/references.ts`) | LINK-01 |

Other components: `ControlCoverage.astro` (the coverage page, CTRL-05), `StageArtifacts.astro` (artifacts per program stage, from template `stage` front matter, PROG-01), `StepStrip.astro` (home page step strip) and `Footer.astro` (disclaimer and license).

### Page head and analytics

Every page's `<head>` gets the entries in Starlight's `head` array in `astro.config.mjs`: the social preview image tags (PRES-01) and the GoatCounter analytics script (PRES-05). The script is a pinned version (`count.v5.js`) with GoatCounter's published SRI hash, so an upgrade changes both. GoatCounter sets no cookies and ignores localhost, so dev and preview builds are not counted, and the accessibility check blocks its host (`.pa11yci.json`) so CI does not depend on it. A small inline script counts left and middle clicks on this site's links under `/downloads/` as GoatCounter events named `download-<file>`, with the file name as the title and the page they came from as the referrer (GoatCounter keeps one title per event, so the page cannot go in the title; its dashboard lists referrers per event), so the template pages and kit need no markup for it. The About page's Analytics section describes what is collected; change it with the script.

### Markdown plugins and search

`astro.config.mjs` registers three rehype plugins:

- `rehypeRebaseLinks` prefixes root-relative links (`/rmf/roles/`) with `BASE_PATH`, because the site is served from `/nist-guide/`. It cannot reach `.astro` components or MDX props; use `withBase()` from `src/lib/url.ts` there.
- `rehypeEnhancementTokens` (`src/lib/search-tokens.mjs`) adds hidden search tokens: one at the top of each control page for its own ID (`ac2ctl`, from the front matter's `control.id`), and one after each enhancement heading (`ac2e3`). Pagefind strips punctuation, so "AC-2(3)" would otherwise match AC-23, and "AC-2" is a prefix of AC-20 to AC-25, which can outrank AC-2 depending on page length and how Pagefind chunks its index. The control token ends in `ctl` because a statement-part reference such as "(AC-2c)" indexes as `ac2c`. `src/lib/pagefind-ui.mjs` wraps Starlight's search box (through a Vite alias) to rewrite IDs in queries to those tokens (NAV-01), so an ID search returns that control's page, or its enhancement's section, rather than every page that mentions it. Bare IDs are rewritten only for the 20 SP 800-53 family identifiers. Astro caches rendered content in `.astro/` and `node_modules/.astro/`; after changing a rehype plugin, delete them before building locally, or pages keep their old output.
- `rehypeTaskListLabels` (`src/lib/task-list-labels.mjs`) wraps task-list checkboxes in labels for accessibility (PRES-03).

The sidebar is defined in `astro.config.mjs`: one group per family under SP 800-53 controls, one group per template type, and autogenerated groups for the other sections. A new template type folder needs its own sidebar group.

## Checks

| Check | Command | Fails when |
| --- | --- | --- |
| Unit tests | `npm test` | Any test in `scripts/test/` fails (generator, template system, coverage, references, search tokens, changelog), or `PROGRESS.md` grows past 40 KB or the source registry has a row without a date |
| Markdown lint | `npm run lint` (markdownlint-cli2) | A rule in `.markdownlint-cli2.jsonc` is broken |
| Template lint | `npm run lint:templates` (in `lint`) | A template writing rule is broken (QA-05) |
| Spelling | `npm run spell` (in `lint`) | cspell finds a word not in `cspell-words.txt`; NIST text, variables and code are skipped |
| Generated pages current | `npm run controls`, `npm run templates`, then `git diff` | A generated page or data file was hand-edited or not regenerated |
| Build | `npm run build` | A content schema or template check fails, or the kit cannot be built |
| Guidance shows | `npm run check:guidance` (in `build`) | A control page with `guidance:` set has no rendered "How to apply it" heading |
| Links | `npm run check:links` | An internal link or anchor in `dist/` points nowhere |
| Search | `npm run check:search` | A control or enhancement ID does not return its page first; every base control ID in the catalog is checked as "AC-2", "ac-2" and "AC2" |
| Accessibility | `npm run check:a11y` | axe (through pa11y-ci) finds a serious or critical issue on a page in `.pa11yci.json`, in the light or dark theme |

## Workflows

All actions are pinned to full commit SHAs, each workflow sets `permissions: {}` and grants each job only what it needs, and Dependabot (`.github/dependabot.yml`) proposes weekly updates, with Astro upgrades in their own pull requests.

| Workflow | Runs on | Does |
| --- | --- | --- |
| `check.yml` (Check) | Every pull request and push to `main` | Every check in the table above, in order; its "Build and link check" job is required on `main` |
| `deploy.yml` (Deploy to GitHub Pages) | Push to `main` | Installs pandoc, builds with `withastro/action`, publishes to GitHub Pages |
| `release.yml` (Release kit) | A `vX.Y.Z` tag | Checks the tag is on `main` and matches `package.json`, builds the kit and publishes a GitHub Release with changelog notes |

`check.yml` and `deploy.yml` check out full history, which the changelog and Starlight's "last updated" dates need.

## Versions and releases

- The site and the kit share `version` in `package.json`, which every generated document prints. The README's "Releasing the template kit" section gives the steps.
- The NIST basis is the OSCAL release pinned by `OSCAL_REF`; the release notes and every document header name it.
- The changelog groups merged pull requests by release tag, so the squash-commit subject of each pull request (`ID: summary (#n)`) is its changelog entry.

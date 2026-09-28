# Progress

Tracks work against [`docs/PRD.md`](docs/PRD.md). Update at the end of each task.

## Current phase: 1 Launch foundation

Done: CTRL-01, CTRL-02, CTRL-03, LINK-03, PRES-04, QA-04, QA-02, LINK-01, NAV-01 (control ids; template titles in Phase 2), PRES-01, PRES-03, QA-01 (Phase 1 scope; the kit build step joins CI in Phase 2).

Next up, in this order (one requirement per branch and PR):

1. ~~**QA-04** Front matter validation~~ (done)
2. ~~**QA-02** Markdown lint~~ (done; completes QA-01)
3. ~~**LINK-01** Referenced by~~ (done)
4. ~~**NAV-01** Search for control ids~~ (done)
5. ~~**PRES-01** Social preview images~~ (done)
6. ~~**PRES-03** Accessibility check~~ (done)

Then stop for the Phase 1 owner review (home and About), before Phase 2 (template system).

## Log

| ID | Status | Date | Notes |
| --- | --- | --- | --- |
| LINK-03 | Done | 2026-09-27 | `scripts/check-links.mjs` (`npm run check:links`) fails on missing pages and `#anchors`; runs in `.github/workflows/check.yml` |
| CTRL-01 | Done | 2026-09-28 | Generator keeps hand-set front matter keys (anything but `title`, `description`, `sidebar`, `control`); `guidance` and `reviewed` added to the content schema |
| CTRL-02 | Done | 2026-09-28 | Generator idempotent; NIST source pinned to oscal-content v1.5.0 (release 5.2.0); CI fails if regenerating changes any page |
| CTRL-03 | Done | 2026-09-28 | `npm test` (node:test, fixture catalog, no network): 17 tests for parameters, withdrawn controls, markers, front matter merge, idempotency. Fixed doubled "organization-defined organization-defined" in 121 places |
| QA-01 | Done | 2026-09-28 | `check.yml` runs tests, lint, generated-page check, build and link check on every PR. The PRD also lists the kit build; add that step when the kit exists (Phase 2) |
| — | Done | 2026-09-27 | Fixed home page links that 404'd under the `/nist-guide/` base path (hero, step strip, cards) |
| — | Done | 2026-09-27 | Repo hardening: `main` ruleset (PR + required check), SHA-pinned actions, least-privilege workflow permissions, Dependabot |
| PRES-03 | Done | 2026-09-28 | Owner chose `pa11y-ci` (dev dependency). `npm run check:a11y` (CI) serves the build and runs axe on home, About, a step page (Prepare), a control page (AC-2) and the industries index, in light and dark themes; fails on serious or critical issues. First run found 11 unlabelled task-list checkboxes on Prepare (51 across the seven step pages): fixed with a rehype plugin that wraps each in a `<label>`. Add a template page and an industry guide to `.pa11yci.json` when they exist. `npm audit` flags `extract-zip` (used only by Puppeteer to unpack its Chrome download); dev only |
| PRES-01 | Done | 2026-09-28 | Owner chose a branded default over per-page images. `public/og-default.png` (1200x630, Source Serif 4 and Public Sans, theme teal) made by `npm run og-image` with sharp (no new dependency) and committed; `og:image`, size, alt and `twitter:image` on every page via Starlight `head`. Starlight already sets og:title and og:site_name |
| NAV-01 | Done (control ids) | 2026-09-28 | Pagefind drops punctuation, so "AC-2(3)" matched AC-23 first. A rehype plugin adds a hidden token (`ac2e3`) after each of the 714 enhancement headings; a Vite alias wraps `@pagefind/default-ui` so the search box rewrites enhancement ids to the token and strips it from excerpts. `npm run check:search` (CI) checks 12 queries and that the wrapper is in the bundle. The PRD's "incident response plan returns the template first" case waits for templates (Phase 2): add it to `scripts/check-search.mjs` then |
| LINK-01 | Done | 2026-09-28 | `MarkdownContent` override adds "Referenced by" to control pages from any page's `controls` front matter (templates, SSDF, industries, technology, then other pages); enhancement-only citations are named, for example "(IA-2(1))". Hidden when nothing refers to the control. Logic in `src/lib/references.ts`, 4 tests |
| QA-02 | Done | 2026-09-28 | `markdownlint-cli2` (`npm run lint`, config `.markdownlint-cli2.jsonc`) in CI. Line length, inline HTML and table column style off. Generator wraps the NIST block in `markdownlint-disable`/`restore` so only hand-written content is linted. Fixed tabs in `index.mdx`, a README code fence, two PRD pseudo-headings |
| QA-04 | Done | 2026-09-28 | Schema rejects unknown or withdrawn `controls` ids (checked against `src/data/control-ids.json`, 1,014 active ids written by `npm run controls` and covered by the CI diff check) and malformed `industries`/`technologies` slugs; rules documented on the Page templates page |
| PRES-04 | Done | 2026-09-28 | Name, bio (AI security lead, CISSP) and LinkedIn on About and home; LinkedIn in header; "Your Name" replaced everywhere. Headshot optional; add if the owner provides one |
| — | Done | 2026-09-27 | PRD version 2: template system, artifact catalog, program path, SSDF; phases reordered |

## Open questions

From the PRD, still open:

- [x] Name, short bio and LinkedIn URL for the About page (2026-09-28)
- [ ] Headshot for the About page
- [ ] Name the current employer in the bio? (optional; left out for now)
- [x] GitHub username: `kston83`; site is at `https://kston83.github.io/nist-guide/`
- [ ] Custom domain now or later
- [x] Site title: keep "RMF Field Guide" for now; may change later (2026-09-28)
- [x] Template license: CC0 1.0 for templates and the kit (2026-09-27)
- [x] Packaging: free kit only; revisit if it becomes something to sell (2026-09-27)
- [x] Template voice: any organization, federal-only requirements in `:::federal` sections (2026-09-27)
- [x] `.docx` tool: pandoc, pinned, in CI (2026-09-27)
- [x] Employer publishing policy: no issues (2026-09-28)
- [ ] Which three industries to cover first (proposed: defense, healthcare, financial services)
- [ ] Which four platforms to cover first (proposed: AWS, Azure, Microsoft 365 with Entra ID, Kubernetes)
- [ ] Privacy-friendly analytics: yes or no

# Progress

Tracks work against [`docs/PRD.md`](docs/PRD.md). Update at the end of each task.

| ID | Status | Date | Notes |
| --- | --- | --- | --- |
| LINK-03 | Done | 2026-09-27 | `scripts/check-links.mjs` (`npm run check:links`) fails on missing pages and `#anchors`; runs in `.github/workflows/check.yml` |
| CTRL-01 | Done | 2026-09-28 | Generator keeps hand-set front matter keys (anything but `title`, `description`, `sidebar`, `control`); `guidance` and `reviewed` added to the content schema |
| CTRL-02 | Done | 2026-09-28 | Generator idempotent; NIST source pinned to oscal-content v1.5.0 (release 5.2.0); CI fails if regenerating changes any page |
| CTRL-03 | Done | 2026-09-28 | `npm test` (node:test, fixture catalog, no network): 17 tests for parameters, withdrawn controls, markers, front matter merge, idempotency. Fixed doubled "organization-defined organization-defined" in 121 places |
| QA-01 | In progress | 2026-09-28 | `check.yml` runs tests, generated-page check, build and link check on every PR; add lint (QA-02) when it exists |
| — | Done | 2026-09-27 | Fixed home page links that 404'd under the `/nist-guide/` base path (hero, step strip, cards) |
| — | Done | 2026-09-27 | Repo hardening: `main` ruleset (PR + required check), SHA-pinned actions, least-privilege workflow permissions, Dependabot |
| PRES-04 | In progress | 2026-09-28 | Name, bio and LinkedIn on About and home; LinkedIn in header; "Your Name" replaced everywhere. Waiting on headshot |
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

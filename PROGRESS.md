# Progress

Tracks work against [`docs/PRD.md`](docs/PRD.md). Update at the end of each task.

| ID | Status | Date | Notes |
| --- | --- | --- | --- |
| LINK-03 | Done | 2026-09-27 | `scripts/check-links.mjs` (`npm run check:links`) fails on missing pages and `#anchors`; runs in `.github/workflows/check.yml` |
| QA-01 | In progress | 2026-09-27 | `check.yml` runs build and link check on every PR; add lint (QA-02) and tests (CTRL-03) when they exist |
| — | Done | 2026-09-27 | Fixed home page links that 404'd under the `/nist-guide/` base path (hero, step strip, cards) |
| — | Done | 2026-09-27 | Repo hardening: `main` ruleset (PR + required check), SHA-pinned actions, least-privilege workflow permissions, Dependabot |
| PRES-04 | In progress | 2026-09-28 | Name, bio and LinkedIn on About and home; LinkedIn in header; "Your Name" replaced everywhere. Waiting on headshot |
| — | Done | 2026-09-27 | PRD version 2: template system, artifact catalog, program path, SSDF; phases reordered |

## Open questions

From the PRD, still open:

- [x] Name, short bio and LinkedIn URL for the About page (2026-09-28)
- [ ] Headshot for the About page
- [ ] Name the current employer in the bio? Left out until the employer publishing-policy question is answered
- [x] GitHub username: `kston83`; site is at `https://kston83.github.io/nist-guide/`
- [ ] Custom domain now or later
- [ ] Site title: keep "RMF Field Guide" or choose another
- [x] Template license: CC0 1.0 for templates and the kit (2026-09-27)
- [x] Packaging: free kit only; revisit if it becomes something to sell (2026-09-27)
- [x] Template voice: any organization, federal-only requirements in `:::federal` sections (2026-09-27)
- [x] `.docx` tool: pandoc, pinned, in CI (2026-09-27)
- [ ] Any employer policy on publishing, such as a required disclaimer or pre-publication review
- [ ] Which three industries to cover first (proposed: defense, healthcare, financial services)
- [ ] Which four platforms to cover first (proposed: AWS, Azure, Microsoft 365 with Entra ID, Kubernetes)
- [ ] Privacy-friendly analytics: yes or no

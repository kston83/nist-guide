# Progress

Tracks work against [`docs/PRD.md`](docs/PRD.md). Update at the end of each task.

| ID | Status | Date | Notes |
| --- | --- | --- | --- |
| LINK-03 | Done | 2026-09-27 | `scripts/check-links.mjs` (`npm run check:links`) fails on missing pages and `#anchors`; runs in `.github/workflows/check.yml` |
| QA-01 | In progress | 2026-09-27 | `check.yml` runs build and link check on every PR; add lint (QA-02) and tests (CTRL-03) when they exist |
| — | Done | 2026-09-27 | Fixed home page links that 404'd under the `/nist-guide/` base path (hero, step strip, cards) |
| — | Done | 2026-09-27 | Repo hardening: `main` ruleset (PR + required check), SHA-pinned actions, least-privilege workflow permissions, Dependabot |
| — | Done | 2026-09-27 | PRD version 2: template system, artifact catalog, program path, SSDF; phases reordered |

## Open questions

From the PRD, still open:

- [ ] Name, short professional bio, headshot and LinkedIn URL for the About page
- [x] GitHub username: `kston83`; site is at `https://kston83.github.io/nist-guide/`
- [ ] Custom domain now or later
- [ ] Site title: keep "RMF Field Guide" or choose another
- [ ] Template license (proposed: CC0 or permissive, no attribution inside adopted documents)
- [ ] Packaging: free kit only, or a paid edition alongside it
- [ ] Template voice: neutral organization (proposed) or federal agency
- [ ] `.docx` tool: approve pandoc at a pinned version in CI
- [ ] Any employer policy on publishing, such as a required disclaimer or pre-publication review
- [ ] Which three industries to cover first (proposed: defense, healthcare, financial services)
- [ ] Which four platforms to cover first (proposed: AWS, Azure, Microsoft 365 with Entra ID, Kubernetes)
- [ ] Privacy-friendly analytics: yes or no

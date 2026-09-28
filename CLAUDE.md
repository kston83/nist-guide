# CLAUDE.md

This file mirrors the "Instructions for Claude Code" section of [`docs/PRD.md`](docs/PRD.md). The PRD is the source of truth for vision, scope, priorities and acceptance criteria. The site teaches the RMF and SP 800-53 **and** ships ready-to-adopt program templates (policies, plans, procedures, forms), with the SSDF folded in; see the PRD's Template system section.

## Getting oriented

1. Read `README.md`, `docs/PRD.md` and `src/content/docs/controls/ac/ac-2.md` (the guidance example) before changing anything. Once they exist, also read `templates/policy/_common.md` and `templates/policy/ac/ac-2.md` (the clause example).
2. Run `npm install`, `npm run controls` and `npm run build`. Confirm the build and `npm run check:links` are clean before starting work.
3. Work in phase order. Within a phase, do P1 requirements first.

## How to work

- One requirement or one content item per branch and commit, with the ID in the message, for example `CTRL-01: preserve hand-set front matter` or `TPL-03: assemble family policies`.
- `main` is protected: open a pull request; the Check workflow must pass before merge. The owner merges PRs; don't merge them yourself.
- Before every commit: `npm test` and `npm run build` pass, the link check passes (`npm run check:links`), and `npm run controls` produces no diff.
- Never edit between `<!-- nist:start -->` and `<!-- nist:end -->`. Change `scripts/import-oscal.mjs` instead, then regenerate. Never hand-edit generated template pages; change the source in `templates/`.
- Keep `PROGRESS.md` at the repo root: requirement ID, status, date, notes. Update it at the end of each task.
- Prefer small, reviewable changes over large rewrites. Do not rename folders or slugs; existing links depend on them.

## Writing content and templates

- Follow the PRD's Content requirements exactly, including Writing templates. Use AC-2 as the model for control guidance.
- Verify every factual claim about rules, versions, dates and program status against a primary source before writing it, and cite it on the page. Use web search when available.
- If a fact cannot be verified, write `<!-- TODO(verify): what and why -->` and add it to Open questions in `PROGRESS.md`. Do not guess.
- Set `guidance: draft` or `status: draft` on anything you write. Only the owner sets `reviewed`.
- Never base a template on a commercial template library or on any real organization's documents.
- Templates are CC0 and written for any organization. Put federal-only requirements in `:::federal` blocks, written as carefully as the body and citing the federal source.

## When to stop and ask the owner

- At the end of each phase, before starting the next.
- For anything personal: name, bio, photo, LinkedIn, custom domain, analytics choice.
- Before adding a dependency or build tool the PRD does not name, changing the visual design, or restructuring navigation.
- Before changing the template source format, variable syntax or license, since published kits depend on them.
- When sources conflict on a rule or date.

## Repo notes

- The site is served from the `/nist-guide/` subpath (`BASE_PATH` in `astro.config.mjs`). Root-relative links in Markdown content (`/rmf/roles/`) are rebased automatically by a rehype plugin. Links in `.astro` components and MDX component props (for example `<LinkCard href>`) are not: wrap them in `withBase()` from `src/lib/url.ts`. Starlight hero `actions` links are written relative to the home page (`rmf/`).
- NIST parameter IDs in OSCAL look like `ac-02_odp.01`; template variables reference them as `{{param:ac-02_odp.01}}`.
- GitHub Actions are pinned to full commit SHAs with the version in a trailing comment, and the repo only allows pinned, allow-listed actions. Dependabot proposes updates; keep new actions pinned the same way, add them to the allow list, and give each job the minimum `permissions`.

# CLAUDE.md

This file is copied from the "Instructions for Claude Code" section of [`docs/PRD.md`](docs/PRD.md). The PRD is the source of truth for scope, priorities and acceptance criteria.

## Getting oriented

1. Read `README.md`, `docs/PRD.md` and `src/content/docs/controls/ac/ac-2.md` (the guidance example) before changing anything.
2. Run `npm install`, `npm run controls` and `npm run build`. Confirm the build is clean before starting work.
3. Work in phase order. Within a phase, do P1 requirements first.

## How to work

- One requirement or one content item per branch and commit, with the ID in the message, for example `CTRL-01: preserve hand-set front matter`.
- Before every commit: `npm run build` passes, the link check passes (`npm run check:links`), and `npm run controls` produces no diff.
- Never edit between `<!-- nist:start -->` and `<!-- nist:end -->`. Change `scripts/import-oscal.mjs` instead, then regenerate.
- Keep a `PROGRESS.md` at the repo root: requirement ID, status, date, notes. Update it at the end of each task.
- Prefer small, reviewable changes over large rewrites. Do not rename folders or slugs; existing links depend on them.

## Writing content

- Follow Content requirements in the PRD exactly, and use AC-2 as the model for control guidance.
- Verify every factual claim about rules, versions, dates and program status against a primary source before writing it, and cite it on the page. Use web search when available.
- If a fact cannot be verified, write `<!-- TODO(verify): what and why -->` and add it to Open questions in `PROGRESS.md`. Do not guess.
- Set `guidance: draft` on anything you write. Only the owner sets `reviewed`.

## When to stop and ask the owner

- At the end of each phase, before starting the next.
- For anything personal: name, bio, photo, LinkedIn, custom domain, analytics choice.
- Before adding a dependency the PRD does not name, changing the visual design, or restructuring navigation.
- When sources conflict on a rule or date.

## Repo notes

- The site is served from the `/nist-guide/` subpath (`BASE_PATH` in `astro.config.mjs`). Root-relative links in Markdown content (`/rmf/roles/`) are rebased automatically by a rehype plugin. Links in `.astro` components and MDX component props (for example `<LinkCard href>`) are not: wrap them in `withBase()` from `src/lib/url.ts`. Starlight hero `actions` links are written relative to the home page (`rmf/`).
- `main` is protected: changes land through pull requests, and the `Check` workflow (build + link check) must pass before merge.
- GitHub Actions are pinned to full commit SHAs with the version in a trailing comment. Dependabot proposes updates; keep new actions pinned the same way and give each job the minimum `permissions`.

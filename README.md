# RMF Field Guide

A practitioner's guide to applying the NIST Risk Management Framework and SP 800-53 controls to real systems, by Kristopher Stone. It is a research project: most, if not all, of its content is written by Claude Opus 5.5 working in Claude Code, directed and reviewed by the owner (see the [About](https://kston83.github.io/nist-guide/about/) page). Built with [Astro Starlight](https://starlight.astro.build) and published on GitHub Pages at <https://kston83.github.io/nist-guide/>.

Scope, priorities and roadmap are in [`docs/PRD.md`](docs/PRD.md); how the site and the template kit are built is in [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md); progress is in [`PROGRESS.md`](PROGRESS.md), with the log in [`docs/progress-log.md`](docs/progress-log.md) and the sources checked in [`docs/sources.md`](docs/sources.md). [`CLAUDE.md`](CLAUDE.md) holds the working rules for Claude Code sessions.

## Roadmap

The guide is a practical guidebook to two NIST frameworks: the Risk Management Framework (RMF) with SP 800-53, and the AI Risk Management Framework (AI RMF). For each, it helps an organization **learn, build and prove** its program: it explains what the framework asks, and ships the policies, plans, standards and forms to act on it as a versioned, CC0 template kit. It is written for any organization, with federal requirements marked. The public [Roadmap](https://kston83.github.io/nist-guide/reference/roadmap/) page shows where the work stands; update it at the end of each phase.

| Phase | Scope | Kit | Status |
| --- | --- | --- | --- |
| 1 Launch foundation | Public site, generated control pages, CI checks | | Done |
| 2 Template system and first kit | Template pipeline, 31 priority controls, five family policies, SSP, IR plan, POA&M | v1.0.0 | Done |
| 3 Full program kit | All 20 family policies, the consolidated policy, every catalog artifact, guidance for every Moderate, program management and privacy control, the program path | v2.0.0 | In progress |
| 4 Methods and the SSDF | NIST implementation guidance on control pages, starting with the SSDF | v2.1.0 | Planned |
| 5 AI RMF and AI security | The second guidebook: applying the AI RMF, securing AI systems through the RMF, NIST and OWASP AI security guidance, AI templates | v2.2.0 | Planned |
| 6 Industries and technology | Three industry guides, four technology playbooks, articles | | Planned |
| 7 Depth | Guidance for High controls, High clauses, crosswalks, automation | | Planned |

## How it's published

`main` is protected and squash-merge only. Changes land through a pull request, and the **Check** workflow must pass before merge: tests, lint and spelling, a check that generated pages are current, the build with the template kit, and the link, search and accessibility checks. The owner merges pull requests. Each merge to `main` runs **Deploy to GitHub Pages**, which rebuilds and republishes the site in about a minute. Site address settings (`GITHUB_USER`, `REPO_NAME`, `SITE_URL`, `BASE_PATH`) are at the top of `astro.config.mjs`.

## Work on it locally

Requires [Node.js](https://nodejs.org) 22.12 or later (Astro's minimum; CI uses Node 24). Word (`.docx`) downloads also need [pandoc](https://pandoc.org) 3.11, the version CI pins: put it on your `PATH` or set `PANDOC` to its path. Without it the build still passes but skips the `.docx` files.

```sh
npm install          # once
npm run dev          # live preview at http://localhost:4321
npm run build        # site and template kit into dist/ (fails if a control page with guidance: set hides it)
npm run preview      # serve the built dist/ locally
npm run check:links  # after a build: fail on broken internal links or anchors
npm run check:search # after a build: every control id, and sample enhancement ids, find their page first
npm run check:a11y   # after a build: axe finds no serious or critical issues (.pa11yci.json lists the pages)
npm test             # unit tests for the generators and template system (fixtures, no network)
npm run lint         # markdown lint, template lint and spell check (cspell-words.txt is the dictionary)
npm run controls     # regenerate control pages from the pinned NIST catalog; should produce no git diff
npm run templates    # regenerate template pages from templates/; run after changing a source, and commit the result
npm run kit          # build only the downloadable kit into dist/downloads
npm run og-image     # remake the social preview image, public/og-default.png
npm run reference-docx # remake templates/reference.docx, the Word styles for the kit
```

## Where things live

```text
src/content/docs/
  index.mdx            Home page
  about.md             About the guide and author
  program/             Build your program: the four stages (Foundation to Mature)
  rmf/                 The framework: overview, roles, ATO package, program variants
    steps/             One page per RMF step (0 Prepare to 6 Monitor)
  controls/            SP 800-53 control pages, generated (see below)
    ac/index.md        Family hub, generated
    ac/ac-2.md         One file per control, grouped by family
    baselines/         Low, Moderate, High and Privacy lists, generated
    coverage.mdx       Guidance and policy-clause status, built at build time
  templates/           Template pages, generated from templates/ (never edit by hand)
  industries/          Industry guides (planned)
  technology/          Technology playbooks (planned)
  reference/           Library, glossary, page templates, roadmap, changelog (generated, not committed)
templates/             Template sources: policy clauses, plans, standards, forms, reports (CC0)
src/data/              catalog.json and control-ids.json, generated from NIST's catalog
src/components/        Astro components that add sections to control and program pages
src/lib/               Template system (schema, assembly, editions, variables, worksheets) and site helpers
src/content.config.ts  Content collections and front matter validation
scripts/               Generators (import-oscal, build-templates, build-changelog) and checks (check-*)
scripts/lib/           Logic for the scripts, tested in scripts/test/
public/diagrams/       SVG diagrams used in pages
.github/workflows/     Check, Deploy to GitHub Pages, Release kit
astro.config.mjs       Site settings, base path and sidebar
src/styles/theme.css   Colors and typefaces
```

[`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) explains how these fit together.

## Writing guidance

- **New pages** are Markdown files. Put them in the right folder and they appear in the sidebar automatically. Templates for industry guides, technology playbooks and control guidance are on the site at *Reference → Page templates*.
- **Control guidance** goes at the bottom of each control's file, below `<!-- guidance: write below this line -->`. Never edit between `<!-- nist:start -->` and `<!-- nist:end -->`; that part is regenerated. `controls/ac/ac-2.md` is the worked example. Add `guidance: draft` to the front matter when you write guidance; the generator keeps any front matter key other than `title`, `description`, `sidebar` and `control`.
- **Links** between pages use site paths, for example `[AC-2](/controls/ac/ac-2/)` or `[Assess](/rmf/steps/assess/)`. Enhancements have anchors: `/controls/si/si-2/#si-2.7`.
  Markdown links are rebased onto the site base path automatically. In `.astro` components and MDX component props (such as `<LinkCard href>`), wrap paths in `withBase()` from `src/lib/url.ts`.
- **Templates** are written in `templates/`, never in `src/content/docs/templates/`. A policy clause is one file per control, `templates/policy/<family>/<control>.md` (`templates/policy/ac/ac-2.md` is the example), and the shared policy sections are in `templates/policy/_common.md`. Plans, standards, forms and reports go in their type's folder. The format, front matter and fill-in variables (`{{org:...}}`, `{{param:...}}`, `{{fill:...}}`) are defined in the PRD's [Template system](docs/PRD.md#template-system) section. After changing a source, run `npm run templates` and commit the regenerated pages.
- **Contributing:** `main` is protected. Open a pull request; the **Check** workflow must pass before merge. Before you push, run `npm test`, `npm run lint`, `npm run build` and `npm run check:links`, and check that `npm run controls` and `npm run templates` leave no diff. See `CLAUDE.md` and `docs/PRD.md`.

## Refreshing the NIST control text

The generator reads NIST's [oscal-content](https://github.com/usnistgov/oscal-content) repository at a pinned commit (`OSCAL_REF` in `scripts/import-oscal.mjs`), so every machine and CI run produces the same pages. When NIST publishes a new SP 800-53 release:

1. Set `OSCAL_REF` to the commit of the new oscal-content release tag.
2. Run `npm run controls -- --refresh` to download it and rewrite the generated part of every control page, the family hubs and baseline pages, and the data files (`src/data/catalog.json` and `src/data/control-ids.json`). Guidance sections and hand-set front matter are kept.
3. Run `npm run templates`: parameter labels and baseline membership in the template pages come from `catalog.json`. Then run the full build, which fails on any clause whose control or parameter no longer exists.
4. Review the changes with `git diff` and open a pull request.

## Releasing the template kit

Kit versions follow `version` in `package.json`, which every document prints.

1. In a pull request, set the new version in `package.json` (for example with `npm version 1.1.0 --no-git-tag-version`), run `npm run templates`, and merge.
2. Tag the merge commit on `main` and push the tag: `git tag v1.1.0 origin/main` and `git push origin v1.1.0`.
3. The **Release kit** workflow checks the tag is on `main` and matches `package.json`, builds the kit, and publishes a GitHub Release with the full kit, starter kits and family packs. Its notes are the changelog section for the tag (`node scripts/build-changelog.mjs --notes v1.1.0`).

## Using a custom domain later

1. Buy the domain and add it under **Settings → Pages → Custom domain** in the repository.
2. Create `public/CNAME` containing just the domain, for example `rmfguide.com`.
3. In `astro.config.mjs`, set `SITE_URL` to `https://rmfguide.com`.
4. Follow GitHub's DNS instructions on the same Settings page, then tick **Enforce HTTPS** once it's available.
5. Update `URL` in `scripts/make-og-image.mjs`, run `npm run og-image` and commit the new `public/og-default.png` (the social preview image shows the address).

## License

Original content: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Program templates (`templates/`, the template pages built from them and the downloadable kit): [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/), so organizations can adopt them without attribution. Code: MIT. NIST control text is a U.S. government work in the public domain. See `LICENSE`.

# RMF Field Guide

A practitioner's guide to applying the NIST Risk Management Framework and SP 800-53 controls to real systems, by Kristopher Stone. Built with [Astro Starlight](https://starlight.astro.build) and published on GitHub Pages at <https://kston83.github.io/nist-guide/>.

Scope, priorities and roadmap are in [`docs/PRD.md`](docs/PRD.md); progress is in [`PROGRESS.md`](PROGRESS.md).

## How it's published

`main` is protected. Changes land through a pull request, and the **Check** workflow (build and link check) must pass before merge. Each merge to `main` runs **Deploy to GitHub Pages**, which rebuilds and republishes the site in about a minute. Site address settings (`GITHUB_USER`, `REPO_NAME`, `SITE_URL`, `BASE_PATH`) are at the top of `astro.config.mjs`.

## Work on it locally

Requires [Node.js](https://nodejs.org) 22 or later.

```sh
npm install        # once
npm run dev        # live preview at http://localhost:4321
npm run build      # full production build into dist/
npm run check:links  # after a build: fail on broken internal links or anchors
```

## Where things live

```
src/content/docs/
  index.mdx            Home page
  about.md             About the guide and author
  rmf/                 The framework: overview, roles, ATO package, program variants
    steps/             One page per RMF step (0 Prepare to 6 Monitor)
  controls/            SP 800-53 control pages, generated (see below)
    ac/ac-2.md         One file per control, grouped by family
  industries/          Industry guides
  technology/          Technology playbooks
  reference/           Library, glossary, page templates
public/diagrams/       SVG diagrams used in pages
scripts/import-oscal.mjs   Generates the control pages from NIST's OSCAL catalog
astro.config.mjs       Site settings and sidebar
src/styles/theme.css   Colours and typefaces
```

## Writing guidance

- **New pages** are Markdown files. Put them in the right folder and they appear in the sidebar automatically. Templates for industry guides, technology playbooks and control guidance are on the site at *Reference → Page templates*.
- **Control guidance** goes at the bottom of each control's file, below `<!-- guidance: write below this line -->`. Never edit between `<!-- nist:start -->` and `<!-- nist:end -->`; that part is regenerated. `controls/ac/ac-2.md` is the worked example.
- **Links** between pages use site paths, for example `[AC-2](/controls/ac/ac-2/)` or `[Assess](/rmf/steps/assess/)`. Enhancements have anchors: `/controls/si/si-2/#si-2.7`.
  Markdown links are rebased onto the site base path automatically. In `.astro` components and MDX component props (such as `<LinkCard href>`), wrap paths in `withBase()` from `src/lib/url.ts`.
- **Contributing:** `main` is protected. Open a pull request; the **Check** workflow (build + link check) must pass before merge. See `CLAUDE.md` and `docs/PRD.md`.

## Refreshing the NIST control text

When NIST publishes a new SP 800-53 release:

```sh
npm run controls -- --refresh
```

This downloads the latest catalog and baselines from NIST's [oscal-content](https://github.com/usnistgov/oscal-content) repository and rewrites the generated part of every control page. Your guidance sections are kept. Review the changes with `git diff` before committing.

## Using a custom domain later

1. Buy the domain and add it under **Settings → Pages → Custom domain** in the repository.
2. Create `public/CNAME` containing just the domain, for example `rmfguide.com`.
3. In `astro.config.mjs`, set `SITE_URL` to `https://rmfguide.com`.
4. Follow GitHub's DNS instructions on the same Settings page, then tick **Enforce HTTPS** once it's available.

## License

Original content: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Code: MIT. NIST control text is a U.S. government work in the public domain. See `LICENSE`.

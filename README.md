# RMF Field Guide

A practitioner's guide to applying the NIST Risk Management Framework and SP 800-53 controls to real systems. Built with [Astro Starlight](https://starlight.astro.build) and published on GitHub Pages.

## Publish it (one time, about 10 minutes)

1. **Create the repository.** On GitHub, create a new public repository named exactly `<your-username>.github.io`. This name makes the site appear at `https://<your-username>.github.io`.
2. **Set your username.** In `astro.config.mjs`, change `GITHUB_USER` to your GitHub username. Replace "Your Name" in `src/content/docs/index.mdx`, `src/content/docs/about.md` and `LICENSE`.
3. **Push the code.**
   ```sh
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
4. **Turn on Pages.** In the repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
5. **Wait for the first deploy.** The **Actions** tab shows the "Deploy to GitHub Pages" run. When it finishes (about two minutes), the site is live.

Every later push to `main` rebuilds and republishes the site automatically.

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

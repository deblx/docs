# Documentation Development

This repository uses VitePress.

## Local preview

- Install dependencies: `npm install`
- Run locally: `npm run dev`
- Build: `npm run docs:build`
- Preview the build: `npm run preview`

The source files are in `docs/`. The theme configuration is in `docs/.vitepress/`. Documentation updates can be made directly through GitHub using the edit link on each article.

## Publishing

The `vitepress-migration` branch is used for migration and build validation. It never deploys to GitHub Pages.

After reviewing the migration and verifying the 17 original articles, merge to `main`. Keep GitHub Pages set to **Deploy from a branch → gh-pages / (root)**. Production is published through `peaceiris/actions-gh-pages`, preserving existing project-site setup. The current live site is https://deblx.github.io/docs/. A later custom-domain cutover requires updating the VitePress production base to `/`, then configuring GitHub Pages custom-domain settings and Cloudflare DNS.

The GitHub Actions build publishes from `main` only. The current production base path is `/docs/` for the GitHub Pages project site. Before using `docs.deblx.com`, set the base to `/` and change canonical / sitemap hostnames.

Generate and commit an updated `package-lock.json` using `npm install` before the production cutover. After the lockfile is updated, switch the workflow install command to `npm ci` for reproducible deployments.

## Content checks

Run `npm run check` for a page inventory check and `npm run docs:build` for static rendering and internal-link validation.

Older article content has been preserved during the first migration pass; technical facts about current plugin versions should be reviewed before public cutover.

## Dependency maintenance

Dependabot checks npm dependencies daily and GitHub Actions weekly. Patch and minor dependency pull requests are eligible for GitHub auto-merge after required status checks pass; major updates stay for manual review. GitHub repository settings must allow auto-merge and protect the main branch with required VitePress CI checks. Without those repository settings, the auto-merge workflow cannot complete automatically.

Install dependencies using `npm ci` for reproducible builds. The repository's `package-lock.json` is committed and must be updated alongside dependency versions. No WordPress installation or WordPress plugins are involved in this documentation website.

## Automatic dependency upgrades

Dependabot checks npm dependencies daily and GitHub Actions weekly, including major releases. The merge workflow waits for a successful **Build and Deploy Documentation** pull-request run, verifies the exact Dependabot head commit and merges it directly into `main`. The resulting push builds and deploys the updated docs automatically. Failed builds are not automatically merged. This does not depend on the repository's `Allow auto-merge` setting.

For major upgrades, technical build success is not a complete substitute for visual and functional validation; monitor GitHub Actions notifications and roll back if regressions appear.

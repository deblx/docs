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

After reviewing the migration and verifying the 17 original articles, merge to `main`. To use GitHub Pages deployments through Actions, set **Settings → Pages → Build and deployment → Source → GitHub Actions**. Set the custom domain to `docs.deblx.com` and configure the corresponding DNS CNAME at your DNS provider only after the Pages domain is secured.

The GitHub Actions build publishes from `main` only. The target VitePress base path is `/` because the site will use a dedicated hostname.

Generate and commit an updated `package-lock.json` using `npm install` before the production cutover. After the lockfile is updated, switch the workflow install command to `npm ci` for reproducible deployments.

## Content checks

Run `npm run check` for a page inventory check and `npm run docs:build` for static rendering and internal-link validation.

Older article content has been preserved during the first migration pass; technical facts about current plugin versions should be reviewed before public cutover.

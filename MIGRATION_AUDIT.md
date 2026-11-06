# Deblx documentation – Migration audit

Repository: https://github.com/deblx/docs
Current public site: https://deblx.github.io/docs/
Target: https://docs.deblx.com/
Reference for visual design: https://docs.voxelplugin.com/

> Scope: source inventory and migration design. This audit is committed only to the `vitepress-migration` branch. It does not replace or deploy the production site.

## Source inventory

- Current framework: Docusaurus 3 (package.json and docusaurus.config.js).
- Default branch: main; existing GitHub Pages Action is `.github/workflows/deploy.yml`.
- **17 documentation Markdown articles in `docs/`**: 2 general, 4 Loading Screen Pro, 4 Quick Notes, 4 Duplicate Asset Detector Pro, 3 Asset Size Analyzer.
- One extra Docusaurus sample page: `src/pages/markdown-page.md` (not in the documentation sidebar). Review/remove intentionally as template-only content.
- **No Markdown-embedded screenshots or image references in any of the 17 articles.** Existing `static/img/` consists of generic Docusaurus branding/illustrations (logo.svg, favicon.ico, docusaurus-social-card.jpg, docusaurus.png, three undraw illustrations); no product-specific screenshot files detected.
- The only fenced example is the Discord verification message. No existing C++/Blueprint code samples in article Markdown.
- Internal Markdown links in `docs/intro.md` target the four product overview routes. Existing external Markdown link targets are seller page and two Discord invitations; external link availability has not been exhaustively tested.
- All 17 Markdown articles have been inspected. No published files have been changed.

## Page-by-page migration map

Keep existing product slugs; change host and remove the old /docs base path. Configure VitePress `base: '/'`, `cleanUrls: true`, and Nginx HTML fallback. Canonical target paths below are proposed, pending build verification.

| Source Markdown | Expected old path after /docs/ | Proposed new path |
|---|---|---|
| docs/intro.md (slug: /) | / | / |
| docs/verification.md | /verification | /verification |
| docs/loading-screen-pro/index.md | /loading-screen-pro/ | /loading-screen-pro/ |
| docs/loading-screen-pro/installation.md | /loading-screen-pro/installation | /loading-screen-pro/installation |
| docs/loading-screen-pro/features.md | /loading-screen-pro/features | /loading-screen-pro/features |
| docs/loading-screen-pro/usage.md | /loading-screen-pro/usage | /loading-screen-pro/usage |
| docs/quick-notes/index.md | /quick-notes/ | /quick-notes/ |
| docs/quick-notes/installation.md | /quick-notes/installation | /quick-notes/installation |
| docs/quick-notes/features.md | /quick-notes/features | /quick-notes/features |
| docs/quick-notes/usage.md | /quick-notes/usage | /quick-notes/usage |
| docs/duplicate-asset-detector/index.md | /duplicate-asset-detector/ | /duplicate-asset-detector/ |
| docs/duplicate-asset-detector/installation.md | /duplicate-asset-detector/installation | /duplicate-asset-detector/installation |
| docs/duplicate-asset-detector/features.md | /duplicate-asset-detector/features | /duplicate-asset-detector/features |
| docs/duplicate-asset-detector/usage.md | /duplicate-asset-detector/usage | /duplicate-asset-detector/usage |
| docs/asset-size-analyzer/index.md | /asset-size-analyzer/ | /asset-size-analyzer/ |
| docs/asset-size-analyzer/installation.md | /asset-size-analyzer/installation | /asset-size-analyzer/installation |
| docs/asset-size-analyzer/usage.md | /asset-size-analyzer/usage | /asset-size-analyzer/usage |

The old GitHub Pages hostname cannot be given an HTTP 301 directly by Nginx on the Deblx VPS. Choose legacy GitHub Pages redirect stubs (HTML/JS + canonical) or keep an accessible archive, and test both hostname paths and anchor fragments.

## Existing content requiring editorial/technical verification

1. **Engine versions:** Installation guides list UE 5.7 or older, while supported versions may now include 5.8. Check each Fab listing/releases before editing.
2. **Loading Screen Pro:** Feature page says Quick Setup creates `Content/LoadingScreenPro/DA_DefaultLoadingScreen`, while Usage says `Content/DA_LoadingScreen`. Usage says both "Press Play" and loading screens work only in packaged builds / Launch, not PIE.
3. **Duplicate Asset Detector:** Landing page claims AI-powered recommendations and asset health scoring; these do not appear in the detailed feature documentation. Verify or remove unsupported claims. Validate export formats (CSV/Excel/JSON), hash matching specifics, and cleanup safety claims against plugin code.
4. **Discord verification:** The page names only Duplicate Asset Detector Pro and Quick Notes Pro as requiring verification, despite listing other Pro products. Validate whether purchases are actually verified, the workflow, and the data-retention promise. Align with the current support process.
5. **Asset Size Analyzer:** Verification page calls it free; verify current pricing. The detailed docs have no separate Features page, although features are covered in the overview.
6. **Discord/contact URLs:** Article links use invite URLs; README references `discord-dev.deblx.com` and `discord.deblx.com`. Use a single verified canonical URL for each community.
7. **UI naming consistency:** References to menus, data assets, context actions and platform support must be checked against current UE plugin versions.
8. **Existing broken links:** `onBrokenLinks: 'ignore'` is configured in Docusaurus; enable strict checks during VitePress migration. Do not assume links are currently valid.

## Migration implementation plan

1. Create VitePress configuration on a non-production branch and preserve every Markdown article. Convert `docs/intro.md` to `docs/index.md` while keeping its full content, adjust Docusaurus-specific frontmatter, and preserve other Markdown paths.
2. Apply responsive Voxel-inspired documentation layout: left nested product navigation, right page TOC, centered content, local search, system-aware dark mode, Deblx branding, concise nav/footer, edit links and last-updated labels. Prefer stable VitePress for production.
3. Add screenshot assets only when trustworthy real captures are available. Do not invent plugin UI images or delete existing binary assets before reviewing them.
4. Split existing troubleshooting into dedicated pages per plugin where helpful; preserve text and headings or add anchor compatibility redirects. Add FAQ only where substantiated by content.
5. Add local `npm` build scripts, VitePress-specific Dependabot grouping, markdown/links checks, CI pull-request build, automatic post-merge deploy.
6. Host static output on Debian/VPS Nginx with Cloudflare in front, using short-lived read-only GitHub deploy credentials (or Cloudflare Pages if chosen later). Avoid hosting a Node dev server on production.
7. Set `docs.deblx.com` canonical URLs, sitemap, robots.txt, metadata, favicon, HTTPS, CSP/security headers. Test staging before cutover.
8. Validate 17/17 page mapping, all headings/anchors, assets, search, edit links, mobile viewport, light/dark mode, redirects, and SEO. Preserve original Git history and do not modify `main` until approved.

## Acceptance criteria

- 17/17 original article contents are present in the new site (no silent loss).
- Existing product routes and internal navigation resolve correctly at the new hostname.
- Search and GitHub edit links work on all article pages.
- A clean build passes with zero broken internal Markdown links.
- Deployment runs from main only after the staged migration is validated.
- Existing GitHub Pages documentation remains available until the new production site is live.

# Deblx Docs – Domain Cutover

This branch prepares the documentation for `docs.deblx.com`. **Do not merge before GitHub Pages and DNS are configured and ready**: merging changes the VitePress production base path from `/docs/` to `/` and updates canonical URLs.

## Existing site

- Current: https://deblx.github.io/docs/
- Target: https://docs.deblx.com/
- Source: public repository `deblx/docs`, branch `main`
- Publishing: GitHub Actions builds static files and publishes to the `gh-pages` branch.
- Preview source: `vitepress-migration` (until that branch is retired).

## Coordinated cutover

1. Verify ownership of `deblx.com` in GitHub Pages' domain verification settings if possible.
2. In **deblx/docs → Settings → Pages**, keep **Deploy from a branch → gh-pages / (root)** and set **Custom domain** to `docs.deblx.com`. Save before changing DNS.
3. In **Cloudflare → deblx.com → DNS**, add/update this record:
   - Type: `CNAME`
   - Name: `docs`
   - Target: `deblx.github.io` (never append `/docs`)
   - Proxy status: **DNS only** initially
   - TTL: Auto
   Remove conflicting `docs` A/AAAA/CNAME records.
4. Wait for Pages DNS verification / certificate issuance. Enable **Enforce HTTPS** when available. Check `https://docs.deblx.com/` and GitHub Pages configuration before merging.
5. Merge the domain branch. Its deployment publishes a root-based VitePress build, `CNAME`, canonical URLs and sitemap for the custom domain.
6. Validate the home page, plugin paths, images, local search, external link icons, sitemap, and GitHub edit links. Confirm that the original `deblx.github.io/docs/` URL redirects correctly.
7. After HTTPS works reliably, optionally switch Cloudflare to **Proxied**. Use **Full (strict)** SSL/TLS, retain HTTPS, and check that Cloudflare caching/bot rules do not break client-side navigation. Review actual cookies and privacy disclosure when proxying.

The main repository's custom-domain setting is not editable through the connected GitHub content tools. The Cloudflare DNS record also requires access to the user's Cloudflare dashboard.

## Validation

```bash
npm ci
npm run check
npm run docs:build
```

Pull requests must build without being deployed. No additional paid hosting is needed.

## Dependency maintenance

Dependabot checks npm daily and GitHub Actions weekly, including major upgrades. The merge workflow is configured to merge approved-by-build Dependabot updates; successful end-to-end automated dependency merging is not yet verified. Monitor the workflow and security alerts.

## Security and privacy

The published site is static. No analytics or advertising scripts are configured by the documentation. GitHub Pages and optionally Cloudflare serve requests. See [Deblx Privacy Policy](https://deblx.com/privacy-policy). Recheck cookies after turning on Cloudflare proxy.

## Informational privacy notice

The website displays a lightweight, English informational banner about strictly necessary cookies and local storage. It is not a tracking-consent manager. A dismissed banner is remembered in localStorage; the page includes no analytics or advertising scripts. The full privacy policy is at https://deblx.com/privacy-policy.

## Dependabot verification and fallback

The trusted merge workflow listens for successful Dependabot PR builds and checks the exact head SHA, PR author, repository and base branch. It additionally scans open Dependabot PRs once per day, so an event failure is less likely to leave them open indefinitely. Patch, minor and stable major updates all qualify; prerelease versions are not automatically requested. A failed build is never auto-merged. GitHub Actions must grant the workflow a write-capable token, and branch protection may impose extra merge requirements.

The documentation is built statically. Build-time development-tool advisories may remain until VitePress upstream releases compatible fixes; do not force unsupported Vite overrides solely to silence advisory counts.

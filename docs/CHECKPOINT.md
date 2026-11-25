# VELYQUA — Safe Checkpoint / Resume Notes

**Saved 25 November 2026 · resume by reading this file first.**

## What is live

- Marketing production (Vercel): https://velyqua-website.vercel.app/
- Marketing preview (GitHub Pages): https://andrewlamsingapore.github.io/velyqua-website/
- AI platform production (unchanged): https://velyqua.vercel.app/

## Repos

- `AndrewLamSingapore/velyqua-website` — marketing site (`main` green; CI + E2E + Dependabot configured).
- `AndrewLamSingapore/velyqua` — AI platform (`main` includes merged PR #111: shared tokens + return link).

## Done and verified

- Unified subdomain architecture decided (`app.velyqua.com`, not `/app` — documented in `docs/UNIFICATION.md`).
- Playwright 10/10 against production; no console errors; no overflow; SEO/social/robots/sitemap present.
- Analytics + Speed Insights mounted; security headers set; E2E Vercel-only-script false-failure fixed.
- Shared design tokens live in both codebases; app return navigation merged.
- Stale/broken PRs closed; Dependabot major-bump ignores added.

## Remaining (owner-gated)

1. Vercel: add `velyqua.com` and `app.velyqua.com` domains (see `docs/SUPABASE-AND-DOMAIN.md`).
2. Supabase: update Auth Site URL + Redirect URLs for `app.velyqua.com`.
3. DNS cutover only after preview testing is approved.
4. Decide on app docs PRs #107, #108, #109.
5. Execute `VELYQUA-Visual-Enhancement-Plan.md` when resumed.

## Local workspace

- Source: `outputs/velyqua-website/` (committed to GitHub).
- Reference clone: `work/velyqua-sweep/` (app repo; local branch `unify/design-system` was merged and deleted remotely — reset to `main` when next needed).

## Final pass (25 Nov) — everything verified end to end

- App return navigation now targets the **live** marketing URL (`https://velyqua-website.vercel.app/`) via merged PR #112; verified by Playwright: clicking "VELYQUA home" opens the marketing production site.
- Marketing `NEXT_PUBLIC_SITE_URL` default changed to the live Vercel URL, so canonical/OG/sitemap/robots match reality until `velyqua.com` is cut over.
- React group update (react + react-dom 19.3.1) merged (PR #15); Playwright 10/10 against production after the upgrade.
- Stale/broken PRs closed; orphaned Dependabot branches deleted; both repos now have clean PR/branch state.
- App production revision verified as the latest merge commit; `/api/health` → `ok: true`.

# VELYQUA — Verified Deployment Report

**25 November 2026 · `DESKTOP-IPV4PH9` (Dell workstation)**

## Verified results

| Area | Result |
| --- | --- |
| Repository audit | Marketing site inspected as `AndrewLamSingapore/velyqua-website` (public, main); app inspected as `AndrewLamSingapore/velyqua` (untouched) |
| Secret exposure | 0 secret-scanning alerts on both repos; source scan found only env-var names and `.env.example` placeholders — no credentials committed |
| Build | `next build` passes with type checking on `main` (GitHub CI green) |
| Preview URL | Live at https://andrewlamsingapore.github.io/velyqua-website/ (GitHub Pages, static export) |
| Playwright | 10/10 passing locally; E2E workflow green on GitHub |
| Responsive | No horizontal overflow at 1440×900 and Pixel 7 (390×844) |
| Navigation | All section anchors and the "Open VELYQUA" app link verified |
| Accessibility | Single `h1`, landmark structure, labelled controls, `:focus-visible`, `prefers-reduced-motion` |
| SEO | Title/description, Open Graph, Twitter card, canonical, JSON-LD, `sitemap.xml`, `robots.txt` all present and resolvable |
| Design system | Canonical tokens in `design/tokens.json`; full spec in `docs/DESIGN-SYSTEM.md` |
| Monitoring / checks | CI (build gate), E2E (Playwright), Dependabot, Vercel deploy workflow (manual trigger) |
| Rollback | GitHub Pages + Vercel both support instant redeploy/rollback; workflow history retained |

## Outstanding issues

1. **Vercel is not authenticated on this machine** (no CLI, no token, no saved login). Production and preview deployments on Vercel require your one-time Vercel login or connecting the repo in the Vercel dashboard. A manual Vercel deploy workflow is staged for the moment the three `VERCEL_*` secrets are added.
2. **Supabase is not authenticated on this machine.** The exact Auth URL changes are prepared in `VELYQUA-Supabase-and-Domain-Config.md` but must be applied by you in the Supabase dashboard.
3. **Dependabot opened separate PRs for `react` and `react-dom` (19.0.0 → 19.3.1), both failing CI** on a peer-dependency conflict (react-dom 19.3.1 requires react ≥ 19.3.1). Fixed by grouping `react` + `react-dom` in `dependabot.yml`; review and merge the next combined PR.
4. **App-side design-system remap and the app → marketing back-link are prepared but deliberately not applied** to the production app (visual-review + approval required). The canonical tokens the app should adopt are in `design/tokens.json`.

## Exact remaining steps (in order)

1. You: connect `AndrewLamSingapore/velyqua-website` to Vercel (or add `VERCEL_TOKEN` / `VERCEL_ORG_ID` / `VERCEL_PROJECT_ID` to GitHub secrets) — enables production previews + rollback.
2. You: add `app.velyqua.com` to the existing app's Vercel project.
3. You: update Supabase Auth Site URL + Redirect URLs per `VELYQUA-Supabase-and-Domain-Config.md`.
4. Test the checklist in `docs/UNIFICATION.md` §6 against the Vercel preview URLs.
5. You: after approval, change DNS per §3 of the domain config and set `NEXT_PUBLIC_SITE_URL` / `NEXT_PUBLIC_APP_URL`.
6. You: approve the app-side design-system + back-link change for the unified experience.

No production DNS, auth settings, resources or the live `velyqua.vercel.app` application have been changed or deleted.

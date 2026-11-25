# VELYQUA — Verified Deployment Report

**Checkpoint: 25 November 2026 · `DESKTOP-IPV4PH9` (Dell workstation)**

## Live surfaces (verified)

| Surface | URL | State |
| --- | --- | --- |
| Marketing — Vercel production | https://velyqua-website.vercel.app/ | 200, Vercel (`x-vercel-id`), security header `X-Content-Type-Options: nosniff`, all sections present |
| Marketing — GitHub Pages preview | https://andrewlamsingapore.github.io/velyqua-website/ | 200, auto-deploys from main |
| AI platform — production | https://velyqua.vercel.app/ | 200; `/api/health` → `{"ok":true,"service":"velyqua","product_version":"0.4.0"}` |

## Verified results

| Area | Result |
| --- | --- |
| Vercel production | Connected and deployed by the owner; latest `main` auto-deploys (~39 s) |
| Playwright | 10/10 passing locally and against the live Vercel production URL (desktop + Pixel 7) |
| Navigation | Marketing "Open VELYQUA" → live app (verified href); app → marketing return link merged (PR #111) |
| Responsive | No horizontal overflow at 1440×900 and 390×844 |
| Accessibility | Single `h1`, landmarks, labelled controls, `:focus-visible`, `prefers-reduced-motion` |
| SEO | Title/description, Open Graph, Twitter, canonical, JSON-LD, `sitemap.xml`, `robots.txt` |
| Analytics | `@vercel/analytics` + `@vercel/speed-insights` mounted |
| Security | 0 secret-scanning alerts both repos; no credentials in source |
| CI/CD | CI (build) + E2E green on `main`; Dependabot grouped with major-bump ignores; stale PRs closed |
| Design system | Canonical tokens in `design/tokens.json`; app `src/theme.ts` rewired to shared `src/brand/tokens.ts` (zero visual change) |

## Resolved this session

- Fixed E2E false-failure: Vercel Analytics/Speed Insights scripts 404 only off-Vercel; the test now tolerates those and stays strict on Vercel.
- Merged app PR #111 (shared tokens + "VELYQUA home" return link) to `main`; app production auto-deploys.
- Closed stale/broken Dependabot PRs (Expo/React Native major SDK bumps in the app; Tailwind 4.x, TypeScript 7.x, Next 16, @types/node 26, action majors in marketing) and added Dependabot ignores for the breaking majors.

## Outstanding (owner-gated, no action taken)

1. **Vercel domains:** add `velyqua.com` (marketing) and `app.velyqua.com` (app) in Vercel; then DNS per `SUPABASE-AND-DOMAIN.md`.
2. **Supabase Auth:** add `https://app.velyqua.com` to Site URL + Redirect URLs (keep `velyqua.vercel.app` until cutover).
3. **App docs PRs:** #107 (draft), #108 (draft), #109 (cloud-support presentation + GCP architecture) — owner decision on merge/close.
4. **Visual enhancement phase:** planned in `VELYQUA-Visual-Enhancement-Plan.md`; not yet implemented.

No production DNS, primary auth settings, resources, or the live app's data were changed or deleted.

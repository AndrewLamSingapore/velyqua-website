# VELYQUA — Unified Website & AI Platform

**Decision record · 25 November 2026 · Prepared on `DESKTOP-IPV4PH9` (Dell workstation)**

This document records the inspected reality of both codebases, the target architecture, the technical conflicts found, and the phased, production-safe rollout.

---

## 1. What exists today (verified)

### A. Marketing website — NEW (this workspace)

- Next.js 15 (App Router) + Tailwind CSS + GSAP + Three.js, fully static.
- Located at `outputs/velyqua-website`; builds clean, zero console errors, responsive, no horizontal overflow.
- Source of brand tokens: `tailwind.config.ts`, `app/globals.css`, `lib/site.ts`.

### B. AI platform — EXISTING, production at `velyqua.vercel.app`

- Repo: `AndrewLamSingapore/velyqua` (v0.4.0). Stack: Expo / React Native (web via `react-native-web`), Supabase (auth + Postgres RLS), Vercel serverless functions under `/api/*`.
- Vercel config: `buildCommand: npm run build` → `expo export --platform web --output-dir dist` + PWA packaging. Output directory `dist`.
- Auth: Supabase email/password with confirmation links, custom deep-link handling (`src/auth/deepLink.ts`), `EXPO_PUBLIC_SUPABASE_URL` + publishable key.

## 2. Target architecture

```
                  velyqua.com (root)                 app.velyqua.com (root)
              ┌───────────────────────┐        ┌──────────────────────────┐
              │  Marketing site        │        │  Existing AI platform     │
              │  Next.js (new repo)    │◄──────►│  Expo web + /api + Supabase│
              │  velyqua-website       │  links │  AndrewLamSingapore/velyqua│
              └───────────────────────┘        └──────────────────────────┘
                    Vercel project A                 Vercel project B (unchanged)
                    domain: velyqua.com              domain: app.velyqua.com
```

- One brand, two deployments, independent repositories (preserves separate CI/CD and release autonomy).
- Shared design tokens published from the marketing repo (`docs/design-system.md` and `tailwind.config.ts`); the app's `src/theme.ts` is aligned to the same palette as a separate, preview-tested change.
- Seamless navigation: marketing header/footer link to `app.velyqua.com`; the app gains a "VELYQUA home" link back to `velyqua.com`.

## 3. Technical conflicts found

1. **`/app` sub-path routing is not compatible with the current app.** The Expo web export emits root-relative assets — `/_expo/static/js/web/AppEntry-*.js`, `/manifest.webmanifest` (`start_url: "/"`), `/velyqua-icon.png` — so reverse-proxying it under `velyqua.com/app` would break the bundle, the PWA and Supabase auth redirects. Recommendation: use **`app.velyqua.com`** (the agreed fallback), leaving the app served at its own origin root.
2. **Auth depends on origin.** Supabase redirect/confirmation URLs must be updated to include `https://app.velyqua.com/...` before the domain switch. Until then, `https://velyqua.vercel.app` must remain active and registered.
3. **Production must not be cut over until tested.** DNS for `velyqua.com` and `app.velyqua.com` stays unchanged until the integrated experience passes in preview.
4. **Two brand palettes exist.** The app's `src/theme.ts` uses the legacy light palette; alignment to the new token set is a deliberate, reversible change (not applied to production in this pass).

## 4. Safe work completed (this pass)

- Marketing site hardened: SEO metadata + Open Graph + Twitter, `robots.ts`, `sitemap.ts`, JSON-LD, security headers, `prefers-reduced-motion`, accessible focus states.
- All app links centralised in `lib/site.ts` (`NEXT_PUBLIC_APP_URL` defaults to the live app; flip to `https://app.velyqua.com` at cutover without code changes).
- CI workflow (build gate) + Dependabot added to the marketing repo.
- Marketing site prepared as its own repository: `AndrewLamSingapore/velyqua-website`.

## 5. Owner actions (required before production)

1. Connect `AndrewLamSingapore/velyqua-website` to a new Vercel project (preview deployments and rollback are then automatic on every pull request).
2. Add `app.velyqua.com` as a domain to the **existing** app's Vercel project; keep `velyqua.vercel.app` as a redirect/alias until cutover.
3. In Supabase Auth → URL Configuration, add `https://app.velyqua.com` (and its confirmation/recovery paths) to Site URL and Redirect URLs.
4. Point `velyqua.com` at the marketing Vercel project, and `app.velyqua.com` at the app project (DNS). Set `NEXT_PUBLIC_SITE_URL=https://velyqua.com` and `NEXT_PUBLIC_APP_URL=https://app.velyqua.com` in the marketing project.
5. Approve the app-side navigation change (add "VELYQUA home" link) — prepared but not pushed to production.

## 6. Preview test checklist (before DNS)

- [ ] Marketing site loads at its `*.vercel.app` preview URL; all sections, animations, mobile layout render.
- [ ] "Open VELYQUA" from the marketing site reaches the app and returns via the new home link.
- [ ] App sign-in, email confirmation, password reset and deep links work on `app.velyqua.com` with updated Supabase redirects.
- [ ] `/api/health` returns 200 on the app origin.
- [ ] OG/social preview and `sitemap.xml` / `robots.txt` resolve on the marketing origin.
- [ ] No horizontal overflow or console errors at 390px and 1440px.

Only after all checks pass and Lam approves should production DNS be changed.

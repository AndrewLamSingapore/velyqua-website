# VELYQUA — Custom Domain & Supabase Auth Configuration

**Prepared 25 November 2026 · DEFERRED — applies only after `velyqua.com` is purchased and DNS/HTTPS verified · do not change production DNS or Supabase settings before that**

> The current production architecture uses free Vercel subdomains
> (`https://velyqua-website.vercel.app` and `https://velyqua.vercel.app`) and
> requires **no** domain purchase and **no** Supabase changes. The steps below are
> the future migration sequence to run once the domain is owned.

This is the exact configuration required for the finalized subdomain architecture. None of it has been applied — applying it needs your Supabase and Vercel account access.

## 1. Supabase Auth (required when `app.velyqua.com` goes live)

Open the existing VELYQUA Supabase project → **Authentication → URL Configuration**, and set:

| Field | Value |
| --- | --- |
| Site URL | `https://app.velyqua.com` |
| Redirect URLs (add) | `https://app.velyqua.com/**` |
| Redirect URLs (keep during transition) | `https://velyqua.vercel.app/**` |

Notes:

- The app reads `EXPO_PUBLIC_SUPABASE_URL` and the publishable key from its environment — those values do **not** change with the domain. Only the Auth Site URL / Redirect URLs change.
- Email confirmation and password-reset links are built from the Site URL, so do not remove `velyqua.vercel.app` from Redirect URLs until the domain cutover is complete and tested.
- The app never stores a Supabase service-role key in the client; the service-role key remains a Vercel environment variable only.

## 2. Vercel projects

### Marketing site — new project

1. In Vercel, **Add New → Project** → import `AndrewLamSingapore/velyqua-website`.
2. Framework preset: Next.js (auto-detected). Build command `npm run build`, output directory default.
3. Environment variables: `NEXT_PUBLIC_SITE_URL=https://velyqua.com`, `NEXT_PUBLIC_APP_URL=https://app.velyqua.com` (set `app.velyqua.com` only after the app is on that domain; until then leave `NEXT_PUBLIC_APP_URL` unset so it falls back to `https://velyqua.vercel.app`).
4. Preview deployments and rollback are automatic once connected.

### AI platform — existing project (unchanged)

1. In the existing VELYQUA app project → **Settings → Domains**, add `app.velyqua.com`.
2. Keep `velyqua.vercel.app` as an alias until cutover.
3. No build, environment, database or code changes required.

## 3. DNS records (apply only after approval)

Follow the exact values Vercel shows after adding each domain (they are authoritative). Typical values:

| Host | Type | Value |
| --- | --- | --- |
| `velyqua.com` | A | `76.76.21.21` |
| `www.velyqua.com` | CNAME | `cname.vercel-dns.com` |
| `app.velyqua.com` | CNAME | `cname.vercel-dns.com` |

Verify with `dig` / `nslookup` after propagation, then confirm the two `NEXT_PUBLIC_*` variables in the marketing project and the Supabase Site URL.

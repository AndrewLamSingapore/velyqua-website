# VELYQUA — Marketing & product site

An ultra-premium, cinematic single-page site for **VELYQUA 维澜** ("Intelligence for Living Water"), prepared for implementation with **Next.js (App Router)**, **Tailwind CSS**, **GSAP** and **Three.js**.

The site is grounded in the real product: it presents the shipped capabilities (Aqua Now, Quick Update, Tank Memory, Try a Change) and clearly labels research directions (computer vision, precision aquaculture) rather than presenting plans as products.

This repository is the **marketing surface** of the unified VELYQUA experience. The AI platform itself lives in `AndrewLamSingapore/velyqua` and is reached from this site at `NEXT_PUBLIC_APP_URL`.

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Production build: `npm run build` then `npm run start`.

## Stack

- **Next.js 15** (App Router, React 19, TypeScript strict)
- **Tailwind CSS 3.4** with design tokens in `tailwind.config.ts`
- **GSAP 3** (ScrollTrigger) for scroll reveals, the marquee, sparkline and pipeline animations
- **Three.js** for the bioluminescent hero scene (marine snow + glow orbs + pointer parallax)
- **next/font** — Space Grotesk (display), Inter (body), IBM Plex Mono (data labels), Instrument Serif (editorial accents)

## Environment

| Variable | Default | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://velyqua.com` | Canonical / OG / sitemap origin |
| `NEXT_PUBLIC_APP_URL` | `https://velyqua.vercel.app` | Where "Open VELYQUA" links point (flip to `https://app.velyqua.com` at cutover) |

All links are centralised in `lib/site.ts`.

## Brand & design

- `design/tokens.json` — canonical colour / type / spacing / motion tokens shared with the app.
- `docs/DESIGN-SYSTEM.md` — full art direction and component / motion spec.
- `docs/UNIFICATION.md` — target architecture, technical conflicts and production rollout checklist.
- `docs/SUPABASE-AND-DOMAIN.md` — exact Supabase Auth and DNS steps for `app.velyqua.com`.
- `docs/DEPLOYMENT-REPORT.md` — verified deployment status, outstanding issues and remaining steps.

## Deploy

Connect this repository to a new Vercel project for automatic preview deployments on every pull request and one-click rollbacks in the Vercel dashboard. `.github/workflows/ci.yml` runs a build gate on every push and pull request; Dependabot keeps dependencies current.

## Structure

```
app/            layout, page, globals.css, icon
components/     Nav, Hero, UnderwaterScene, Manifesto, Marquee, HowItWorks,
                AquaNow, Vision, Architecture, DigitalTwin, Showcase, Trust,
                Roadmap, CTA, Footer + shared primitives
lib/gsap.ts     single GSAP + ScrollTrigger registration point
lib/site.ts     centralised URLs (app, GitHub, contact) via env
design/         canonical shared design tokens
docs/           design system + unification plan
```

## Design notes

- Deep ocean black / midnight navy / bioluminescent cyan / elegant white.
- Every data surface carries an honesty label (illustrative example, research direction, not live telemetry).
- `prefers-reduced-motion` is respected (the Three.js scene renders a static frame; the marquee is disabled).
- Accessibility: `:focus-visible` ring, aria labels on icon-only controls, high-contrast text on abyss.

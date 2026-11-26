# VELYQUA — Marketing & product site

The deployed cinematic product website for **VELYQUA 维澜** ("Intelligence for Living Water"), built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **GSAP** and **Three.js**.

[**Explore VELYQUA**](https://velyqua-website.vercel.app/) · [**Open the aquarium app**](https://velyqua.vercel.app/) · [**Architecture Studio**](https://velyqua-workspace.five12345.chatgpt.site/) · [**Portfolio and contact**](https://authority-engine-app.vercel.app/velyqua)

The site is grounded in the real product: it presents the shipped capabilities (Aqua Now, Quick Update, Tank Memory, Try a Change) and clearly labels research directions (computer vision, precision aquaculture) rather than presenting plans as products.

This repository is the **marketing surface** of the unified VELYQUA experience. The working aquarium application lives in [`AndrewLamSingapore/velyqua`](https://github.com/AndrewLamSingapore/velyqua) and is reached from this site at `NEXT_PUBLIC_APP_URL`.

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
| `NEXT_PUBLIC_SITE_URL` | `https://velyqua-website.vercel.app` | Current canonical / OG / sitemap origin |
| `NEXT_PUBLIC_APP_URL` | `https://velyqua.vercel.app` | Current application destination; custom-domain cutover requires separate DNS and auth verification |

All links are centralised in `lib/site.ts`.

## Brand & design

- `design/tokens.json` — canonical colour / type / spacing / motion tokens shared with the app.
- `docs/DESIGN-SYSTEM.md` — full art direction and component / motion spec.
- `docs/UNIFICATION.md` — target architecture, technical conflicts and production rollout checklist.
- `docs/SUPABASE-AND-DOMAIN.md` — exact Supabase Auth and DNS steps for `app.velyqua.com`.
- `docs/DEPLOYMENT-REPORT.md` — verified deployment status, outstanding issues and remaining steps.

## Deploy

This repository is already connected to its existing Vercel project at `velyqua-website.vercel.app`. Reuse that project for previews, production releases and rollback; do not create a second project for routine updates. `.github/workflows/ci.yml` runs a build gate on every push and pull request; Dependabot keeps dependencies current.

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

## Current public boundaries

The application supports manual water tests, observations, care history and account-scoped sync. Computer vision, individual-animal histories, physical sensing performance and intervention outcomes remain research and validation goals. Animated values are illustrative. `velyqua.com` and `app.velyqua.com` remain a separate domain plan in these deployment documents; the verified Vercel destinations above remain the public links.

[All repository profiles](https://authority-engine-app.vercel.app/#repositories) · [Application source](https://github.com/AndrewLamSingapore/velyqua) · [Product and deployment evidence](docs/DEPLOYMENT-REPORT.md)

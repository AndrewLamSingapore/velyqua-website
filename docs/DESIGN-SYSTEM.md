# VELYQUA — Design System & Art Direction

**Brand:** VELYQUA 维澜 · "Intelligence for Living Water"
**Positioning:** cinematic Apple-style restraint × NVIDIA-grade technical clarity × Awwwards-level motion and art direction.
**Design principle:** *complex inside, simple outside — and confident enough to label reality correctly.*

---

## 1. Art direction

The site treats the aquarium as a **living system**, not a dashboard. The visual language is deep, calm and precise:

- **Deep ocean black** (`#010A11`) as the canvas, with **midnight navy** (`#062A4E` / `#0B2748`) for depth.
- A single **bioluminescent cyan** (`#4AF0E3`, core `#00BFC7`) used sparingly as light — never as decoration.
- **Elegant white** typography (`#F5FFFF` / `#EAF4F6`) with an **Instrument Serif italic** accent on one word per headline, for editorial warmth against the tech surfaces.
- **Mono telemetry labels** (`IBM Plex Mono`) for eyebrows, metrics and honesty labels — the "scientific instrument" voice.
- Distinctive moves instead of template tricks: a real-time WebGL underwater field, hairline grid panels, an animated signal marquee, and evidence labels on every data surface. No glassmorphism, no repetitive card grids.

## 2. Color tokens

| Token | Hex | Role |
| --- | --- | --- |
| `abyss` | `#010A11` | Page background |
| `deep` | `#041523` | Panel / section background |
| `navy` | `#062A4E` | Brand navy (logo) |
| `midnight` | `#0B2748` | Gradient depth |
| `teal` | `#007F86` | Secondary brand |
| `cyan` | `#00BFC7` | Primary brand cyan |
| `cyan-glow` | `#4AF0E3` | Bioluminescent highlight / light |
| `cyan-soft` | `#8FE8E1` | Muted cyan accents |
| `cyan-pale` | `#A5E9E5` | Faint cyan |
| `foam` | `#F5FFFF` | Headline white |
| `ink` | `#EAF4F6` | Body text |
| `muted` | `#7A96A8` | Secondary text / labels |
| `line` | `#12314B` | Hairlines and borders |
| `coral` | `#D8624A` | "Needs attention" state |
| `amber` | `#D79A24` | Caution / research direction |

Usage rules: cyan appears on a maximum of two focus points per viewport; gradients go `cyan-soft → cyan-glow → cyan`; state colours (`coral`, `amber`) are reserved for genuine caution, never decoration.

## 3. Typography

| Role | Family | Notes |
| --- | --- | --- |
| Display | Space Grotesk | Headlines, buttons, UI emphasis; `-0.02em` tracking |
| Body | Inter | Paragraphs and UI; 15–18px, relaxed leading |
| Mono | IBM Plex Mono | Eyebrows, metrics, labels; 10–12px, wide tracking |
| Editorial accent | Instrument Serif italic | One italic word per headline, cyan |

Scale: hero `5xl → 7xl → 5.4rem`; section titles `4xl → 5xl`; card titles `xl`; data values `3xl`.

## 4. Spacing, layout & components

- Max content width `78rem` (`max-w-site`), `px-6` mobile / `px-10` desktop; sections `py-24 → py-32`.
- **Reusable primitives:** `Wordmark` (logo), `SectionHeading` (eyebrow + title + description), `Reveal` (scroll fade/rise), `Marquee` (signal strip), `panel` surface, `PhoneFrame` (device mock), `Fish` glyph.
- **Page blueprint:** Hero → Manifesto → Signal marquee → How it works (4-step loop) → Aqua Now (monitoring dashboard) → Computer vision (research) → AI architecture (pipeline) → Digital twin (interactive) → Product showcase (3 app screens) → Trust/boundaries → Research roadmap → CTA → Footer.

## 5. Motion specification (GSAP + Three.js)

- **Hero intro:** fade + 26px rise, `power3.out`, 1.1s, 0.12 stagger.
- **Scroll reveal:** fade + 34px rise, `power3.out`, 1s, `start: 'top 88%'`, once.
- **Marquee:** `xPercent: -50`, 34s linear, infinite.
- **Dashboard:** sparkline stroke draw (2s) and confidence-bar width (1.6s) on scroll.
- **Architecture:** rail `scaleY` 1.4s + stage stagger 0.1.
- **Hero scene:** 420 additive marine-snow particles + 42 glow orbs, exponential fog, pointer-parallax camera. Renders a static frame under `prefers-reduced-motion`.

## 6. Responsive behaviour

- Nav collapses to a full-screen panel under `lg`.
- How-it-works and roadmap grids: 1 → 2 → 3/4 columns.
- Aqua Now: stacked copy + dashboard on mobile, two-column at `lg`; metric grid stays 2-up on small screens.
- Showcase phones: single column → two → three, with the third frame spanning full width at the two-column breakpoint.
- Hero telemetry strip scrolls horizontally on narrow screens.

## 7. Accessibility

- `prefers-reduced-motion` respected everywhere.
- `:focus-visible` cyan outline with offset.
- Aria labels on the logo mark, menu toggle and data visualisations.
- Contrast: `foam`/`ink` on `abyss` exceeds WCAG AA; `muted` is used for non-essential labels only.
- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) and a single `h1`.

## 8. Copy & evidence policy

All marketing copy follows the product's own governance voice: *build in public, label reality correctly.*

- Shipped features are stated as shipped.
- Sensor-fusion and computer vision carry "research direction" labels.
- Every numeric visual carries "illustrative example / not live telemetry / no diagnosis."

## 9. Implementation map

| Concern | File(s) |
| --- | --- |
| Tokens | `tailwind.config.ts`, `app/globals.css` |
| Fonts | `app/layout.tsx` |
| GSAP registration | `lib/gsap.ts` |
| Three.js scene | `components/UnderwaterScene.tsx` |
| Sections | `components/*.tsx`, assembled in `app/page.tsx` |

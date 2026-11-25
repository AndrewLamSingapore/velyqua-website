# VELYQUA — Premium Visual Enhancement Phase

**Prepared 25 November 2026 · target: world-class aquatic-tech branding with no performance or functionality regression.**

## Principles

- Cinematic first, but GPU-composited: every animation uses `transform`/`opacity` or WebGL; no layout-thrashing.
- Respect `prefers-reduced-motion` and `prefers-reduced-data` at every layer.
- Every visual is honest: illustrative overlays stay labelled; research directions stay labelled.
- Progressive enhancement: the site must remain fully readable with JavaScript or WebGL unavailable.

## Tracks

1. **Brand depth** — dual light/dark theme of one identity; refined type scale; richer gradients and hairline grids; a motion brand (consistent ease + 240 ms–1 s curve).
2. **Cinematic storytelling** — GSAP ScrollTrigger pinned "acts" that carry the visitor Observe → Compare → Respond → Learn; parallax depth layers; letterboxed transitions between acts.
3. **Interactive visualisation** — an interactive Aqua Now demo (parameter sliders → animated sparklines/confidence), an upgraded WebGL digital twin (caustics, marine snow, schooling fish), and an animated architecture pipeline.
4. **Imagery** — photoreal underwater hero from owned assets / future generated media in `public/` (WebP/AVIF, lazy, blur-up); keep the procedural Three.js scene as the fallback and the reduced-motion variant.
5. **Performance** — budget First Load JS ≤ 300 kB (current 277 kB); lazy-load Three.js and below-the-fold scenes; Lighthouse ≥ 90 perf / ≥ 95 a11y / ≥ 100 SEO.
6. **Accessibility** — motion-safe toggles, focus order, contrast on both themes, keyboard-operable sliders.

## Implementation approach

- Land as small, independently-reviewed components (no feature flags; static export is fine); each lands with a Playwright check.
- Keep marketing and app visual releases separable — never change the app's visual layer in the same step as the marketing site.
- Acceptance: Playwright green, no console errors, no horizontal overflow at 390/768/1440, Lighthouse budgets met, reduced-motion renders a static, readable page.

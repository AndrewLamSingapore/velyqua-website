'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import UnderwaterScene from './UnderwaterScene';
import { site } from '@/lib/site';

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-hero-fade]',
        { autoAlpha: 0, y: 26 },
        { autoAlpha: 1, y: 0, duration: 1.1, stagger: 0.12, ease: 'power3.out', delay: 0.15 },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <UnderwaterScene />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(6,42,78,0.5)_0%,rgba(1,10,17,0.35)_55%,#010A11_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-abyss to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-site flex-1 flex-col items-start justify-center px-6 pb-24 pt-36 sm:px-10">
        <p data-hero-fade className="eyebrow mb-6 flex items-center gap-3">
          <span className="animate-pulse-glow inline-block h-1.5 w-1.5 rounded-full bg-cyan-glow" />
          VELYQUA 维澜 — intelligence for living water
        </p>
        <h1 data-hero-fade className="display max-w-4xl text-5xl leading-[1.02] text-foam sm:text-7xl lg:text-[5.4rem]">
          Observe <span className="serif-accent text-glow text-cyan-glow">subtle</span> change.
          <span className="block text-ink/60">Act with clarity.</span>
        </h1>
        <p data-hero-fade className="mt-7 max-w-xl text-lg leading-relaxed text-ink/70">
          VELYQUA turns your water tests, observations and care history into one calm, private picture of your aquarium —
          so you can spot developing risk earlier and respond with confidence.
        </p>
        <div data-hero-fade className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href={site.appUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-foam px-7 py-3.5 font-display text-sm font-semibold text-abyss transition hover:bg-cyan-glow"
          >
            Open VELYQUA
          </a>
          <a
            href="#how"
            className="rounded-full border border-line px-7 py-3.5 font-display text-sm font-semibold text-foam transition hover:border-cyan-glow/60 hover:text-cyan-glow"
          >
            See how it works
          </a>
        </div>
        <div data-hero-fade className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] tracking-[0.14em] text-muted/80">
          <span>LOCAL-FIRST</span>
          <span className="text-line">·</span>
          <span>PRIVATE CLOUD SYNC</span>
          <span className="text-line">·</span>
          <span>NO SENSORS REQUIRED</span>
        </div>
      </div>

      <div className="relative z-10 border-t border-line/50 bg-abyss/40 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-site items-center justify-between gap-6 overflow-x-auto px-6 py-4 font-mono text-[11px] tracking-[0.14em] text-muted sm:px-10">
          <span className="whitespace-nowrap">ILLUSTRATIVE DEMO</span>
          <span className="whitespace-nowrap text-cyan-glow/80">pH 6.8</span>
          <span className="whitespace-nowrap text-cyan-glow/80">DO 7.2 mg/L</span>
          <span className="whitespace-nowrap text-cyan-glow/80">TDS 142 ppm</span>
          <span className="whitespace-nowrap text-cyan-glow/80">25.4 °C</span>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import SectionHeading from './SectionHeading';

const stages = [
  { n: '01', title: 'Capture', desc: 'Tap, type, speak or photograph. Every input is confirmed before it moves on.' },
  { n: '02', title: 'Event ledger', desc: 'Saved first, locally. A deterministic outbox means no partial saves and no silent loss.' },
  {
    n: '03',
    title: 'Freshwater digital twin',
    desc: 'Tank, water, care, livestock, plants, equipment, photos and build history in one private model.',
  },
  {
    n: '04',
    title: 'Freshness + confidence',
    desc: 'How old is this reading? How much do we trust it? Stale data lowers confidence instead of guessing.',
  },
  {
    n: '05',
    title: 'Rules, risks & simulations',
    desc: 'Transparent freshwater rules, trend reasoning and no-action baselines — every result with its reasons attached.',
  },
  {
    n: '06',
    title: 'Quiet care priority',
    desc: 'The smallest useful next step, explained. You stay the one who acts.',
  },
];

export default function Architecture() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-stage]',
        { autoAlpha: 0, x: -24 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: root, start: 'top 65%', once: true },
        },
      );
      gsap.fromTo(
        '[data-rail]',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.4,
          ease: 'power2.inOut',
          scrollTrigger: { trigger: root, start: 'top 70%', once: true },
        },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="architecture" ref={rootRef} className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-site px-6 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="AI architecture"
              title={
                <>
                  From a single tap to a <span className="serif-accent text-cyan-glow">quiet</span> next step
                </>
              }
              description="Every observation flows through the same governed pipeline. The digital twin updates from your records; rules and estimates stay explainable; control stays with you."
            />
            <p className="mt-8 font-mono text-[11px] leading-relaxed tracking-[0.12em] text-muted">
              CAPTURE → LEDGER → TWIN → CONFIDENCE → RULES → PRIORITY
            </p>
          </div>

          <div className="relative pl-8 sm:pl-10">
            <div
              data-rail
              className="absolute bottom-2 left-[3px] top-2 w-px origin-top bg-gradient-to-b from-cyan-glow/70 via-cyan-glow/30 to-transparent sm:left-[5px]"
            />
            <div className="space-y-8">
              {stages.map((s) => (
                <div key={s.n} data-stage className="relative">
                  <span className="shadow-cyan-glow absolute -left-8 top-1 h-2 w-2 rounded-full bg-cyan-glow sm:-left-10" />
                  <p className="font-mono text-[10px] tracking-[0.24em] text-cyan-glow/60">{s.n}</p>
                  <h3 className="mt-1 font-display text-xl font-semibold text-foam">{s.title}</h3>
                  <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-ink/60">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

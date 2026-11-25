'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import SectionHeading from './SectionHeading';

const metrics = [
  { label: 'pH', value: '6.8', delta: 'stable', tone: 'text-cyan-glow' },
  { label: 'Dissolved O₂', value: '7.2', unit: 'mg/L', delta: 'on track', tone: 'text-cyan-glow' },
  { label: 'Temperature', value: '25.4', unit: '°C', delta: 'in range', tone: 'text-cyan-glow' },
  { label: 'TDS', value: '142', unit: 'ppm', delta: 'steady', tone: 'text-cyan-glow' },
];

export default function AquaNow() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-spark]',
        { strokeDashoffset: 1 },
        { strokeDashoffset: 0, duration: 2, ease: 'power2.out', scrollTrigger: { trigger: root, start: 'top 70%', once: true } },
      );
      gsap.fromTo(
        '[data-bar]',
        { width: 0 },
        { width: '82%', duration: 1.6, ease: 'power3.out', delay: 0.3, scrollTrigger: { trigger: root, start: 'top 70%', once: true } },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="aqua-now" ref={rootRef} className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-site px-6 sm:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Intelligent monitoring"
              title={
                <>
                  One calm picture of the whole tank: <span className="serif-accent text-cyan-glow">Aqua Now</span>
                </>
              }
              description="Aqua Now fuses your latest readings with how fresh and trustworthy they are, then reduces them to three honest states — all clear, needs attention, or more information needed."
            />
            <ul className="mt-8 space-y-3 text-[15px] text-ink/65">
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-glow" />Freshness and confidence are computed from your own records — never a generic health score.</li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-glow" />Missing or stale data lowers confidence instead of producing false reassurance.</li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-glow" />Reasons are shown in plain language, so you understand the why, not just the what.</li>
            </ul>
          </div>

          <div className="panel overflow-hidden shadow-panel">
            <div className="relative flex items-center justify-between border-b border-line/60 px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="animate-pulse-glow h-2 w-2 rounded-full bg-cyan-glow" />
                <span className="font-mono text-[11px] tracking-[0.22em] text-ink/80">AQUA NOW</span>
              </div>
              <span className="rounded-full border border-cyan-glow/40 bg-cyan-glow/10 px-3 py-1 font-mono text-[10px] tracking-[0.16em] text-cyan-glow">
                ALL CLEAR
              </span>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-cyan-glow/60 to-transparent" style={{ animation: 'scanline 6s linear infinite' }} />
              <div className="grid grid-cols-2 gap-px bg-line/40">
                {metrics.map((m) => (
                  <div key={m.label} className="bg-deep/60 p-5 sm:p-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{m.label}</p>
                    <div className="mt-2 flex items-baseline gap-1.5">
                      <span className={`font-display text-3xl font-semibold ${m.tone}`}>{m.value}</span>
                      {m.unit ? <span className="font-mono text-xs text-muted">{m.unit}</span> : null}
                    </div>
                    <p className="mt-1 font-mono text-[10px] tracking-[0.12em] text-cyan-soft/60">▲ {m.delta}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-line/60 p-6">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Dissolved oxygen · 7 days</p>
                  <p className="font-mono text-[10px] text-cyan-glow/70">EXAMPLE</p>
                </div>
                <svg viewBox="0 0 200 60" className="mt-4 h-24 w-full" role="img" aria-label="Illustrative dissolved oxygen trend">
                  <defs>
                    <linearGradient id="doFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4AF0E3" stopOpacity="0.28" />
                      <stop offset="100%" stopColor="#4AF0E3" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,39.2 L33.3,34 L66.6,44.4 L100,28.8 L133.3,34 L166.6,23.6 L200,23.6 L200,60 L0,60 Z" fill="url(#doFill)" />
                  <path
                    data-spark
                    d="M0,39.2 L33.3,34 L66.6,44.4 L100,28.8 L133.3,34 L166.6,23.6 L200,23.6"
                    fill="none"
                    stroke="#4AF0E3"
                    strokeWidth="1.6"
                    pathLength={1}
                    strokeDasharray={1}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="border-t border-line/60 p-6">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  <span>Confidence</span>
                  <span className="text-cyan-glow">High · readings fresh · 2 h ago</span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-line/60">
                  <div data-bar className="h-full rounded-full gradient-cyan" style={{ width: '82%' }} />
                </div>
              </div>
            </div>

            <p className="border-t border-line/60 px-6 py-3 font-mono text-[10px] tracking-[0.12em] text-muted/70">
              ILLUSTRATIVE EXAMPLE · NOT LIVE TELEMETRY · NO DIAGNOSIS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

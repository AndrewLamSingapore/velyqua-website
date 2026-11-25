'use client';

import { useState } from 'react';
import SectionHeading from './SectionHeading';

export default function DigitalTwin() {
  const [temp, setTemp] = useState(25.4);
  const status =
    temp >= 29
      ? { label: 'Above comfortable range — investigate', tone: 'text-coral', bar: 'bg-coral', chip: 'border-coral/40 bg-coral/10 text-coral' }
      : temp >= 23
        ? { label: 'Within tropical range', tone: 'text-cyan-glow', bar: 'bg-cyan-glow', chip: 'border-cyan-glow/40 bg-cyan-glow/10 text-cyan-glow' }
        : { label: 'Below comfortable range — investigate', tone: 'text-amber', bar: 'bg-amber', chip: 'border-amber/40 bg-amber/10 text-amber' };

  return (
    <section id="twin" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(6,42,78,0.3)_0%,transparent_70%)]" />
      <div className="relative mx-auto w-full max-w-site px-6 sm:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Digital twin"
              title={
                <>
                  A living model that <span className="serif-accent text-cyan-glow">remembers</span>
                </>
              }
              description="Your tank's digital twin is updated from your own records — water, care, livestock and history. Drag the temperature and watch the model respond, exactly as the real app reasons about a changing tank."
            />
            <div className="mt-8 flex items-center gap-4">
              <span className="font-display text-5xl font-semibold text-foam">{temp.toFixed(1)}°</span>
              <span className={`rounded-full border px-3 py-1 font-mono text-[10px] tracking-[0.16em] ${status.chip}`}>{status.label.toUpperCase()}</span>
            </div>
            <div className="mt-8">
              <input
                type="range"
                min={22}
                max={30}
                step={0.1}
                value={temp}
                onChange={(e) => setTemp(Number(e.target.value))}
                className="w-full accent-cyan-glow"
                aria-label="Water temperature"
              />
              <div className="mt-2 flex justify-between font-mono text-[10px] tracking-[0.16em] text-muted">
                <span>22 °C</span>
                <span>30 °C</span>
              </div>
            </div>
          </div>

          <div className="panel overflow-hidden shadow-panel">
            <div className="relative h-[24rem] overflow-hidden rounded-2xl border border-line/50 bg-gradient-to-b from-navy/60 via-deep to-abyss sm:h-[26rem]">
              <div
                className="absolute inset-x-0 bottom-0 transition-all duration-500"
                style={{
                  height: '72%',
                  background: `linear-gradient(180deg, rgba(74,240,227,${0.12 + (temp - 22) * 0.015}) 0%, rgba(0,127,134,${0.18 + (temp - 22) * 0.01}) 100%)`,
                }}
              />
              <div className="animate-floaty absolute left-[18%] top-[30%] text-cyan-glow/90" style={{ animationDuration: '8s' }}>
                <svg viewBox="0 0 48 24" className="w-20" aria-hidden="true">
                  <path d="M2 12 C10 4 26 4 34 8 L42 2 L42 12 L42 22 L34 16 C26 20 10 20 2 12 Z" fill="currentColor" />
                  <circle cx="11" cy="10.5" r="1.2" fill="#041523" />
                </svg>
              </div>
              <div className="animate-floaty absolute left-[58%] top-[52%] text-cyan-soft/70" style={{ animationDuration: '10.5s' }}>
                <svg viewBox="0 0 48 24" className="w-14" aria-hidden="true">
                  <path d="M2 12 C10 4 26 4 34 8 L42 2 L42 12 L42 22 L34 16 C26 20 10 20 2 12 Z" fill="currentColor" />
                  <circle cx="11" cy="10.5" r="1.2" fill="#041523" />
                </svg>
              </div>
              <div className="absolute left-4 top-4 flex items-center gap-2">
                <span className="animate-pulse-glow h-2 w-2 rounded-full bg-cyan-glow" />
                <span className="font-mono text-[10px] tracking-[0.2em] text-ink/70">FRESHWATER DIGITAL TWIN</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.16em] text-muted">WATER TEMP</p>
                  <p className={`font-display text-4xl font-semibold ${status.tone}`}>{temp.toFixed(1)}°C</p>
                </div>
                <div className="w-28">
                  <p className="font-mono text-[10px] tracking-[0.16em] text-muted">RANGE</p>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line/60">
                    <div className={`h-full rounded-full ${status.bar}`} style={{ width: `${((temp - 22) / 8) * 100}%` }} />
                  </div>
                </div>
              </div>
            </div>
            <p className="px-6 py-3 font-mono text-[10px] tracking-[0.12em] text-muted/70">
              INTERACTIVE ESTIMATE · DEMONSTRATION ONLY · NOT LIVE TANK DATA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

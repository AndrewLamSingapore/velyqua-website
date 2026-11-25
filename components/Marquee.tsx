'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const items = [
  'OBSERVE SUBTLE CHANGE',
  'COMPARE AGAINST BASELINE',
  'RESPOND WITH CONTEXT',
  'LEARN OVER TIME',
  'LOCAL-FIRST · PRIVATE',
  'FRESHNESS BEFORE CERTAINTY',
  'NO SENSORS REQUIRED',
];

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const tween = gsap.to(track, { xPercent: -50, duration: 34, ease: 'none', repeat: -1 });
    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div className="relative overflow-hidden border-y border-line/50 bg-deep/70 py-5">
      <div ref={trackRef} className="flex w-max items-center">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
            {items.map((item) => (
              <span key={`${dup}-${item}`} className="flex items-center">
                <span className="px-8 font-mono text-[12px] tracking-[0.22em] text-ink/55">{item}</span>
                <span className="h-1.5 w-1.5 rotate-45 bg-cyan-glow/50" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

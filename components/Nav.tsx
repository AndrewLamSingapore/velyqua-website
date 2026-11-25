'use client';

import { useEffect, useState } from 'react';
import Wordmark from './Wordmark';
import { site } from '@/lib/site';

const links = [
  { href: '#how', label: 'How it works' },
  { href: '#aqua-now', label: 'Aqua Now' },
  { href: '#vision', label: 'Vision' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#showcase', label: 'Showcase' },
  { href: '#research', label: 'Research' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-line/50 bg-abyss/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-site items-center justify-between px-6 sm:px-10">
        <a href="#top" className="text-foam">
          <Wordmark />
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[12px] tracking-[0.14em] text-muted transition hover:text-cyan-glow"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={site.appUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-foam px-5 py-2 font-display text-xs font-semibold text-abyss transition hover:bg-cyan-glow sm:block"
          >
            Open VELYQUA
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-foam lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="relative block h-3.5 w-4">
              <span className={`absolute left-0 top-0 h-px w-4 bg-current transition ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
              <span className={`absolute left-0 top-1.5 h-px w-4 bg-current transition ${open ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 top-3 h-px w-4 bg-current transition ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </nav>
      {open ? (
        <div className="border-t border-line/50 bg-abyss/95 px-6 py-5 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm tracking-[0.12em] text-ink/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href={site.appUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-1 rounded-full bg-foam px-5 py-2.5 text-center font-display text-sm font-semibold text-abyss"
            >
              Open VELYQUA
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

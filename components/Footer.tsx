import Wordmark from './Wordmark';
import { site } from '@/lib/site';

const groups = [
  {
    title: 'Product',
    links: [
      ['Open VELYQUA', site.appUrl],
      ['GitHub repository', site.appGithub],
      ['Report feedback', `${site.appGithub}/issues`],
    ],
  },
  {
    title: 'Connected work',
    links: [
      ['ORQEVIA', site.orqevia],
      ['About Andrew', site.about],
      ['Start a conversation', site.contact],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line/50 bg-deep/40">
      <div className="mx-auto w-full max-w-site px-6 py-16 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Wordmark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/55">
              Intelligence for living water. Observe subtle change, understand the environment, and support better care
              decisions — with confidence that knows its limits.
            </p>
          </div>
          {groups.map((g) => (
            <div key={g.title}>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">{g.title}</p>
              <ul className="mt-5 space-y-3">
                {g.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noreferrer" className="text-sm text-ink/65 transition hover:text-cyan-glow">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-line/50 pt-6 font-mono text-[10px] tracking-[0.16em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>VELYQUA 维澜 · © 2026 ANDREW LAM</span>
          <span>INTELLIGENCE FOR LIVING WATER</span>
        </div>
      </div>
    </footer>
  );
}

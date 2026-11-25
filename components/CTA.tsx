import Reveal from './Reveal';
import { site } from '@/lib/site';

export default function CTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-site px-6 sm:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line/60 bg-gradient-to-b from-navy/80 via-deep to-abyss px-8 py-16 text-center sm:px-16 sm:py-24">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_80%_at_50%_0%,rgba(0,191,199,0.18)_0%,transparent_70%)]" />
            <div className="hairline absolute inset-x-16 top-0" />
            <div className="relative">
              <p className="eyebrow mb-6">Intelligence for living water</p>
              <h2 className="display mx-auto max-w-3xl text-4xl leading-[1.05] text-foam sm:text-6xl">
                Bring VELYQUA to <span className="serif-accent text-glow text-cyan-glow">your</span> water.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink/65">
                Start a private record of your tank today. No sensors required. Your data stays yours.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={site.appUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-foam px-7 py-3.5 font-display text-sm font-semibold text-abyss transition hover:bg-cyan-glow"
                >
                  Open VELYQUA
                </a>
                <a
                  href={site.appGithub}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-line px-7 py-3.5 font-display text-sm font-semibold text-foam transition hover:border-cyan-glow/60 hover:text-cyan-glow"
                >
                  Follow the build
                </a>
              </div>
              <p className="mt-8 font-mono text-[10px] tracking-[0.2em] text-muted">BUILD IN PUBLIC · LABEL REALITY CORRECTLY</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Reveal from './Reveal';

export default function Manifesto() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto w-full max-w-site px-6 sm:px-10">
        <Reveal>
          <p className="max-w-4xl font-display text-3xl leading-snug text-foam sm:text-[2.6rem] sm:leading-[1.22]">
            An aquarium is a living system, not a dashboard. Most tools show you numbers.
            <span className="text-cyan-glow"> VELYQUA shows you relationships</span> — and it becomes
            <span className="serif-accent text-cyan-glow"> more careful</span> when the evidence gets weaker.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            <span>01 · Manual-first</span>
            <span>02 · Local-first</span>
            <span>03 · Evidence-graded</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

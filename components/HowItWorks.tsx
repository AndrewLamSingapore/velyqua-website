import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const steps = [
  {
    n: '01',
    title: 'Observe',
    desc: 'Log water tests, observations and care actions — or connect a sensor later. Manual entry is complete on its own.',
  },
  {
    n: '02',
    title: 'Compare',
    desc: 'Every reading is placed against time, context and your own tank baseline — not a one-size threshold.',
  },
  {
    n: '03',
    title: 'Respond',
    desc: 'Transparent rules and estimates surface the smallest useful next step, with reasons you can actually read.',
  },
  {
    n: '04',
    title: 'Learn',
    desc: 'A private memory of your water lets patterns surface over weeks. No streaks, feeds or attention traps.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-site px-6 sm:px-10">
        <SectionHeading
          eyebrow="The loop"
          title={
            <>
              Observe → Compare → <span className="serif-accent text-cyan-glow">Respond</span> → Learn
            </>
          }
          description="Four quiet steps replace guesswork with a running, private understanding of your water."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line/50 bg-line/40 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} className="bg-deep/90 p-8">
              <p className="font-mono text-xs tracking-[0.24em] text-cyan-glow/70">{s.n}</p>
              <h3 className="mt-5 font-display text-xl font-semibold text-foam">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/60">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

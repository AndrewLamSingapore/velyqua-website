import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const stages = [
  {
    tag: 'SHIPPED',
    tone: 'border-cyan-glow/40 bg-cyan-glow/10 text-cyan-glow',
    title: 'Freshwater aquariums',
    desc: 'Aqua Now, Quick Update, Tank Memory and Try a Change — a complete manual-first record of your tank, live in the web app.',
  },
  {
    tag: 'IN RESEARCH',
    tone: 'border-cyan-soft/40 bg-cyan-soft/10 text-cyan-soft',
    title: 'Sensor-fusion prototype',
    desc: 'Testing whether low-cost continuous pH, temperature and conductivity — fused with reference chemistry — predicts risk earlier than periodic testing alone.',
  },
  {
    tag: 'RESEARCH DIRECTION',
    tone: 'border-amber/40 bg-amber/10 text-amber',
    title: 'Precision aquaculture',
    desc: 'Scaling the same evidence-graded approach toward farm-level monitoring, camera-derived behaviour and professional operations.',
  },
];

export default function Roadmap() {
  return (
    <section id="research" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-site px-6 sm:px-10">
        <SectionHeading
          eyebrow="The path ahead"
          title={
            <>
              From living rooms to <span className="serif-accent text-cyan-glow">living waters</span>
            </>
          }
          description="One honest progression: ship what works, research what might, and never label a plan as a product."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line/50 bg-line/40 lg:grid-cols-3">
          {stages.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="flex flex-col bg-deep/90 p-8">
              <span className={`self-start rounded-full border px-3 py-1 font-mono text-[9px] tracking-[0.18em] ${s.tone}`}>{s.tag}</span>
              <h3 className="mt-5 font-display text-xl font-semibold text-foam">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/60">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

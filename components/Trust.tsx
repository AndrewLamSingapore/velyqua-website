import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const commitments = [
  ['Gets more careful as evidence weakens', 'Missing or stale critical data lowers confidence instead of producing false reassurance.'],
  ['Never diagnoses disease', 'VELYQUA supports investigation and care decisions. It does not prescribe treatment or diagnose.'],
  ['Simulations never become records', 'An estimate stays labelled as an estimate until you record the real action yourself.'],
  ['Private and local-first', 'Your records are saved on-device first, with owner-only cloud sync and full export.'],
  ['Manual-first by design', 'No sensor is required. Manual tests, observations and care history are complete on their own.'],
  ['Explainable by default', 'Every result shows its reasons, assumptions and limits — you understand the why, not just the what.'],
];

export default function Trust() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-site px-6 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Built to be careful"
              title={
                <>
                  Confidence that <span className="serif-accent text-cyan-glow">knows its limits</span>
                </>
              }
              description="Premium doesn't mean pretending. VELYQUA's safety boundaries are product decisions, enforced in code and visible in every answer."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {commitments.map(([title, desc], i) => (
              <Reveal key={title} delay={i * 0.06} className="panel p-6">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-cyan-glow/40 bg-cyan-glow/10">
                    <svg viewBox="0 0 16 16" className="h-3 w-3 text-cyan-glow" aria-hidden="true">
                      <path d="M3 8.5 6.5 12 13 4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <h3 className="font-display text-[15px] font-semibold text-foam">{title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

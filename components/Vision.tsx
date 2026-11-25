import SectionHeading from './SectionHeading';

function Fish({ className = '', opacity = 0.9 }: { className?: string; opacity?: number }) {
  return (
    <svg viewBox="0 0 48 24" className={className} style={{ opacity }} aria-hidden="true">
      <path d="M2 12 C10 4 26 4 34 8 L42 2 L42 12 L42 22 L34 16 C26 20 10 20 2 12 Z" fill="currentColor" />
      <circle cx="11" cy="10.5" r="1.2" fill="#041523" />
    </svg>
  );
}

export default function Vision() {
  return (
    <section id="vision" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_100%,rgba(6,42,78,0.35)_0%,transparent_70%)]" />
      <div className="relative mx-auto w-full max-w-site px-6 sm:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Computer vision · research direction"
              title={
                <>
                  Eyes on <span className="serif-accent text-cyan-glow">behaviour</span>, grounded in evidence
                </>
              }
              description="VELYQUA's long-term thesis is to connect an animal's changing environment, observed biological and behavioural signals, keeper interventions and subsequent outcomes — not merely display sensor readings."
            />
            <div className="mt-8 space-y-4 text-[15px] text-ink/65">
              <p>
                A candidate pilot would compare timestamped, group-level fish-zone observations with water measurements and
                keeper records — explicitly flagging blocked video, stale sensors and confounding care events.
              </p>
              <p>
                Synchronized camera-derived behaviour, individual identification and welfare-outcome inference are
                <span className="text-cyan-glow"> proposed experiments, not shipped features</span>. Human keepers stay responsible
                for investigation and care.
              </p>
            </div>
            <p className="mt-8 inline-flex rounded-full border border-amber/40 bg-amber/10 px-4 py-1.5 font-mono text-[10px] tracking-[0.18em] text-amber">
              RESEARCH DIRECTION — NOT YET SHIPPED
            </p>
          </div>

          <div className="relative">
            <div className="panel overflow-hidden shadow-panel">
              <div className="relative h-[26rem] overflow-hidden bg-gradient-to-b from-navy/70 via-deep to-abyss sm:h-[30rem]">
                <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'repeating-linear-gradient(115deg, transparent 0 26px, rgba(74,240,227,0.04) 26px 27px)' }} />
                <div className="animate-floaty absolute left-[16%] top-[18%] text-cyan-soft/90" style={{ animationDuration: '8s' }}>
                  <Fish className="w-20" />
                </div>
                <div className="animate-floaty absolute left-[22%] top-[24%] text-cyan-glow" style={{ animationDuration: '9.5s' }}>
                  <Fish className="w-16 opacity-90" />
                </div>
                <div className="animate-floaty absolute left-[30%] top-[20%] text-cyan-soft/70" style={{ animationDuration: '11s' }}>
                  <Fish className="w-24" />
                </div>
                <div className="animate-floaty absolute left-[64%] top-[56%] text-cyan-glow/80" style={{ animationDuration: '10s' }}>
                  <Fish className="w-14" />
                </div>

                <div className="absolute left-[12%] top-[8%] h-[22%] w-[52%] rounded-lg border border-cyan-glow/70 bg-cyan-glow/5">
                  <span className="absolute -top-6 left-0 rounded-sm bg-cyan-glow/15 px-2 py-1 font-mono text-[9px] tracking-[0.14em] text-cyan-glow">
                    ZONE A · SCHOOLING · 3 FISH
                  </span>
                </div>
                <div className="animate-pulse-glow absolute left-[58%] top-[44%] h-[28%] w-[30%] rounded-lg border border-cyan-soft/60 bg-cyan-soft/5">
                  <span className="absolute -top-6 left-0 rounded-sm bg-cyan-soft/15 px-2 py-1 font-mono text-[9px] tracking-[0.14em] text-cyan-soft">
                    ZONE B · RESTING · 1 FISH
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  <span className="rounded-sm bg-abyss/70 px-2 py-1 font-mono text-[9px] tracking-[0.14em] text-cyan-glow">MOTION 0.4</span>
                  <span className="rounded-sm bg-abyss/70 px-2 py-1 font-mono text-[9px] tracking-[0.14em] text-muted">CAM 01 · 09:41:22</span>
                </div>
                <div className="absolute right-4 top-4 rounded-sm bg-abyss/70 px-2 py-1 font-mono text-[9px] tracking-[0.14em] text-amber">
                  ILLUSTRATIVE OVERLAY
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

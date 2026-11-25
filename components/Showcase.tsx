import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

function PhoneFrame({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto w-[264px]">
      <div className="relative rounded-[2.5rem] border border-line/70 bg-deep p-2 shadow-panel">
        <div className="absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-abyss" />
        <div className="h-[500px] overflow-hidden rounded-[2rem] bg-abyss/85 p-4">{children}</div>
      </div>
      <p className="mt-4 text-center font-mono text-[10px] tracking-[0.18em] text-muted">{label}</p>
    </div>
  );
}

export default function Showcase() {
  return (
    <section id="showcase" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-site px-6 sm:px-10">
        <SectionHeading
          align="center"
          eyebrow="Product showcase"
          title={
            <>
              A <span className="serif-accent text-cyan-glow">quieter</span> way to keep water
            </>
          }
          description="Three surfaces, one private record of your tank. Shipped today in the VELYQUA web app."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0}>
            <PhoneFrame label="AQUA NOW · CURRENT STATE">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] tracking-[0.18em] text-muted">AQUA NOW</span>
                  <span className="rounded-full border border-cyan-glow/40 bg-cyan-glow/10 px-2 py-0.5 font-mono text-[8px] tracking-[0.12em] text-cyan-glow">ALL CLEAR</span>
                </div>
                <div className="rounded-xl border border-line/60 bg-deep p-4">
                  <p className="font-mono text-[9px] tracking-[0.16em] text-muted">LATEST</p>
                  <p className="mt-1 font-display text-2xl font-semibold text-foam">pH 6.8</p>
                  <p className="mt-1 font-mono text-[9px] text-cyan-soft/70">stable · 2 h ago</p>
                </div>
                {[
                  ['Dissolved O₂', '7.2 mg/L'],
                  ['Temperature', '25.4 °C'],
                  ['TDS', '142 ppm'],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between rounded-xl border border-line/40 bg-deep/50 px-4 py-3">
                    <span className="font-mono text-[9px] tracking-[0.12em] text-muted">{k}</span>
                    <span className="font-display text-sm font-semibold text-cyan-glow">{v}</span>
                  </div>
                ))}
              </div>
            </PhoneFrame>
          </Reveal>

          <Reveal delay={0.08}>
            <PhoneFrame label="QUICK UPDATE · CAPTURE">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] tracking-[0.18em] text-muted">QUICK UPDATE</span>
                </div>
                <div className="rounded-xl border border-line/60 bg-deep p-4">
                  <p className="font-mono text-[9px] tracking-[0.16em] text-muted">WATER TEST</p>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div className="rounded-lg border border-line/50 bg-abyss/60 p-2.5">
                      <p className="font-mono text-[8px] text-muted">pH</p>
                      <p className="font-display text-lg font-semibold text-foam">6.8</p>
                    </div>
                    <div className="rounded-lg border border-line/50 bg-abyss/60 p-2.5">
                      <p className="font-mono text-[8px] text-muted">DO mg/L</p>
                      <p className="font-display text-lg font-semibold text-foam">7.2</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-line/50 bg-deep/50 p-4">
                  <p className="font-mono text-[9px] tracking-[0.14em] text-muted">NOTE</p>
                  <p className="mt-2 text-[11px] leading-relaxed text-ink/55">Fish active, feeding normally. Surface calm.</p>
                </div>
                <div className="rounded-full gradient-cyan py-2.5 text-center font-display text-xs font-semibold text-abyss">Save update</div>
              </div>
            </PhoneFrame>
          </Reveal>

          <Reveal delay={0.16} className="sm:col-span-2 lg:col-span-1">
            <PhoneFrame label="TANK MEMORY · HISTORY">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] tracking-[0.18em] text-muted">TANK MEMORY</span>
                </div>
                {[
                  ['09:41', 'Water change · 25%', 'cyan'],
                  ['08:12', 'pH 6.8 · DO 7.2 mg/L', 'cyan'],
                  ['Yesterday', 'Fed · small pinch', 'muted'],
                  ['2 d ago', 'Filter rinsed', 'muted'],
                  ['3 d ago', 'TDS 142 ppm', 'cyan'],
                ].map(([time, text, tone]) => (
                  <div key={`${time}-${text}`} className="flex items-start gap-3 rounded-xl border border-line/40 bg-deep/50 px-4 py-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-glow/70" />
                    <div>
                      <p className="font-mono text-[8px] tracking-[0.12em] text-muted">{time}</p>
                      <p className={`text-[11px] ${tone === 'muted' ? 'text-ink/55' : 'text-ink/80'}`}>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PhoneFrame>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

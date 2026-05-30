import { useInView } from '../hooks/useInView'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section tag */}
        <div className={`section-tag mb-10 fade-up ${inView ? 'visible' : ''}`}>
          <span className="h-px w-6 bg-electric/40" />
          <span>01 :: About</span>
        </div>

        <div
          ref={ref}
          className={`glass-card relative p-8 md:p-12 fade-up ${inView ? 'visible' : ''}`}
          style={{ transitionDelay: '80ms' }}
        >
          {/* HUD corners */}
          <span className="hud-tl" />
          <span className="hud-tr" />
          <span className="hud-bl" />
          <span className="hud-br" />

          {/* Top HUD bar */}
          <div className="flex items-center justify-between mb-8">
            <span className="mono-label">UNIT_PROFILE</span>
            <div className="flex items-center gap-2">
              <span className="status-dot" />
              <span className="font-mono text-[9px] tracking-[0.15em] text-electric/50">
                ACTIVE
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
            {/* Bio */}
            <div>
              <h2 className="font-sans text-3xl md:text-4xl font-semibold text-white mb-6 leading-snug">
                Born in Cuba.
                <span className="text-electric"> Building</span> from{' '}
                <span className="text-amber">Miami</span>.
              </h2>
              <p className="text-white/55 text-base leading-relaxed mb-4">
                At five years old, my neighbor had a computer — and in Cuba,
                that was a secret. Every day I'd cross the street, walk through
                rooms lined with her father's paintings, and find my way to the
                back room where that machine lived. I'd sit there for hours,
                learning to make it do things. That feeling never left.
              </p>
              <p className="text-white/55 text-base leading-relaxed mb-4">
                I've been in every room where software is born — the whiteboard,
                the first commit, the production deploy, the post-mortem, and
                the quiet moment when you turn the lights off on something you
                built. At Buildium, a RealPage company, I worked on
                consumer-facing products — customer portals, e-signature flows,
                lease management, A/B testing, and frontend design as part of
                their Frontend chapter. As a Principal Engineer at DASI, I've
                led full-stack implementations, managed teams, defined
                processes, and built DevOps pipelines across a wide range of
                systems and technologies.
              </p>
              <p className="text-white/55 text-base leading-relaxed mb-4">
                Whether it's my own ventures or a lean team at work, I own the
                entire picture — the idea, the architecture, the code, the
                infrastructure, and the deployment. When the team is small,
                there are no handoffs. You do it all. I've been that person
                more than once, and I know what it takes to take something from
                nothing to running in production, end to end.
              </p>
              <p className="text-white/55 text-base leading-relaxed">
                I believe software should solve a real problem, feel personal,
                and get out of your way. When I'm not at a keyboard, I'm behind
                a drum kit, on a baseball diamond, snowboarding through
                mountains, or in the backyard with my two daughters, my dog,
                and my wife.
              </p>
            </div>

            {/* Side stats */}
            <div className="flex md:flex-col gap-6 md:gap-5 flex-wrap">
              {[
                { label: 'Focus', value: 'Full lifecycle' },
                { label: 'Approach', value: 'Right tool for the job' },
                { label: 'Base', value: 'Miami, FL' },
                { label: 'Status', value: 'Building' },
              ].map((item) => (
                <div key={item.label} className="min-w-[100px]">
                  <p className="mono-label mb-1">{item.label}</p>
                  <p className="font-mono text-xs text-white/70 tracking-wide">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom HUD readout */}
          <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-6 flex-wrap">
            <span className="font-mono text-[9px] tracking-[0.18em] text-electric/30">
              ID :: SAND_DVAL_001
            </span>
            <span className="font-mono text-[9px] tracking-[0.18em] text-electric/30">
              VER :: 2.4.1
            </span>
            <span className="font-mono text-[9px] tracking-[0.18em] text-electric/30">
              LOOP :: ONLINE
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

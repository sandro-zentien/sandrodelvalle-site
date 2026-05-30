import { useInView } from '../hooks/useInView'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../translations'

export default function About() {
  const [ref, inView] = useInView()
  const { lang } = useLanguage()
  const tx = t[lang].about

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section tag */}
        <div className={`section-tag mb-10 fade-up ${inView ? 'visible' : ''}`}>
          <span className="h-px w-6 bg-electric/40" />
          <span>{tx.tag}</span>
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
            <span className="mono-label">{tx.hudLabel}</span>
            <div className="flex items-center gap-2">
              <span className="status-dot" />
              <span className="font-mono text-[9px] tracking-[0.15em] text-electric/50">
                {tx.hudStatus}
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
            {/* Bio */}
            <div>
              <h2 className="font-sans text-3xl md:text-4xl font-semibold text-white mb-6 leading-snug">
                {tx.h1}
                <span className="text-electric"> {tx.h2}</span> {tx.h3}{' '}
                <span className="text-amber">{tx.h4}</span>.
              </h2>
              <p className="text-white/55 text-base leading-relaxed mb-4">{tx.bio1}</p>
              <p className="text-white/55 text-base leading-relaxed mb-4">{tx.bio2}</p>
              <p className="text-white/55 text-base leading-relaxed mb-4">{tx.bio3}</p>
              <p className="text-white/55 text-base leading-relaxed">{tx.bio4}</p>
            </div>

            {/* Side stats */}
            <div className="flex md:flex-col gap-6 md:gap-5 flex-wrap">
              {tx.stats.map((item) => (
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

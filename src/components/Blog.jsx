import { useInView } from '../hooks/useInView'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../translations'

function PostCard({ post, delay, tx }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`glass-card group relative p-6 md:p-7 flex items-start gap-6 cursor-pointer fade-up ${inView ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Left: date */}
      <div className="shrink-0 pt-0.5">
        <span className="font-mono text-[9px] tracking-[0.18em] text-electric/35 block">
          {post.date}
        </span>
      </div>

      {/* Divider */}
      <div className="w-px self-stretch bg-white/5 shrink-0" />

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-sans text-base font-medium text-white/85 mb-2 leading-snug group-hover:text-electric transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-white/40 text-sm leading-relaxed mb-4 hidden sm:block">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[9px] tracking-[0.15em] text-electric/35 uppercase">
            {post.readTime} {tx.read}
          </span>
          <span className="font-mono text-[9px] tracking-[0.15em] text-electric/25">
            &middot;
          </span>
          <span className="font-mono text-[9px] tracking-[0.15em] text-electric/35 uppercase group-hover:text-electric/60 transition-colors duration-200">
            {tx.comingSoon}
          </span>
        </div>
      </div>

      {/* Arrow */}
      <div className="shrink-0 self-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="#00aaff"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}

export default function Blog() {
  const [tagRef, tagInView] = useInView()
  const { lang } = useLanguage()
  const tx = t[lang].blog

  return (
    <section id="blog" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section tag */}
        <div
          ref={tagRef}
          className={`section-tag mb-10 fade-up ${tagInView ? "visible" : ""}`}
        >
          <span className="h-px w-6 bg-electric/40" />
          <span>{tx.tag}</span>
        </div>

        <div
          className={`mb-8 fade-up ${tagInView ? "visible" : ""}`}
          style={{ transitionDelay: "60ms" }}
        >
          <h2 className="font-sans text-3xl md:text-4xl font-semibold text-white leading-snug">
            {tx.heading}
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {tx.posts.map((post, i) => (
            <PostCard key={post.id} post={post} delay={i * 80} tx={tx} />
          ))}
        </div>
      </div>
    </section>
  )
}

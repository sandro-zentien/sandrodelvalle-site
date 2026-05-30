import { useState } from 'react'
import { useInView } from '../hooks/useInView'

export default function Contact() {
  const [tagRef, tagInView] = useInView()
  const [formRef, formInView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('https://formspree.io/f/xkoeawrr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSent(true)
        setForm({ name: '', email: '', message: '' })
      } else {
        setError('Transmission failed. Please try again.')
      }
    } catch {
      setError('Transmission failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-28 px-6 pb-36">
      <div className="max-w-4xl mx-auto">
        {/* Section tag */}
        <div
          ref={tagRef}
          className={`section-tag mb-10 fade-up ${tagInView ? 'visible' : ''}`}
        >
          <span className="h-px w-6 bg-electric/40" />
          <span>04 :: Contact</span>
        </div>

        <div
          className={`mb-10 fade-up ${tagInView ? 'visible' : ''}`}
          style={{ transitionDelay: '60ms' }}
        >
          <h2 className="font-sans text-3xl md:text-4xl font-semibold text-white leading-snug mb-3">
            Let's build something.
          </h2>
          <p className="text-white/45 text-base max-w-lg">
            Whether it's a collaboration, an idea, or just a conversation —
            I'm always open to connecting with interesting people.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
          {/* Form */}
          <div
            ref={formRef}
            className={`glass-card relative p-7 md:p-9 fade-up ${formInView ? 'visible' : ''}`}
            style={{ transitionDelay: '100ms' }}
          >
            {/* HUD corners */}
            <span className="hud-tl" />
            <span className="hud-tr" />
            <span className="hud-bl" />
            <span className="hud-br" />

            {/* HUD bar */}
            <div className="flex items-center justify-between mb-7">
              <span className="mono-label">TRANSMISSION</span>
              <div className="flex items-center gap-2">
                <span
                  className={`inline-block w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                    sent
                      ? 'bg-[#f5a623] shadow-[0_0_6px_rgba(245,166,35,0.8)]'
                      : 'bg-electric shadow-[0_0_6px_rgba(0,170,255,0.6)] animate-pulse'
                  }`}
                />
                <span className="font-mono text-[9px] tracking-[0.15em] text-electric/45">
                  {sent ? 'SENT' : 'READY'}
                </span>
              </div>
            </div>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-10 gap-4">
                <div className="w-10 h-10 border border-electric/40 rounded-full flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M3.5 9l4 4 7-7"
                      stroke="#00aaff"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="font-mono text-xs tracking-widest text-electric/60 uppercase">
                  Message Queued
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="mono-label block mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="// your_name"
                      className="glass-input"
                    />
                  </div>
                  <div>
                    <label className="mono-label block mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="// email@domain.io"
                      className="glass-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="mono-label block mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="// what's on your mind?"
                    className="glass-input resize-none"
                  />
                </div>

                {error && (
                  <p className="font-mono text-[10px] tracking-widest text-red-400/70 uppercase">
                    {error}
                  </p>
                )}
                <div className="flex justify-end pt-2">
                  <button type="submit" className="send-btn" disabled={loading}>
                    {loading ? 'Sending...' : 'Transmit'}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Side links */}
          <div
            className={`flex flex-col gap-4 md:pt-2 fade-up ${formInView ? 'visible' : ''}`}
            style={{ transitionDelay: '180ms' }}
          >
            {[
              { label: 'GitHub', handle: '@sandro-zentien', href: 'https://github.com/sandro-zentien' },
              { label: 'LinkedIn', handle: 'in/sandrodev', href: 'https://linkedin.com/in/sandrodev' },
              { label: 'Twitter / X', handle: '@sandro_delvalle', href: 'https://x.com/sandro_delvalle' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card group p-4 flex items-center justify-between gap-4 min-w-[180px] hover:border-electric/20 transition-all duration-200"
              >
                <div>
                  <p className="mono-label mb-0.5">{social.label}</p>
                  <p className="font-mono text-xs text-white/40 group-hover:text-electric/60 transition-colors duration-200">
                    {social.handle}
                  </p>
                </div>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="opacity-30 group-hover:opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0"
                >
                  <path
                    d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7"
                    stroke="#00aaff"
                    strokeWidth="1.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto mt-24 pt-6 border-t border-white/5 flex items-center justify-between flex-wrap gap-3">
        <span className="font-mono text-[9px] tracking-[0.18em] text-electric/25">
          © 2025 SANDRO del VALLE
        </span>
        <span className="font-mono text-[9px] tracking-[0.18em] text-electric/25">
          DESIGNED IN LA :: BUILT IN REACT
        </span>
      </div>
    </section>
  )
}

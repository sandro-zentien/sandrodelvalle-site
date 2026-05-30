import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../translations'

export default function Hero() {
  const { lang } = useLanguage()
  const tx = t[lang].hero
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    function initParticles() {
      const count = Math.floor((canvas.width * canvas.height) / 18000)
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 1.2 + 0.4,
        opacity: Math.random() * 0.45 + 0.1,
        pulse: Math.random() * Math.PI * 2,
      }))
    }

    function draw(t) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Grid lines
      const gridSize = 70
      ctx.lineWidth = 1

      // Vertical
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(0, 170, 255, ${x % (gridSize * 5) === 0 ? 0.07 : 0.035})`
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Horizontal
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(0, 170, 255, ${y % (gridSize * 5) === 0 ? 0.07 : 0.035})`
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Ambient glow at center
      const grad = ctx.createRadialGradient(
        canvas.width / 2, canvas.height * 0.5, 0,
        canvas.width / 2, canvas.height * 0.5, canvas.width * 0.45
      )
      grad.addColorStop(0, 'rgba(0, 170, 255, 0.035)')
      grad.addColorStop(1, 'transparent')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Particles
      for (const p of particles) {
        p.pulse += 0.015
        const opacity = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse))

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 170, 255, ${opacity})`
        ctx.fill()

        p.x += p.vx
        p.y += p.vy

        if (p.x < -10) p.x = canvas.width + 10
        if (p.x > canvas.width + 10) p.x = -10
        if (p.y < -10) p.y = canvas.height + 10
        if (p.y > canvas.height + 10) p.y = -10
      }

      animId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize, { passive: true })
    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-deep to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl">
        {/* HUD top bar */}
        <div className="flex items-center gap-4 mb-10 fade-up visible" style={{ transitionDelay: '0ms' }}>
          <span className="h-px w-10 bg-electric/30" />
          <span className="font-mono text-[10px] tracking-[0.2em] text-electric/50">
            {tx.hud}
          </span>
          <span className="h-px w-10 bg-electric/30" />
        </div>

        {/* Name */}
        <h1
          className="font-sans font-bold text-[clamp(2.8rem,8vw,7rem)] tracking-tight text-white leading-none mb-5"
          style={{ textShadow: '0 0 60px rgba(0,170,255,0.12)' }}
        >
          Sandro del Valle
        </h1>

        {/* Tagline */}
        <p className="font-mono text-[clamp(0.75rem,2vw,1rem)] tracking-[0.3em] uppercase text-electric/80 mb-14">
          {tx.tagline}
        </p>

        {/* CTA */}
        <a href="#projects" className="glass-btn">
          <span>{tx.cta}</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="opacity-70"
          >
            <path
              d="M2 7h10M8 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* Bottom HUD readout */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-between items-end px-8 md:px-16 pointer-events-none">
          <span className="font-mono text-[9px] tracking-[0.18em] text-electric/25 hidden sm:block">
            LAT 34.0522° N · LON 118.2437° W
          </span>
          <span className="font-mono text-[9px] tracking-[0.18em] text-electric/25 hidden sm:block">
            {tx.status}
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-[9px] tracking-[0.2em] text-electric/60">{tx.scroll}</span>
        <div className="w-px h-8 bg-gradient-to-b from-electric/50 to-transparent" />
      </div>
    </section>
  )
}

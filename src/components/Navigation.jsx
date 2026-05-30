import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../translations'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, toggle } = useLanguage()
  const links = t[lang].nav.links

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(8,12,16,0.88)] backdrop-blur-md border-b border-white/5'
          : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group"
          onClick={() => setMenuOpen(false)}
        >
          <span className="font-mono text-sm tracking-[0.2em] text-electric">
            S.DV
          </span>
          <span className="status-dot group-hover:scale-110 transition-transform" />
        </a>

        {/* Desktop links + language toggle */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] tracking-[0.16em] uppercase text-white/40 hover:text-electric transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}

          {/* Language toggle */}
          <button
            onClick={toggle}
            className="font-mono text-[11px] tracking-[0.16em] uppercase border border-electric/25 text-electric/50 hover:text-electric hover:border-electric/60 transition-all duration-200 px-2.5 py-1 rounded-sm"
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
        </div>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-4">
          {/* Language toggle mobile */}
          <button
            onClick={toggle}
            className="font-mono text-[10px] tracking-[0.16em] uppercase border border-electric/25 text-electric/50 px-2 py-0.5 rounded-sm"
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </button>

          {/* Hamburger */}
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-px bg-electric/70 transition-all duration-200 ${
                menuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-px bg-electric/70 transition-all duration-200 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-px bg-electric/70 transition-all duration-200 ${
                menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[rgba(8,12,16,0.97)] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-[11px] tracking-[0.16em] uppercase text-white/40 hover:text-electric transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

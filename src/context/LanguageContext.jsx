import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('sdv-lang') || 'en' } catch { return 'en' }
  })

  const toggle = () => {
    const next = lang === 'en' ? 'es' : 'en'
    setLang(next)
    try { localStorage.setItem('sdv-lang', next) } catch {}
  }

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

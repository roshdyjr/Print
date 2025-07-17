"use client"
import { createContext, useContext, useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

type LanguageContextType = {
  locale: string
  setLocale: (locale: string) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [locale, setLocale] = useState('en')

  // Extract locale from pathname on initial render
  useEffect(() => {
    const pathLocale = pathname.split('/')[1]
    if (pathLocale === 'ar' || pathLocale === 'en') {
      setLocale(pathLocale)
    }
  }, [pathname])

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en'
    setLocale(newLocale)
    
    // Update the URL with the new locale
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`) || `/${newLocale}`
    router.push(newPath)
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
"use client"
import { useLanguage } from '@/context/LanguageContext'
import enMessages from '@/messages/en.json'
import arMessages from '@/messages/ar.json'

export function useTranslation() {
  const { locale } = useLanguage()

  const t = (key: string) => {
    const messages = locale === 'ar' ? arMessages : enMessages
    const keys = key.split('.')
    let value = messages
    
    for (const k of keys) {
      value = value[k]
      if (!value) return key // Fallback to key if not found
    }
    
    return typeof value === 'string' ? value : key
  }

  return { t }
}
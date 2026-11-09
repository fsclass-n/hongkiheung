import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { ui } from './ui.js'

// 한국어(ko) / 영어(en) 전환을 위한 경량 i18n.
// - 번역 대상 문자열은 { ko: '...', en: '...' } 형태로 작성하고, t()로 현재 언어 값을 꺼냅니다.
// - 문자열 배열도 { ko: [...], en: [...] } 형태로 동일하게 사용할 수 있습니다.
const STORAGE_KEY = 'lang'
export const LANGS = ['ko', 'en']

const LanguageContext = createContext(null)

// 저장된 언어를 우선 사용하고, 없으면 주 방문자(국내 채용 담당자)를 고려해 한국어로 시작합니다.
function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (LANGS.includes(saved)) return saved
  } catch {
    /* 저장소 접근이 막힌 환경에서는 기본값 사용 */
  }
  return 'ko'
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang)

  const t = useCallback(
    (value) => (value && typeof value === 'object' && 'ko' in value ? (value[lang] ?? value.ko) : value),
    [lang],
  )

  const setLang = useCallback((next) => {
    if (!LANGS.includes(next)) return
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* 저장만 생략 */
    }
  }, [])

  // <html lang>, 문서 제목, 메타 설명을 언어에 맞춰 동기화 (접근성 · 브라우저 번역 오작동 방지)
  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t(ui.meta.title)
    const description = t(ui.meta.description)
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', t(ui.meta.title))
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', t(ui.meta.ogDescription))
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', lang === 'ko' ? 'ko_KR' : 'en_US')
  }, [lang, t])

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useI18n() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useI18n은 LanguageProvider 안에서만 사용할 수 있습니다.')
  return ctx
}

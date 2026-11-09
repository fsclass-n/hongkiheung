import { useEffect, useState } from 'react'
import { useI18n } from '../i18n/LanguageContext.jsx'
import { ui } from '../i18n/ui.js'
import { Icon } from './Icons.jsx'

// 일정 거리 이상 스크롤하면 나타나는 TOP 버튼
export default function BackToTop() {
  const { t } = useI18n()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={t(ui.backToTop)}
      tabIndex={visible ? 0 : -1}
      className={`btn-primary fixed right-5 bottom-5 z-50 grid h-12 w-12 place-items-center rounded-full transition duration-300 sm:right-8 sm:bottom-8 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <Icon name="arrowUp" className="h-5 w-5" strokeWidth={2.5} />
    </button>
  )
}

import { useEffect, useState } from 'react'
import { LANGS, useI18n } from '../i18n/LanguageContext.jsx'
import { ui } from '../i18n/ui.js'
import { navItems, profile } from '../data/profile.js'
import { Icon } from './Icons.jsx'

// 언어 전환: KO | EN 세그먼트 버튼 (현재 언어는 aria-pressed로 전달)
function LanguageSwitch() {
  const { lang, setLang, t } = useI18n()
  const labels = { ko: ui.header.langKo, en: ui.header.langEn }

  return (
    <div
      role="group"
      aria-label={t(ui.header.langGroup)}
      className="flex h-10 items-center rounded-full border border-line bg-surface/70 p-1 text-xs font-bold backdrop-blur"
    >
      {LANGS.map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          aria-label={t(labels[code])}
          className={`h-full rounded-full px-2.5 transition-colors ${
            lang === code ? 'btn-primary' : 'text-muted hover:text-fg'
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

// 상단 고정 내비게이션: 로고 / 섹션 메뉴 / 언어 · 테마 전환 / 모바일 메뉴
export default function Header({ theme, onToggleTheme, active }) {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isDark = theme === 'dark'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 모바일 메뉴: Esc로 닫기
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const linkClass = (id) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      active === id ? 'text-accent' : 'text-muted hover:text-fg'
    }`

  const themeLabel = t(isDark ? ui.header.toLight : ui.header.toDark)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || open
          ? 'border-line bg-bg/85 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-2">
        <a href="#top" className="flex items-center gap-2 font-bold tracking-tight" aria-label={t(ui.header.home)}>
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#3b64e8] to-[#7c3aed] font-mono text-sm text-white">
            {'</>'}
          </span>
          <span className="hidden min-[360px]:inline">{t(profile.name)}</span>
        </a>

        {/* 데스크톱 메뉴 */}
        <nav aria-label={t(ui.header.mainNav)} className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={linkClass(item.id)}
              aria-current={active === item.id ? 'true' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitch />
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
            className="btn-ghost grid h-10 w-10 place-items-center rounded-full transition"
          >
            <Icon name={isDark ? 'sun' : 'moon'} />
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={t(open ? ui.header.menuClose : ui.header.menuOpen)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="btn-ghost grid h-10 w-10 place-items-center rounded-full transition md:hidden"
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <nav
        id="mobile-menu"
        aria-label={t(ui.header.mobileNav)}
        hidden={!open}
        className="border-t border-line bg-bg/95 backdrop-blur-xl md:hidden"
      >
        <ul className="container-x flex flex-col py-3">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`block py-3 text-base font-medium ${active === item.id ? 'text-accent' : 'text-fg'}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

import { useEffect, useState } from 'react'
import { navItems, profile } from '../data/profile.js'
import { Icon } from './Icons.jsx'

// 상단 고정 내비게이션: 로고 / 섹션 메뉴 / 테마 전환 / 모바일 메뉴
export default function Header({ theme, onToggleTheme, active }) {
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || open
          ? 'border-line bg-bg/85 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-bold tracking-tight" aria-label="홍기흥 포트폴리오 맨 위로">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#3b64e8] to-[#7c3aed] font-mono text-sm text-white">
            {'</>'}
          </span>
          <span>{profile.name}</span>
        </a>

        {/* 데스크톱 메뉴 */}
        <nav aria-label="주요 메뉴" className="hidden items-center gap-1 md:flex">
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
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? '라이트 테마로 전환' : '다크 테마로 전환'}
            title={isDark ? '라이트 테마로 전환' : '다크 테마로 전환'}
            className="btn-ghost grid h-10 w-10 place-items-center rounded-full transition"
          >
            <Icon name={isDark ? 'sun' : 'moon'} />
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
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
        aria-label="모바일 메뉴"
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

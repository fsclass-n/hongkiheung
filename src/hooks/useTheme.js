import { useCallback, useEffect, useState } from 'react'

const THEME_COLOR = { dark: '#070b16', light: '#f5f7fc' }

// 라이트/다크 테마 상태 관리.
// 초기값은 public/theme-init.js가 <html data-theme>에 이미 지정해 둔 값을 읽습니다.
export default function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[theme])
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem('theme', next)
      } catch {
        /* 저장소 접근이 막힌 환경에서는 저장만 생략합니다 */
      }
      return next
    })
  }, [])

  return [theme, toggle]
}

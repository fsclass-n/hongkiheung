import { useEffect, useState } from 'react'

// 화면 중앙에 위치한 섹션 id를 반환해 내비게이션 활성 메뉴 표시에 사용합니다.
export default function useScrollSpy(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id))
      },
      // 뷰포트 세로 중앙 부근을 지나는 섹션만 감지
      { rootMargin: '-45% 0px -50% 0px' },
    )
    elements.forEach((el) => observer.observe(el))

    // 최상단(히어로)에서는 활성 메뉴를 해제
    const onScroll = () => window.scrollY < 120 && setActive('')
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [ids])

  return active
}

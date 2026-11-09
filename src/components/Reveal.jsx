import { useEffect, useRef } from 'react'

// 모든 Reveal이 하나의 IntersectionObserver를 공유해 비용을 줄입니다.
let sharedObserver
function getObserver() {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            sharedObserver.unobserve(entry.target) // 한 번만 재생
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
  }
  return sharedObserver
}

// 스크롤로 화면에 들어올 때 부드럽게 나타나는 래퍼. delay(ms)로 순차 등장을 연출합니다.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = getObserver()
    observer.observe(el)
    return () => observer.unobserve(el)
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ '--d': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}

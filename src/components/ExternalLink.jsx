// 외부 링크 공통 처리: 새 창 + noopener noreferrer(보안) + 스크린리더용 안내 문구
export default function ExternalLink({ href, children, className = '', ...rest }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
      {children}
      <span className="sr-only"> (새 창에서 열림)</span>
    </a>
  )
}

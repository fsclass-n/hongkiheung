import { useI18n } from '../i18n/LanguageContext.jsx'
import { ui } from '../i18n/ui.js'

// 외부 링크 공통 처리: 새 창 + noopener noreferrer(보안) + 스크린리더용 안내 문구
export default function ExternalLink({ href, children, className = '', ...rest }) {
  const { t } = useI18n()
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
      {children}
      <span className="sr-only">{t(ui.newWindow)}</span>
    </a>
  )
}

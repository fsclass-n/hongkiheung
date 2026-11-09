import { useI18n } from '../i18n/LanguageContext.jsx'
import { ui } from '../i18n/ui.js'
import { profile } from '../data/profile.js'

export default function Footer() {
  const { t } = useI18n()
  return (
    <footer className="border-t border-line py-8">
      <div className="container-x flex flex-col items-center justify-between gap-2 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {t(profile.name)}. {t(ui.footer.rights)}
        </p>
        <p className="font-mono text-xs">Built with React · Tailwind CSS 4 · Deployed on Netlify</p>
      </div>
    </footer>
  )
}

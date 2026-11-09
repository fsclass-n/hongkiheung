import { profile } from '../data/profile.js'
import { useI18n } from '../i18n/LanguageContext.jsx'
import { ui } from '../i18n/ui.js'
import ContactForm from './ContactForm.jsx'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

// SECTION 7. CONTACT: 클릭 한 번으로 전화/이메일 연결 + Web3Forms 문의 폼
export default function Contact() {
  const { t, lang } = useI18n()
  const rows = [
    { icon: 'mail', label: 'Email', value: profile.email, href: profile.emailHref(lang), action: ui.contact.sendEmail },
    { icon: 'phone', label: 'Phone', value: profile.phone, href: profile.phoneHref, action: ui.contact.call },
  ]

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-soft py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          index="07"
          label="CONTACT"
          id="contact-title"
          title={t(ui.contact.title)}
          desc={t(ui.contact.desc)}
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* 좌측: 이름 + 전화/이메일 바로 연결 */}
          <Reveal className="card relative overflow-hidden p-7 sm:p-9">
            <div className="hero-bg absolute inset-0 opacity-70" aria-hidden="true" />
            <div className="relative">
              <p className="font-mono text-sm font-semibold tracking-widest text-accent">{profile.role}</p>
              <p className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">{t(profile.name)}</p>
              <p className="mt-4 text-muted">{t(ui.contact.lead)}</p>

              <ul className="mt-8 grid gap-3">
                {rows.map((r) => (
                  <li key={r.label}>
                    <a
                      href={r.href}
                      className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 transition duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[var(--shadow-hover)]"
                    >
                      <span className="btn-primary grid h-12 w-12 shrink-0 place-items-center rounded-xl">
                        <Icon name={r.icon} className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-mono text-xs font-bold tracking-widest text-muted uppercase">{r.label}</span>
                        <span className="block truncate text-lg font-bold">{r.value}</span>
                        <span className="mt-0.5 flex items-center gap-1 text-sm font-semibold text-accent">
                          {t(r.action)}
                          <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* 우측: Web3Forms 문의 폼 */}
          <Reveal delay={100} className="card p-7 sm:p-9">
            <ContactForm />
          </Reveal>
        </div>

        <Reveal className="mt-14 text-center">
          <p className="text-xl font-bold sm:text-2xl">
            {t(ui.contact.closing1)}
            <span className="gradient-text">{t(ui.contact.closing2)}</span>
            {t(ui.contact.closing3)}
          </p>
          <p className="mt-2 text-muted">{t(ui.contact.thanks)}</p>
        </Reveal>
      </div>
    </section>
  )
}

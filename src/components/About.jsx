import { aboutHighlights, profile } from '../data/profile.js'
import { education } from '../data/education.js'
import { useI18n } from '../i18n/LanguageContext.jsx'
import { ui } from '../i18n/ui.js'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

// SECTION 2. ABOUT ME
export default function About() {
  const { t } = useI18n()
  return (
    <section id="about" aria-labelledby="about-title" className="py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          index="02"
          label="ABOUT ME"
          id="about-title"
          title={t(ui.about.title)}
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* 좌측: 소개 글 + 학력 요약 */}
          <Reveal className="space-y-6">
            <p className="text-lg leading-8 text-muted">
              <strong className="font-bold text-fg">{t(profile.degree)}</strong>
              {t(ui.about.p1Tail)}
            </p>
            <p className="text-lg leading-8 text-muted">
              {t(ui.about.p2)}
            </p>

            <ul className="card divide-y divide-line overflow-hidden">
              {education.slice().reverse().map((e) => (
                <li key={e.title.ko} className="flex items-start gap-3 px-5 py-4">
                  <Icon name="graduation" className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold">{t(e.title)}</p>
                    <p className="text-sm text-muted">
                      {t(e.org)} · {t(e.period)}
                      {e.hours ? ` · ${e.hours.toLocaleString()} ${t(ui.about.hours)}` : ''}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* 우측: 핵심 메시지 4가지 */}
          <ul className="grid gap-4 sm:grid-cols-2">
            {aboutHighlights.map((h, i) => (
              <Reveal as="li" key={h.title.ko} delay={i * 80}>
                <article className="card group h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[var(--shadow-hover)]">
                  <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#3b64e8] to-[#7c3aed] text-white transition-transform duration-300 group-hover:scale-110">
                    <Icon name={h.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg leading-snug font-bold">{t(h.title)}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{t(h.desc)}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

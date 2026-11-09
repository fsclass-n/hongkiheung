import { education } from '../data/education.js'
import { useI18n } from '../i18n/LanguageContext.jsx'
import { ui } from '../i18n/ui.js'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

// 'YYYY-MM' 종료월이 현재보다 미래이면 '수료 예정'으로 표시 (날짜가 지나면 자동으로 '수료'로 바뀝니다)
function statusOf(item) {
  const [y, m] = item.endDate.split('-').map(Number)
  const ended = new Date(y, m, 1) <= new Date() // 해당 월 말일 이후인지
  if (item.type === 'degree') return 'graduated'
  return ended ? 'completed' : 'pending'
}

// SECTION 5. EDUCATION: 세로 타임라인
export default function Education() {
  const { t } = useI18n()
  return (
    <section id="education" aria-labelledby="education-title" className="bg-soft py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading index="05" label="EDUCATION" id="education-title" title={t(ui.education.title)} />

        <ol className="relative ml-3 space-y-8 border-l-2 border-line pl-8 sm:ml-4 sm:pl-10">
          {education.map((e, i) => {
            const status = statusOf(e)
            const pending = status === 'pending'
            return (
              <Reveal as="li" key={e.title.ko} delay={i * 100} className="relative">
                {/* 타임라인 노드 */}
                <span
                  className={`absolute top-6 -left-[calc(2rem+9px)] grid h-4 w-4 place-items-center rounded-full border-2 sm:-left-[calc(2.5rem+9px)] ${
                    pending ? 'border-accent bg-bg' : 'border-accent bg-accent'
                  }`}
                  aria-hidden="true"
                />
                <article className="card p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[var(--shadow-hover)]">
                  <div className="flex flex-wrap items-center gap-2">
                    <time className="font-mono text-sm font-bold text-accent">{t(e.period)}</time>
                    <span className="rounded-full border border-line bg-surface2 px-2.5 py-0.5 text-xs font-semibold">
                      {t(ui.education[e.type])}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                        pending ? 'bg-amber-400/15 text-amber-600 dark:text-amber-300' : 'bg-emerald-400/15 text-emerald-700 dark:text-emerald-300'
                      }`}
                    >
                      {t(ui.education[status])}
                    </span>
                  </div>
                  <h3 className="mt-3 flex items-center gap-2 text-xl font-bold">
                    <Icon name="graduation" className="h-5 w-5 shrink-0 text-accent" />
                    {t(e.title)}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{t(e.org)}</p>
                  {e.hours && (
                    <p className="mt-3 inline-flex items-baseline gap-1.5 rounded-lg bg-surface2 px-3 py-1.5">
                      <span className="gradient-text text-2xl font-extrabold">{e.hours.toLocaleString()}</span>
                      <span className="text-sm font-semibold text-muted">{t(ui.education.hours)}</span>
                    </p>
                  )}
                  <p className="mt-3 text-sm leading-7 text-muted">{t(e.desc)}</p>
                </article>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

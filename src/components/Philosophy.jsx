import { philosophy } from '../data/profile.js'
import { useI18n } from '../i18n/LanguageContext.jsx'
import { ui } from '../i18n/ui.js'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

// SECTION 6. DEVELOPMENT PHILOSOPHY
export default function Philosophy() {
  const { t } = useI18n()
  return (
    <section id="philosophy" aria-labelledby="philosophy-title" className="py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          index="06"
          label="DEVELOPMENT PHILOSOPHY"
          id="philosophy-title"
          title={t(ui.philosophy.title)}
        />

        <ol className="grid gap-4 sm:grid-cols-2">
          {philosophy.map((p, i) => (
            <Reveal as="li" key={p.title.ko} delay={(i % 2) * 90}>
              <article className="card group relative h-full overflow-hidden p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[var(--shadow-hover)]">
                <span className="absolute top-3 right-5 font-mono text-6xl font-black text-fg/5 select-none" aria-hidden="true">
                  0{i + 1}
                </span>
                <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#3b64e8] to-[#7c3aed] text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <h3 className="text-xl font-bold">{t(p.title)}</h3>
                <p className="mt-2 leading-7 text-muted">{t(p.desc)}</p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

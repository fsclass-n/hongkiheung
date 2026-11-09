import { skillCategories } from '../data/skills.js'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import TechIcon from './TechIcon.jsx'

// SECTION 3. TECH STACK: 분야별 분류 → 기술 카드(아이콘 · 이름 · 활용 분야)
export default function TechStack() {
  return (
    <section id="tech" aria-labelledby="tech-title" className="bg-soft py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          index="03"
          label="TECH STACK"
          id="tech-title"
          title="화면부터 데이터, 배포, AI까지"
          desc="기술을 나열하지 않고 개발 분야별로 구분하고, 각 기술이 어디에 쓰이는지 함께 정리했습니다."
        />

        <div className="space-y-14">
          {skillCategories.map((cat) => (
            <section key={cat.id} aria-labelledby={`cat-${cat.id}`}>
              <Reveal className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface text-accent">
                  <Icon name={cat.icon} className="h-5 w-5" />
                </span>
                <h3 id={`cat-${cat.id}`} className="text-xl font-bold tracking-tight">
                  {cat.title}
                </h3>
                <p className="text-sm text-muted">{cat.summary}</p>
              </Reveal>

              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {cat.items.map((item, i) => (
                  <Reveal as="li" key={item.name} delay={(i % 3) * 70}>
                    <div className="card group flex h-full items-start gap-4 p-4 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[var(--shadow-hover)]">
                      <TechIcon item={item} />
                      <div className="min-w-0">
                        <h4 className="leading-snug font-bold">{item.name}</h4>
                        <p className="mt-1 text-sm leading-6 text-muted">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}

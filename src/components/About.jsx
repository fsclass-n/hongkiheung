import { aboutHighlights, profile } from '../data/profile.js'
import { education } from '../data/education.js'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

// SECTION 2. ABOUT ME
export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          index="02"
          label="ABOUT ME"
          id="about-title"
          title="배운 것을 서비스로 만들어 배포하는 개발자"
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* 좌측: 소개 글 + 학력 요약 */}
          <Reveal className="space-y-6">
            <p className="text-lg leading-8 text-muted">
              <strong className="font-bold text-fg">{profile.degree}</strong> 후 개발자로 진로를 전환해, 두드림컴퓨터학원
              분당미금점에서 빅데이터 과정과 심화 과정을 이어가고 있습니다.
            </p>
            <p className="text-lg leading-8 text-muted">
              화면(React)과 서버(Spring Boot), 데이터(MySQL · TiDB), 배포(Netlify · Render · AWS)까지 한 흐름으로 다루는
              풀스택 개발을 학습하고, Python으로 데이터 수집 · 분석 · 추천까지 연결합니다. 막히는 지점은 생성형 AI와
              함께 원인을 분석하고, 결과는 직접 검증해 서비스에 반영합니다.
            </p>

            <ul className="card divide-y divide-line overflow-hidden">
              {education.slice().reverse().map((e) => (
                <li key={e.title} className="flex items-start gap-3 px-5 py-4">
                  <Icon name="graduation" className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold">{e.title}</p>
                    <p className="text-sm text-muted">
                      {e.org} · {e.period}
                      {e.hours ? ` · ${e.hours.toLocaleString()}시간` : ''}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* 우측: 핵심 메시지 4가지 */}
          <ul className="grid gap-4 sm:grid-cols-2">
            {aboutHighlights.map((h, i) => (
              <Reveal as="li" key={h.title} delay={i * 80}>
                <article className="card group h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[var(--shadow-hover)]">
                  <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#3b64e8] to-[#7c3aed] text-white transition-transform duration-300 group-hover:scale-110">
                    <Icon name={h.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg leading-snug font-bold">{h.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{h.desc}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

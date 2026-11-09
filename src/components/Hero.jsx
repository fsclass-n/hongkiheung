import { heroMessages, profile } from '../data/profile.js'
import { projects } from '../data/projects.js'
import { skillCategories } from '../data/skills.js'
import { Icon } from './Icons.jsx'

// 히어로 우측의 코드 카드: 개발자다운 분위기와 핵심 정보를 한눈에 전달합니다.
const code = [
  [
    ['k', 'const '],
    ['v', 'developer'],
    ['p', ' = {'],
  ],
  [
    ['p', '  '],
    ['n', 'name'],
    ['p', ': '],
    ['s', `'${profile.name}'`],
    ['p', ','],
  ],
  [
    ['p', '  '],
    ['n', 'role'],
    ['p', ': '],
    ['s', `'${profile.role}'`],
    ['p', ','],
  ],
  [
    ['p', '  '],
    ['n', 'frontend'],
    ['p', ': ['],
    ['s', "'React'"],
    ['p', ', '],
    ['s', "'Tailwind'"],
    ['p', '],'],
  ],
  [
    ['p', '  '],
    ['n', 'backend'],
    ['p', ': ['],
    ['s', "'Spring Boot'"],
    ['p', ', '],
    ['s', "'FastAPI'"],
    ['p', '],'],
  ],
  [
    ['p', '  '],
    ['n', 'data'],
    ['p', ': ['],
    ['s', "'Python'"],
    ['p', ', '],
    ['s', "'RPA'"],
    ['p', ', '],
    ['s', "'ML'"],
    ['p', '],'],
  ],
  [
    ['p', '  '],
    ['n', 'ai'],
    ['p', ': ['],
    ['s', "'Codex'"],
    ['p', ', '],
    ['s', "'Claude'"],
    ['p', ', '],
    ['s', "'Gemini'"],
    ['p', '],'],
  ],
  [
    ['p', '  '],
    ['n', 'deployed'],
    ['p', ': '],
    ['m', String(projects.length)],
    ['p', ','],
    ['c', ' // projects'],
  ],
  [['p', '};']],
]

// 토큰 종류별 색상 (라이트/다크 모두에서 읽히도록 대비 확보)
const tokenColor = {
  k: 'text-[#c4b5fd]',
  v: 'text-[#93c5fd]',
  n: 'text-[#7dd3fc]',
  s: 'text-[#86efac]',
  m: 'text-[#fdba74]',
  c: 'text-[#8b98b8]',
  p: 'text-[#cbd5e1]',
}

export default function Hero() {
  const stats = [
    { value: projects.length, label: '배포한 프로젝트' },
    { value: skillCategories.length, label: '기술 영역' },
    { value: skillCategories.find((c) => c.id === 'cloud').items.length, label: '클라우드 · 배포 도구' },
  ]

  return (
    <section id="top" className="hero-bg relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p
            className="rise inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-1.5 font-mono text-xs font-semibold tracking-wider text-accent backdrop-blur"
            style={{ '--d': '0ms' }}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            FULL-STACK · DATA · GENERATIVE AI
          </p>

          <h1 className="rise mt-6 text-5xl leading-[1.1] font-black tracking-tight sm:text-6xl lg:text-7xl" style={{ '--d': '80ms' }}>
            <span className="block text-2xl font-bold text-muted sm:text-3xl">안녕하세요, 개발자</span>
            <span className="gradient-text">{profile.name}</span>
            <span className="text-fg">입니다.</span>
          </h1>

          <p className="rise mt-6 max-w-xl text-xl font-bold leading-snug text-fg sm:text-2xl" style={{ '--d': '160ms' }}>
            기획부터 배포까지, <br className="hidden sm:block" />
            직접 만들어 증명하는 풀스택 개발자.
          </p>

          <p className="rise mt-5 max-w-xl text-base text-muted sm:text-lg" style={{ '--d': '220ms' }}>
            체육학 전공 후 개발자의 길로 들어와 빅데이터 과정을 거치며 풀스택 개발과 Python 데이터 분석을 익혔습니다.
            팀 프로젝트로 실제 서비스를 개발해 클라우드에 배포했고, 생성형 AI를 개발 파트너로 활용합니다.
          </p>

          <ul className="rise mt-6 flex flex-wrap gap-2" style={{ '--d': '280ms' }}>
            {heroMessages.map((m) => (
              <li
                key={m.text}
                className="flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium"
              >
                <Icon name={m.icon} className="h-4 w-4 text-accent" />
                {m.text}
              </li>
            ))}
          </ul>

          <div className="rise mt-9 flex flex-wrap gap-3" style={{ '--d': '340ms' }}>
            <a
              href="#projects"
              className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-bold transition duration-300"
            >
              프로젝트 보기
              <Icon name="arrowDown" className="h-4 w-4" strokeWidth={2.5} />
            </a>
            <a
              href={profile.emailHref}
              className="btn-ghost inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-bold transition duration-300"
            >
              <Icon name="mail" className="h-4 w-4" />
              이메일 연락하기
            </a>
          </div>

          <dl className="rise mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-line pt-6" style={{ '--d': '420ms' }}>
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-extrabold tracking-tight">{s.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-muted sm:text-sm" aria-hidden="true">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* 코드 카드 */}
        <div className="rise relative hidden sm:block" style={{ '--d': '300ms' }}>
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#3b64e8]/30 to-[#7c3aed]/30 blur-2xl" aria-hidden="true" />
          <figure
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a1020] shadow-2xl"
            aria-label="개발자 프로필 요약 코드"
          >
            <figcaption className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden="true" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden="true" />
              <span className="ml-3 font-mono text-xs text-[#8b98b8]">developer.js</span>
            </figcaption>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:text-sm" aria-hidden="true">
              <code>
                {code.map((line, i) => (
                  <span key={i} className="block">
                    {line.map(([type, text], j) => (
                      <span key={j} className={tokenColor[type]}>
                        {text}
                      </span>
                    ))}
                    {i === code.length - 1 && <span className="caret ml-1 inline-block h-4 w-2 translate-y-0.5 bg-[#7dd3fc]" />}
                  </span>
                ))}
              </code>
            </pre>
          </figure>
        </div>
      </div>
    </section>
  )
}

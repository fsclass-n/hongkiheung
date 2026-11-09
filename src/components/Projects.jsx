import { projects } from '../data/projects.js'
import ExternalLink from './ExternalLink.jsx'
import { GithubIcon, Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

// 카드 내 소제목 + 목록
function InfoList({ title, items }) {
  return (
    <div>
      <h4 className="mb-2 font-mono text-xs font-bold tracking-wider text-accent uppercase">{title}</h4>
      <ul className="space-y-1.5 text-sm leading-6 text-muted">
        {items.map((text) => (
          <li key={text} className="flex gap-2">
            <Icon name="check" className="mt-1 h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={3} />
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ProjectCard({ project: p, index }) {
  const primary = p.services[0]

  return (
    <Reveal as="li" delay={(index % 2) * 100}>
      <article className="card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-2 hover:border-accent/50 hover:shadow-[var(--shadow-hover)]">
        {/* 대표 이미지: 클릭하면 실제 서비스로 이동 */}
        <ExternalLink
          href={primary.url}
          className="relative block aspect-[8/5] overflow-hidden border-b border-line bg-surface2"
          aria-label={`${p.name} 실제 서비스 열기`}
        >
          <img
            src={p.image}
            alt={p.imageAlt}
            width="960"
            height="600"
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
          <span className="absolute top-3 left-3 rounded-full bg-black/65 px-3 py-1 font-mono text-xs font-semibold text-white backdrop-blur">
            {p.kind}
          </span>
        </ExternalLink>

        <div className="flex flex-1 flex-col gap-5 p-6">
          <header>
            <p className="font-mono text-xs text-muted">{p.meta}</p>
            <h3 className="mt-1 text-2xl font-extrabold tracking-tight">{p.name}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{p.overview}</p>
          </header>

          {p.role && (
            <p className="rounded-lg border border-accent/30 bg-accent/10 px-3.5 py-2.5 text-sm leading-6">
              <span className="mr-2 font-mono text-xs font-bold tracking-wider text-accent uppercase">My Role</span>
              {p.role}
            </p>
          )}

          {p.metrics && (
            <dl className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {p.metrics.map((m) => (
                <div key={m.label} className="rounded-lg bg-surface2 px-3 py-2.5 text-center">
                  <dd className="gradient-text text-lg font-extrabold">{m.value}</dd>
                  <dt className="text-xs leading-tight text-muted">{m.label}</dt>
                </div>
              ))}
            </dl>
          )}
          {p.metrics && <p className="-mt-3 text-xs text-muted">※ 프로젝트 소개 페이지에 공개된 지표입니다.</p>}

          <InfoList title="주요 기능" items={p.features} />
          <InfoList title="핵심 구현 기술" items={p.coreTech} />

          <div>
            <h4 className="mb-2 font-mono text-xs font-bold tracking-wider text-accent uppercase">사용 기술</h4>
            <ul className="flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <li key={s} className="rounded-md border border-line bg-surface2 px-2.5 py-1 text-xs font-medium">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* 링크: 실제 서비스(채움 버튼) / GitHub 소개(테두리 버튼)를 명확히 구분 */}
          <div className="mt-auto space-y-3 border-t border-line pt-5">
            <div>
              <p className="mb-2 flex items-center gap-2 text-xs font-bold text-muted">
                <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                LIVE SERVICE · 실제 서비스
              </p>
              <div className="flex flex-wrap gap-2">
                {p.services.map((s, i) => (
                  <ExternalLink
                    key={s.url}
                    href={s.url}
                    className={`${i === 0 ? 'btn-primary' : 'btn-ghost'} inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold transition duration-300`}
                  >
                    {p.services.length > 1 ? `서비스 ${i + 1} · ${s.label}` : '서비스 바로가기'}
                    <Icon name="external" className="h-4 w-4" />
                  </ExternalLink>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 flex items-center gap-2 text-xs font-bold text-muted">
                <GithubIcon className="h-3.5 w-3.5" />
                GITHUB · 프로젝트 소개
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <ExternalLink
                  href={p.github.url}
                  className="btn-ghost inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold transition duration-300"
                >
                  <GithubIcon className="h-4 w-4" />
                  {p.github.label}
                  <Icon name="external" className="h-4 w-4" />
                </ExternalLink>
                {p.repo && (
                  <ExternalLink href={p.repo} className="text-sm font-medium text-muted underline-offset-4 hover:text-accent hover:underline">
                    소스코드
                  </ExternalLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

// SECTION 4. PROJECTS
export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          index="04"
          label="PROJECTS"
          id="projects-title"
          title="기획하고, 구현하고, 배포한 프로젝트"
          desc="모든 프로젝트는 실제 접속 가능한 서비스로 배포되어 있습니다. 서비스 화면과 GitHub 소개 페이지를 각각 확인할 수 있습니다."
        />
        <ul className="grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}

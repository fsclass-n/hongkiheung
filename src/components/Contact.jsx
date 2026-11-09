import { profile } from '../data/profile.js'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

// SECTION 7. CONTACT: 클릭 한 번으로 전화/이메일 연결
export default function Contact() {
  const rows = [
    { icon: 'mail', label: 'Email', value: profile.email, href: profile.emailHref, action: '이메일 보내기' },
    { icon: 'phone', label: 'Phone', value: profile.phone, href: profile.phoneHref, action: '전화 걸기' },
  ]

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-soft py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          index="07"
          label="CONTACT"
          id="contact-title"
          title="함께 일할 수 있기를 기대합니다"
          desc="채용 담당자와 면접관분들의 연락을 기다리고 있습니다. 편하신 방법으로 연락 주세요."
        />

        <Reveal className="card relative overflow-hidden p-8 sm:p-12">
          <div className="hero-bg absolute inset-0 opacity-70" aria-hidden="true" />
          <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="font-mono text-sm font-semibold tracking-widest text-accent">{profile.role}</p>
              <p className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">{profile.name}</p>
              <p className="mt-4 text-muted">
                새로운 기술을 배우고 서비스로 만드는 일을 좋아합니다. 부담 없이 연락 주세요.
              </p>
            </div>

            <ul className="grid gap-4">
              {rows.map((r) => (
                <li key={r.label}>
                  <a
                    href={r.href}
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 transition duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[var(--shadow-hover)] sm:p-5"
                  >
                    <span className="btn-primary grid h-12 w-12 shrink-0 place-items-center rounded-xl">
                      <Icon name={r.icon} className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-xs font-bold tracking-widest text-muted uppercase">{r.label}</span>
                      <span className="block truncate text-lg font-bold sm:text-xl">{r.value}</span>
                    </span>
                    <span className="hidden items-center gap-1 text-sm font-semibold text-accent sm:flex">
                      {r.action}
                      <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="mt-14 text-center">
          <p className="text-xl font-bold sm:text-2xl">
            배우는 속도만큼 <span className="gradient-text">성장하는 개발자</span>가 되겠습니다.
          </p>
          <p className="mt-2 text-muted">읽어 주셔서 감사합니다.</p>
        </Reveal>
      </div>
    </section>
  )
}

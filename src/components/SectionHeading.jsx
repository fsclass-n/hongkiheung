import Reveal from './Reveal.jsx'

// 섹션 공통 제목 영역: 번호 + 영문 라벨 / 제목 / 보조 설명
export default function SectionHeading({ index, label, title, desc, id }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-sm font-semibold tracking-widest text-accent">
        {index} <span className="text-muted">/</span> {label}
      </p>
      <h2 id={id} className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
        {title}
      </h2>
      {desc && <p className="mt-4 text-base text-muted sm:text-lg">{desc}</p>}
    </Reveal>
  )
}

import {
  siBootstrap,
  siClaude,
  siCss,
  siDocker,
  siEclipseide,
  siGit,
  siGithub,
  siGooglegemini,
  siHtml5,
  siJavascript,
  siMysql,
  siNetlify,
  siOpenjdk,
  siPython,
  siReact,
  siRender,
  siSpringboot,
  siThymeleaf,
  siTidb,
} from 'simple-icons'
import { Icon } from './Icons.jsx'

// skills.js의 brand 키와 simple-icons 아이콘을 연결합니다. (사용하는 아이콘만 번들에 포함됩니다)
const brandIcons = {
  bootstrap: siBootstrap,
  claude: siClaude,
  css: siCss,
  docker: siDocker,
  eclipseide: siEclipseide,
  git: siGit,
  github: siGithub,
  googlegemini: siGooglegemini,
  html5: siHtml5,
  javascript: siJavascript,
  mysql: siMysql,
  netlify: siNetlify,
  openjdk: siOpenjdk,
  python: siPython,
  react: siReact,
  render: siRender,
  springboot: siSpringboot,
  thymeleaf: siThymeleaf,
  tidb: siTidb,
}

// 배경색의 밝기에 따라 글리프 색(흰색/검정)을 결정해 항상 읽히도록 합니다.
function inkFor(hex) {
  const n = parseInt(hex, 16)
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255]
  return (r * 299 + g * 587 + b * 114) / 1000 > 150 ? '#111827' : '#ffffff'
}

// 앱 아이콘 형태의 기술 아이콘: 브랜드 색 배경 + 대비되는 글리프
export default function TechIcon({ item }) {
  const brand = item.brand ? brandIcons[item.brand] : null
  const bg = brand ? `#${brand.hex}` : item.color
  const ink = brand ? inkFor(brand.hex) : item.ink || '#ffffff'

  // 색이 지정되지 않은 항목은 테마 포인트 컬러 그라디언트 사용
  const style = bg
    ? { background: bg, color: ink }
    : { background: 'linear-gradient(135deg, #3b64e8, #7c3aed)', color: '#fff' }

  return (
    <span
      className="grid h-11 w-11 shrink-0 place-items-center rounded-xl ring-1 ring-white/15 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
      style={style}
      aria-hidden="true"
    >
      {brand ? (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" focusable="false">
          <path d={brand.path} />
        </svg>
      ) : (
        <Icon name={item.glyph} className="h-6 w-6" strokeWidth={1.8} />
      )}
    </span>
  )
}

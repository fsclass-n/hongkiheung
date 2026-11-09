// 개인 프로필 · 연락처 · 내비게이션 · 소개 문구
// 문구를 수정할 때는 이 파일만 고치면 사이트 전체에 반영됩니다.
// 번역 대상 필드는 { ko, en } 형태입니다.

const subject = {
  ko: '[포트폴리오] 문의드립니다',
  en: '[Portfolio] Inquiry',
}

export const profile = {
  // TODO(확인 필요): 영문 이름 표기(Hong Ki-heung)는 한글 이름을 로마자로 옮긴 값입니다. 선호하는 표기로 바꾸세요.
  name: { ko: '홍기흥', en: 'Hong Ki-heung' },
  role: 'Full-Stack Developer',
  phone: '010-1234-5678',
  // tel: 링크는 하이픈 없이 숫자만 사용해야 모든 기기에서 안정적으로 동작합니다.
  phoneHref: 'tel:01012345678',
  email: 'kiheung@gmail.com',
  // 메일 제목은 언어별로 다르게 채워집니다.
  emailHref: (lang) => `mailto:kiheung@gmail.com?subject=${encodeURIComponent(subject[lang])}`,
  degree: {
    ko: '한국 기흥대학교 체육학 학사 졸업',
    en: 'B.A. in Physical Education, Korea Giheung University',
  },
  siteUrl: 'https://hongkiheung.netlify.app/',
}

// 상단 고정 메뉴 (id는 각 섹션의 id와 일치해야 합니다)
export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'tech', label: 'Tech Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'contact', label: 'Contact' },
]

// HERO: 핵심 메시지 3가지
export const heroMessages = [
  { icon: 'layers', text: { ko: 'React · Spring Boot 풀스택', en: 'React · Spring Boot full-stack' } },
  { icon: 'chartBar', text: { ko: 'Python 데이터 분석 · RPA', en: 'Python data analysis · RPA' } },
  { icon: 'sparkles', text: { ko: '생성형 AI 기반 개발', en: 'Generative-AI-assisted dev' } },
]

// ABOUT: 핵심 메시지 4가지
export const aboutHighlights = [
  {
    icon: 'layers',
    title: { ko: '프론트엔드 · 백엔드 풀스택 학습', en: 'Full-stack: frontend and backend' },
    desc: {
      ko: 'HTML/CSS/JavaScript와 React로 화면을, Java·Spring Boot로 서버를, MySQL·TiDB로 데이터를 설계하며 서비스 전체 흐름을 학습했습니다.',
      en: 'I learned the whole service flow: UI with HTML/CSS/JavaScript and React, servers with Java and Spring Boot, and data design with MySQL and TiDB.',
    },
  },
  {
    icon: 'chartBar',
    title: { ko: 'Python 기반 데이터 분석 · AI 활용', en: 'Python data analysis and AI' },
    desc: {
      ko: 'Playwright 기반 RPA 수집 자동화를 직접 구현하고, pandas·scikit-learn 기반 데이터 정제·추천 파이프라인을 팀 프로젝트에서 함께 활용했습니다.',
      en: 'I built Playwright-based RPA collection myself and worked with a pandas / scikit-learn data-cleaning and recommendation pipeline in team projects.',
    },
  },
  {
    icon: 'cloudUp',
    title: { ko: '실제 프로젝트 개발 · 서비스 배포', en: 'Real projects, deployed services' },
    desc: {
      ko: '기획한 서비스를 Netlify, Render, AWS EC2 등에 배포해 누구나 접속할 수 있는 URL로 공개했습니다.',
      en: 'I deployed the services I planned to Netlify, Render, AWS EC2 and more, so anyone can open them from a public URL.',
    },
  },
  {
    icon: 'sparkles',
    title: { ko: '생성형 AI를 활용한 문제 해결', en: 'Problem solving with generative AI' },
    desc: {
      ko: 'Codex, Claude, Gemini를 개발 파트너로 활용해 코드 작성·분석·디버깅 속도를 높이고, 결과는 직접 검증합니다.',
      en: 'I use Codex, Claude and Gemini as development partners to speed up writing, analyzing and debugging code, and I verify the results myself.',
    },
  },
]

// DEVELOPMENT PHILOSOPHY
export const philosophy = [
  {
    icon: 'bolt',
    title: { ko: '학습하고, 바로 적용합니다', en: 'Learn it, then apply it' },
    desc: {
      ko: '새로운 기술을 빠르게 학습하고 실제 서비스에 적용합니다.',
      en: 'I learn new technology quickly and apply it to real services.',
    },
  },
  {
    icon: 'puzzle',
    title: { ko: '분석하고, 구현합니다', en: 'Analyze it, then build it' },
    desc: {
      ko: '문제를 분석하고 기술을 활용하여 해결책을 구현합니다.',
      en: 'I analyze the problem and implement a solution with the right technology.',
    },
  },
  {
    icon: 'sparkles',
    title: { ko: 'AI를 개발 파트너로 씁니다', en: 'AI as a development partner' },
    desc: {
      ko: '생성형 AI를 개발 파트너로 활용하여 생산성을 높입니다.',
      en: 'I use generative AI as a development partner to boost productivity.',
    },
  },
  {
    icon: 'trendingUp',
    title: { ko: '경험으로 성장합니다', en: 'Grow through experience' },
    desc: {
      ko: '지속적인 학습과 프로젝트 경험을 통해 성장합니다.',
      en: 'I grow through continuous learning and hands-on project experience.',
    },
  },
]

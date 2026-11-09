// 개인 프로필 · 연락처 · 내비게이션 · 소개 문구
// 문구를 수정할 때는 이 파일만 고치면 사이트 전체에 반영됩니다.

export const profile = {
  name: '홍기흥',
  nameEn: 'Hong Ki-heung',
  role: 'Full-Stack Developer',
  phone: '010-1234-5678',
  // tel: 링크는 하이픈 없이 숫자만 사용해야 모든 기기에서 안정적으로 동작합니다.
  phoneHref: 'tel:01012345678',
  email: 'kiheung@gmail.com',
  emailHref: 'mailto:kiheung@gmail.com?subject=%5B%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4%5D%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4',
  degree: '한국 기흥대학교 체육학 학사 졸업',
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
  { icon: 'layers', text: 'React · Spring Boot 풀스택' },
  { icon: 'chartBar', text: 'Python 데이터 분석 · RPA' },
  { icon: 'sparkles', text: '생성형 AI 기반 개발' },
]

// ABOUT: 핵심 메시지 4가지
export const aboutHighlights = [
  {
    icon: 'layers',
    title: '프론트엔드 · 백엔드 풀스택 학습',
    desc: 'HTML/CSS/JavaScript와 React로 화면을, Java·Spring Boot로 서버를, MySQL·TiDB로 데이터를 설계하며 서비스 전체 흐름을 학습했습니다.',
  },
  {
    icon: 'chartBar',
    title: 'Python 기반 데이터 분석 · AI 활용',
    desc: 'Playwright 기반 RPA 수집 자동화를 직접 구현하고, pandas·scikit-learn 기반 데이터 정제·추천 파이프라인을 팀 프로젝트에서 함께 활용했습니다.',
  },
  {
    icon: 'cloudUp',
    title: '실제 프로젝트 개발 · 서비스 배포',
    desc: '기획한 서비스를 Netlify, Render, AWS EC2 등에 배포해 누구나 접속할 수 있는 URL로 공개했습니다.',
  },
  {
    icon: 'sparkles',
    title: '생성형 AI를 활용한 문제 해결',
    desc: 'Codex, Claude, Gemini를 개발 파트너로 활용해 코드 작성·분석·디버깅 속도를 높이고, 결과는 직접 검증합니다.',
  },
]

// DEVELOPMENT PHILOSOPHY
export const philosophy = [
  {
    icon: 'bolt',
    title: '학습하고, 바로 적용합니다',
    desc: '새로운 기술을 빠르게 학습하고 실제 서비스에 적용합니다.',
  },
  {
    icon: 'puzzle',
    title: '분석하고, 구현합니다',
    desc: '문제를 분석하고 기술을 활용하여 해결책을 구현합니다.',
  },
  {
    icon: 'sparkles',
    title: 'AI를 개발 파트너로 씁니다',
    desc: '생성형 AI를 개발 파트너로 활용하여 생산성을 높입니다.',
  },
  {
    icon: 'trendingUp',
    title: '경험으로 성장합니다',
    desc: '지속적인 학습과 프로젝트 경험을 통해 성장합니다.',
  },
]

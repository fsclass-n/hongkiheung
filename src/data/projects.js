// 프로젝트 데이터 (번역 대상 필드는 { ko, en })
// 내용은 각 프로젝트의 공개 소개 페이지(fsclass-n.github.io/*)와 서비스 화면을 확인하여 작성했습니다.
// 확인되지 않은 항목은 임의로 채우지 않고 null 또는 TODO 주석으로 남겨 두었습니다.
//
// 필드 설명
// - services : 실제 서비스 바로가기(여러 개 가능, 첫 번째가 대표 링크)
// - github   : GitHub 프로젝트 소개 페이지(서비스와 구분되어 표시)
// - repo     : 소스코드 저장소(선택)
// - role     : 본인 담당 역할 (확인 전이면 null → 화면에서 자동으로 숨김)
// - metrics  : 소개 페이지에 공개된 정량 지표(선택)

const githubPages = { ko: '프로젝트 소개 (GitHub Pages)', en: 'Project page (GitHub Pages)' }

export const projects = [
  {
    id: 'portfolio',
    name: 'Personal Portfolio',
    kind: { ko: 'Personal Project', en: 'Personal Project' },
    meta: { ko: '개인 소개 · 프로젝트 포트폴리오', en: 'Personal intro · project portfolio' },
    image: '/images/portfolio.webp',
    imageAlt: { ko: 'Personal Portfolio 사이트 첫 화면 미리보기', en: 'Preview of the Personal Portfolio home screen' },
    overview: {
      ko: '개인 소개와 개발 프로젝트를 한곳에서 보여주는 포트폴리오 사이트입니다. 면접관이 짧은 시간에 기술 역량과 프로젝트 경험을 파악하도록 정보 구조를 설계했습니다.',
      en: 'A portfolio site that presents personal background and development projects in one place. Its information structure is designed so interviewers can grasp skills and project experience quickly.',
    },
    features: {
      ko: [
        '7개 섹션 원페이지 구성과 상단 고정 내비게이션 · 스크롤 진행 표시 · TOP 버튼',
        '라이트 / 다크 테마 전환 (사용자 설정 저장, 시스템 설정 반영)',
        '한국어 / 영어 언어 전환과 Web3Forms 기반 문의 폼',
        'PC · 태블릿 · 모바일 반응형 레이아웃',
        '프로젝트 카드에서 실제 서비스와 GitHub 소개 페이지를 구분해 연결',
      ],
      en: [
        'Seven-section single page with fixed navigation, scroll progress and a TOP button',
        'Light / dark theme switch (saves the user setting, follows the system setting)',
        'Korean / English language switch and a Web3Forms contact form',
        'Responsive layout for PC, tablet and mobile',
        'Project cards that separate the live service from the GitHub project page',
      ],
    },
    coreTech: {
      ko: [
        'Tailwind CSS 4 + CSS 변수 기반 디자인 토큰으로 테마 전환 구현',
        '콘텐츠(data/)와 화면(components/)을 분리해 수정이 쉬운 구조',
        'SEO · Open Graph · 접근성 · 외부 링크 보안(noopener) 처리',
        'Netlify 보안 헤더 · 캐시 정책을 포함한 배포 설정',
      ],
      en: [
        'Theme switching with Tailwind CSS 4 and CSS-variable design tokens',
        'Content (data/) separated from UI (components/) for easy maintenance',
        'SEO, Open Graph, accessibility and external-link security (noopener)',
        'Deployment config with Netlify security headers and cache policy',
      ],
    },
    stack: ['React', 'Tailwind CSS 4', 'Vite', 'Netlify'],
    services: [
      { label: 'Netlify', url: 'https://hongkiheung.netlify.app/' },
      { label: 'GitHub Pages', url: 'https://fsclass-n.github.io/hongkiheung/' },
    ],
    // TODO(확인 필요): 포트폴리오 전용 '프로젝트 소개 페이지' 주소가 별도로 없어 소스 저장소 링크로 대체했습니다.
    github: { label: { ko: 'GitHub 저장소', en: 'GitHub repository' }, url: 'https://github.com/fsclass-n/hongkiheung' },
    repo: null,
    role: { ko: '기획 · 디자인 · 개발 · 배포 전체', en: 'Planning, design, development and deployment' },
    metrics: null,
  },
  {
    id: 'homepick',
    name: { ko: '홈픽 (Homepick)', en: 'Homepick' },
    kind: { ko: 'Web Platform', en: 'Web Platform' },
    meta: { ko: '부동산 인텔리전스 플랫폼', en: 'Real estate intelligence platform' },
    image: '/images/homepick.webp',
    imageAlt: { ko: '홈픽 서비스 메인 화면', en: 'Homepick service main screen' },
    overview: {
      ko: '부동산 시장 데이터와 사용자 조건을 연결해 맞춤형 매물 추천 경험을 설계하는 플랫폼입니다. 목표는 AI 모델 및 K-AI 데이터 분석을 통한 기업 수요 반영 비즈니스 플랫폼 구축입니다.',
      en: 'A platform that connects real-estate market data with user preferences to design a personalized listing-recommendation experience. The goal is a business platform that reflects corporate demand through AI models and K-AI data analysis.',
    },
    features: {
      ko: [
        '매물 목록 · 시장분석/AI추천 · 마이 홈픽 · 고객센터로 구성된 서비스 메뉴 구조',
        '회원가입 · 로그인 · Q&A 게시판 구현 (소개 페이지의 현재 구현 범위)',
        '확장 방향: 시장 데이터 수집 → 정제 → 수요 분석 → 설명 가능한 추천',
      ],
      en: [
        'Service menu structure: listings, market analysis / AI recommendation, My Homepick and customer center',
        'Sign-up, login and Q&A board (the current scope on the project page)',
        'Planned direction: market data collection, cleaning, demand analysis, explainable recommendation',
      ],
    },
    coreTech: {
      ko: [
        'Spring Boot MVC + Thymeleaf, Controller · Service · Repository 계층 구조',
        'JDBC로 TiDB / MySQL 데이터 접근, Firebase 연동',
        'Docker · Gradle · GitHub Actions 기반 빌드 검증과 컨테이너 배포 환경',
      ],
      en: [
        'Spring Boot MVC + Thymeleaf with Controller, Service and Repository layers',
        'TiDB / MySQL access through JDBC, Firebase integration',
        'Build verification and container deployment with Docker, Gradle and GitHub Actions',
      ],
    },
    stack: ['Java', 'Spring Boot', 'Thymeleaf', 'TiDB / MySQL', 'Firebase', 'Docker', 'GitHub Actions', 'Render'],
    services: [{ label: 'Render', url: 'https://homepick.onrender.com/' }],
    github: { label: githubPages, url: 'https://fsclass-n.github.io/homepick/' },
    repo: 'https://github.com/fsclass-n/homepick',
    // TODO(확인 필요): 홈픽에서 본인이 맡은 역할을 확인 후 { ko, en } 형태로 입력하세요. (null이면 화면에 표시되지 않습니다)
    role: null,
    metrics: null,
  },
  {
    id: 'nomadpick',
    name: { ko: '노마드픽 (Nomadpick)', en: 'Nomadpick' },
    kind: { ko: 'Team Project · 3조', en: 'Team Project · Team 3' },
    meta: { ko: '2026.11 · 풀스택 & RPA 자동화', en: 'Nov 2026 · Full-stack & RPA automation' },
    image: '/images/nomadpick.webp',
    imageAlt: { ko: '노마드픽 서비스 메인 화면', en: 'Nomadpick service main screen' },
    overview: {
      ko: '하나투어 · 모두투어 · 노랑풍선의 특가를 RPA가 30분마다 수집·정제하고, 사용자 취향에 맞는 상품을 추천 이유와 함께 보여주는 여행 특가 비교 서비스입니다.',
      en: 'A travel-deal comparison service. RPA collects and cleans deals from Hanatour, Modetour and Yellow Balloon every 30 minutes, then shows products that match user preferences together with the reasons.',
    },
    features: {
      ko: [
        '3개 여행사 특가 통합 목록 · 지역/예산/출발월/테마 필터 · 정렬',
        '선호도 기반 맞춤 추천 Top 10과 추천 이유 태그',
        '상품 상세의 가격 추이 차트와 국내선 항공편 정보',
        '관리자용 RPA 수집 모니터링 대시보드',
      ],
      en: [
        'Unified deal list from three travel agencies with region, budget, month and theme filters and sorting',
        'Personalized Top 10 recommendations with reason tags',
        'Price-trend chart and domestic flight info on the product page',
        'Admin dashboard for monitoring RPA collection',
      ],
    },
    coreTech: {
      ko: [
        'Playwright RPA로 JavaScript 렌더링 · 봇 차단 대응 (요청 간격 · 재시도 · robots.txt 준수)',
        '제각각인 가격 · 기간 표기를 정규식과 pandas로 표준화하고 단위 테스트로 검증',
        '코사인 유사도(scikit-learn) 기반 추천 + 다양성 규칙',
        '경로 필터 기반 CI/CD (Netlify · Render · AWS EC2)',
      ],
      en: [
        'Playwright RPA handling JavaScript rendering and bot blocking (request spacing, retries, robots.txt compliance)',
        'Price and period formats standardized with regex and pandas, verified by unit tests',
        'Cosine-similarity recommendation (scikit-learn) with diversity rules',
        'Path-filtered CI/CD (Netlify, Render, AWS EC2)',
      ],
    },
    stack: ['Python', 'FastAPI', 'Playwright', 'pandas', 'scikit-learn', 'Bootstrap 5', 'Plotly', 'TiDB Cloud', 'Docker', 'AWS EC2'],
    services: [{ label: 'Render', url: 'https://nomadpick.onrender.com/' }],
    github: { label: githubPages, url: 'https://fsclass-n.github.io/nomadpick/' },
    repo: 'https://github.com/fsclass-n/nomadpick',
    role: {
      ko: 'RPA · 데이터 수집 (Playwright 수집기 3종, 국토교통부 API, 스케줄러)',
      en: 'RPA and data collection (3 Playwright collectors, MOLIT API, scheduler)',
    },
    metrics: [
      { value: '97.4%', label: { ko: '수집 성공률', en: 'Collection success' } },
      { value: '330+', label: { ko: '회당 수집 상품', en: 'Products per run' } },
      { value: '0.41s', label: { ko: '목록 API 평균 응답', en: 'Avg. list API response' } },
      { value: { ko: '106건', en: '106' }, label: { ko: '테스트 통과', en: 'Tests passed' } },
    ],
  },
  {
    id: 'picktiming',
    name: { ko: '픽타이밍 (Picktiming)', en: 'Picktiming' },
    kind: { ko: 'Team Project · 3조', en: 'Team Project · Team 3' },
    meta: { ko: '가격 비교 · 구매 타이밍 분석', en: 'Price comparison · purchase-timing analysis' },
    image: '/images/picktiming.webp',
    imageAlt: { ko: '픽타이밍 서비스 메인 화면', en: 'Picktiming service main screen' },
    overview: {
      ko: '가격 수집부터 AI 설명까지 연결해 "어디서 살까, 지금 사도 될까?"에 대한 구매 판단의 근거를 만드는 서비스입니다.',
      en: 'A service that links price collection to AI explanations, giving evidence for "Where should I buy, and is now a good time?"',
    },
    features: {
      ko: [
        '배송비를 포함한 실구매가 비교',
        '7일 · 30일 · 90일 가격 흐름과 구매 타이밍 점수',
        'Gemini 기반 AI 구매 조언 (분석 근거를 쉬운 말로 설명)',
        '목표가 알림 · 관심 상품 · 사용자/관리자 역할 분리',
      ],
      en: [
        'Real purchase price comparison including shipping',
        '7 / 30 / 90-day price trends and a purchase-timing score',
        'Gemini-based AI buying advice that explains the analysis in plain language',
        'Target-price alerts, wish list, and separate user / admin roles',
      ],
    },
    coreTech: {
      ko: [
        'RPA 가격 수집 (요청 간격 · 재시도 · robots.txt 확인)과 같은 시간대 중복 적재 방지',
        'scikit-learn 기반 가격 위치 · 하락 가능성 점수 계산',
        'AI 응답의 숫자를 입력 데이터와 대조 검증하고 실패 시 재요청 · 대체 설명',
        'Render · Netlify · GitHub Actions 예약 수집으로 무료 서버 제약 해소',
      ],
      en: [
        'RPA price collection (request spacing, retries, robots.txt check) with duplicate-write prevention per time slot',
        'Price-position and drop-likelihood scoring with scikit-learn',
        'AI answers are cross-checked against the input data, with re-requests and fallback text on failure',
        'Working around free-tier limits with Render, Netlify and scheduled GitHub Actions collection',
      ],
    },
    stack: ['React', 'FastAPI', 'TiDB', 'Gemini', 'scikit-learn', 'RPA', 'GitHub Actions', 'Render', 'Netlify'],
    services: [
      { label: 'Render', url: 'https://picktiming.onrender.com/' },
      // TODO(확인 필요): 요청서에는 'douckdns.org'로 적혀 있었으나 존재하지 않는 도메인이라 'duckdns.org'로 교정했습니다.
      // 현재 개발 환경 네트워크에서는 서비스 응답을 확인하지 못했으니 배포 전에 접속 여부를 확인하세요.
      { label: 'DuckDNS', url: 'https://picktiming.duckdns.org/' },
    ],
    github: { label: githubPages, url: 'https://fsclass-n.github.io/picktiming/' },
    repo: 'https://github.com/fsclass-n/picktiming',
    role: { ko: 'RPA · 데이터 수집', en: 'RPA and data collection' },
    metrics: null,
  },
]

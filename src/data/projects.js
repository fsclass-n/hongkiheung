// 프로젝트 데이터
// 내용은 각 프로젝트의 공개 소개 페이지(fsclass-n.github.io/*)와 서비스 화면을 확인하여 작성했습니다.
// 확인되지 않은 항목은 임의로 채우지 않고 null 또는 TODO 주석으로 남겨 두었습니다.
//
// 필드 설명
// - services : 실제 서비스 바로가기(여러 개 가능, 첫 번째가 대표 링크)
// - github   : GitHub 프로젝트 소개 페이지(서비스와 구분되어 표시)
// - repo     : 소스코드 저장소(선택)
// - role     : 본인 담당 역할 (확인 전이면 null → 화면에서 자동으로 숨김)
// - metrics  : 소개 페이지에 공개된 정량 지표(선택)

export const projects = [
  {
    id: 'portfolio',
    name: 'Personal Portfolio',
    kind: 'Personal Project',
    meta: '개인 소개 · 프로젝트 포트폴리오',
    image: '/images/portfolio.webp',
    imageAlt: 'Personal Portfolio 사이트 첫 화면 미리보기',
    overview:
      '개인 소개와 개발 프로젝트를 한곳에서 보여주는 포트폴리오 사이트입니다. 면접관이 짧은 시간에 기술 역량과 프로젝트 경험을 파악하도록 정보 구조를 설계했습니다.',
    features: [
      '7개 섹션 원페이지 구성과 상단 고정 내비게이션 · 스크롤 진행 표시 · TOP 버튼',
      '라이트 / 다크 테마 전환 (사용자 설정 저장, 시스템 설정 반영)',
      'PC · 태블릿 · 모바일 반응형 레이아웃',
      '프로젝트 카드에서 실제 서비스와 GitHub 소개 페이지를 구분해 연결',
    ],
    coreTech: [
      'Tailwind CSS 4 + CSS 변수 기반 디자인 토큰으로 테마 전환 구현',
      '콘텐츠(data/)와 화면(components/)을 분리해 수정이 쉬운 구조',
      'SEO · Open Graph · 접근성 · 외부 링크 보안(noopener) 처리',
      'Netlify 보안 헤더 · 캐시 정책을 포함한 배포 설정',
    ],
    stack: ['React', 'Tailwind CSS 4', 'Vite', 'Netlify'],
    services: [
      { label: 'Netlify', url: 'https://hongkiheung.netlify.app/' },
      { label: 'GitHub Pages', url: 'https://fsclass-n.github.io/hongkiheung/' },
    ],
    // TODO(확인 필요): 포트폴리오 전용 '프로젝트 소개 페이지' 주소가 별도로 없어 소스 저장소 링크로 대체했습니다.
    github: { label: 'GitHub 저장소', url: 'https://github.com/fsclass-n/hongkiheung' },
    repo: null,
    role: '기획 · 디자인 · 개발 · 배포 전체',
    metrics: null,
  },
  {
    id: 'homepick',
    name: '홈픽 (Homepick)',
    kind: 'Web Platform',
    meta: '부동산 인텔리전스 플랫폼',
    image: '/images/homepick.webp',
    imageAlt: '홈픽 서비스 메인 화면',
    overview:
      '부동산 시장 데이터와 사용자 조건을 연결해 맞춤형 매물 추천 경험을 설계하는 플랫폼입니다. 목표는 AI 모델 및 K-AI 데이터 분석을 통한 기업 수요 반영 비즈니스 플랫폼 구축입니다.',
    features: [
      '매물 목록 · 시장분석/AI추천 · 마이 홈픽 · 고객센터로 구성된 서비스 메뉴 구조',
      '회원가입 · 로그인 · Q&A 게시판 구현 (소개 페이지의 현재 구현 범위)',
      '확장 방향: 시장 데이터 수집 → 정제 → 수요 분석 → 설명 가능한 추천',
    ],
    coreTech: [
      'Spring Boot MVC + Thymeleaf, Controller · Service · Repository 계층 구조',
      'JDBC로 TiDB / MySQL 데이터 접근, Firebase 연동',
      'Docker · Gradle · GitHub Actions 기반 빌드 검증과 컨테이너 배포 환경',
    ],
    stack: ['Java', 'Spring Boot', 'Thymeleaf', 'TiDB / MySQL', 'Firebase', 'Docker', 'GitHub Actions', 'Render'],
    services: [{ label: 'Render', url: 'https://homepick.onrender.com/' }],
    github: { label: '프로젝트 소개 (GitHub Pages)', url: 'https://fsclass-n.github.io/homepick/' },
    repo: 'https://github.com/fsclass-n/homepick',
    // TODO(확인 필요): 홈픽에서 본인이 맡은 역할을 확인 후 입력하세요. (null이면 화면에 표시되지 않습니다)
    role: null,
    metrics: null,
  },
  {
    id: 'nomadpick',
    name: '노마드픽 (Nomadpick)',
    kind: 'Team Project · 3조',
    meta: '2026.11 · 풀스택 & RPA 자동화',
    image: '/images/nomadpick.webp',
    imageAlt: '노마드픽 서비스 메인 화면',
    overview:
      '하나투어 · 모두투어 · 노랑풍선의 특가를 RPA가 30분마다 수집·정제하고, 사용자 취향에 맞는 상품을 추천 이유와 함께 보여주는 여행 특가 비교 서비스입니다.',
    features: [
      '3개 여행사 특가 통합 목록 · 지역/예산/출발월/테마 필터 · 정렬',
      '선호도 기반 맞춤 추천 Top 10과 추천 이유 태그',
      '상품 상세의 가격 추이 차트와 국내선 항공편 정보',
      '관리자용 RPA 수집 모니터링 대시보드',
    ],
    coreTech: [
      'Playwright RPA로 JavaScript 렌더링 · 봇 차단 대응 (요청 간격 · 재시도 · robots.txt 준수)',
      '제각각인 가격 · 기간 표기를 정규식과 pandas로 표준화하고 단위 테스트로 검증',
      '코사인 유사도(scikit-learn) 기반 추천 + 다양성 규칙',
      '경로 필터 기반 CI/CD (Netlify · Render · AWS EC2)',
    ],
    stack: ['Python', 'FastAPI', 'Playwright', 'pandas', 'scikit-learn', 'Bootstrap 5', 'Plotly', 'TiDB Cloud', 'Docker', 'AWS EC2'],
    services: [{ label: 'Render', url: 'https://nomadpick.onrender.com/' }],
    github: { label: '프로젝트 소개 (GitHub Pages)', url: 'https://fsclass-n.github.io/nomadpick/' },
    repo: 'https://github.com/fsclass-n/nomadpick',
    role: 'RPA · 데이터 수집 (Playwright 수집기 3종, 국토교통부 API, 스케줄러)',
    metrics: [
      { value: '97.4%', label: '수집 성공률' },
      { value: '330+', label: '회당 수집 상품' },
      { value: '0.41s', label: '목록 API 평균 응답' },
      { value: '106건', label: '테스트 통과' },
    ],
  },
  {
    id: 'picktiming',
    name: '픽타이밍 (Picktiming)',
    kind: 'Team Project · 3조',
    meta: '가격 비교 · 구매 타이밍 분석',
    image: '/images/picktiming.webp',
    imageAlt: '픽타이밍 서비스 메인 화면',
    overview:
      '가격 수집부터 AI 설명까지 연결해 "어디서 살까, 지금 사도 될까?"에 대한 구매 판단의 근거를 만드는 서비스입니다.',
    features: [
      '배송비를 포함한 실구매가 비교',
      '7일 · 30일 · 90일 가격 흐름과 구매 타이밍 점수',
      'Gemini 기반 AI 구매 조언 (분석 근거를 쉬운 말로 설명)',
      '목표가 알림 · 관심 상품 · 사용자/관리자 역할 분리',
    ],
    coreTech: [
      'RPA 가격 수집 (요청 간격 · 재시도 · robots.txt 확인)과 같은 시간대 중복 적재 방지',
      'scikit-learn 기반 가격 위치 · 하락 가능성 점수 계산',
      'AI 응답의 숫자를 입력 데이터와 대조 검증하고 실패 시 재요청 · 대체 설명',
      'Render · Netlify · GitHub Actions 예약 수집으로 무료 서버 제약 해소',
    ],
    stack: ['React', 'FastAPI', 'TiDB', 'Gemini', 'scikit-learn', 'RPA', 'GitHub Actions', 'Render', 'Netlify'],
    services: [
      { label: 'Render', url: 'https://picktiming.onrender.com/' },
      // TODO(확인 필요): 요청서에는 'douckdns.org'로 적혀 있었으나 존재하지 않는 도메인이라 'duckdns.org'로 교정했습니다.
      // 현재 개발 환경 네트워크에서는 서비스 응답을 확인하지 못했으니 배포 전에 접속 여부를 확인하세요.
      { label: 'DuckDNS', url: 'https://picktiming.duckdns.org/' },
    ],
    github: { label: '프로젝트 소개 (GitHub Pages)', url: 'https://fsclass-n.github.io/picktiming/' },
    repo: 'https://github.com/fsclass-n/picktiming',
    role: 'RPA · 데이터 수집',
    metrics: null,
  },
]

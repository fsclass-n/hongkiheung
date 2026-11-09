// 기술 스택: 분야별 분류 + 기술별 활용 분야 설명 (번역 대상 필드는 { ko, en })
// - brand: simple-icons 브랜드 아이콘 키 (components/TechIcon.jsx의 brandIcons 참고)
// - glyph: 브랜드 아이콘이 없는 항목에 쓰는 자체 제작 아이콘 키 (components/Icons.jsx의 glyphs 참고)
// - color: 아이콘 배경 색상 (브랜드 아이콘이 없을 때만 지정)
// - name: 고유명사(제품명)는 문자열, 한국어 개념어는 { ko, en }

export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'layout',
    summary: {
      ko: '사용자가 직접 마주하는 화면을 반응형으로 구현합니다.',
      en: 'I build the screens users see, responsive on every device.',
    },
    items: [
      { name: 'HTML5', brand: 'html5', desc: { ko: '시맨틱 마크업 · 웹 접근성 · SEO 구조', en: 'Semantic markup, accessibility, SEO structure' } },
      { name: 'CSS3', brand: 'css', desc: { ko: '반응형 레이아웃 · 애니메이션 · 테마 스타일링', en: 'Responsive layout, animation, theming' } },
      { name: 'JavaScript', brand: 'javascript', desc: { ko: 'DOM 제어 · 비동기 통신 · 인터랙션 구현', en: 'DOM, async requests, interactions' } },
      { name: 'Bootstrap', brand: 'bootstrap', desc: { ko: '그리드 기반 반응형 화면 빠른 구성', en: 'Quick grid-based responsive layouts' } },
      { name: 'React', brand: 'react', desc: { ko: '컴포넌트 기반 SPA · 상태 관리 · UI 개발', en: 'Component-based SPA, state management, UI' } },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'server',
    summary: {
      ko: '서버 로직과 화면 렌더링을 계층 구조로 설계합니다.',
      en: 'I design server logic and page rendering as clear layers.',
    },
    items: [
      { name: 'Java', brand: 'openjdk', desc: { ko: '객체지향 기반 서버 애플리케이션 개발', en: 'Object-oriented server applications' } },
      { name: 'Spring Boot', brand: 'springboot', desc: { ko: 'MVC 계층 구조 웹 서비스 · 회원/게시판 기능', en: 'Layered MVC web services, member and board features' } },
      { name: 'Thymeleaf', brand: 'thymeleaf', desc: { ko: '서버 사이드 템플릿 화면 렌더링', en: 'Server-side template rendering' } },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: 'database',
    summary: {
      ko: '데이터 모델링부터 클라우드 DB 연동까지 다룹니다.',
      en: 'From data modeling to cloud database integration.',
    },
    items: [
      { name: 'MySQL', brand: 'mysql', desc: { ko: '관계형 데이터 모델링 · SQL 쿼리 작성', en: 'Relational modeling and SQL queries' } },
      { name: 'TiDB Cloud', brand: 'tidb', desc: { ko: 'MySQL 호환 클라우드 DB 서비스 연동', en: 'Integrating a MySQL-compatible cloud database' } },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Deployment',
    icon: 'cloud',
    summary: {
      ko: '만든 서비스를 실제 URL로 배포하고 운영합니다.',
      en: 'I deploy what I build to a real URL and keep it running.',
    },
    items: [
      { name: 'Netlify', brand: 'netlify', desc: { ko: '프런트엔드 정적 사이트 자동 배포', en: 'Automatic deploys for static frontends' } },
      { name: 'Render', brand: 'render', desc: { ko: '백엔드 · 웹 서비스 클라우드 배포', en: 'Cloud hosting for backends and web services' } },
      { name: 'AWS EC2', glyph: 'server', color: '#ff9900', ink: '#1b1200', desc: { ko: '가상 서버 구축 · 서비스 운영', en: 'Virtual servers and service operation' } },
      { name: 'AWS RDS', glyph: 'database', color: '#ff9900', ink: '#1b1200', desc: { ko: '관리형 관계형 데이터베이스', en: 'Managed relational databases' } },
      { name: 'AWS S3', glyph: 'bucket', color: '#ff9900', ink: '#1b1200', desc: { ko: '이미지 · 정적 파일 객체 스토리지', en: 'Object storage for images and static files' } },
      { name: 'Docker', brand: 'docker', desc: { ko: '컨테이너 기반 실행 환경 · 배포 일관성', en: 'Containerized, reproducible environments' } },
    ],
  },
  {
    id: 'tools',
    title: 'Development Tools',
    icon: 'gitBranch',
    summary: {
      ko: '버전 관리와 협업 도구를 일상적으로 사용합니다.',
      en: 'Version control and collaboration tools are part of my daily work.',
    },
    items: [
      { name: 'Git', brand: 'git', desc: { ko: '버전 관리 · 브랜치 기반 협업', en: 'Version control and branch-based teamwork' } },
      { name: 'GitHub', brand: 'github', desc: { ko: '원격 저장소 · GitHub Pages 소개 페이지', en: 'Remote repositories and GitHub Pages' } },
      { name: 'Visual Studio Code', glyph: 'code', color: '#007acc', ink: '#ffffff', desc: { ko: '프런트엔드 · Python 개발 에디터', en: 'Editor for frontend and Python work' } },
      { name: 'Eclipse', brand: 'eclipseide', desc: { ko: 'Java · Spring Boot 개발 IDE', en: 'IDE for Java and Spring Boot' } },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Generative AI',
    icon: 'sparkles',
    summary: {
      ko: '생성형 AI를 개발 파트너로 활용해 생산성을 높입니다.',
      en: 'I use generative AI as a development partner to be more productive.',
    },
    items: [
      { name: 'OpenAI Codex', glyph: 'terminal', color: '#10a37f', ink: '#ffffff', desc: { ko: '코드 작성 · 리팩터링 보조', en: 'Code writing and refactoring help' } },
      { name: 'Claude', brand: 'claude', desc: { ko: '코드 분석 · 설계 검토 · 문서화', en: 'Code analysis, design review, documentation' } },
      { name: 'Gemini', brand: 'googlegemini', desc: { ko: '문제 해결 · 아이디어 탐색', en: 'Problem solving and idea exploration' } },
      {
        name: { ko: '생성형 AI 기반 코드 작성 및 분석', en: 'AI-assisted code writing and analysis' },
        glyph: 'sparkles',
        desc: { ko: '프롬프트 설계로 초안 작성 · 오류 원인 분석', en: 'Drafting with prompts, analyzing error causes' },
      },
      {
        name: { ko: 'AI 기반 개발 생산성 향상', en: 'AI-driven productivity' },
        glyph: 'bolt',
        desc: { ko: '반복 작업 자동화 · 빠른 프로토타이핑', en: 'Automating repetitive work, rapid prototyping' },
      },
    ],
  },
  {
    id: 'python',
    title: 'Python & Data Science',
    icon: 'chartBar',
    summary: {
      ko: '데이터를 수집·분석·시각화하고 모델로 연결합니다.',
      en: 'I collect, analyze and visualize data, and connect it to models.',
    },
    items: [
      { name: 'Python', brand: 'python', desc: { ko: '데이터 처리 · 자동화 스크립트 · 서버 개발', en: 'Data processing, automation scripts, servers' } },
      { name: { ko: 'RPA 자동화', en: 'RPA automation' }, glyph: 'bot', desc: { ko: '브라우저 자동화로 반복 수집 업무 대체', en: 'Replacing repetitive collection with browser automation' } },
      { name: { ko: '데이터 분석', en: 'Data analysis' }, glyph: 'chartLine', desc: { ko: '데이터 정제 · 집계 · 통계 분석', en: 'Cleaning, aggregation, statistics' } },
      { name: { ko: '데이터 시각화', en: 'Data visualization' }, glyph: 'chartBar', desc: { ko: '차트 · 대시보드로 인사이트 전달', en: 'Charts and dashboards that convey insight' } },
      { name: { ko: '머신러닝', en: 'Machine learning' }, glyph: 'cpu', desc: { ko: '추천 · 예측 모델링 기초', en: 'Fundamentals of recommendation and prediction' } },
      { name: { ko: '딥러닝', en: 'Deep learning' }, glyph: 'network', desc: { ko: '신경망 기반 학습 · 예측 이해', en: 'Understanding neural-network learning and prediction' } },
      { name: { ko: '웹 크롤링', en: 'Web crawling' }, glyph: 'globe', desc: { ko: '웹 데이터 수집 · robots.txt 준수', en: 'Collecting web data while respecting robots.txt' } },
    ],
  },
]

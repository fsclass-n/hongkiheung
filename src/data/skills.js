// 기술 스택: 분야별 분류 + 기술별 활용 분야 설명
// - brand: simple-icons 브랜드 아이콘 키 (components/TechIcon.jsx의 brandIcons 참고)
// - glyph: 브랜드 아이콘이 없는 항목에 쓰는 자체 제작 아이콘 키 (components/Icons.jsx의 glyphs 참고)
// - color: 아이콘 배경 색상 (브랜드 아이콘이 없을 때만 지정)

export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'layout',
    summary: '사용자가 직접 마주하는 화면을 반응형으로 구현합니다.',
    items: [
      { name: 'HTML5', brand: 'html5', desc: '시맨틱 마크업 · 웹 접근성 · SEO 구조' },
      { name: 'CSS3', brand: 'css', desc: '반응형 레이아웃 · 애니메이션 · 테마 스타일링' },
      { name: 'JavaScript', brand: 'javascript', desc: 'DOM 제어 · 비동기 통신 · 인터랙션 구현' },
      { name: 'Bootstrap', brand: 'bootstrap', desc: '그리드 기반 반응형 화면 빠른 구성' },
      { name: 'React', brand: 'react', desc: '컴포넌트 기반 SPA · 상태 관리 · UI 개발' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'server',
    summary: '서버 로직과 화면 렌더링을 계층 구조로 설계합니다.',
    items: [
      { name: 'Java', brand: 'openjdk', desc: '객체지향 기반 서버 애플리케이션 개발' },
      { name: 'Spring Boot', brand: 'springboot', desc: 'MVC 계층 구조 웹 서비스 · 회원/게시판 기능' },
      { name: 'Thymeleaf', brand: 'thymeleaf', desc: '서버 사이드 템플릿 화면 렌더링' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: 'database',
    summary: '데이터 모델링부터 클라우드 DB 연동까지 다룹니다.',
    items: [
      { name: 'MySQL', brand: 'mysql', desc: '관계형 데이터 모델링 · SQL 쿼리 작성' },
      { name: 'TiDB Cloud', brand: 'tidb', desc: 'MySQL 호환 클라우드 DB 서비스 연동' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Deployment',
    icon: 'cloud',
    summary: '만든 서비스를 실제 URL로 배포하고 운영합니다.',
    items: [
      { name: 'Netlify', brand: 'netlify', desc: '프런트엔드 정적 사이트 자동 배포' },
      { name: 'Render', brand: 'render', desc: '백엔드 · 웹 서비스 클라우드 배포' },
      { name: 'AWS EC2', glyph: 'server', color: '#ff9900', ink: '#1b1200', desc: '가상 서버 구축 · 서비스 운영' },
      { name: 'AWS RDS', glyph: 'database', color: '#ff9900', ink: '#1b1200', desc: '관리형 관계형 데이터베이스' },
      { name: 'AWS S3', glyph: 'bucket', color: '#ff9900', ink: '#1b1200', desc: '이미지 · 정적 파일 객체 스토리지' },
      { name: 'Docker', brand: 'docker', desc: '컨테이너 기반 실행 환경 · 배포 일관성' },
    ],
  },
  {
    id: 'tools',
    title: 'Development Tools',
    icon: 'gitBranch',
    summary: '버전 관리와 협업 도구를 일상적으로 사용합니다.',
    items: [
      { name: 'Git', brand: 'git', desc: '버전 관리 · 브랜치 기반 협업' },
      { name: 'GitHub', brand: 'github', desc: '원격 저장소 · GitHub Pages 소개 페이지' },
      { name: 'Visual Studio Code', glyph: 'code', color: '#007acc', ink: '#ffffff', desc: '프런트엔드 · Python 개발 에디터' },
      { name: 'Eclipse', brand: 'eclipseide', desc: 'Java · Spring Boot 개발 IDE' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Generative AI',
    icon: 'sparkles',
    summary: '생성형 AI를 개발 파트너로 활용해 생산성을 높입니다.',
    items: [
      { name: 'OpenAI Codex', glyph: 'terminal', color: '#10a37f', ink: '#ffffff', desc: '코드 작성 · 리팩터링 보조' },
      { name: 'Claude', brand: 'claude', desc: '코드 분석 · 설계 검토 · 문서화' },
      { name: 'Gemini', brand: 'googlegemini', desc: '문제 해결 · 아이디어 탐색' },
      { name: '생성형 AI 기반 코드 작성 및 분석', glyph: 'sparkles', desc: '프롬프트 설계로 초안 작성 · 오류 원인 분석' },
      { name: 'AI 기반 개발 생산성 향상', glyph: 'bolt', desc: '반복 작업 자동화 · 빠른 프로토타이핑' },
    ],
  },
  {
    id: 'python',
    title: 'Python & Data Science',
    icon: 'chartBar',
    summary: '데이터를 수집·분석·시각화하고 모델로 연결합니다.',
    items: [
      { name: 'Python', brand: 'python', desc: '데이터 처리 · 자동화 스크립트 · 서버 개발' },
      { name: 'RPA 자동화', glyph: 'bot', desc: '브라우저 자동화로 반복 수집 업무 대체' },
      { name: '데이터 분석', glyph: 'chartLine', desc: '데이터 정제 · 집계 · 통계 분석' },
      { name: '데이터 시각화', glyph: 'chartBar', desc: '차트 · 대시보드로 인사이트 전달' },
      { name: '머신러닝', glyph: 'cpu', desc: '추천 · 예측 모델링 기초' },
      { name: '딥러닝', glyph: 'network', desc: '신경망 기반 학습 · 예측 이해' },
      { name: '웹 크롤링', glyph: 'globe', desc: '웹 데이터 수집 · robots.txt 준수' },
    ],
  },
]

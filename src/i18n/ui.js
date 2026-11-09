// 컴포넌트 UI 문구 사전. 모든 값은 { ko, en } 형태이며 useI18n().t()로 사용합니다.
// 콘텐츠(프로필·기술·프로젝트·학력)의 번역은 src/data/ 파일에 각 필드와 함께 둡니다.

export const ui = {
  meta: {
    title: {
      ko: '홍기흥 | Full-Stack Developer Portfolio',
      en: 'Hong Ki-heung | Full-Stack Developer Portfolio',
    },
    description: {
      ko: '홍기흥의 개발 포트폴리오. React·Spring Boot 풀스택 개발, Python 데이터 분석·RPA, 생성형 AI 활용 역량과 직접 기획·개발·배포한 4개 프로젝트(홈픽, 노마드픽, 픽타이밍)를 소개합니다.',
      en: 'Portfolio of Hong Ki-heung: full-stack development with React and Spring Boot, Python data analysis and RPA, generative AI, and four deployed projects (Homepick, Nomadpick, Picktiming).',
    },
    ogDescription: {
      ko: '기획부터 배포까지 직접 만든 4개 프로젝트. 풀스택 개발 · Python 데이터 분석 · 생성형 AI 활용.',
      en: 'Four projects built from planning to deployment. Full-stack development, Python data analysis and generative AI.',
    },
  },

  skip: { ko: '본문으로 건너뛰기', en: 'Skip to main content' },

  header: {
    home: { ko: '홍기흥 포트폴리오 맨 위로', en: 'Back to top of Hong Ki-heung portfolio' },
    mainNav: { ko: '주요 메뉴', en: 'Main menu' },
    mobileNav: { ko: '모바일 메뉴', en: 'Mobile menu' },
    toLight: { ko: '라이트 테마로 전환', en: 'Switch to light theme' },
    toDark: { ko: '다크 테마로 전환', en: 'Switch to dark theme' },
    menuOpen: { ko: '메뉴 열기', en: 'Open menu' },
    menuClose: { ko: '메뉴 닫기', en: 'Close menu' },
    langGroup: { ko: '언어 선택', en: 'Language' },
    langKo: { ko: '한국어로 보기', en: 'View in Korean' },
    langEn: { ko: '영어로 보기', en: 'View in English' },
  },

  hero: {
    hello: { ko: '안녕하세요, 개발자', en: "Hi, I'm" },
    suffix: { ko: '입니다.', en: '' },
    tagline: {
      ko: '기획부터 배포까지, 직접 만들어 증명하는 풀스택 개발자.',
      en: 'From planning to deployment, a full-stack developer who proves it by building.',
    },
    intro: {
      ko: '체육학 전공 후 개발자의 길로 들어와 빅데이터 과정을 거치며 풀스택 개발과 Python 데이터 분석을 익혔습니다. 팀 프로젝트로 실제 서비스를 개발해 클라우드에 배포했고, 생성형 AI를 개발 파트너로 활용합니다.',
      en: 'After studying physical education, I moved into software development and learned full-stack development and Python data analysis through a big-data program. I built real services in team projects, deployed them to the cloud, and use generative AI as a development partner.',
    },
    viewProjects: { ko: '프로젝트 보기', en: 'View projects' },
    sendEmail: { ko: '이메일 연락하기', en: 'Email me' },
    statProjects: { ko: '배포한 프로젝트', en: 'Deployed projects' },
    statAreas: { ko: '기술 영역', en: 'Tech areas' },
    statCloud: { ko: '클라우드 · 배포 도구', en: 'Cloud & deploy tools' },
    codeLabel: { ko: '개발자 프로필 요약 코드', en: 'Developer profile summary code' },
  },

  about: {
    title: {
      ko: '배운 것을 서비스로 만들어 배포하는 개발자',
      en: 'A developer who turns what he learns into deployed services',
    },
    p1Tail: {
      ko: ' 후 개발자로 진로를 전환해, 두드림컴퓨터학원 분당미금점에서 빅데이터 과정과 심화 과정을 이어가고 있습니다.',
      en: ' I then changed careers into development and am continuing with the big-data and advanced courses at Doodream Computer Academy, Bundang Migeum Branch.',
    },
    p2: {
      ko: '화면(React)과 서버(Spring Boot), 데이터(MySQL · TiDB), 배포(Netlify · Render · AWS)까지 한 흐름으로 다루는 풀스택 개발을 학습하고, Python으로 데이터 수집 · 분석 · 추천까지 연결합니다. 막히는 지점은 생성형 AI와 함께 원인을 분석하고, 결과는 직접 검증해 서비스에 반영합니다.',
      en: 'I study full-stack development as one continuous flow: UI (React), server (Spring Boot), data (MySQL, TiDB) and deployment (Netlify, Render, AWS), and I connect data collection, analysis and recommendation with Python. When I get stuck, I analyze the cause together with generative AI and verify the result myself before it reaches the service.',
    },
    hours: { ko: '시간', en: 'hrs' },
  },

  tech: {
    title: { ko: '화면부터 데이터, 배포, AI까지', en: 'From UI to data, deployment and AI' },
    desc: {
      ko: '기술을 나열하지 않고 개발 분야별로 구분하고, 각 기술이 어디에 쓰이는지 함께 정리했습니다.',
      en: 'Instead of a plain list, skills are grouped by development area, each with a note on where it is used.',
    },
  },

  projects: {
    title: { ko: '기획하고, 구현하고, 배포한 프로젝트', en: 'Projects I planned, built and deployed' },
    desc: {
      ko: '모든 프로젝트는 실제 접속 가능한 서비스로 배포되어 있습니다. 서비스 화면과 GitHub 소개 페이지를 각각 확인할 수 있습니다.',
      en: 'Every project is deployed as a live service. You can open the running service and its GitHub project page separately.',
    },
    openService: { ko: '실제 서비스 열기', en: 'Open live service' },
    role: { ko: 'My Role', en: 'My Role' },
    metricsNote: { ko: '※ 프로젝트 소개 페이지에 공개된 지표입니다.', en: '※ Figures published on the project page.' },
    features: { ko: '주요 기능', en: 'Key features' },
    coreTech: { ko: '핵심 구현 기술', en: 'Core implementation' },
    stack: { ko: '사용 기술', en: 'Tech stack' },
    liveService: { ko: 'LIVE SERVICE · 실제 서비스', en: 'LIVE SERVICE' },
    githubIntro: { ko: 'GITHUB · 프로젝트 소개', en: 'GITHUB · PROJECT PAGE' },
    visit: { ko: '서비스 바로가기', en: 'Visit service' },
    serviceN: { ko: '서비스', en: 'Service' },
    source: { ko: '소스코드', en: 'Source code' },
  },

  education: {
    title: { ko: '학력 및 교육 이력', en: 'Education & training' },
    degree: { ko: '학력', en: 'Degree' },
    course: { ko: '교육과정', en: 'Course' },
    graduated: { ko: '졸업', en: 'Graduated' },
    completed: { ko: '수료', en: 'Completed' },
    pending: { ko: '수료 예정', en: 'Expected' },
    hours: { ko: '시간', en: 'hours' },
  },

  philosophy: {
    title: { ko: '제가 일하는 방식', en: 'How I work' },
  },

  contact: {
    title: { ko: '함께 일할 수 있기를 기대합니다', en: "I'd love to work with you" },
    desc: {
      ko: '채용 담당자와 면접관분들의 연락을 기다리고 있습니다. 편하신 방법으로 연락 주세요.',
      en: 'Recruiters and interviewers are very welcome to get in touch. Reach out in whichever way suits you.',
    },
    lead: {
      ko: '새로운 기술을 배우고 서비스로 만드는 일을 좋아합니다. 부담 없이 연락 주세요.',
      en: 'I enjoy learning new technology and turning it into services. Feel free to reach out.',
    },
    sendEmail: { ko: '이메일 보내기', en: 'Send email' },
    call: { ko: '전화 걸기', en: 'Call' },
    closing1: { ko: '배우는 속도만큼 ', en: 'I will keep growing ' },
    closing2: { ko: '성장하는 개발자', en: 'as fast as I learn' },
    closing3: { ko: '가 되겠습니다.', en: '.' },
    thanks: { ko: '읽어 주셔서 감사합니다.', en: 'Thank you for reading.' },
  },

  form: {
    title: { ko: '메시지 보내기', en: 'Send a message' },
    hint: {
      ko: '아래 양식을 작성하면 이메일로 전달됩니다.',
      en: 'Fill in the form below and it will be delivered to my email.',
    },
    name: { ko: '이름', en: 'Name' },
    email: { ko: '이메일', en: 'Email' },
    subject: { ko: '제목', en: 'Subject' },
    message: { ko: '메시지', en: 'Message' },
    namePh: { ko: '홍길동', en: 'Your name' },
    emailPh: { ko: 'name@example.com', en: 'name@example.com' },
    subjectPh: { ko: '문의 제목', en: 'What is this about?' },
    messagePh: { ko: '문의 내용을 입력해 주세요.', en: 'Write your message here.' },
    errRequired: { ko: '필수 입력 항목입니다.', en: 'This field is required.' },
    errEmail: { ko: '올바른 이메일 주소를 입력해 주세요.', en: 'Please enter a valid email address.' },
    errMessage: { ko: '메시지를 10자 이상 입력해 주세요.', en: 'Please write at least 10 characters.' },
    submit: { ko: '메시지 보내기', en: 'Send message' },
    sending: { ko: '전송 중...', en: 'Sending...' },
    success: {
      ko: '메시지가 전송되었습니다. 확인 후 빠르게 회신드리겠습니다.',
      en: 'Your message has been sent. I will reply as soon as I can.',
    },
    error: { ko: '전송에 실패했습니다. 잠시 후 다시 시도하거나', en: 'Sending failed. Please try again in a moment, or' },
    errorLink: { ko: '이메일로 직접 연락', en: 'contact me directly by email' },
    errorTail: { ko: '해 주세요.', en: '.' },
    notConfigured: {
      ko: '메일 전송 설정(Web3Forms 키)이 아직 등록되지 않았습니다.',
      en: 'Mail delivery (Web3Forms key) is not configured yet.',
    },
  },

  footer: {
    rights: { ko: 'All rights reserved.', en: 'All rights reserved.' },
  },

  backToTop: { ko: '맨 위로 이동', en: 'Back to top' },
  newWindow: { ko: ' (새 창에서 열림)', en: ' (opens in a new tab)' },
}

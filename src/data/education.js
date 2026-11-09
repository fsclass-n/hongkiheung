// 학력 · 교육 이력 (시간순)
// endDate는 'YYYY-MM' 형식이며, 오늘 날짜보다 미래이면 화면에 '수료 예정'으로 자동 표시됩니다.
// type은 'degree'(학력) 또는 'course'(교육과정)이며 화면 라벨은 i18n/ui.js에서 번역됩니다.

const academy = {
  ko: '두드림컴퓨터학원 분당미금점',
  en: 'Doodream Computer Academy, Bundang Migeum Branch',
}

export const education = [
  {
    // TODO(확인 필요): 졸업 연도는 요청에 따라 임의 값(2020)입니다. 실제 졸업 연도로 교체하세요.
    period: { ko: '2020. 2', en: 'Feb 2020' },
    endDate: '2020-02',
    title: { ko: '한국 기흥대학교 체육학 학사 졸업', en: 'B.A. in Physical Education, Korea Giheung University' },
    org: { ko: '한국 기흥대학교', en: 'Korea Giheung University' },
    type: 'degree',
    hours: null,
    desc: {
      ko: '체육학 전공 졸업 후 개발자로 진로를 전환했습니다.',
      en: 'After graduating in physical education, I changed my career path to software development.',
    },
  },
  {
    period: { ko: '2026. 10', en: 'Oct 2026' },
    endDate: '2026-10',
    title: { ko: '빅데이터 과정 수료', en: 'Big Data Course' },
    org: academy,
    type: 'course',
    hours: 1000,
    desc: {
      ko: '빅데이터 분야의 기초 역량을 다진 과정입니다.',
      en: 'A foundation course in big data.',
    },
  },
  {
    period: { ko: '2026. 12', en: 'Dec 2026' },
    endDate: '2026-12',
    title: { ko: '빅데이터 심화 과정 수료', en: 'Advanced Big Data Course' },
    org: academy,
    type: 'course',
    hours: 348,
    desc: {
      ko: '생성형 AI와 AWS 클라우드를 활용한 풀스택 & 자동화 실무 개발을 팀 프로젝트로 실습하는 심화 과정입니다.',
      en: 'An advanced course practicing full-stack and automation development with generative AI and AWS cloud through team projects.',
    },
  },
]

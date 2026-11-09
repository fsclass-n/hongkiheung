<div align="center">

# 홍기흥 | Full-Stack Developer Portfolio

**기획부터 배포까지, 직접 만들어 증명하는 풀스택 개발자의 포트폴리오**

[![GitHub Pages](https://img.shields.io/github/actions/workflow/status/fsclass-n/hongkiheung/deploy-pages.yml?branch=main&label=GitHub%20Pages&logo=github&style=for-the-badge)](https://fsclass-n.github.io/hongkiheung/)
[![Netlify](https://img.shields.io/badge/Netlify-Deploy-00C7B7?logo=netlify&logoColor=white&style=for-the-badge)](https://hongkiheung.netlify.app/)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Ffsclass-n.github.io%2Fhongkiheung%2F&label=Live&style=for-the-badge)](https://fsclass-n.github.io/hongkiheung/)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white&style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?logo=javascript&logoColor=black&style=flat-square)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=flat-square)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=flat-square)
![Web3Forms](https://img.shields.io/badge/Web3Forms-Contact_Form-4F46E5?style=flat-square)

[![License](https://img.shields.io/github/license/fsclass-n/hongkiheung?style=flat-square&color=blue)](LICENSE)
[![Issues](https://img.shields.io/github/issues/fsclass-n/hongkiheung?style=flat-square)](https://github.com/fsclass-n/hongkiheung/issues)
[![Repo Size](https://img.shields.io/github/repo-size/fsclass-n/hongkiheung?style=flat-square)](https://github.com/fsclass-n/hongkiheung)
[![Last Commit](https://img.shields.io/github/last-commit/fsclass-n/hongkiheung?style=flat-square)](https://github.com/fsclass-n/hongkiheung/commits/main)
[![Top Language](https://img.shields.io/github/languages/top/fsclass-n/hongkiheung?style=flat-square)](https://github.com/fsclass-n/hongkiheung)

</div>

## 배포 주소

| 구분 | 주소 |
| --- | --- |
| GitHub Pages | <https://fsclass-n.github.io/hongkiheung/> |
| Netlify | <https://hongkiheung.netlify.app/> |

React + Tailwind CSS 4 + Vite로 만든 개인 포트폴리오 사이트입니다. 한국어 / 영어, 라이트 / 다크 테마를 지원하며 Netlify와 GitHub Pages 두 곳에 배포됩니다.

## 실행 / 빌드

```bash
npm install
npm run dev       # 개발 서버 (http://localhost:5173)
npm run build     # dist/ 생성
npm run preview   # 빌드 결과 로컬 확인
```

## 문의 폼 (Web3Forms)

Contact 섹션의 폼은 [Web3Forms](https://web3forms.com)로 이메일을 전송합니다. (`src/components/ContactForm.jsx`)

1. Web3Forms에서 수신받을 이메일로 Access Key를 발급받습니다.
2. 로컬: `.env.example`을 `.env`로 복사해 `VITE_WEB3FORMS_ACCESS_KEY` 값을 채웁니다.
3. Netlify: Site settings > Environment variables에 같은 이름으로 등록한 뒤 다시 배포합니다.
4. GitHub Pages: 저장소 Settings > Secrets and variables > Actions에 `WEB3FORMS_ACCESS_KEY`로 등록한 뒤 워크플로를 다시 실행합니다.

키는 빌드 시점에 주입되므로 값을 바꾸면 재배포가 필요합니다. 키가 없으면 폼은 화면에 보이지만 전송 대신 "설정되지 않음" 안내와 이메일 직접 연락 링크를 보여 줍니다.
필수값 검증, 전송 중 중복 제출 방지, 성공·실패 안내, 실패 시 입력값 유지, 스팸 방지용 honeypot 필드를 포함합니다.
메일 제목은 `[Portfolio] 입력한 제목`으로 전달되고, 입력한 이메일이 Reply-To로 사용됩니다.

## 한국어 / 영어

헤더의 `KO | EN` 버튼으로 전환하며 선택은 `localStorage`에 저장됩니다(기본값은 한국어). `<html lang>`, 문서 제목, 메타 설명도 함께 바뀝니다.

- 번역 대상 문구는 `{ ko: '...', en: '...' }` 형태로 작성하고 `useI18n().t()`로 꺼냅니다.
- 콘텐츠 번역은 `src/data/*.js`, 화면 UI 문구는 `src/i18n/ui.js`에 있습니다.
- 크롤러와 SNS 미리보기는 JavaScript를 실행하지 않으므로 `index.html`의 OG 메타는 한국어로 고정됩니다.

## 배포

### GitHub Pages

`.github/workflows/deploy-pages.yml`이 `main` 브랜치에 푸시될 때마다 빌드해서 배포합니다.
프로젝트 페이지는 `/hongkiheung/` 하위 경로에서 서비스되므로 워크플로가 `VITE_BASE=/hongkiheung/`를 지정하고, `vite.config.js`의 `base`와 `src/utils/asset.js`가 이 경로를 `index.html`의 스크립트·아이콘과 프로젝트 이미지에 반영합니다.

저장소 Settings > Pages의 **Source는 `GitHub Actions`**여야 합니다. (`Deploy from a branch`로 두면 빌드 전 소스가 그대로 노출되어 빈 화면이 나옵니다.)

```bash
# 서브 경로 빌드를 로컬에서 확인
VITE_BASE=/hongkiheung/ npm run build && VITE_BASE=/hongkiheung/ npm run preview
# → http://localhost:4173/hongkiheung/
```

### Netlify

저장소를 Netlify에 연결하면 `netlify.toml` 설정(`npm run build` → `dist`)으로 바로 배포됩니다. 루트(`/`)에서 서비스되므로 `VITE_BASE`는 지정하지 않습니다.
보안 헤더(CSP 포함)와 캐시 정책도 `netlify.toml`에 들어 있습니다.
사이트 주소가 `https://hongkiheung.netlify.app/`가 아니라면 아래 파일의 URL을 함께 바꾸세요.

- `index.html` (canonical, Open Graph, JSON-LD)
- `public/robots.txt`, `public/sitemap.xml`
- `src/data/profile.js` (`siteUrl`)

> 외부 폰트·CDN을 쓰지 않아 CSP가 `'self'` 위주이며, 문의 폼을 위해 `api.web3forms.com`만 허용합니다. 외부 스크립트나 이미지를 추가하면 `netlify.toml`의 CSP도 수정해야 합니다. (GitHub Pages에는 커스텀 응답 헤더를 지정할 수 없어 CSP가 적용되지 않습니다.)

## 구조

```
src/
  data/         콘텐츠(수정은 여기서) profile · skills · projects · education
  components/   섹션별 컴포넌트 (Hero, About, TechStack, Projects, Education, Philosophy, Contact ...)
  hooks/        useTheme(테마), useScrollSpy(활성 메뉴)
  i18n/         LanguageContext(언어 상태 · t()), ui.js(UI 문구 사전)
  utils/        asset(): 배포 base 경로를 반영한 public 파일 경로
  index.css     디자인 토큰(라이트/다크 CSS 변수) + Tailwind 설정
public/         favicon, OG 이미지, 프로젝트 스크린샷(images/), robots, sitemap
.github/workflows/  GitHub Pages 배포 워크플로
```

- 테마: `<html data-theme>` + CSS 변수. `public/theme-init.js`가 첫 페인트 전에 적용해 깜빡임이 없습니다.
- 아이콘: 기술 브랜드 아이콘은 `simple-icons`(사용하는 것만 번들), 나머지는 `Icons.jsx`의 자체 SVG입니다.
- 프로젝트 스크린샷은 실제 서비스를 1440×900으로 캡처해 960×600 WebP로 변환한 것입니다. 서비스 화면이 바뀌면 다시 캡처해 교체하세요.

## 수정이 필요한 항목 (코드에 `TODO(확인 필요)`로 표시)

| 위치 | 내용 |
| --- | --- |
| `src/data/education.js` | 학사 졸업 연도 `2020. 2`는 요청에 따라 임의로 넣은 값입니다. |
| `src/data/education.js` | 심화 과정 `2026. 12`는 오늘 날짜 기준 미래라 화면에 "수료 예정"으로 표시되며, 날짜가 지나면 자동으로 "수료"로 바뀝니다. |
| `src/data/projects.js` (홈픽) | 홈픽에서 본인이 맡은 역할을 확인하지 못해 `role: null`(미표시)입니다. |
| `src/data/projects.js` (포트폴리오) | 전용 '프로젝트 소개 페이지'가 없어 GitHub 저장소 링크로 대체했습니다. |
| `src/data/projects.js` (픽타이밍) | 서비스 2 주소를 요청서의 `douckdns.org`가 아닌 `duckdns.org`로 교정했습니다. 접속 여부를 확인하세요. |
| `src/data/profile.js` | 영문 이름 `Hong Ki-heung`은 한글 이름을 로마자로 옮긴 값입니다. 선호하는 표기로 바꾸세요. |
| `src/data/profile.js` | 전화번호·이메일은 요청서 값 그대로입니다. 실제 값으로 바꿀 때는 `phoneHref`, `emailHref`도 함께 수정하세요. |

프로젝트 기능·기술 설명은 각 서비스와 소개 페이지(`fsclass-n.github.io/*`)에서 확인한 내용만 사용했습니다. 노마드픽의 정량 지표(97.4% 등)는 소개 페이지에 공개된 값입니다.

## 라이선스

소스 코드는 [MIT License](LICENSE)로 공개합니다. 다만 프로필 정보, 프로젝트 스크린샷, 소개 문구 등 개인 콘텐츠의 권리는 홍기흥에게 있으며 라이선스 대상에 포함되지 않습니다.

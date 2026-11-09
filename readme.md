# 홍기흥 | Full-Stack Developer Portfolio

React + Tailwind CSS 4 + Vite로 만든 개인 포트폴리오 사이트입니다. Netlify 배포를 기준으로 구성했습니다.

## 실행 / 빌드

```bash
npm install
npm run dev       # 개발 서버 (http://localhost:5173)
npm run build     # dist/ 생성 (Netlify 배포 대상)
npm run preview   # 빌드 결과 로컬 확인
```

## Netlify 배포

저장소를 Netlify에 연결하면 `netlify.toml` 설정(`npm run build` → `dist`)으로 바로 배포됩니다.
보안 헤더(CSP 포함)와 캐시 정책도 `netlify.toml`에 들어 있습니다.
사이트 주소가 `https://hongkiheung.netlify.app/`가 아니라면 아래 파일의 URL을 함께 바꾸세요.

- `index.html` (canonical, Open Graph, JSON-LD)
- `public/robots.txt`, `public/sitemap.xml`
- `src/data/profile.js` (`siteUrl`)

> 외부 폰트·CDN을 쓰지 않아 CSP가 `'self'` 위주입니다. 외부 스크립트나 이미지를 추가하면 `netlify.toml`의 CSP도 수정해야 합니다.

## 구조

```
src/
  data/         콘텐츠(수정은 여기서) profile · skills · projects · education
  components/   섹션별 컴포넌트 (Hero, About, TechStack, Projects, Education, Philosophy, Contact ...)
  hooks/        useTheme(테마), useScrollSpy(활성 메뉴)
  index.css     디자인 토큰(라이트/다크 CSS 변수) + Tailwind 설정
public/         favicon, OG 이미지, 프로젝트 스크린샷(images/), robots, sitemap
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
| `src/data/profile.js` | 전화번호·이메일은 요청서 값 그대로입니다. 실제 값으로 바꿀 때는 `phoneHref`, `emailHref`도 함께 수정하세요. |

프로젝트 기능·기술 설명은 각 서비스와 소개 페이지(`fsclass-n.github.io/*`)에서 확인한 내용만 사용했습니다. 노마드픽의 정량 지표(97.4% 등)는 소개 페이지에 공개된 값입니다.

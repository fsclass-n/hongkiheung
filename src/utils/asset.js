// public/ 폴더의 파일 경로를 배포 base 경로(예: GitHub Pages의 /hongkiheung/)에 맞게 변환합니다.
// 사용 예: asset('/images/homepick.webp')
export const asset = (path) => import.meta.env.BASE_URL + path.replace(/^\//, '')

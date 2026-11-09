import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Tailwind CSS 4는 PostCSS 설정 없이 Vite 플러그인만으로 동작합니다.
// base: 사이트가 호스팅되는 경로입니다.
// - Netlify / 로컬: 루트('/')
// - GitHub Pages(https://fsclass-n.github.io/hongkiheung/): 배포 워크플로가 VITE_BASE=/hongkiheung/ 를 지정합니다.
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react(), tailwindcss()],
})

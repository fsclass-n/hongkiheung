import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Tailwind CSS 4는 PostCSS 설정 없이 Vite 플러그인만으로 동작합니다.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

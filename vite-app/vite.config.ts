import { defineConfig } from 'vite'

// Viteで動くReact用の公式プラグイン
import react from '@vitejs/plugin-react'
// React用の他に Vue用（@vitejs/plugin-vue)、Svelte用（@svelte/vite-plugin-svelte）
// 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})

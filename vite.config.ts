import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/impar-frontapp/',
  envPrefix: ['BASE_URL'],
  plugins: [react()]
})

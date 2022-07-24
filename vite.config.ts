import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/impar-frontapp/',
  server: {
    port: 3001
  },
  plugins: [react()]
})

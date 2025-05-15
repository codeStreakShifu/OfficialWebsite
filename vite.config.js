import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Changed from '/OfficialWebsite/'
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})

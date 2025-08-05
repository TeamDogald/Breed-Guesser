import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages expects an index.html in the root directory
  // so just run npm build before pushing to GitHub and this will rebuild our assets to the root
  build: { outDir: '../build' },
  // needed for github pages just put the repo name here
  base: '/',
})

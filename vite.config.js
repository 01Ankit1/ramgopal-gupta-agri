import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = fileURLToPath(new URL('.', import.meta.url))

// GitHub Pages has no rewrite rules. Serving the built app as 404.html
// lets /products and other routes load the SPA on a direct visit or refresh.
function githubPagesSpaFallback() {
  return {
    name: 'github-pages-spa-fallback',
    apply: 'build',
    closeBundle() {
      const dist = resolve(root, 'dist')
      copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))
    },
  }
}

export default defineConfig({
  plugins: [react(), githubPagesSpaFallback()],
  // Custom domain is served from the site root. Absolute asset URLs keep
  // working when a deep link such as /products is refreshed.
  base: '/',
})

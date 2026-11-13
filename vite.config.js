import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `npm run build` prerenders every public route to its own HTML file and
// writes dist/404.html for unknown paths. GitHub Pages has no rewrite rules,
// so a real file is what makes /products and /products/<slug> return HTTP 200.
export default defineConfig({
  plugins: [react()],
  // Custom domain is served from the site root. Absolute asset URLs keep
  // working when a deep link such as /products is refreshed.
  base: '/',
  ssr: {
    // The prerender step runs the SSR bundle in Node. Bundle the CJS
    // dependencies so that bundle does not depend on named-export interop.
    noExternal: ['react-helmet-async', 'i18next', 'react-i18next'],
  },
})

import { SITE_URL } from '../site.js';
import { publicPaths } from './publicRoutes.js';

export function renderSitemap(lastmod = new Date().toISOString().slice(0, 10)) {
  const urls = publicPaths().map((pathname) => {
    const loc = pathname === '/' ? `${SITE_URL}/` : `${SITE_URL}${pathname}`;
    const changefreq = pathname.startsWith('/products/') ? 'monthly' : 'weekly';
    const priority = pathname === '/' ? '1.0' : pathname === '/products' ? '0.9' : '0.7';
    return [
      '  <url>',
      `    <loc>${loc}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      '  </url>',
    ].join('\n');
  });

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
}

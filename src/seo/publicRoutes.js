import { productsList } from '../data/products.js';

/**
 * Pages that should be real files on GitHub Pages.
 * /admin is private (noindex, robots.txt) and stays on the 404.html fallback.
 */
export function publicPaths() {
  return ['/', '/products', ...productsList.map((product) => `/products/${product.id}`)];
}

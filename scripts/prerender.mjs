import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { productsList } from '../src/data/products.js';
import { OG_IMAGE, SITE_URL } from '../src/site.js';
import { buildProductJsonLd, parseInrAmount } from '../src/seo/productJsonLd.js';
import { publicPaths } from '../src/seo/publicRoutes.js';
import { renderSitemap } from '../src/seo/sitemap.js';
import hi from '../src/locales/hi.json' with { type: 'json' };

process.env.NODE_ENV ||= 'production';

const root = resolve(import.meta.dirname, '..');
const dist = resolve(root, 'dist');
const ssrDir = resolve(root, 'dist-ssr');

try {
  const template = readFileSync(resolve(dist, 'index.html'), 'utf8');
  const shell = stripDefaultSeo(template);
  const { render } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href);

  const paths = publicPaths();
  for (const pathname of paths) {
    const { head, body } = await render(pathname);
    const page = inject(shell, head, body);
    assertPage(pathname, page);
    writeRoute(pathname, page);
    console.log(`prerendered ${pathname}`);
  }

  const notFound = inject(
    shell,
    [
      `<title>${escapeText(hi.seo.not_found_title)}</title>`,
      `<meta name="description" content="${escapeAttr(hi.seo.description)}" />`,
      '<meta name="robots" content="noindex, nofollow" />',
    ].join(''),
    '',
  );
  writeFileSync(resolve(dist, '404.html'), notFound);
  console.log('wrote 404.html');

  const sitemap = renderSitemap();
  writeFileSync(resolve(dist, 'sitemap.xml'), sitemap);
  writeFileSync(resolve(root, 'public', 'sitemap.xml'), sitemap);
  assertSitemap(sitemap, paths);
  console.log(`sitemap.xml synced (${paths.length} urls)`);
} finally {
  rmSync(ssrDir, { recursive: true, force: true });
}

function writeRoute(pathname, html) {
  if (pathname === '/') {
    writeFileSync(resolve(dist, 'index.html'), html);
    return;
  }

  const relative = pathname.slice(1);
  // products.html makes /products return 200. The directory index makes
  // /products/ return 200 as well. A directory index alone would 301.
  const flat = resolve(dist, `${relative}.html`);
  const index = resolve(dist, relative, 'index.html');
  mkdirSync(dirname(flat), { recursive: true });
  mkdirSync(dirname(index), { recursive: true });
  writeFileSync(flat, html);
  writeFileSync(index, html);
}

function inject(shell, head, body) {
  const marked = head.replace(/<(title|meta|link)\b/gi, '<$1 data-prerender="true"');
  const withHead = shell.replace('</head>', `    ${marked}\n  </head>`);
  if (!withHead.includes('<div id="root"></div>')) {
    throw new Error('Built index.html is missing <div id="root"></div>');
  }
  return withHead.replace('<div id="root"></div>', () => `<div id="root">${body}</div>`);
}

function stripDefaultSeo(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/gi, '')
    .replace(/<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>\s*/gi, '')
    .replace(/<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/?>\s*/gi, '')
    .replace(/<meta\s+name="robots"\s+content="[\s\S]*?"\s*\/?>\s*/gi, '')
    .replace(/<meta\s+property="og:[^"]+"\s+content="[\s\S]*?"\s*\/?>\s*/gi, '')
    .replace(/<meta\s+name="twitter:[^"]+"\s+content="[\s\S]*?"\s*\/?>\s*/gi, '');
}

function expectedFor(pathname) {
  if (pathname === '/') {
    return {
      title: hi.seo.title,
      description: hi.seo.description,
      canonical: `${SITE_URL}/`,
    };
  }
  if (pathname === '/products') {
    return {
      title: hi.seo.products_title,
      description: hi.seo.products_description,
      canonical: `${SITE_URL}/products`,
    };
  }

  const id = pathname.slice('/products/'.length);
  const item = hi.products.items[id];
  const product = productsList.find((entry) => entry.id === id);
  if (!item || !product) throw new Error(`No catalogue entry for ${pathname}`);
  return {
    title: fill(hi.seo.product_detail_title, { product: item.name }),
    description: fill(hi.seo.product_detail_description, {
      product: item.name,
      description: item.description,
    }),
    canonical: `${SITE_URL}/products/${id}`,
    product,
    item,
  };
}

function assertPage(pathname, html) {
  const expected = expectedFor(pathname);
  const title = decode(only(html, /<title[^>]*>([\s\S]*?)<\/title>/gi, `${pathname} title`));
  const description = decode(attr(html, 'name', 'description', pathname));
  const canonical = attrHref(html, pathname);
  const robots = attr(html, 'name', 'robots', pathname);

  if (title !== expected.title) {
    throw new Error(`${pathname} title\n  expected: ${expected.title}\n  actual:   ${title}`);
  }
  if (description !== expected.description) {
    throw new Error(`${pathname} description mismatch`);
  }
  if (canonical !== expected.canonical) {
    throw new Error(`${pathname} canonical ${canonical} !== ${expected.canonical}`);
  }
  if (robots !== 'index, follow') {
    throw new Error(`${pathname} robots should be index, follow (got ${robots})`);
  }
  for (const property of ['og:title', 'og:description', 'og:url', 'og:image', 'og:type', 'og:site_name']) {
    const value = attr(html, 'property', property, pathname);
    if (property === 'og:title' && decode(value) !== expected.title) {
      throw new Error(`${pathname} og:title mismatch`);
    }
    if (property === 'og:description' && decode(value) !== expected.description) {
      throw new Error(`${pathname} og:description mismatch`);
    }
    if (property === 'og:url' && value !== expected.canonical) {
      throw new Error(`${pathname} og:url mismatch`);
    }
    if (property === 'og:image' && value !== OG_IMAGE) {
      throw new Error(`${pathname} og:image mismatch`);
    }
  }
  for (const name of ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image']) {
    const value = attr(html, 'name', name, pathname);
    if (name === 'twitter:title' && decode(value) !== expected.title) {
      throw new Error(`${pathname} twitter:title mismatch`);
    }
    if (name === 'twitter:description' && decode(value) !== expected.description) {
      throw new Error(`${pathname} twitter:description mismatch`);
    }
    if (name === 'twitter:image' && value !== OG_IMAGE) {
      throw new Error(`${pathname} twitter:image mismatch`);
    }
    if (name === 'twitter:card' && value !== 'summary_large_image') {
      throw new Error(`${pathname} twitter:card mismatch`);
    }
  }
  if (!html.includes('lang="hi"')) {
    throw new Error(`${pathname} should be Hindi (lang="hi")`);
  }

  if (expected.product) {
    assertProductJsonLd(pathname, html, expected);
    if (!html.includes(expected.item.name)) {
      throw new Error(`${pathname} body is missing the product name`);
    }
  }
}

function assertProductJsonLd(pathname, html, expected) {
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)]
    .map((match) => JSON.parse(match[1]));
  const product = blocks.find((block) => block['@type'] === 'Product');
  if (!product) throw new Error(`${pathname} is missing Product JSON-LD`);

  const banned = ['aggregateRating', 'review', 'ratingValue', 'reviewCount'];
  for (const key of banned) {
    if (JSON.stringify(product).includes(`"${key}"`)) {
      throw new Error(`${pathname} JSON-LD invents ${key}`);
    }
  }
  if (product.name !== expected.item.name) throw new Error(`${pathname} JSON-LD name mismatch`);
  if (product.description !== expected.item.description) {
    throw new Error(`${pathname} JSON-LD description mismatch`);
  }
  if (product.url !== expected.canonical) throw new Error(`${pathname} JSON-LD url mismatch`);

  const amount = parseInrAmount(expected.product.price);
  if (!amount) return;
  if (!product.offers || product.offers.price !== amount || product.offers.priceCurrency !== 'INR') {
    throw new Error(`${pathname} JSON-LD offer does not match the stored price ${expected.product.price}`);
  }
  const expectedLd = buildProductJsonLd({
    id: expected.product.id,
    name: expected.item.name,
    description: expected.item.description,
    category: expected.item.category,
    image: expected.product.image,
    price: expected.product.price,
  });
  if (JSON.stringify(product) !== JSON.stringify(expectedLd)) {
    throw new Error(`${pathname} JSON-LD does not match buildProductJsonLd`);
  }
}

function assertSitemap(xml, paths) {
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  const expected = paths.map((pathname) => (pathname === '/' ? `${SITE_URL}/` : `${SITE_URL}${pathname}`));
  if (locs.join('\n') !== expected.join('\n')) {
    throw new Error(`sitemap locs diverged from public routes\n${locs.join('\n')}`);
  }
  if (xml.includes('/admin')) throw new Error('sitemap includes /admin');
}

function only(html, regex, label) {
  const matches = [...html.matchAll(regex)];
  if (matches.length !== 1) {
    throw new Error(`${label}: expected 1 match, found ${matches.length}`);
  }
  return matches[0][1];
}

function attr(html, attrName, key, pathname) {
  const pattern = new RegExp(
    `<meta\\b[^>]*\\b${attrName}="${key}"[^>]*\\bcontent="([^"]*)"[^>]*/?>`,
    'i',
  );
  const match = pattern.exec(html);
  if (!match) throw new Error(`${pathname} is missing meta ${attrName}="${key}"`);
  const again = new RegExp(pattern.source, 'gi');
  const count = [...html.matchAll(again)].length;
  if (count !== 1) throw new Error(`${pathname} has ${count} meta ${key} tags`);
  return match[1];
}

function attrHref(html, pathname) {
  const matches = [...html.matchAll(/<link\b[^>]*\brel="canonical"[^>]*\bhref="([^"]+)"[^>]*>/gi)];
  if (matches.length !== 1) {
    throw new Error(`${pathname} canonical count ${matches.length}`);
  }
  return matches[0][1];
}

function fill(template, vars) {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => vars[key] ?? '');
}

function decode(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'");
}

function escapeText(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeAttr(text) {
  return escapeText(text).replace(/"/g, '&quot;');
}

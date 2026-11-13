import { SITE_NAME, SITE_URL } from '../site.js';

/**
 * Pull a rupee amount out of a price string we actually store.
 * "₹1,200 / 40kg" → "1200". Anything we cannot read is omitted
 * rather than guessed. Ratings are never added: the catalogue has none.
 */
export function parseInrAmount(price) {
  if (typeof price !== 'string') return null;
  const match = price.trim().match(
    /^₹\s*(\d{1,3}(?:,\d{3})+|\d+)(?:\.(\d{1,2}))?(?:\s*\/\s*\S+)?$/,
  );
  if (!match) return null;
  const amount = match[1].replace(/,/g, '') + (match[2] ? `.${match[2]}` : '');
  const value = Number(amount);
  if (!Number.isFinite(value) || value <= 0) return null;
  return amount;
}

export function buildProductJsonLd({ id, name, description, category, image, price }) {
  if (!id || !name || !description) return null;

  const url = `${SITE_URL}/products/${id}`;
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    url,
  };

  if (category) data.category = category;
  if (typeof image === 'string' && image) {
    data.image = image.startsWith('http')
      ? image
      : `${SITE_URL}${image.startsWith('/') ? image : `/${image}`}`;
  }

  const amount = parseInrAmount(price);
  if (amount) {
    const offer = {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: amount,
      url,
      seller: {
        '@type': 'Store',
        name: SITE_NAME,
        url: `${SITE_URL}/`,
      },
    };
    if (price.includes('/')) offer.description = price.trim();
    data.offers = offer;
  }

  return data;
}

export function jsonLdScript(data) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

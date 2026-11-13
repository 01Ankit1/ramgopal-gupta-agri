export const SITE_URL = 'https://ramgopalgupta.in';
export const SITE_NAME = 'M/s Ram Gopal Gupta';
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

/** Google listing search. Do not invent a place id. */
export const MAPS_QUERY = 'M/s Ram Gopal Gupta, Gurh Rd, Mangawan, Madhya Pradesh 486111';
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;
export const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&hl=hi&z=17&output=embed`;

export const INSTAGRAM_URL = 'https://www.instagram.com/ramgopalgupta_mangawan';

export const PHONE_TEL = 'tel:+919425184962';
export const WHATSAPP_URL = 'https://wa.me/919425184962';

/** Shop photos must not be described as a specific product they do not show. */
export function shopPhotoAltKey(src) {
  if (src.includes('/img1.')) return 'shop_front';
  if (src.includes('/img2.')) return 'shop_interior';
  if (src.includes('/img3.')) return 'shop_night';
  return null;
}

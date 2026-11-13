import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { OG_IMAGE, SITE_NAME, SITE_URL } from '../site';

/**
 * Title, description, canonical, Open Graph and Twitter tags for one route.
 * Defaults in index.html cover the first HTML response; this updates them
 * after navigation and for clients that run JavaScript.
 */
export default function Seo({
  title,
  description,
  path = '/',
  noindex = false,
}) {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith('en') ? 'en' : 'hi';
  const url = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex ? <meta name="robots" content="noindex, nofollow" /> : <meta name="robots" content="index, follow" />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:alt" content={SITE_NAME} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={lang === 'hi' ? 'hi_IN' : 'en_IN'} />
      <meta property="og:locale:alternate" content={lang === 'hi' ? 'en_IN' : 'hi_IN'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:image:alt" content={SITE_NAME} />
    </Helmet>
  );
}

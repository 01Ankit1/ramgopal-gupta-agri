import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <main className="pt-40 pb-24 px-4 text-center min-h-[60vh]">
      <Seo
        title={t('seo.not_found_title')}
        description={t('seo.description')}
        path="/404"
        noindex
      />
      <h1 className="text-3xl font-heading font-extrabold text-slate-900 mb-4">
        {t('seo.not_found_title')}
      </h1>
      <Link to="/" className="text-primary-700 font-bold underline">
        {t('nav.home')}
      </Link>
    </main>
  );
}

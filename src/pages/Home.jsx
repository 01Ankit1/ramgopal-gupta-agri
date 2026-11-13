import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import AboutUs from '../components/AboutUs';
import ProductCategories from '../components/ProductCategories';
import WhyChooseUs from '../components/WhyChooseUs';
import DailyTips from '../components/DailyTips';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';

export default function Home() {
  const { t } = useTranslation();

  return (
    <main>
      <Seo title={t('seo.title')} description={t('seo.description')} path="/" />
      <Hero />
      <Brands />
      <AboutUs />
      <ProductCategories />
      <WhyChooseUs />
      <DailyTips />
      <Testimonials />
      <Gallery />
    </main>
  );
}

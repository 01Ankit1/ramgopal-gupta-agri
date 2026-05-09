import Hero from '../components/Hero';
import Brands from '../components/Brands';
import AboutUs from '../components/AboutUs';
import ProductCategories from '../components/ProductCategories';
import WhyChooseUs from '../components/WhyChooseUs';
import DailyTips from '../components/DailyTips';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';

export default function Home() {
  return (
    <main>
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

import { useTranslation } from 'react-i18next';

export default function Brands() {
  const { t } = useTranslation();

  const brands = [
    "Bayer", "Syngenta", "UPL", "IFFCO", "Corteva", "PI Industries", "Tata Rallis", "Coromandel", "Advanta", "Mahadhan"
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h3 className="text-lg font-heading font-semibold text-slate-500">{t('brands.title')}</h3>
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 py-4">
          {brands.map((brand, index) => (
            <span key={index} className="text-3xl font-heading font-bold text-slate-300 mx-8">
              {brand}
            </span>
          ))}
        </div>
        {/* Duplicate for seamless looping */}
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-12 py-4">
          {brands.map((brand, index) => (
            <span key={`dup-${index}`} className="text-3xl font-heading font-bold text-slate-300 mx-8">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

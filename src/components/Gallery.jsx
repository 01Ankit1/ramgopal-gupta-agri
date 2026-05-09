import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Gallery() {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';

  const images = [
    { 
      src: "/images/img1.webp", 
      alt: "Fertilizer Stock", altHi: "उर्वरक स्टॉक",
      colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-2" 
    },
    { 
      src: "/images/img2.webp", 
      alt: "Farmer interaction", altHi: "किसान बातचीत",
      colSpan: "col-span-1", rowSpan: "row-span-1" 
    },
    { 
      src: "/images/img3.webp", 
      alt: "Seed packets", altHi: "बीज पैकेट",
      colSpan: "col-span-1", rowSpan: "row-span-1" 
    },
    { 
      src: "/images/img4.webp", 
      alt: "Healthy crops", altHi: "स्वस्थ फसलें",
      colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-1" 
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-bold uppercase tracking-wider mb-2 text-sm">{t('gallery.badge')}</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            {t('gallery.title')}
          </h3>
          <p className="text-slate-600 text-lg">
            {t('gallery.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${img.colSpan} ${img.rowSpan} rounded-2xl overflow-hidden group relative`}
            >
              <img 
                src={img.src} 
                alt={isHindi ? img.altHi : img.alt} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <span className="text-white font-medium p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {isHindi ? img.altHi : img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

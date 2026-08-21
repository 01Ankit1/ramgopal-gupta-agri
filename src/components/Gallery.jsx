import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Gallery() {
  const { t } = useTranslation();
  const alts = t('gallery.alts', { returnObjects: true });

  const images = [
    // Shop photos (from local)
    {
      src: "./images/img1.webp",
      colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-2"
    },
    {
      src: "./images/img2.webp",
      colSpan: "col-span-1", rowSpan: "row-span-1"
    },
    // Product photos (Unsplash)
    {
      src: "https://images.unsplash.com/photo-1592982537447-6f29cb9b0999?auto=format&fit=crop&w=800&q=80",
      colSpan: "col-span-1", rowSpan: "row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
      colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80",
      colSpan: "col-span-1", rowSpan: "row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
      colSpan: "col-span-1", rowSpan: "row-span-1"
    },
    {
      src: "./images/img3.webp",
      colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-1"
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-bold uppercase tracking-wider mb-4">
            {t('gallery.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-slate-600 text-lg">
            {t('gallery.desc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className={`${img.colSpan} ${img.rowSpan} rounded-3xl overflow-hidden group relative shadow-md`}
            >
              <img
                src={img.src}
                alt={alts[index]}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <span className="text-white font-semibold text-base p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {alts[index]}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

/**
 * Real shop photos live in src/assets/gallery/.
 * Drop jpg, jpeg, png or webp files in that folder — they appear here
 * automatically, sorted by filename. See src/assets/gallery/README.md.
 * Stock photos are not used. Until a file is added, it is not shown.
 */
const photoModules = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
});

const ALT_KEY_BY_FILE = {
  '01-shop-front.webp': 'shop_front',
  '02-shop-interior.webp': 'shop_interior',
  '03-shop-night.webp': 'shop_night',
};

const photos = Object.entries(photoModules)
  .map(([path, src]) => {
    const filename = path.split('/').pop();
    return { filename, src };
  })
  .sort((a, b) => a.filename.localeCompare(b.filename, undefined, { numeric: true }));

export default function Gallery() {
  const { t } = useTranslation();

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

        {photos.length === 0 ? (
          <p className="text-center text-slate-500 max-w-xl mx-auto">{t('gallery.empty')}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((photo, index) => {
              const altKey = ALT_KEY_BY_FILE[photo.filename];
              const alt = altKey
                ? t(`gallery.alts.${altKey}`)
                : photo.filename.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ');
              return (
                <motion.figure
                  key={photo.filename}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className="rounded-3xl overflow-hidden bg-white shadow-md"
                >
                  <img
                    src={photo.src}
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <figcaption className="px-4 py-3 text-sm font-medium text-slate-700">
                    {alt}
                  </figcaption>
                </motion.figure>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

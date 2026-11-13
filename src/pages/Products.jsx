import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';
import { shopPhotoAltKey } from '../site';
import { productsList } from '../data/products';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function Products() {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <Seo
        title={t('seo.products_title')}
        description={t('seo.products_description')}
        path="/products"
      />

      {/* Hero Header */}
      <div className="relative bg-slate-900 text-white py-20 overflow-hidden mb-12">
        <img
          src="/images/img3.webp"
          alt=""
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/20 border border-primary-500/40 text-primary-300 text-sm font-bold uppercase tracking-wider mb-6">
              {t('products.header_badge')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-4">
              {t('products.header_title')}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {t('products.header_desc')}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsList.map((product, idx) => {
            const name = t(`products.items.${product.id}.name`);
            const photoKey = shopPhotoAltKey(product.image);
            const imageAlt = photoKey ? t(`gallery.alts.${photoKey}`) : name;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.07 }}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 group flex flex-col hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={product.image}
                    alt={imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  <div className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow`}>
                    {t(`products.items.${product.id}.badge`)}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-semibold px-2 py-1 rounded-full">
                    {t(`products.items.${product.id}.category`)}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-base font-heading font-bold text-slate-900 mb-1 leading-snug">
                    {name}
                  </h3>
                  <p className="text-slate-500 text-sm mb-4 flex-grow leading-relaxed">
                    {t(`products.items.${product.id}.description`)}
                  </p>

                  <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                    <span className="text-xl font-extrabold text-slate-900">{product.price}</span>
                    <div className="flex gap-2">
                      <a
                        href={`https://wa.me/919425184962?text=${encodeURIComponent(t('products.enquiry_message', { product: name }))}`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition-colors"
                        title={t('products.whatsapp_title')}
                        aria-label={t('products.whatsapp_title')}
                      >
                        <FaWhatsapp size={14} />
                      </a>
                      <Link
                        to={`/products/${product.id}`}
                        className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors flex items-center"
                      >
                        {t('products.details')} →
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* WhatsApp bulk enquiry CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-emerald-700 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-extrabold mb-3">
            {t('products.bulk_title')}
          </h3>
          <p className="text-primary-100 mb-8 text-lg">
            {t('products.bulk_desc')}
          </p>
          <a
            href={`https://wa.me/919425184962?text=${encodeURIComponent(t('products.bulk_message'))}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white text-primary-700 font-extrabold text-lg px-10 py-4 rounded-2xl hover:bg-primary-50 transition-colors shadow-xl"
          >
            <FaWhatsapp className="text-green-600 text-2xl" />
            {t('products.bulk_btn')}
          </a>
        </motion.div>
      </div>
    </div>
  );
}

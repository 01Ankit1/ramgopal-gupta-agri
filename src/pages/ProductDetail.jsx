import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { productsList } from './Products';

export default function ProductDetail() {
  const { id } = useParams();
  const { t } = useTranslation();

  const product = productsList.find(p => p.id === id);

  if (!product) {
    return <div className="pt-32 text-center text-2xl font-bold">{t('detail.not_found')}</div>;
  }

  const name = t(`products.items.${product.id}.name`);
  const description = t(`products.items.${product.id}.description`);
  const benefits = t('detail.benefits', { returnObjects: true });

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <Helmet>
        <title>{t('seo.product_detail_title', { product: name })}</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Link to="/products" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-600 mb-8 transition-colors">
          <FaArrowLeft /> {t('detail.back')}
        </Link>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Product Image */}
            <div className="relative h-96 lg:h-auto">
              <img src={product.image} alt={name} className="w-full h-full object-cover" />
              <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-full text-sm font-bold text-primary-700 shadow-lg">
                {t(`products.items.${product.id}.category`)}
              </div>
            </div>

            {/* Product Info */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 mb-4">
                {name}
              </h1>

              <div className="text-3xl font-black text-primary-600 mb-6">
                {product.price}
              </div>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {description}
              </p>

              <div className="mb-8">
                <h3 className="font-heading font-bold text-slate-900 mb-3">{t('detail.benefits_title')}</h3>
                <ul className="grid grid-cols-2 gap-3">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700">
                      <FaCheckCircle className="text-secondary-500" /> {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-10 bg-primary-50 p-6 rounded-2xl border border-primary-100">
                <h3 className="font-heading font-bold text-slate-900 mb-2">{t('detail.crops_title')}</h3>
                <p className="text-primary-800 font-medium">{t('detail.crops')}</p>
              </div>

              <a
                href={`https://wa.me/919425184962?text=${encodeURIComponent(t('detail.enquiry_message', { product: name }))}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white py-4 rounded-xl flex items-center justify-center gap-3 font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <FaWhatsapp size={24} />
                {t('detail.enquire')}
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

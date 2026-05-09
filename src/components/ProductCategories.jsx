import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function ProductCategories() {
  const { t } = useTranslation();

  const categories = [
    {
      id: 1,
      title: t('categories.c1_title'),
      description: t('categories.c1_desc'),
      image: "/images/img1.webp",
      color: "bg-green-50"
    },
    {
      id: 2,
      title: t('categories.c2_title'),
      description: t('categories.c2_desc'),
      image: "/images/img2.webp",
      color: "bg-yellow-50"
    },
    {
      id: 3,
      title: t('categories.c3_title'),
      description: t('categories.c3_desc'),
      image: "/images/img3.webp",
      color: "bg-blue-50"
    },
    {
      id: 4,
      title: t('categories.c4_title'),
      description: t('categories.c4_desc'),
      image: "/images/img4.webp",
      color: "bg-red-50"
    }
  ];

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary-600 uppercase tracking-wider mb-2">{t('categories.badge')}</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            {t('categories.title')}
          </h3>
          <p className="text-lg text-slate-600">
            {t('categories.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className={`p-6 flex-grow flex flex-col ${category.color}`}>
                <h4 className="text-xl font-heading font-bold text-slate-900 mb-2">{category.title}</h4>
                <p className="text-slate-600 text-sm mb-6 flex-grow">{category.description}</p>
                
                <Link to="/products" className="inline-flex items-center gap-2 text-primary-600 font-semibold group-hover:text-primary-700 transition-colors mt-auto">
                  {t('categories.enquire')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

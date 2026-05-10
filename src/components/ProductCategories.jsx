import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Droplets, Shield, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const categoryIcons = [Leaf, Droplets, Shield, Zap];
const categoryColors = [
  { bg: "from-emerald-500 to-primary-600", light: "bg-emerald-50", text: "text-emerald-600" },
  { bg: "from-amber-400 to-secondary-500", light: "bg-amber-50", text: "text-amber-600" },
  { bg: "from-blue-500 to-blue-700", light: "bg-blue-50", text: "text-blue-600" },
  { bg: "from-rose-500 to-rose-700", light: "bg-rose-50", text: "text-rose-600" },
];

export default function ProductCategories() {
  const { t } = useTranslation();

  const categories = [
    {
      id: 1,
      title: t('categories.c1_title'),
      description: t('categories.c1_desc'),
      image: "/images/fertilizer.jpg",
    },
    {
      id: 2,
      title: t('categories.c2_title'),
      description: t('categories.c2_desc'),
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: t('categories.c3_title'),
      description: t('categories.c3_desc'),
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: t('categories.c4_title'),
      description: t('categories.c4_desc'),
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50 via-white to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-bold uppercase tracking-wider mb-4">
            {t('categories.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 mb-4">
            {t('categories.title')}
          </h2>
          <p className="text-lg text-slate-600">
            {t('categories.desc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = categoryIcons[index];
            const colors = categoryColors[index];
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:-translate-y-2 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${colors.bg} opacity-40 group-hover:opacity-60 transition-opacity duration-300`} />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Icon className="text-white w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-heading font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {category.title}
                  </h4>
                  <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">
                    {category.description}
                  </p>
                  <Link
                    to="/products"
                    className={`inline-flex items-center gap-2 font-semibold ${colors.text} group-hover:gap-3 transition-all mt-auto`}
                  >
                    {t('categories.enquire')}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

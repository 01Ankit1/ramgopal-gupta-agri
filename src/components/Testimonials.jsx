import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Structural/visual data per testimonial; text comes from the locale files
const testimonialMeta = [
  { initial: "R", color: "from-emerald-500 to-primary-600", rating: 5 },
  { initial: "S", color: "from-blue-500 to-blue-700", rating: 5 },
  { initial: "L", color: "from-amber-500 to-orange-600", rating: 5 }
];

export default function Testimonials() {
  const { t } = useTranslation();
  const items = t('testimonials.items', { returnObjects: true });

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-bold uppercase tracking-wider mb-4">
            {t('testimonials.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-slate-500 text-lg">
            {t('testimonials.desc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const meta = testimonialMeta[index] || testimonialMeta[0];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative bg-slate-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 flex flex-col"
              >
                {/* Quote mark */}
                <div className="text-7xl text-primary-100 font-serif absolute top-4 right-6 leading-none select-none">"</div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(meta.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary-500 text-secondary-500" />
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed flex-grow mb-8 relative z-10">
                  "{item.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-5 border-t border-slate-200">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${meta.color} flex items-center justify-center text-white font-extrabold text-lg shadow-md`}>
                    {meta.initial}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900">{item.name}</h4>
                    <p className="text-sm text-slate-500">{item.village}</p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-xs bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-semibold">
                      {t('testimonials.verified')}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-emerald-700 rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white"
        >
          {[
            { num: "10,000+", label: t('testimonials.stats_farmers') },
            { num: "20+", label: t('testimonials.stats_years') },
            { num: "500+", label: t('testimonials.stats_products') },
            { num: "4.9★", label: t('testimonials.stats_rating') },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-3xl font-extrabold mb-1">{s.num}</div>
              <div className="text-primary-200 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

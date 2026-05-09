import { motion } from 'framer-motion';
import { BadgeCheck, Tag, Headset, Heart, Building2, GraduationCap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function WhyChooseUs() {
  const { t } = useTranslation();

  const reasons = [
    { icon: <BadgeCheck />, title: t('whyus.r1_title'), desc: t('whyus.r1_desc') },
    { icon: <Tag />, title: t('whyus.r2_title'), desc: t('whyus.r2_desc') },
    { icon: <Headset />, title: t('whyus.r3_title'), desc: t('whyus.r3_desc') },
    { icon: <Heart />, title: t('whyus.r4_title'), desc: t('whyus.r4_desc') },
    { icon: <Building2 />, title: t('whyus.r5_title'), desc: t('whyus.r5_desc') },
    { icon: <GraduationCap />, title: t('whyus.r6_title'), desc: t('whyus.r6_desc') }
  ];

  return (
    <section id="why-us" className="py-20 bg-primary-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="leaf-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 20 Q70 5 80 20 T50 80 Q30 95 20 80 T50 20 Z" fill="white" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#leaf-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-secondary-400 font-bold uppercase tracking-wider mb-2 text-sm">{t('whyus.badge')}</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            {t('whyus.title')}
          </h3>
          <p className="text-primary-100 text-lg">
            {t('whyus.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-secondary-500 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg">
                {item.icon}
              </div>
              <h4 className="text-xl font-heading font-bold text-white mb-3">{item.title}</h4>
              <p className="text-primary-100">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

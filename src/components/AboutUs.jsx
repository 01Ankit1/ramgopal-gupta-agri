import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Sprout, Handshake } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function AboutUs() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary-600" />,
      title: t('about.f1_title'),
      description: t('about.f1_desc')
    },
    {
      icon: <Truck className="w-6 h-6 text-primary-600" />,
      title: t('about.f2_title'),
      description: t('about.f2_desc')
    },
    {
      icon: <Sprout className="w-6 h-6 text-primary-600" />,
      title: t('about.f3_title'),
      description: t('about.f3_desc')
    },
    {
      icon: <Handshake className="w-6 h-6 text-primary-600" />,
      title: t('about.f4_title'),
      description: t('about.f4_desc')
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/images/img1.webp" 
                alt="Store and Fertilizer bags" 
                className="rounded-2xl w-full h-64 object-cover shadow-md"
              />
              <img 
                src="/images/img2.webp" 
                alt="Store Front and Products" 
                className="rounded-2xl w-full h-64 object-cover mt-8 shadow-md"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-2xl border border-slate-100 flex flex-col items-center justify-center w-36 h-36">
              <span className="text-4xl font-heading font-extrabold text-primary-600">20+</span>
              <span className="text-sm font-medium text-slate-600 text-center leading-tight mt-1">{t('about.years')}</span>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-primary-600 uppercase tracking-wider mb-2">{t('about.badge')}</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6 leading-tight">
              {t('about.title')}
            </h3>
            <p className="text-slate-600 mb-8 text-lg">
              {t('about.desc')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

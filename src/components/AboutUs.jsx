import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Sprout, Handshake, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function AboutUs() {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';

  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      bg: "bg-primary-600",
      title: t('about.f1_title'),
      description: t('about.f1_desc')
    },
    {
      icon: <Truck className="w-6 h-6 text-white" />,
      bg: "bg-secondary-500",
      title: t('about.f2_title'),
      description: t('about.f2_desc')
    },
    {
      icon: <Sprout className="w-6 h-6 text-white" />,
      bg: "bg-emerald-600",
      title: t('about.f3_title'),
      description: t('about.f3_desc')
    },
    {
      icon: <Handshake className="w-6 h-6 text-white" />,
      bg: "bg-blue-600",
      title: t('about.f4_title'),
      description: t('about.f4_desc')
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Image grid */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/img1.webp"
                alt="Store"
                className="rounded-3xl w-full h-72 object-cover shadow-xl"
              />
              <img
                src="/images/img2.webp"
                alt="Products"
                className="rounded-3xl w-full h-72 object-cover mt-10 shadow-xl"
              />
            </div>

            {/* Experience badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              className="absolute -bottom-6 right-6 bg-white rounded-3xl shadow-2xl p-5 flex items-center gap-4 border border-slate-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 flex flex-col items-center justify-center text-white shadow-lg">
                <span className="text-2xl font-black leading-none">20+</span>
                <span className="text-xs font-semibold opacity-80">Years</span>
              </div>
              <div>
                <p className="font-bold text-slate-900 text-base">{isHindi ? "विश्वास का अनुभव" : "Years of Trust"}</p>
                <p className="text-slate-500 text-sm">{isHindi ? "किसानों की सेवा में" : "Serving Farmers"}</p>
              </div>
            </motion.div>

            {/* Call now badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 bg-primary-600 rounded-2xl shadow-xl p-3 flex items-center gap-2 text-white"
            >
              <Phone size={16} />
              <span className="text-sm font-bold">94251 84962</span>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-bold uppercase tracking-wider mb-4">
              {t('about.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 mb-6 leading-tight">
              {t('about.title')}
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              {t('about.desc')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 group"
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

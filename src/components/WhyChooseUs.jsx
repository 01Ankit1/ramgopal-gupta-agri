import { motion } from 'framer-motion';
import { BadgeCheck, Tag, Headset, Heart, Building2, Sprout } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function WhyChooseUs() {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';

  const reasons = [
    {
      icon: <BadgeCheck className="w-7 h-7" />,
      bg: "from-emerald-500 to-primary-600",
      title: t('whyus.r1_title'),
      desc: t('whyus.r1_desc'),
      stat: "100%",
      statLabel: isHindi ? "असली उत्पाद" : "Genuine"
    },
    {
      icon: <Tag className="w-7 h-7" />,
      bg: "from-amber-400 to-orange-500",
      title: t('whyus.r2_title'),
      desc: t('whyus.r2_desc'),
      stat: "₹₹",
      statLabel: isHindi ? "थोक दाम" : "Wholesale"
    },
    {
      icon: <Headset className="w-7 h-7" />,
      bg: "from-blue-500 to-blue-700",
      title: t('whyus.r3_title'),
      desc: t('whyus.r3_desc'),
      stat: "24/7",
      statLabel: isHindi ? "सहायता" : "Support"
    },
    {
      icon: <Heart className="w-7 h-7" />,
      bg: "from-rose-500 to-pink-600",
      title: t('whyus.r4_title'),
      desc: t('whyus.r4_desc'),
      stat: "10k+",
      statLabel: isHindi ? "किसान" : "Farmers"
    },
    {
      icon: <Building2 className="w-7 h-7" />,
      bg: "from-violet-500 to-purple-700",
      title: t('whyus.r5_title'),
      desc: t('whyus.r5_desc'),
      stat: "20+",
      statLabel: isHindi ? "वर्ष" : "Years"
    },
    {
      icon: <Sprout className="w-7 h-7" />,
      bg: "from-teal-500 to-cyan-600",
      title: t('whyus.r6_title'),
      desc: t('whyus.r6_desc'),
      stat: "500+",
      statLabel: isHindi ? "उत्पाद" : "Products"
    }
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-slate-900">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="./images/img4.webp"
          alt="bg"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-950/90 to-slate-900" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-500/20 border border-secondary-500/30 text-secondary-400 text-sm font-bold uppercase tracking-wider mb-4">
            {t('whyus.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-4">
            {t('whyus.title')}
          </h2>
          <p className="text-slate-400 text-lg">{t('whyus.desc')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-7 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-5">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.bg} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-heading font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
              <div className="mt-5 pt-5 border-t border-white/10 flex items-center gap-2">
                <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-400">{item.stat}</span>
                <span className="text-slate-500 text-sm">{item.statLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

// Counter Hook for animated numbers
const useCounter = (end, duration = 2) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return count;
};

export default function Hero() {
  const { t } = useTranslation();
  const yearsTrust = useCounter(25);
  const happyFarmers = useCounter(10);
  const productsAvailable = useCounter(500);

  return (
    <section id="home" className="relative pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Premium Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 rounded-full bg-primary-100/50 blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-48 -mb-48 w-96 h-96 rounded-full bg-secondary-100/50 blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary-700 font-semibold text-sm mb-6 shadow-sm border border-slate-100">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-600"></span>
              </span>
              {t('hero.trust_badge')}
            </div>
            
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 leading-tight mb-6"
              dangerouslySetInnerHTML={{ __html: t('hero.title').replace('<highlight>', '<span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">').replace('</highlight>', '</span>') }}
            />
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="https://wa.me/919425184962" target="_blank" rel="noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-3.5 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                <FaWhatsapp className="text-xl" />
                {t('hero.whatsapp_btn')}
              </a>
              <a href="#contact" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-800 border-2 border-slate-200 px-8 py-3.5 rounded-xl font-semibold hover:border-primary-600 hover:text-primary-600 transition-all shadow-sm hover:shadow-md">
                <FaMapMarkerAlt />
                {t('hero.visit_btn')}
              </a>
            </div>

            {/* Premium Quick Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 lg:gap-8 pt-8 border-t border-slate-200 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left group cursor-default">
                <h3 className="font-heading font-black text-3xl md:text-4xl text-slate-800 group-hover:text-primary-600 transition-colors">{yearsTrust}+</h3>
                <p className="text-sm md:text-base text-slate-500 font-medium mt-1">{t('hero.stats_years')}</p>
              </div>
              <div className="text-center lg:text-left group cursor-default border-l border-slate-200 pl-4 lg:pl-8">
                <h3 className="font-heading font-black text-3xl md:text-4xl text-slate-800 group-hover:text-primary-600 transition-colors">{productsAvailable}+</h3>
                <p className="text-sm md:text-base text-slate-500 font-medium mt-1">{t('hero.stats_genuine')}</p>
              </div>
              <div className="text-center lg:text-left group cursor-default border-l border-slate-200 pl-4 lg:pl-8">
                <h3 className="font-heading font-black text-3xl md:text-4xl text-slate-800 group-hover:text-primary-600 transition-colors">{happyFarmers}k+</h3>
                <p className="text-sm md:text-base text-slate-500 font-medium mt-1">{t('hero.stats_farmers')}</p>
              </div>
            </div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center mt-10 lg:mt-0"
          >
            {/* Main Image with Glassmorphism overlay */}
            <div className="relative z-10 w-full max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Indian Farmer in field" 
                  className="w-full h-[400px] lg:h-[500px] object-cover scale-105 hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              
              {/* Floating badges with Glassmorphism */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-white/40"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary-100 flex items-center justify-center text-secondary-600 font-bold text-xl shadow-inner">
                  ₹
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Best Price</p>
                  <p className="font-bold text-slate-800">Wholesale Rates</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-white/40"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 text-2xl shadow-inner">
                  🌱
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Top Quality</p>
                  <p className="font-bold text-slate-800">High Yield Seeds</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

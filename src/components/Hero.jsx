import { motion } from 'framer-motion';
import { FaWhatsapp, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const useCounter = (end, duration = 2) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);
  return count;
};

export default function Hero() {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';
  const yearsTrust = useCounter(25);
  const happyFarmers = useCounter(10);
  const productsAvailable = useCounter(500);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-900 z-0" />
      
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/img3.webp"
          alt="Agriculture"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-primary-500/10 blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-secondary-500/10 blur-3xl animate-pulse z-0" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 border border-primary-500/40 text-primary-300 text-sm font-semibold mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-400" />
              </span>
              {isHindi ? "मंगावन, रीवा का भरोसेमंद कृषि स्टोर" : "Trusted Agriculture Store in Mangawan, Rewa"}
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-tight mb-6">
              {isHindi ? (
                <>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">खाद, बीज</span>
                  <br />और दवाई
                </>
              ) : (
                <>
                  Quality <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Khad, Beej</span>
                  <br />& Dawai
                </>
              )}
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
              {isHindi
                ? "थोक और फुटकर दोनों में सर्वोत्तम दाम। किसानों का विश्वसनीय साथी — 20+ वर्षों से मंगावन की सेवा में।"
                : "Best prices for wholesale & retail. Farmer's trusted partner — serving Mangawan for 20+ years."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <a
                href="https://wa.me/919425184962"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-green-500/40 hover:-translate-y-1"
              >
                <FaWhatsapp className="text-2xl" />
                {isHindi ? "WhatsApp पर पूछें" : "WhatsApp Enquiry"}
              </a>
              <a
                href="tel:+919425184962"
                className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-2xl font-bold text-lg transition-all"
              >
                <FaPhone />
                +91 94251 84962
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {[
                { value: `${yearsTrust}+`, label: isHindi ? "वर्षों का अनुभव" : "Years Experience" },
                { value: `${productsAvailable}+`, label: isHindi ? "उत्पाद उपलब्ध" : "Products Available" },
                { value: `${happyFarmers}k+`, label: isHindi ? "खुश किसान" : "Happy Farmers" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">{stat.value}</div>
                  <div className="text-slate-400 text-sm mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image card stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10">
              <img
                src="/images/img1.webp"
                alt="Store products"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              {/* Location badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-500 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold">M/S Ramgopal Gupta</p>
                    <p className="text-slate-300 text-sm">Bus Stand Mangawan, Rewa, MP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge top right */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3 border border-slate-100"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary-100 flex items-center justify-center text-secondary-600 font-extrabold text-xl">₹</div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Best Price</p>
                <p className="font-bold text-slate-800">Wholesale Rates</p>
              </div>
            </motion.div>

            {/* Floating badge bottom left */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3 border border-slate-100"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center text-2xl">🌾</div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">100% Genuine</p>
                <p className="font-bold text-slate-800">Certified Seeds</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-slate-400 text-sm">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-slate-500 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-slate-400 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}

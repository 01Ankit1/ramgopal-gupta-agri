import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { FaWhatsapp } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section — navigates to home first if needed
  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { title: t('nav.home'), href: '/', isRoute: true },
    { title: t('nav.products'), href: '/products', isRoute: true },
    { title: t('nav.about'), section: 'about' },
    { title: t('nav.contact'), section: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white shadow-lg shadow-slate-200/50 py-2'
        : 'bg-white/95 backdrop-blur-md py-3'
    }`}>
      {/* Top contact strip */}
      <div className="bg-primary-700 text-white text-xs py-1.5 px-4 flex justify-between items-center">
        <span className="hidden sm:block">
          {t('nav.topbar')}
        </span>
        <div className="flex items-center gap-4 ml-auto">
          <a href="tel:+919425184962" className="flex items-center gap-1 hover:text-secondary-300 transition-colors">
            <Phone size={11} /> 94251 84962
          </a>
          <a href="https://wa.me/919425184962" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-green-300 transition-colors">
            <FaWhatsapp size={11} /> WhatsApp
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
            <img
              src="./logo.png"
              alt="M/S Ramgopal Gupta"
              className="h-12 md:h-14 w-auto object-contain"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/200x80/00A651/FFF?text=RG+Agri&font=montserrat"; }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.title}
                  to={link.href}
                  className={`text-sm font-semibold transition-all relative group ${
                    location.pathname === link.href
                      ? 'text-primary-600'
                      : 'text-slate-600 hover:text-primary-600'
                  }`}
                >
                  {link.title}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary-600 transition-all duration-300 ${
                    location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ) : (
                <button
                  key={link.title}
                  onClick={() => scrollToSection(link.section)}
                  className="text-sm font-semibold text-slate-600 hover:text-primary-600 transition-all relative group"
                >
                  {link.title}
                  <span className="absolute -bottom-1 left-0 h-0.5 bg-primary-600 w-0 group-hover:w-full transition-all duration-300" />
                </button>
              )
            ))}

            <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
              <LanguageSwitcher />
              <a
                href="https://wa.me/919425184962"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-green-200"
              >
                <FaWhatsapp className="text-base" />
                {t('nav.enquiry')}
              </a>
            </div>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-xl absolute w-full"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.title}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-4 py-3 text-base font-semibold text-slate-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-colors"
                  >
                    {link.title}
                  </Link>
                ) : (
                  <button
                    key={link.title}
                    onClick={() => scrollToSection(link.section)}
                    className="w-full text-left flex items-center px-4 py-3 text-base font-semibold text-slate-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-colors"
                  >
                    {link.title}
                  </button>
                )
              ))}
              <div className="pt-3 border-t border-slate-100 flex gap-3">
                <a href="tel:+919425184962" onClick={() => setIsOpen(false)}
                  className="flex-1 flex items-center justify-center gap-2 bg-slate-100 text-slate-800 py-3 rounded-xl font-semibold text-sm">
                  <Phone size={16} /> {t('nav.call')}
                </a>
                <a href="https://wa.me/919425184962" target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}
                  className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-xl font-semibold text-sm">
                  <FaWhatsapp className="text-lg" /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: t('nav.home'), href: '/' },
    { title: t('nav.products'), href: '/products' },
    { title: t('nav.education'), href: '/education' },
    { title: t('nav.about'), href: '/#about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white/90 backdrop-blur-md py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <Link to="/" className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <img src="/logo.png" alt="M/S Ramgopal Gupta Logo" className="h-12 md:h-14 w-auto object-contain" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/200x80/15803d/FFF?text=RG+Logo&font=montserrat" }} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.title} 
                to={link.href}
                className={`font-medium transition-colors ${location.pathname === link.href ? 'text-primary-600' : 'text-slate-600 hover:text-primary-600'}`}
              >
                {link.title}
              </Link>
            ))}
            
            <div className="flex items-center gap-4 pl-4 border-l border-slate-200">
              <LanguageSwitcher />
              <a href="#contact" className="bg-primary-600 text-white px-5 py-2 rounded-full font-medium hover:bg-primary-700 transition-colors shadow-sm hover:shadow-md">
                {t('contact.inquiry')}
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl absolute w-full"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  {link.title}
                </Link>
              ))}
              <div className="px-3 pt-4 border-t border-slate-100 mt-2">
                <a href="#contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center w-full text-center bg-primary-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors shadow-md">
                  {t('contact.inquiry')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

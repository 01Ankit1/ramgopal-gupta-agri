import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('appLanguage', newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded-full text-sm font-medium transition-colors border border-slate-200"
    >
      <span className={i18n.language === 'en' ? 'text-primary-700 font-bold' : 'text-slate-500'}>EN</span>
      <div className="w-px h-4 bg-slate-300"></div>
      <span className={i18n.language === 'hi' ? 'text-primary-700 font-bold' : 'text-slate-500'}>HI</span>
    </button>
  );
}

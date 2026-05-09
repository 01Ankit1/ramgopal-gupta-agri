import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function StickyMobileBar() {
  const { t } = useTranslation();

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 flex items-center p-2 gap-2 pb-safe">
      <a 
        href="tel:9425184962" 
        className="flex-1 bg-secondary-500 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-semibold shadow-sm active:scale-95 transition-transform"
      >
        <FaPhoneAlt />
        {t('contact.call_now')}
      </a>
      <a 
        href="https://wa.me/919425184962" 
        target="_blank" 
        rel="noreferrer"
        className="flex-1 bg-[#25D366] text-white py-3 rounded-xl flex items-center justify-center gap-2 font-semibold shadow-sm active:scale-95 transition-transform"
      >
        <FaWhatsapp size={20} />
        WhatsApp
      </a>
    </div>
  );
}

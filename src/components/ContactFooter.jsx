import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function ContactFooter() {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top CTA strip */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-1">
              {t('contact.cta_title')}
            </h3>
            <p className="text-primary-200">
              {t('contact.cta_desc')}
            </p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <a href="tel:+919425184962" className="flex items-center gap-2 bg-white text-primary-700 font-bold px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors shadow-lg">
              <FaPhoneAlt /> +91 94251 84962
            </a>
            <a href="https://wa.me/919425184962" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-lg">
              <FaWhatsapp className="text-xl" /> WhatsApp
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="mb-5">
              <img
                src="./logo.png"
                alt="M/S Ramgopal Gupta Logo"
                className="h-20 w-auto object-contain bg-white p-2 rounded-2xl"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/200x80/15803d/FFF?text=RG+Agri&font=montserrat"; }}
              />
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed text-sm">
              {t('contact.brand_desc')}
            </p>
            <div className="flex space-x-3">
              {[FaFacebook, FaInstagram, FaWhatsapp, FaYoutube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white transition-all">
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-heading font-bold mb-5 text-base uppercase tracking-wide">{t('contact.quick_links')}</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: t('nav.home'), to: "/" },
                { label: t('nav.products'), to: "/products" },
                { label: t('nav.about'), hash: "#about" },
                { label: t('nav.gallery'), hash: "#gallery" },
                { label: t('nav.contact'), hash: "#contact" },
              ].map((link, i) => (
                <li key={i}>
                  {link.to ? (
                    <Link to={link.to} className="hover:text-primary-400 transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.hash} className="hover:text-primary-400 transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-heading font-bold mb-5 text-base uppercase tracking-wide">{t('contact.contact_us')}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="text-primary-400 mt-1 flex-shrink-0 text-base" />
                <span className="text-slate-400">{t('contact.address')}</span>
              </li>
              <li className="flex gap-3 items-start">
                <FaPhoneAlt className="text-primary-400 flex-shrink-0 mt-1 text-base" />
                <div className="text-slate-400 space-y-1">
                  <div><a href="tel:+919425184962" className="hover:text-primary-400 transition-colors">+91 94251 84962</a></div>
                  <div><a href="tel:+919993464241" className="hover:text-primary-400 transition-colors">+91 99934 64241</a></div>
                  <div><a href="tel:+918085710775" className="hover:text-primary-400 transition-colors">+91 80857 10775</a></div>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <FaWhatsapp className="text-primary-400 flex-shrink-0 mt-1 text-base" />
                <div className="text-slate-400 space-y-1">
                  <div><a href="https://wa.me/919425184962" target="_blank" rel="noreferrer" className="hover:text-primary-400 transition-colors">+91 94251 84962</a></div>
                  <div><a href="https://wa.me/919993464241" target="_blank" rel="noreferrer" className="hover:text-primary-400 transition-colors">+91 99934 64241</a></div>
                  <div><a href="https://wa.me/918085710775" target="_blank" rel="noreferrer" className="hover:text-primary-400 transition-colors">+91 80857 10775</a></div>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <FaEnvelope className="text-primary-400 flex-shrink-0 text-base" />
                <a href="mailto:lakhan.gupta1981@gmail.com" className="text-slate-400 hover:text-primary-400 transition-colors">lakhan.gupta1981@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-heading font-bold mb-5 text-base uppercase tracking-wide">{t('contact.locate_us')}</h4>
            <div className="h-44 rounded-2xl overflow-hidden ring-2 ring-slate-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14457.653457198124!2d81.5644837!3d24.6738986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39845ab55b721869%3A0xe781afbd6e7ff2b3!2sMangawan%2C%20Madhya%20Pradesh%20486111!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-slate-500">
          <p>{t('contact.rights', { year: new Date().getFullYear() })}</p>
          <p className="text-primary-500 font-semibold italic">{t('contact.tagline')}</p>
        </div>
      </div>
    </footer>
  );
}

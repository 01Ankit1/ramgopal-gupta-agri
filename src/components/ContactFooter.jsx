import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { INSTAGRAM_URL, MAPS_EMBED_URL, MAPS_URL, WHATSAPP_URL } from '../site';

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
                src="/logo.png"
                alt="M/s Ram Gopal Gupta"
                width={512}
                height={405}
                loading="lazy"
                decoding="async"
                className="h-20 w-auto object-contain bg-white p-2 rounded-2xl"
              />
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed text-sm">
              {t('contact.brand_desc')}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={t('contact.instagram')}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-200 hover:bg-primary-600 hover:text-white transition-all"
              >
                <FaInstagram size={17} aria-hidden="true" />
                {t('contact.instagram')}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="WhatsApp"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-200 hover:bg-green-600 hover:text-white transition-all"
              >
                <FaWhatsapp size={17} aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-heading font-bold mb-5 text-base uppercase tracking-wide">{t('contact.quick_links')}</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: t('nav.home'), to: "/" },
                { label: t('nav.products'), to: "/products" },
                { label: t('nav.about'), to: "/#about" },
                { label: t('nav.gallery'), to: "/#gallery" },
                { label: t('nav.contact'), to: "/#contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="hover:text-primary-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
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
                <a href={MAPS_URL} target="_blank" rel="noreferrer noopener" className="text-slate-400 hover:text-primary-400 transition-colors">
                  {t('contact.address')}
                </a>
              </li>
              <li className="text-slate-400">{t('contact.hours')}</li>
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
                title={t('contact.map_title')}
                src={MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-block mt-3 text-sm font-semibold text-primary-400 hover:text-primary-300"
            >
              {t('contact.directions')}
            </a>
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

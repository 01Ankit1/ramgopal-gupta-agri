import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function ContactFooter() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="M/S Ramgopal Gupta Logo" className="h-16 w-auto object-contain bg-white p-2 rounded-xl" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/200x80/15803d/FFF?text=RG+Logo&font=montserrat" }} />
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Your trusted partner for authentic agricultural inputs in Mangawan. We believe in providing quality Khad, Beej, and Dawai at the most reasonable prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-primary-600 transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-primary-600 transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-primary-600 transition-colors">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-heading font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-primary-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary-500 transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-primary-500 transition-colors">Products</a></li>
              <li><a href="#why-us" className="hover:text-primary-500 transition-colors">Why Choose Us</a></li>
              <li><a href="#gallery" className="hover:text-primary-500 transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-heading font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="text-primary-500 mt-1 flex-shrink-0" />
                <span>Bus Stand Mangawan, Rewa, Madhya Pradesh, India - 486111</span>
              </li>
              <li className="flex gap-3 items-center">
                <FaPhoneAlt className="text-primary-500 flex-shrink-0" />
                <span>+91 94251 84962<br/>+91 99934 64241<br/>+91 80857 10775</span>
              </li>
              <li className="flex gap-3 items-center">
                <FaWhatsapp className="text-primary-500 flex-shrink-0" />
                <span>+91 94251 84962</span>
              </li>
              <li className="flex gap-3 items-center">
                <FaEnvelope className="text-primary-500 flex-shrink-0" />
                <span>contact@ramgopalgupta.com</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-heading font-bold mb-6 text-lg">Locate Us</h4>
            <div className="h-40 rounded-xl overflow-hidden bg-slate-800">
              {/* Dummy Map Embed */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14457.653457198124!2d81.5644837!3d24.6738986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39845ab55b721869%3A0xe781afbd6e7ff2b3!2sMangawan%2C%20Madhya%20Pradesh%20486111!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} M/S Ramgopal Gupta. All rights reserved.
          </p>
          <p className="text-sm text-primary-500 font-medium">
            Kisano ka bharosa, hamari pehchaan.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export const productsList = [
  {
    id: "urea-45",
    name: "Neem Coated Urea (45kg)",
    nameHi: "नीम लेपित यूरिया (45 किग्रा)",
    category: "Fertilizer",
    categoryHi: "उर्वरक",
    badge: "Best Seller",
    badgeHi: "सबसे ज्यादा बिकने वाला",
    badgeColor: "bg-amber-500",
    price: "₹266.50",
    image: "/images/fertilizer.jpg",
    description: "High quality nitrogen fertilizer with slow release neem coating for better absorption.",
    descriptionHi: "धीमी गति से निकलने वाले नीम लेप के साथ उच्च गुणवत्ता वाला नाइट्रोजन उर्वरक।"
  },
  {
    id: "dap-50",
    name: "IFFCO DAP (50kg)",
    nameHi: "इफको डीएपी (50 किग्रा)",
    category: "Fertilizer",
    categoryHi: "उर्वरक",
    badge: "Top Brand",
    badgeHi: "शीर्ष ब्रांड",
    badgeColor: "bg-primary-600",
    price: "₹1,350",
    image: "/images/fertilizer.jpg",
    description: "Excellent source of Phosphorus and Nitrogen for strong root development.",
    descriptionHi: "मजबूत जड़ विकास के लिए फास्फोरस और नाइट्रोजन का उत्कृष्ट स्रोत।"
  },
  {
    id: "wheat-seed",
    name: "Wheat Seeds — Sharbati",
    nameHi: "गेहूं बीज — शरबती",
    category: "Seeds",
    categoryHi: "बीज",
    badge: "High Yield",
    badgeHi: "अधिक उपज",
    badgeColor: "bg-emerald-600",
    price: "₹1,200 / 40kg",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80",
    description: "High yielding, disease resistant wheat seeds. Perfect for Madhya Pradesh climate.",
    descriptionHi: "अधिक उपज देने वाले, रोग प्रतिरोधी गेहूं के बीज। म.प्र. की जलवायु के अनुकूल।"
  },
  {
    id: "mustard-seed",
    name: "Mustard Seeds (Sarsoon)",
    nameHi: "सरसों के बीज",
    category: "Seeds",
    categoryHi: "बीज",
    badge: "Rabi Season",
    badgeHi: "रबी फसल",
    badgeColor: "bg-yellow-600",
    price: "₹450 / 5kg",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80",
    description: "Premium mustard seeds with high oil content for maximum yield.",
    descriptionHi: "अधिक उपज के लिए उच्च तेल सामग्री वाले प्रीमियम सरसों के बीज।"
  },
  {
    id: "pesticide-plus",
    name: "Bayer Roundup Herbicide",
    nameHi: "बायर राउंडअप खरपतवारनाशक",
    category: "Weedicide",
    categoryHi: "खरपतवारनाशक",
    badge: "Most Effective",
    badgeHi: "सबसे प्रभावी",
    badgeColor: "bg-rose-600",
    price: "₹850 / L",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=600&q=80",
    description: "Effective broad-spectrum systemic herbicide for total weed control.",
    descriptionHi: "पूर्ण खरपतवार नियंत्रण के लिए प्रभावी प्रणालीगत शाकनाशी।"
  },
  {
    id: "npk-fertilizer",
    name: "NPK Fertilizer 19:19:19",
    nameHi: "एनपीके उर्वरक 19:19:19",
    category: "Fertilizer",
    categoryHi: "उर्वरक",
    badge: "Balanced",
    badgeHi: "संतुलित",
    badgeColor: "bg-blue-600",
    price: "₹1,450 / 50kg",
    image: "/images/fertilizer.jpg",
    description: "Balanced water-soluble fertilizer for foliar and drip irrigation application.",
    descriptionHi: "पर्णीय और ड्रिप सिंचाई के लिए संतुलित जल-घुलनशील उर्वरक।"
  },
  {
    id: "fungicide-mancozeb",
    name: "Mancozeb Fungicide",
    nameHi: "मैंकोजेब कवकनाशी",
    category: "Pesticide",
    categoryHi: "कीटनाशक",
    badge: "Crop Protector",
    badgeHi: "फसल रक्षक",
    badgeColor: "bg-purple-600",
    price: "₹320 / 500g",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80",
    description: "Protects crops from fungal diseases. Effective on wheat, vegetables and more.",
    descriptionHi: "फसलों को कवक रोगों से बचाता है। गेहूं, सब्जियों पर प्रभावी।"
  },
  {
    id: "potash-mop",
    name: "Muriate of Potash (MOP)",
    nameHi: "म्यूरेट ऑफ पोटाश (एमओपी)",
    category: "Fertilizer",
    categoryHi: "उर्वरक",
    badge: "Soil Health",
    badgeHi: "मिट्टी स्वास्थ्य",
    badgeColor: "bg-teal-600",
    price: "₹950 / 50kg",
    image: "/images/fertilizer.jpg",
    description: "Improves crop quality, yield, and resistance to stress and disease.",
    descriptionHi: "फसल की गुणवत्ता, उपज और तनाव व रोग प्रतिरोधक क्षमता को बेहतर बनाता है।"
  }
];

const categoryFilters = ['All', 'Fertilizer', 'Seeds', 'Pesticide', 'Weedicide'];
const categoryFiltersHi = ['सभी', 'उर्वरक', 'बीज', 'कीटनाशक', 'खरपतवारनाशक'];

export default function Products() {
  const { i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <Helmet>
        <title>{isHindi ? "उत्पाद" : "Products"} - M/S Ramgopal Gupta</title>
        <meta name="description" content="View our wide range of fertilizers, seeds, and pesticides." />
      </Helmet>

      {/* Hero Header */}
      <div className="relative bg-slate-900 text-white py-20 overflow-hidden mb-12">
        <img
          src="https://images.unsplash.com/photo-1592982537447-6f29cb9b0999?auto=format&fit=crop&w=1920&q=80"
          alt="Products"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/20 border border-primary-500/40 text-primary-300 text-sm font-bold uppercase tracking-wider mb-6">
              {isHindi ? "थोक और फुटकर" : "Wholesale & Retail"}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-4">
              {isHindi ? "हमारे उत्पाद" : "Our Products"}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {isHindi
                ? "थोक और फुटकर दामों पर उच्च गुणवत्ता वाले कृषि उत्पाद"
                : "High-quality agriculture products at wholesale and retail prices"}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsList.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 group flex flex-col hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={product.image}
                  alt={isHindi ? product.nameHi : product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                <div className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow`}>
                  {isHindi ? product.badgeHi : product.badge}
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-semibold px-2 py-1 rounded-full">
                  {isHindi ? product.categoryHi : product.category}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-base font-heading font-bold text-slate-900 mb-1 leading-snug">
                  {isHindi ? product.nameHi : product.name}
                </h3>
                <p className="text-slate-500 text-sm mb-4 flex-grow leading-relaxed">
                  {isHindi ? product.descriptionHi : product.description}
                </p>

                <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                  <span className="text-xl font-extrabold text-slate-900">{product.price}</span>
                  <div className="flex gap-2">
                    <a
                      href={`https://wa.me/919425184962?text=${encodeURIComponent(`नमस्ते, मुझे ${product.nameHi || product.name} के बारे में जानकारी चाहिए।`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition-colors"
                      title="WhatsApp Enquiry"
                    >
                      <FaWhatsapp size={14} />
                    </a>
                    <Link
                      to={`/products/${product.id}`}
                      className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors flex items-center"
                    >
                      {isHindi ? "विवरण" : "Details"} →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp bulk enquiry CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-emerald-700 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-extrabold mb-3">
            {isHindi ? "थोक ऑर्डर के लिए संपर्क करें" : "Contact Us for Wholesale Orders"}
          </h3>
          <p className="text-primary-100 mb-8 text-lg">
            {isHindi
              ? "बड़ी मात्रा में खरीदारी पर विशेष छूट। अभी WhatsApp पर पूछें!"
              : "Special discounts on bulk purchases. Ask us on WhatsApp now!"}
          </p>
          <a
            href="https://wa.me/919425184962?text=नमस्ते, मुझे थोक में उत्पाद चाहिए।"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white text-primary-700 font-extrabold text-lg px-10 py-4 rounded-2xl hover:bg-primary-50 transition-colors shadow-xl"
          >
            <FaWhatsapp className="text-green-600 text-2xl" />
            {isHindi ? "WhatsApp पर थोक पूछताछ करें" : "WhatsApp Wholesale Enquiry"}
          </a>
        </motion.div>
      </div>
    </div>
  );
}

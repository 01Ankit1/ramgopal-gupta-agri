import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const productsList = [
  {
    id: "urea-45",
    name: "Neem Coated Urea (45kg)",
    nameHi: "नीम लेपित यूरिया (45 किग्रा)",
    category: "Fertilizer",
    categoryHi: "उर्वरक",
    price: "₹266.50",
    image: "https://images.unsplash.com/photo-1592982537447-6f29cb9b0999?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "High quality nitrogen fertilizer with slow release neem coating.",
    descriptionHi: "धीमी गति से निकलने वाले नीम लेप के साथ उच्च गुणवत्ता वाला नाइट्रोजन उर्वरक।"
  },
  {
    id: "dap-50",
    name: "IFFCO DAP (50kg)",
    nameHi: "इफको डीएपी (50 किग्रा)",
    category: "Fertilizer",
    categoryHi: "उर्वरक",
    price: "₹1,350",
    image: "https://images.unsplash.com/photo-1558350315-8aa00e8e4590?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Excellent source of Phosphorus and Nitrogen for strong root development.",
    descriptionHi: "मजबूत जड़ विकास के लिए फास्फोरस और नाइट्रोजन का उत्कृष्ट स्रोत।"
  },
  {
    id: "wheat-seed",
    name: "Premium Wheat Seeds (Sharbati)",
    nameHi: "प्रीमियम गेहूं बीज (शरबती)",
    category: "Seeds",
    categoryHi: "बीज",
    price: "₹1,200 / 40kg",
    image: "https://images.unsplash.com/photo-1601662528567-526cd06f6582?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "High yielding, disease resistant wheat seeds suitable for MP climate.",
    descriptionHi: "अधिक उपज देने वाले, रोग प्रतिरोधी गेहूं के बीज जो म.प्र. की जलवायु के अनुकूल हैं।"
  },
  {
    id: "pesticide-plus",
    name: "Bayer Roundup",
    nameHi: "बायर राउंडअप",
    category: "Weedicide",
    categoryHi: "खरपतवारनाशक",
    price: "₹850 / L",
    image: "https://images.unsplash.com/photo-1627920769840-6a0d6bc9f3e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Effective broad-spectrum systemic herbicide for total weed control.",
    descriptionHi: "पूर्ण खरपतवार नियंत्रण के लिए प्रभावी प्रणालीगत शाकनाशी।"
  }
];

export default function Products() {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';
  
  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <Helmet>
        <title>{t('nav.products')} - M/S Ramgopal Gupta</title>
        <meta name="description" content="View our wide range of fertilizers, seeds, and pesticides." />
      </Helmet>
      
      {/* Header Section */}
      <div className="bg-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            {isHindi ? "हमारे उत्पाद" : "Our Products"}
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-10">
            {isHindi 
              ? "थोक और फुटकर दामों पर उच्च गुणवत्ता वाले कृषि उत्पाद" 
              : "High-quality agriculture products at wholesale and retail prices"}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productsList.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-700 shadow-sm">
                  {isHindi ? product.categoryHi : product.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-2">
                  {isHindi ? product.nameHi : product.name}
                </h3>
                <p className="text-slate-600 text-sm mb-4 flex-grow">
                  {isHindi ? product.descriptionHi : product.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-lg font-bold text-slate-900">{product.price}</span>
                  <Link to={`/products/${product.id}`} className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                    {isHindi ? "विवरण देखें" : "View Details"}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

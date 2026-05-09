import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Search, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

  const articles = [
    {
      id: 1,
      title: "Why use Urea?",
      titleHi: "यूरिया का उपयोग क्यों करें?",
      category: "Fertilizers",
      categoryHi: "उर्वरक",
      readTime: "5 min read",
      image: "/images/img1.webp",
      excerpt: "Understand the nitrogen benefits of Urea and how it boosts the early vegetative growth of your crops.",
      excerptHi: "यूरिया के नाइट्रोजन लाभों को समझें और यह आपकी फसलों के प्रारंभिक विकास को कैसे बढ़ावा देता है।"
    },
    {
      id: 2,
      title: "DAP vs NPK: What to choose?",
      titleHi: "DAP vs NPK: क्या चुनें?",
      category: "Fertilizers",
      categoryHi: "उर्वरक",
      readTime: "7 min read",
      image: "/images/img2.webp",
      excerpt: "A comprehensive guide on when to apply DAP and when to switch to NPK for balanced soil nutrients.",
      excerptHi: "संतुलित मिट्टी के पोषक तत्वों के लिए DAP और NPK का उपयोग कब करें, इस पर एक व्यापक मार्गदर्शिका।"
    },
    {
      id: 3,
      title: "Rabi Season Crop Care Guide",
      titleHi: "रबी फसल देखभाल गाइड",
      category: "Seasonal Guide",
      categoryHi: "मौसमी गाइड",
      readTime: "10 min read",
      image: "/images/img3.webp",
      excerpt: "Protect your wheat and mustard crops from frost and early pests with this expert guide.",
      excerptHi: "इस विशेषज्ञ गाइड के साथ अपनी गेहूं और सरसों की फसलों को पाले और शुरुआती कीटों से बचाएं।"
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      
      {/* Premium Header Section */}
      <div className="relative bg-slate-900 text-white py-24 overflow-hidden rounded-b-[3rem] shadow-xl mb-12">
        <div className="absolute inset-0">
          <img 
            src="/images/img4.webp" 
            alt="Agriculture Background" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-primary-900/80 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-secondary-500/20 text-secondary-400 border border-secondary-500/30 text-sm font-bold uppercase tracking-wider mb-6">
              {isHindi ? "किसान शिक्षा मंच" : "Farmer Education Platform"}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 drop-shadow-lg">
              {isHindi ? "किसान ज्ञान केंद्र" : "Farmer Knowledge Center"}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              {isHindi 
                ? "आधुनिक खेती, सही खाद का चुनाव, और फसल सुरक्षा से जुड़े सभी सवालों के जवाब।" 
                : "Expert guides on modern farming, fertilizer choices, and crop protection."}
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <input 
                type="text" 
                placeholder={isHindi ? "लेख खोजें (जैसे: यूरिया, बीज)..." : "Search articles (e.g. Urea, Seeds)..."} 
                className="w-full pl-14 pr-4 py-4 rounded-2xl text-slate-800 focus:outline-none focus:ring-4 focus:ring-primary-500/50 shadow-2xl font-medium"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-primary-600" size={24} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-heading font-bold text-slate-800">
            {isHindi ? "नवीनतम लेख" : "Latest Articles"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div 
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border border-slate-100 flex flex-col group cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-white bg-primary-600/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg">
                    {isHindi ? article.categoryHi : article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-slate-400 text-sm gap-2 mb-4 font-medium">
                  <Clock size={16} className="text-secondary-500" />
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors leading-tight">
                  {isHindi ? article.titleHi : article.title}
                </h3>
                
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                  {isHindi ? article.excerptHi : article.excerpt}
                </p>
                
                <Link to="#" className="flex items-center text-primary-600 font-bold group/btn mt-auto w-fit">
                  {isHindi ? "पूरा लेख पढ़ें" : "Read Full Article"} 
                  <ChevronRight size={20} className="ml-1 group-hover/btn:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const testimonials = [
  {
    name: "Rameshwar Patel",
    village: "Mangawan, Rewa",
    initial: "R",
    color: "from-emerald-500 to-primary-600",
    text: "Pichle 10 saal se main Ramgopal Gupta ji ki dukan se hi khad aur beej le raha hoon. Fasal ki paadawar hamesha achi hoti hai!",
    textHi: "पिछले 10 साल से मैं रामगोपाल गुप्ता जी की दुकान से ही खाद और बीज ले रहा हूँ। फसल की पैदावार हमेशा अच्छी होती है और रेट भी बिल्कुल सही मिलता है।",
    rating: 5
  },
  {
    name: "Santosh Tiwari",
    village: "Garh Road, Rewa",
    initial: "S",
    color: "from-blue-500 to-blue-700",
    text: "Dawai kaun si dalni hai, iski sahi jankari dete hain. Fasal mein keeda lagne par inki batayi dawai ne pura asar kiya. Bahut achhi dukan!",
    textHi: "दवाई कौन सी डालनी है, इसकी सही जानकारी देते हैं। फसल में कीड़ा लगने पर इनकी बताई दवाई ने पूरा असर किया। बहुत अच्छी दुकान!",
    rating: 5
  },
  {
    name: "Lalbahadur Singh",
    village: "Naigarhi, Rewa",
    initial: "L",
    color: "from-amber-500 to-orange-600",
    text: "Wholesale rate mein khad mil jati hai. Duplicate saman ka yahan koi kaam nahi. Mangawan kshetra mein inpar sabse jyada bharosa hai.",
    textHi: "होलसेल रेट में खाद मिल जाती है। डुप्लीकेट सामान का यहाँ कोई काम नहीं। मनगवां क्षेत्र में इन पर सबसे ज्यादा भरोसा है।",
    rating: 5
  }
];

export default function Testimonials() {
  const { i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-bold uppercase tracking-wider mb-4">
            {isHindi ? "किसानों की राय" : "Farmer Reviews"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 mb-4">
            {isHindi ? "हमारे किसान क्या कहते हैं" : "What Our Farmers Say"}
          </h2>
          <p className="text-slate-500 text-lg">
            {isHindi ? "मंगावन और आसपास के हजारों किसानों का भरोसा" : "Trusted by thousands of farmers across Mangawan & Rewa"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative bg-slate-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 flex flex-col"
            >
              {/* Quote mark */}
              <div className="text-7xl text-primary-100 font-serif absolute top-4 right-6 leading-none select-none">"</div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary-500 text-secondary-500" />
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed flex-grow mb-8 relative z-10">
                "{isHindi ? t.textHi : t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-5 border-t border-slate-200">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-extrabold text-lg shadow-md`}>
                  {t.initial}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.village}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-xs bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-semibold">
                    {isHindi ? "✓ सत्यापित किसान" : "✓ Verified"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-emerald-700 rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white"
        >
          {[
            { num: "10,000+", label: isHindi ? "खुश किसान" : "Happy Farmers" },
            { num: "20+", label: isHindi ? "वर्षों का अनुभव" : "Years Experience" },
            { num: "500+", label: isHindi ? "उत्पाद उपलब्ध" : "Products Available" },
            { num: "4.9★", label: isHindi ? "औसत रेटिंग" : "Average Rating" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-3xl font-extrabold mb-1">{s.num}</div>
              <div className="text-primary-200 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

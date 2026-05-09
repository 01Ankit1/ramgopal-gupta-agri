import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const testimonials = [
  {
    name: "Rameshwar Patel",
    village: "Mangawan",
    text: "Pichle 10 saal se main Ramgopal Gupta ji ki dukan se hi khad aur beej le raha hoon. Fasal ki paadawar hamesha achi hoti hai aur rate bhi bilkul sahi milta hai.",
    textHi: "पिछले 10 साल से मैं रामगोपाल गुप्ता जी की दुकान से ही खाद और बीज ले रहा हूँ। फसल की पैदावार हमेशा अच्छी होती है और रेट भी बिल्कुल सही मिलता है।",
    rating: 5
  },
  {
    name: "Santosh Tiwari",
    village: "Garh Road",
    text: "Bhaiya ka niyam aur vyavhaar dono bahut badiya hai. Dawai kaun si dalni hai, iski sahi jankari dete hain. Fasal mein keeda lagne par inki batayi dawai ne pura asar kiya.",
    textHi: "भैया का नियम और व्यवहार दोनों बहुत बढ़िया है। दवाई कौन सी डालनी है, इसकी सही जानकारी देते हैं। फसल में कीड़ा लगने पर इनकी बताई दवाई ने पूरा असर किया।",
    rating: 5
  },
  {
    name: "Lalbahadur Singh",
    village: "Naigarhi",
    text: "Wholesale rate mein khad mil jati hai. Duplicate saman ka yahan koi kaam nahi. Mangawan kshetra mein inpar sabse jyada bharosa hai.",
    textHi: "होलसेल रेट में खाद मिल जाती है। डुप्लीकेट सामान का यहाँ कोई काम नहीं। मनगवां क्षेत्र में इन पर सबसे ज्यादा भरोसा है।",
    rating: 5
  }
];

export default function Testimonials() {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';

  return (
    <section className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-bold uppercase tracking-wider mb-2 text-sm">{t('testimonials.badge')}</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            {t('testimonials.title')}
          </h3>
          <p className="text-slate-600 text-lg">
            {t('testimonials.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-6 right-8 text-primary-100 w-12 h-12 rotate-180" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary-500 text-secondary-500" />
                ))}
              </div>
              
              <p className="text-slate-700 mb-6 italic leading-relaxed relative z-10 font-medium">
                "{isHindi ? testimonial.textHi : testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold text-xl font-heading">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.village}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

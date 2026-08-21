import { Lightbulb, Calendar, Sprout } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function DailyTips() {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-secondary-50 border-y border-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-secondary-100 p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          
          {/* Decorative element */}
          <div className="absolute -right-10 -top-10 text-secondary-100/50">
            <Sprout size={150} />
          </div>

          <div className="flex-shrink-0 w-20 h-20 bg-secondary-500 rounded-full flex items-center justify-center text-white relative z-10 shadow-lg">
            <Lightbulb size={40} />
          </div>
          
          <div className="flex-grow relative z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-secondary-600 font-semibold mb-2">
              <Calendar size={18} />
              <span>{t('dailytips.badge')}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-heading font-bold text-slate-900 mb-2">
              {t('dailytips.title')}
            </h3>
            <p className="text-slate-600 text-lg">
              {t('dailytips.text')}
            </p>
          </div>
          
          <div className="flex-shrink-0 relative z-10 w-full md:w-auto">
            <a href="#contact" className="block text-center w-full md:w-auto bg-slate-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-slate-800 transition-colors">
              {t('dailytips.cta')}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

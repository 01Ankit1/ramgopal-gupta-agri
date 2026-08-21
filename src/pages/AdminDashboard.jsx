import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { LayoutDashboard, Package, BookOpen, MessageSquare, Settings, Users } from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const { t } = useTranslation();

  const tabs = [
    { id: 'overview', name: t('admin.tab_overview'), icon: <LayoutDashboard size={20} /> },
    { id: 'products', name: t('admin.tab_products'), icon: <Package size={20} /> },
    { id: 'education', name: t('admin.tab_education'), icon: <BookOpen size={20} /> },
    { id: 'inquiries', name: t('admin.tab_inquiries'), icon: <MessageSquare size={20} /> },
    { id: 'customers', name: t('admin.tab_customers'), icon: <Users size={20} /> },
    { id: 'settings', name: t('admin.tab_settings'), icon: <Settings size={20} /> },
  ];

  const activeTabName = tabs.find(tab => tab.id === activeTab).name;

  return (
    <div className="pt-20 min-h-screen bg-slate-100 flex flex-col md:flex-row">
      <Helmet>
        <title>{t('admin.page_title')}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-slate-900 text-white flex-shrink-0 md:min-h-screen z-10 border-r border-slate-800">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-xl font-heading font-bold text-white">{t('admin.panel_title')}</h2>
          <p className="text-sm text-slate-400">{t('admin.panel_subtitle')}</p>
        </div>
        <nav className="p-4 space-y-2 flex overflow-x-auto md:block md:overflow-visible">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 md:w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === tab.id ? 'bg-primary-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
            >
              {tab.icon}
              <span className="font-medium whitespace-nowrap">{tab.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow p-4 md:p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8 bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
          <h1 className="text-2xl font-heading font-bold text-slate-800 capitalize">{activeTabName}</h1>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-bold">A</div>
          </div>
        </header>

        {activeTab === 'overview' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: t('admin.stat_products'), value: '124', color: 'bg-blue-50 text-blue-600' },
                { title: t('admin.stat_articles'), value: '12', color: 'bg-green-50 text-green-600' },
                { title: t('admin.stat_leads'), value: '845', color: 'bg-emerald-50 text-emerald-600' },
                { title: t('admin.stat_visits'), value: '12.4k', color: 'bg-purple-50 text-purple-600' }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col">
                  <span className="text-slate-500 font-medium mb-2">{stat.title}</span>
                  <span className={`text-3xl font-black font-heading ${stat.color.split(' ')[1]}`}>{stat.value}</span>
                  <div className={`mt-4 h-2 w-full rounded-full ${stat.color.split(' ')[0]}`}></div>
                </div>
              ))}
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 min-h-[400px] flex items-center justify-center">
              <p className="text-slate-500 flex flex-col items-center gap-4">
                <LayoutDashboard size={48} className="text-slate-300" />
                {t('admin.chart_placeholder')}
              </p>
            </div>
          </motion.div>
        )}

        {activeTab !== 'overview' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 min-h-[500px] flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                {tabs.find(t => t.id === activeTab).icon}
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-2">{t('admin.manage', { tab: activeTabName })}</h3>
              <p className="text-slate-500 max-w-sm mx-auto">
                {t('admin.mock_desc')}
              </p>
              <button className="mt-6 bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700">
                {t('admin.add_record')}
              </button>
            </div>
          </motion.div>
        )}
      </div>

    </div>
  );
}

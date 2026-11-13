import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactFooter from './components/ContactFooter';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import StickyMobileBar from './components/StickyMobileBar';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="font-sans antialiased text-slate-800 bg-slate-50 min-h-screen">
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Indexable routes are also listed in src/seo/publicRoutes.js for prerender. */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ContactFooter />
      <FloatingWhatsApp />
      <StickyMobileBar />
    </div>
  );
}

export default App;

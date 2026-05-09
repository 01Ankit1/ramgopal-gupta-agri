import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactFooter from './components/ContactFooter';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import StickyMobileBar from './components/StickyMobileBar';

import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Education from './pages/Education';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <div className="font-sans antialiased text-slate-800 bg-slate-50 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <ContactFooter />
      <FloatingWhatsApp />
      <StickyMobileBar />
    </div>
  );
}

export default App;

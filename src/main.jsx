import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App.jsx';
import './i18n';

// The prerendered document already has this URL's tags. Remove them before
// React publishes the tags for the live URL (hash redirects, /admin, 404s).
document.head.querySelectorAll('[data-prerender]').forEach((node) => node.remove());

// Old HashRouter links (/#/products) still open the same page.
if (window.location.hash.startsWith('#/')) {
  const next = window.location.hash.slice(1) || '/';
  window.history.replaceState(null, '', next);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);

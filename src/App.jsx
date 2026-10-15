import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import StickyMobileBar from './components/StickyMobileBar';

import Home from './pages/Home';
import Products from './pages/Products';
import Kids from './pages/Kids';
import Ladies from './pages/Ladies';
import Men from './pages/Men';
import Unisex from './pages/Unisex';
import Households from './pages/Households';
import Shoes from './pages/Shoes';
import HowToOrder from './pages/HowToOrder';
import Contact from './pages/Contact';

export default function App() {
  const getPageFromHash = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const validPages = [
      'home',
      'products',
      'kids',
      'ladies',
      'men',
      'unisex',
      'households',
      'shoes',
      'how-to-order',
      'contact'
    ];
    return validPages.includes(hash) ? hash : 'home';
  };

  const [activePage, setActivePage] = useState(getPageFromHash);

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      setActivePage(getPageFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    setActivePage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={navigateTo} />;
      case 'products':
        return <Products />;
      case 'kids':
        return <Kids />;
      case 'ladies':
        return <Ladies />;
      case 'men':
        return <Men />;
      case 'unisex':
        return <Unisex />;
      case 'households':
        return <Households />;
      case 'shoes':
        return <Shoes />;
      case 'how-to-order':
        return <HowToOrder setActivePage={navigateTo} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActivePage={navigateTo} />;
    }
  };

  return (
    <div className="site-wrapper">
      <Navbar
        activePage={activePage}
        setActivePage={navigateTo}
      />
      <main id="main-content" style={{ flex: 1, paddingBottom: '70px' }}>
        {renderPage()}
      </main>
      <Footer setActivePage={navigateTo} />
      <FloatingWhatsApp />
      <StickyMobileBar />
    </div>
  );
}

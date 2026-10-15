import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Package, Search, ShoppingBag } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'All Bales' },
    { id: 'kids', label: 'Kids & Baby' },
    { id: 'ladies', label: 'Ladies' },
    { id: 'men', label: 'Men' },
    { id: 'unisex', label: 'Unisex' },
    { id: 'households', label: 'Households' },
    { id: 'shoes', label: 'Shoes' },
    { id: 'how-to-order', label: 'How to Order' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="ecommerce-header">
      {/* Top Announcement Bar (Shopify / Jumia style) */}
      <div className="announcement-bar">
        <div className="container announcement-inner">
          <div className="announcement-left">
            <span className="live-bullet"></span>
            <span>🇰🇪 Morgan Mitumba Bales • Wholesale & Retail Direct Imports Nairobi</span>
            <span className="announcement-divider">•</span>
            <span className="announcement-dispatch">🚚 Daily Countrywide Bus & Courier Dispatch</span>
          </div>
          <div className="announcement-right">
            <a href={BUSINESS_INFO.callUrl} className="announcement-call-link">
              <Phone size={14} />
              <span>Call Hotline: {BUSINESS_INFO.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main E-Commerce Navbar */}
      <nav className="main-navbar">
        <div className="container navbar-inner">
          {/* Brand Logo */}
          <div
            className="brand-logo"
            onClick={() => handleNavClick('home')}
            style={{ cursor: 'pointer' }}
          >
            <div className="brand-icon-box">
              <ShoppingBag size={24} />
            </div>
            <div className="brand-text-col">
              <span className="brand-name">MORGAN</span>
              <span className="brand-sub">MITUMBA BALES</span>
            </div>
            <span className="brand-tag-wholesale">WHOLESALE</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="nav-links-desktop">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`nav-link ${activePage === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="nav-cta-actions">
            <a
              href={BUSINESS_INFO.callUrl}
              className="btn-header-call"
              title="Piga Simu kwa Morgan"
            >
              <Phone size={16} />
              <span className="btn-call-text">0707 311 381</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hamburger-btn"
              aria-label="Fungua orodha ya kurasa"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-nav-menu">
            <div className="mobile-nav-header">
              <span className="mobile-nav-title">Categories & Pages</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-close"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mobile-nav-list">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`mobile-nav-link ${activePage === item.id ? 'active' : ''}`}
                >
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            <div className="mobile-nav-actions">
              <a
                href={BUSINESS_INFO.whatsappBase}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-mobile-wa"
              >
                <MessageCircle size={18} />
                <span>ORDER ON WHATSAPP</span>
              </a>

              <a
                href={BUSINESS_INFO.callUrl}
                className="btn-mobile-call"
              >
                <Phone size={18} />
                <span>CALL: {BUSINESS_INFO.displayPhone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

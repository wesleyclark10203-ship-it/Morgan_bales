import React from 'react';
import { Phone, MessageCircle, ShoppingBag, MapPin, Truck, CheckCircle2, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, CATEGORIES } from '../data/products';

export default function Footer({ setActivePage }) {
  const handleCategoryClick = (catId) => {
    setActivePage(catId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="ecommerce-footer">
      {/* Pre-footer trust banner */}
      <div className="footer-trust-banner">
        <div className="container footer-trust-inner">
          <div className="footer-trust-col">
            <Truck size={20} className="footer-trust-icon" />
            <div>
              <strong>Countrywide Dispatch</strong>
              <span>Daily via Easy Coach, North Rift, Guardian & 2NK</span>
            </div>
          </div>
          <div className="footer-trust-col">
            <ShieldCheck size={20} className="footer-trust-icon" />
            <div>
              <strong>Original Sealed Bales</strong>
              <span>Grade 1 Camera & Cream from UK, USA, Europe & Canada</span>
            </div>
          </div>
          <div className="footer-trust-col">
            <MessageCircle size={20} className="footer-trust-icon" />
            <div>
              <strong>Direct WhatsApp Support</strong>
              <span>Live video and picture verification before dispatch</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container footer-main-content">
        <div className="footer-cols-grid">
          {/* Brand Info */}
          <div className="footer-brand-section">
            <div className="footer-brand-badge">
              <ShoppingBag size={22} />
              <span className="footer-brand-name">MORGAN MITUMBA BALES</span>
            </div>
            <p className="footer-tagline-text">{BUSINESS_INFO.tagline}</p>
            <p className="footer-bio-text">
              Direct wholesale and retail supplier of sealed quality mitumba bales in Kenya. We serve boutiques, online sellers, and market stall traders across all 47 counties.
            </p>
            <div className="footer-location-tag">
              <MapPin size={16} />
              <span>Nairobi CBD & Gikomba Hub • Nationwide Delivery</span>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="footer-links-section">
            <h4 className="footer-section-title">Bale Categories</h4>
            <ul className="footer-nav-list">
              {CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                <li key={cat.id}>
                  <button
                    type="button"
                    onClick={() => handleCategoryClick(cat.id)}
                    className="footer-link-button"
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Orders */}
          <div className="footer-contact-section">
            <h4 className="footer-section-title">Order Hotline & WhatsApp</h4>
            <p className="footer-order-caption">
              Call or message Morgan directly for current bale stock and same-day delivery quotes:
            </p>

            <a href={BUSINESS_INFO.callUrl} className="footer-phone-display">
              <Phone size={18} />
              <span>{BUSINESS_INFO.formattedPhone}</span>
            </a>

            <div className="footer-actions-row">
              <a
                href={BUSINESS_INFO.whatsappBase}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-footer-wa"
              >
                <MessageCircle size={18} />
                <span>WHATSAPP ORDER</span>
              </a>

              <a
                href={BUSINESS_INFO.callUrl}
                className="btn-footer-call"
              >
                <Phone size={16} />
                <span>CALL US</span>
              </a>
            </div>

            <div className="footer-payment-reassurance">
              <span>💳 Secure Payment via M-Pesa</span>
              <span className="bullet-sep">•</span>
              <span>⏰ Mon–Sat: 7:00 AM – 7:00 PM</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© {BUSINESS_INFO.year} {BUSINESS_INFO.name}. All Rights Reserved.</p>
          <p className="footer-credit">Kenya's Trusted Wholesale Mitumba Supplier</p>
        </div>
      </div>
    </footer>
  );
}

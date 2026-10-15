import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function StickyMobileBar() {
  return (
    <div className="sticky-mobile-ecom-bar" aria-label="Mobile quick actions">
      <a
        href={BUSINESS_INFO.callUrl}
        className="mobile-bar-btn mobile-call-btn"
        aria-label="Call Morgan Mitumba Bales"
      >
        <Phone size={22} className="mobile-btn-icon" />
        <div className="mobile-btn-text-wrap">
          <span className="mobile-btn-main">📞 CALL MORGAN</span>
          <span className="mobile-btn-sub">Piga Simu: {BUSINESS_INFO.displayPhone}</span>
        </div>
      </a>

      <a
        href={BUSINESS_INFO.whatsappBase}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-bar-btn mobile-wa-btn"
        aria-label="Order on WhatsApp"
      >
        <MessageCircle size={22} className="mobile-btn-icon" />
        <div className="mobile-btn-text-wrap">
          <span className="mobile-btn-main">💬 WHATSAPP</span>
          <span className="mobile-btn-sub">Agiza Hapa (Order Here)</span>
        </div>
      </a>
    </div>
  );
}

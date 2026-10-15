import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Truck, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function Contact() {
  return (
    <div>
      <div className="page-header-banner">
        <div className="container">
          <h1 className="page-header-title">Contact Morgan Mitumba Bales</h1>
          <p className="page-header-desc">
            We are always ready to assist you. Call or chat with us directly on WhatsApp for stock inquiries, prices, and fast deliveries.
          </p>
        </div>
      </div>

      <section className="section-wrapper bg-cream">
        <div className="container">
          {/* Morgan Profile Card with Real Photo */}
          <div className="contact-morgan-profile-card">
            <div className="contact-profile-img-wrap">
              <img
                src="/images/morgan-orders.jpeg"
                alt="Morgan at the Nairobi warehouse"
                className="contact-morgan-img"
              />
              <span className="contact-profile-badge">
                📍 Nairobi Warehouse Order Desk
              </span>
            </div>
            <div className="contact-profile-info">
              <span className="contact-badge-sub">DIRECT WHOLESALE CONSULTATION</span>
              <h2 className="contact-profile-name">Morgan — Wholesale Director</h2>
              <p className="contact-profile-bio">
                "Welcome to Morgan Mitumba Bales. We specialize in supplying authentic, unopened Grade 1 camera bales directly to retail shops, boutiques, and market stall owners across all 47 counties in Kenya. Call or WhatsApp me directly for today's new bale arrivals!"
              </p>
              <div className="contact-profile-quick-stats">
                <div className="stat-pill"><strong>100+</strong> <span>Bale Varieties</span></div>
                <div className="stat-pill"><strong>47 Counties</strong> <span>Fast Dispatch</span></div>
                <div className="stat-pill"><strong>Grade 1</strong> <span>Camera Quality</span></div>
              </div>
            </div>
          </div>

          {/* Main Direct Contact Cards */}
          <div className="contact-cards-grid">
            {/* Phone Card */}
            <div className="contact-card-box">
              <div className="contact-card-icon phone">
                <Phone size={32} />
              </div>
              <h2 className="contact-card-title">Phone Call</h2>
              <p style={{ color: 'var(--gray-600)', marginBottom: '8px' }}>
                Speak directly with Morgan:
              </p>
              <div className="contact-card-detail">{BUSINESS_INFO.displayPhone}</div>
              <a
                href={BUSINESS_INFO.callUrl}
                className="btn-hero-call"
                style={{ width: '100%', backgroundColor: 'var(--primary-800)', color: '#ffffff' }}
              >
                <Phone size={20} />
                <span>📞 CALL US NOW</span>
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="contact-card-box">
              <div className="contact-card-icon wa">
                <MessageCircle size={32} />
              </div>
              <h2 className="contact-card-title">WhatsApp Chat</h2>
              <p style={{ color: 'var(--gray-600)', marginBottom: '8px' }}>
                Instant replies & bale pictures:
              </p>
              <div className="contact-card-detail">{BUSINESS_INFO.displayPhone}</div>
              <a
                href={BUSINESS_INFO.whatsappBase}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-whatsapp"
                style={{ width: '100%' }}
              >
                <MessageCircle size={20} />
                <span>💬 WHATSAPP US</span>
              </a>
            </div>
          </div>

          {/* Business Information & Delivery Notice */}
          <div className="delivery-notice-box">
            <h3 className="delivery-notice-title">
              <Truck size={22} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} />
              Countrywide Delivery Across Kenya
            </h3>
            <p className="delivery-notice-text">
              We dispatch mitumba bales daily to all Kenyan counties, towns, and centers using reliable parcel & bus couriers (Easy Coach, G4S, 2NK, North Rift, Guardian, Mash East Africa, Eldoret Express, Tahmeed, etc.).
            </p>
          </div>

          {/* Working Hours */}
          <div style={{ maxWidth: '800px', margin: '24px auto 0', background: '#ffffff', borderRadius: '14px', padding: '24px', border: '1.5px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-800)', flexShrink: 0 }}>
              <Clock size={24} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--gray-900)' }}>Working & Dispatch Hours</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--gray-600)' }}>
                Monday to Saturday: 7:00 AM – 7:00 PM | Sunday: Inquiries and pre-orders accepted on WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

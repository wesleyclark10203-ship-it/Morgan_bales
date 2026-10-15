import React from 'react';
import { MessageCircle, Phone, Package, CheckCircle, CreditCard, Truck, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function HowToOrder({ setActivePage }) {
  return (
    <div>
      <div className="page-header-banner">
        <div className="container">
          <h1 className="page-header-title">How to Order Mitumba Bales</h1>
          <p className="page-header-desc">
            It's very easy! You don't need to fill out any complicated online forms. Just follow these 5 simple steps:
          </p>
        </div>
      </div>

      <section className="section-wrapper bg-white">
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Step 1 */}
              <div style={{ display: 'flex', gap: '20px', background: 'var(--gray-50)', padding: '24px', borderRadius: '16px', border: '1.5px solid var(--border-color)' }}>
                <div style={{ width: '58px', height: '58px', borderRadius: '50%', backgroundColor: '#0f172a', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', fontWeight: 900, flexShrink: 0, border: '3px solid #f59e0b' }}>
                  1
                </div>
                <div>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0f172a', marginBottom: '8px' }}>
                    Step 1: Choose Your Bale
                  </h2>
                  <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: '1.6' }}>
                    Browse our catalogue (Kids, Ladies, Men, Shoes, or Households). Check the pictures, approximate piece count, and wholesale prices.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div style={{ display: 'flex', gap: '20px', background: 'var(--gray-50)', padding: '24px', borderRadius: '16px', border: '1.5px solid var(--border-color)' }}>
                <div style={{ width: '58px', height: '58px', borderRadius: '50%', backgroundColor: '#0f172a', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', fontWeight: 900, flexShrink: 0, border: '3px solid #f59e0b' }}>
                  2
                </div>
                <div>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0f172a', marginBottom: '8px' }}>
                    Step 2: Call or WhatsApp Morgan Directly
                  </h2>
                  <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: '1.6' }}>
                    Tap the big green <strong>"ORDER ON WHATSAPP"</strong> button on any bale or call directly at <strong>{BUSINESS_INFO.displayPhone}</strong>. The WhatsApp message will automatically include the bale name for you!
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div style={{ display: 'flex', gap: '20px', background: 'var(--gray-50)', padding: '24px', borderRadius: '16px', border: '1.5px solid var(--border-color)' }}>
                <div style={{ width: '58px', height: '58px', borderRadius: '50%', backgroundColor: '#0f172a', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', fontWeight: 900, flexShrink: 0, border: '3px solid #f59e0b' }}>
                  3
                </div>
                <div>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0f172a', marginBottom: '8px' }}>
                    Step 3: Confirm Stock & Availability
                  </h2>
                  <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: '1.6' }}>
                    Morgan will immediately confirm that your bale is in the Nairobi warehouse and can share current bale photos or videos upon request.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div style={{ display: 'flex', gap: '20px', background: 'var(--gray-50)', padding: '24px', borderRadius: '16px', border: '1.5px solid var(--border-color)' }}>
                <div style={{ width: '58px', height: '58px', borderRadius: '50%', backgroundColor: '#0f172a', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', fontWeight: 900, flexShrink: 0, border: '3px solid #f59e0b' }}>
                  4
                </div>
                <div>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0f172a', marginBottom: '8px' }}>
                    Step 4: Make Secure M-Pesa Payment
                  </h2>
                  <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: '1.6' }}>
                    Official M-Pesa Till or payment instructions are provided directly to you by Morgan before loading and dispatching your parcel.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div style={{ display: 'flex', gap: '20px', background: 'var(--gray-50)', padding: '24px', borderRadius: '16px', border: '1.5px solid var(--border-color)' }}>
                <div style={{ width: '58px', height: '58px', borderRadius: '50%', backgroundColor: '#0f172a', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', fontWeight: 900, flexShrink: 0, border: '3px solid #f59e0b' }}>
                  5
                </div>
                <div>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0f172a', marginBottom: '8px' }}>
                    Step 5: Receive Your Bale
                  </h2>
                  <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: '1.6', marginBottom: '14px' }}>
                    If you are in Nairobi, you can collect in person from our shop or warehouse. For upcountry clients, your bale is dispatched the same day via your preferred bus/courier service (Easy Coach, Guardian, North Rift, 2NK, Mash East Africa, etc.) with a parcel waybill for tracking.
                  </p>
                  <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-light)' }}>
                    <img
                      src="/images/bales-dispatch.jpeg"
                      alt="Mitumba bales labeled and strapped for dispatch"
                      style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
                      loading="lazy"
                    />
                    <div style={{ backgroundColor: '#ffffff', padding: '10px 14px', fontSize: '0.9rem', color: '#475569', fontWeight: 700 }}>
                      📦 Genuine bales strapped, labeled with your name and town, ready for bus parcel dispatch daily.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div style={{ textAlign: 'center', marginTop: '44px' }}>
              <div className="hero-btn-group" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href={BUSINESS_INFO.callUrl}
                  className="btn-hero-call"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#0f172a', color: '#ffffff', padding: '16px 28px', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 800 }}
                >
                  <Phone size={22} />
                  <span>CALL MORGAN: {BUSINESS_INFO.displayPhone}</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappBase}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-hero"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#25D366', color: '#ffffff', padding: '16px 28px', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 800 }}
                >
                  <MessageCircle size={22} />
                  <span>ORDER ON WHATSAPP</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

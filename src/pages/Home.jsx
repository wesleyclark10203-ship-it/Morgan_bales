import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Truck, 
  Sparkles, 
  Package, 
  TrendingUp, 
  Clock, 
  CreditCard,
  Layers
} from 'lucide-react';
import { BUSINESS_INFO, CATEGORIES, PRODUCTS } from '../data/products';
import { searchMitumbaBales } from '../utils/search';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';

export default function Home({ setActivePage }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryTab, setSelectedCategoryTab] = useState('all');

  // Filtered products for search using comprehensive multi-word and synonym matching
  const filteredProducts = searchQuery.trim() ? searchMitumbaBales(PRODUCTS, searchQuery) : [];

  // Filtered popular bales by selected category tab
  const popularBales = PRODUCTS.filter(p => p.popular);
  const displayedPopularBales = selectedCategoryTab === 'all'
    ? popularBales
    : popularBales.filter(p => p.category === selectedCategoryTab);

  const mainCategories = CATEGORIES.filter(c => c.id !== 'all');

  return (
    <div className="home-page-container">
      {/* 1. Clean Modern E-Commerce Hero Section */}
      <section className="ecommerce-hero-section">
        <div className="container hero-layout-grid">
          {/* Left Column: Headline & Search */}
          <div className="hero-text-col">
            <h1 className="hero-main-title">
              Grade 1 Mitumba Bales at <span className="highlight-text">Wholesale Prices</span>
            </h1>

            <p className="hero-lead-text">
              Directly imported camera bales for boutique owners, retail shops, and market traders across Kenya. Sourced from UK, Europe, USA, and Canada. No complicated forms — just call or WhatsApp us directly!
            </p>

            {/* Quick Hero Search Input */}
            <div className="hero-search-box">
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                placeholder="🔍 Search any bale (e.g. Jeans, Shoes, Baby, Curtains, Hoodies...)"
              />
            </div>

            {/* Action Buttons - Large, Clear & Touch-friendly */}
            <div className="hero-cta-row">
              <a
                href={BUSINESS_INFO.callUrl}
                className="btn-hero-call"
              >
                <Phone size={20} />
                <span>Call Morgan: {BUSINESS_INFO.displayPhone}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappBase}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-hero"
              >
                <MessageCircle size={20} />
                <span>Order on WhatsApp</span>
              </a>

              <button
                type="button"
                className="btn-primary-shop"
                onClick={() => {
                  setActivePage('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span>Browse All Bales</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="hero-trust-bullets">
              <div className="trust-bullet-item">
                <CheckCircle2 size={16} className="bullet-check" />
                <span>Camera Grade 1 Quality</span>
              </div>
              <div className="trust-bullet-item">
                <CheckCircle2 size={16} className="bullet-check" />
                <span>Sealed Original Bales</span>
              </div>
              <div className="trust-bullet-item">
                <CheckCircle2 size={16} className="bullet-check" />
                <span>Daily Bus Dispatch</span>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Trader Spotlight Card */}
          <div className="hero-feature-col">
            <div className="featured-hero-card">
              <div className="featured-card-header">
                <div className="featured-card-tag">
                  <TrendingUp size={14} />
                  <span>TRADER FAVORITE BALE</span>
                </div>
                <span className="featured-status-pill">🔥 In Stock & Ready</span>
              </div>

              <div className="featured-card-preview-image">
                <img
                  src="/images/morgan-orders.jpeg"
                  alt="Morgan taking bale orders in Nairobi"
                  className="featured-hero-img"
                />
                <div className="featured-hero-img-badge">
                  <span>📍 Morgan taking trader orders at Nairobi Warehouse</span>
                </div>
              </div>

              <div className="featured-card-preview">
                <img
                  src="/images/warehouse-stack-tall.jpeg"
                  alt="Baby Light Bales stock"
                  className="featured-thumb-img"
                />
                <div className="featured-bale-info">
                  <h3 className="featured-bale-title">Baby Light Bales (0–6 Yrs)</h3>
                  <span className="featured-origin">Grade 1 Camera • UK Import</span>
                </div>
              </div>

              <div className="featured-specs-row">
                <div className="spec-item">
                  <span className="spec-label">Item Count:</span>
                  <strong className="spec-value">~600 pieces</strong>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Condition:</span>
                  <strong className="spec-value">Pure Light Wear</strong>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Wholesale Price:</span>
                  <strong className="spec-price">KSh 25,000 – 35,000</strong>
                </div>
              </div>

              <div className="featured-card-actions">
                <a
                  href={`${BUSINESS_INFO.whatsappBase}?text=Hello%20Morgan%2C%20I%20want%20to%20order%20the%20Baby%20Light%20Bales.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="featured-order-btn"
                >
                  <MessageCircle size={18} />
                  <span>Order This Bale via WhatsApp</span>
                </a>

                <a
                  href={BUSINESS_INFO.callUrl}
                  className="featured-call-btn"
                >
                  <Phone size={18} />
                  <span>Call to Inquire</span>
                </a>
              </div>

              <p className="featured-card-note">
                ⚡ Dispatched today to your town via North Rift, Easy Coach, Guardian, or Mash.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Search Results (if search query active) */}
      {searchQuery.trim() && (
        <section className="search-results-section" id="search-results">
          <div className="container">
            <div className="results-header">
              <h2 className="results-title">
                Search Results for "{searchQuery}" ({filteredProducts.length} bales found)
              </h2>
              <button
                type="button"
                className="btn-clear-search"
                onClick={() => setSearchQuery('')}
              >
                Clear Search
              </button>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="products-grid">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="empty-results-box">
                <p className="empty-msg">No bales found matching "{searchQuery}".</p>
                <p className="empty-sub">Need a specific bale? Message Morgan directly to check stock!</p>
                <a
                  href={`${BUSINESS_INFO.whatsappBase}?text=Hello%20Morgan%2C%20do%20you%20have%20stock%20for%3A%20${encodeURIComponent(searchQuery)}%3F`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ask-custom-wa"
                >
                  <MessageCircle size={18} />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 4. Shop by Category (Shopify Collections Style) */}
      <section className="collections-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-eyebrow">BALE CATEGORIES</span>
            <h2 className="section-main-title">Shop Bales by Category</h2>
            <p className="section-description">
              Select any category below to view bale pictures, estimated piece counts, and wholesale prices.
            </p>
          </div>

          <div className="category-collections-grid">
            {mainCategories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onSelectCategory={(catId) => {
                  setActivePage(catId);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Popular Bales with Category Filter Pills */}
      <section className="popular-products-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-eyebrow">FASTEST SELLING IN KENYA</span>
            <h2 className="section-main-title">🔥 Most Popular Mitumba Bales</h2>
            <p className="section-description">
              These are the highest requested bales by boutique owners and market traders right now. Tap Call or WhatsApp to order.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="filter-pills-row">
            {[
              { id: 'all', label: 'All Bales' },
              { id: 'kids', label: '👶 Kids & Baby' },
              { id: 'ladies', label: '👗 Ladies' },
              { id: 'men', label: '👔 Men' },
              { id: 'unisex', label: '🧥 Unisex' },
              { id: 'households', label: '🏠 Households' },
              { id: 'shoes', label: '👟 Shoes' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                className={`filter-pill-btn ${selectedCategoryTab === tab.id ? 'active' : ''}`}
                onClick={() => setSelectedCategoryTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="products-grid">
            {displayedPopularBales.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="view-all-cta-box">
            <button
              type="button"
              className="btn-view-all-bales"
              onClick={() => {
                setActivePage('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span>View Full Catalogue (All Bales)</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Real Warehouse Stock & Operations Gallery */}
      <section className="warehouse-gallery-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-eyebrow">AUTHENTIC IMPORTS & PACKING</span>
            <h2 className="section-main-title">📸 Real Warehouse Stock in Nairobi</h2>
            <p className="section-description">
              Every bale is 100% genuine, original-strapped, and imported directly from verified sorting houses in the UK, Europe, USA, and Canada.
            </p>
          </div>

          <div className="warehouse-gallery-grid">
            <div className="warehouse-gallery-card">
              <div className="gallery-img-wrap">
                <img src="/images/morgan-orders.jpeg" alt="Morgan taking bale orders" loading="lazy" />
                <span className="gallery-tag">Order Desk</span>
              </div>
              <div className="gallery-card-content">
                <h3 className="gallery-card-title">Direct Trader Support</h3>
                <p className="gallery-card-desc">Morgan personally assists you in choosing fast-moving bales for your specific town and retail shop.</p>
              </div>
            </div>

            <div className="warehouse-gallery-card">
              <div className="gallery-img-wrap">
                <img src="/images/warehouse-stock.jpeg" alt="Nairobi warehouse stocked with bales" loading="lazy" />
                <span className="gallery-tag">Warehouse Stock</span>
              </div>
              <div className="gallery-card-content">
                <h3 className="gallery-card-title">Hundreds of Bales In Stock</h3>
                <p className="gallery-card-desc">Full warehouse inventory across all categories — Kids, Ladies, Men, Household & Shoes.</p>
              </div>
            </div>

            <div className="warehouse-gallery-card">
              <div className="gallery-img-wrap">
                <img src="/images/ladies-skinny-jeans.jpeg" alt="Sealed ladies skinny jeans bales" loading="lazy" />
                <span className="gallery-tag">Camera Grade 1</span>
              </div>
              <div className="gallery-card-content">
                <h3 className="gallery-card-title">Sealed Original Strapping</h3>
                <p className="gallery-card-desc">Factory-sealed bales with original export tags and weight specifications intact.</p>
              </div>
            </div>

            <div className="warehouse-gallery-card">
              <div className="gallery-img-wrap">
                <img src="/images/bales-dispatch.jpeg" alt="Bales labeled for countrywide parcel dispatch" loading="lazy" />
                <span className="gallery-tag">Daily Dispatch</span>
              </div>
              <div className="gallery-card-content">
                <h3 className="gallery-card-title">Countrywide Bus Delivery</h3>
                <p className="gallery-card-desc">Parceled daily via Easy Coach, Guardian, North Rift, 2NK, and reliable courier services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Trader Wholesale FAQ & Reassurance */}
      <section className="faq-trust-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-eyebrow">WHOLESALE ADVICE</span>
            <h2 className="section-main-title">Frequently Asked Questions</h2>
          </div>

          <div className="faq-grid">
            <div className="faq-card">
              <h3 className="faq-question">What does "Grade 1 Camera" mean? <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--primary-700)', fontWeight: 600 }}>Nguo ya Camera ni nini?</span></h3>
              <p className="faq-answer">
                Camera refers to the top-grade selection from unopened bales. <em>(Ni nguo za daraja la kwanza zenye ubora wa juu zaidi bila dosari au kuchakaa, zinazotoka kwenye bale iliyofungwa asili).</em> They sell quickly with high profit margins in retail boutiques and stalls.
              </p>
            </div>

            <div className="faq-card">
              <h3 className="faq-question">How does delivery outside Nairobi work? <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--primary-700)', fontWeight: 600 }}>Mzigo unatumwaje mkoani?</span></h3>
              <p className="faq-answer">
                We deliver nationwide to any town in Kenya via trusted bus parcel services (Easy Coach, North Rift, Guardian, 2NK, Mash East Africa) and couriers (G4S). <em>(Mzigo wako unawekwa kwenye basi siku hiyo hiyo na utatumiwa risiti ya parcel na nambari ya simu ya ofisi/dereva).</em>
              </p>
            </div>

            <div className="faq-card">
              <h3 className="faq-question">Can I start with just one bale? <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--primary-700)', fontWeight: 600 }}>Je, naweza kuanza na bale moja tu?</span></h3>
              <p className="faq-answer">
                Yes! <em>(Ndio kabisa, unaweza kuagiza bale moja tu ya kuanzia).</em> Many of our regular traders started with a single fast-selling bale like Baby Light Bales or Ladies Tops and grew their capital steadily.
              </p>
            </div>

            <div className="faq-card">
              <h3 className="faq-question">How do I pay? <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--primary-700)', fontWeight: 600 }}>Malipo yanafanywaje?</span></h3>
              <p className="faq-answer">
                We accept M-Pesa payments. <em>(Malipo yote yanafanywa kupitia M-Pesa).</em> Official Till/Paybill details are confirmed with Morgan on WhatsApp or Call before your bale is dispatched.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. High-Converting Bottom Banner */}
      <section className="bottom-cta-banner">
        <div className="container">
          <div className="cta-banner-content">
            <span className="cta-mini-pill">READY TO STOCK YOUR SHOP?</span>
            <h2 className="cta-title">Order Your Sealed Mitumba Bale Today</h2>
            <p className="cta-sub">
              Contact Morgan Mitumba Bales directly for instant quotes and daily stock updates.
            </p>

            <div className="cta-buttons-row">
              <a
                href={BUSINESS_INFO.whatsappBase}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-whatsapp"
              >
                <MessageCircle size={20} />
                <span>WHATSAPP: {BUSINESS_INFO.displayPhone}</span>
              </a>

              <a
                href={BUSINESS_INFO.callUrl}
                className="btn-cta-call"
              >
                <Phone size={18} />
                <span>CALL: {BUSINESS_INFO.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

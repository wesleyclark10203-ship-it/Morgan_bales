import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { PRODUCTS, CATEGORIES, BUSINESS_INFO } from '../data/products';
import { searchMitumbaBales } from '../utils/search';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';

export default function Products({ initialCategory = 'all' }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  // 1. Products in currently selected category tab
  const categoryProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  // 2. Search results within current category
  const searchedCategoryProducts = searchQuery.trim()
    ? searchMitumbaBales(categoryProducts, searchQuery)
    : categoryProducts;

  // 3. Global search results across all categories
  const allSearchResults = searchQuery.trim() ? searchMitumbaBales(PRODUCTS, searchQuery) : [];

  // Fallback: If user searched while on a specific category tab (e.g. Kids) but the bale
  // exists in another category (e.g. Jeans in Ladies), show the global results so they aren't stuck with 0 results!
  const hasCrossCategoryFallback = searchQuery.trim() && searchedCategoryProducts.length === 0 && allSearchResults.length > 0;
  const filteredProducts = hasCrossCategoryFallback ? allSearchResults : searchedCategoryProducts;

  return (
    <div>
      {/* Banner */}
      <div className="page-header-banner">
        <div className="container">
          <h1 className="page-header-title">All Mitumba Bales Catalogue</h1>
          <p className="page-header-desc">
            Browse our complete wholesale bale inventory with clear KSh prices. If you see any bale you like, simply tap <strong>"ORDER ON WHATSAPP"</strong> or <strong>"CALL MORGAN NOW"</strong> directly!
          </p>
        </div>
      </div>

      {/* Filter and Search Section */}
      <section className="search-filter-section">
        <div className="container">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            placeholder="🔍 Search any bale (e.g. Jeans, Shoes, Baby, Curtains, Hoodies...)"
          />

          {/* Large Filter Buttons */}
          <div className="filter-tabs-scroll" role="tablist" aria-label="Bale Categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat.id}
                className={`filter-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span>{cat.icon}</span>
                <span>{cat.shortTitle || cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product List Content */}
      <section className="section-wrapper bg-cream">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--gray-800)' }}>
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'bale' : 'bales'}
              {selectedCategory !== 'all' && ` in ${selectedCategory.toUpperCase()}`}
            </h2>

            {(searchQuery || selectedCategory !== 'all') && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: 'var(--primary-700)',
                  textDecoration: 'underline'
                }}
              >
                Reset Filters
              </button>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">📦</div>
              <h3 className="empty-state-title">No bales found matching your search</h3>
              <p className="empty-state-desc">
                We might have this bale in our warehouse. Inquire directly with Morgan via WhatsApp or Call.
              </p>
              <a
                href={BUSINESS_INFO.whatsappBase}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ask-wa"
                style={{ maxWidth: '280px', margin: '0 auto' }}
              >
                <MessageCircle size={20} />
                <span>Ask Availability on WhatsApp</span>
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

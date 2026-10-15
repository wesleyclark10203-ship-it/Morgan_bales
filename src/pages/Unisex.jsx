import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { searchMitumbaBales } from '../utils/search';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';

export default function Unisex() {
  const [searchQuery, setSearchQuery] = useState('');

  const unisexProducts = PRODUCTS.filter((p) => p.category === 'unisex');

  const filteredProducts = searchQuery.trim()
    ? searchMitumbaBales(unisexProducts, searchQuery)
    : unisexProducts;

  return (
    <div>
      <div className="page-header-banner">
        <div className="container">
          <h1 className="page-header-title">🧥 Unisex Mitumba Bales</h1>
          <p className="page-header-desc">
            Clothes for everyone: Heavy Hoodies, Denim Jackets, Sweatpants, School Bags & Marvins.
          </p>
        </div>
      </div>

      <section className="search-filter-section">
        <div className="container">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            placeholder="Search unisex bales (e.g. Hoods, Denim Jackets, Sweatpants, Bags...)"
          />
        </div>
      </section>

      <section className="section-wrapper bg-cream">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>
              Showing {filteredProducts.length} Unisex Bales
            </h2>
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} style={{ color: 'var(--primary-700)', fontWeight: 700 }}>
                Clear Search
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
              <div className="empty-state-icon">🧥</div>
              <h3 className="empty-state-title">No unisex bales found for "{searchQuery}"</h3>
              <p className="empty-state-desc">Try another search or contact us directly on WhatsApp.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

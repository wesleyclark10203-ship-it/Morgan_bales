import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { searchMitumbaBales } from '../utils/search';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';

export default function Shoes() {
  const [searchQuery, setSearchQuery] = useState('');

  const shoeProducts = PRODUCTS.filter((p) => p.category === 'shoes');

  const filteredProducts = searchQuery.trim()
    ? searchMitumbaBales(shoeProducts, searchQuery)
    : shoeProducts;

  return (
    <div>
      <div className="page-header-banner">
        <div className="container">
          <h1 className="page-header-title">👟 Mitumba Shoes Bales</h1>
          <p className="page-header-desc">
            Grade A mitumba footwear: Adult Sports Shoes, Men Mix Shoes & Kids Mitumba Shoes.
          </p>
        </div>
      </div>

      <section className="search-filter-section">
        <div className="container">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            placeholder="Search shoes (e.g. Sports, Men, Kids...)"
          />
        </div>
      </section>

      <section className="section-wrapper bg-cream">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>
              Showing {filteredProducts.length} Shoe Bales
            </h2>
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} style={{ color: 'var(--primary-700)', fontWeight: 700 }}>
                Clear Search
              </button>
            )}
          </div>

          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

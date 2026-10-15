import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { searchMitumbaBales } from '../utils/search';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';

export default function Kids() {
  const [searchQuery, setSearchQuery] = useState('');

  const babyBales = PRODUCTS.filter(
    (p) => p.category === 'kids' && p.subcategory.includes('Baby')
  );

  const childrenBales = PRODUCTS.filter(
    (p) => p.category === 'kids' && p.subcategory.includes('Children')
  );

  const filterList = (list) => {
    if (!searchQuery.trim()) return list;
    return searchMitumbaBales(list, searchQuery);
  };

  const filteredBaby = filterList(babyBales);
  const filteredChildren = filterList(childrenBales);

  return (
    <div>
      {/* Page Header */}
      <div className="page-header-banner">
        <div className="container">
          <h1 className="page-header-title">👶 Kids Mitumba Bales</h1>
          <p className="page-header-desc">
            Fast-selling baby clothes (0–6 years) and children wear (0–12 years). Fresh Grade A bales.
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <section className="search-filter-section">
        <div className="container">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            placeholder="Search kids or baby bales (e.g. Rompers, Jackets, Light Bales, Dresses...)"
          />
        </div>
      </section>

      {/* Content */}
      <section className="section-wrapper bg-cream">
        <div className="container">
          {/* SECTION 1: BABY 0–6 YEARS */}
          <div className="subcategory-heading-banner">
            <h2 className="subcategory-title">
              <span>👶</span>
              <span>BABY — AGE 0–6 YEARS</span>
            </h2>
            <span className="subcategory-badge">{filteredBaby.length} Bales</span>
          </div>

          {filteredBaby.length > 0 ? (
            <div className="products-grid">
              {filteredBaby.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p style={{ textAlign: 'center', padding: '20px', color: 'var(--gray-600)' }}>
              No baby bales match "{searchQuery}"
            </p>
          )}

          {/* SECTION 2: CHILDREN 0–12 YEARS */}
          <div className="subcategory-heading-banner">
            <h2 className="subcategory-title">
              <span>👦</span>
              <span>CHILDREN — AGE 0–12 YEARS</span>
            </h2>
            <span className="subcategory-badge">{filteredChildren.length} Bales</span>
          </div>

          {filteredChildren.length > 0 ? (
            <div className="products-grid">
              {filteredChildren.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p style={{ textAlign: 'center', padding: '20px', color: 'var(--gray-600)' }}>
              No children bales match "{searchQuery}"
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

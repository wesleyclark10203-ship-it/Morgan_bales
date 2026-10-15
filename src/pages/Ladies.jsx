import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { searchMitumbaBales } from '../utils/search';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';

export default function Ladies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('all');

  const groups = [
    { id: 'all', label: 'All Ladies Bales' },
    { id: 'Jeans & Trousers', label: '👖 Jeans & Trousers' },
    { id: 'Skirts', label: '👗 Skirts' },
    { id: 'Dresses', label: '💃 Dresses' },
    { id: 'Tops & Blouses', label: '👚 Tops & Blouses' },
    { id: 'Outerwear', label: '🧥 Outerwear' },
    { id: 'Undergarments & Accessories', label: '👜 Undies & Handbags' }
  ];

  const ladiesProducts = PRODUCTS.filter((p) => p.category === 'ladies');

  const groupProducts = selectedGroup === 'all'
    ? ladiesProducts
    : ladiesProducts.filter((p) => p.subcategory === selectedGroup);

  const filteredProducts = searchQuery.trim()
    ? searchMitumbaBales(groupProducts, searchQuery)
    : groupProducts;

  // Group items by subcategory if viewing all
  const subcategoryList = [
    { title: 'JEANS & TROUSERS', subcategory: 'Jeans & Trousers', icon: '👖' },
    { title: 'LADIES SKIRTS', subcategory: 'Skirts', icon: '👗' },
    { title: 'LADIES DRESSES', subcategory: 'Dresses', icon: '💃' },
    { title: 'LADIES TOPS & BLOUSES', subcategory: 'Tops & Blouses', icon: '👚' },
    { title: 'LADIES OUTERWEAR', subcategory: 'Outerwear', icon: '🧥' },
    { title: 'LADIES UNDERGARMENTS & ACCESSORIES', subcategory: 'Undergarments & Accessories', icon: '👜' }
  ];

  return (
    <div>
      {/* Header */}
      <div className="page-header-banner">
        <div className="container">
          <h1 className="page-header-title">👗 Ladies Mitumba Bales</h1>
          <p className="page-header-desc">
            Organized in easy sections: Jeans, Skirts, Dresses, Blouses, Jackets, Bras & Handbags.
          </p>
        </div>
      </div>

      {/* Search & Subgroup Tabs */}
      <section className="search-filter-section">
        <div className="container">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            placeholder="Search ladies bales (e.g. Skinny Jeans, Handbags, Official Dress, Tops...)"
          />

          <div className="filter-tabs-scroll">
            {groups.map((group) => (
              <button
                key={group.id}
                type="button"
                className={`filter-tab-btn ${selectedGroup === group.id ? 'active' : ''}`}
                onClick={() => setSelectedGroup(group.id)}
              >
                {group.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Content */}
      <section className="section-wrapper bg-cream">
        <div className="container">
          {selectedGroup === 'all' && !searchQuery.trim() ? (
            // Render structured grouped view
            subcategoryList.map((group) => {
              const items = ladiesProducts.filter((p) => p.subcategory === group.subcategory);
              return (
                <div key={group.subcategory} style={{ marginBottom: '40px' }}>
                  <div className="subcategory-heading-banner">
                    <h2 className="subcategory-title">
                      <span>{group.icon}</span>
                      <span>{group.title}</span>
                    </h2>
                    <span className="subcategory-badge">{items.length} Bales</span>
                  </div>

                  <div className="products-grid">
                    {items.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            // Render filtered grid view
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                  Showing {filteredProducts.length} Ladies Bales
                </h2>
                <button
                  onClick={() => {
                    setSelectedGroup('all');
                    setSearchQuery('');
                  }}
                  style={{ color: 'var(--primary-700)', fontWeight: 700 }}
                >
                  Show All Groups
                </button>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="products-grid">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <div className="empty-state-icon">👗</div>
                  <h3 className="empty-state-title">No matching ladies bales found</h3>
                  <p className="empty-state-desc">Try clearing your search or filter.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

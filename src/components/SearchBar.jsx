import React, { useState, useRef, useEffect } from 'react';
import { Search, X, MessageCircle, ArrowRight } from 'lucide-react';
import { PRODUCTS, createWhatsAppMessage } from '../data/products';
import { searchMitumbaBales } from '../utils/search';

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  placeholder = "🔍 Search any bale / Tafuta mzigo (e.g. Jeans, Shoes, Mashuka, Baby...)",
  showDropdown = true
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const trimmed = (searchQuery || '').trim();
  const results = trimmed ? searchMitumbaBales(PRODUCTS, trimmed) : [];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleClear = () => {
    setSearchQuery('');
    setIsOpen(false);
  };

  const scrollToResults = () => {
    setIsOpen(false);
    const resultsElem = document.getElementById('search-results');
    if (resultsElem) {
      resultsElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="search-input-wrap" ref={containerRef}>
      <Search className="search-input-icon" size={22} />
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => {
          if (trimmed) setIsOpen(true);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            scrollToResults();
          }
        }}
        aria-label="Search mitumba bales"
      />

      {searchQuery && (
        <button
          type="button"
          className="search-clear-btn"
          onClick={handleClear}
          aria-label="Clear search text"
        >
          <X size={20} />
        </button>
      )}

      {/* Instant Live Dropdown Preview */}
      {showDropdown && isOpen && trimmed.length > 0 && (
        <div className="search-live-dropdown">
          <div className="search-dropdown-header">
            <span>
              {results.length > 0
                ? `Found ${results.length} matching ${results.length === 1 ? 'bale' : 'bales'}`
                : 'No exact bale found'}
            </span>
            {results.length > 0 && (
              <button type="button" className="search-dropdown-viewall" onClick={scrollToResults}>
                View All Results ↓
              </button>
            )}
          </div>

          {results.length > 0 ? (
            <div className="search-dropdown-list">
              {results.slice(0, 5).map((product) => {
                const waUrl = createWhatsAppMessage(product);
                return (
                  <div key={product.id} className="search-dropdown-item">
                    <div className="dropdown-item-info">
                      <div className="dropdown-item-title-row">
                        <span className="dropdown-item-name">{product.name}</span>
                      </div>
                      <div className="dropdown-item-meta">
                        <span className="dropdown-item-price">{product.price}</span>
                        {product.pieces && (
                          <span className="dropdown-item-pieces">• {product.pieces}</span>
                        )}
                      </div>
                    </div>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="search-dropdown-wa-btn"
                      title={`Order ${product.name} on WhatsApp`}
                      onClick={() => setIsOpen(false)}
                    >
                      <MessageCircle size={15} />
                      <span>Order</span>
                    </a>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="search-dropdown-empty">
              <p className="search-empty-text">
                No direct match for "<strong>{searchQuery}</strong>". We have more bales arriving in the Nairobi warehouse!
              </p>
              <a
                href={`https://wa.me/254707311381?text=Hello%20Morgan%2C%20do%20you%20have%20stock%20for%3A%20${encodeURIComponent(searchQuery)}%3F`}
                target="_blank"
                rel="noopener noreferrer"
                className="search-dropdown-empty-wa"
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle size={16} />
                <span>Ask Morgan on WhatsApp</span>
              </a>
            </div>
          )}

          {results.length > 5 && (
            <button type="button" className="search-dropdown-footer-btn" onClick={scrollToResults}>
              <span>View all {results.length} matching bales</span>
              <ArrowRight size={15} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

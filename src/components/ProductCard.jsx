import React from 'react';
import { MessageCircle, Phone, Layers, Flame } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppMessage } from '../data/products';

export default function ProductCard({ product }) {
  const isAvailable = product.available !== false;
  const whatsappUrl = createWhatsAppMessage(product);

  const getCategoryDetails = (category) => {
    switch (category) {
      case 'kids':
        return { emoji: '👶', label: 'Kids & Baby', color: '#e0f2fe', text: '#0369a1' };
      case 'ladies':
        return { emoji: '👗', label: 'Ladies', color: '#fce7f3', text: '#be185d' };
      case 'men':
        return { emoji: '👔', label: 'Men', color: '#f1f5f9', text: '#334155' };
      case 'unisex':
        return { emoji: '🧥', label: 'Unisex', color: '#ede9fe', text: '#6d28d9' };
      case 'households':
        return { emoji: '🏠', label: 'Households', color: '#dcfce7', text: '#15803d' };
      case 'shoes':
        return { emoji: '👟', label: 'Shoes', color: '#fef3c7', text: '#b45309' };
      default:
        return { emoji: '📦', label: 'Bale Stock', color: '#f1f5f9', text: '#334155' };
    }
  };

  const catDetails = getCategoryDetails(product.category);

  return (
    <article className="product-card" id={`product-${product.id}`}>
      {/* Visual Image / Category Artwork Banner */}
      <div className="product-image-container" style={{ backgroundColor: catDetails.color }}>
        {/* Badges Overlay */}
        <div className="product-card-badge-wrap">
          {product.popular && (
            <span className="popular-badge">
              <Flame size={13} />
              <span>🔥 TOP SELLER</span>
            </span>
          )}

          {isAvailable ? (
            <span className="product-status-badge status-available">
              <span className="status-dot"></span>
              IN STOCK (Iko Tayari)
            </span>
          ) : (
            <span className="product-status-badge status-soldout">
              OUT OF STOCK (Imeisha)
            </span>
          )}
        </div>

        {/* Media representation */}
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="product-real-image"
            loading="lazy"
          />
        ) : (
          <div className="product-media-showcase">
            <span className="product-emoji-hero" role="img" aria-label={product.name}>
              {catDetails.emoji}
            </span>
            <span className="product-origin-pill">Camera Grade A (Nguo za Kwanza) • Sealed</span>
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="product-card-body">
        {/* Category & Subcategory Tag */}
        <div className="product-meta-row">
          <span className="product-category-tag" style={{ color: catDetails.text }}>
            {product.subcategory || catDetails.label}
          </span>
        </div>

        {/* Product Title */}
        <h3 className="product-title" title={product.name}>
          {product.name}
        </h3>

        {/* Short Description */}
        <p className="product-desc">
          {product.description || 'Premium Grade A sealed camera mitumba bale, ready for dispatch.'}
        </p>

        {/* Pieces Count Spec */}
        {product.pieces && (
          <div className="product-pieces-spec">
            <Layers size={15} className="spec-icon" />
            <span><strong>Count (Vipande):</strong> {product.pieces}</span>
          </div>
        )}

        {/* Big Bold Price Box */}
        <div className="product-price-section">
          <span className="price-caption">Wholesale Rate (Bei ya Jumla):</span>
          <div className="product-price-val">
            {product.price || 'Call for Price'}
          </div>
        </div>

        {/* 2 Big Clear Direct Action Buttons for Easy Ordering */}
        <div className="product-actions-col">
          {/* Big Green WhatsApp Order Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-order-whatsapp btn-easy-touch"
            aria-label={`Order ${product.name} on WhatsApp`}
          >
            <MessageCircle size={20} />
            <span>ORDER ON WHATSAPP</span>
          </a>

          {/* Big Direct Call Button */}
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="btn-call-direct btn-easy-touch"
            aria-label={`Call to inquire about ${product.name}`}
          >
            <Phone size={18} />
            <span>CALL MORGAN NOW</span>
          </a>
        </div>
      </div>
    </article>
  );
}

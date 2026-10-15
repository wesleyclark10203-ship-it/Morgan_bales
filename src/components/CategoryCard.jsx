import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CategoryCard({ category, onSelectCategory }) {
  const getCategoryTheme = (id) => {
    switch (id) {
      case 'kids':
        return { bg: '#f0f9ff', border: '#bae6fd', iconBg: '#e0f2fe' };
      case 'ladies':
        return { bg: '#fdf2f8', border: '#fbcfe8', iconBg: '#fce7f3' };
      case 'men':
        return { bg: '#f8fafc', border: '#e2e8f0', iconBg: '#f1f5f9' };
      case 'unisex':
        return { bg: '#faf5ff', border: '#e9d5ff', iconBg: '#f3e8ff' };
      case 'households':
        return { bg: '#f0fdf4', border: '#bbf7d0', iconBg: '#dcfce7' };
      case 'shoes':
        return { bg: '#fffbeb', border: '#fde68a', iconBg: '#fef3c7' };
      default:
        return { bg: '#f8fafc', border: '#e2e8f0', iconBg: '#f1f5f9' };
    }
  };

  const theme = getCategoryTheme(category.id);

  return (
    <div
      className="category-card"
      onClick={() => onSelectCategory(category.id)}
      style={{
        backgroundColor: '#ffffff',
        borderColor: theme.border
      }}
    >
      {category.image && (
        <div className="category-card-media-banner">
          <img
            src={category.image}
            alt={`${category.name} Mitumba Bales`}
            className="category-card-img"
            loading="lazy"
          />
          <div className="category-media-tag">
            <span>{category.icon}</span>
            <span>{category.shortTitle}</span>
          </div>
        </div>
      )}

      <div className="category-card-header" style={{ marginTop: category.image ? '12px' : '0' }}>
        <div className="category-icon-bubble" style={{ backgroundColor: theme.iconBg }}>
          <span>{category.icon}</span>
        </div>
        <span className="category-bale-tag">Grade 1 Bales</span>
      </div>

      <div className="category-card-body">
        <h3 className="category-card-title">{category.name}</h3>
        <p className="category-card-text">{category.subtitle || category.description}</p>
      </div>

      <div className="category-card-footer">
        <span className="category-action-link category-action-easy">
          <span>View Bales & Prices (Bonyeza Kuona Bei)</span>
          <ArrowRight size={18} />
        </span>
      </div>
    </div>
  );
}

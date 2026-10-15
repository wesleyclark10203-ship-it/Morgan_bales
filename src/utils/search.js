// Comprehensive Search Utility for Morgan Mitumba Bales
// Supports:
// 1. Multi-word queries (e.g. "kids bale", "baby bales", "ladies jeans")
// 2. Mitumba stopwords handling (so words like "bale", "bales", "grade" don't cause 0 results)
// 3. Swahili translation synonyms (mashuka, viatu, mapazia, mablanketi, nguo, watoto, etc.)
// 4. Singular & Plural variations (shoe/shoes, dress/dresses, bedsheet/bedsheets)
// 5. Intelligent relevance ranking

const SWAHILI_SYNONYMS = {
  // Households
  'mashuka': ['bedsheet', 'bedsheets', 'sheet', 'sheets', 'bedcover', 'bedcovers', 'curtain', 'curtains'],
  'shuka': ['bedsheet', 'bedsheets', 'sheet'],
  'mapazia': ['curtain', 'curtains'],
  'pazia': ['curtain', 'curtains'],
  'mablanketi': ['blanket', 'blankets', 'duvet', 'duvets'],
  'blanketi': ['blanket', 'blankets'],
  // Shoes
  'viatu': ['shoe', 'shoes', 'sneakers', 'sports'],
  'kiatu': ['shoe', 'shoes'],
  'sneakers': ['shoe', 'shoes', 'sports'],
  'sneaker': ['shoe', 'shoes', 'sports'],
  // Clothes & Categories
  'nguo': ['clothes', 'clothing', 'wear', 'dress', 'tops'],
  'watoto': ['kid', 'kids', 'baby', 'children'],
  'mtoto': ['kid', 'kids', 'baby'],
  'mchanga': ['baby', 'newborn'],
  'wachanga': ['baby', 'newborn'],
  'akina': ['ladies', 'women'],
  'mama': ['ladies', 'women', 'dress'],
  'wanawake': ['ladies', 'women'],
  'wasichana': ['ladies', 'girls'],
  'wanaume': ['men', 'gentlemen', 'trousers', 'shirts'],
  'mwanaume': ['men'],
  'wavulana': ['boys', 'men'],
  // Types of items
  'suruali': ['trouser', 'trousers', 'jeans', 'pants'],
  'mashati': ['shirt', 'shirts', 't-shirt', 'tshirts', 'tops'],
  'shati': ['shirt', 'shirts'],
  'magauni': ['dress', 'dresses'],
  'gauni': ['dress', 'dresses'],
  'sketi': ['skirt', 'skirts'],
  'sweta': ['sweater', 'sweaters', 'hoodie', 'hoodies', 'jacket', 'jackets'],
  'jaketi': ['jacket', 'jackets'],
  'chupi': ['boxer', 'boxers', 'innerwear'],
  'soksi': ['socks']
};

const MITUMBA_STOPWORDS = new Set([
  'bale',
  'bales',
  'grade',
  'camera',
  'mitumba',
  'original',
  'quality',
  'wholesale',
  'first',
  'second',
  'ya',
  'za',
  'kwa',
  'na',
  'in',
  'of',
  'the',
  'for',
  'and',
  'mzigo',
  'mizigo'
]);

export function searchMitumbaBales(products, query) {
  if (!query || !query.trim() || !Array.isArray(products)) {
    return [];
  }

  const rawTokens = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (rawTokens.length === 0) return [];

  // Filter out stopwords if the user provided other content words
  let contentTokens = rawTokens.filter(t => !MITUMBA_STOPWORDS.has(t));
  if (contentTokens.length === 0) {
    // If the user ONLY typed "bale" or "bales" or "camera"
    contentTokens = rawTokens;
  }

  // Expand each token into variants: stem, plural, and synonyms
  const tokenGroups = contentTokens.map(token => {
    const variants = new Set([token]);

    // Handle plurals and singulars
    if (token.endsWith('s') && token.length > 3) variants.add(token.slice(0, -1));
    if (token.endsWith('es') && token.length > 4) variants.add(token.slice(0, -2));
    if (token.endsWith('ies') && token.length > 4) variants.add(token.slice(0, -3) + 'y');
    variants.add(token + 's');
    variants.add(token + 'es');

    // Add Swahili synonyms if present
    if (SWAHILI_SYNONYMS[token]) {
      SWAHILI_SYNONYMS[token].forEach(syn => variants.add(syn));
    }

    return Array.from(variants);
  });

  const scoredResults = [];

  for (const product of products) {
    const nameStr = (product.name || '').toLowerCase();
    const subcatStr = (product.subcategory || '').toLowerCase();
    const catStr = (product.category || '').toLowerCase();
    const descStr = (product.description || '').toLowerCase();
    const priceStr = (product.price || '').toLowerCase();
    const piecesStr = (product.pieces || '').toLowerCase();

    const fullSearchable = `${nameStr} ${subcatStr} ${catStr} ${descStr} ${priceStr} ${piecesStr}`;

    let matchCount = 0;
    let score = 0;

    for (const group of tokenGroups) {
      let groupMatched = false;
      for (const variant of group) {
        if (fullSearchable.includes(variant)) {
          groupMatched = true;
          // Priority scoring
          if (nameStr.includes(variant)) score += 15;
          if (subcatStr.includes(variant)) score += 8;
          if (catStr.includes(variant)) score += 6;
          if (descStr.includes(variant)) score += 4;
          break;
        }
      }
      if (groupMatched) {
        matchCount++;
      }
    }

    // A product qualifies if at least one token group matches
    if (matchCount > 0) {
      if (product.popular) score += 2;
      scoredResults.push({
        product,
        matchCount,
        score
      });
    }
  }

  // Sort: First by number of matched token groups (multi-word match), then by relevance score
  scoredResults.sort((a, b) => {
    if (b.matchCount !== a.matchCount) {
      return b.matchCount - a.matchCount;
    }
    return b.score - a.score;
  });

  return scoredResults.map(r => r.product);
}

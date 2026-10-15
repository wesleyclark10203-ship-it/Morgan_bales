// Morgan Mitumba Bales - Centralized Product Catalog & Business Configuration
// All products, categories, and business info are managed here for easy updates.

export const BUSINESS_INFO = {
  name: "Morgan Mitumba Bales",
  shortName: "Morgan Mitumba",
  tagline: "Quality Mitumba Bales at Affordable Prices",
  subTagline: "We sell quality mitumba bales for Kids, Ladies, Men, Unisex, Households and Shoes.",
  phone: "0707311381",
  displayPhone: "0707311381",
  countryCode: "254",
  formattedPhone: "+254 707 311 381",
  whatsappBase: "https://wa.me/254707311381",
  callUrl: "tel:+254707311381",
  email: "info@morganmitumbabales.co.ke",
  locationNotice: "Nairobi, Kenya — Fast Countrywide Delivery via Courier & Bus Services (G4S, Easy Coach, 2NK, North Rift, Mash, etc.)",
  year: 2026
};

export const CATEGORIES = [
  {
    id: "all",
    name: "ALL BALES",
    shortTitle: "All Bales",
    icon: "📦",
    tagline: "Complete Mitumba Bales Catalogue"
  },
  {
    id: "kids",
    name: "KIDS & BABY BALES",
    shortTitle: "Kids & Baby",
    icon: "👶",
    subtitle: "Baby wear & children clothes (Nguo za Watoto na Wachanga 0–12 Yrs)",
    description: "Quality baby clothes (0–6 years) & children outfits (0–12 years) in high retail demand.",
    image: "/images/children-dress.jpeg",
    buttonText: "View Kids Bales"
  },
  {
    id: "ladies",
    name: "LADIES BALES",
    shortTitle: "Ladies",
    icon: "👗",
    subtitle: "Dresses, skinny jeans & tops (Magauni, Jeans & Tops za Akina Mama)",
    description: "Fast-selling women's jeans, dresses, camera tops, skirts, outerwear & innerwear.",
    image: "/images/ladies-skinny-jeans.jpeg",
    buttonText: "View Ladies Bales"
  },
  {
    id: "men",
    name: "MEN BALES",
    shortTitle: "Men",
    icon: "👔",
    subtitle: "Shirts, trousers & jeans (Mashati, Suruali & T-Shirts za Wanaume)",
    description: "Durable men's trousers, shirts, cargo shorts, sweaters, boxers & jackets.",
    image: "/images/men-pants-tshirts.jpeg",
    buttonText: "View Men Bales"
  },
  {
    id: "unisex",
    name: "UNISEX BALES",
    shortTitle: "Unisex",
    icon: "🧥",
    subtitle: "Clothes worn by everyone (Nguo za kuvaliwa na wote: Hoodies & Tracksuits)",
    description: "Popular hoodies, denim jackets, sweatpants, school bags & accessories for both men & women.",
    image: "/images/adult-sport-pants.jpeg",
    buttonText: "View Unisex Bales"
  },
  {
    id: "households",
    name: "HOUSEHOLDS",
    shortTitle: "Households",
    icon: "🏠",
    subtitle: "Curtains, bedsheets & blankets (Mashuka ya Gundi, Mapazia & Mablanketi)",
    description: "Heavy curtains, fitted elastic bedsheets, flat sheets, blankets, duvet covers & mats.",
    image: "/images/household-curtains.jpeg",
    buttonText: "View Household Bales"
  },
  {
    id: "shoes",
    name: "SHOES",
    shortTitle: "Shoes",
    icon: "👟",
    subtitle: "Sneakers, official & casual shoes (Viatu vya Michezo, Kazi & Watoto)",
    description: "Sports shoes, men casual & formal leather shoes, plus children shoes mix.",
    image: "/images/warehouse-stock.jpeg",
    buttonText: "View Shoes"
  }
];

export const PRODUCTS = [
  // ==========================================
  // KIDS: BABY (AGE 0–6 YEARS)
  // ==========================================
  {
    id: "baby-medium-rummage",
    name: "Baby Medium Rummage Bales",
    category: "kids",
    subcategory: "Baby — Age 0–6 Years",
    description: "Newborn cold and light clothes",
    price: "KSh 16,000 – 19,000",
    pieces: "Approximately 350 pieces",
    popular: false,
    available: true,
    image: "/images/WhatsApp Image 2026-10-11 at 16.24.03.jpeg",
    imageCategory: "baby"
  },
  {
    id: "baby-light-bales",
    name: "Baby Light Bales",
    category: "kids",
    subcategory: "Baby — Age 0–6 Years",
    description: "Newborn pure light clothes (0–6 years)",
    price: "KSh 25,000 – 35,000",
    pieces: "Approximately 600 pieces",
    popular: true,
    available: true,
    image: "/images/warehouse-stack-tall.jpeg",
    imageCategory: "baby"
  },
  {
    id: "baby-jackets",
    name: "Baby Jackets",
    category: "kids",
    subcategory: "Baby — Age 0–6 Years",
    description: "Warm, cozy outerwear jackets for babies and toddlers.",
    price: "KSh 18,500",
    pieces: "Approx. 200–250 pieces",
    popular: false,
    available: true,
    imageCategory: "baby"
  },
  {
    id: "baby-onesies",
    name: "Baby Onesies",
    category: "kids",
    subcategory: "Baby — Age 0–6 Years",
    description: "Comfortable soft cotton baby bodysuits & onesies.",
    price: "KSh 17,500",
    pieces: "Approx. 400+ pieces",
    popular: false,
    available: true,
    imageCategory: "baby"
  },
  {
    id: "baby-fleece-heavy-rompers",
    name: "Baby Fleece Heavy Rompers",
    category: "kids",
    subcategory: "Baby — Age 0–6 Years",
    description: "Heavy fleece rompers for cold season and nightwear.",
    price: "KSh 32,000",
    pieces: "Approx. 250 pieces",
    popular: false,
    available: true,
    imageCategory: "baby"
  },
  {
    id: "baby-heavy-rompers",
    name: "Baby Heavy Rompers",
    category: "kids",
    subcategory: "Baby — Age 0–6 Years",
    description: "Warm heavy quality baby sleepsuits & rompers.",
    price: "KSh 15,000",
    pieces: "Approx. 250 pieces",
    popular: false,
    available: true,
    imageCategory: "baby"
  },

  // ==========================================
  // KIDS: CHILDREN (AGE 0–12 YEARS)
  // ==========================================
  {
    id: "children-heavy-mix",
    name: "Children Heavy Mix",
    category: "kids",
    subcategory: "Children — Age 0–12 Years",
    description: "Heavy warm mix clothing for growing boys and girls.",
    price: "KSh 6,000 – 9,000",
    pieces: "Approx. 300 pieces",
    popular: false,
    available: true,
    imageCategory: "kids"
  },
  {
    id: "children-mix-starters",
    name: "Children Mix Starters",
    category: "kids",
    subcategory: "Children — Age 0–12 Years",
    description: "Light & warm",
    price: "KSh 9,000",
    pieces: "Approx. 280 pieces",
    popular: false,
    available: true,
    imageCategory: "kids"
  },
  {
    id: "children-medium-rummage",
    name: "Children Medium Rummage",
    category: "kids",
    subcategory: "Children — Age 0–12 Years",
    description: "Light & warm",
    price: "KSh 16,000",
    pieces: "Approx. 350 pieces",
    popular: false,
    available: true,
    imageCategory: "kids"
  },
  {
    id: "children-mix-light",
    name: "Children Mix Light",
    category: "kids",
    subcategory: "Children — Age 0–12 Years",
    description: "Quality lightweight daily wear for boys and girls.",
    price: "KSh 19,000 – 24,000",
    pieces: "Approx. 400 pieces",
    popular: true,
    available: true,
    imageCategory: "kids"
  },
  {
    id: "children-jackets",
    name: "Children Jackets",
    category: "kids",
    subcategory: "Children — Age 0–12 Years",
    description: "Assorted children warm coats and puffer jackets.",
    price: "KSh 8,500 / KSh 12,500",
    pieces: "Approx. 150–200 pieces",
    popular: false,
    available: true,
    imageCategory: "kids"
  },
  {
    id: "girl-dresses",
    name: "Girl Dresses",
    category: "kids",
    subcategory: "Children — Age 0–12 Years",
    description: "Lovely party & casual dresses for young girls.",
    price: "KSh 22,000",
    pieces: "Approx. 300 pieces",
    popular: false,
    available: true,
    imageCategory: "kids"
  },
  {
    id: "children-trousers",
    name: "Children Trousers",
    category: "kids",
    subcategory: "Children — Age 0–12 Years",
    description: "Durable pants, chinos & jeans for boys and girls.",
    price: "KSh 7,500 / KSh 9,500",
    pieces: "Approx. 250 pieces",
    popular: false,
    available: true,
    imageCategory: "kids"
  },
  {
    id: "children-t-shirts",
    name: "Children T-Shirts",
    category: "kids",
    subcategory: "Children — Age 0–12 Years",
    description: "Bright, fun cotton t-shirts for everyday play.",
    price: "KSh 19,000 – 24,000",
    pieces: "Approx. 450 pieces",
    popular: false,
    available: true,
    imageCategory: "kids"
  },
  {
    id: "children-shorts",
    name: "Children Shorts",
    category: "kids",
    subcategory: "Children — Age 0–12 Years",
    description: "Denim, cotton & sport shorts for boys and girls.",
    price: "KSh 26,000 – 28,000",
    pieces: "Approx. 350 pieces",
    popular: false,
    available: true,
    imageCategory: "kids"
  },
  {
    id: "child-benefit-sweatpants",
    name: "Child Benefit Sweatpants",
    category: "kids",
    subcategory: "Children — Age 0–12 Years",
    description: "Warm fleece sweatpants & track bottoms for children.",
    price: "KSh 16,000 – 19,000",
    pieces: "Approx. 250 pieces",
    popular: false,
    available: true,
    imageCategory: "kids"
  },

  // ==========================================
  // LADIES BALES: JEANS & TROUSERS
  // ==========================================
  {
    id: "lady-mix-jeans",
    name: "Lady Mix Jeans",
    category: "ladies",
    subcategory: "Jeans & Trousers",
    description: "Assorted premium ladies denim jeans (various cuts & colors).",
    price: "KSh 9,000",
    pieces: "Approx. 150 pieces",
    popular: false,
    available: true,
    image: "/images/ladies-skinny-jeans.jpeg",
    imageCategory: "ladies"
  },
  {
    id: "lady-skinny-jeans",
    name: "Lady Skinny Jeans",
    category: "ladies",
    subcategory: "Jeans & Trousers",
    description: "Fitted stretch skinny jeans in high demand.",
    price: "KSh 21,000",
    pieces: "Approx. 180 pieces",
    popular: false,
    available: true,
    image: "/images/ladies-skinny-jeans.jpeg",
    imageCategory: "ladies"
  },
  {
    id: "lady-official-trousers",
    name: "Lady Official Trousers",
    category: "ladies",
    subcategory: "Jeans & Trousers",
    description: "Smart office and formal slacks for working women.",
    price: "KSh 22,000",
    pieces: "Approx. 200 pieces",
    popular: false,
    available: true,
    imageCategory: "ladies"
  },
  {
    id: "lady-mix-trousers",
    name: "Lady Mix Trousers",
    category: "ladies",
    subcategory: "Jeans & Trousers",
    description: "Assorted casual pants, chinos & cotton trousers.",
    price: "KSh 9,000",
    pieces: "Approx. 180 pieces",
    popular: false,
    available: true,
    imageCategory: "ladies"
  },
  {
    id: "lady-tights",
    name: "Lady Tights",
    category: "ladies",
    subcategory: "Jeans & Trousers",
    description: "Stretchy comfortable gym tights and casual leggings.",
    price: "KSh 16,000 – 19,000",
    pieces: "Approx. 350 pieces",
    popular: false,
    available: true,
    imageCategory: "ladies"
  },

  // ==========================================
  // LADIES BALES: SKIRTS
  // ==========================================
  {
    id: "lady-mix-skirts",
    name: "Lady Mix Skirts",
    category: "ladies",
    subcategory: "Skirts",
    description: "Assorted styles, lengths & prints of ladies skirts.",
    price: "KSh 16,000",
    pieces: "Approx. 250 pieces",
    popular: false,
    available: true,
    imageCategory: "ladies"
  },
  {
    id: "lady-denim-skirts",
    name: "Lady Denim Skirts",
    category: "ladies",
    subcategory: "Skirts",
    description: "Long, midi and short denim skirts.",
    price: "KSh 18,000",
    pieces: "Approx. 200 pieces",
    popular: false,
    available: true,
    imageCategory: "ladies"
  },
  {
    id: "lady-cotton-skirts",
    name: "Lady Cotton Skirts",
    category: "ladies",
    subcategory: "Skirts",
    description: "Lightweight, breathable casual cotton skirts.",
    price: "KSh 13,000",
    pieces: "Approx. 250 pieces",
    popular: false,
    available: true,
    imageCategory: "ladies"
  },
  {
    id: "lady-official-skirts",
    name: "Lady Official Skirts",
    category: "ladies",
    subcategory: "Skirts",
    description: "Pencil and A-line professional office wear skirts.",
    price: "KSh 21,000",
    pieces: "Approx. 220 pieces",
    popular: false,
    available: true,
    imageCategory: "ladies"
  },
  {
    id: "lady-polo-skirt",
    name: "Lady Polo Skirt",
    category: "ladies",
    subcategory: "Skirts",
    description: "Sporty casual polo-style ladies skirts.",
    price: "KSh 18,000",
    pieces: "Approx. 200 pieces",
    popular: false,
    available: true,
    imageCategory: "ladies"
  },
  {
    id: "lady-mini-skirts",
    name: "Lady Mini Skirts",
    category: "ladies",
    subcategory: "Skirts",
    description: "Trendy, fashionable youthful mini skirts.",
    price: "KSh 10,000 – 15,000",
    pieces: "Approx. 260 pieces",
    popular: false,
    available: true,
    imageCategory: "ladies"
  },
  {
    id: "lady-sweater-skirt",
    name: "Lady Sweater Skirt",
    category: "ladies",
    subcategory: "Skirts",
    description: "Warm knitted sweater material skirts.",
    price: "KSh 20,000",
    pieces: "Approx. 200 pieces",
    popular: false,
    available: true,
    imageCategory: "ladies"
  },

  // ==========================================
  // LADIES BALES: DRESSES
  // ==========================================
  {
    id: "lady-mix-dress",
    name: "Lady Mix Dress",
    category: "ladies",
    subcategory: "Dresses",
    description: "Assorted casual dresses, party wear & sundresses.",
    price: "KSh 15,000 – 25,000",
    pieces: "Approx. 250 pieces",
    popular: true,
    available: true,
    imageCategory: "ladies"
  },
  {
    id: "lady-sweater-dress",
    name: "Lady Sweater Dress",
    category: "ladies",
    subcategory: "Dresses",
    description: "Warm cozy knitted long & short sweater dresses.",
    price: "KSh 12,000",
    pieces: "Approx. 180 pieces",
    popular: false,
    available: true,
    imageCategory: "ladies"
  },
  {
    id: "lady-heavy-dress",
    name: "Lady Heavy Dress",
    category: "ladies",
    subcategory: "Dresses",
    description: "Thick fabric dresses suitable for cool weather.",
    price: "KSh 14,500",
    pieces: "Approx. 180 pieces",
    popular: false,
    available: true,
    imageCategory: "ladies"
  },
  {
    id: "lady-official-dress",
    name: "Lady Official Dress",
    category: "ladies",
    subcategory: "Dresses",
    description: "Elegant corporate dresses for working ladies.",
    price: "KSh 30,000 – 35,000",
    pieces: "Approx. 200 pieces",
    popular: false,
    available: true,
    imageCategory: "ladies"
  },
  {
    id: "lady-polysilk-dress",
    name: "Lady Polysilk Dress",
    category: "ladies",
    subcategory: "Dresses",
    description: "Silky flowy elegant occasion and evening dresses.",
    price: "KSh 40,000",
    pieces: "Approx. 220 pieces",
    popular: false,
    available: true,
    imageCategory: "ladies"
  },

  // ==========================================
  // LADIES BALES: TOPS & BLOUSES
  // ==========================================
  {
    id: "lady-tank-tops",
    name: "Lady Tank Tops",
    category: "ladies",
    subcategory: "Tops & Blouses",
    description: "Summer sleeveless tank tops and camisoles.",
    price: "KSh 9,000 – 12,000",
    pieces: "Approx. 350 pieces",
    popular: false,
    available: true,
    imageCategory: "ladies"
  },
  {
    id: "lady-t-shirts",
    name: "Lady T-Shirts",
    category: "ladies",
    subcategory: "Tops & Blouses",
    description: "Comfortable soft cotton everyday casual tees.",
    price: "KSh 13,000",
    pieces: "Approx. 350 pieces",
    popular: false,
    available: true,
    imageCategory: "ladies"
  },
  {
    id: "lady-official-blouses",
    name: "Lady Official Blouses",
    category: "ladies",
    subcategory: "Tops & Blouses",
    description: "Smart office button blouses & crisp work shirts.",
    price: "KSh 12,000 – 19,000",
    pieces: "Approx. 280 pieces",
    popular: false,
    available: true,
    imageCategory: "ladies"
  },
  {
    id: "lady-polysilk-blouses",
    name: "Lady Polysilk Blouses",
    category: "ladies",
    subcategory: "Tops & Blouses",
    description: "Flowy, elegant polyester silk formal blouses.",
    price: "KSh 16,000",
    pieces: "Approx. 300 pieces",
    popular: false,
    available: true,
    imageCategory: "ladies"
  },
  {
    id: "lady-cotton-blouses",
    name: "Lady Cotton Blouses",
    category: "ladies",
    subcategory: "Tops & Blouses",
    description: "Breathable pure cotton casual and smart tops.",
    price: "KSh 9,000",
    pieces: "Approx. 300 pieces",
    popular: false,
    available: true,
    imageCategory: "ladies"
  },

  // ==========================================
  // LADIES BALES: OUTERWEAR
  // ==========================================
  {
    id: "lady-jackets",
    name: "Lady Jackets",
    category: "ladies",
    subcategory: "Outerwear",
    description: "Fashion jackets, trench cuts and warm outerwear.",
    price: "KSh 9,000",
    pieces: "Approx. 120 pieces",
    popular: false,
    available: true,
    imageCategory: "ladies"
  },
  {
    id: "lady-blazers",
    name: "Lady Blazers",
    category: "ladies",
    subcategory: "Outerwear",
    description: "Sharp tailored business blazers & formal jackets.",
    price: "KSh 16,000",
    pieces: "Approx. 140 pieces",
    popular: false,
    available: true,
    imageCategory: "ladies"
  },
  {
    id: "lady-sweaters",
    name: "Lady Sweaters",
    category: "ladies",
    subcategory: "Outerwear",
    description: "Assorted cozy knit sweaters and cardigans.",
    price: "KSh 9,000",
    pieces: "Approx. 200 pieces",
    popular: false,
    available: true,
    imageCategory: "ladies"
  },
  {
    id: "lady-long-sweaters",
    name: "Lady Long Sweaters",
    category: "ladies",
    subcategory: "Outerwear",
    description: "Longline knit sweaters, kimonos & duster coats.",
    price: "KSh 12,000",
    pieces: "Approx. 150 pieces",
    popular: false,
    available: true,
    imageCategory: "ladies"
  },

  // ==========================================
  // LADIES BALES: UNDERGARMENTS & ACCESSORIES
  // ==========================================
  {
    id: "lady-undies",
    name: "Lady Undies",
    category: "ladies",
    subcategory: "Undergarments & Accessories",
    description: "Bra + Panties combo bale in great condition.",
    price: "KSh 24,000",
    pieces: "Approx. 400 pieces",
    popular: false,
    available: true,
    imageCategory: "ladies"
  },
  {
    id: "lady-bra",
    name: "Lady Bra",
    category: "ladies",
    subcategory: "Undergarments & Accessories",
    description: "Assorted quality padded, underwire & sports bras.",
    price: "KSh 28,000 – 35,000",
    pieces: "Approx. 350 pieces",
    popular: false,
    available: true,
    imageCategory: "ladies"
  },
  {
    id: "lady-panties",
    name: "Lady Panties",
    category: "ladies",
    subcategory: "Undergarments & Accessories",
    description: "Cotton and seamless comfort panties bale.",
    price: "KSh 22,000 – 28,000",
    pieces: "Approx. 600 pieces",
    popular: false,
    available: true,
    imageCategory: "ladies"
  },
  {
    id: "lady-handbags",
    name: "Lady Handbags",
    category: "ladies",
    subcategory: "Undergarments & Accessories",
    description: "Leather, tote and shoulder handbags.",
    price: "KSh 9,000 / KSh 19,000",
    pieces: "Approx. 80–120 pieces",
    popular: true,
    available: true,
    imageCategory: "ladies"
  },

  // ==========================================
  // MEN BALES
  // ==========================================
  {
    id: "men-mix-shorts",
    name: "Men Mix Shorts",
    category: "men",
    subcategory: "Men Bales",
    description: "Casual summer bermudas, denim & sports shorts.",
    price: "KSh 22,000",
    pieces: "Approx. 250 pieces",
    popular: false,
    available: true,
    imageCategory: "men"
  },
  {
    id: "men-cargo-shorts",
    name: "Men Cargo Shorts",
    category: "men",
    subcategory: "Men Bales",
    description: "Heavy duty multi-pocket cargo shorts.",
    price: "KSh 26,000",
    pieces: "Approx. 200 pieces",
    popular: false,
    available: true,
    imageCategory: "men"
  },
  {
    id: "men-sweaters",
    name: "Men Sweaters",
    category: "men",
    subcategory: "Men Bales",
    description: "V-neck and crewneck warm knit sweaters.",
    price: "KSh 10,000",
    pieces: "Approx. 180 pieces",
    popular: false,
    available: true,
    imageCategory: "men"
  },
  {
    id: "men-jackets",
    name: "Men Jackets",
    category: "men",
    subcategory: "Men Bales",
    description: "Windbreakers, bomber jackets & casual coats.",
    price: "KSh 12,000",
    pieces: "Approx. 130 pieces",
    popular: false,
    available: true,
    imageCategory: "men"
  },
  {
    id: "men-official-trousers",
    name: "Official Trousers",
    category: "men",
    subcategory: "Men Bales",
    description: "Sharp formal suit trousers and work slacks.",
    price: "KSh 23,000",
    pieces: "Approx. 180 pieces",
    popular: false,
    available: true,
    imageCategory: "men"
  },
  {
    id: "men-khaki-trousers",
    name: "Men Khaki Trousers",
    category: "men",
    subcategory: "Men Bales",
    description: "Smart-casual durable chinos and khaki pants.",
    price: "KSh 16,000 – 25,000",
    pieces: "Approx. 180 pieces",
    popular: false,
    available: true,
    image: "/images/men-pants-tshirts.jpeg",
    imageCategory: "men"
  },
  {
    id: "men-t-shirts",
    name: "Men T-Shirts",
    category: "men",
    subcategory: "Men Bales",
    description: "Quality round neck and collar polo t-shirts.",
    price: "KSh 19,000 – 22,000",
    pieces: "Approx. 350 pieces",
    popular: true,
    available: true,
    image: "/images/men-pants-tshirts.jpeg",
    imageCategory: "men"
  },
  {
    id: "men-cargo-trousers",
    name: "Men Cargo Trousers",
    category: "men",
    subcategory: "Men Bales",
    description: "Rugged multi-pocket combat and utility trousers.",
    price: "KSh 20,000 / KSh 32,000",
    pieces: "Approx. 160 pieces",
    popular: false,
    available: true,
    imageCategory: "men"
  },
  {
    id: "men-boxers",
    name: "Men Boxers",
    category: "men",
    subcategory: "Men Bales",
    description: "Pure cotton comfortable men's boxers & trunks.",
    price: "KSh 30,000 – 35,000",
    pieces: "Approx. 450 pieces",
    popular: false,
    available: true,
    imageCategory: "men"
  },
  {
    id: "men-shirts",
    name: "Men Shirts",
    category: "men",
    subcategory: "Men Bales",
    description: "Crisp formal dress shirts and casual button-ups.",
    price: "KSh 25,000",
    pieces: "Approx. 240 pieces",
    popular: false,
    available: true,
    imageCategory: "men"
  },

  // ==========================================
  // UNISEX BALES
  // ==========================================
  {
    id: "unisex-hoods",
    name: "Hoods",
    category: "unisex",
    subcategory: "Unisex Bales",
    description: "Heavy fleece zip-up and pullover hoodies.",
    price: "KSh 10,000 – 16,000",
    pieces: "Approx. 140 pieces",
    popular: true,
    available: true,
    imageCategory: "unisex"
  },
  {
    id: "unisex-sweatpants",
    name: "Sweatpants",
    category: "unisex",
    subcategory: "Unisex Bales",
    description: "Fleece joggers and sports sweatpants for all.",
    price: "KSh 10,000 – 16,000",
    pieces: "Approx. 180 pieces",
    popular: false,
    available: true,
    image: "/images/adult-sport-pants.jpeg",
    imageCategory: "unisex"
  },
  {
    id: "unisex-denim-jackets",
    name: "Denim Jackets",
    category: "unisex",
    subcategory: "Unisex Bales",
    description: "Classic jean jackets in various blue & black washes.",
    price: "KSh 10,000 – 15,000",
    pieces: "Approx. 120 pieces",
    popular: false,
    available: true,
    imageCategory: "unisex"
  },
  {
    id: "unisex-jackets",
    name: "Jackets",
    category: "unisex",
    subcategory: "Unisex Bales",
    description: "All-weather raincoats, track and wind jackets.",
    price: "KSh 12,000",
    pieces: "Approx. 130 pieces",
    popular: false,
    available: true,
    imageCategory: "unisex"
  },
  {
    id: "unisex-jumpers",
    name: "Jumpers",
    category: "unisex",
    subcategory: "Unisex Bales",
    description: "Crewneck sweaters and casual jumpers.",
    price: "KSh 11,000",
    pieces: "Approx. 160 pieces",
    popular: false,
    available: true,
    imageCategory: "unisex"
  },
  {
    id: "unisex-socks",
    name: "Socks",
    category: "unisex",
    subcategory: "Unisex Bales",
    description: "Assorted ankle, dress and sports cotton socks.",
    price: "KSh 21,000",
    pieces: "Approx. 800+ pairs",
    popular: false,
    available: true,
    imageCategory: "unisex"
  },
  {
    id: "unisex-marvins",
    name: "Marvins",
    category: "unisex",
    subcategory: "Unisex Bales",
    description: "Knit beanies, winter caps & marvin head warmers.",
    price: "KSh 12,000",
    pieces: "Approx. 350 pieces",
    popular: false,
    available: true,
    imageCategory: "unisex"
  },
  {
    id: "unisex-school-bags",
    name: "School Bags",
    category: "unisex",
    subcategory: "Unisex Bales",
    description: "Durable school bags, college backpacks & bookpacks.",
    price: "KSh 15,000 / KSh 22,000",
    pieces: "Approx. 100 pieces",
    popular: false,
    available: true,
    imageCategory: "unisex"
  },

  // ==========================================
  // HOUSEHOLDS CATEGORY
  // ==========================================
  {
    id: "household-light",
    name: "Light Households",
    category: "households",
    subcategory: "Household Bales",
    description: "Light curtains, tablecloths, napkins & home linens.",
    price: "KSh 13,000",
    pieces: "Approx. 250 pieces",
    popular: false,
    available: true,
    imageCategory: "households"
  },
  {
    id: "household-heavy",
    name: "Heavy Households",
    category: "households",
    subcategory: "Household Bales",
    description: "Thick blankets, heavy curtains & bed spreads.",
    price: "KSh 9,000",
    pieces: "Approx. 120 pieces",
    popular: false,
    available: true,
    imageCategory: "households"
  },
  {
    id: "household-curtains",
    name: "Curtains",
    category: "households",
    subcategory: "Household Bales",
    description: "Beautiful window drapes, sheers and blackout curtains.",
    price: "KSh 13,000",
    pieces: "Approx. 180 pieces",
    popular: true,
    available: true,
    image: "/images/household-curtains.jpeg",
    imageCategory: "households"
  },
  {
    id: "household-mats",
    name: "Mats",
    category: "households",
    subcategory: "Household Bales",
    description: "Door mats, bathroom mats & decorative bedside rugs.",
    price: "KSh 16,000 – 19,000",
    pieces: "Approx. 150 pieces",
    popular: false,
    available: true,
    imageCategory: "households"
  },
  {
    id: "household-elastic-bedsheets",
    name: "Elastic Bedsheets",
    category: "households",
    subcategory: "Household Bales",
    description: "Fitted elastic corner bedsheets in all bed sizes.",
    price: "KSh 16,000 – 19,000",
    pieces: "Approx. 160 pieces",
    popular: false,
    available: true,
    image: "/images/household-curtains.jpeg",
    imageCategory: "households"
  },
  {
    id: "household-flat-bedsheets",
    name: "Flat Bedsheets",
    category: "households",
    subcategory: "Household Bales",
    description: "Cotton flat bedsheets with matching pillow cases.",
    price: "KSh 23,000",
    pieces: "Approx. 200 pieces",
    popular: false,
    available: true,
    imageCategory: "households"
  },
  {
    id: "household-bedcovers",
    name: "Bedcovers",
    category: "households",
    subcategory: "Household Bales",
    description: "Quilted and decorative heavy bed covers.",
    price: "KSh 14,500",
    pieces: "Approx. 100 pieces",
    popular: false,
    available: true,
    imageCategory: "households"
  },

  // ==========================================
  // SHOES CATEGORY
  // ==========================================
  {
    id: "shoes-adult-sports",
    name: "Adult Mix Sports Shoes",
    category: "shoes",
    subcategory: "Mitumba Shoes Bales",
    description: "Running shoes, sneakers, trainers and gym footwear.",
    price: "KSh 9,000",
    pieces: "Approx. 60–80 pairs",
    popular: true,
    available: true,
    imageCategory: "shoes"
  },
  {
    id: "shoes-men-mix",
    name: "Men Mix Mitumba Shoes",
    category: "shoes",
    subcategory: "Mitumba Shoes Bales",
    description: "Formal leather shoes, casual loafers, boots & sneakers.",
    price: "KSh 9,500",
    pieces: "Approx. 60–80 pairs",
    popular: false,
    available: true,
    imageCategory: "shoes"
  },
  {
    id: "shoes-kids-mix",
    name: "Kids Mitumba Shoes",
    category: "shoes",
    subcategory: "Mitumba Shoes Bales",
    description: "Children sneakers, school shoes, sandals & boots.",
    price: "KSh 8,000 – 12,000",
    pieces: "Approx. 100–120 pairs",
    popular: false,
    available: true,
    imageCategory: "shoes"
  }
];

// Helper to create pre-written dynamic WhatsApp message
export const createWhatsAppMessage = (product) => {
  if (!product) {
    const defaultMsg = "Hello Morgan Mitumba Bales, I want to inquire about available mitumba bales.";
    return `${BUSINESS_INFO.whatsappBase}?text=${encodeURIComponent(defaultMsg)}`;
  }
  const message = `Hello Morgan Mitumba Bales. I am interested in ${product.name} at ${product.price}. Is it available?`;
  return `${BUSINESS_INFO.whatsappBase}?text=${encodeURIComponent(message)}`;
};

// Helper for WhatsApp sharing
export const createWhatsAppShareLink = (product) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.origin : 'https://morganmitumbabales.co.ke';
  const shareText = `Check out this bale from Morgan Mitumba Bales:\n📦 *${product.name}*\n💰 Price: *${product.price}*\n${product.pieces ? `📊 Count: ${product.pieces}\n` : ''}📞 Call/WhatsApp: ${BUSINESS_INFO.displayPhone}\n${currentUrl}`;
  return `https://wa.me/?text=${encodeURIComponent(shareText)}`;
};

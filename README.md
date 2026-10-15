# MORGAN MITUMBA BALES — Website & Digital Catalogue

> **Quality Mitumba Bales at Affordable Prices**  
> Simple, modern, high-contrast, mobile-first website for Kenya's mitumba bale traders and customers.

---

## 📱 Features & Highlights

1. **Simple Enough for Everyone**:
   - Designed for ordinary Kenyans, market vendors, and shop owners.
   - Large touch-friendly buttons (minimum 48px), high-contrast text, clear typography.
   - Direct ordering flow: **SEE BALE → SEE PRICE → CLICK WHATSAPP → ASK/ORDER**.

2. **Working WhatsApp Ordering & Pre-filled Messages**:
   - Every product card has an **[ASK ON WHATSAPP]** button.
   - Dynamically pre-fills the message with the exact bale name and price:
     > *"Hello Morgan Mitumba Bales. I am interested in [Product Name] at [Price]. Is it available?"*
   - Direct link: `https://wa.me/254707311381`

3. **Instant One-Tap Calling**:
   - Prominent **CALL US: 0707311381** buttons on header, hero, contact page, and persistent sticky bottom bar for mobile users.

4. **Floating WhatsApp Button & Sticky Mobile Bar**:
   - Bottom-right floating WhatsApp button with live pulse indicator.
   - Sticky mobile contact bar for instant Call and WhatsApp access on smartphones.

5. **Live Product Search & Category Filters**:
   - Real-time search by bale name (e.g., *Jeans, Shoes, Rompers, Hoods, Curtains*).
   - Filter tabs: **ALL**, **KIDS**, **LADIES**, **MEN**, **UNISEX**, **HOUSEHOLDS**, **SHOES**.

6. **Organized Categories**:
   - **👶 Kids Bales**: Clearly separated into **Baby (Age 0–6 Years)** and **Children (Age 0–12 Years)**.
   - **👗 Ladies Bales**: Sub-grouped into *Jeans & Trousers, Skirts, Dresses, Tops & Blouses, Outerwear, Undergarments & Handbags*.
   - **👔 Men Bales**: *Mix Shorts, Cargo, Khaki Trousers, Official Trousers, T-Shirts, Boxers, Sweaters, Jackets, Shirts*.
   - **🧥 Unisex Bales**: *Hoods, Sweatpants, Denim Jackets, Jumpers, Socks, Marvins, School Bags*.
   - **🏠 Households**: *Curtains, Elastic Bedsheets, Flat Bedsheets, Bedcovers, Mats, Blankets*.
   - **👟 Shoes**: *Adult Sports Shoes, Men Mix Mitumba Shoes, Kids Mitumba Shoes*.

7. **KSh Currency Formatting**:
   - Standard Kenyan Shillings formatting with commas for thousands (e.g. `KSh 16,000 – 19,000`, `KSh 22,000`).

8. **Share on WhatsApp Feature**:
   - Each product includes a "Share on WhatsApp" button to share bale details and prices with business partners or friends.

9. **Centralized Data Structure**:
   - All products, prices, and business numbers are in `src/data/products.js` for quick updates.

---

## 🛠️ How to Run Locally

### 1. Prerequisites
- Node.js (version 18 or newer)
- npm

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```
Generates optimized static HTML, CSS, and JS in the `dist/` folder ready for deployment on Netlify, Vercel, Cloudflare Pages, or cPanel.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ✏️ How the Business Owner Can Update Prices & Bales

To change prices, add a new bale, or mark a bale as sold out, edit:
📁 **`src/data/products.js`**

### Example: Updating a Price
```javascript
{
  id: "lady-skinny-jeans",
  name: "Lady Skinny Jeans",
  price: "KSh 22,500", // <-- change price here
  available: true      // <-- set to false if sold out
}
```

### Example: Adding a Product Image
1. Place the image inside `public/images/` (e.g. `public/images/skinny-jeans.jpg`).
2. Update the product entry in `src/data/products.js`:
```javascript
{
  id: "lady-skinny-jeans",
  name: "Lady Skinny Jeans",
  image: "/images/skinny-jeans.jpg",
  ...
}
```

---

## 📞 Business Contact Details
- **Business Name**: Morgan Mitumba Bales
- **Phone**: 0707311381
- **WhatsApp**: [https://wa.me/254707311381](https://wa.me/254707311381)
- **Tagline**: Quality Mitumba Bales at Affordable Prices

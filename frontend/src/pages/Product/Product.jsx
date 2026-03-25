import { useState } from "react";

const T = {
  bg: "#FAF7F2",
  bgAlt: "#F5F0E8",
  surface: "#FFFFFF",
  surfaceAlt: "#FDF9F4",
  border: "#E8DFC8",
  gold: "#B8860B",
  goldMid: "#D4AF37",
  goldLight: "#E6C76B",
  goldPale: "#FDF3D0",
  goldShimmer: "#F5C542",
  text: "#1A1208",
  textSec: "#6B5B3E",
  textDis: "#A8956E",
  green: "#26A541",
  fk: "#2874F0",
};

const FONTS = {
  heading: "'Playfair Display', Georgia, serif",
  sub: "'Poppins', Inter, sans-serif",
  body: "'Inter', Roboto, sans-serif",
  small: "'Roboto', Arial, sans-serif",
};

const GLOBAL = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@400;500;600&family=Inter:wght@300;400;500&family=Roboto:wght@400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #FAF7F2; }
  input::placeholder { color: #A8956E; font-family: 'Inter', sans-serif; font-size: 14px; }
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: #FAF7F2; }
  ::-webkit-scrollbar-thumb { background: #D4AF37; border-radius: 4px; }
  @keyframes fadeUp {
    from { opacity:0; transform:translateY(18px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes goldPulse {
    0%,100% { box-shadow: 0 0 0 0 rgba(212,175,55,0); }
    50%      { box-shadow: 0 0 0 6px rgba(212,175,55,0.18); }
  }
  @keyframes popIn {
    0%   { transform: scale(0.82); opacity:0; }
    65%  { transform: scale(1.06); }
    100% { transform: scale(1);    opacity:1; }
  }
`;

const CAROUSELS = [
  {
    id: 1, slides: [
      { label: "Sacred Texts", sub: "Ancient Wisdom", emoji: "📖" },
      { label: "Vedic Hymns", sub: "Divine Chants", emoji: "🕉️" },
      { label: "Holy Scriptures", sub: "Timeless Knowledge", emoji: "📿" },
    ]
  },
  {
    id: 2, slides: [
      { label: "Temple Prasadham", sub: "Blessed Offerings", emoji: "🍯" },
      { label: "Sacred Sweets", sub: "Divine Taste", emoji: "🪔" },
      { label: "Holy Water", sub: "Tirtha Prasad", emoji: "🏺" },
    ]
  },
  {
    id: 3, slides: [
      { label: "Divine Idols", sub: "Sacred Sculptures", emoji: "🛕" },
      { label: "Prayer Malas", sub: "Sacred Beads", emoji: "📿" },
      { label: "Holy Portraits", sub: "Blessed Images", emoji: "🖼️" },
    ]
  },
];

const CATEGORIES = [
  {
    id: "books", icon: "📖", label: "Books", desc: "Sacred texts & Vedic literature",
    items: [
      
      {
  id: 1,
  name: "Bhagavad Gita (English)",
  image: "https://m.media-amazon.com/images/I/81WcnNQ-TBL._SL1500_.jpg",
  price: 299,
  mrp: 450,
  desc: "Sacred Bhagavad Gita with English translation.",
  rating: 4.7,
  reviews: 1520,
},
    
  {
    id: 1,
    name: "Bhagavad Gita (English)",
    image: "https://m.media-amazon.com/images/I/81WcnNQ-TBL._SL1500_.jpg",
    price: 299,
    mrp: 450,
    desc: "Sacred Bhagavad Gita with English translation.",
    rating: 4.7,
    reviews: 1520,
  },
  {
    id: 2,
    name: "Ramayana — Full Edition",
    image: "https://m.media-amazon.com/images/I/91zbi9M+mKL.jpg",
    price: 499,
    mrp: 750,
    desc: "Complete Ramayana with all kandas.",
    rating: 4.8,
    reviews: 1892,
  },
  {
    id: 3,
    name: "Mahabharata (Complete Set)",
    image: "https://i.pinimg.com/1200x/f5/2f/fe/f52ffe1e8f465b2ee8ea1e3aeeec7f24.jpg",
    price: 899,
    mrp: 1200,
    desc: "Epic tale of Kurukshetra war.",
    rating: 4.9,
    reviews: 2400,
  },
  {
    id: 4,
    name: "Vishnu Sahasranama",
    image: "https://i.pinimg.com/736x/48/7f/20/487f20c0ea18d2c8955f354325518383.jpg",
    price: 199,
    mrp: 299,
    desc: "1000 names of Lord Vishnu.",
    rating: 4.5,
    reviews: 980,
  },
  {
    id: 5,
    name: "Shiva Purana",
    image: "https://i.pinimg.com/736x/8e/00/0e/8e000ea31ff5a788b628e5a8ac011b0d.jpg",
    price: 399,
    mrp: 599,
    desc: "Stories and teachings of Lord Shiva.",
    rating: 4.6,
    reviews: 1100,
  },
  {
    id: 6,
    name: "Devi Mahatmyam",
    image: "https://m.media-amazon.com/images/I/81H7zM2zQBL.jpg",
    price: 249,
    mrp: 350,
    desc: "700 verses of Goddess Durga.",
    rating: 4.7,
    reviews: 1250,
  },
  {
    id: 7,
    name: "Rigveda Hymns",
    image: "https://i.pinimg.com/1200x/4b/72/55/4b72558950b86460f2bd175a39f7a110.jpg",
    price: 599,
    mrp: 899,
    desc: "Ancient Vedic hymns collection.",
    rating: 4.4,
    reviews: 700,
  },
  {
    id: 8,
    name: "Yajurveda Samhita",
    image: "https://m.media-amazon.com/images/I/71x7z4KX3BL.jpg",
    price: 549,
    mrp: 850,
    desc: "Sacred rituals and mantras.",
    rating: 4.3,
    reviews: 650,
  },
  {
    id: 9,
    name: "Atharva Veda",
    image: "https://i.pinimg.com/736x/1c/2f/14/1c2f148855f891968eb6a3ff622c5414.jpg",
    price: 499,
    mrp: 780,
    desc: "Knowledge of daily rituals and healing.",
    rating: 4.4,
    reviews: 620,
  },
  {
    id: 10,
    name: "Upanishads Collection",
    image: "https://i.pinimg.com/736x/8e/c2/d9/8ec2d9df684b7ef34fe99392ab8ce1f3.jpg",
    price: 699,
    mrp: 999,
    desc: "Philosophical teachings of Hinduism.",
    rating: 4.8,
    reviews: 1400,
  },
  {
    id: 11,
    name: "Hanuman Chalisa Book",
    image: "https://i.pinimg.com/736x/b9/25/c6/b925c6efe7fad542007763425ffdbc34.jpg",
    price: 99,
    mrp: 150,
    desc: "Devotional hymn for Lord Hanuman.",
    rating: 4.9,
    reviews: 3000,
  },
  {
    id: 12,
    name: "Sai Satcharitra",
    image: "https://i.pinimg.com/1200x/3f/48/7c/3f487c1736d47b7f7ab7546fbb2ff2bb.jpg",
    price: 299,
    mrp: 450,
    desc: "Life and miracles of Sai Baba.",
    rating: 4.8,
    reviews: 2100,
  },
  {
    id: 13,
    name: "Garuda Purana",
    image: "https://i.pinimg.com/736x/0d/42/7b/0d427b795729559cd3e63963a6c24102.jpg",
    price: 349,
    mrp: 500,
    desc: "Afterlife and karma teachings.",
    rating: 4.5,
    reviews: 870,
  },
  {
    id: 14,
    name: "Bhagavata Purana",
    image: "https://i.pinimg.com/1200x/0a/a5/a3/0aa5a31b11011d3270190d01ea862c99.jpg",
    price: 599,
    mrp: 850,
    desc: "Stories of Lord Krishna.",
    rating: 4.9,
    reviews: 1750,
  },
  {
    id: 15,
    name: "Skanda Purana",
    image: "https://m.media-amazon.com/images/I/71Skanda.jpg",
    price: 499,
    mrp: 750,
    desc: "Largest Purana with sacred legends.",
    rating: 4.4,
    reviews: 690,
  },
  {
    id: 16,
    name: "Narada Bhakti Sutra",
    image: "https://m.media-amazon.com/images/I/71Narada.jpg",
    price: 199,
    mrp: 300,
    desc: "Teachings on devotion (Bhakti).",
    rating: 4.6,
    reviews: 540,
  },
  {
    id: 17,
    name: "Yoga Vasistha",
    image: "https://m.media-amazon.com/images/I/71Yoga.jpg",
    price: 699,
    mrp: 1000,
    desc: "Spiritual wisdom and philosophy.",
    rating: 4.7,
    reviews: 880,
  },
  {
    id: 18,
    name: "Ashtavakra Gita",
    image: "https://m.media-amazon.com/images/I/71Ashtavakra.jpg",
    price: 249,
    mrp: 400,
    desc: "Advaita Vedanta teachings.",
    rating: 4.6,
    reviews: 720,
  },
  {
    id: 19,
    name: "Durga Chalisa",
    image: "https://m.media-amazon.com/images/I/71Durga.jpg",
    price: 120,
    mrp: 180,
    desc: "Devotional hymn for Goddess Durga.",
    rating: 4.7,
    reviews: 950,
  },
  {
    id: 20,
    name: "Lakshmi Sahasranama",
    image: "https://m.media-amazon.com/images/I/71Lakshmi.jpg",
    price: 220,
    mrp: 350,
    desc: "1000 names of Goddess Lakshmi.",
    rating: 4.8,
    reviews: 1100,
  }
]
    
  },
  {
    id: "prasadham", icon: "🍯", label: "Prasadham", desc: "Temple-blessed sacred offerings",
    items: [
      { id: 1, name: "Panchamrit Mix", price: 149, mrp: 220, desc: "Milk, honey, ghee, sugar, curd — the five sacred ingredients. Ritual-grade quality.", emoji: "🥛", rating: 4.5, reviews: 834, tag: "Pure" },
      { id: 2, name: "Temple Modak", price: 199, mrp: 280, desc: "Ganesh's favourite sweet. Handmade using traditional jaggery-coconut filling.", emoji: "🍬", rating: 4.7, reviews: 2103, tag: "Bestseller" },
      { id: 3, name: "Tirupati Laddu", price: 299, mrp: 399, desc: "Authentic besan laddu prepared using the original Tirumala TTD recipe.", emoji: "🍡", rating: 4.9, reviews: 5621, tag: "Top Rated" },
      { id: 4, name: "Charnamrit", price: 99, mrp: 149, desc: "Holy water infused with tulsi, saffron and herbs. Delivered in sealed copper vessel.", emoji: "🏺", rating: 4.4, reviews: 445, tag: null },
      { id: 5, name: "Satyanarayan Prasad", price: 179, mrp: 249, desc: "Semolina & jaggery mix. Prepared under strict ritual conditions.", emoji: "🍮", rating: 4.6, reviews: 672, tag: null },
      { id: 6, name: "Pongal Prasad", price: 129, mrp: 180, desc: "Sacred rice offering prepared in pure ghee. Temple tradition from Tamil Nadu.", emoji: "🍚", rating: 4.3, reviews: 318, tag: null },
    ],
  },
  {
    id: "pooja", icon: "🪔", label: "Pooja Items", desc: "Ritual tools & sacred supplies",
    items: [
      { id: 1, name: "Brass Diya Set (12pc)", price: 649, mrp: 999, desc: "Hand-crafted temple lamps in traditional lotus design. BIS-certified brass.", emoji: "🪔", rating: 4.7, reviews: 1876, tag: "Bestseller" },
      { id: 2, name: "Camphor Tablets (100pc)", price: 89, mrp: 130, desc: "Pure white camphor. Smokeless, long-burning. Individually sealed.", emoji: "⬜", rating: 4.5, reviews: 932, tag: null },
      { id: 3, name: "Sandalwood Incense", price: 129, mrp: 200, desc: "Premium agarbatti sticks with 6-hour burn time. Pure sandalwood, no filler.", emoji: "🌿", rating: 4.6, reviews: 1243, tag: null },
      { id: 4, name: "Brass Kalash", price: 899, mrp: 1399, desc: "Sacred water vessel with mango leaf & coconut top. Hand-engraved.", emoji: "🏺", rating: 4.8, reviews: 543, tag: "Premium" },
      { id: 5, name: "Kumkum & Turmeric Set", price: 149, mrp: 199, desc: "Auspicious ritual powders in 6 decorated containers with silver-plated tray.", emoji: "🔴", rating: 4.4, reviews: 678, tag: null },
      { id: 6, name: "Copper Puja Plate", price: 549, mrp: 850, desc: "Engraved thali with 6 small bowls, spoon and bell. Temple-grade copper.", emoji: "🥃", rating: 4.7, reviews: 891, tag: null },
    ],
  },
  {
    id: "statue", icon: "🛕", label: "Statues", desc: "Divine idols & sacred sculptures",
    items: [
      { id: 1, name: "Ganesha — Brass 6\"", price: 1299, mrp: 1999, desc: "Sitting Ganapati in blessing pose, antique gold finish. Hand-cast brass.", emoji: "🐘", rating: 4.8, reviews: 2341, tag: "Bestseller" },
      { id: 2, name: "Lakshmi — Marble 8\"", price: 2499, mrp: 3499, desc: "White Statuario marble with 24K gold leaf detailing. Hand-carved in Jaipur.", emoji: "🌺", rating: 4.9, reviews: 1102, tag: "Top Rated" },
      { id: 3, name: "Shiva Lingam — Crystal", price: 3999, mrp: 5500, desc: "Natural Sphatik crystal, hand-polished. Comes with copper abhishek vessel.", emoji: "🔮", rating: 4.7, reviews: 678, tag: "Natural" },
      { id: 4, name: "Saraswati — Bronze 10\"", price: 4299, mrp: 6000, desc: "Goddess playing veena, lost-wax cast bronze. Intricate Chola-style work.", emoji: "🎵", rating: 4.8, reviews: 456, tag: "Handcrafted" },
      { id: 5, name: "Hanuman — Brass 12\"", price: 2199, mrp: 3199, desc: "Standing Panchamukhi Hanuman with red flag. Temple-blessed in Varanasi.", emoji: "🙏", rating: 4.9, reviews: 1893, tag: "Bestseller" },
      { id: 6, name: "Nataraja — Panchaloga", price: 5999, mrp: 8500, desc: "Dancing Shiva in the five sacred metals — traditional Swamimalai casting.", emoji: "💃", rating: 4.9, reviews: 334, tag: "Rare" },
    ],
  },
  {
    id: "images", icon: "🖼️", label: "Images", desc: "Blessed portraits & holy prints",
    items: [
      { id: 1, name: "Tirupati Balaji Print", price: 299, mrp: 499, desc: "12×16\", UV coated on archival paper, ready-to-hang teak wood frame.", emoji: "🌟", rating: 4.7, reviews: 3412, tag: "Bestseller" },
      { id: 2, name: "Goddess Durga Canvas", price: 499, mrp: 799, desc: "18×24\", gallery-wrapped premium canvas. Vibrant pigment print, 100yr archival.", emoji: "⚡", rating: 4.8, reviews: 1234, tag: null },
      { id: 3, name: "Om Namah Shivaya Scroll", price: 199, mrp: 299, desc: "Gold leaf embossed on handmade paper, 36\" scroll. Suitable for altar.", emoji: "🕉️", rating: 4.5, reviews: 765, tag: null },
      { id: 4, name: "Radha Krishna Painting", price: 649, mrp: 999, desc: "Hand-painted in Tanjore style with 24K gold leaf. Certificate of authenticity.", emoji: "💛", rating: 4.9, reviews: 892, tag: "Handpainted" },
      { id: 5, name: "Saibaba Photo Frame", price: 349, mrp: 550, desc: "Teak wood frame, 10×12\", double mat. Original Shirdi photograph.", emoji: "🪬", rating: 4.6, reviews: 2103, tag: null },
      { id: 6, name: "Ashtavinayak Set", price: 799, mrp: 1199, desc: "All 8 Ganesh temple photographs, matching silver frames, ready to hang.", emoji: "🐘", rating: 4.7, reviews: 567, tag: null },
    ],
  },
  {
    id: "mala", icon: "📿", label: "Mala", desc: "Sacred prayer beads & garlands",
    items: [
      { id: 1, name: "Rudraksha Mala — 108", price: 999, mrp: 1499, desc: "Original 5-mukhi Nepal Rudraksha, handstrung on silk. Certificate of authenticity.", emoji: "📿", rating: 4.8, reviews: 3201, tag: "Certified" },
      { id: 2, name: "Tulsi Mala — 108", price: 299, mrp: 450, desc: "Holy Vrindavan tulsi wood. Machine-rounded 8mm beads, handstrung.", emoji: "🌿", rating: 4.6, reviews: 1892, tag: null },
      { id: 3, name: "Sphatik Mala — 108", price: 1499, mrp: 2199, desc: "Natural crystal quartz, round 10mm beads. Used for Devi & Shiva worship.", emoji: "🔮", rating: 4.7, reviews: 876, tag: "Natural" },
      { id: 4, name: "Sandal Wood Mala", price: 799, mrp: 1199, desc: "Fragrant Mysore sandalwood, 10mm beads. Retains scent for years.", emoji: "🪵", rating: 4.8, reviews: 654, tag: null },
      { id: 5, name: "Gold Plated Mala", price: 2199, mrp: 3199, desc: "Temple-grade brass beads with 22K gold plating. For pooja use.", emoji: "✨", rating: 4.5, reviews: 412, tag: "Premium" },
      { id: 6, name: "Lotus Seed Mala", price: 449, mrp: 699, desc: "Kamal gatta 108 beads. Auspicious for Lakshmi worship & prosperity.", emoji: "🪷", rating: 4.6, reviews: 789, tag: null },
    ],
  },
];

function useHover() {
  const [h, set] = useState(false);
  return [h, { onMouseEnter: () => set(true), onMouseLeave: () => set(false) }];
}

function GoldDivider({ style = {} }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, ...style }}>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg,transparent,${T.goldMid}55)` }} />
      <span style={{ color: T.goldMid, fontSize: 11, opacity: 0.75 }}>✦</span>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg,${T.goldMid}55,transparent)` }} />
    </div>
  );
}

/* ── Star rating display ── */
function Stars({ rating }) {
  const pct = (rating / 5) * 100;
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
      <div style={{ position: "relative", fontSize: 14, letterSpacing: 1, lineHeight: 1 }}>
        <span style={{ color: "#ddd" }}>★★★★★</span>
        <span style={{ position: "absolute", left: 0, top: 0, overflow: "hidden", width: `${pct}%`, color: "#FF9800" }}>★★★★★</span>
      </div>
      <span style={{ fontFamily: FONTS.small, fontSize: 12, fontWeight: 600, color: "#FF9800" }}>{rating}</span>
    </div>
  );
}

/* ── Qty stepper — Flipkart style ── */
function QtyStepper({ qty, onInc, onDec }) {
  const isOne = qty === 1;
  return (
    <div style={{
      display: "inline-flex", alignItems: "stretch",
      border: `1.5px solid ${T.goldMid}`,
      borderRadius: 5, overflow: "hidden", height: 36,
      animation: "popIn 0.22s ease both",
      boxShadow: "0 2px 8px rgba(184,134,11,0.15)",
    }}>
      <button onClick={onDec} style={{
        width: 38, border: "none", cursor: "pointer",
        background: isOne ? "#fff2f2" : "#fffbf0",
        color: isOne ? "#e53935" : T.gold,
        fontSize: isOne ? 15 : 20, fontWeight: 700,
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "background 0.15s",
        fontFamily: FONTS.body,
      }}>{isOne ? "🗑" : "−"}</button>

      <div style={{
        minWidth: 40, display: "flex", alignItems: "center", justifyContent: "center",
        background: "#fff",
        fontFamily: FONTS.sub, fontSize: 14, fontWeight: 700, color: T.text,
        borderLeft: `1px solid ${T.border}`, borderRight: `1px solid ${T.border}`,
      }}>{qty}</div>

      <button onClick={onInc} style={{
        width: 38, border: "none", cursor: "pointer",
        background: "#fffbf0", color: T.gold,
        fontSize: 20, fontWeight: 700,
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "background 0.15s",
        fontFamily: FONTS.body,
      }}>+</button>
    </div>
  );
}

/* ────────────────────────────────────────────
   FLIPKART-STYLE PRODUCT CARD
──────────────────────────────────────────── */
function ProductCard({ item, catId, cart, onAdd, onRemove, delay }) {
  const [h, hp] = useHover();
  const [wish, setWish] = useState(false);
  const key = `${catId}-${item.id}`;
  const qty = cart[key] || 0;
  const discount = Math.round(((item.mrp - item.price) / item.mrp) * 100);

  const tagColor = {
    "Bestseller": "#2874F0", "Top Rated": "#26A541",
    "Limited": "#e53935", "Pure": "#00897B",
    "Premium": "#7B1FA2", "Natural": "#558B2F",
    "Certified": "#1565C0", "Handpainted": "#E65100",
    "Handcrafted": "#AD1457", "Rare": "#6A1B9A",
  };

  return (
    <div {...hp} style={{
      background: T.surface,
      borderRadius: 10,
      border: `1px solid ${h ? T.goldMid : T.border}`,
      display: "flex",
      overflow: "hidden",
      boxShadow: h
        ? "0 8px 32px rgba(184,134,11,0.14), 0 2px 8px rgba(0,0,0,0.06)"
        : "0 1px 6px rgba(0,0,0,0.05)",
      transition: "all 0.25s",
      animation: `fadeUp 0.4s ease ${delay}s both`,
      position: "relative",
    }}>

      {/* ── LEFT: image panel ── */}
      <div style={{
        width: 180, minWidth: 180,
        background: `linear-gradient(165deg, ${T.goldPale} 0%, ${T.bgAlt} 100%)`,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: 8, padding: "20px 12px",
        borderRight: `1px solid ${T.border}`,
        position: "relative",
      }}>
        {/* Tag */}
        {item.tag && (
          <div style={{
            position: "absolute", top: 12, left: 0,
            background: tagColor[item.tag] || T.gold,
            color: "#fff",
            fontFamily: FONTS.small, fontSize: 10, fontWeight: 700,
            padding: "3px 9px 3px 7px",
            borderRadius: "0 10px 10px 0",
            letterSpacing: 0.4,
            boxShadow: "0 2px 6px rgba(0,0,0,0.18)",
          }}>{item.tag}</div>
        )}

        {/* Wishlist heart */}
        <button onClick={() => setWish(w => !w)} style={{
          position: "absolute", top: 10, right: 10,
          background: "rgba(255,255,255,0.8)", border: "none",
          borderRadius: "50%", width: 28, height: 28,
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 15,
          color: wish ? "#e53935" : "#bbb",
          transition: "transform 0.2s, color 0.2s",
          transform: wish ? "scale(1.2)" : "scale(1)",
          boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
        }}>{wish ? "♥" : "♡"}</button>

        {/* Product emoji or image */}
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: "100%",
              height: 120,
              objectFit: "contain",
            }}
          />
        ) : (
          <div style={{
            width: "100%",
            height: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 48,
          }}>
            {item.emoji}
          </div>
        )}

       
      </div>

      {/* ── RIGHT: details panel ── */}
      <div style={{ flex: 1, padding: "18px 22px", display: "flex", flexDirection: "column", gap: 7, minWidth: 0 }}>

        {/* Product name */}
       <div style={{
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}}>
  <div style={{
    fontFamily: FONTS.sub,
    fontSize: 16,
    fontWeight: 600,
    color: T.text,
  }}>
    {item.name}
  </div>

  <Stars rating={item.rating || 0} />
</div>

        {/* Stars */}
        <Stars rating={item.rating || 0} />

        {/* Description */}
        <div style={{
          fontFamily: FONTS.body, fontSize: 13, color: "#888",
          lineHeight: 1.6,
          display: "-webkit-box", WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>{item.desc}</div>

        {/* Divider */}
        <div style={{ height: 1, background: T.border, margin: "2px 0" }} />

        {/* Price row */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
          <span style={{
            fontFamily: FONTS.heading, fontSize: 22, fontWeight: 700, color: "#D4AF37",
          }}>₹{item.price.toLocaleString()}</span>
          <span style={{
            fontFamily: FONTS.small, fontSize: 14, color: "#AAAAAA",
            textDecoration: "line-through",
          }}>₹{item.mrp.toLocaleString()}</span>
          {discount > 0 && (
            <span style={{
              fontFamily: FONTS.small, fontSize: 14, fontWeight: 700, color: T.green,
            }}>{discount}% off</span>
          )}
        </div>

        {/* Savings pill */}
        {discount > 0 && (
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 5,
            background: "#EAF7ED", borderRadius: 4, padding: "4px 10px",
            fontFamily: FONTS.small, fontSize: 12, fontWeight: 500, color: T.green,
            alignSelf: "flex-start",
          }}>
            🎉 You save ₹{(item.mrp - item.price).toLocaleString()}
          </div>
        )}

        {/* Delivery */}
        <div style={{
          fontFamily: FONTS.small, fontSize: 12, color: T.green,
          display: "flex", alignItems: "center", gap: 5,
        }}>
          <span>🚚</span>
          <span style={{ fontWeight: 500 }}>Free Delivery</span>
          <span style={{ color: "#AAAAAA" }}>· Usually ships in 2–3 days</span>
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 4, flexWrap: "wrap" }}>
          {qty === 0 ? (
            <>
              <button
                onClick={() => onAdd(key)}
                style={{
                  height: 40, padding: "0 24px",
                  background: `linear-gradient(135deg, ${T.goldMid}, ${T.gold})`,
                  border: "none", borderRadius: 5,
                  fontFamily: FONTS.sub, fontSize: 13, fontWeight: 600,
                  color: "#fff", letterSpacing: 0.4, cursor: "pointer",
                  boxShadow: "0 3px 10px rgba(184,134,11,0.28)",
                  display: "flex", alignItems: "center", gap: 7,
                  transition: "all 0.2s",
                }}
              >
                🛒 Add to Cart
              </button>
              <button style={{
                height: 40, padding: "0 20px",
                background: "#fff",
                border: `1.5px solid ${T.goldMid}`,
                borderRadius: 5,
                fontFamily: FONTS.sub, fontSize: 13, fontWeight: 600,
                color: T.gold, cursor: "pointer",
                display: "flex", alignItems: "center", gap: 7,
              }}>
                ⚡ Buy Now
              </button>
            </>
          ) : (
            <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
              <QtyStepper qty={qty} onInc={() => onAdd(key)} onDec={() => onRemove(key)} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{
                  fontFamily: FONTS.small, fontSize: 12, color: T.green, fontWeight: 600,
                }}>✓ Added to Cart</span>
                <span style={{
                  fontFamily: FONTS.small, fontSize: 11, color: "#AAAAAA",
                }}>Subtotal: ₹{(item.price * qty).toLocaleString()}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   PRODUCT LIST PAGE
──────────────────────────────────────────── */
function ProductList({ cat, cart, onAdd, onRemove, onBack }) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  let items = cat.items.filter(item => {
    const q = search.toLowerCase();
    const matchText = item.name.toLowerCase().includes(q) || (item.desc || "").toLowerCase().includes(q);
    const matchMin = minPrice === "" || item.price >= Number(minPrice);
    const matchMax = maxPrice === "" || item.price <= Number(maxPrice);
    return matchText && matchMin && matchMax;
  });

  if (sortBy === "price_asc") items = [...items].sort((a, b) => a.price - b.price);
  if (sortBy === "price_desc") items = [...items].sort((a, b) => b.price - a.price);
  if (sortBy === "rating") items = [...items].sort((a, b) => b.rating - a.rating);
  if (sortBy === "popular") items = [...items].sort((a, b) => b.reviews - a.reviews);

  const inCartCount = items.filter(i => (cart[`${cat.id}-${i.id}`] || 0) > 0).length;

  return (
    <div style={{ animation: "fadeUp 0.4s ease both" }}>

      {/* Page header */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
        <BackBtn onClick={onBack} />
        <div>
          <div style={{ fontFamily: FONTS.sub, fontSize: 22, fontWeight: 600, color: "#C9A227", lineHeight: 1.3 }}>
            {cat.icon} {cat.label}
          </div>
          <div style={{ fontFamily: FONTS.small, fontSize: 13, color: "#AAAAAA" }}>{cat.desc}</div>
        </div>
        {inCartCount > 0 && (
          <div style={{
            marginLeft: "auto",
            background: T.goldPale, border: `1px solid ${T.goldMid}`,
            borderRadius: 20, padding: "5px 14px",
            fontFamily: FONTS.small, fontSize: 12, fontWeight: 600, color: T.gold,
          }}>
            🛒 {inCartCount} item{inCartCount > 1 ? "s" : ""} in cart
          </div>
        )}
      </div>

      <GoldDivider style={{ marginBottom: 16 }} />

      {/* ── Filter / Sort bar ── */}
      <div style={{
        background: T.surface,
        border: `1px solid ${T.border}`,
        borderRadius: 10, padding: "14px 18px",
        marginBottom: 20,
        boxShadow: "0 2px 10px rgba(184,134,11,0.06)",
      }}>
        {/* Row 1: Search + Sort */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", marginBottom: 12 }}>
          <div style={{ position: "relative", flex: 1, minWidth: 200 }}>
            <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: T.goldMid, fontSize: 14 }}>🔍</span>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search in this category…"
              style={{
                width: "100%", padding: "9px 14px 9px 36px",
                border: `1.5px solid ${T.border}`, borderRadius: 6,
                fontFamily: FONTS.body, fontSize: 14, color: T.text,
                background: T.bgAlt, outline: "none", transition: "border 0.2s",
              }}
              onFocus={e => e.target.style.borderColor = T.goldMid}
              onBlur={e => e.target.style.borderColor = T.border}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span style={{ fontFamily: FONTS.small, fontSize: 12, color: "#AAAAAA" }}>Price (₹):</span>
            <input
              value={minPrice} onChange={e => setMinPrice(e.target.value)}
              placeholder="Min" type="number"
              style={{
                width: 70, padding: "8px 10px",
                border: `1.5px solid ${T.border}`, borderRadius: 6,
                fontFamily: FONTS.body, fontSize: 13, color: T.text,
                background: T.bgAlt, outline: "none",
              }}
            />
            <span style={{ color: "#AAAAAA" }}>–</span>
            <input
              value={maxPrice} onChange={e => setMaxPrice(e.target.value)}
              placeholder="Max" type="number"
              style={{
                width: 70, padding: "8px 10px",
                border: `1.5px solid ${T.border}`, borderRadius: 6,
                fontFamily: FONTS.body, fontSize: 13, color: T.text,
                background: T.bgAlt, outline: "none",
              }}
            />
          </div>
          <div style={{ fontFamily: FONTS.small, fontSize: 12, color: "#AAAAAA", marginLeft: "auto" }}>
            {items.length} result{items.length !== 1 ? "s" : ""}
          </div>
        </div>

        {/* Row 2: Sort pills */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontFamily: FONTS.small, fontSize: 12, color: "#AAAAAA", marginRight: 2 }}>Sort by:</span>
          {[
            { v: "default", l: "Relevance" },
            { v: "popular", l: "🔥 Popularity" },
            { v: "rating", l: "⭐ Rating" },
            { v: "price_asc", l: "Price: Low to High" },
            { v: "price_desc", l: "Price: High to Low" },
          ].map(opt => (
            <button key={opt.v} onClick={() => setSortBy(opt.v)} style={{
              padding: "5px 13px", borderRadius: 20,
              border: `1.5px solid ${sortBy === opt.v ? T.goldMid : T.border}`,
              background: sortBy === opt.v ? T.goldPale : "#fff",
              fontFamily: FONTS.small, fontSize: 12,
              fontWeight: sortBy === opt.v ? 600 : 400,
              color: sortBy === opt.v ? T.gold : T.textSec,
              cursor: "pointer", transition: "all 0.18s",
            }}>{opt.l}</button>
          ))}
          {(search || minPrice || maxPrice) && (
            <button onClick={() => { setSearch(""); setMinPrice(""); setMaxPrice(""); }} style={{
              marginLeft: "auto", padding: "5px 13px", borderRadius: 20,
              border: `1px solid #e53935`, background: "#fff2f2",
              fontFamily: FONTS.small, fontSize: 12, color: "#e53935",
              cursor: "pointer",
            }}>✕ Clear filters</button>
          )}
        </div>
      </div>

      {/* Product cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {items.length > 0 ? (
          items.map((item, i) => (
            <ProductCard
              key={item.id}
              item={item}
              catId={cat.id}
              cart={cart}
              onAdd={onAdd}
              onRemove={onRemove}
              delay={i * 0.04}
            />
          ))
        ) : (
          <div style={{
            textAlign: "center", padding: "64px 20px",
            background: T.surface, borderRadius: 12, border: `1px dashed ${T.border}`,
          }}>
            <div style={{ fontSize: 44, marginBottom: 14 }}>🔍</div>
            <div style={{ fontFamily: FONTS.sub, fontSize: 16, fontWeight: 600, color: "#C9A227", marginBottom: 6 }}>
              No items found
            </div>
            <div style={{ fontFamily: FONTS.body, fontSize: 14, color: "#AAAAAA" }}>
              Try adjusting your search or filters
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   CAROUSEL
──────────────────────────────────────────── */
function Carousel({ data, animDelay }) {
  const [cur, setCur] = useState(0);
  const len = data.slides.length;
  return (
    <div style={{ background: T.surface, borderRadius: 16, overflow: "hidden", border: `1px solid ${T.border}`, boxShadow: "0 2px 14px rgba(184,134,11,0.07)", animation: `fadeUp 0.5s ease ${animDelay}s both` }}>
      <div style={{ overflow: "hidden", position: "relative" }}>
        <div style={{ display: "flex", transform: `translateX(-${cur * 100}%)`, transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)" }}>
          {data.slides.map((s, i) => (
            <div key={i} style={{ minWidth: "100%", background: `linear-gradient(160deg,${T.goldPale} 0%,${T.bgAlt} 100%)`, padding: "38px 24px 30px", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${T.goldMid},transparent)` }} />
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(212,175,55,0.1)", border: `1.5px solid ${T.goldLight}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>{s.emoji}</div>
              <div style={{ fontFamily: FONTS.sub, fontSize: 15, fontWeight: 600, color: "#C9A227", letterSpacing: 1.5, textAlign: "center" }}>{s.label}</div>
              <div style={{ fontFamily: FONTS.small, fontSize: 11, color: "#AAAAAA", letterSpacing: 3, textTransform: "uppercase" }}>{s.sub}</div>
            </div>
          ))}
        </div>
        {[{ s: "‹", fn: () => setCur(c => (c - 1 + len) % len), p: { left: 10 } }, { s: "›", fn: () => setCur(c => (c + 1) % len), p: { right: 10 } }].map((a, i) => (
          <button key={i} onClick={a.fn} style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", ...a.p, width: 30, height: 30, borderRadius: "50%", background: "rgba(255,255,255,0.9)", border: `1px solid ${T.border}`, color: T.gold, fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>{a.s}</button>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 6, padding: "11px 0 13px", background: T.surfaceAlt, borderTop: `1px solid ${T.border}` }}>
        {data.slides.map((_, i) => (<button key={i} onClick={() => setCur(i)} style={{ width: i === cur ? 20 : 6, height: 6, borderRadius: i === cur ? 3 : "50%", background: i === cur ? T.goldMid : T.border, border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s" }} />))}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   CATEGORY CARD
──────────────────────────────────────────── */
function CategoryCard({ cat, onClick, animDelay }) {
  const [h, hp] = useHover();
  return (
    <div {...hp} onClick={() => onClick(cat)} style={{ background: h ? T.goldPale : T.surface, borderRadius: 14, padding: "28px 16px 22px", border: `1.5px solid ${h ? T.goldMid : T.border}`, cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, textAlign: "center", transform: h ? "translateY(-5px)" : "translateY(0)", boxShadow: h ? "0 14px 36px rgba(184,134,11,0.14)" : "0 1px 4px rgba(0,0,0,0.04)", transition: "all 0.28s", animation: `fadeUp 0.5s ease ${animDelay}s both`, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: h ? `linear-gradient(90deg,transparent,${T.goldMid},transparent)` : "transparent", transition: "background 0.3s" }} />
      <div style={{ width: 58, height: 58, borderRadius: "50%", background: h ? "rgba(212,175,55,0.16)" : "rgba(212,175,55,0.06)", border: `1.5px solid ${h ? T.goldMid : T.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, transition: "all 0.3s", animation: h ? "goldPulse 2s ease infinite" : "none" }}>{cat.icon}</div>
      <div style={{ fontFamily: FONTS.sub, fontSize: 14, fontWeight: 600, color: h ? "#C9A227" : T.text, letterSpacing: 1, transition: "color 0.3s" }}>{cat.label}</div>
      <div style={{ fontFamily: FONTS.small, fontSize: 12, color: "#AAAAAA", lineHeight: 1.6 }}>{cat.desc}</div>
      <div style={{ fontFamily: FONTS.small, fontSize: 11, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase", color: h ? "#C9A227" : "#AAAAAA", display: "flex", alignItems: "center", gap: 3, transition: "color 0.3s" }}>
        Explore <span style={{ fontSize: 13 }}>›</span>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   BACK BUTTON
──────────────────────────────────────────── */
function BackBtn({ onClick }) {
  const [h, hp] = useHover();
  return (
    <button {...hp} onClick={onClick} style={{ width: 36, height: 36, borderRadius: "50%", background: h ? T.goldPale : T.surface, border: `1.5px solid ${h ? T.goldMid : T.border}`, color: T.gold, fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s", flexShrink: 0 }}>‹</button>
  );
}

/* ────────────────────────────────────────────
   CART DRAWER
──────────────────────────────────────────── */
function CartDrawer({ cart, onAdd, onRemove, onClose }) {
  const allItems = CATEGORIES.flatMap(c => c.items.map(i => ({ ...i, catId: c.id, catLabel: c.label })));
  const entries = Object.entries(cart).filter(([, q]) => q > 0).map(([key, qty]) => {
    const [catId, id] = key.split("-");
    const item = allItems.find(i => i.catId === catId && String(i.id) === id);
    return { ...item, qty, key };
  });
  const total = entries.reduce((s, e) => s + e.qty * e.price, 0);
  const savings = entries.reduce((s, e) => s + e.qty * (e.mrp - e.price), 0);

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 300, display: "flex", justifyContent: "flex-end" }}>
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(26,18,8,0.3)", backdropFilter: "blur(3px)" }} />
      <div style={{ position: "relative", width: 410, height: "100%", background: T.surface, borderLeft: `1px solid ${T.border}`, display: "flex", flexDirection: "column", boxShadow: "-8px 0 40px rgba(184,134,11,0.1)", overflowY: "auto", animation: "fadeUp 0.3s ease both" }}>

        {/* Header */}
        <div style={{ padding: "16px 22px", borderBottom: `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", background: T.surfaceAlt }}>
          <div>
            <div style={{ fontFamily: FONTS.heading, fontSize: 18, fontWeight: 700, color: "#D4AF37" }}>Your Cart</div>
            <div style={{ fontFamily: FONTS.small, fontSize: 12, color: "#AAAAAA", marginTop: 1 }}>{entries.length} item type{entries.length !== 1 ? "s" : ""}</div>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", color: T.textDis, fontSize: 20, cursor: "pointer" }}>✕</button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, padding: "14px 18px", display: "flex", flexDirection: "column", gap: 10 }}>
          {entries.length === 0 ? (
            <div style={{ textAlign: "center", marginTop: 56 }}>
              <div style={{ fontSize: 44, marginBottom: 12 }}>🪔</div>
              <div style={{ fontFamily: FONTS.sub, fontSize: 15, fontWeight: 600, color: "#C9A227" }}>Cart is empty</div>
              <div style={{ fontFamily: FONTS.body, fontSize: 13, color: "#AAAAAA", marginTop: 6 }}>Add sacred items to begin</div>
            </div>
          ) : entries.map(e => (
            <div key={e.key} style={{ background: T.bgAlt, borderRadius: 10, border: `1px solid ${T.border}`, padding: "12px 14px" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ fontSize: 30, flexShrink: 0 }}>{e.emoji}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: FONTS.sub, fontSize: 13, fontWeight: 600, color: T.text, lineHeight: 1.35, marginBottom: 2 }}>{e.name}</div>
                  <div style={{ fontFamily: FONTS.small, fontSize: 11, color: "#AAAAAA", marginBottom: 10 }}>{e.catLabel}</div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                    <QtyStepper qty={e.qty} onInc={() => onAdd(e.key)} onDec={() => onRemove(e.key)} />
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: FONTS.heading, fontSize: 15, fontWeight: 700, color: "#D4AF37" }}>₹{(e.price * e.qty).toLocaleString()}</div>
                      <div style={{ fontFamily: FONTS.small, fontSize: 11, color: T.green }}>Save ₹{((e.mrp - e.price) * e.qty).toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        {entries.length > 0 && (
          <div style={{ padding: "16px 20px 24px", borderTop: `1px solid ${T.border}`, background: T.surfaceAlt }}>
            <div style={{ fontFamily: FONTS.sub, fontSize: 13, fontWeight: 600, color: T.textSec, marginBottom: 10 }}>Price Details</div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
              <span style={{ fontFamily: FONTS.body, fontSize: 13, color: T.textSec }}>MRP Total</span>
              <span style={{ fontFamily: FONTS.body, fontSize: 13, color: T.textSec }}>₹{entries.reduce((s, e) => s + e.qty * e.mrp, 0).toLocaleString()}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
              <span style={{ fontFamily: FONTS.body, fontSize: 13, color: T.green }}>Discount</span>
              <span style={{ fontFamily: FONTS.body, fontSize: 13, color: T.green }}>− ₹{savings.toLocaleString()}</span>
            </div>
            <GoldDivider style={{ marginBottom: 10 }} />
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14, alignItems: "baseline" }}>
              <span style={{ fontFamily: FONTS.sub, fontSize: 14, fontWeight: 600, color: T.text }}>Total</span>
              <span style={{ fontFamily: FONTS.heading, fontSize: 22, fontWeight: 700, color: "#D4AF37" }}>₹{total.toLocaleString()}</span>
            </div>
            {savings > 0 && (
              <div style={{ textAlign: "center", fontFamily: FONTS.small, fontSize: 12, color: T.green, marginBottom: 12 }}>
                🎉 You save ₹{savings.toLocaleString()} on this order!
              </div>
            )}
            <button style={{ width: "100%", padding: "13px", background: `linear-gradient(135deg,${T.goldMid},${T.gold})`, border: "none", borderRadius: 6, fontFamily: FONTS.sub, fontSize: 13, fontWeight: 600, color: "#fff", letterSpacing: 1.5, textTransform: "uppercase", cursor: "pointer", boxShadow: "0 3px 14px rgba(184,134,11,0.3)" }}>
              Place Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   SECTION HEADING
──────────────────────────────────────────── */
function SectionHeading({ children, sub }) {
  return (
    <div style={{ marginBottom: 24, animation: "fadeUp 0.5s ease both" }}>
      <div style={{ fontFamily: FONTS.heading, fontSize: 38, fontWeight: 700, color: "#D4AF37", lineHeight: 1.2 }}>{children}</div>
      {sub && <div style={{ fontFamily: FONTS.body, fontSize: 15, color: T.textSec, lineHeight: 1.6, marginTop: 5 }}>{sub}</div>}
      <div style={{ height: 2, width: 50, background: `linear-gradient(90deg,${T.goldMid},transparent)`, borderRadius: 2, marginTop: 10 }} />
    </div>
  );
}

/* ────────────────────────────────────────────
   HEADER
──────────────────────────────────────────── */
function Header({ cartCount, onCartOpen }) {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 200, background: "rgba(250,247,242,0.97)", backdropFilter: "blur(16px)", borderBottom: `1px solid ${T.border}`, padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 62, boxShadow: "0 1px 12px rgba(184,134,11,0.07)" }}>
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", gap: 10 }}>
        <div style={{ width: 48, height: 1, background: `linear-gradient(90deg,transparent,${T.goldMid}45)` }} />
        <span style={{ color: `${T.goldMid}60`, fontSize: 13 }}>✦</span>
        <div style={{ width: 48, height: 1, background: `linear-gradient(90deg,${T.goldMid}45,transparent)` }} />
      </div>
      <button onClick={onCartOpen} style={{ position: "relative", width: 42, height: 42, borderRadius: "50%", background: T.surface, border: `1.5px solid ${T.border}`, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, transition: "all 0.2s" }}>
        🛒
        {cartCount > 0 && (
          <span style={{ position: "absolute", top: -4, right: -4, width: 19, height: 19, borderRadius: "50%", background: T.gold, color: "#fff", fontFamily: FONTS.small, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 6px rgba(184,134,11,0.4)" }}>{cartCount}</span>
        )}
      </button>
    </header>
  );
}

/* ────────────────────────────────────────────
   ROOT
──────────────────────────────────────────── */
export default function TempleStore() {
  const [selectedCat, setSelectedCat] = useState(null);
  const [cart, setCart] = useState({});
  const [cartOpen, setCartOpen] = useState(false);

  const cartCount = Object.values(cart).reduce((s, q) => s + q, 0);
  const addToCart = key => setCart(prev => ({ ...prev, [key]: (prev[key] || 0) + 1 }));
  const removeFromCart = key => setCart(prev => {
    const qty = (prev[key] || 0) - 1;
    if (qty <= 0) { const n = { ...prev }; delete n[key]; return n; }
    return { ...prev, [key]: qty };
  });

  return (
    <div style={{ background: T.bg, color: T.text, minHeight: "100vh", fontFamily: FONTS.body, fontSize: 16, lineHeight: 1.6 }}>
      <style>{GLOBAL}</style>
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(212,175,55,0.06) 0%, transparent 70%)" }} />

      <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      {cartOpen && <CartDrawer cart={cart} onAdd={addToCart} onRemove={removeFromCart} onClose={() => setCartOpen(false)} />}

      <main style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "40px 32px 80px" }}>

        <SectionHeading sub="Curated divine collections for every occasion">Featured Collections</SectionHeading>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18, marginBottom: 56 }}>
          {CAROUSELS.map((c, i) => <Carousel key={c.id} data={c} animDelay={i * 0.1} />)}
        </div>

        {selectedCat ? (
          <ProductList cat={selectedCat} cart={cart} onAdd={addToCart} onRemove={removeFromCart} onBack={() => setSelectedCat(null)} />
        ) : (
          <>
            <SectionHeading sub="Browse our sacred product categories">Our Collections</SectionHeading>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(185px,1fr))", gap: 16 }}>
              {CATEGORIES.map((cat, i) => (
                <CategoryCard key={cat.id} cat={cat} onClick={setSelectedCat} animDelay={i * 0.07} />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
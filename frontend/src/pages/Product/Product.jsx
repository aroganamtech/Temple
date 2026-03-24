import { useState } from "react";

/* ─────────────────────────────────────────────
   THEME — White & Gold, Warm Ivory
───────────────────────────────────────────── */
const T = {
  bg:          "#FAF7F2",
  bgAlt:       "#F5F0E8",
  surface:     "#FFFFFF",
  surfaceAlt:  "#FDF9F4",
  border:      "#E8DFC8",
  borderStrong:"#C9A84C",
  gold:        "#B8860B",
  goldMid:     "#D4AF37",
  goldLight:   "#E6C76B",
  goldPale:    "#FDF3D0",
  goldShimmer: "#F5C542",
  text:        "#1A1208",
  textSec:     "#6B5B3E",
  textDis:     "#A8956E",
};

const GLOBAL = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #FAF7F2; }
  input::placeholder { color: #A8956E; }
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
`;

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const CAROUSELS = [
  {
    id: 1,
    slides: [
      { label:"Sacred Texts",    sub:"Ancient Wisdom",      emoji:"📖" },
      { label:"Vedic Hymns",     sub:"Divine Chants",       emoji:"🕉️" },
      { label:"Holy Scriptures", sub:"Timeless Knowledge",  emoji:"📿" },
    ],
  },
  {
    id: 2,
    slides: [
      { label:"Temple Prasadham", sub:"Blessed Offerings",  emoji:"🍯" },
      { label:"Sacred Sweets",    sub:"Divine Taste",       emoji:"🪔" },
      { label:"Holy Water",       sub:"Tirtha Prasad",      emoji:"🏺" },
    ],
  },
  {
    id: 3,
    slides: [
      { label:"Divine Idols",   sub:"Sacred Sculptures",  emoji:"🛕" },
      { label:"Prayer Malas",   sub:"Sacred Beads",       emoji:"📿" },
      { label:"Holy Portraits", sub:"Blessed Images",     emoji:"🖼️" },
    ],
  },
];

const CATEGORIES = [
  {
    id:"books", icon:"📖", label:"Books", desc:"Sacred texts & Vedic literature",
    items:[
      { id:1, name:"Bhagavad Gita (English)",  price:"₹299",  desc:"18 chapters with commentary",   emoji:"📗" },
      { id:2, name:"Ramayana — Full Edition",  price:"₹499",  desc:"Valmiki's original translation", emoji:"📘" },
      { id:3, name:"Vishnu Sahasranama",        price:"₹199",  desc:"1000 names with meaning",        emoji:"📙" },
      { id:4, name:"Shiva Purana",             price:"₹399",  desc:"Complete sacred narrative",       emoji:"📕" },
      { id:5, name:"Devi Mahatmyam",           price:"₹249",  desc:"Durga Saptashati text",           emoji:"📒" },
      { id:6, name:"Rigveda Hymns",            price:"₹599",  desc:"Ancient Sanskrit hymns",          emoji:"📔" },
    ],
  },
  {
    id:"prasadham", icon:"🍯", label:"Prasadham", desc:"Temple-blessed sacred offerings",
    items:[
      { id:1, name:"Panchamrit Mix",      price:"₹149", desc:"5 sacred ingredients blend", emoji:"🥛" },
      { id:2, name:"Temple Modak",        price:"₹199", desc:"Ganesh's favourite sweet",   emoji:"🍬" },
      { id:3, name:"Tirupati Laddu",      price:"₹299", desc:"Authentic besan laddu",      emoji:"🍡" },
      { id:4, name:"Charnamrit",          price:"₹99",  desc:"Holy water with herbs",      emoji:"🏺" },
      { id:5, name:"Satyanarayan Prasad", price:"₹179", desc:"Semolina & jaggery mix",     emoji:"🍮" },
      { id:6, name:"Pongal Prasad",       price:"₹129", desc:"Sacred rice offering",       emoji:"🍚" },
    ],
  },
  {
    id:"pooja", icon:"🪔", label:"Pooja Items", desc:"Ritual tools & sacred supplies",
    items:[
      { id:1, name:"Brass Diya Set (12pc)",   price:"₹649", desc:"Hand-crafted temple lamps",  emoji:"🪔" },
      { id:2, name:"Camphor Tablets (100pc)", price:"₹89",  desc:"Pure white camphor",          emoji:"⬜" },
      { id:3, name:"Sandalwood Incense",      price:"₹129", desc:"Premium agarbatti sticks",    emoji:"🌿" },
      { id:4, name:"Brass Kalash",            price:"₹899", desc:"Sacred water vessel",         emoji:"🏺" },
      { id:5, name:"Kumkum & Turmeric Set",  price:"₹149", desc:"Auspicious ritual powders",   emoji:"🔴" },
      { id:6, name:"Copper Puja Plate",       price:"₹549", desc:"Engraved thali with spoon",   emoji:"🥃" },
    ],
  },
  {
    id:"statue", icon:"🛕", label:"Statues", desc:"Divine idols & sacred sculptures",
    items:[
      { id:1, name:"Ganesha — Brass 6\"",    price:"₹1,299", desc:"Sitting pose, antique finish", emoji:"🐘" },
      { id:2, name:"Lakshmi — Marble 8\"",   price:"₹2,499", desc:"White marble, gold detailing", emoji:"🌺" },
      { id:3, name:"Shiva Lingam — Crystal", price:"₹3,999", desc:"Sphatik crystal, natural",     emoji:"🔮" },
      { id:4, name:"Saraswati — Bronze 10\"",price:"₹4,299", desc:"Playing veena, intricate work",emoji:"🎵" },
      { id:5, name:"Hanuman — Brass 12\"",   price:"₹2,199", desc:"Standing pose, red flag",      emoji:"🙏" },
      { id:6, name:"Nataraja — Panchaloga",  price:"₹5,999", desc:"Dancing Shiva, five metals",   emoji:"💃" },
    ],
  },
  {
    id:"images", icon:"🖼️", label:"Images", desc:"Blessed portraits & holy prints",
    items:[
      { id:1, name:"Tirupati Balaji Print",   price:"₹299", desc:"12×16\", UV coated, framed",  emoji:"🌟" },
      { id:2, name:"Goddess Durga Canvas",    price:"₹499", desc:"18×24\", premium canvas",      emoji:"⚡" },
      { id:3, name:"Om Namah Shivaya Scroll", price:"₹199", desc:"Gold leaf embossed, 36\"",     emoji:"🕉️" },
      { id:4, name:"Radha Krishna Painting",  price:"₹649", desc:"Hand-painted, 16×20\"",        emoji:"💛" },
      { id:5, name:"Saibaba Photo Frame",     price:"₹349", desc:"Teak wood frame, 10×12\"",     emoji:"🪬" },
      { id:6, name:"Ashtavinayak Set",        price:"₹799", desc:"8 Ganesh photos, framed set",  emoji:"🐘" },
    ],
  },
  {
    id:"mala", icon:"📿", label:"Mala", desc:"Sacred prayer beads & garlands",
    items:[
      { id:1, name:"Rudraksha Mala — 108", price:"₹999",   desc:"Original 5-mukhi beads",   emoji:"📿" },
      { id:2, name:"Tulsi Mala — 108",     price:"₹299",   desc:"Holy basil, handstrung",    emoji:"🌿" },
      { id:3, name:"Sphatik Mala — 108",   price:"₹1,499", desc:"Crystal quartz beads",      emoji:"🔮" },
      { id:4, name:"Sandal Wood Mala",     price:"₹799",   desc:"Fragrant, 10mm beads",      emoji:"🪵" },
      { id:5, name:"Gold Plated Mala",     price:"₹2,199", desc:"Temple-grade brass beads",  emoji:"✨" },
      { id:6, name:"Lotus Seed Mala",      price:"₹449",   desc:"Kamal gatta, 108 beads",    emoji:"🪷" },
    ],
  },
];

/* ─────────────────────────────────────────────
   HOOK
───────────────────────────────────────────── */
function useHover() {
  const [h, set] = useState(false);
  return [h, { onMouseEnter:()=>set(true), onMouseLeave:()=>set(false) }];
}

/* ─────────────────────────────────────────────
   ORNAMENT DIVIDER
───────────────────────────────────────────── */
function GoldDivider({ style={} }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:10, ...style }}>
      <div style={{ flex:1, height:1, background:`linear-gradient(90deg,transparent,${T.goldMid}55)` }}/>
      <span style={{ color:T.goldMid, fontSize:11, opacity:0.75 }}>✦</span>
      <div style={{ flex:1, height:1, background:`linear-gradient(90deg,${T.goldMid}55,transparent)` }}/>
    </div>
  );
}

/* ─────────────────────────────────────────────
   CAROUSEL
───────────────────────────────────────────── */
function Carousel({ data, animDelay }) {
  const [cur, setCur] = useState(0);
  const len = data.slides.length;
  const prev = () => setCur(c=>(c-1+len)%len);
  const next = () => setCur(c=>(c+1)%len);

  return (
    <div style={{
      background:T.surface,
      borderRadius:16,
      overflow:"hidden",
      border:`1px solid ${T.border}`,
      boxShadow:"0 2px 14px rgba(184,134,11,0.07)",
      animation:`fadeUp 0.5s ease ${animDelay}s both`,
    }}>
      <div style={{ overflow:"hidden", position:"relative" }}>
        <div style={{ display:"flex", transform:`translateX(-${cur*100}%)`, transition:"transform 0.5s cubic-bezier(0.4,0,0.2,1)" }}>
          {data.slides.map((s,i)=>(
            <div key={i} style={{
              minWidth:"100%",
              background:`linear-gradient(160deg, ${T.goldPale} 0%, ${T.bgAlt} 100%)`,
              padding:"38px 24px 30px",
              display:"flex", flexDirection:"column", alignItems:"center", gap:10,
              position:"relative",
            }}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,transparent,${T.goldMid},transparent)` }}/>
              <div style={{
                width:64, height:64, borderRadius:"50%",
                background:"rgba(212,175,55,0.1)",
                border:`1.5px solid ${T.goldLight}`,
                display:"flex", alignItems:"center", justifyContent:"center", fontSize:28,
              }}>{s.emoji}</div>
              <div style={{ fontFamily:"'Cinzel',serif", fontSize:15, fontWeight:600, color:T.gold, letterSpacing:2, textAlign:"center" }}>{s.label}</div>
              <div style={{ fontSize:10, color:T.textDis, letterSpacing:3, textTransform:"uppercase" }}>{s.sub}</div>
            </div>
          ))}
        </div>
        {[{s:"‹",fn:prev,p:{left:10}},{s:"›",fn:next,p:{right:10}}].map((a,i)=>(
          <SlideArrow key={i} sym={a.s} fn={a.fn} pos={a.p}/>
        ))}
      </div>
      <div style={{ display:"flex", justifyContent:"center", gap:6, padding:"11px 0 13px", background:T.surfaceAlt, borderTop:`1px solid ${T.border}` }}>
        {data.slides.map((_,i)=>(
          <button key={i} onClick={()=>setCur(i)} style={{
            width:i===cur?20:6, height:6,
            borderRadius:i===cur?3:"50%",
            background:i===cur?T.goldMid:T.border,
            border:"none", cursor:"pointer", padding:0, transition:"all 0.3s",
          }}/>
        ))}
      </div>
    </div>
  );
}

function SlideArrow({ sym, fn, pos }) {
  const [h,hp] = useHover();
  return (
    <button {...hp} onClick={fn} style={{
      position:"absolute", top:"50%", transform:"translateY(-50%)", ...pos,
      width:30, height:30, borderRadius:"50%",
      background:h?T.goldMid:"rgba(255,255,255,0.9)",
      border:`1px solid ${h?T.goldMid:T.border}`,
      color:h?"#fff":T.gold, fontSize:18, cursor:"pointer",
      display:"flex", alignItems:"center", justifyContent:"center",
      transition:"all 0.2s", zIndex:2,
      boxShadow:"0 2px 8px rgba(0,0,0,0.08)",
    }}>{sym}</button>
  );
}

/* ─────────────────────────────────────────────
   CATEGORY CARD
───────────────────────────────────────────── */
function CategoryCard({ cat, onClick, animDelay }) {
  const [h,hp] = useHover();
  return (
    <div {...hp} onClick={()=>onClick(cat)} style={{
      background:h?T.goldPale:T.surface,
      borderRadius:14,
      padding:"28px 16px 22px",
      border:`1.5px solid ${h?T.goldMid:T.border}`,
      cursor:"pointer",
      display:"flex", flexDirection:"column", alignItems:"center", gap:10, textAlign:"center",
      transform:h?"translateY(-5px)":"translateY(0)",
      boxShadow:h?"0 14px 36px rgba(184,134,11,0.14), 0 2px 8px rgba(0,0,0,0.05)":"0 1px 4px rgba(0,0,0,0.04)",
      transition:"all 0.28s",
      animation:`fadeUp 0.5s ease ${animDelay}s both`,
      position:"relative", overflow:"hidden",
    }}>
      <div style={{
        position:"absolute", top:0, left:0, right:0, height:2,
        background:h?`linear-gradient(90deg,transparent,${T.goldMid},transparent)`:"transparent",
        transition:"background 0.3s",
      }}/>
      <div style={{
        width:58, height:58, borderRadius:"50%",
        background:h?"rgba(212,175,55,0.16)":"rgba(212,175,55,0.06)",
        border:`1.5px solid ${h?T.goldMid:T.border}`,
        display:"flex", alignItems:"center", justifyContent:"center",
        fontSize:24, transition:"all 0.3s",
        animation:h?"goldPulse 2s ease infinite":"none",
      }}>{cat.icon}</div>
      <div style={{ fontFamily:"'Cinzel',serif", fontSize:13, fontWeight:600, color:h?T.gold:T.text, letterSpacing:1.5, transition:"color 0.3s" }}>
        {cat.label}
      </div>
      <div style={{ fontSize:11, color:T.textDis, lineHeight:1.6 }}>{cat.desc}</div>
      <div style={{ fontSize:10, letterSpacing:2, textTransform:"uppercase", color:h?T.goldMid:T.textDis, display:"flex", alignItems:"center", gap:3, transition:"color 0.3s", marginTop:2 }}>
        Explore <span style={{fontSize:13}}>›</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PRODUCT LIST
───────────────────────────────────────────── */
function ProductList({ cat, cart, onAdd, onBack }) {
  return (
    <div style={{ animation:"fadeUp 0.4s ease both" }}>
      <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:18 }}>
        <BackBtn onClick={onBack}/>
        <div>
          <div style={{ fontFamily:"'Cinzel',serif", fontSize:20, fontWeight:600, color:T.gold, letterSpacing:1 }}>
            {cat.icon} {cat.label}
          </div>
          <div style={{ fontSize:12, color:T.textDis, marginTop:2 }}>{cat.desc}</div>
        </div>
      </div>
      <GoldDivider style={{ marginBottom:28 }}/>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(270px,1fr))", gap:16 }}>
        {cat.items.map((item,i)=>(
          <ProductCard key={item.id} item={item} catId={cat.id} cart={cart} onAdd={onAdd} delay={i*0.05}/>
        ))}
      </div>
    </div>
  );
}

function ProductCard({ item, catId, cart, onAdd, delay }) {
  const [h,hp] = useHover();
  const [added, setAdded] = useState(false);
  const key = `${catId}-${item.id}`;
  const qty = cart[key]||0;

  const handleAdd = () => {
    onAdd(key);
    setAdded(true);
    setTimeout(()=>setAdded(false), 950);
  };

  return (
    <div {...hp} style={{
      background:T.surface,
      borderRadius:12,
      border:`1px solid ${h?T.goldMid:T.border}`,
      padding:"16px",
      display:"flex", alignItems:"flex-start", gap:14,
      transform:h?"translateY(-3px)":"none",
      boxShadow:h?"0 10px 28px rgba(184,134,11,0.12)":"0 1px 4px rgba(0,0,0,0.04)",
      transition:"all 0.25s",
      animation:`fadeUp 0.4s ease ${delay}s both`,
    }}>
      <div style={{
        width:50, height:50, borderRadius:10, flexShrink:0,
        background:h?T.goldPale:T.bgAlt,
        border:`1px solid ${h?T.goldLight:T.border}`,
        display:"flex", alignItems:"center", justifyContent:"center",
        fontSize:22, transition:"all 0.3s",
        transform:h?"scale(1.08)":"scale(1)",
      }}>{item.emoji}</div>
      <div style={{ flex:1, minWidth:0 }}>
        <div style={{ fontFamily:"'Cinzel',serif", fontSize:13, fontWeight:500, color:T.text, marginBottom:3, lineHeight:1.4 }}>{item.name}</div>
        <div style={{ fontSize:11, color:T.textDis, marginBottom:10 }}>{item.desc}</div>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div style={{ fontFamily:"'Cinzel',serif", fontSize:16, fontWeight:600, color:T.gold }}>{item.price}</div>
          <div style={{ display:"flex", alignItems:"center", gap:8 }}>
            {qty>0 && (
              <span style={{ fontSize:11, color:T.gold, background:T.goldPale, border:`1px solid ${T.goldLight}`, padding:"1px 8px", borderRadius:20 }}>×{qty}</span>
            )}
            <AddBtn added={added} onClick={handleAdd}/>
          </div>
        </div>
      </div>
    </div>
  );
}

function AddBtn({ added, onClick }) {
  const [h,hp] = useHover();
  return (
    <button {...hp} onClick={onClick} style={{
      height:30, padding:"0 13px", borderRadius:20,
      background:added?"#4a9e5c":h?T.gold:T.goldMid,
      border:"none", color:"#fff",
      fontSize:11, fontWeight:500, letterSpacing:0.5,
      cursor:"pointer", transition:"all 0.2s",
      display:"flex", alignItems:"center", gap:4,
      boxShadow:h&&!added?"0 3px 10px rgba(212,175,55,0.3)":"none",
    }}>{added?"✓ Added":"+ Cart"}</button>
  );
}

function BackBtn({ onClick }) {
  const [h,hp] = useHover();
  return (
    <button {...hp} onClick={onClick} style={{
      width:36, height:36, borderRadius:"50%",
      background:h?T.goldPale:T.surface,
      border:`1.5px solid ${h?T.goldMid:T.border}`,
      color:T.gold, fontSize:18, cursor:"pointer",
      display:"flex", alignItems:"center", justifyContent:"center",
      transition:"all 0.2s", flexShrink:0,
      boxShadow:h?"0 3px 10px rgba(184,134,11,0.15)":"none",
    }}>‹</button>
  );
}

/* ─────────────────────────────────────────────
   CART DRAWER
───────────────────────────────────────────── */
function CartDrawer({ cart, onClose }) {
  const allItems = CATEGORIES.flatMap(c=>c.items.map(i=>({...i,catId:c.id,catLabel:c.label})));
  const entries = Object.entries(cart).filter(([,q])=>q>0).map(([key,qty])=>{
    const [catId,id]=key.split("-");
    const item=allItems.find(i=>i.catId===catId&&String(i.id)===id);
    return {...item,qty,key};
  });
  const total = entries.reduce((s,e)=>s+e.qty*parseInt(e.price.replace(/[₹,]/g,"")),0);

  return (
    <div style={{ position:"fixed", inset:0, zIndex:300, display:"flex", justifyContent:"flex-end" }}>
      <div onClick={onClose} style={{ position:"absolute", inset:0, background:"rgba(26,18,8,0.3)", backdropFilter:"blur(3px)" }}/>
      <div style={{
        position:"relative", width:370, height:"100%",
        background:T.surface,
        borderLeft:`1px solid ${T.border}`,
        display:"flex", flexDirection:"column",
        boxShadow:"-8px 0 40px rgba(184,134,11,0.1)",
        overflowY:"auto",
        animation:"fadeUp 0.3s ease both",
      }}>
        <div style={{ padding:"18px 24px 16px", borderBottom:`1px solid ${T.border}`, display:"flex", alignItems:"center", justifyContent:"space-between", background:T.surfaceAlt }}>
          <div>
            <div style={{ fontFamily:"'Cinzel',serif", fontSize:15, fontWeight:600, color:T.gold, letterSpacing:1 }}>Your Cart</div>
            <div style={{ fontSize:11, color:T.textDis, marginTop:1 }}>{entries.length} item(s)</div>
          </div>
          <button onClick={onClose} style={{ background:"none", border:"none", color:T.textDis, fontSize:20, cursor:"pointer" }}>✕</button>
        </div>

        <div style={{ flex:1, padding:"16px 20px", display:"flex", flexDirection:"column", gap:10 }}>
          {entries.length===0?(
            <div style={{ textAlign:"center", color:T.textDis, fontSize:13, marginTop:48 }}>
              <div style={{ fontSize:40, marginBottom:12 }}>🪔</div>
              <div style={{ fontFamily:"'Cinzel',serif", fontSize:14, color:T.textSec }}>Cart is empty</div>
              <div style={{ fontSize:12, marginTop:6 }}>Add sacred items to begin</div>
            </div>
          ):entries.map(e=>(
            <div key={e.key} style={{ display:"flex", gap:12, alignItems:"center", padding:"12px 14px", background:T.bgAlt, borderRadius:10, border:`1px solid ${T.border}` }}>
              <span style={{ fontSize:22 }}>{e.emoji}</span>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:12, color:T.text, fontFamily:"'Cinzel',serif", lineHeight:1.3 }}>{e.name}</div>
                <div style={{ fontSize:11, color:T.textDis }}>{e.catLabel}</div>
              </div>
              <div style={{ textAlign:"right" }}>
                <div style={{ fontSize:13, color:T.gold, fontFamily:"'Cinzel',serif" }}>{e.price}</div>
                <div style={{ fontSize:11, color:T.textDis }}>×{e.qty}</div>
              </div>
            </div>
          ))}
        </div>

        {entries.length>0&&(
          <div style={{ padding:"16px 20px 24px", borderTop:`1px solid ${T.border}`, background:T.surfaceAlt }}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:14, alignItems:"center" }}>
              <span style={{ color:T.textSec, fontSize:13 }}>Total Amount</span>
              <span style={{ fontFamily:"'Cinzel',serif", fontSize:20, color:T.gold }}>₹{total.toLocaleString()}</span>
            </div>
            <CheckoutBtn/>
          </div>
        )}
      </div>
    </div>
  );
}

function CheckoutBtn() {
  const [h,hp] = useHover();
  return (
    <button {...hp} style={{
      width:"100%", padding:"13px",
      background:h?`linear-gradient(135deg,${T.gold},${T.goldShimmer})`:`linear-gradient(135deg,${T.goldMid},${T.gold})`,
      border:"none", borderRadius:8,
      fontFamily:"'Cinzel',serif", fontSize:13, fontWeight:600,
      color:"#fff", letterSpacing:1.5, textTransform:"uppercase",
      cursor:"pointer", transition:"all 0.2s",
      boxShadow:h?"0 6px 20px rgba(184,134,11,0.35)":"0 2px 8px rgba(184,134,11,0.2)",
    }}>Proceed to Checkout</button>
  );
}

/* ─────────────────────────────────────────────
   SEARCH BAR
───────────────────────────────────────────── */
function SearchBar() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [h,hp] = useHover();

  return (
    <div style={{
      background:T.surface,
      borderRadius:18,
      padding:"40px 48px",
      border:`1px solid ${T.border}`,
      boxShadow:"0 4px 24px rgba(184,134,11,0.07)",
      position:"relative", overflow:"hidden",
      animation:"fadeUp 0.5s ease 0.35s both",
    }}>
      <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,transparent 10%,${T.goldMid} 50%,transparent 90%)` }}/>

      <div style={{ textAlign:"center", marginBottom:26 }}>
        <div style={{ fontFamily:"'Cinzel',serif", fontSize:26, fontWeight:600, color:T.text, marginBottom:8, letterSpacing:1 }}>
          Find Sacred Items
        </div>
        <GoldDivider style={{ maxWidth:200, margin:"0 auto 10px" }}/>
        <div style={{ fontSize:13, color:T.textDis }}>Search across our entire divine collection</div>
      </div>

      <div style={{ position:"relative", maxWidth:600, margin:"0 auto" }}>
        <span style={{ position:"absolute", left:18, top:"50%", transform:"translateY(-50%)", color:T.goldMid, fontSize:15, pointerEvents:"none" }}>🔍</span>
        <input
          value={query}
          onChange={e=>setQuery(e.target.value)}
          onFocus={()=>setFocused(true)}
          onBlur={()=>setFocused(false)}
          onKeyDown={e=>e.key==="Enter"&&query.trim()&&alert(`Searching: "${query}"`)}
          placeholder="Search books, malas, statues, prasadham…"
          style={{
            width:"100%",
            background:focused?"#fff":T.bgAlt,
            border:`1.5px solid ${focused?T.goldMid:T.border}`,
            borderRadius:50,
            padding:"14px 130px 14px 48px",
            color:T.text, fontFamily:"'DM Sans',sans-serif",
            fontSize:14, outline:"none",
            boxShadow:focused?"0 0 0 3px rgba(212,175,55,0.12),0 4px 12px rgba(0,0,0,0.05)":"none",
            transition:"all 0.3s",
          }}
        />
        <button {...hp}
          onClick={()=>query.trim()&&alert(`Searching: "${query}"`)}
          style={{
            position:"absolute", right:5, top:"50%", transform:"translateY(-50%)",
            background:h?`linear-gradient(135deg,${T.gold},${T.goldShimmer})`:`linear-gradient(135deg,${T.goldMid},${T.gold})`,
            border:"none", borderRadius:50,
            padding:"9px 22px",
            color:"#fff", fontFamily:"'Cinzel',serif",
            fontSize:12, fontWeight:600, letterSpacing:1,
            cursor:"pointer", transition:"all 0.2s",
            boxShadow:h?"0 4px 14px rgba(184,134,11,0.35)":"0 2px 6px rgba(184,134,11,0.2)",
          }}
        >Search</button>
      </div>

      <div style={{ display:"flex", gap:8, justifyContent:"center", flexWrap:"wrap", marginTop:18 }}>
        <span style={{ fontSize:11, color:T.textDis, alignSelf:"center", letterSpacing:1 }}>Trending:</span>
        {["Rudraksha Mala","Bhagavad Gita","Brass Diya","Tirupati Laddu","Ganesha Idol"].map(tag=>(
          <QuickTag key={tag} onClick={()=>setQuery(tag)}>{tag}</QuickTag>
        ))}
      </div>
    </div>
  );
}

function QuickTag({ children, onClick }) {
  const [h,hp] = useHover();
  return (
    <button {...hp} onClick={onClick} style={{
      background:h?T.goldPale:T.bgAlt,
      border:`1px solid ${h?T.goldMid:T.border}`,
      borderRadius:50, padding:"5px 14px",
      fontSize:12, color:h?T.gold:T.textSec,
      cursor:"pointer", transition:"all 0.2s",
      fontFamily:"'DM Sans',sans-serif",
    }}>{children}</button>
  );
}

/* ─────────────────────────────────────────────
   SECTION HEADING
───────────────────────────────────────────── */
function SectionHeading({ children, sub }) {
  return (
    <div style={{ marginBottom:28, animation:"fadeUp 0.5s ease both" }}>
      <div style={{ fontFamily:"'Cinzel',serif", fontSize:26, fontWeight:600, color:T.text, letterSpacing:1 }}>{children}</div>
      {sub && <div style={{ fontSize:13, color:T.textDis, marginTop:5 }}>{sub}</div>}
      <div style={{ height:2, width:56, background:`linear-gradient(90deg,${T.goldMid},transparent)`, borderRadius:2, marginTop:10 }}/>
    </div>
  );
}

/* ─────────────────────────────────────────────
   HEADER
───────────────────────────────────────────── */
function Header({ cartCount, onCartOpen }) {
  return (
    <header style={{
      position:"sticky", top:0, zIndex:200,
      background:"rgba(250,247,242,0.97)",
      backdropFilter:"blur(16px)",
      borderBottom:`1px solid ${T.border}`,
      padding:"0 40px",
      display:"flex", alignItems:"center", justifyContent:"space-between",
      height:62,
      boxShadow:"0 1px 12px rgba(184,134,11,0.07)",
    }}>
      

      {/* Ornament */}
      <div style={{ flex:1, display:"flex", justifyContent:"center", alignItems:"center", gap:10 }}>
        <div style={{ width:48, height:1, background:`linear-gradient(90deg,transparent,${T.goldMid}45)` }}/>
        <span style={{ color:`${T.goldMid}60`, fontSize:13 }}>✦</span>
        <div style={{ width:48, height:1, background:`linear-gradient(90deg,${T.goldMid}45,transparent)` }}/>
      </div>

      {/* Cart only */}
      <CartIconBtn count={cartCount} onClick={onCartOpen}/>
    </header>
  );
}

function CartIconBtn({ count, onClick }) {
  const [h,hp] = useHover();
  return (
    <button {...hp} onClick={onClick} style={{
      position:"relative",
      width:42, height:42, borderRadius:"50%",
      background:h?T.goldPale:T.surface,
      border:`1.5px solid ${h?T.goldMid:T.border}`,
      cursor:"pointer",
      display:"flex", alignItems:"center", justifyContent:"center",
      fontSize:18, transition:"all 0.2s",
      boxShadow:h?"0 4px 14px rgba(184,134,11,0.18)":"0 1px 4px rgba(0,0,0,0.06)",
    }}>
      🛒
      {count>0&&(
        <span style={{
          position:"absolute", top:-4, right:-4,
          width:19, height:19, borderRadius:"50%",
          background:T.gold, color:"#fff",
          fontSize:10, fontWeight:700,
          display:"flex", alignItems:"center", justifyContent:"center",
          boxShadow:"0 2px 6px rgba(184,134,11,0.4)",
        }}>{count}</span>
      )}
    </button>
  );
}

/* ─────────────────────────────────────────────
   ROOT
───────────────────────────────────────────── */
export default function TempleStore() {
  const [selectedCat, setSelectedCat] = useState(null);
  const [cart, setCart]               = useState({});
  const [cartOpen, setCartOpen]       = useState(false);

  const cartCount = Object.values(cart).reduce((s,q)=>s+q, 0);
  const addToCart = key => setCart(prev=>({...prev,[key]:(prev[key]||0)+1}));

  return (
    <div style={{ background:T.bg, color:T.text, minHeight:"100vh", fontFamily:"'DM Sans',sans-serif", fontSize:14 }}>
      <style>{GLOBAL}</style>

      {/* Warm ambient glow */}
      <div style={{
        position:"fixed", inset:0, pointerEvents:"none", zIndex:0,
        background:"radial-gradient(ellipse 70% 40% at 50% 0%, rgba(212,175,55,0.06) 0%, transparent 70%)",
      }}/>

      <Header cartCount={cartCount} onCartOpen={()=>setCartOpen(true)}/>
      {cartOpen && <CartDrawer cart={cart} onClose={()=>setCartOpen(false)}/>}

      <main style={{ position:"relative", zIndex:1, maxWidth:1280, margin:"0 auto", padding:"44px 36px 80px" }}>

        {/* CAROUSELS */}
        <SectionHeading sub="Curated divine collections for every occasion">Featured Collections</SectionHeading>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:18, marginBottom:64 }}>
          {CAROUSELS.map((c,i)=><Carousel key={c.id} data={c} animDelay={i*0.1}/>)}
        </div>

        {/* CATEGORIES / PRODUCT LIST */}
        {selectedCat ? (
          <ProductList cat={selectedCat} cart={cart} onAdd={addToCart} onBack={()=>setSelectedCat(null)}/>
        ) : (
          <>
            <SectionHeading sub="Browse our sacred product categories">Our Collections</SectionHeading>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(185px,1fr))", gap:16, marginBottom:64 }}>
              {CATEGORIES.map((cat,i)=>(
                <CategoryCard key={cat.id} cat={cat} onClick={setSelectedCat} animDelay={i*0.07}/>
              ))}
            </div>
          </>
        )}

        {/* SEARCH */}
        <SearchBar/>
      </main>
    </div>
  );
}

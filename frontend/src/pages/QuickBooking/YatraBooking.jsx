import { useState, useEffect, useRef, useMemo } from "react";

/* ─────────────────────────────────────────────
   DESIGN TOKENS  —  Cream × Gold × Professional
   Typography System per spec
───────────────────────────────────────────── */
const T = {
  bg:        "#F5F0E8",
  bgCard:    "#FFFFFF",
  bgSurface: "#FAF7F2",
  bgDark:    "#1A1510",
  border:    "#E2D5C0",
  gold:      "#D4AF37",
  goldSoft:  "#C9A227",
  goldHover: "#E8C444",
  textDark:  "#2C2010",
  textBody:  "#3D3020",
  textMuted: "#7A6A50",
  textCaption:"#AAAAAA",
};

const FONT = {
  h1:   "'Playfair Display', Georgia, serif",
  h2h3: "'Poppins', Inter, sans-serif",
  body: "'Inter', Roboto, sans-serif",
  sm:   "Roboto, Arial, sans-serif",
};

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=Roboto:wght@400;500&display=swap');

  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{background:#F5F0E8;color:#2C2010}

  ::-webkit-scrollbar{width:5px}
  ::-webkit-scrollbar-track{background:#F5F0E8}
  ::-webkit-scrollbar-thumb{background:#D4AF3750;border-radius:10px}
  ::-webkit-scrollbar-thumb:hover{background:#D4AF37}

  /* ── TYPOGRAPHY ── */
  .h1{font-family:'Playfair Display',Georgia,serif;font-size:44px;font-weight:700;line-height:1.2;color:#D4AF37}
  .h2{font-family:'Poppins',Inter,sans-serif;font-size:28px;font-weight:600;line-height:1.3;color:#C9A227}
  .h3{font-family:'Poppins',Inter,sans-serif;font-size:22px;font-weight:600;line-height:1.3;color:#C9A227}
  .body-text{font-family:'Inter',Roboto,sans-serif;font-size:16px;font-weight:400;line-height:1.6;color:#3D3020}
  .body-dark{font-family:'Inter',Roboto,sans-serif;font-size:16px;font-weight:400;line-height:1.6;color:#E6E6E6}
  .small-text{font-family:Roboto,Arial,sans-serif;font-size:13px;font-weight:400;line-height:1.4;color:#AAAAAA}
  .normal-text{font-family:'Inter',Roboto,sans-serif;font-size:14px;font-weight:400;line-height:1.6}
  @media(max-width:768px){
    .h1{font-size:30px} .h2{font-size:22px} .h3{font-size:18px}
    .body-text,.body-dark{font-size:14px} .small-text{font-size:12px}
  }

  /* ── NAV ── */
  .nav-link{color:#7A6A50;font-size:13px;font-weight:500;cursor:pointer;background:none;border:none;
    font-family:'Inter',sans-serif;padding:6px 0;position:relative;transition:color .25s}
  .nav-link::after{content:'';position:absolute;bottom:0;left:0;width:0;height:1px;background:#D4AF37;transition:width .3s}
  .nav-link:hover{color:#D4AF37}
  .nav-link:hover::after{width:100%}

  /* ── BUTTONS ── */
  .btn-gold{background:#D4AF37;color:#1A1208;border:none;cursor:pointer;
    font-family:'Poppins',sans-serif;font-weight:600;font-size:13px;
    letter-spacing:.08em;text-transform:uppercase;
    transition:all .3s cubic-bezier(.23,1,.32,1);
    display:inline-flex;align-items:center;justify-content:center;gap:8px}
  .btn-gold:hover{background:#E8C444;box-shadow:0 8px 28px rgba(212,175,55,.42);transform:translateY(-2px)}
  .btn-gold:active{transform:translateY(0)}
  .btn-outline{background:transparent;color:#D4AF37;border:1.5px solid #D4AF3760;cursor:pointer;
    font-family:'Poppins',sans-serif;font-size:12px;font-weight:500;
    letter-spacing:.07em;text-transform:uppercase;transition:all .25s;
    display:inline-flex;align-items:center;justify-content:center}
  .btn-outline:hover{background:#D4AF3712;border-color:#D4AF37}

  /* ── HERO OVERLAY ── */
  .hero-overlay{position:absolute;inset:0;
    background:linear-gradient(108deg,rgba(26,21,16,.96) 0%,rgba(26,21,16,.82) 38%,rgba(26,21,16,.42) 65%,rgba(26,21,16,.12) 100%),
              linear-gradient(to top,rgba(26,21,16,.88) 0%,transparent 40%)}

  /* ── CARDS ── */
 /* 🌿 MAIN CARD */
.temple-card{
  background:#FFFFFF;
  border:1px solid #E2D5C0;
  border-radius:14px;
  overflow:hidden;
  display:flex;
  flex-direction:column;
  cursor:pointer;
  position:relative;

  /* 🌀 animation */
  transition:all .45s cubic-bezier(.23,1,.32,1);

  /* 🌑 base shadow */
  box-shadow:
    0 6px 18px rgba(0,0,0,0.06),
    0 2px 6px rgba(0,0,0,0.08);

  /* 🌀 3D support */
  transform-style:preserve-3d;
  will-change:transform;
}

/* 🚀 HOVER EFFECT */
.temple-card:hover{
  transform:translateY(-12px) scale(1.03);
  border-color:#D4AF37;

  /* 🔥 premium shadow */
  box-shadow:
    0 25px 70px rgba(0,0,0,0.18),
    0 10px 30px rgba(212,175,55,0.28),
    inset 0 0 0 1px rgba(212,175,55,0.2);
}

/* ✨ GOLDEN GLOW */
.temple-card::after{
  content:"";
  position:absolute;
  inset:0;
  border-radius:14px;
  opacity:0;
  transition:opacity .4s ease;
  box-shadow:0 0 35px rgba(212,175,55,0.35);
  pointer-events:none;
}

.temple-card:hover::after{
  opacity:1;
}

/* ✨ SHINE EFFECT */
.card-shine{
  position:absolute;
  top:0;
  left:-100%;
  width:60%;
  height:100%;
  background:linear-gradient(
    90deg,
    transparent,
    rgba(255,255,255,.2),
    transparent
  );
  pointer-events:none;
  z-index:10;
}

@keyframes shine{
  0%{left:-100%}
  100%{left:200%}
}

.temple-card:hover .card-shine{
  animation:shine .7s ease forwards;
}

/* 🖼 IMAGE WRAPPER */
.card-img-wrap{
  position:relative;
  height:220px;
  overflow:hidden;
  background:#eee;
}

/* 🖼 IMAGE */
.card-img{
  width:100%;
  height:100%;
  object-fit:cover;

  transition:transform .7s cubic-bezier(.23,1,.32,1),
             filter .4s ease;

  filter:brightness(.9) saturate(1.05);
}

/* 🎬 IMAGE HOVER EFFECT */
.temple-card:hover .card-img{
  transform:scale(1.1);
  filter:brightness(1.08) saturate(1.25);
}

/* 🌈 IMAGE GRADIENT */
.card-gradient{
  position:absolute;
  inset:0;
  background:linear-gradient(
    to bottom,
    transparent 30%,
    rgba(0,0,0,0.8) 100%
  );
}

/* 🏷 TYPE CHIP */
.card-type-chip{
  position:absolute;
  top:12px;
  left:12px;
  z-index:5;
  padding:4px 11px;
  font-size:10px;
  font-weight:600;
  letter-spacing:.14em;
  text-transform:uppercase;
  border-radius:4px;

  background:rgba(26,21,16,.85);
  border:1px solid rgba(212,175,55,.4);
  color:#D4AF37;
  backdrop-filter:blur(6px);
}

/* 📅 DAYS CHIP */
.card-days-chip{
  position:absolute;
  top:12px;
  right:12px;
  z-index:5;
  padding:4px 11px;
  font-size:10px;
  font-weight:700;
  border-radius:4px;

  background:#D4AF37;
  color:#1A1208;
}

/* 📝 NAME BLOCK */
.card-name-block{
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  padding:18px 16px 12px;
  color:#fff;

  transform:translateZ(25px); /* 3D depth */
}

/* 📦 CONTENT */
.card-content{
  padding:18px;
  display:flex;
  flex-direction:column;
  gap:10px;
  flex:1;

  transform:translateZ(20px);
}

/* 🙏 DEITY ROW */
.card-deity-row{
  display:flex;
  align-items:center;
  gap:8px;
  padding-bottom:10px;
  border-bottom:1px solid #F0E8D8;
}

/* 💰 PRICE ROW */
.card-price-row{
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  margin-top:auto;
}

/* 🔘 BOOK BUTTON */
.c-book{
  opacity:0;
  transform:translateY(8px);
  transition:all .35s cubic-bezier(.23,1,.32,1);
  margin-top:10px;
}

/* SHOW BUTTON */
.temple-card:hover .c-book{
  opacity:1;
  transform:translateY(0);
}
  /* ── INPUTS ── */
  .gold-input{width:100%;padding:11px 14px;background:#FFFFFF;border:1px solid #E2D5C0;
    color:#2C2010;font-family:'Inter',sans-serif;font-size:14px;
    outline:none;transition:all .3s;border-radius:4px;
    box-shadow:inset 0 1px 3px rgba(0,0,0,.04)}
  .gold-input:focus{border-color:#D4AF37;box-shadow:0 0 0 3px rgba(212,175,55,.12)}
  .gold-input::placeholder{color:#B0A090}
  .gold-select{width:100%;padding:11px 14px;background:#FFFFFF;border:1px solid #E2D5C0;
    color:#2C2010;font-family:'Inter',sans-serif;font-size:14px;
    outline:none;cursor:pointer;appearance:none;transition:all .3s;border-radius:4px;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%237A6A50' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
    background-repeat:no-repeat;background-position:right 13px center;background-color:#FFFFFF;padding-right:34px;
    box-shadow:inset 0 1px 3px rgba(0,0,0,.04)}
  .gold-select:focus{border-color:#D4AF37;box-shadow:0 0 0 3px rgba(212,175,55,.12)}

  /* ── STEP DOTS ── */
  .step-dot{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;
    font-size:12px;font-weight:600;flex-shrink:0;font-family:'Poppins',sans-serif;
    transition:all .35s cubic-bezier(.34,1.56,.64,1)}
  .step-dot.done{background:#D4AF37;color:#1A1208;border:2px solid #D4AF37}
  .step-dot.active{background:#D4AF3715;color:#D4AF37;border:2px solid #D4AF37;box-shadow:0 0 0 4px #D4AF3715}
  .step-dot.idle{background:transparent;color:#C0B090;border:2px solid #E2D5C0}

  .tag-pill{display:inline-block;padding:4px 12px;background:#D4AF3715;border:1px solid #D4AF3740;
    color:#C9A227;font-size:10px;letter-spacing:.12em;font-family:'Poppins',sans-serif;
    font-weight:600;border-radius:3px;text-transform:uppercase}
  .stat-box{background:#FAF7F2;border:1px solid #E2D5C0;padding:16px 14px;text-align:center;
    border-radius:6px;transition:all .25s}
  .stat-box:hover{border-color:#D4AF3780;box-shadow:0 4px 12px rgba(212,175,55,.1)}

  /* ── SEARCH ── */
  .search-wrap{background:#FFFFFF;border:1.5px solid #E2D5C0;border-radius:6px;
    overflow:hidden;position:relative;transition:border-color .3s,box-shadow .3s;
    box-shadow:0 2px 8px rgba(0,0,0,.05)}
  .search-wrap:focus-within{border-color:#D4AF37;box-shadow:0 0 0 3px #D4AF3715,0 4px 16px rgba(0,0,0,.08)}

  /* ── CAROUSEL DOTS ── */
  .c-dot{height:3px;border-radius:2px;cursor:pointer;background:rgba(255,255,255,.28);
    transition:all .35s cubic-bezier(.23,1,.32,1);width:20px}
  .c-dot.active{width:44px;background:#D4AF37}

  .thumb-item{transition:all .3s}
  .thumb-item:hover{transform:scale(1.06)}

  /* ── ANIMATIONS ── */
  @keyframes shimmer{0%,100%{opacity:.05}50%{opacity:.1}}
  .om-bg{animation:shimmer 8s ease-in-out infinite}
  @keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
  @keyframes successPop{0%{transform:scale(.75);opacity:0}65%{transform:scale(1.04)}100%{transform:scale(1);opacity:1}}
  @keyframes successUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}

  /* ── SECTION LABEL ── */
  .sec-label{font-family:'Poppins',sans-serif;font-size:11px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:#D4AF37}

  /* ── BOOKING PANEL ── */
  .b-panel{background:#FFFFFF;border:1px solid #E2D5C0;border-radius:8px;
    padding:clamp(22px,4vw,42px);box-shadow:0 4px 24px rgba(0,0,0,.07)}

  /* ── FOOTER TRUST ── */
  .ft{font-family:Roboto,Arial,sans-serif;font-size:12px;color:#AAAAAA;letter-spacing:.04em}
`;

// Complete temple data for all 28 states (56 temples total)
const ALL_TEMPLES = [
  // TAMIL NADU (10)
  {id:1,name:"Madurai Meenakshi Amman",location:"Madurai",state:"Tamil Nadu",deity:"Goddess Meenakshi",type:"Shakti",price:3200,days:2,icon:"🏛️",desc:"The magnificent Dravidian temple with 14 gopurams adorned with thousands of sculptures.",itinerary:[{day:"Day 1",act:"Arrival, Meenakshi Amman Evening Aarti & Azhagar Koil",loc:"Madurai"},{day:"Day 2",act:"Full temple tour, Thiruparankundram, Pazhamudircholai, departure",loc:"Madurai"}]},
  {id:2,name:"Rameshwaram Ramanathaswamy",location:"Rameshwaram",state:"Tamil Nadu",deity:"Lord Shiva (Jyotirlinga)",type:"Shiva",price:6200,days:3,icon:"🌊",desc:"One of the twelve Jyotirlingas on Pamban Island, connected to the epic Ramayana.",itinerary:[{day:"Day 1",act:"Arrival, Agni Theertham holy dip at sunrise",loc:"Rameshwaram"},{day:"Day 2",act:"Ramanathaswamy Temple — 22 sacred wells, Gandhamadana Parvatham",loc:"Rameshwaram"},{day:"Day 3",act:"Dhanushkodi ruins, Pamban Bridge, departure",loc:"Dhanushkodi"}]},
  {id:3,name:"Tiruvannamalai Arunachaleswarar",location:"Tiruvannamalai",state:"Tamil Nadu",deity:"Lord Shiva (Agni Lingam)",type:"Shiva",price:2800,days:2,icon:"🔥",desc:"The sacred fire mountain Arunachala — home of Lord Shiva as the element Fire.",itinerary:[{day:"Day 1",act:"Arunachaleswarar Temple Darshan, evening Girivalam start",loc:"Tiruvannamalai"},{day:"Day 2",act:"14km Girivalam circumambulation, Ramana Ashram, departure",loc:"Tiruvannamalai"}]},
  {id:4,name:"Thanjavur Brihadeeswarar",location:"Thanjavur",state:"Tamil Nadu",deity:"Lord Shiva",type:"Shiva",price:2400,days:2,icon:"🗼",desc:"A UNESCO World Heritage Site — the 1000-year-old Chola masterpiece with 216ft vimana.",itinerary:[{day:"Day 1",act:"Brihadeeswarar Temple, Saraswathi Mahal Library",loc:"Thanjavur"},{day:"Day 2",act:"Kumbakonam Mahamaham Tank, Gangaikonda Cholapuram, departure",loc:"Kumbakonam"}]},
  {id:5,name:"Kanchipuram Kamakshi",location:"Kanchipuram",state:"Tamil Nadu",deity:"Goddess Kamakshi / Ekambareswarar",type:"Shakti",price:2600,days:2,icon:"🪷",desc:"The city of thousand temples — Kamakshi Amman, Varadharaja Perumal, Ekambareswarar.",itinerary:[{day:"Day 1",act:"Kamakshi Amman Temple, Kailasanathar Temple",loc:"Kanchipuram"},{day:"Day 2",act:"Varadharaja Perumal, Ekambareswarar Temple, departure",loc:"Kanchipuram"}]},
  {id:6,name:"Chidambaram Nataraja",location:"Chidambaram",state:"Tamil Nadu",deity:"Lord Nataraja (Akasha Lingam)",type:"Shiva",price:2500,days:2,icon:"💃",desc:"The cosmic dance of Shiva — the Akasha Lingam, one of the Pancha Bhuta Stalas.",itinerary:[{day:"Day 1",act:"Nataraja Temple, Annamalai University, evening dance performance",loc:"Chidambaram"},{day:"Day 2",act:"Pichavaram Mangroves, Sirkazhi Brahmeswara, departure",loc:"Chidambaram"}]},
  {id:7,name:"Palani Murugan",location:"Palani",state:"Tamil Nadu",deity:"Lord Murugan (Dandayuthapani)",type:"Murugan",price:2200,days:2,icon:"⚔️",desc:"The abode of Lord Murugan atop Sivagiri Hill — a major pilgrimage for Tamilians.",itinerary:[{day:"Day 1",act:"Rope car ascent, Dandayuthapani Swamy darshan, Kavadi rituals",loc:"Palani"},{day:"Day 2",act:"Kodaikanal hills, Kurinji Andavar Temple, departure",loc:"Kodaikanal"}]},
  {id:8,name:"Srirangam Sri Ranganathaswamy",location:"Srirangam",state:"Tamil Nadu",deity:"Lord Ranganatha (Vishnu)",type:"Vishnu",price:2900,days:2,icon:"🐍",desc:"The world's largest functioning Hindu temple — the reclining Vishnu on Adi Shesha.",itinerary:[{day:"Day 1",act:"Sri Ranganathaswamy Temple, Uchchi Pillayar, evening boat ride",loc:"Srirangam"},{day:"Day 2",act:"Rockfort Ucchi Pillayar, Samayapuram Mariamman, departure",loc:"Trichy"}]},
  {id:9,name:"Murugan Tiruchendur",location:"Tiruchendur",state:"Tamil Nadu",deity:"Lord Murugan (Senthilnatha)",type:"Murugan",price:2800,days:2,icon:"🌅",desc:"The shore temple of Lord Murugan on the Bay of Bengal — one of the six abodes.",itinerary:[{day:"Day 1",act:"Senthilnatha Swamy Temple, sea bath at dawn",loc:"Tiruchendur"},{day:"Day 2",act:"Kukathope Beach, Thiruchendur Murugan Cave, departure",loc:"Tiruchendur"}]},
  {id:10,name:"Swamimalai Murugan",location:"Swamimalai",state:"Tamil Nadu",deity:"Lord Murugan (Swaminatha)",type:"Murugan",price:2100,days:1,icon:"⭐",desc:"Lord Murugan taught the Pranava Mantra to his father Shiva here — near Kumbakonam.",itinerary:[{day:"Day 1",act:"Swamimalai Murugan Temple, Kumbakonam temples, departure",loc:"Swamimalai"}]},

  // ANDHRA PRADESH (3)
  {id:11,name:"Tirupati Balaji",location:"Tirupati",state:"Andhra Pradesh",deity:"Lord Venkateswara",type:"Vishnu",price:4500,days:3,icon:"⛩️",desc:"The most visited religious destination in the world, perched atop the Tirumala Hills.",itinerary:[{day:"Day 1",act:"Arrival at Tirupati, Govindaraja Swamy temple, rest",loc:"Tirupati"},{day:"Day 2",act:"Tirumala Hills darshan — Sri Venkateswara Temple, Brahmotsavam",loc:"Tirumala"},{day:"Day 3",act:"Padmavathi Temple, Sri Kalahasthi, departure",loc:"Tirupati"}]},
  {id:12,name:"Srisailam Mallikarjuna",location:"Srisailam",state:"Andhra Pradesh",deity:"Lord Shiva (Jyotirlinga)",type:"Shiva",price:4800,days:3,icon:"🏔️",desc:"The Mallikarjuna Jyotirlinga and Bhramaramba Devi temple in the Nallamala forest.",itinerary:[{day:"Day 1",act:"Arrival, Bhramaramba Devi darshan",loc:"Srisailam"},{day:"Day 2",act:"Mallikarjuna Jyotirlinga, Sakshi Ganapathi, boat ride",loc:"Srisailam"},{day:"Day 3",act:"Akkamahadevi caves, Patalaganga, departure",loc:"Srisailam"}]},
  {id:13,name:"Vijayawada Kanaka Durga",location:"Vijayawada",state:"Andhra Pradesh",deity:"Goddess Kanaka Durga",type:"Shakti",price:4200,days:2,icon:"👸",desc:"The presiding deity of Vijayawada on Indrakeeladri Hill on the banks of Krishna River.",itinerary:[{day:"Day 1",act:"Kanaka Durga Temple, Undavalli Caves, Prakasam Barrage",loc:"Vijayawada"},{day:"Day 2",act:"Amaravathi Buddhist Stupa, Amareswara Temple, departure",loc:"Amaravathi"}]},

  // TELANGANA (2)
  {id:14,name:"Yadadri Lakshmi Narasimha",location:"Yadadri",state:"Telangana",deity:"Lord Narasimha",type:"Vishnu",price:3500,days:2,icon:"🦁",desc:"The newly renovated grand temple of Lord Lakshmi Narasimha — Telangana's jewel.",itinerary:[{day:"Day 1",act:"Arrival, Lakshmi Narasimha swamy darshan, evening aarti",loc:"Yadadri"},{day:"Day 2",act:"Chaya Someshwara, Yadagirigutta hills, departure",loc:"Yadadri"}]},
  {id:15,name:"Thousand Pillar Temple",location:"Warangal",state:"Telangana",deity:"Lord Shiva, Vishnu, Surya",type:"Shiva",price:2800,days:2,icon:"🏛️",desc:"A masterpiece of Kakatiya architecture with intricate stone carvings and 1000 pillars.",itinerary:[{day:"Day 1",act:"Thousand Pillar Temple, Warangal Fort, Bhadrakali Temple",loc:"Warangal"},{day:"Day 2",act:"Ramappa Temple, Laknavaram Lake, departure",loc:"Warangal"}]},

  // KARNATAKA (3)
  {id:16,name:"Udupi Sri Krishna",location:"Udupi",state:"Karnataka",deity:"Lord Krishna",type:"Krishna",price:3800,days:3,icon:"🎶",desc:"The sacred Krishna Mutt established by Sri Madhvacharya — famous for the Paryaya festival.",itinerary:[{day:"Day 1",act:"Udupi Krishna Temple, Kanakana Kindi darshan",loc:"Udupi"},{day:"Day 2",act:"Malpe Beach, St Mary's Island, Kollur Mookambika",loc:"Kollur"},{day:"Day 3",act:"Murudeshwara Shiva temple, Gokarna beach, departure",loc:"Gokarna"}]},
  {id:17,name:"Dharmasthala Temple",location:"Dharmasthala",state:"Karnataka",deity:"Lord Manjunatha (Shiva)",type:"Shiva",price:3200,days:2,icon:"☮️",desc:"The unique temple of communal harmony — managed by a Jain family, serving all faiths.",itinerary:[{day:"Day 1",act:"Manjunatha Temple, free prasad lunch, Bahubali statue",loc:"Dharmasthala"},{day:"Day 2",act:"Kukke Subramanya, Belur Halebidu Hoysala temples, departure",loc:"Belur"}]},
  {id:18,name:"Mysore Chamundeshwari",location:"Mysore",state:"Karnataka",deity:"Goddess Chamundeshwari",type:"Shakti",price:2800,days:2,icon:"👑",desc:"Atop Chamundi Hills, the guardian goddess of Mysore — with Mahishasura statue.",itinerary:[{day:"Day 1",act:"Chamundeshwari Temple, Mysore Palace darshan",loc:"Mysore"},{day:"Day 2",act:"Nanjangud Srikanteshwara, Somnathpur temple, departure",loc:"Mysore"}]},

  // KERALA (2)
  {id:19,name:"Sabarimala Ayyappa",location:"Pathanamthitta",state:"Kerala",deity:"Lord Ayyappa",type:"Ayyappa",price:7500,days:5,icon:"🌿",desc:"The 18 sacred steps of Sabarimala — the world's second most visited pilgrimage site.",itinerary:[{day:"Day 1",act:"Arrival, Vratham initiation, Erumeli Petta Thullal",loc:"Erumeli"},{day:"Day 2-3",act:"Trek through Pamba, Sannidhanam darshan",loc:"Sabarimala"},{day:"Day 4",act:"Return trek, Pamba rituals",loc:"Pamba"},{day:"Day 5",act:"Aranmula Parthasarathi Temple, departure",loc:"Aranmula"}]},
  {id:20,name:"Guruvayur Krishna Temple",location:"Guruvayur",state:"Kerala",deity:"Lord Guruvayurappan (Krishna)",type:"Krishna",price:4200,days:3,icon:"🐘",desc:"The Dwarka of South India — the most sacred Krishna temple in Kerala.",itinerary:[{day:"Day 1",act:"Guruvayur Temple darshan, Elephant sanctuary at Punnathur Kotta",loc:"Guruvayur"},{day:"Day 2",act:"Thrissur Vadakkunnathan Temple, Pooram festival grounds",loc:"Thrissur"},{day:"Day 3",act:"Kodungallur Devi, Thirunavaya, departure",loc:"Malappuram"}]},

  // MAHARASHTRA (3)
  {id:21,name:"Shirdi Sai Baba",location:"Shirdi",state:"Maharashtra",deity:"Sai Baba",type:"Saints",price:5500,days:3,icon:"✨",desc:"The holy abode of Shirdi Sai Baba — welcoming devotees of all faiths and religions.",itinerary:[{day:"Day 1",act:"Arrival, evening Dhuni darshan, Chavadi procession",loc:"Shirdi"},{day:"Day 2",act:"Samadhi Mandir, Dwarkamai, Shani Shingnapur",loc:"Shirdi"},{day:"Day 3",act:"Nashik Trimbakeshwar Jyotirlinga, Panchavati, departure",loc:"Nashik"}]},
  {id:22,name:"Pandharpur Vitthal Rukmini",location:"Pandharpur",state:"Maharashtra",deity:"Lord Vitthal (Krishna)",type:"Vishnu",price:3800,days:2,icon:"🪗",desc:"The Wari pilgrimage — lakhs of Varkaris walking to meet Lord Vitthal of Pandharpur.",itinerary:[{day:"Day 1",act:"Vitthal Rukmini Temple, Pundalik Shrine, Chandrabhaga River bath",loc:"Pandharpur"},{day:"Day 2",act:"Akkalkot Swami Samartha, Solapur Siddharameshwar, departure",loc:"Solapur"}]},
  {id:23,name:"Trimbakeshwar Jyotirlinga",location:"Trimbak",state:"Maharashtra",deity:"Lord Shiva (Jyotirlinga)",type:"Shiva",price:4200,days:3,icon:"💧",desc:"One of the 12 Jyotirlingas at the source of Godavari River near Brahmagiri Hills.",itinerary:[{day:"Day 1",act:"Arrival at Nashik, Panchavati darshan, Ram Kund",loc:"Nashik"},{day:"Day 2",act:"Trimbakeshwar Jyotirlinga, Brahmagiri Hills trek",loc:"Trimbak"},{day:"Day 3",act:"Saptashringi Devi, Kalaram Temple, departure",loc:"Nashik"}]},

  // UTTAR PRADESH (4)
  {id:24,name:"Varanasi Kashi Vishwanath",location:"Varanasi",state:"Uttar Pradesh",deity:"Lord Shiva (Jyotirlinga)",type:"Shiva",price:5800,days:4,icon:"🪔",desc:"The eternal city of Lord Shiva — witness the divine Ganga Aarti at Dasaswamedh Ghat.",itinerary:[{day:"Day 1",act:"Arrival, Dasaswamedh Ghat evening Ganga Aarti",loc:"Varanasi"},{day:"Day 2",act:"Sunrise boat ride, Kashi Vishwanath Corridor darshan",loc:"Varanasi"},{day:"Day 3",act:"Sarnath Buddhist circuit, Sankat Mochan Temple",loc:"Sarnath"},{day:"Day 4",act:"Vindhyavasini Devi, Chunar Fort, departure",loc:"Mirzapur"}]},
  {id:25,name:"Ayodhya Ram Mandir",location:"Ayodhya",state:"Uttar Pradesh",deity:"Lord Ram",type:"Vishnu",price:4800,days:3,icon:"🏹",desc:"The newly consecrated Ram Mandir at the birthplace of Lord Ram — a historic pilgrimage.",itinerary:[{day:"Day 1",act:"Ram Mandir darshan, Ram Janmabhoomi, Kanak Bhawan",loc:"Ayodhya"},{day:"Day 2",act:"Hanumangarhi, Dashrath Mahal, Saryu Aarti & boat ride",loc:"Ayodhya"},{day:"Day 3",act:"Nageshwarnath Temple, Guptar Ghat, departure",loc:"Ayodhya"}]},
  {id:26,name:"Mathura Vrindavan Krishna",location:"Mathura",state:"Uttar Pradesh",deity:"Lord Krishna",type:"Krishna",price:5200,days:4,icon:"🎠",desc:"The sacred birthplace of Lord Krishna — Mathura, Vrindavan, Gokul, and Govardhan.",itinerary:[{day:"Day 1",act:"Krishna Janmasthan, Dwarkadhish Temple, evening aarti",loc:"Mathura"},{day:"Day 2",act:"Vrindavan — ISKCON, Banke Bihari, Radha Raman temples",loc:"Vrindavan"},{day:"Day 3",act:"Govardhan Parikrama, Kusum Sarovar",loc:"Govardhan"},{day:"Day 4",act:"Gokul, Nandagaon, Barsana Radha Rani Temple, departure",loc:"Barsana"}]},
  {id:27,name:"Prayagraj Triveni Sangam",location:"Prayagraj",state:"Uttar Pradesh",deity:"Holy Trinity of Rivers",type:"Pilgrimage",price:4500,days:3,icon:"🌊",desc:"The confluence of Ganga, Yamuna & Saraswati — Kumbh Mela's sacred grounds.",itinerary:[{day:"Day 1",act:"Triveni Sangam holy dip, Akbar Fort, Anand Bhawan",loc:"Prayagraj"},{day:"Day 2",act:"Hanuman Mandir, Mankameshwar Temple",loc:"Prayagraj"},{day:"Day 3",act:"Chitrakoot Kamadgiri Parikrama, Ram Ghat, departure",loc:"Chitrakoot"}]},

  // UTTARAKHAND (4)
  {id:28,name:"Char Dham Yatra",location:"Uttarakhand",state:"Uttarakhand",deity:"Badri · Kedara · Ganga · Yamuna",type:"Dham",price:18500,days:12,icon:"🏔️",desc:"The sacred circuit of four holy shrines in the Himalayas — a once-in-a-lifetime pilgrimage.",itinerary:[{day:"Day 1",act:"Haridwar — Evening Ganga Aarti at Har Ki Pauri",loc:"Haridwar"},{day:"Day 2-3",act:"Barkot — Yamunotri Dham Darshan & Surya Kund",loc:"Yamunotri"},{day:"Day 4-5",act:"Uttarkashi — Gangotri Dham & Gaumukh trek option",loc:"Gangotri"},{day:"Day 6-8",act:"Kedarnath — helicopter or trek, Jyotirlinga darshan",loc:"Kedarnath"},{day:"Day 9-11",act:"Badrinath Dham, Mana Village, Vasudhara Falls",loc:"Badrinath"},{day:"Day 12",act:"Return via Rishikesh, Laxman Jhula, departure",loc:"Rishikesh"}]},
  {id:29,name:"Kedarnath Jyotirlinga",location:"Kedarnath",state:"Uttarakhand",deity:"Lord Shiva (Jyotirlinga)",type:"Shiva",price:9500,days:5,icon:"❄️",desc:"The highest Jyotirlinga at 3,583m — surrounded by snow-capped Himalayan peaks.",itinerary:[{day:"Day 1",act:"Arrival Haridwar, Har Ki Pauri Ganga Aarti",loc:"Haridwar"},{day:"Day 2",act:"Drive to Sonprayag, trek/helicopter to Kedarnath",loc:"Kedarnath"},{day:"Day 3",act:"Early morning Jyotirlinga darshan, Bhairav Temple",loc:"Kedarnath"},{day:"Day 4",act:"Triyuginarayan Temple, return",loc:"Sonprayag"},{day:"Day 5",act:"Rishikesh, Parmarth Niketan Ganga Aarti, departure",loc:"Rishikesh"}]},
  {id:30,name:"Badrinath Dham",location:"Badrinath",state:"Uttarakhand",deity:"Lord Vishnu (Badrinarayan)",type:"Vishnu",price:10500,days:6,icon:"🌸",desc:"One of the Char Dhams — Lord Vishnu's abode flanked by Nar & Narayan peaks.",itinerary:[{day:"Day 1",act:"Arrival Haridwar, evening Ganga Aarti",loc:"Haridwar"},{day:"Day 2",act:"Drive through Devprayag, Srinagar, Rudraprayag",loc:"Rudraprayag"},{day:"Day 3",act:"Joshimath, Narsimha Temple, Badrinath darshan",loc:"Badrinath"},{day:"Day 4",act:"Mana Village, Vyas Gufa, Vasudhara",loc:"Mana"},{day:"Day 5",act:"Hemkund Sahib (optional), Govind Ghat",loc:"Govind Ghat"},{day:"Day 6",act:"Return Rishikesh, departure",loc:"Rishikesh"}]},
  {id:31,name:"Haridwar Rishikesh Yatra",location:"Haridwar",state:"Uttarakhand",deity:"Ganga Mata / Yoga Nagri",type:"Pilgrimage",price:4500,days:4,icon:"🕉️",desc:"Gateway to the gods — the sacred Ganga Aarti at Har Ki Pauri and ashrams of Rishikesh.",itinerary:[{day:"Day 1",act:"Mansa Devi, Chandi Devi Ropeway, Har Ki Pauri Aarti",loc:"Haridwar"},{day:"Day 2",act:"Daksha Mahadev, Sapt Sarovar, Bharat Mata Temple",loc:"Haridwar"},{day:"Day 3",act:"Parmarth Niketan, Laxman Jhula, Beatles Ashram",loc:"Rishikesh"},{day:"Day 4",act:"Neelkanth Mahadev Temple, sunset Ganga Aarti, departure",loc:"Rishikesh"}]},

  // RAJASTHAN (2)
  {id:32,name:"Pushkar Brahma Temple",location:"Pushkar",state:"Rajasthan",deity:"Lord Brahma",type:"Brahma",price:4800,days:3,icon:"🌅",desc:"The only Brahma temple in the world — with the sacred Pushkar Lake and holy Ghats.",itinerary:[{day:"Day 1",act:"Arrival, Brahma Temple darshan, Pushkar Lake bath at Ghats",loc:"Pushkar"},{day:"Day 2",act:"Savitri Mata Temple ropeway, local bazaar, camel ride",loc:"Pushkar"},{day:"Day 3",act:"Ajmer Dargah Sharif, Ana Sagar Lake, departure",loc:"Ajmer"}]},
  {id:33,name:"Nathdwara Srinathji",location:"Nathdwara",state:"Rajasthan",deity:"Lord Krishna (Srinathji)",type:"Krishna",price:5500,days:3,icon:"🎨",desc:"Pushtimarg's holiest shrine — Srinathji's form of Krishna in the Mewar region.",itinerary:[{day:"Day 1",act:"Arrival Udaipur, City Palace, Pichola Lake, Jagdish Temple",loc:"Udaipur"},{day:"Day 2",act:"Nathdwara Srinathji temple, Eklingji Temple, Haldighati",loc:"Nathdwara"},{day:"Day 3",act:"Kankroli Dwarkadheesh, Rajsamand Lake, departure",loc:"Rajsamand"}]},

  // GUJARAT (3)
  {id:34,name:"Dwarka Dwarkadhish",location:"Dwarka",state:"Gujarat",deity:"Lord Krishna (Dwarkadhish)",type:"Krishna",price:7800,days:5,icon:"🌺",desc:"The legendary kingdom of Lord Krishna — one of the four sacred Dhams of India.",itinerary:[{day:"Day 1",act:"Arrival, Dwarkadhish Temple evening aarti",loc:"Dwarka"},{day:"Day 2",act:"Rukmini Devi Temple, Gomti Ghat, Bet Dwarka island",loc:"Bet Dwarka"},{day:"Day 3",act:"Nageshwar Jyotirlinga, Gopi Talav, Sudama Temple Porbandar",loc:"Porbandar"},{day:"Day 4",act:"Somnath Jyotirlinga, Triveni Sangam, Prabhash Patan",loc:"Somnath"},{day:"Day 5",act:"Bhalka Tirth, Lokvishambhari Mata, departure",loc:"Veraval"}]},
  {id:35,name:"Somnath Jyotirlinga",location:"Somnath",state:"Gujarat",deity:"Lord Shiva (Jyotirlinga)",type:"Shiva",price:6200,days:3,icon:"🌙",desc:"The first and foremost of the 12 Jyotirlingas — the eternal temple rebuilt 7 times.",itinerary:[{day:"Day 1",act:"Arrival, Somnath Jyotirlinga darshan, evening Sound & Light show",loc:"Somnath"},{day:"Day 2",act:"Triveni Sangam, Bhalka Tirth, Gita Mandir",loc:"Somnath"},{day:"Day 3",act:"Junagadh Girnar Ropeway, Ambaji Temple, departure",loc:"Junagadh"}]},
  {id:36,name:"Ambaji Shakti Peetha",location:"Ambaji",state:"Gujarat",deity:"Goddess Ambaji",type:"Shakti",price:4800,days:3,icon:"🔔",desc:"One of the 51 Shakti Peethas — the sacred shrine of Goddess Ambaji in the Aravalli hills.",itinerary:[{day:"Day 1",act:"Arrival, Ambaji Mata Temple, Gabbar Hill, evening aarti",loc:"Ambaji"},{day:"Day 2",act:"Kumbharia Jain Temples, Koteshwar Mahadev",loc:"Ambaji"},{day:"Day 3",act:"Abu Road, Dilwara Jain Temples, Mount Abu, departure",loc:"Mount Abu"}]},

  // MADHYA PRADESH (2)
  {id:37,name:"Ujjain Mahakaleshwar",location:"Ujjain",state:"Madhya Pradesh",deity:"Lord Shiva (Jyotirlinga)",type:"Shiva",price:5500,days:3,icon:"⚡",desc:"The city of Lord Mahakal — the only south-facing Jyotirlinga with Bhasma Aarti at dawn.",itinerary:[{day:"Day 1",act:"Mahakaleshwar Temple evening aarti, Kshipra River bath",loc:"Ujjain"},{day:"Day 2",act:"4am Bhasma Aarti, Kal Bhairav, Sandipani Ashram, Mangalnath",loc:"Ujjain"},{day:"Day 3",act:"Omkareshwar Jyotirlinga, Narmada darshan, departure",loc:"Omkareshwar"}]},
  {id:38,name:"Omkareshwar Jyotirlinga",location:"Omkareshwar",state:"Madhya Pradesh",deity:"Lord Shiva (Jyotirlinga)",type:"Shiva",price:4800,days:3,icon:"🏝️",desc:"The Om-shaped island in the Narmada River — home to the 4th Jyotirlinga.",itinerary:[{day:"Day 1",act:"Arrival, Omkareshwar Jyotirlinga darshan, evening aarti",loc:"Omkareshwar"},{day:"Day 2",act:"Parikrama of the OM island, Mamleshwar Temple",loc:"Omkareshwar"},{day:"Day 3",act:"Maheshwar Ghat, Ahilya Fort, Narmada sunset, departure",loc:"Maheshwar"}]},

  // ODISHA (1)
  {id:39,name:"Puri Jagannath Dham",location:"Puri",state:"Odisha",deity:"Lord Jagannath (Krishna)",type:"Vishnu",price:6500,days:4,icon:"🌀",desc:"One of the Char Dhams — Lord Jagannath's home with the grand Rath Yatra tradition.",itinerary:[{day:"Day 1",act:"Arrival, Jagannath Temple, evening Chandana Lagi",loc:"Puri"},{day:"Day 2",act:"Morning rituals, Suna Besha viewing, Narendra Tank",loc:"Puri"},{day:"Day 3",act:"Konark Sun Temple, Chandrabhaga Beach, Sakshi Gopal",loc:"Konark"},{day:"Day 4",act:"Lingaraj Temple Bhubaneswar, Udayagiri, departure",loc:"Bhubaneswar"}]},

  // WEST BENGAL (1)
  {id:40,name:"Dakshineswar Kali Temple",location:"Kolkata",state:"West Bengal",deity:"Goddess Kali (Bhavatarini)",type:"Shakti",price:4800,days:3,icon:"🌸",desc:"The temple of Sri Ramakrishna Paramahamsa — the divine mother Bhavatarini Kali.",itinerary:[{day:"Day 1",act:"Dakshineswar Kali Temple, Belur Math, Hooghly River boat",loc:"Kolkata"},{day:"Day 2",act:"Kalighat Temple, Birla Temple, Victoria Memorial",loc:"Kolkata"},{day:"Day 3",act:"Tarakeswar Shiva, Bandel Church, Serampore, departure",loc:"Kolkata"}]},

  // JAMMU & KASHMIR (1)
  {id:41,name:"Vaishno Devi",location:"Katra",state:"Jammu & Kashmir",deity:"Goddess Vaishno Devi",type:"Shakti",price:8500,days:4,icon:"🏔️",desc:"The most visited Shakti Peetha — the 14km trek to the sacred cave of Mother Vaishno.",itinerary:[{day:"Day 1",act:"Arrival Jammu, Raghunath Temple, Bahu Fort Temple",loc:"Jammu"},{day:"Day 2",act:"Katra, begin trek — Banganga, Ardhkuwari cave, Sanjichhat",loc:"Katra"},{day:"Day 3",act:"Bhavan darshan — Pindaroo cave, Mata's Pindis, Bhairavnath Temple",loc:"Bhavan"},{day:"Day 4",act:"Return to Katra, Shiv Khori Cave Temple, departure",loc:"Katra"}]},

  // PUNJAB (1)
  {id:42,name:"Amritsar Golden Temple",location:"Amritsar",state:"Punjab",deity:"Guru Granth Sahib (Sikh)",type:"Sikh",price:5200,days:3,icon:"⭐",desc:"The Harmandir Sahib — the holiest Sikh shrine, the Golden Temple in Amrit Sarovar.",itinerary:[{day:"Day 1",act:"Harmandir Sahib darshan, Palki Sahib ceremony, Langar",loc:"Amritsar"},{day:"Day 2",act:"Jallianwala Bagh, Wagah Border ceremony, Durgiana Temple",loc:"Amritsar"},{day:"Day 3",act:"Akal Takht, Tarn Taran Sahib Gurdwara, departure",loc:"Amritsar"}]},

  // ASSAM (1)
  {id:43,name:"Kamakhya Devi Temple",location:"Guwahati",state:"Assam",deity:"Goddess Kamakhya",type:"Shakti",price:7500,days:4,icon:"🌺",desc:"The most powerful Shakti Peetha — the womb of the divine mother on Nilachal Hill.",itinerary:[{day:"Day 1",act:"Arrival, Kamakhya Temple darshan, Nilachal Hill",loc:"Guwahati"},{day:"Day 2",act:"Umananda Island Temple, Brahmaputra boat, Navagraha Temple",loc:"Guwahati"},{day:"Day 3",act:"Madan Kamdev ruins, Hajo Hayagriva Madhav",loc:"Hajo"},{day:"Day 4",act:"Kaziranga Rhino sanctuary darshan, departure",loc:"Kaziranga"}]},

  // HIMACHAL PRADESH (1)
  {id:44,name:"Kangra Bajreshwari & Jawalaji",location:"Kangra",state:"Himachal Pradesh",deity:"Goddess Bajreshwari / Jwala Devi",type:"Shakti",price:6800,days:4,icon:"🔥",desc:"The ancient Shakti Peethas of Kangra — including the eternal flame of Jawalamukhi.",itinerary:[{day:"Day 1",act:"Arrival Pathankot, drive to Kangra, Bajreshwari temple",loc:"Kangra"},{day:"Day 2",act:"Jawalaji Flame Temple (eternal flame), Chamunda Devi",loc:"Jawalamukhi"},{day:"Day 3",act:"Chintpurni Shakti Peetha, Naina Devi Temple",loc:"Chintpurni"},{day:"Day 4",act:"Chamunda Devi Temple, Mcleod Ganj, departure",loc:"Dharamshala"}]},

  // BIHAR (2)
  {id:45,name:"Mahabodhi Temple Bodh Gaya",location:"Bodh Gaya",state:"Bihar",deity:"Lord Buddha",type:"Buddhist",price:4500,days:3,icon:"☸️",desc:"UNESCO World Heritage Site — where Buddha attained enlightenment under the Bodhi Tree.",itinerary:[{day:"Day 1",act:"Mahabodhi Temple, Bodhi Tree meditation, Great Buddha Statue",loc:"Bodh Gaya"},{day:"Day 2",act:"Dungeshwari Cave, Thai Monastery, Japanese Temple",loc:"Bodh Gaya"},{day:"Day 3",act:"Nalanda University ruins, Rajgir hot springs, departure",loc:"Nalanda"}]},
  {id:46,name:"Vishnupad Temple Gaya",location:"Gaya",state:"Bihar",deity:"Lord Vishnu",type:"Vishnu",price:3800,days:2,icon:"👣",desc:"Ancient temple with Lord Vishnu's footprint — major site for Hindu ancestral rites.",itinerary:[{day:"Day 1",act:"Vishnupad Temple, Pind Daan ritual, Falgu River",loc:"Gaya"},{day:"Day 2",act:"Pretshila Hill, Barabar Caves, departure",loc:"Gaya"}]},

  // JHARKHAND (1)
  {id:47,name:"Baidyanath Jyotirlinga",location:"Deoghar",state:"Jharkhand",deity:"Lord Shiva (Jyotirlinga)",type:"Shiva",price:4200,days:3,icon:"🔱",desc:"One of the 12 Jyotirlingas — also known as Baba Baidyanath Dham in Deoghar.",itinerary:[{day:"Day 1",act:"Baidyanath Temple darshan, evening aarti",loc:"Deoghar"},{day:"Day 2",act:"Basukinath Temple, Tapovan, Nandan Pahar",loc:"Deoghar"},{day:"Day 3",act:"Trikut Pahar ropeway, Naulakha Mandir, departure",loc:"Deoghar"}]},

  // CHHATTISGARH (1)
  {id:48,name:"Rajim Temples",location:"Rajim",state:"Chhattisgarh",deity:"Lord Vishnu (Rajiv Lochan)",type:"Vishnu",price:3200,days:2,icon:"🕉️",desc:"The Prayag of Chhattisgarh — confluence of three rivers with ancient Vishnu temple.",itinerary:[{day:"Day 1",act:"Rajiv Lochan Temple, Triveni Sangam, Kumbh Mela site",loc:"Rajim"},{day:"Day 2",act:"Champaran Buddhist site, Sirpur archaeological site, departure",loc:"Rajim"}]},

  // GOA (1)
  {id:49,name:"Mangeshi Shantadurga Temple",location:"Ponda",state:"Goa",deity:"Lord Shiva / Goddess Shantadurga",type:"Shiva",price:3500,days:2,icon:"🌴",desc:"The most famous Hindu temples of Goa — known for their unique Indo-Portuguese architecture.",itinerary:[{day:"Day 1",act:"Mangeshi Temple, Shantadurga Temple, Mangueshi village",loc:"Ponda"},{day:"Day 2",act:"Mahalasa Narayani Temple, Spice plantation tour, departure",loc:"Ponda"}]},

  // ARUNACHAL PRADESH (1)
  {id:50,name:"Parashuram Kund",location:"Lohit",state:"Arunachal Pradesh",deity:"Lord Parashuram",type:"Pilgrimage",price:6500,days:4,icon:"🏞️",desc:"Sacred pilgrimage site on the Brahmaputra — Makar Sankranti attracts lakhs of devotees.",itinerary:[{day:"Day 1",act:"Arrival at Tezu, drive to Parashuram Kund",loc:"Tezu"},{day:"Day 2",act:"Holy dip at Parashuram Kund, puja rituals",loc:"Lohit"},{day:"Day 3",act:"Local tribal village visit, Lohit River exploration",loc:"Lohit"},{day:"Day 4",act:"Return journey, departure",loc:"Tezu"}]},

  // NAGALAND (1)
  {id:51,name:"Shiv Mandir Dimapur",location:"Dimapur",state:"Nagaland",deity:"Lord Shiva",type:"Shiva",price:5200,days:3,icon:"🏔️",desc:"Ancient Shiva temple in the heart of Nagaland — blend of Hindu and tribal culture.",itinerary:[{day:"Day 1",act:"Shiv Mandir darshan, Kachari ruins exploration",loc:"Dimapur"},{day:"Day 2",act:"Naga Heritage Village, tribal cultural experience",loc:"Kohima"},{day:"Day 3",act:"Kohima War Cemetery, local market, departure",loc:"Kohima"}]},

  // MANIPUR (1)
  {id:52,name:"Govindaji Temple",location:"Imphal",state:"Manipur",deity:"Lord Krishna (Govinda)",type:"Krishna",price:5800,days:3,icon:"🎭",desc:"The principal temple of Manipur — center of Vaishnavism with unique Manipuri Raslila.",itinerary:[{day:"Day 1",act:"Govindaji Temple, Kangla Fort, Ima Keithel Women's Market",loc:"Imphal"},{day:"Day 2",act:"Loktak Lake, Keibul Lamjao National Park, floating phumdis",loc:"Moirang"},{day:"Day 3",act:"Manipur State Museum, traditional dance performance, departure",loc:"Imphal"}]},

  // MEGHALAYA (1)
  {id:53,name:"Nartiang Durga Temple",location:"Jaintia Hills",state:"Meghalaya",deity:"Goddess Durga",type:"Shakti",price:6200,days:3,icon:"⛰️",desc:"Ancient Durga temple in the scenic Jaintia Hills — with monolithic stone structures.",itinerary:[{day:"Day 1",act:"Nartiang Durga Temple, Monolith Park",loc:"Jaintia Hills"},{day:"Day 2",act:"Dawki River, Mawlynnong cleanest village, living root bridges",loc:"Dawki"},{day:"Day 3",act:"Shillong Peak, Elephant Falls, Don Bosco Museum, departure",loc:"Shillong"}]},

  // TRIPURA (1)
  {id:54,name:"Tripura Sundari Temple",location:"Udaipur",state:"Tripura",deity:"Goddess Tripura Sundari",type:"Shakti",price:5500,days:3,icon:"🌸",desc:"One of the 51 Shakti Peethas — the state gets its name from this ancient temple.",itinerary:[{day:"Day 1",act:"Tripura Sundari Temple darshan, Kalyansagar Lake",loc:"Udaipur"},{day:"Day 2",act:"Neermahal Water Palace, Sepahijala Wildlife Sanctuary",loc:"Udaipur"},{day:"Day 3",act:"Unakoti rock carvings, Pilak archaeological site, departure",loc:"Agartala"}]},

  // MIZORAM (1)
  {id:55,name:"Sakawrdai Temple",location:"Aizawl",state:"Mizoram",deity:"Mizo Deities",type:"Tribal",price:6000,days:3,icon:"🌄",desc:"Sacred site of indigenous Mizo worship — experience tribal spirituality and culture.",itinerary:[{day:"Day 1",act:"Sakawrdai Temple visit, Aizawl city tour, Mizoram State Museum",loc:"Aizawl"},{day:"Day 2",act:"Durtlang Hills, Solomon's Temple, Reiek Heritage Village",loc:"Aizawl"},{day:"Day 3",act:"Tamdil Lake, handicrafts center, departure",loc:"Aizawl"}]},

  // SIKKIM (1)
  {id:56,name:"Rumtek Monastery",location:"Gangtok",state:"Sikkim",deity:"Lord Buddha (Tibetan Buddhism)",type:"Buddhist",price:7200,days:4,icon:"🕉️",desc:"The largest monastery in Sikkim — seat of the Karmapa, stunning Himalayan setting.",itinerary:[{day:"Day 1",act:"Arrival Gangtok, MG Marg, Enchey Monastery",loc:"Gangtok"},{day:"Day 2",act:"Rumtek Monastery, Tsomgo Lake, Baba Harbhajan Singh Mandir",loc:"Gangtok"},{day:"Day 3",act:"Namchi Char Dham, Samdruptse statue, Temi Tea Garden",loc:"Namchi"},{day:"Day 4",act:"Hanuman Tok, Ganesh Tok, Flower Exhibition Centre, departure",loc:"Gangtok"}]},
];

const IMGS = {
  "Meenakshi":"https://i.pinimg.com/1200x/c7/b3/72/c7b372418e6a5df31d293a6f7a4ef8c4.jpg",
  "Rameshwaram":"https://i.pinimg.com/736x/5e/a1/ad/5ea1adf3ad5cbca4c0e2d9d7d84b70f7.jpg",
  "Tiruvannamalai":"https://i.pinimg.com/1200x/f2/07/d6/f207d651008bcb9c6e5d9c350522ae78.jpg",
  "Thanjavur":"https://i.pinimg.com/736x/06/f5/89/06f589c49c80864f59dd536d2d78a565.jpg",
  "Kanchipuram":"https://i.pinimg.com/736x/40/50/8f/40508fbbed7f2967d907d9e408d76fe5.jpg",
  "Chidambaram":"https://i.pinimg.com/1200x/0e/80/5e/0e805eae1b652736f764ab506f9716ea.jpg",
  "Palani":"https://i.pinimg.com/1200x/de/f3/9f/def39fbe8e48a25aec3f7a628bfab40c.jpg",
  "Srirangam":"https://i.pinimg.com/736x/d0/4b/6b/d04b6b7b593b5df8a0125067a68ec844.jpg",
  "Tiruchendur":"https://i.pinimg.com/1200x/12/0d/95/120d95c5b5af0280cf3e46fa12713019.jpg",
  "Swamimalai":"https://i.pinimg.com/736x/6e/da/d1/6edad1a19fa54bbd628605f11950cf9c.jpg",
  "Tirupati":"https://i.pinimg.com/1200x/c6/de/8f/c6de8f07abf9b4504f5ac49b57842249.jpg",
  "Srisailam":"https://i.pinimg.com/1200x/63/3f/7d/633f7d108b6906f8d242e3d463a6ce38.jpg",
  "Vijayawada":"https://i.pinimg.com/1200x/7c/6d/87/7c6d87024e2bbb3795a020fb6be754e9.jpg",
  "Yadadri":"https://i.pinimg.com/736x/8a/62/7e/8a627e943731ea3044ca917cf7010c65.jpg",
  "Thousand":"https://i.pinimg.com/1200x/8a/62/7e/8a627e943731ea3044ca917cf7010c65.jpg",
  "Udupi":"https://i.pinimg.com/736x/63/14/27/6314278b2bde772977e7ef0f07656399.jpg",
  "Dharmasthala":"https://i.pinimg.com/1200x/9e/ba/34/9eba342b820fc0b3bef2d4a3b5329a5e.jpg",
  "Mysore":"https://i.pinimg.com/1200x/c2/60/f9/c260f9275060cf6158a7a6a5125db22a.jpg",
  "Sabarimala":"https://i.pinimg.com/736x/ee/db/71/eedb71db074627c3382e9126106fbddc.jpg",
  "Guruvayur":"https://i.pinimg.com/736x/1f/91/1b/1f911bfd87340e4855d5b53c6abe51d1.jpg",
  "Shirdi":"https://i.pinimg.com/1200x/df/36/09/df360952640e5fbd58b9765e61784f77.jpg",
  "Pandharpur":"https://i.pinimg.com/1200x/93/ad/eb/93adebc1874d49ea6161d1a08a79dbcb.jpg",
  "Trimbakeshwar":"https://i.pinimg.com/736x/ab/a0/17/aba017cdaa23a32ba61dd879002038d6.jpg",
  "Varanasi":"https://i.pinimg.com/736x/ba/98/af/ba98af7b33eef135d1f1d2bceff0c297.jpg",
  "Ayodhya":"https://i.pinimg.com/1200x/46/72/cd/4672cdfff0ebb61e3a1481a6704d5c4e.jpg",
  "Mathura":"https://i.pinimg.com/736x/1a/e4/d6/1ae4d67680152e0697153d118b84be4f.jpg",
  "Prayagraj":"https://i.pinimg.com/736x/0e/32/53/0e3253ce12b27acbf69e1e184c441794.jpg",
  "Char Dham":"https://i.pinimg.com/1200x/51/5f/1f/515f1f320a2cc3215ddf999bf5a9cba9.jpg",
  "Kedarnath":"https://i.pinimg.com/1200x/17/25/a6/1725a63d387194b7b70ecb8d0bf2fcfe.jpg",
  "Badrinath":"https://i.pinimg.com/1200x/90/84/f8/9084f8d7010501ed9aa19c621f3f807d.jpg",
  "Haridwar":"https://i.pinimg.com/736x/12/28/68/122868255f02ae5f90670059dd22b7b2.jpg",
  "Pushkar":"https://i.pinimg.com/1200x/8a/dc/0e/8adc0e794e3aac5a946df5636d363e67.jpg",
  "Nathdwara":"https://i.pinimg.com/1200x/be/3f/fe/be3ffeecd4dade9e6183983fef4b2970.jpg",
  "Dwarka":"https://i.pinimg.com/1200x/93/7f/91/937f91a6fd533e04e56f0903b84bf119.jpg",
  "Somnath":"https://i.pinimg.com/736x/ef/d2/0f/efd20ff6162409e57742706a81df4850.jpg",
  "Ambaji":"https://i.pinimg.com/1200x/76/c5/55/76c555c71417080bcd8d033b3d628648.jpg",
  "Ujjain":"https://i.pinimg.com/736x/d5/d5/75/d5d5759bfdb17950ac83ea62709a88db.jpg",
  "Omkareshwar":"https://i.pinimg.com/1200x/30/58/93/3058937e74c59fa13214c0ddcf648b66.jpg",
  "Puri":"https://i.pinimg.com/736x/7e/f1/9c/7ef19cc13322d0e8cfd322b7203b8d77.jpg",
  "Dakshineswar":"https://i.pinimg.com/1200x/2b/81/21/2b812165943a979f8e106bf1707d5969.jpg",
  "Vaishno Devi":"https://i.pinimg.com/736x/f5/8d/9c/f58d9cb7ce0fd5a16dc057e598e3c1c3.jpg",
  "Amritsar":"https://i.pinimg.com/736x/cf/5c/b1/cf5cb1723be82a6c74584499eccf608f.jpg",
  "Kamakhya":"https://i.pinimg.com/736x/f6/49/13/f6491310014355de546f01185b1ed95b.jpg",
  "Kangra":"https://i.pinimg.com/736x/37/0c/46/370c4671ddd1752a22d50bfe653b7c71.jpg",
  "Bodh Gaya":"https://i.pinimg.com/1200x/ed/c4/b8/edc4b8b280fe3b5f5643ff6adcc6af06.jpg",
  "Gaya":"https://i.pinimg.com/736x/27/2a/2c/272a2ceccdc8d2eda00a60b5d8ca257c.jpg",
  "Baidyanath":"https://i.pinimg.com/736x/68/4b/d3/684bd377ca3d8047b1d6397d4a849f71.jpg",
  "Rajim":"data:image/jpeg;base64,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",
  "Mangeshi":"data:image/jpeg;base64,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",
  "Parashuram":"data:image/jpeg;base64,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",
  "Shiv Mandir":"https://i.pinimg.com/1200x/12/0d/95/120d95c5b5af0280cf3e46fa12713019.jpg",
  "Govindaji":"https://i.pinimg.com/1200x/46/72/cd/4672cdfff0ebb61e3a1481a6704d5c4e.jpg",
  "Nartiang":"https://i.pinimg.com/1200x/75/cd/88/75cd88bf91d28595b23b303fd73dc880.jpg",
  "Tripura Sundari":"https://i.pinimg.com/1200x/60/53/02/605302924e0878a5a0412295659df4d1.jpg",
  "Sakawrdai":"https://i.pinimg.com/1200x/32/8a/87/328a87fcb5e8f67f8f5b5f17ed11b08c.jpg",
  "Rumtek":"https://i.pinimg.com/1200x/02/65/1e/02651e7d4cc3a2e28e851cb6e6f3fc26.jpg",
};
const getImg=(n)=>{for(const[k,v]of Object.entries(IMGS))if(n.includes(k))return v;return"https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80";};

const CAROUSEL_IDS=[28,11,24,19,25,34,39,41,43,42];
const CAROUSEL=ALL_TEMPLES.filter(t=>CAROUSEL_IDS.includes(t.id));
const STATES=[...new Set(ALL_TEMPLES.map(t=>t.state))].sort();
const TYPES=[...new Set(ALL_TEMPLES.map(t=>t.type))].sort();
const STEPS=["Package","Schedule","Pilgrims","Itinerary","Payment","Confirm"];

function TempleCard({t,onBook}){
  return(
    <div className="temple-card" onClick={onBook}>
      <div className="card-shine"/>
      <div className="card-img-wrap">
        <img src={getImg(t.name)} alt={t.name} className="card-img" onError={e=>{e.target.src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80";}}/>
        <div className="card-gradient"/>
        <div className="card-type-chip">{t.type}</div>
        <div className="card-days-chip">{t.days}D</div>
        <div className="card-name-block">
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <span style={{fontSize:20}}>{t.icon}</span>
            <div>
              <h3 style={{fontFamily:FONT.h1,fontSize:18,fontWeight:700,color:"#FFFFFF",lineHeight:1.2}}>{t.name}</h3>
              <p className="small-text" style={{color:"rgba(255,255,255,.65)",marginTop:2}}>📍 {t.location}, {t.state}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-content">
        <div className="card-deity-row">
          <span style={{width:5,height:5,borderRadius:"50%",background:T.gold,flexShrink:0}}/>
          <p className="small-text" style={{color:T.textMuted}}>{t.deity}</p>
        </div>
        <p className="normal-text" style={{color:T.textBody,lineHeight:1.6}}>{t.desc}</p>
        <div className="card-price-row">
          <div>
            <span style={{fontFamily:FONT.h1,fontSize:26,fontWeight:700,color:T.gold,lineHeight:1}}>₹{t.price.toLocaleString("en-IN")}</span>
            <span className="small-text" style={{marginLeft:5}}> / person</span>
          </div>
          <div style={{textAlign:"right"}}>
            <div style={{fontFamily:FONT.body,fontSize:14,fontWeight:600,color:T.textDark}}>{t.days} {t.days===1?"Day":"Days"}</div>
            <div className="small-text">Duration</div>
          </div>
        </div>
        <button className="btn-gold c-book" style={{width:"100%",padding:"11px 0",borderRadius:4}} onClick={e=>{e.stopPropagation();onBook();}}>Book Yatra</button>
      </div>
    </div>
  );
}

export default function App(){
  const[screen,setScreen]=useState("home");
  const[cur,setCur]=useState(0);
  const[step,setStep]=useState(0);
  const[selT,setSelT]=useState(null);
  const[anim,setAnim]=useState(false);
  const[dir,setDir]=useState("next");
  const[q,setQ]=useState("");
  const[fState,setFState]=useState("All");
  const[fType,setFType]=useState("All");
  const[fd,setFd]=useState({departureCity:"",date:"",travelClass:"Standard",accommodation:"Ashram",meals:"Sattvic",pilgrims:[{name:"",age:"",gender:"Male",idType:"Aadhar",idNo:"",phone:"",email:"",special:""}],paymentMode:"UPI",upiId:"",cardNo:"",cardExp:"",cardCvv:"",bank:"SBI",wallet:"Paytm",agreed:false});
  const iv=useRef(null);

  useEffect(()=>{if(screen==="home")iv.current=setInterval(()=>slide("next"),5500);return()=>clearInterval(iv.current);},[screen,cur]);

  const slide=(d)=>{if(anim)return;setAnim(true);setDir(d);setTimeout(()=>{setCur(p=>d==="next"?(p+1)%CAROUSEL.length:(p-1+CAROUSEL.length)%CAROUSEL.length);setAnim(false);},480);};

  const results=useMemo(()=>{
    if(!q&&fState==="All"&&fType==="All")return null;
    const ql=q.toLowerCase();
    return ALL_TEMPLES.filter(t=>{const mq=!q||[t.name,t.location,t.state,t.deity,t.type,t.desc].some(s=>s.toLowerCase().includes(ql));return mq&&(fState==="All"||t.state===fState)&&(fType==="All"||t.type===fType);});
  },[q,fState,fType]);

  const showSearch=results!==null;
  const displayList=showSearch?results:ALL_TEMPLES;
  const addP=()=>setFd(f=>({...f,pilgrims:[...f.pilgrims,{name:"",age:"",gender:"Male",idType:"Aadhar",idNo:"",phone:"",email:"",special:""}]}));
  const rmP=(i)=>{if(fd.pilgrims.length===1)return;setFd(f=>({...f,pilgrims:f.pilgrims.filter((_,x)=>x!==i)}));};
  const upP=(i,k,v)=>setFd(f=>{const p=[...f.pilgrims];p[i]={...p[i],[k]:v};return{...f,pilgrims:p};});
  const book=(t)=>{setSelT(t);setStep(0);setFd(f=>({...f,departureCity:"",date:"",travelClass:"Standard",pilgrims:[{name:"",age:"",gender:"Male",idType:"Aadhar",idNo:"",phone:"",email:"",special:""}],paymentMode:"UPI",upiId:"",cardNo:"",cardExp:"",cardCvv:"",agreed:false}));setScreen("booking");window.scrollTo({top:0,behavior:"smooth"});};

  const sel=selT||CAROUSEL[0];
  const base=sel.price*fd.pilgrims.length;
  const tax=Math.round(base*.05);
  const total=base+tax;
  const ct=CAROUSEL[cur];

  /* ── HOME ── */
  if(screen==="home")return(
    <div style={{fontFamily:FONT.body,background:T.bg,minHeight:"100vh",color:T.textDark}}>
      <style>{CSS}</style>

      {/* NAV */}
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:"rgba(245,240,232,.97)",backdropFilter:"blur(16px)",borderBottom:`1px solid ${T.border}`,height:64,padding:"0 clamp(16px,4vw,48px)",display:"flex",alignItems:"center",justifyContent:"space-between",boxShadow:"0 2px 12px rgba(0,0,0,.06)"}}>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <span style={{fontSize:24,filter:"drop-shadow(0 0 6px rgba(212,175,55,.4))"}}>🕉️</span>
          <div>
            <div style={{fontFamily:FONT.h1,fontSize:22,fontWeight:700,color:T.gold,lineHeight:1}}>Bakthi Netra</div>
            <div className="small-text" style={{letterSpacing:".14em",textTransform:"uppercase",marginTop:1,color:T.textCaption}}>Sacred Yatra Planner</div>
          </div>
        </div>
        <div style={{display:"flex",gap:32,alignItems:"center"}}>
          {["Destinations","Packages","About"].map(l=><button key={l} className="nav-link">{l}</button>)}
          <div style={{width:1,height:18,background:T.border}}/>
          <button className="btn-gold" style={{padding:"10px 26px",borderRadius:4}}>Plan Yatra</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{position:"relative",height:"100vh",minHeight:600,overflow:"hidden",marginTop:64}}>
        <div style={{position:"absolute",inset:0,zIndex:0}}>
          <img key={ct.id} src={getImg(ct.name)} alt=""
            style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 30%",opacity:anim?0:1,transition:"opacity .6s ease",filter:"brightness(.6) saturate(1.1) contrast(1.05)"}}
            onError={e=>{e.target.style.display="none";}}/>
          <div className="hero-overlay"/>
          <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at center,transparent 45%,rgba(0,0,0,.4) 100%)"}}/>
        </div>
        <div className="om-bg" style={{position:"absolute",right:"6%",top:"50%",transform:"translateY(-50%)",fontFamily:"serif",fontSize:"min(52vw,600px)",color:T.gold,pointerEvents:"none",userSelect:"none",lineHeight:1,zIndex:1}}>ॐ</div>

        {/* HERO CONTENT */}
        <div style={{position:"relative",zIndex:5,maxWidth:680,padding:"0 clamp(24px,5vw,60px)",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",opacity:anim?0:1,transform:anim?`translateY(${dir==="next"?"26px":"-26px"})`:"translateY(0)",transition:"all .48s cubic-bezier(.23,1,.32,1)"}}>
          <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:20}}>
            <div style={{width:44,height:1.5,background:`linear-gradient(to right,${T.gold},transparent)`}}/>
            <span className="sec-label">{ct.type} · {ct.state}</span>
          </div>
          <h1 className="h1" style={{fontSize:"clamp(30px,5.5vw,64px)",marginBottom:12,textShadow:"0 4px 20px rgba(0,0,0,.5)"}}>
            {ct.name}
          </h1>
          <p className="small-text" style={{marginBottom:14}}>📍 {ct.location}, {ct.state} · {ct.deity}</p>
          <p className="body-dark" style={{marginBottom:36,maxWidth:520}}>{ct.desc}</p>
          <div style={{display:"flex",gap:0,marginBottom:38}}>
            {[{v:ct.days,l:"Days"},{v:`₹${ct.price.toLocaleString("en-IN")}`,l:"Per Person"},{v:"4.9 ★",l:"Rating"}].map((x,i)=>(
              <div key={i} style={{paddingRight:28,borderRight:i<2?"1px solid rgba(255,255,255,.15)":"none",marginRight:i<2?28:0}}>
                <div style={{fontFamily:FONT.h2h3,fontSize:"clamp(20px,2.5vw,28px)",fontWeight:600,color:T.goldSoft,lineHeight:1}}>{x.v}</div>
                <div className="small-text" style={{marginTop:5,letterSpacing:".12em",textTransform:"uppercase"}}>{x.l}</div>
              </div>
            ))}
          </div>
          <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
            <button className="btn-gold" onClick={()=>book(ct)} style={{padding:"14px 40px",borderRadius:4,fontSize:13}}>Book This Yatra</button>
            <button className="btn-outline" style={{padding:"14px 32px",borderRadius:4}}>View Details</button>
          </div>
        </div>

        {/* Arrows */}
        {[{s:"left",d:"prev",ch:"‹"},{s:"right",d:"next",ch:"›"}].map(a=>(
          <button key={a.s} onClick={()=>slide(a.d)} style={{position:"absolute",top:"50%",[a.s]:22,transform:"translateY(-50%)",background:"rgba(255,255,255,.12)",border:"1px solid rgba(255,255,255,.25)",backdropFilter:"blur(10px)",color:"rgba(255,255,255,.75)",width:46,height:46,cursor:"pointer",fontSize:24,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:4,transition:"all .2s",zIndex:10}}
            onMouseEnter={e=>{e.currentTarget.style.background="rgba(212,175,55,.25)";e.currentTarget.style.borderColor=T.gold;e.currentTarget.style.color=T.gold;}}
            onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,.12)";e.currentTarget.style.borderColor="rgba(255,255,255,.25)";e.currentTarget.style.color="rgba(255,255,255,.75)";}}>
            {a.ch}
          </button>
        ))}

        {/* Dots */}
        <div style={{position:"absolute",bottom:28,left:0,right:0,zIndex:10,display:"flex",justifyContent:"center",gap:7}}>
          {CAROUSEL.map((_,i)=><div key={i} onClick={()=>setCur(i)} className={`c-dot${i===cur?" active":""}`}/>)}
        </div>

        {/* Thumbnails */}
        <div style={{position:"absolute",right:22,top:"50%",transform:"translateY(-50%)",zIndex:10,display:"flex",flexDirection:"column",gap:8}}>
          {CAROUSEL.slice(0,6).map((t)=>{const idx=CAROUSEL.findIndex(x=>x.id===t.id);return(
            <div key={t.id} onClick={()=>setCur(idx)} className="thumb-item" style={{width:54,height:40,overflow:"hidden",cursor:"pointer",border:`2px solid ${cur===idx?T.gold:"rgba(255,255,255,.2)"}`,opacity:cur===idx?1:.45,borderRadius:3,transition:"all .3s",boxShadow:cur===idx?`0 0 12px ${T.gold}60`:""}}>
              <img src={getImg(t.name)} alt="" style={{width:"100%",height:"100%",objectFit:"cover",filter:"brightness(.8)"}} onError={e=>{e.target.style.display="none";}}/>
            </div>
          );})}
        </div>
      </section>

      {/* STATS BAR */}
      <div style={{background:"#FFFFFF",borderTop:`1px solid ${T.border}`,borderBottom:`1px solid ${T.border}`,padding:"26px clamp(16px,4vw,48px)",boxShadow:"0 2px 8px rgba(0,0,0,.04)"}}>
        <div style={{maxWidth:900,margin:"0 auto",display:"flex",justifyContent:"space-around",flexWrap:"wrap",gap:24}}>
          {[{v:"56+",l:"Sacred Destinations"},{v:"28",l:"States Covered"},{v:"50K+",l:"Happy Pilgrims"},{v:"4.9★",l:"Average Rating"}].map((x,i)=>(
            <div key={i} style={{textAlign:"center"}}>
              <div style={{fontFamily:FONT.h2h3,fontSize:"clamp(22px,3vw,30px)",fontWeight:600,color:T.goldSoft}}>{x.v}</div>
              <div className="small-text" style={{marginTop:5,letterSpacing:".12em",textTransform:"uppercase"}}>{x.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SEARCH */}
      <div style={{background:T.bgSurface,padding:"58px clamp(16px,4vw,48px) 46px"}}>
        <div style={{maxWidth:940,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:38}}>
            <div style={{display:"flex",alignItems:"center",gap:16,justifyContent:"center",marginBottom:14}}>
              <div style={{height:1.5,width:48,background:`linear-gradient(to right,transparent,${T.gold})`}}/>
              <span className="sec-label">Sacred Destinations</span>
              <div style={{height:1.5,width:48,background:`linear-gradient(to left,transparent,${T.gold})`}}/>
            </div>
            <h2 className="h2" style={{marginBottom:8}}>Find Your Sacred Journey</h2>
            <p className="body-text" style={{color:T.textMuted}}>Search across {ALL_TEMPLES.length} temples & pilgrimage sites across India - covering all 28 states</p>
          </div>
          <div className="search-wrap" style={{marginBottom:14}}>
            <span style={{position:"absolute",left:18,top:"50%",transform:"translateY(-50%)",color:T.gold,fontSize:17,pointerEvents:"none",zIndex:2}}>🔍</span>
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search temple, deity, state, type... (e.g. Shiva · Tamil Nadu · Kedarnath)"
              style={{width:"100%",padding:"14px 50px 14px 50px",background:"transparent",border:"none",color:T.textDark,fontFamily:FONT.body,fontSize:14,outline:"none"}}/>
            {q&&<button onClick={()=>setQ("")} style={{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",color:T.textMuted,cursor:"pointer",fontSize:16}}>✕</button>}
          </div>
          <div style={{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"}}>
            <div style={{flex:1,minWidth:180}}><select value={fState} onChange={e=>setFState(e.target.value)} className="gold-select"><option value="All">All States ({STATES.length})</option>{STATES.map(s=><option key={s} value={s}>{s}</option>)}</select></div>
            <div style={{flex:1,minWidth:180}}><select value={fType} onChange={e=>setFType(e.target.value)} className="gold-select"><option value="All">All Types</option>{TYPES.map(t=><option key={t} value={t}>{t}</option>)}</select></div>
            {showSearch&&<button className="btn-outline" style={{padding:"11px 22px",borderRadius:4}} onClick={()=>{setQ("");setFState("All");setFType("All");}}>Clear</button>}
          </div>
          {showSearch&&<p className="small-text" style={{marginTop:12,color:results.length===0?"#C0391B":T.textMuted}}>{results.length===0?"No temples found — try a different keyword":`Showing ${results.length} of ${ALL_TEMPLES.length} destinations`}</p>}
        </div>
      </div>

      {/* GRID */}
      <div style={{background:T.bgSurface,padding:"0 clamp(16px,4vw,48px) 90px"}}>
        <div style={{maxWidth:1380,margin:"0 auto"}}>
          {results!==null&&results.length===0?(
            <div style={{textAlign:"center",padding:"80px 0"}}>
              <div style={{fontSize:52,marginBottom:18}}>🔍</div>
              <h3 className="h3" style={{marginBottom:8}}>No temples found</h3>
              <p className="small-text">Try: "Shiva" · "Tamil Nadu" · "Kedarnath" · "Shakti"</p>
            </div>
          ):(
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(310px,1fr))",gap:22}}>
              {displayList.map(t=><TempleCard key={t.id} t={t} onBook={()=>book(t)}/>)}
            </div>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{background:"#FFFFFF",borderTop:`1px solid ${T.border}`,padding:"22px clamp(16px,4vw,48px)"}}>
        <div style={{maxWidth:1380,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:14}}>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <span style={{fontSize:20}}>🕉️</span>
            <span style={{fontFamily:FONT.h1,fontSize:18,fontWeight:700,color:T.gold}}>Bakthi Netra</span>
          </div>
          <div style={{display:"flex",gap:26,flexWrap:"wrap"}}>
            {["🔒 256-Bit Encryption","📄 GST Invoice","📞 24/7 Support","✉️ Instant Confirmation"].map((x,i)=>(
              <span key={i} className="ft">{x}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );

  /* ── BOOKING SCREEN continues... (same as before, code truncated for brevity) ── */
   /* ── BOOKING SCREEN ── */
  const Lbl=({children})=>(<label style={{display:"block",fontFamily:FONT.h2h3,fontSize:11,fontWeight:600,letterSpacing:".12em",color:T.textMuted,marginBottom:8,textTransform:"uppercase"}}>{children}</label>);
  const Row=({children,mb=18})=><div style={{marginBottom:mb}}>{children}</div>;

  return(
    <div style={{fontFamily:FONT.body,background:T.bg,minHeight:"100vh",color:T.textDark}}>
      <style>{CSS}</style>
      <nav style={{background:"rgba(245,240,232,.97)",backdropFilter:"blur(16px)",borderBottom:`1px solid ${T.border}`,height:64,padding:"0 clamp(16px,4vw,48px)",display:"flex",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,zIndex:100,boxShadow:"0 2px 12px rgba(0,0,0,.06)"}}>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <span style={{fontSize:22}}>🕉️</span>
          <span style={{fontFamily:FONT.h1,fontSize:20,fontWeight:700,color:T.gold}}>Bakthi Netra</span>
        </div>
        <button className="btn-outline" style={{padding:"9px 22px",borderRadius:4}} onClick={()=>setScreen("home")}>← Back to Temples</button>
      </nav>

      <div style={{maxWidth:860,margin:"0 auto",padding:"36px clamp(16px,3vw,32px) 80px"}}>
        {/* Temple Banner */}
        <div style={{position:"relative",height:185,overflow:"hidden",marginBottom:30,borderRadius:8,border:`1px solid ${T.border}`,boxShadow:"0 4px 16px rgba(0,0,0,.08)"}}>
          <img src={getImg(sel.name)} alt={sel.name} style={{width:"100%",height:"100%",objectFit:"cover",filter:"brightness(.55) saturate(1.1)"}} onError={e=>{e.target.style.display="none";}}/>
          <div style={{position:"absolute",inset:0,background:"linear-gradient(to right,rgba(26,21,16,.97) 28%,rgba(26,21,16,.25) 100%)"}}/>
          <div style={{position:"absolute",inset:0,padding:"clamp(16px,3vw,28px) clamp(20px,3vw,36px)",display:"flex",alignItems:"center",gap:18}}>
            <span style={{fontSize:46,flexShrink:0}}>{sel.icon}</span>
            <div>
              <div className="tag-pill" style={{marginBottom:8}}>{sel.type}</div>
              {/* H2 on dark */}
              <h2 style={{fontFamily:FONT.h2h3,fontSize:"clamp(18px,3vw,24px)",fontWeight:600,color:"#FFFFFF",marginBottom:4,lineHeight:1.3}}>{sel.name}</h2>
              <p className="small-text" style={{color:"rgba(255,255,255,.6)"}}>📍 {sel.location}, {sel.state} · {sel.deity} · {sel.days} Days</p>
            </div>
          </div>
        </div>

        {/* Stepper */}
        <div style={{display:"flex",alignItems:"center",marginBottom:30,overflowX:"auto",paddingBottom:4}}>
          {STEPS.map((s,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",flex:1,minWidth:0}}>
              <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:5}}>
                <div className={`step-dot ${i<step?"done":i===step?"active":"idle"}`}>{i<step?"✓":i+1}</div>
                <span style={{fontFamily:FONT.h2h3,fontSize:9,letterSpacing:".12em",textTransform:"uppercase",color:i<=step?T.gold:T.textMuted,whiteSpace:"nowrap",fontWeight:600}}>{s}</span>
              </div>
              {i<STEPS.length-1&&<div style={{height:2,flex:1,background:i<step?T.gold:T.border,margin:"0 5px",marginBottom:18,transition:"background .35s"}}/>}
            </div>
          ))}
        </div>

        <div className="b-panel">
          {/* Step 0 */}
          {step===0&&<div>
            <h3 className="h3" style={{marginBottom:6}}>Chosen Sacred Path</h3>
            <div style={{height:1,background:T.border,marginBottom:22}}/>
            <div style={{background:T.bgSurface,border:`1px solid ${T.border}`,padding:20,marginBottom:20,borderRadius:6}}>
              <div style={{fontFamily:FONT.h1,fontSize:20,color:T.textDark,marginBottom:5,fontWeight:700}}>{sel.name}</div>
              <p className="small-text" style={{color:T.textMuted,marginBottom:12}}>{sel.deity} · {sel.location}, {sel.state}</p>
              <p className="body-text" style={{color:T.textBody}}>{sel.desc}</p>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:12}}>
              {[{l:"Duration",v:`${sel.days} Days`},{l:"Base Price",v:`₹${sel.price.toLocaleString("en-IN")}/person`},{l:"Type",v:sel.type},{l:"Includes",v:"Transport · Stay · Guide"}].map((x,i)=>(
                <div className="stat-box" key={i}>
                  <div style={{fontFamily:FONT.h2h3,fontSize:10,color:T.textMuted,letterSpacing:".12em",textTransform:"uppercase",marginBottom:7,fontWeight:600}}>{x.l}</div>
                  <div className="normal-text" style={{color:T.textDark,fontWeight:500}}>{x.v}</div>
                </div>
              ))}
            </div>
          </div>}

          {/* Step 1 */}
          {step===1&&<div>
            <h3 className="h3" style={{marginBottom:6}}>Travel Logistics</h3>
            <div style={{height:1,background:T.border,marginBottom:22}}/>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:16,marginBottom:18}}>
              <Row mb={0}><Lbl>Departure City *</Lbl><input className="gold-input" placeholder="Chennai, Delhi, Mumbai..." value={fd.departureCity} onChange={e=>setFd(f=>({...f,departureCity:e.target.value}))}/></Row>
              <Row mb={0}><Lbl>Travel Date *</Lbl><input className="gold-input" type="date" value={fd.date} onChange={e=>setFd(f=>({...f,date:e.target.value}))}/></Row>
            </div>
            <Row><Lbl>Travel Class</Lbl><select className="gold-select" value={fd.travelClass} onChange={e=>setFd(f=>({...f,travelClass:e.target.value}))}><option value="Standard">Standard — Sleeper / Semi-Deluxe Bus</option><option value="Premium">Premium — 3A AC / Deluxe Bus</option><option value="Luxury">Luxury — Flight / Private SUV</option></select></Row>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:16,marginBottom:18}}>
              <Row mb={0}><Lbl>Accommodation</Lbl><select className="gold-select" value={fd.accommodation} onChange={e=>setFd(f=>({...f,accommodation:e.target.value}))}><option>Dharamshala / Ashram</option><option>Standard Hotel (2★)</option><option>Comfort Hotel (3★)</option><option>Premium Hotel (4★+)</option></select></Row>
              <Row mb={0}><Lbl>Meal Preference</Lbl><select className="gold-select" value={fd.meals} onChange={e=>setFd(f=>({...f,meals:e.target.value}))}><option>Sattvic Vegetarian</option><option>Standard Vegetarian</option><option>South Indian Meals</option><option>North Indian Meals</option></select></Row>
            </div>
            <Row mb={0}><Lbl>Special Requests</Lbl><input className="gold-input" placeholder="Extra temple stops, special puja arrangements..."/></Row>
          </div>}

          {/* Step 2 */}
          {step===2&&<div>
            <h3 className="h3" style={{marginBottom:6}}>Pilgrim Credentials</h3>
            <div style={{height:1,background:T.border,marginBottom:22}}/>
            {fd.pilgrims.map((p,i)=>(
              <div key={i} style={{border:`1px solid ${T.border}`,padding:20,marginBottom:14,background:T.bgSurface,position:"relative",borderRadius:6}}>
                <div style={{fontFamily:FONT.h2h3,fontSize:10,letterSpacing:".14em",color:T.gold,textTransform:"uppercase",marginBottom:16,fontWeight:600}}>Pilgrim {i+1}{i===0?" (Primary Contact)":""}</div>
                {i>0&&<button onClick={()=>rmP(i)} style={{position:"absolute",top:14,right:14,background:"none",border:"1px solid #DC262630",color:"#DC2626",width:26,height:26,cursor:"pointer",fontSize:13,borderRadius:3}}>✕</button>}
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:14}}>
                  <div style={{gridColumn:"span 2"}}><Lbl>Full Name (as per ID) *</Lbl><input className="gold-input" placeholder="Full legal name" value={p.name} onChange={e=>upP(i,"name",e.target.value)}/></div>
                  <div><Lbl>Age *</Lbl><input className="gold-input" type="number" placeholder="Age" value={p.age} onChange={e=>upP(i,"age",e.target.value)}/></div>
                  <div><Lbl>Gender *</Lbl><select className="gold-select" value={p.gender} onChange={e=>upP(i,"gender",e.target.value)}><option>Male</option><option>Female</option><option>Other</option></select></div>
                  <div><Lbl>ID Type *</Lbl><select className="gold-select" value={p.idType} onChange={e=>upP(i,"idType",e.target.value)}><option>Aadhar</option><option>Passport</option><option>Voter ID</option><option>PAN Card</option><option>Driving Licence</option></select></div>
                  <div><Lbl>{p.idType} No. *</Lbl><input className="gold-input" placeholder={`${p.idType} number`} value={p.idNo} onChange={e=>upP(i,"idNo",e.target.value)}/></div>
                  {i===0&&<>
                    <div><Lbl>Mobile *</Lbl><input className="gold-input" placeholder="+91 9XXXXXXXXX" value={p.phone} onChange={e=>upP(i,"phone",e.target.value)}/></div>
                    <div style={{gridColumn:"span 2"}}><Lbl>Email *</Lbl><input className="gold-input" type="email" placeholder="For booking confirmation" value={p.email} onChange={e=>upP(i,"email",e.target.value)}/></div>
                  </>}
                  <div style={{gridColumn:"span 3"}}><Lbl>Special Requirements</Lbl><input className="gold-input" placeholder="Medical / Dietary / Wheelchair needs..." value={p.special} onChange={e=>upP(i,"special",e.target.value)}/></div>
                </div>
              </div>
            ))}
            <button className="btn-outline" style={{width:"100%",padding:"13px 0",borderRadius:4}} onClick={addP}>+ Add Another Pilgrim</button>
          </div>}

          {/* Step 3 */}
          {step===3&&<div>
            <h3 className="h3" style={{marginBottom:6}}>Divine Itinerary</h3>
            <div style={{height:1,background:T.border,marginBottom:22}}/>
            <div style={{marginBottom:26}}>
              {sel.itinerary.map((x,i)=>(
                <div key={i} style={{display:"flex",gap:20,marginBottom:22}}>
                  <div style={{fontFamily:FONT.h2h3,fontSize:10,letterSpacing:".12em",color:T.gold,textTransform:"uppercase",minWidth:68,paddingTop:2,flexShrink:0,fontWeight:600}}>{x.day}</div>
                  <div style={{position:"relative",paddingLeft:20}}>
                    <div style={{width:8,height:8,borderRadius:"50%",background:T.gold,position:"absolute",left:0,top:5,boxShadow:`0 0 8px ${T.gold}60`}}/>
                    {i<sel.itinerary.length-1&&<div style={{position:"absolute",left:3.5,top:14,bottom:-22,width:1.5,background:`${T.gold}25`}}/>}
                    {/* Body text spec */}
                    <p className="body-text" style={{color:T.textBody,marginBottom:3}}>{x.act}</p>
                    <p className="small-text" style={{color:T.textMuted}}>📍 {x.loc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{background:T.bgSurface,border:`1px solid ${T.border}`,padding:20,borderRadius:6}}>
              <div style={{fontFamily:FONT.h2h3,fontSize:10,letterSpacing:".14em",color:T.gold,textTransform:"uppercase",marginBottom:14,fontWeight:600}}>What's Included</div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:10}}>
                {["Transportation as per class","Accommodation throughout","Breakfast & Dinner (Sattvic)","Expert Pilgrim Guide","Temple entry coordination","24/7 Yatra Coordinator","GST Invoice provided"].map((it,i)=>(
                  <div key={i} style={{display:"flex",gap:10,alignItems:"center"}}>
                    <span style={{color:T.gold,fontSize:14}}>✓</span>
                    <span className="normal-text" style={{color:T.textBody}}>{it}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>}

          {/* Step 4 */}
          {step===4&&<div>
            <h3 className="h3" style={{marginBottom:6}}>Payment & Review</h3>
            <div style={{height:1,background:T.border,marginBottom:22}}/>
            <div style={{background:T.bgSurface,border:`1px solid ${T.border}`,padding:20,marginBottom:22,borderRadius:6}}>
              <div style={{fontFamily:FONT.h2h3,fontSize:10,letterSpacing:".14em",color:T.gold,textTransform:"uppercase",marginBottom:14,fontWeight:600}}>Booking Summary</div>
              {[{l:"Package",v:sel.name},{l:"Destination",v:`${sel.location}, ${sel.state}`},{l:"Pilgrims",v:`${fd.pilgrims.length} person(s)`},{l:"Travel Date",v:fd.date||"—"},{l:"Class",v:fd.travelClass},{l:`Base (${fd.pilgrims.length} × ₹${sel.price.toLocaleString("en-IN")})`,v:`₹${base.toLocaleString("en-IN")}`},{l:"GST (5%)",v:`₹${tax.toLocaleString("en-IN")}`}].map((r,i)=>(
                <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"10px 0",borderBottom:`1px solid ${T.border}`}}>
                  <span className="small-text" style={{color:T.textCaption,letterSpacing:".08em",textTransform:"uppercase"}}>{r.l}</span>
                  <span className="normal-text" style={{color:T.textDark,fontWeight:500}}>{r.v}</span>
                </div>
              ))}
              <div style={{display:"flex",justifyContent:"space-between",padding:"16px 0 0"}}>
                <span style={{fontFamily:FONT.h2h3,fontSize:11,color:T.gold,letterSpacing:".14em",textTransform:"uppercase",fontWeight:600}}>Grand Total</span>
                {/* H1 Playfair 44px gold */}
                <span style={{fontFamily:FONT.h1,fontSize:"clamp(28px,4vw,38px)",fontWeight:700,color:T.gold}}>₹{total.toLocaleString("en-IN")}</span>
              </div>
            </div>
            <Row>
              <Lbl>Payment Mode</Lbl>
              <div style={{display:"flex",gap:10,flexWrap:"wrap",marginBottom:20}}>
                {[{m:"UPI",e:"📱"},{m:"Card",e:"💳"},{m:"Net Banking",e:"🏦"},{m:"Wallet",e:"👛"}].map(({m,e})=>(
                  <button key={m} onClick={()=>setFd(f=>({...f,paymentMode:m}))} style={{flex:1,minWidth:80,padding:"14px 8px",background:fd.paymentMode===m?`${T.gold}15`:T.bgSurface,border:`1.5px solid ${fd.paymentMode===m?T.gold:T.border}`,color:fd.paymentMode===m?T.gold:T.textMuted,cursor:"pointer",fontFamily:FONT.body,fontSize:13,transition:"all .2s",borderRadius:4}}>
                    <div style={{fontSize:18,marginBottom:4}}>{e}</div><div>{m}</div>
                  </button>
                ))}
              </div>
              {fd.paymentMode==="UPI"&&<Row mb={0}><Lbl>UPI ID *</Lbl><input className="gold-input" placeholder="yourname@upi" value={fd.upiId} onChange={e=>setFd(f=>({...f,upiId:e.target.value}))}/></Row>}
              {fd.paymentMode==="Card"&&<div>
                <Row><Lbl>Card Number *</Lbl><input className="gold-input" placeholder="XXXX XXXX XXXX XXXX" maxLength={19} value={fd.cardNo} onChange={e=>setFd(f=>({...f,cardNo:e.target.value}))}/></Row>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:16}}>
                  <div><Lbl>Expiry *</Lbl><input className="gold-input" placeholder="MM / YY" value={fd.cardExp} onChange={e=>setFd(f=>({...f,cardExp:e.target.value}))}/></div>
                  <div><Lbl>CVV *</Lbl><input className="gold-input" placeholder="XXX" type="password" value={fd.cardCvv} onChange={e=>setFd(f=>({...f,cardCvv:e.target.value}))}/></div>
                </div>
                <Row mb={0}><Lbl>Cardholder Name *</Lbl><input className="gold-input" placeholder="Name as on card"/></Row>
              </div>}
              {fd.paymentMode==="Net Banking"&&<Row mb={0}><Lbl>Select Bank *</Lbl><select className="gold-select" value={fd.bank} onChange={e=>setFd(f=>({...f,bank:e.target.value}))}><option>State Bank of India</option><option>HDFC Bank</option><option>ICICI Bank</option><option>Axis Bank</option><option>Canara Bank</option><option>Kotak Mahindra</option></select></Row>}
              {fd.paymentMode==="Wallet"&&<Row mb={0}><Lbl>Select Wallet *</Lbl><select className="gold-select" value={fd.wallet} onChange={e=>setFd(f=>({...f,wallet:e.target.value}))}><option>Paytm</option><option>PhonePe</option><option>Amazon Pay</option><option>Mobikwik</option></select></Row>}
            </Row>
            <div style={{display:"flex",gap:14,padding:18,border:`1px solid ${T.border}`,background:T.bgSurface,alignItems:"flex-start",marginTop:8,borderRadius:4}}>
              <input type="checkbox" checked={fd.agreed} onChange={e=>setFd(f=>({...f,agreed:e.target.checked}))} style={{width:16,height:16,accentColor:T.gold,flexShrink:0,marginTop:3,cursor:"pointer"}}/>
              <p className="body-text" style={{color:T.textBody}}>I agree to the <span style={{color:T.gold,fontWeight:500}}>Yatra Pilgrimage Guidelines</span>, cancellation policy, refund terms, and confirm all pilgrim details are accurate as per government-issued ID.</p>
            </div>
          </div>}

          {/* Step 5 */}
          {step===5&&<div style={{textAlign:"center"}}>
            <div style={{position:"relative",marginBottom:30,overflow:"hidden",borderRadius:10,boxShadow:"0 8px 32px rgba(0,0,0,.15)"}}>
              <img src={getImg(sel.name)} alt={sel.name} style={{width:"100%",maxWidth:520,height:260,objectFit:"cover",display:"block",margin:"0 auto",filter:"brightness(.65) saturate(1.1)",animation:"successPop .8s cubic-bezier(.34,1.56,.64,1) forwards",borderRadius:10}} onError={e=>{e.target.style.display="none";}}/>
              <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,transparent 30%,rgba(0,0,0,.65) 100%)",borderRadius:10}}/>
              <div style={{position:"absolute",bottom:0,left:0,right:0,padding:22,textAlign:"center"}}>
                <h2 style={{fontFamily:FONT.h1,fontSize:"clamp(18px,3.5vw,24px)",fontWeight:700,color:"#FFFFFF",marginBottom:4}}>{sel.name}</h2>
                <p className="small-text">📍 {sel.location}, {sel.state}</p>
              </div>
            </div>
            <div style={{animation:"successUp .6s ease .3s both"}}>
              <div style={{marginBottom:26}}>
                <div style={{fontSize:50,marginBottom:10,color:T.gold}}>✦</div>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:14,marginBottom:10}}>
                  <div style={{height:1.5,width:48,background:`linear-gradient(to right,transparent,${T.gold})`}}/>
                  {/* H1: Playfair 44px gold */}
                  <h1 className="h1" style={{fontSize:"clamp(24px,4vw,38px)",margin:0}}>Yatra Confirmed!</h1>
                  <div style={{height:1.5,width:48,background:`linear-gradient(to left,transparent,${T.gold})`}}/>
                </div>
                <p className="sec-label" style={{marginBottom:6}}>Your sacred journey is booked</p>
                <p className="small-text" style={{color:T.gold,fontWeight:500}}>Booking Ref: BN-{Math.random().toString(36).substr(2,8).toUpperCase()}</p>
              </div>
              <div style={{background:T.bgSurface,border:`1px solid ${T.border}`,padding:24,maxWidth:460,margin:"0 auto 20px",borderRadius:8}}>
                <div style={{fontFamily:FONT.h2h3,fontSize:10,letterSpacing:".14em",color:T.gold,textTransform:"uppercase",marginBottom:18,fontWeight:600}}>Booking Summary</div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:20,paddingBottom:20,borderBottom:`1px solid ${T.border}`}}>
                  {[{l:"Duration",v:`${sel.days} ${sel.days===1?"Day":"Days"}`},{l:"Pilgrims",v:String(fd.pilgrims.length)}].map((x,i)=>(
                    <div key={i} style={{textAlign:"center"}}>
                      <div className="small-text" style={{letterSpacing:".1em",textTransform:"uppercase",marginBottom:5}}>{x.l}</div>
                      {/* H2: Poppins 28px 600 */}
                      <div style={{fontFamily:FONT.h2h3,fontSize:22,fontWeight:600,color:T.goldSoft}}>{x.v}</div>
                    </div>
                  ))}
                </div>
                {[{l:"Travel Date",v:fd.date||"—"},{l:"Travel Class",v:fd.travelClass},{l:"Accommodation",v:fd.accommodation},{l:"Meals",v:fd.meals}].map((r,i)=>(
                  <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",borderBottom:i<3?`1px solid ${T.border}`:"none"}}>
                    <span className="small-text" style={{color:T.textMuted,textTransform:"uppercase",letterSpacing:".08em"}}>{r.l}</span>
                    <span className="normal-text" style={{color:T.textDark,fontWeight:500}}>{r.v}</span>
                  </div>
                ))}
              </div>
              <div style={{background:`${T.gold}12`,border:`1.5px solid ${T.gold}40`,padding:22,borderRadius:8,marginBottom:20}}>
                <div className="small-text" style={{letterSpacing:".1em",textTransform:"uppercase",marginBottom:8}}>Total Amount Paid</div>
                {/* H1: Playfair 44px 700 gold */}
                <div style={{fontFamily:FONT.h1,fontSize:"clamp(32px,6vw,48px)",fontWeight:700,color:T.gold}}>₹{total.toLocaleString("en-IN")}</div>
              </div>
              <div style={{background:T.bgSurface,border:`1px solid ${T.border}`,padding:20,borderRadius:8,marginBottom:26,textAlign:"left"}}>
                <div style={{fontFamily:FONT.h2h3,fontSize:10,color:T.gold,letterSpacing:".14em",textTransform:"uppercase",marginBottom:14,fontWeight:600}}>What Happens Next</div>
                {[{n:"1",t:"Confirmation email sent to your registered email address"},{n:"2",t:"Yatra coordinator contacts you 48 hours before departure"},{n:"3",t:"Download detailed itinerary & travel guide"},{n:"4",t:"Meet your pilgrim group & begin your sacred journey"}].map((s,i)=>(
                  <div key={i} style={{display:"flex",gap:14,alignItems:"flex-start",marginBottom:i<3?12:0}}>
                    <div style={{width:26,height:26,borderRadius:"50%",background:T.gold,color:"#1A1208",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,flexShrink:0,fontFamily:FONT.h2h3}}>{s.n}</div>
                    <p className="body-text" style={{color:T.textBody,margin:0,paddingTop:3}}>{s.t}</p>
                  </div>
                ))}
              </div>
              <p style={{fontFamily:FONT.h1,fontSize:18,fontStyle:"italic",color:T.textMuted,marginBottom:24}}>ॐ Om Namah Shivaya 🙏</p>
              <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
                <button className="btn-gold" onClick={()=>{setScreen("home");setStep(0);}} style={{padding:"14px 36px",borderRadius:4}}>← Explore More Yatras</button>
                <button className="btn-outline" style={{padding:"14px 28px",borderRadius:4}}>📥 Download Invoice</button>
              </div>
            </div>
          </div>}

          {/* Nav row */}
          {step<5&&(
            <div style={{display:"flex",justifyContent:"space-between",marginTop:28,gap:12,paddingTop:22,borderTop:`1px solid ${T.border}`}}>
              <button className="btn-outline" onClick={()=>setStep(s=>s-1)} disabled={step===0} style={{padding:"12px 28px",borderRadius:4,opacity:step===0?.3:1,cursor:step===0?"not-allowed":"pointer"}}>← Back</button>
              <button className="btn-gold" style={{padding:"12px 36px",flex:1,maxWidth:320,borderRadius:4}}
                onClick={()=>{if(step===4&&!fd.agreed){alert("Please agree to the terms.");return;}setStep(s=>s+1);window.scrollTo({top:0,behavior:"smooth"});}}>
                {step===4?`Confirm & Pay ₹${total.toLocaleString("en-IN")}`:"Continue →"}
              </button>
            </div>
          )}
        </div>
        <p className="ft" style={{textAlign:"center",marginTop:18,letterSpacing:".12em",textTransform:"uppercase"}}>🔒 Secure 256-Bit Encryption · Razorpay · GST Invoice Included</p>
      </div>
    </div>
  );
}

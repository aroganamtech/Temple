import React, { useState, useEffect } from 'react';
import '../../style/pages/blogs/Blogs.scss';
import temp from '../../assets/blog-tem.jpg';
import temp2 from '../../assets/blog-tem2.jpg';
import temp3 from '../../assets/blog-tem3.jpg'
import temp4 from '../../assets/blog-tem4.jpg'
import temp5 from '../../assets/blog-tem5.jpg'
import temp6 from '../../assets/blog-tem6.jpg'
import temp7 from '../../assets/blog-tem7.jpg'

const Blogs = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const destinations = [
    { name: "Meenakshi Amman", loc: "Madurai", img: temp3, size: "large" },
    { name: "Brihadisvara", loc: "Thanjavur", img: temp4, size: "small" },
    { name: "Kashi Vishwanath", loc: "Varanasi", img: temp5, size: "small" },
    { name: "Lotus Temple", loc: "Delhi", img: temp6, size: "medium" }
  ];

  return (
    <div className="sanctum-wrapper">
      {/* --- NAVIGATION --- */}
      {/* <nav className={`navbar ${isScrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            <span className="om-icon">🪔</span>
            <span className="logo-text">SACRED <span>SANCTUM</span></span>
          </div>
          <div className="nav-links">
            <a href="#darshan">Darshan</a>
            <a href="#history">History</a>
            <a href="#gallery">Gallery</a>
            <button className="btn-portal">Divine Portal</button>
          </div>
        </div>
      </nav> */}

      {/* --- HERO SECTION --- */}
      <header className="hero-v2">
        <div className="hero-inner">
          <div className="hero-text">
            <div className="badge">Ethereal Journeys</div>
            <h1 className="font-cinzel">Experience the <br/><span>Ancient Echoes</span></h1>
            <p>Step beyond the veil of the mundane. Discover the architectural poetry and silent wisdom of the world's most sacred shrines.</p>
            {/* <div className="hero-actions">
              <button className="btn-gold-fill">Start Journey</button>
              <button className="btn-glass">View Archives</button>
            </div> */}
          </div>
          <div className="hero-visual-collage">
            <div className="collage-item main-frame">
              <img src={temp} alt="Temple" />
            </div>
            <div className="collage-item float-frame">
              <img src={temp2} alt="Vedic Art" />
            </div>
          </div>
        </div>
      </header>

      {/* --- DESTINATIONS GRID --- */}
      <section className="destination-grid-v2">
        <div className="grid-header">
          <h2 className="font-cinzel">Top Spiritual Shrines</h2>
          <div className="tabs">
            <span className="active">Popular</span>
            <span>Vedic</span>
            <span>Himalayan</span>
          </div>
        </div>
        <div className="bento-layout">
          {destinations.map((dest, i) => (
            <div key={i} className={`bento-item ${dest.size}`}>
              <div className="item-img-wrap">
                <img src={dest.img} alt={dest.name} />
                <div className="overlay-info">
                  <h3>{dest.name}</h3>
                  <p>📍 {dest.loc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- STORIES SECTION --- */}
      <section className="stories-v2">
        <div className="stories-inner">
          <div className="story-featured">
            <div className="img-reveal">
              <img src={temp7} alt="Rituals" />
            </div>
            <div className="content-box">
              <span className="label">Traditions</span>
              <h3>The 1,000 Pillar Symphony</h3>
              <p>Explore the acoustic marvels of ancient Dravidian architecture where stone speaks in frequencies of peace.</p>
              <button className="btn-link">Read Chronicles →</button>
            </div>
          </div>
          <div className="story-sidebar">
            {[1, 2, 3].map(i => (
              <div key={i} className="mini-card">
                <img src="https://images.unsplash.com/photo-1571679654681-ba01b9e1e117?q=80&w=200" alt="Side" />
                <div className="mini-info">
                  <h4>Vastu for the Modern Soul</h4>
                  <p>Aug 2026 • 4 min</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEWSLETTER SECTION --- */}
      {/* <section className="ascension-footer">
        <div className="newsletter-card-v2">
          <h2 className="font-cinzel">Join the Sacred Circle</h2>
          <p>Weekly insights into Vedic wisdom and temple heritage.</p>
          <div className="input-field-v2">
            <input type="email" placeholder="Your spiritual email..." />
            <button>Subscribe</button>
          </div>
        </div>
      </section> */}

      {/* --- FOOTER --- */}
      {/* <footer className="final-footer">
        <div className="footer-content">
          <div className="brand-side">
            <h2 className="font-cinzel">SACRED SANCTUM</h2>
            <p>Architecting the digital divine.</p>
          </div>
          <div className="links-side">
            <div className="col">
              <h4>Explore</h4>
              <a href="#">Shrines</a>
              <a href="#">History</a>
            </div>
            <div className="col">
              <h4>Connect</h4>
              <a href="#">Instagram</a>
              <a href="#">Youtube</a>
            </div>
          </div>
        </div>
        <div className="bottom-bar">
          <p>© 2026 ALL RIGHTS RESERVED | DESIGNED FOR PEACE</p>
        </div>
      </footer> */}
    </div>
  );
};

export default Blogs;
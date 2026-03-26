import React from 'react';
import '../../style/pages/footer/Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: 'Home', href: '#' },
      { name: 'Temple Directory', href: '#' },
      { name: 'Quick Booking', href: '#' },
      { name: 'Products', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    services: [
      { name: 'Yatra Packages', href: '#' },
      { name: 'Pooja Booking', href: '#' },
      { name: 'Guide Services', href: '#' },
      { name: 'Room Booking', href: '#' },
      { name: 'Vedic Courses', href: '#' },
      { name: 'Spiritual Store', href: '#' },
    ],
    contact: [
      { info: '📍 Chennai, Tamil Nadu', isLink: false },
      { info: '📞 +91 98765 43210', isLink: true, href: 'tel:+919876543210' },
      { info: '✉️ info@bakthi-netra.in', isLink: true, href: 'mailto:info@bakthi-netra.in' },
      { info: 'Privacy Policy', isLink: true, href: '#' },
      { info: 'Terms of Service', isLink: true, href: '#' },
    ]
  };

  return (
    <footer className="bn-footer">
      <div className="bn-footer__container">
        <div className="bn-footer__grid">
          
          {/* Brand Section */}
          <div className="bn-footer__brand">
            <h3 className="bn-footer__logo">🪔 Bakthi Netra</h3>
            <p className="bn-footer__description">
              A sacred digital ecosystem connecting temples, devotees, priests, and pilgrims across India. 
              Preserving tradition through the power of technology.
            </p>
            <div className="bn-footer__socials">
              {['𝕏', 'f', 'in', '▶'].map((icon, idx) => (
                <a key={idx} href="#" className="bn-footer__social-btn" aria-label="Social Link">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="bn-footer__column">
            <h4 className="bn-footer__title">Quick Links</h4>
            <ul className="bn-footer__list">
              {footerLinks.quickLinks.map((link, idx) => (
                <li key={idx}><a href={link.href}>{link.name}</a></li>
              ))}
            </ul>
          </div>

          <div className="bn-footer__column">
            <h4 className="bn-footer__title">Services</h4>
            <ul className="bn-footer__list">
              {footerLinks.services.map((link, idx) => (
                <li key={idx}><a href={link.href}>{link.name}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="bn-footer__column">
            <h4 className="bn-footer__title">Contact</h4>
            <ul className="bn-footer__list">
              {footerLinks.contact.map((item, idx) => (
                <li key={idx}>
                  {item.isLink ? (
                    <a href={item.href}>{item.info}</a>
                  ) : (
                    <span>{item.info}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="bn-footer__bottom">
          <p className="bn-footer__copyright">
            © {currentYear} Bakthi Netra. All rights reserved.
          </p>
          <p className="bn-footer__craft">
            Crafted with <span className="bn-footer__heart">🪔</span> for every devotee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
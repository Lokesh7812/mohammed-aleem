import React from 'react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">MA</span>
          <div>
            <p className="footer-name">Mohammed Aleem</p>
            <p className="footer-role">Sr Officer – Sales & Customer Support</p>
          </div>
        </div>

        <nav className="footer-nav">
          {['home', 'about', 'skills', 'experience', 'certifications', 'contact'].map(s => (
            <a key={s} href={`#${s}`} onClick={e => { e.preventDefault(); document.getElementById(s)?.scrollIntoView({ behavior: 'smooth' }); }}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
        </nav>

        <button className="back-top" onClick={scrollTop} aria-label="Back to top">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><polyline points="18 15 12 9 6 15"/></svg>
        </button>
      </div>
      <div className="footer-bottom">
        <p>© {year} Mohammed Aleem. All rights reserved.</p>
        <p className="footer-made">Built with care & precision.</p>
      </div>
    </footer>
  );
}

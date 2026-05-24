import React, { useEffect, useState } from 'react';
import './Hero.css';

const PROFILE_IMG = "/profile.png"; // moved from base64 to public/profile.png

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" className="hero section">
      <div className="hero-noise"></div>
      <div className="container">
        <div className={`hero-inner${loaded ? ' loaded' : ''}`}>
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>Available for Opportunities</span>
            </div>
            <h1 className="hero-name">
              Mohammed<br /><em>Aleem</em>
            </h1>
            <p className="hero-role">Sr Officer — Sales & Customer Support</p>
            <div className="hero-divider"></div>
            <p className="hero-tagline">
              Driving growth through strategic sales management, customer excellence, and cross-functional collaboration across global markets.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-num">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-sep"></div>
              <div className="stat">
                <span className="stat-num">4</span>
                <span className="stat-label">Companies</span>
              </div>
              <div className="stat-sep"></div>
              <div className="stat">
                <span className="stat-num">MBA</span>
                <span className="stat-label">Qualified</span>
              </div>
            </div>
            <div className="hero-ctas">
              <a href="#contact" className="btn-primary" onClick={e => { e.preventDefault(); document.getElementById('contact').scrollIntoView({behavior:'smooth'}); }}>
                <span>Contact Me</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#experience" className="btn-secondary" onClick={e => { e.preventDefault(); document.getElementById('experience').scrollIntoView({behavior:'smooth'}); }}>
                View Resume
              </a>
            </div>
            <div className="hero-socials">
              <a href="https://www.linkedin.com/in/mohammed-aleem-mba-a9111a218/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://www.instagram.com/mohdaleem_offl" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="mailto:mdaleem154@gmail.com" className="social-icon" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </a>
            </div>
          </div>
          <div className="hero-image-wrap">
            <div className="hero-img-bg"></div>
            <div className="hero-img-ring"></div>
            <img src={PROFILE_IMG} alt="Mohammed Aleem" className="hero-img" />
            <div className="img-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.41 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.87-.87a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>Sales Expert</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

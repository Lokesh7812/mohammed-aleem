import React from 'react';
import './About.css';

const highlights = [
  { icon: '🎓', label: 'MBA', desc: 'Sales & Marketing' },
  { icon: '🌍', label: 'Global', desc: 'Muscat & India' },
  { icon: '🤝', label: 'OEM', desc: 'Tier-1 Handling' },
  { icon: '📊', label: 'SAP', desc: 'ERP Proficient' },
];

const education = [
  {
    degree: 'Master of Business Administration',
    field: 'Sales & Marketing',
    school: 'SRM University',
    year: '2023',
  },
  {
    degree: 'Bachelor of Commerce',
    field: 'Information System Management',
    school: 'SRM University',
    year: '2019',
  },
];

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-grid">
          <div className="about-left fade-in">
            <span className="section-label">Who I Am</span>
            <h2 className="section-title">About Me</h2>
            <div className="divider"></div>
            <p className="about-text">
              A results-driven Sales & Customer Support professional with over 5 years of experience managing end-to-end order processing, key account relationships, and cross-functional coordination across automotive, electronics, and commercial sectors.
            </p>
            <p className="about-text" style={{ marginTop: 16 }}>
              I thrive in professional environments that encourage continuous learning and innovation. My goal is to leverage my expertise in SAP, logistics management, and customer relations to drive growth and operational excellence.
            </p>

            <div className="about-highlights">
              {highlights.map(h => (
                <div key={h.label} className="highlight-card">
                  <span className="highlight-icon">{h.icon}</span>
                  <div>
                    <strong>{h.label}</strong>
                    <span>{h.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-contact-strip">
              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Madurantakam, Tamil Nadu</span>
              </div>
              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.41 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.87-.87a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>+968 9384 9873 (Oman)</span>
              </div>
              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span>mdaleem154@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="edu-section fade-in">
              <h3 className="about-sub-title">Education</h3>
              <div className="edu-timeline">
                {education.map((edu, i) => (
                  <div key={i} className="edu-card">
                    <div className="edu-year">{edu.year}</div>
                    <div className="edu-content">
                      <h4>{edu.degree}</h4>
                      <p className="edu-field">{edu.field}</p>
                      <p className="edu-school">{edu.school}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="objective-card fade-in">
              <div className="obj-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <div>
                <h4>Career Objective</h4>
                <p>To thrive in a dynamic professional environment that fosters teamwork, innovation, and continuous growth — contributing expertise to drive company success while achieving personal and professional milestones.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

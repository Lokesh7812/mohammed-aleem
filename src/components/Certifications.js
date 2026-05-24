import React from 'react';
import './Certifications.css';

const certs = [
  {
    title: 'Certified Digital Marketer',
    org: 'Besant Technologies, Chennai',
    date: 'March 2023',
    topics: [
      'Search Engine Optimization (SEO)',
      'Website Research & URL Structure',
      'On-Page Optimization',
      'Keyword Research – Google Keyword Planner',
      'Social Media Optimization (SMO)',
      'Facebook, Twitter, LinkedIn, Instagram Marketing',
    ],
    icon: '🎓',
    color: '#c9a96e',
  },
];

const references = [
  {
    name: 'Annadurai',
    title: 'Assistant Manager',
    company: 'Yazaki India Private Limited',
    icon: 'A',
  },
  {
    name: 'Hassan Latif',
    title: 'GE Sourcing Specialist',
    company: '',
    icon: 'H',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <div className="cert-header fade-in">
          <span className="section-label">Credentials</span>
          <h2 className="section-title">Certifications</h2>
          <div className="divider"></div>
        </div>

        <div className="cert-grid fade-in">
          {certs.map((c, i) => (
            <div key={i} className="cert-card">
              <div className="cert-top">
                <div className="cert-icon-wrap">
                  <span className="cert-emoji">{c.icon}</span>
                </div>
                <div className="cert-info">
                  <h3 className="cert-title">{c.title}</h3>
                  <p className="cert-org">{c.org}</p>
                  <div className="cert-date-wrap">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <span>{c.date}</span>
                  </div>
                </div>
              </div>
              <div className="cert-topics">
                <h4>Topics Covered</h4>
                <ul>
                  {c.topics.map((t, j) => (
                    <li key={j}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="13" height="13"><polyline points="20 6 9 17 4 12"/></svg>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* References */}
        <div className="references-section fade-in">
          <h3 className="ref-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            Professional References
          </h3>
          <div className="ref-grid">
            {references.map((r, i) => (
              <div key={i} className="ref-card">
                <div className="ref-avatar">{r.icon}</div>
                <div>
                  <h4>{r.name}</h4>
                  <p>{r.title}</p>
                  {r.company && <span>{r.company}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

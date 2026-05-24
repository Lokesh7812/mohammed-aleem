import React from 'react';
import './Skills.css';

const domainSkills = [
  'Key Account Management',
  'Lead Generation',
  'Business Planning',
  'Quotation & Negotiation',
  'Customer Handling',
  'Sales Forecasting',
  'RFQ Handling',
  'Payment Follow-up',
  'Order Management',
  'Logistics & Distribution',
];

const softwareSkills = [
  { name: 'SAP – Sales & Distribution', level: 90 },
  { name: 'Microsoft Excel', level: 88 },
  { name: 'Microsoft Word', level: 85 },
  { name: 'Microsoft PowerPoint', level: 82 },
  { name: 'Microsoft Outlook', level: 86 },
  { name: 'ERP – Tally (Finance)', level: 78 },
  { name: 'Macola (Sales)', level: 75 },
];

const softSkills = [
  { label: 'Communication', icon: '💬' },
  { label: 'Teamwork', icon: '🤝' },
  { label: 'Problem Solving', icon: '🧩' },
  { label: 'Time Management', icon: '⏱' },
  { label: 'Customer Focus', icon: '🎯' },
  { label: 'Adaptability', icon: '🔄' },
];

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="skills-header fade-in">
          <span className="section-label">Capabilities</span>
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="divider"></div>
          <p className="section-sub">
            A comprehensive blend of domain knowledge, technical proficiency, and interpersonal skills refined across multiple industries.
          </p>
        </div>

        <div className="skills-grid">
          {/* Domain Skills */}
          <div className="skill-block fade-in">
            <div className="skill-block-header">
              <div className="skill-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                </svg>
              </div>
              <h3>Domain Skills</h3>
            </div>
            <div className="tag-cloud">
              {domainSkills.map(s => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>

          {/* Software Skills */}
          <div className="skill-block fade-in">
            <div className="skill-block-header">
              <div className="skill-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3>Software & Tools</h3>
            </div>
            <div className="bar-skills">
              {softwareSkills.map(s => (
                <div key={s.name} className="bar-skill">
                  <div className="bar-skill-top">
                    <span>{s.name}</span>
                    <span className="bar-pct">{s.level}%</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: `${s.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="skill-block soft-block fade-in">
            <div className="skill-block-header">
              <div className="skill-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Soft Skills</h3>
            </div>
            <div className="soft-grid">
              {softSkills.map(s => (
                <div key={s.label} className="soft-card">
                  <span className="soft-emoji">{s.icon}</span>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

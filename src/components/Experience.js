import React from "react";
import "./Experience.css";

const experiences = [
  {
    company: "Business International Group",
    location: "Muscat, Oman",
    role: "Commercial Executive",
    period: "Sep 2025 – Present",
    badge: "Current",
    desc:
      "Responsible for managing the end-to-end order processing cycle — from order booking and purchase order processing to generating sales invoices.",
    responsibilities: [
      "Process customer purchase orders in SAP ERP",
      "Coordinate logistics and shipment planning",
      "Generate accurate invoices and compliance records",
      "Track deliveries and order status",
    ],
    skills: ["SAP ERP", "Logistics", "Invoicing", "MS Excel"],
  },

  {
    company: "Amphenol Automotive",
    location: "India",
    role: "Sr Officer – Sales / Customer Support",
    period: "Oct 2024 – Sep 2025",
    badge: "",
    desc:
      "Managed OEM and Tier-1 automotive clients across major global brands.",
    responsibilities: [
      "Handled Tata Motors, Mahindra, Hyundai Mobis",
      "Managed customer support and sales pipeline",
      "Coordinated delivery and quality compliance",
    ],
    skills: ["OEM", "Sales", "Customer Support", "Automotive"],
  },

  {
    company: "Ravel Electronics Private Limited",
    location: "India",
    role: "Executive & Coordinator – Sales",
    period: "Apr 2023 – Oct 2024",
    badge: "🏆 Best Performer",
    desc:
      "Managed key industrial and government clients with order coordination responsibilities.",
    responsibilities: [
      "Handled order validation and entry",
      "Coordinated with stakeholders",
      "Managed replacement and tracking orders",
    ],
    skills: ["ERP", "Order Management", "Client Handling"],
  },

  {
    company: "Yazaki India Private Limited",
    location: "India",
    role: "Associate – Customer Support / Sales",
    period: "Jul 2020 – Jun 2022",
    badge: "",
    desc:
      "Customers Handling - Ford, Renault Nissan, Ashok Leyland. Responsible for sale order and sale agreement for the automotive OEM.",
    responsibilities: [
      "Prepare FOC SO, Scrap SO, Service SO, debit and credit note",
      "Payment follow-ups from customer and supporting to finance team",
      "Prepare daily, weekly, monthly and quarterly reports and analyze the possibility of increasing the business",
    ],
    skills: ["Automotive OEM", "Sales Agreements", "Reporting", "Finance Coordination"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="exp-header fade-in">
          <span className="section-label">Career Journey</span>
          <h2 className="section-title">Work Experience</h2>
          <div className="divider"></div>

          <p className="section-sub">
            5+ years of experience across automotive, electronics,
            telecommunications, and commercial sectors.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item fade-in" key={index}>
              <div className="timeline-dot"></div>

              <div className="timeline-card">
                <div className="timeline-top">
                  <div>
                    <h3>{exp.role}</h3>

                    <div className="timeline-meta">
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="timeline-right">
                    <span className="timeline-period">{exp.period}</span>

                    {exp.badge && (
                      <span className="timeline-badge">{exp.badge}</span>
                    )}
                  </div>
                </div>

                <p className="timeline-desc">{exp.desc}</p>

                <ul className="timeline-list">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="timeline-skills">
                  {exp.skills.map((skill, i) => (
                    <span key={i}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
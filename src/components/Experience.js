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
      "The Commercial Executive is responsible for managing the end-to-end order processing cycle, from order booking, processing purchase orders to the generation of sales invoices. This role ensures seamless coordination between sales, finance, and logistics teams to ensure timely and accurate order fulfillment and invoicing.",
    responsibilities: [
      "Sales Order Management: Receive and process customer purchase orders in the ERP SAP; validate order details, pricing, discounts, and delivery terms.",
      "Logistics & Distribution: Plan and oversee inbound shipments (air, sea, and land); liaise with freight forwarders, customs brokers, and carriers to ensure smooth clearance and delivery.",
      "Invoicing & Documentation: Prepare and issue accurate sales invoices based on dispatched goods; ensure correct tax and compliance entries. (Experienced in Contract accounting, Milestone billing in project based).",
      "Customer Communication: Act as a point of contact for order status, invoice queries, and delivery schedules; ensure high levels of customer satisfaction.",
      "Data Management & Reporting: Maintain updated records of orders, deliveries, and invoices; generate periodic sales and billing reports for internal stakeholders.",
    ],
    skills: ["SAP ERP", "Logistics Management", "Sales & Billing", "MS Excel", "Documentation & Compliance", "Communication & Coordination"],
  },

  {
    company: "Amphenol Automotive",
    location: "India",
    role: "Senior Officer – Sales / Customer Support",
    period: "Oct 2024 – Aug 2025",
    badge: "",
    desc:
      "Understanding customer needs and driving success.",
    responsibilities: [
      "Handling OEM & Tier-1 Customers like: Tata Motors, Mahindra & Mahindra, Hyundai Mobis, VE Commercial vehicles, Autoliv, Joyson",
    ],
    skills: ["OEM Customers", "Sales", "Customer Support", "Automotive"],
  },

  {
    company: "Ravel Electronics Private Limited",
    location: "India",
    role: "Executive & Coordinator – Sales",
    period: "Apr 2023 – Oct 2024",
    badge: "🏆 Best Performer",
    desc:
      "Recognized as the best performer of the year 2023-2024.",
    responsibilities: [
      "Clients and Distributors Handling: Hindustan Agency, Global Electrocom, RDSO, Cavitak.",
      "Perform Order Acceptance, Order Validation, Order Entry, Order status & Replacement Order.",
      "Follow established processes to accept or reject customer purchase orders based on contractual requirements, internal policy, and business feasibility.",
      "Identify and communicate errors and deficiencies to the sales & customers for resolution.",
      "Interface with business stakeholders and other teams to identify and resolve problems.",
    ],
    skills: ["Order Management", "Client Handling", "ERP Systems", "Stakeholder Coordination"],
    images: ["/ravel1.jpg", "/ravel2.jpg"],
  },

  {
    company: "Amphenol Omniconnect India Private Limited",
    location: "India",
    role: "Executive – Customer Support / Sales",
    period: "Jul 2022 – Apr 2023",
    badge: "",
    desc:
      "Managed end-to-end global order fulfillment and customer support operations.",
    responsibilities: [
      "Customers Handling: Nokia, Fimer, Ericsson, Siemens Gamesa.",
      "Perform Order Acceptance, Order Validation, Order Entry, Order status & Replacement Order.",
      "Manage and execute global & internal orders for all regions in current ERP systems. Facilitate end to end process steps, ensuring orders are placed as per the agreed SLA in a safe & cost-effective manner.",
      "Follow up with customers for the missing information's details in order to fulfill the request in timely manner.",
      "Enters customer order data and billing information into ERP system and Order management system (OMS) in an accurate and timely manner.",
    ],
    skills: ["Customer Support", "Sales Operations", "ERP Systems", "Order Management Systems (OMS)", "SLA Compliance"],
  },

  {
    company: "Yazaki India Private Limited",
    location: "India",
    role: "Associate – Customer Support / Sales",
    period: "Jul 2020 – Jun 2022",
    badge: "",
    desc:
      "Responsible for sale order and sale agreement for the automotive OEM.",
    responsibilities: [
      "Customers Handling: Ford, Renault Nissan, Ashok Leyland.",
      "Responsible for sale order and sale agreement for the automotive oem.",
      "Prepare FOC SO, Scrap SO, Service SO, debit and credit note.",
      "Payment follow-ups from customer and supporting to finance team.",
      "To prepare daily, weekly, monthly and quarterly reports and analyze the possibility of increasing the business.",
    ],
    skills: ["Automotive OEM", "Sales Agreements", "Reporting & Analytics", "Finance Coordination"],
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
            6+ years of experience across automotive, electronics,
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

                {exp.images && exp.images.length > 0 && (
                  <div className="timeline-images">
                    {exp.images.map((img, i) => (
                      <div className="timeline-img-box" key={i}>
                        <img src={img} alt={`${exp.company} highlight ${i + 1}`} className="timeline-img" />
                      </div>
                    ))}
                  </div>
                )}

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
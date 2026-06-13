import React from 'react';
import './Contact.css';

const contactInfo = [
	{
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				width="20"
				height="20"
			>
				<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.41 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.87-.87a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
			</svg>
		),
		label: 'Phone (Oman)',
		value: '+968 9384 9873',
		href: 'tel:+96893849873',
	},
	{
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				width="20"
				height="20"
			>
				<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
				<polyline points="22,6 12,13 2,6" />
			</svg>
		),
		label: 'Email',
		value: 'mdaleem154@gmail.com',
		href: 'mailto:mdaleem154@gmail.com',
	},
	{
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				width="20"
				height="20"
			>
				<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
				<circle cx="12" cy="10" r="3" />
			</svg>
		),
		label: 'Location',
		value: 'Nala Baham Building, flat 502 Ghala Muscat, Oman',
		href: null,
	},
	{
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="currentColor"
				width="20"
				height="20"
			>
				<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
				<rect x="2" y="9" width="4" height="12" />
				<circle cx="4" cy="4" r="2" />
			</svg>
		),
		label: 'LinkedIn',
		value: 'mohammed-aleem-mba',
		href: 'https://www.linkedin.com/in/mohammed-aleem-mba-a9111a218/',
	},
	{
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				width="20"
				height="20"
			>
				<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
				<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
				<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
			</svg>
		),
		label: 'Instagram',
		value: '@aleeminoman',
		href: 'https://www.instagram.com/aleeminoman?igsh=MWR0ZjU3Y2t5dW04MA==',
	},
];

export default function Contact() {
	return (
		<section id="contact" className="contact section">
			<div className="container">
				<div className="contact-header fade-in">
					<span className="section-label">Get In Touch</span>
					<h2 className="section-title">Contact Me</h2>
					<div className="divider"></div>
					<p className="section-sub">
						Open to new opportunities, collaborations, and professional discussions.
						Feel free to reach out.
					</p>
				</div>

				<div className="contact-layout">
					<div className="contact-info fade-in">
						<h3>Let's Connect</h3>
						<p>
							Whether you have an opportunity, a question, or just want to say
							hello — my inbox is always open.
						</p>
						<div className="contact-cards">
							{contactInfo.map((c, i) =>
								c.href ? (
									<a
										key={i}
										href={c.href}
										target={c.href.startsWith('http')
											? '_blank'
											: '_self'}
										rel="noreferrer"
										className="contact-card"
									>
										<div className="ci-icon">{c.icon}</div>
										<div>
											<span className="ci-label">{c.label}</span>
											<span className="ci-value">{c.value}</span>
										</div>
										<svg
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											width="14"
											height="14"
											className="ci-arrow"
										>
											<path d="M5 12h14M12 5l7 7-7 7" />
										</svg>
									</a>
								) : (
									<div key={i} className="contact-card">
										<div className="ci-icon">{c.icon}</div>
										<div>
											<span className="ci-label">{c.label}</span>
											<span className="ci-value">{c.value}</span>
										</div>
									</div>
								)
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

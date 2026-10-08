import Link from "next/link";
import {areaLinks} from "./_seo/content";
import "../src/index.css";
import {fontVariables} from "./fonts";

import Logo from "../src/assets/name.png";

export const metadata = {
	metadataBase: new URL("https://jamiekerig.com"),
	title: {
		default: "Jamie Kerig - Front-End Web Developer & Graphic Designer",
		template: "%s | Jamie Kerig",
	},
	description: "Discover the creative portfolio of Jamie Kerig, a professional web designer based in Maryland. Specializing in modern, responsive websites tailored to your brand.",
	authors: [{name: "Jamie Kerig"}],
	robots: {index: true, follow: true},
	alternates: {canonical: "/"},
	icons: {icon: "/icon.png", apple: "/apple-touch-icon.png"},
	openGraph: {
		title: "Jamie Kerig | Maryland Front-End Web Developer & Graphic Designer",
		description: "Explore the creative portfolio of Jamie Kerig, a Maryland-based web designer. Specializing in modern, responsive websites tailored to elevate your brand online.",
		url: "/",
		siteName: "Jamie Kerig",
		locale: "en_US",
		type: "website",
		images: ["/og-image.png"],
	},
	twitter: {
		card: "summary_large_image",
		title: "Jamie Kerig | Maryland Front-End Web Developer & Graphic Designer",
		description: "Explore Jamie Kerig's creative portfolio of modern, responsive web design projects. Let’s bring your vision to life!",
		images: ["/og-image.png"],
	},
};

export const viewport = {themeColor: "#0a1428"};

/*structured data so search engines and ai tools know who the site is about*/
const personJsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Jamie Kerig",
	jobTitle: "Front-End Web Developer & Graphic Designer",
	url: "https://jamiekerig.com/",
	address: {"@type": "PostalAddress", addressRegion: "MD", addressCountry: "US"},
	alumniOf: "Towson University",
	sameAs: ["https://www.linkedin.com/in/jamieleedesign/", "https://www.instagram.com/pumpkinphantompaintings/"],
};

/*site name shown in search results*/
const websiteJsonLd = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: "Jamie Kerig",
	url: "https://jamiekerig.com/",
};

export default function RootLayout({children}) {
	return (
		<html lang="en" className={fontVariables}>
			<head>
				<link rel="preload" href="/header2.webp" as="image" fetchPriority="high" />
			</head>
			<body>
				<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify([personJsonLd, websiteJsonLd])}} />
				<div>
					<nav className="navbar">
						<Link href="/" className="navbar-logo" aria-label="Jamie Kerig, home">
							<img src={Logo.src} alt="Jamie Kerig" style={{display: "block", width: "100%"}} />
						</Link>
						<ul>
							<li>
								<Link href="/about/" className="u-link">
									About
								</Link>
							</li>
							<li>
								<Link href="/web/" className="u-link">
									Web
								</Link>
							</li>
							<li>
								<Link href="/graphic/" className="u-link">
									Graphic
								</Link>
							</li>
							<li>
								<Link href="/contact/" className="u-link">
									Contact
								</Link>
							</li>
						</ul>
					</nav>
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}

function Footer() {
	return (
		<footer>
			<div className="sitemap">
				<ul>
					<li>
						<a href="/privacypolicy.html" target="_blank" rel="noopener noreferrer">
							Privacy Policy
						</a>
					</li>
					<li>
						<Link href="/site-map/">Sitemap</Link>
					</li>
					{areaLinks.map((a) => (
						<li key={a.href}>
							<Link href={a.href}>{a.label}</Link>
						</li>
					))}
					<li>
						<a className="footer-social" href="https://www.linkedin.com/in/jamieleedesign/" target="_blank" rel="noopener noreferrer" aria-label="Jamie Kerig on LinkedIn">
							<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true" focusable="false">
								<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
							</svg>
						</a>
					</li>
				</ul>
			</div>
			<div className="copyright">
				<p>
					© 2026 Jamie Lee Thomas Kerig
					<br />
					Built with Next.js v.16.4.0 and React v.19.3.0
				</p>
			</div>
		</footer>
	);
}

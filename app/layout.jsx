import Link from "next/link";
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
						<img className="navbar-logo" src={Logo.src} alt="Logo" />
						<ul>
							<li>
								<Link href="/" className="u-link">
									Home
								</Link>
							</li>
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

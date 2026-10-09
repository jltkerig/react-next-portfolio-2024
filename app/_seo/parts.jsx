import Link from "next/link";
import Contactform from "@/src/components/form.jsx";
import home from "../home.module.css";
import seo from "./seo.module.css";
import palwebsite from "@/src/assets/web/pal-image.png";
import wedding2018 from "@/src/assets/web/wedding-head-block-ss.png";
import {jsonLd, townPages, areaLinks, mapEmbed, mapLink} from "./content";

/*building blocks shared by the local seo templates*/

export function JsonLd({t}) {
	return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd(t))}} />;
}

/*same dark band + overlapping form card as the homepage*/
export function ContactBand({t}) {
	return (
		<>
			<section className={home.contactBand}>
				<div className={home.contactText}>
					<p className={home.kicker}>Contact</p>
					<h2 className={home.contactTitle}>{t.contactTitle}</h2>
					<p className={home.contactCopy}>{t.contactCopy}</p>
				</div>
			</section>
			<div className={home.contactCard}>
				<Contactform />
			</div>
			<div className={seo.afterContact} />
		</>
	);
}

/*service cards with links into the portfolio (internal links with descriptive text)*/
export function ServiceCards({t}) {
	return (
		<div className={seo.cards}>
			{t.services.map((s) => {
				const body = (
					<>
						<h3 className={seo.cardTitle}>{s.title}</h3>
						<p className={seo.cardText}>{s.text}</p>
						<span className={seo.cardLink}>{s.cta || "See examples →"}</span>
					</>
				);
				/*a finished site under /web is a plain html file, so it opens in a new tab instead of through the next router*/
				return s.href.endsWith(".html") ? (
					<a key={s.title} href={s.href} target="_blank" rel="noopener noreferrer" className={seo.card}>
						{body}
					</a>
				) : (
					<Link key={s.title} href={s.href} className={seo.card}>
						{body}
					</Link>
				);
			})}
		</div>
	);
}

export function Faq({t}) {
	return (
		<div className={seo.faq}>
			{t.faq.map((f) => (
				<details key={f.q} className={seo.faqItem}>
					<summary>{f.q}</summary>
					<p>{f.a}</p>
				</details>
			))}
		</div>
	);
}

/*portfolio piece in the homepage's browser frame*/
export function Featured({t}) {
	if (t && t.featured === "wedding") {
		return (
			<a href="/web/weddinginthewoods-2018/www/index.html" target="_blank" rel="noopener noreferrer" className={home.browser} aria-label="Visit the wedding website designed for a wedding at Camp Hidden Valley in White Hall, opens in a new tab">
				<span className={home.browserBar} aria-hidden="true">
					<span />
					<span />
					<span />
				</span>
				<img src={wedding2018.src} alt="Wedding website designed and built by Jamie Kerig for a wedding at Camp Hidden Valley in White Hall, Maryland" />
			</a>
		);
	}
	return (
		<a href="/web/" className={home.browser} aria-label="See web projects, including the Stansberry Alliance website">
			<span className={home.browserBar} aria-hidden="true">
				<span />
				<span />
				<span />
			</span>
			<img src={palwebsite.src} alt="Stansberry Alliance website designed and built by Jamie Kerig" />
		</a>
	);
}

/*local context: why this town's businesses need what they need, and who the work is for*/
export function LocalContext({t}) {
	return (
		<div className={seo.twoCol}>
			<div>
				<h2 className={seo.h2}>{t.localTitle}</h2>
				{t.local.map((para) => (
					<p key={para.slice(0, 20)} className={seo.copy}>
						{para}
					</p>
				))}
			</div>
			<div className={seo.forWho}>
				<h3 className={seo.cardTitle}>{t.forWhoTitle}</h3>
				<ul>
					{t.forWho.map((w) => (
						<li key={w}>{w}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export function Examples({t}) {
	return (
		<div className={seo.cards}>
			{t.examples.map((e) => (
				<div key={e.t} className={seo.card}>
					<h3 className={seo.cardTitle}>{e.t}</h3>
					<p className={seo.cardText}>{e.d}</p>
				</div>
			))}
		</div>
	);
}

/*service-area map + the towns covered, linking any that have their own page*/
export function ServiceArea({t}) {
	const others = areaLinks.filter((a) => a.label !== t.town);
	return (
		<div className={seo.twoCol}>
			<div className={seo.map}>
				<iframe src={mapEmbed(t)} title={`Map of ${t.town}, Maryland service area`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
			</div>
			<div>
				<h2 className={seo.h2}>{t.areaTitle}</h2>
				<p className={seo.copy}>{t.areaCopy}</p>
				<Nearby t={t} />
				<p className={seo.nearby}>
					More local pages:{" "}
					{others.map((a, i) => (
						<span key={a.href}>
							{i > 0 && " · "}
							<Link href={a.href}>{a.label}</Link>
						</span>
					))}
				</p>
				<p className={seo.nearby}>
					<a href={mapLink(t)} target="_blank" rel="noopener noreferrer">
						Open in Google Maps
					</a>
				</p>
			</div>
		</div>
	);
}

export function Nearby({t}) {
	const name = (n) => (townPages[n] ? <Link href={townPages[n]}>{n}</Link> : n);
	return (
		<p className={seo.nearby}>
			Nearby:{" "}
			{t.nearby.map((n, i) => (
				<span key={n}>
					{i > 0 && (i === t.nearby.length - 1 ? " and " : ", ")}
					{name(n)}
				</span>
			))}
		</p>
	);
}

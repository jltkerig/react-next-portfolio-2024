import ImageLightbox from "@/src/components/ImageLightbox";
import PageHeader from "@/src/components/PageHeader";
import gallery from "../graphic/graphic.module.css"; /*shared editorial gallery layout*/
import styles from "./web.module.css";
import investingoutlook from "@/src/assets/web/investingoutlook.png";
import oneblade from "@/src/assets/web/oneblade-landing-screenshot.png";
import palwebsite from "@/src/assets/web/pal-image.png";
import widgetlanding from "@/src/assets/web/widget-landing-page.png";
import wedding2018 from "@/src/assets/web/wedding-head-block-ss.png";
import lifecoach from "@/src/assets/web/life-coach-head-block-ss.png";
import fabricplace from "@/src/assets/web/fabric-place-head-block-ss.png";
import fabriccontact from "@/src/assets/web/fabric-place-contact-ss.png";
import fauxreport from "@/src/assets/web/report-stock-meltup-blueprint.png";
import blackfriday from "@/src/assets/web/blackfriday-email-screenshot.png";
import investinghour from "@/src/assets/web/stansberry-investor-hour-email-ss-half.jpg";

export const metadata = {
	title: "Web Projects",
	description: "Web projects by Jamie Kerig: microsites, landing pages, lead-gen pages and e-mail templates.",
	alternates: {canonical: "/web/"},
	openGraph: {
		title: "Web Projects | Jamie Kerig",
		description: "Browse websites, microsites, lead-gen landing pages and e-mail templates designed and built by Maryland front-end developer Jamie Kerig.",
		url: "/web/",
		siteName: "Jamie Kerig",
		locale: "en_US",
		type: "website",
		images: ["/og-image.png"],
	},
	twitter: {
		card: "summary_large_image",
		title: "Web Projects | Jamie Kerig",
		description: "Browse websites, microsites, lead-gen landing pages and e-mail templates designed and built by Maryland front-end developer Jamie Kerig.",
		images: ["/og-image.png"],
	},
};

/*projects grouped by type, each group renders as its own section*/
const groups = [
	{
		word: "Websites", label: "Sites & microsites",
		blurb: "Standalone sites built to inform, convert and carry a campaign on their own.",
		projects: [
			{
				id: "pal", size: "wide",
				title: "Stansberry Alliance",
				type: "Standalone website",
				tags: ["HTML/CSS/JS", "Amazon S3"],
				text: "Built for the direct mail team. Customers received mail leading them to this site, which explained the product and offered signup.",
				image: palwebsite,
			},
			{
				id: "investing", size: "narrow", drop: true,
				title: "Investing Outlook",
				type: "WordPress microsite",
				tags: ["WordPress", "Salesforce"],
				text: "Built and deployed a four to five page WordPress site. Visitors arrived from ads, and the microsite fed leads into active campaigns housed in Salesforce.",
				image: investingoutlook,
			},
			{
				id: "wedding", size: "half",
				link: "/web/weddinginthewoods-2018/www/index.html", /*live copy in public/, opens instead of the lightbox*/
				title: "Jamie & Michael's Wedding",
				type: "Personal microsite",
				tags: ["Bootstrap"],
				text: "A site for my own wedding, focused on making event details easy for guests to find and share.",
				image: wedding2018,
			},
			{
				id: "lifecoach", size: "half", drop: true,
				link: "/web/life-coach/index.html", /*live copy in public/, opens instead of the lightbox*/
				title: "Christine Smith Life Coach",
				type: "Responsive website",
				tags: ["Figma", "HTML/CSS/JS"],
				text: "Designed in Figma for desktop, tablet and phone, then hand-coded as a responsive single-page site with a mobile menu and testimonial slider.",
				image: lifecoach,
			},
			{
				id: "fabricplace", size: "half",
				link: "/web/fabric-place/index.html",
				title: "A Fabric Place",
				type: "Retail store website",
				tags: ["Bootstrap 5", "Accessibility"],
				text: "A Baltimore fabric store site designed for older shoppers, with large type, high-contrast cards, a live open-now status, a real street map and a motion-rich slider.",
				image: fabricplace,
			},
			{
				id: "fabriccontact", size: "half", drop: true,
				title: "A Fabric Place: Contact Page",
				type: "Page design",
				tags: ["Accessibility", "Live map"],
				text: "A showpiece contact page: a photo hero, tiles for address, phone and open-now status, a split message form and a live street map.",
				image: fabriccontact,
			},
		],
	},
	{
		word: "Landing", label: "Landing pages",
		blurb: "Focused, single-purpose pages designed to capture leads and move readers to the next step.",
		projects: [
			{
				id: "oneblade", size: "narrow",
				title: "Oneblade",
				type: "Microsite landing page",
				tags: ["Lead gen", "Brand match"],
				text: "A single page styled to match its WordPress sister site. Readers engaged with the article, then clicked through to a purchase page.",
				image: oneblade,
			},
			{
				id: "widget", size: "wide", drop: true,
				title: "Favorite Stocks",
				type: "Lead gen landing page",
				tags: ["Email capture", "Two-step"],
				text: "A two page email capture flow for a marketing campaign: visitors enter their e-mail and land on a thank-you page.",
				image: widgetlanding,
			},
			{
				id: "faux", size: "half",
				title: "Faux Report",
				type: "Lead gen webpage",
				tags: ["Long-form", "Funnel"],
				text: "Designed to read like a PDF article. Calls to action throughout funneled readers into a sales page.",
				image: fauxreport,
			},
		],
	},
	{
		word: "E-mail", label: "E-mail templates",
		blurb: "Templates built to render reliably across mobile and a wide range of e-mail clients.",
		projects: [
			{
				id: "blackfriday", size: "wide",
				title: "Black Friday",
				type: "Promotional e-mail",
				tags: ["Cross-client"],
				text: "A Black Friday campaign template, designed for mobile and tested across several e-mail applications.",
				image: blackfriday,
			},
			{
				id: "investinghour", size: "narrow", drop: true,
				title: "Investing Hour",
				type: "Podcast newsletter",
				tags: ["Long-form", "Modular"],
				text: "A long-format template for the Investing Hour podcast, with distinct sections for each part of the show.",
				image: investinghour,
			},
		],
	},
];

export default function Web() {
	return (
		<div>
			<PageHeader title="Web Projects" label="A Showcase of Web Creations" sub="Browse past projects.">
				<p>This collection highlights a range of web projects, showcasing a dedication to design, development, and creating seamless user experiences.</p>
			</PageHeader>

			<div className={gallery.page}>
				{groups.map((group) => (
					<section key={group.word} className={gallery.section}>
						<header className={gallery.head}>
							<h2 className={gallery.word}>{group.word}</h2>
							<div className={gallery.intro}>
								<p className={gallery.label}>{group.label}</p>
								<p className={gallery.blurb}>{group.blurb}</p>
							</div>
						</header>

						<div className={gallery.grid}>
							{group.projects.map((p) => (
								<figure key={p.id} className={`${gallery.piece} ${gallery[p.size]} ${p.drop ? gallery.drop : ""}`}>
									{p.link ? (
										<a href={p.link} target="_blank" rel="noopener noreferrer" title={`Open the ${p.title} site in a new tab`}>
											<img className={`${styles.shot} ${styles.live}`} src={p.image.src} alt={`${p.title} ${p.type.toLowerCase()} screenshot`} />
										</a>
									) : (
										<ImageLightbox id={`web-${p.id}`} className={styles.shot} imageUrl={p.image} scroll alt={`${p.title} ${p.type.toLowerCase()} screenshot`} />
									)}
									<figcaption className={gallery.caption}>
										<span className={gallery.capTitle}>{p.title}</span>
										<span className={gallery.capType}>{p.type}</span>
									</figcaption>
									<p className={styles.text}>{p.text}</p>
									<ul className={styles.tags}>
										{[...p.tags, "Responsive"].map((t) => (
											<li key={t}>{t}</li>
										))}
									</ul>
								</figure>
							))}
						</div>
					</section>
				))}
			</div>
		</div>
	);
}

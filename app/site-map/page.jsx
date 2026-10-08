import Link from "next/link";
import PageHeader from "@/src/components/PageHeader";
import styles from "./site-map.module.css";
import {areaLinks} from "../_seo/content";

/*human-readable sitemap. /site-map rather than /sitemap so it can't clash with app/sitemap.js (sitemap.xml)*/
export const metadata = {
	title: "Sitemap",
	description: "Every page on Jamie Kerig's portfolio site: web projects, graphic design, about and contact.",
	alternates: {canonical: "/site-map/"},
};

const sections = [
	{
		title: "Main pages",
		links: [
			{href: "/", label: "Home", note: "Maryland web & graphic designer"},
			{href: "/about/", label: "About", note: "Background, history and hobbies"},
			{href: "/contact/", label: "Contact", note: "Send a message"},
		],
	},
	{
		title: "Portfolio",
		links: [
			{href: "/web/", label: "Web Projects", note: "Websites, landing pages and e-mail templates"},
			{href: "/graphic/", label: "Graphic Projects", note: "Logos, book design and print"},
		],
	},
	{
		title: "Areas served",
		links: areaLinks.map((a) => ({href: a.href, label: `Web design in ${a.label}, MD`, note: "Websites, logos and print for local businesses"})),
	},
	{
		title: "Other",
		links: [
			{href: "/privacypolicy.html", label: "Privacy Policy", note: "How the contact form handles your data", external: true},
			{href: "https://www.linkedin.com/in/jamieleedesign/", label: "LinkedIn", note: "Professional profile", external: true},
			{href: "https://www.instagram.com/pumpkinphantompaintings/", label: "Instagram", note: "Illustrations", external: true},
		],
	},
];

export default function SiteMap() {
	return (
		<div>
			<PageHeader title="Sitemap" label="Every page on the site" sub="Find your way around." />

			<div className={styles.wrap}>
				{sections.map((s) => (
					<section key={s.title} className={styles.section}>
						<h2 className={styles.title}>{s.title}</h2>
						<ul className={styles.list}>
							{s.links.map((l) => (
								<li key={l.href}>
									{l.external ? (
										<a href={l.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
											{l.label}
										</a>
									) : (
										<Link href={l.href} className={styles.link}>
											{l.label}
										</Link>
									)}
									<span className={styles.note}>{l.note}</span>
								</li>
							))}
						</ul>
					</section>
				))}
			</div>
		</div>
	);
}

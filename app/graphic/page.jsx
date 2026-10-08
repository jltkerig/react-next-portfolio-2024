import ImageLightbox from "@/src/components/ImageLightbox";
import PageHeader from "@/src/components/PageHeader";
import styles from "./graphic.module.css";
import fabriclogo from "@/src/assets/graphic/fabric_sm.jpg";
import norselogo from "@/src/assets/graphic/norsehorse_sm.jpg";
import cubelogo from "@/src/assets/graphic/cubelogo_sm.jpg";
import bookcover from "@/src/assets/graphic/book_sm.jpg";
import bookpages from "@/src/assets/graphic/book3.jpg";
import messcover from "@/src/assets/graphic/bookcovers1_sm.jpg";
import messstack from "@/src/assets/graphic/bookcovers2_sm.jpg";
import cubemenu from "@/src/assets/graphic/coffee_lg.jpg";
import rvspcard from "@/src/assets/graphic/rsvp1_sm.jpg";
import heatwavelogo from "@/src/assets/graphic/wave_sm.jpg";
import wotsposter from "@/src/assets/graphic/wots_poster_sm.jpg";
import wotspaper from "@/src/assets/graphic/wots1_sm.jpg";

export const metadata = {
	title: "Graphic Projects",
	description: "Graphic design by Jamie Kerig: logos, book design, menus, posters and event invites.",
	alternates: {canonical: "/graphic/"},
	openGraph: {
		title: "Graphic Projects | Jamie Kerig",
		description: "See logos, book designs, menus, posters and invitations from Maryland graphic designer Jamie Kerig.",
		url: "/graphic/",
		siteName: "Jamie Kerig",
		locale: "en_US",
		type: "website",
		images: ["/og-image.png"],
	},
	twitter: {
		card: "summary_large_image",
		title: "Graphic Projects | Jamie Kerig",
		description: "See logos, book designs, menus, posters and invitations from Maryland graphic designer Jamie Kerig.",
		images: ["/og-image.png"],
	},
};

/*editorial layout: each piece picks a size (wide/half/narrow) and an optional drop to stagger the columns*/
const sections = [
	{
		word: "Identity",
		label: "Logos & marks",
		blurb: "Marks and logotypes designed for small businesses and events.",
		pieces: [
			{id: "fabric", title: "A Fabric Place", type: "Logo", image: fabriclogo, size: "wide"},
			{id: "norselogo", title: "Norse Horse", type: "Logo", image: norselogo, size: "narrow", drop: true},
			{id: "cubelogo", title: "Outside the Cube", type: "Logo", image: cubelogo, size: "half"},
			{id: "heatwavelogo", title: "Heat Wave", type: "Logo", image: heatwavelogo, size: "half", drop: true},
		],
	},
	{
		word: "Books",
		label: "Covers & interiors",
		blurb: "Covers and interior layouts, including studies based on the work of other designers.",
		pieces: [
			{id: "bookcover", title: "Lucian Bernhard", type: "Book cover", image: bookcover, size: "narrow"},
			{id: "bookpages", title: "Lucian Bernhard", type: "Interior pages", image: bookpages, size: "wide", drop: true},
			{id: "messcover", title: "Keri Smith", type: "Cover redesign, side", image: messcover, size: "half", drop: true},
			{id: "messstack", title: "Keri Smith", type: "Cover redesign, front", image: messstack, size: "half"},
		],
	},
	{
		word: "Print",
		label: "Menus, posters & invites",
		blurb: "Menus, posters, newspapers and invitations made for print.",
		pieces: [
			{id: "wotsposter", title: "Word on the Street", type: "Promotional poster", image: wotsposter, size: "narrow"},
			{id: "wotspaper", title: "Word on the Street", type: "Newspaper", image: wotspaper, size: "wide", drop: true},
			{id: "cubemenu", title: "Outside the Cube", type: "Café menu", image: cubemenu, size: "wide"},
			{id: "rvspcard", title: "RSVP Card", type: "Event invite", image: rvspcard, size: "narrow", drop: true},
		],
	},
];

export default function Graphic() {
	return (
		<div>
			<PageHeader title="Graphic Projects" label="A Showcase of Graphic Works" sub="Browse past projects.">
				<p>
					I originally started college with being an illustrator as my goal but changed mid-way to finish in graphic design. I still love to do illustrations as a hobby and post them regularly on{" "}
					<a href="https://www.instagram.com/pumpkinphantompaintings/" target="_blank" rel="noopener noreferrer">
						instagram
					</a>
					. On this page you'll find my past graphic design projects.
				</p>
			</PageHeader>

			<div className={styles.page}>
				{sections.map((s) => (
					<section key={s.word} className={styles.section}>
						<header className={styles.head}>
							<h2 className={styles.word}>{s.word}</h2>
							<div className={styles.intro}>
								<p className={styles.label}>{s.label}</p>
								<p className={styles.blurb}>{s.blurb}</p>
							</div>
						</header>

						<div className={styles.grid}>
							{s.pieces.map((p) => (
								<figure key={p.id} className={`${styles.piece} ${styles[p.size]} ${p.drop ? styles.drop : ""}`}>
									<ImageLightbox id={`graphic-${p.id}`} className={styles.art} imageUrl={p.image} fit alt={`${p.title} ${p.type.toLowerCase()}`} />
									<figcaption className={styles.caption}>
										<span className={styles.capTitle}>{p.title}</span>
										<span className={styles.capType}>{p.type}</span>
									</figcaption>
								</figure>
							))}
						</div>
					</section>
				))}
			</div>
		</div>
	);
}

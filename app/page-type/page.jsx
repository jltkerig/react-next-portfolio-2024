import Link from "next/link";
import PageHeader from "@/src/components/PageHeader";
import QuoteMark from "@/src/components/QuoteMark";
import {flowOptions} from "./ContactFlow";
import greenery from "@/src/assets/greenery.png";
import palwebsite from "@/src/assets/web/pal-image.png";
import phoneIcon from "@/src/assets/smartphone.svg";
import pointerIcon from "@/src/assets/mouse-pointer-2.svg";
import globeIcon from "@/src/assets/globe.svg";
import hero from "../hero.module.css";
import home from "../home.module.css";
import gallery from "../graphic/graphic.module.css";
import styles from "./page-type.module.css";

export const metadata = {
	title: "Typography",
	robots: {index: false}, /*internal reference page*/
};

/*every sample uses the real site classes/components, so this page shows exactly what the site renders*/
function Spec({name, font, children}) {
	return (
		<div className={styles.spec}>
			<div className={styles.specMeta}>
				<code>{name}</code>
				<span>{font}</span>
			</div>
			<div className={styles.specSample}>{children}</div>
		</div>
	);
}

/*homepage before/after: each "old" block is the look before this redesign, each "current" block uses the same markup + styles as app/page.jsx*/

const greeneryImg = <img className="round-image" src={greenery.src} alt="Greenery" />;

function Buttons() {
	return (
		<div className={`two-column-button ${styles.headerButtons}`}>
			<Link href="/web/">
				<button className="blue" type="button">
					View Portfolio
				</button>
			</Link>
			<Link href="/contact/">
				<button className="white" type="button">
					Contact Me
				</button>
			</Link>
		</div>
	);
}

/*old hero: the original .tag-line card and type*/
function OldHero() {
	return (
		<div className={styles.heroBg}>
			<div className="tag-line">
				<h1>Crafting Beautiful, User-Friendly Websites that Work for You</h1>
				<h2>Strategic design with purpose{"—"}helping your brand connect, engage and grow online.</h2>
				<div className="two-column-button">
					<Link href="/web/">
						<button className="blue" type="button">
							View Portfolio
						</button>
					</Link>
					<Link href="/contact/">
						<button className="white" type="button">
							Contact Me
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

/*current hero (hero.module.css)*/
function HomeHero() {
	return (
		<div className={styles.heroBg}>
			<div className={hero.card}>
				<p className={hero.eyebrow}>Maryland Web &amp; Graphic Designer</p>
				<h1 className={hero.title}>
					<span>
						Crafting <em>beautiful</em>
					</span>{" "}
					<span>websites that work for you</span>
				</h1>
				<p className={hero.sub}>Strategic design with purpose</p>
				<p className={hero.intro}>User-friendly websites and branding that help your business connect, engage and grow online.</p>
				<Buttons />
			</div>
		</div>
	);
}

const intro =
	"I'm a Maryland-based graphic designer passionate about crafting visually compelling and impactful designs that tell your brand’s unique story. From logo design and branding to web and print materials, I create thoughtful, customized solutions that engage audiences and leave a lasting impression. Let’s work together to bring your vision to life. Feel free to explore my portfolio using the links above!";

/*section under the hero. old = Welcome! with the yellow underline; current = option 7 type*/
/*current side image: portfolio site in a browser frame (home.module.css, same as app/page.jsx)*/
const browserImg = (
	<a href="/web/" className={home.browser} aria-label="See web projects, including the Stansberry Alliance website">
		<span className={home.browserBar} aria-hidden="true">
			<span />
			<span />
			<span />
		</span>
		<img src={palwebsite.src} alt="Stansberry Alliance website designed and built by Jamie Kerig" />
	</a>
);

/*band under the service cards. old: decorative photo. current: credentials*/
function UnderCards({old}) {
	if (old) return <div className="row background-image-01">&nbsp;</div>;
	return (
		<section className={home.statsBand}>
			<div className={home.stats}>
				{[
					{n: "10+", l: "Years designing for the web"},
					{n: "2-in-1", l: "Designer and front-end developer, from logo to launch"},
					{n: "BS", l: "Graphic Design, Towson University"},
					{n: "MD", l: "Maryland-based, working with local businesses"},
				].map((s) => (
					<div key={s.l} className={home.stat}>
						<span className={home.statNum}>{s.n}</span>
						<span className={home.statLabel}>{s.l}</span>
					</div>
				))}
			</div>
		</section>
	);
}

/*new: service area band above the footer (no old version)*/
function ServiceArea() {
	return (
		<section className={home.areaBand}>
			<div className={home.areaInner}>
				<p className={home.kicker}>Service area</p>
				<h2 className={home.areaTitle}>Proudly serving businesses across Maryland</h2>
				<ul className={home.chips}>
					{["Baltimore", "Towson", "Annapolis", "Columbia", "Ellicott City", "Frederick", "Hunt Valley", "Remote, anywhere"].map((t) => (
						<li key={t}>{t}</li>
					))}
				</ul>
			</div>
		</section>
	);
}

function Section({old}) {
	const image = old ? greeneryImg : browserImg;
	return (
		<div className={`main-column ${styles.lowerInner}`}>
			<div className="row justify-row">
				<div className="column-split column-padding">
					{old ? (
						<>
							<h2 className="alt">
								<span className="divider-2">Welcome!</span>
							</h2>
							<h2 className="cerulean">Maryland-based design</h2>
						</>
					) : (
						<>
							<h2 className={`alt ${hero.sectionHeading}`}>Branding, web &amp; print design in Maryland</h2>
							<h2 className={`cerulean ${hero.sectionBlue}`}>Design that tells your story</h2>
						</>
					)}
					<h3>Helping you craft a strong business identity from the ground up.</h3>
					<p>{intro}</p>
				</div>
				<div className={`column-split ${styles.sideCol}`}>{image}</div>
			</div>
		</div>
	);
}

/*service boxes. icons drawn with a css mask so each look can colour them*/
const services = [
	{icon: phoneIcon, title: "Optimized Mobile Design", text: "Sleek, user-friendly mobile designs that ensure your brand looks great and performs seamlessly across all devices."},
	{
		icon: pointerIcon,
		title: "Intuitive UX Design",
		text: "Every design decision is driven by a deep understanding of user needs, ensuring seamless interactions and creating lasting connections between users and your brand.",
	},
	{
		icon: globeIcon,
		title: "Your Gateway to Customers",
		text: "A strong online presence starts with a website that works. Designed to attract, engage, and convert visitors, your site will be a powerful tool in connecting with customers and growing your business.",
	},
];

/*old: plain white cards on the blue brush band. current: gold bar + pale blue icon circle on the photo/wave band*/
function ServiceBoxes({old}) {
	return (
		<div className={old ? "blue-container" : hero.servicesBand}>
			<div className={`main-column ${styles.boxesInner} ${old ? styles.boxOld : styles.boxNew}`}>
				<div className={styles.boxGrid}>
					{services.map((s) => (
						<div key={s.title} className={styles.box}>
							<div className={styles.boxIcon}>
								<span className={styles.boxGlyph} style={{WebkitMaskImage: `url(${s.icon.src})`, maskImage: `url(${s.icon.src})`}} aria-hidden="true" />
							</div>
							<h4 className={styles.boxTitle}>{s.title}</h4>
							<span className={styles.boxLine} aria-hidden="true" />
							<p className={styles.boxCopy}>{s.text}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

/*collapsible before/after block*/
function Fold({title, open = false, children}) {
	return (
		<details className={styles.fold} open={open}>
			<summary className={styles.foldTitle}>{title}</summary>
			{children}
		</details>
	);
}
function Group({title, children}) {
	return (
		<section className={styles.group}>
			<h2 className={styles.groupTitle}>{title}</h2>
			{children}
		</section>
	);
}

export default function PageType() {
	return (
		<div>
			{/*homepage, top to bottom: before (collapsed) vs after (open, same markup + styles as app/page.jsx)*/}
			<section className={styles.heroOptions}>
				<p className={styles.previewNote}>Homepage 1 · Hero</p>
				<Fold title="Old">
					<OldHero />
				</Fold>
				<Fold title="Current" open>
					<HomeHero />
				</Fold>

				<p className={styles.previewNote}>Homepage 2 · Section under the hero</p>
				<Fold title="Before: Welcome! + greenery">
					<Section old />
				</Fold>
				<Fold title="After: SEO heading + website in a browser frame" open>
					<Section />
				</Fold>

				<p className={styles.previewNote}>Homepage 3 · Service cards</p>
				<Fold title="Before: plain cards on the brush band">
					<ServiceBoxes old />
				</Fold>
				<Fold title="After: gold bar, pale blue icon circles, photo + wave band" open>
					<ServiceBoxes />
				</Fold>

				<p className={styles.previewNote}>Homepage 4 · Under the cards</p>
				<Fold title="Before: decorative laptop photo">
					<UnderCards old />
				</Fold>
				<Fold title="After: credentials" open>
					<UnderCards />
				</Fold>

				<p className={styles.previewNote}>Ideas · Credentials flowing into the contact section</p>
				{flowOptions.map((o) => (
					<Fold key={o.name} title={o.name} open>
						{o.el}
					</Fold>
				))}

				<p className={styles.previewNote}>Homepage 5 · Above the footer (new)</p>
				<Fold title="After: service area" open>
					<ServiceArea />
				</Fold>
			</section>

			<div className={styles.noTop}>
				<PageHeader title="Typography" label="Every type style on the site" sub="Reference page.">
					<p>Each sample below uses the site’s real classes, so it renders exactly as it does on the live pages. The left column names the class or element and its font.</p>
				</PageHeader>
			</div>

			<div className="row">
				<div className="main-column bottom-padding-90">
					<div className={styles.wrap}>
						<Group title="Fonts loaded">
							<Spec name="--font-unna" font="Unna 400 / 700, italic">
								<p className={styles.fontRow} style={{fontFamily: "var(--font-unna)"}}>
									Aa Bb Cc 0123 <em>Italic</em> <strong>Bold</strong>
								</p>
							</Spec>
							<Spec name="--font-merriweather" font="Merriweather 300 / 400 / 700">
								<p className={styles.fontRow} style={{fontFamily: "var(--font-merriweather)"}}>
									Aa Bb Cc 0123 <em>Italic</em> <strong>Bold</strong>
								</p>
							</Spec>
							<Spec name="--font-fira-sans" font="Fira Sans Extra Condensed 300 / 500 / 700">
								<p className={styles.fontRow} style={{fontFamily: "var(--font-fira-sans)"}}>
									Aa Bb Cc 0123 <em>Italic</em> <strong>Bold</strong>
								</p>
							</Spec>
							<Spec name="--font-roboto-condensed" font="Roboto Condensed 300 / 400 / 500 / 700">
								<p className={styles.fontRow} style={{fontFamily: "var(--font-roboto-condensed)"}}>
									Aa Bb Cc 0123 <em>Italic</em> <strong>Bold</strong>
								</p>
							</Spec>
							</Group>

						<Group title="Headings">
							<Spec name="h1" font="Unna 700 italic, 4em">
								<h1>Web Projects</h1>
							</Spec>
							<Spec name="h1 + .divider-2" font="Unna, yellow underline">
								<h1>
									<span className="divider-2">Web Projects</span>
								</h1>
							</Spec>
							<Spec name="h2.alt + .divider-2" font="Unna 700 italic">
								<h2 className="alt">
									<span className="divider-2">Welcome!</span>
								</h2>
							</Spec>
							<Spec name="h2" font="Roboto Condensed 400, 30px">
								<h2>A Showcase of Web Creations</h2>
							</Spec>
							<Spec name="h2.cerulean" font="Roboto Condensed, bright blue">
								<h2 className="cerulean">Maryland-based design</h2>
							</Spec>
							<Spec name="h3" font="Fira Sans 300 uppercase, 22px">
								<h3>Browse past projects.</h3>
							</Spec>
							<Spec name="h4" font="Fira Sans 500 uppercase, 24px">
								<h4>Optimized Mobile Design</h4>
							</Spec>
						</Group>

						<Group title="Body">
							<Spec name=".main-column p" font="Merriweather 400, 1.3em">
								<p>
									I'm a Maryland-based graphic designer passionate about crafting visually compelling and impactful designs that tell your brand’s unique story. <a href="#">This is a link.</a>
								</p>
							</Spec>
							<Spec name="ul.custom-list .bullet" font="Merriweather, icon bullets">
								<ul className="custom-list">
									<li className="bullet grad">I graduated from Towson University in 2013.</li>
									<li className="bullet work">I currently work as a front end developer.</li>
									<li className="bullet check">Halloween is my favorite holiday.</li>
								</ul>
							</Spec>
							<Spec name="blockquote + cite" font="Merriweather / Roboto Condensed">
								<blockquote>
									Design is not just what it looks like and feels like. Design is how it works.
									<br />
									<cite>Steve Jobs</cite>
								</blockquote>
							</Spec>
							<Spec name="<QuoteMark />" font="SVG, replaces Vollkorn 800">
								<div className={styles.quote}>
									<QuoteMark className={styles.quoteOpen} />
									<p>Jamie brought our brand to life with a site that is easy to use and lovely to look at.</p>
									<QuoteMark close className={styles.quoteClose} />
								</div>
							</Spec>
						</Group>

						<Group title="Page header (all inner pages)">
							<Spec name="PageHeader" font="Unna / Fira Sans / Fira Sans / Merriweather">
								<div className={styles.inset}>
									<PageHeader title="Graphic Projects" label="A Showcase of Graphic Works" sub="Browse past projects.">
										<p>Intro paragraph in the page header, matching the body text size.</p>
									</PageHeader>
								</div>
							</Spec>
						</Group>

						<Group title="Homepage hero">
							<Spec name="hero.module.css" font="Fira Sans / Unna / Merriweather">
								<div className={hero.card}>
									<p className={hero.eyebrow}>Maryland Web &amp; Graphic Designer</p>
									<h1 className={hero.title}>
										Crafting <em>beautiful</em>, user-friendly websites that work for you
									</h1>
									<p className={hero.sub}>Strategic design with purpose{"—"}helping your brand connect, engage and grow online.</p>
								</div>
							</Spec>
						</Group>

						<Group title="Galleries (Web + Graphic)">
							<Spec name=".word / .label / .blurb" font="Unna / Fira Sans / Merriweather">
								<div className={gallery.head}>
									<h2 className={gallery.word}>Identity</h2>
									<p className={gallery.label}>Logos &amp; marks</p>
									<p className={gallery.blurb}>Marks and logotypes designed for small businesses and events.</p>
								</div>
							</Spec>
							<Spec name=".caption" font="Fira Sans uppercase">
								<div className={gallery.caption}>
									<span className={gallery.capTitle}>A Fabric Place</span>
									<span className={gallery.capType}>Logo</span>
								</div>
							</Spec>
						</Group>

						<Group title="Project cards (old pages)">
							<Spec name=".project-title / .project-sub-title / .project-briefing" font="Unna / Fira Sans / Merriweather">
								<div className="project-title">Stansberry Alliance</div>
								<div className="project-sub-title">Standalone website on Amazon s3</div>
								<p className={`project-briefing ${styles.autoHeight}`}>Website built for the direct mail team, explaining the product and offering signup.</p>
							</Spec>
						</Group>

						<Group title="Buttons">
							<Spec name="button.blue / button.white" font="Roboto Condensed 400, 20px">
								<div className="two-column-button">
									<button className="blue" type="button">
										View Portfolio
									</button>
									<button className="white" type="button">
										Contact Me
									</button>
								</div>
							</Spec>
							<Spec name="button.contact" font="Roboto Condensed 500, 30px">
								<button className="contact" type="button">
									Send
								</button>
							</Spec>
						</Group>

						<Group title="Forms">
							<Spec name="legend / label / input / textarea" font="Fira Sans / Roboto Condensed">
								<fieldset className={styles.formReset}>
									<legend>Contact Form</legend>
									<label htmlFor="pt-name">Name</label>
									<input id="pt-name" type="text" placeholder="Name" />
									<label htmlFor="pt-msg">Message</label>
									<textarea id="pt-msg" placeholder="Send me an email" />
								</fieldset>
							</Spec>
						</Group>

						<Group title="Footer">
							<Spec name="footer p / footer li" font="Roboto Condensed 300, 16px">
								<footer className={styles.footerSample}>
									<ul>
										<li>Privacy Policy</li>
									</ul>
									<p>© 2026 Jamie Lee Thomas Kerig</p>
								</footer>
							</Spec>
						</Group>

						</div>
				</div>
			</div>
		</div>
	);
}

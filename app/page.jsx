import Link from "next/link";
import Contactform from "@/src/components/form.jsx";
import hero from "./hero.module.css";
import home from "./home.module.css";
import palwebsite from "@/src/assets/web/pal-image.png";
import icon1 from "@/src/assets/smartphone.svg";
import icon2 from "@/src/assets/mouse-pointer-2.svg";
import icon3 from "@/src/assets/globe.svg";

export default function Home() {
	return (
		<div>
			<div className="landingpage">
				<div className="main-column main-column-p60">
					<div className="row">
						<div className={`fadeInUp-animation ${hero.card}`}>
							<p className={hero.eyebrow}>Maryland Web &amp; Graphic Designer</p>
							<h1 className={hero.title}>
								<span>
									Crafting <em>beautiful</em>
								</span>{" "}
								<span>websites that work for you</span>
							</h1>
							<p className={hero.sub}>Strategic design with purpose</p>
							<p className={hero.intro}>User-friendly websites and branding that help your business connect, engage and grow online.</p>
							<div className={`two-column-button ${hero.buttons}`}>
								<Link href="/web/">
									<button className="blue" type="submit" value="Submit">
										View Portfolio
									</button>
								</Link>
								<Link href="/contact/">
									<button className="white" type="submit" value="Submit">
										Contact Me
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="main-column main-column-p90">
				<div className="row justify-row">
					<div className="column-split column-padding">
						<h2 className={`alt ${hero.sectionHeading}`}>Branding, web &amp; print design in Maryland</h2>

						<h2 className={`cerulean ${hero.sectionBlue}`}>Design that tells your story</h2>
						<h3>Helping you craft a strong business identity from the ground up.</h3>
						<p>
							I'm a Maryland-based graphic designer passionate about crafting visually compelling and impactful designs that tell your brand’s unique story. From logo design and branding to web and print materials, I create thoughtful, customized
							solutions that engage audiences and leave a lasting impression. Let’s work together to bring your vision to life. Feel free to explore my portfolio using the links above!
						</p>
					</div>
					<div className={`column-split ${home.sideCol}`}>
						{/*portfolio piece in a browser frame*/}
						<a href="/web/" className={home.browser} aria-label="See web projects, including the Stansberry Alliance website">
							<span className={home.browserBar} aria-hidden="true">
								<span />
								<span />
								<span />
							</span>
							<img src={palwebsite.src} alt="Stansberry Alliance website designed and built by Jamie Kerig" />
						</a>
					</div>
				</div>
			</div>

			<div className={hero.servicesBand}>
				<div className="main-column main-column-p90">
					<div className="box-container">
						<div className="target-box">
							<div className="icon-circle">
								<img className="blue-icons" src={icon1.src} alt="Smart Phone Icon" />
							</div>
							<h4 className="text-center">Optimized Mobile Design</h4>
							<span className="divider-3">&nbsp;</span>
							<p>Sleek, user-friendly mobile designs that ensure your brand looks great and performs seamlessly across all devices.</p>
						</div>
						<div className="target-box">
							<div className="icon-circle">
								<img className="blue-icons" src={icon2.src} alt="Mouse Pointer Icon" />
							</div>
							<h4 className="text-center">Intuitive UX Design</h4>
							<span className="divider-3">&nbsp;</span>
							<p>Every design decision is driven by a deep understanding of user needs, ensuring seamless interactions and creating lasting connections between users and your brand. </p>
						</div>
						<div className="target-box">
							<div className="icon-circle">
								<img className="blue-icons" src={icon3.src} alt="Globe Icon" />
							</div>
							<h4 className="text-center">Your Gateway to Customers</h4>
							<span className="divider-3">&nbsp;</span>
							<p>A strong online presence starts with a website that works. Designed to attract, engage, and convert visitors, your site will be a powerful tool in connecting with customers and growing your business.</p>
						</div>
					</div>
					<section className="second-section"></section>
				</div>
			</div>

			{/*credentials (replaces the decorative photo band)*/}
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

			{/*contact: dark blue band with the heading, form card overlapping its bottom edge*/}
			<section className={home.contactBand}>
				<div className={home.contactText}>
					<p className={home.kicker}>Contact</p>
					<h2 className={home.contactTitle}>Have a question?</h2>
					<p className={home.contactCopy}>
						Got questions about web or design? Whether you need advice, have a project idea, or just want to chat about creative solutions, drop me a message and I’ll get back to you as soon as I can.
					</p>
				</div>
			</section>
			<div className={home.contactCard}>
				<Contactform></Contactform>
			</div>

			{/*service area (local seo). towns are placeholders until confirmed*/}
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
		</div>
	);
}

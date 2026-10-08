import headshot from "@/src/assets/jamie-headshot-sq.png";

export const metadata = {
	title: "About",
	description: "Graphic designer and front-end developer from Maryland. Towson University graduate, 9+ years at Marketwise.",
	alternates: {canonical: "/about/"},
	openGraph: {
		title: "About Jamie Kerig",
		description: "Meet Jamie Kerig, a Maryland graphic designer and front-end developer with a Towson University design degree and 9+ years building web pages and e-mails at Marketwise.",
		url: "/about/",
		siteName: "Jamie Kerig",
		locale: "en_US",
		type: "website",
		images: ["/og-image.png"],
	},
	twitter: {
		card: "summary_large_image",
		title: "About Jamie Kerig",
		description: "Meet Jamie Kerig, a Maryland graphic designer and front-end developer with a Towson University design degree and 9+ years building web pages and e-mails at Marketwise.",
		images: ["/og-image.png"],
	},
};

export default function About() {
	return (
		<div>
			<div className="row">
				<div className="main-column main-column-p90">
					<section className="top-section top-column-padding" id="about">
						<div className="column-split center column-padding">
							<h1>
								<span className="divider-2">About myself</span>
							</h1>

							<h2>Versatile Visual Communicator</h2>
							<h3>Creative. Ambitious. Resourceful. </h3>
							<p>
								<img className="headshot" src={headshot.src} alt="headshot" />
								I'm a dedicated graphic designer who thrives on transforming ideas into visually compelling stories. With a keen eye for detail and a passion for effective communication through design, I specialize in creating memorable brand
								identities and user-friendly interfaces. I enjoy blending creativity with strategy to deliver designs that resonate and inspire. Let's collaborate and bring your vision to life!
							</p>
							<h2>History</h2>
							<h3>Where I've been and what I've learned. </h3>
							<ul className="custom-list">
								<li className="bullet grad">I graduated from Towson University in 2013 with a Bachelor of Science. My major was graphic design. </li>
								<li className="bullet intern">I spent a year at Adventure Web, starting as an intern and then being hired full-time as a front-end web developer.</li>
								<li className="bullet work">I currently work for Marketwise as a front end developer and have been working for them for over 9 years now!</li>
							</ul>
							<h2>Hobbies</h2>
							<h3>Learn a little more about me.</h3>

							<p>
								I have a few hobbies that I really enjoy. I love hiking because it gets me outside and lets me see beautiful scenery. Gardening is another favorite; it's nice to take care of plants and watch them grow. I also like illustrating, as it
								gives me a chance to be creative and draw whatever comes to mind. These activities help me relax and stay active.
							</p>
							<p>Here are some facts about me:</p>
							<ul className="custom-list">
								<li className="bullet check">Halloween is my favorite holiday.</li>
								<li className="bullet check">I tend to lean towards the color blue if given a choice of colors.</li>
								<li className="bullet check">I really enjoy having a cup of coffee everyday.</li>
							</ul>
							<p>&nbsp;</p>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}

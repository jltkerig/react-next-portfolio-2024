import Link from "next/link";
import Contactform from "@/src/components/form.jsx";
import greenery from "@/src/assets/greenery.png";
import icon1 from "@/src/assets/smartphone.svg";
import icon2 from "@/src/assets/mouse-pointer-2.svg";
import icon3 from "@/src/assets/globe.svg";

export default function Home() {
	return (
		<div>
			<div className="landingpage">
				<div className="main-column main-column-p60">
					<div className="row">
						<div className="tag-line">
							<h1 className="fadeInUp-animation">Crafting Beautiful, User-Friendly Websites that Work for You</h1>
							<h2>Strategic design with purpose{"\u2014"}helping your brand connect, engage and grow online.</h2>
							<div className="two-column-button">
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
						<h2 className="alt">
							<span className="divider-2">Welcome!</span>
						</h2>

						<h2 className="cerulean">Maryland-based design</h2>
						<h3>Helping you craft a strong business identity from the ground up.</h3>
						<p>
							I'm a Maryland-based graphic designer passionate about crafting visually compelling and impactful designs that tell your brand’s unique story. From logo design and branding to web and print materials, I create thoughtful, customized
							solutions that engage audiences and leave a lasting impression. Let’s work together to bring your vision to life. Feel free to explore my portfolio using the links above!
						</p>
					</div>
					<div className="column-split">
						<img className="round-image" src={greenery.src} alt="Greenery" />
					</div>
				</div>
			</div>

			<div className="blue-container">
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

			<div className="row background-image-01">&nbsp;</div>
			<div className="row">
				<div className="main-column top-padding-60 ">
					<div className="column-split center column-padding">
						<h2 className="alt">
							<span className="divider-2">Contact</span>
						</h2>

						<h2>Have a question?</h2>
						<h3>Feel free to reach out.</h3>
						<p>
							Got questions about web or design? I’m here to help! Whether you need advice, have a project idea, or just want to chat about creative solutions, feel free to reach out. Simply drop me a message, and I’ll get back to you as soon as I
							can!
						</p>
					</div>
					<div className="contact-form-padding">
						<Contactform></Contactform>
					</div>
				</div>
			</div>
		</div>
	);
}

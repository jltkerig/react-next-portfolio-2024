import Contactform from "@/src/components/form.jsx";
import PageHeader from "@/src/components/PageHeader";

export const metadata = {
	title: "Contact",
	description: "Get in touch with Jamie Kerig about web design, graphic design or a project idea.",
	alternates: {canonical: "/contact/"},
	openGraph: {
		title: "Contact Jamie Kerig",
		description: "Have a web or design project in mind? Send Jamie Kerig a message about websites, branding or graphic design.",
		url: "/contact/",
		siteName: "Jamie Kerig",
		locale: "en_US",
		type: "website",
		images: ["/og-image.png"],
	},
	twitter: {
		card: "summary_large_image",
		title: "Contact Jamie Kerig",
		description: "Have a web or design project in mind? Send Jamie Kerig a message about websites, branding or graphic design.",
		images: ["/og-image.png"],
	},
};

export default function Contact() {
	return (
		<div>
			<PageHeader title="Contact" label="Have a question?" sub="Feel free to reach out.">
				<p>
					Got questions about web or design? I’m here to help! Whether you need advice, have a project idea, or just want to chat about creative solutions, feel free to reach out. Simply drop me a message, and I’ll get back to you as soon as I can!
				</p>
			</PageHeader>
			<div className="row">
				<div className="main-column">
					<div className="contact-fix-height">
						<Contactform></Contactform>
					</div>
				</div>
			</div>
		</div>
	);
}

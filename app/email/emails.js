import blackfriday from "@/src/assets/web/blackfriday-email-screenshot.png";

/*e-mails shown in the inbox previews. html lives in public/email/<slug>/<file>; add new ones here*/
export const emails = [
	{
		slug: "black-friday", file: "black-friday-email.html", size: "wide",
		title: "Black Friday",
		type: "Promotional e-mail",
		tags: ["Cross-client", "Table layout"],
		text: "A Black Friday campaign template, designed for mobile and tested across several e-mail applications.",
		image: blackfriday,
		subject: "Our Bestselling Ideas",
		sender: "Jamie Kerig",
		address: "jamiekerig@example.com",
		preview: "Here at the research desk, we scan through the very best investment opportunities...",
	},
];

export function getEmail(slug) {
	return emails.find((e) => e.slug === slug);
}

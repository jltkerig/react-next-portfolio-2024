import blackfriday from "@/src/assets/web/blackfriday-email-screenshot.png";
import allianceWelcome from "@/src/assets/web/alliance-welcome-email-screenshot.png";

/*e-mails shown in the inbox previews. html lives in public/email/<slug>/<file>; add new ones here*/
export const emails = [
	{
		slug: "black-friday", file: "black-friday-email.html", size: "wide",
		title: "Black Friday",
		type: "Promotional e-mail",
		tags: ["Cross-client", "Product advertisement"],
		text: "A Black Friday campaign template, designed for mobile and tested across several e-mail applications.",
		image: blackfriday,
		subject: "Our Bestselling Ideas",
		sender: "Jamie Kerig",
		address: "jamiekerig@example.com",
		preview: "Here at the research desk, we scan through the very best investment opportunities...",
	},
	{
		slug: "investinghour", file: "investing-hour-email.html",
		title: "Investing Hour",
		type: "Podcast newsletter",
		subject: "How to Get Past the Missing Piece of the Investing Puzzle",
		sender: "Jamie Kerig",
		address: "jamiekerig@example.com",
		preview: "\"I was at this bar,\" my roommate Jeff told me back in college...",
	},
	{
		slug: "alliance-welcome", file: "alliance-email.html",
		title: "Stansberry Alliance Invitation",
		type: "Invitation e-mail",
		tags: ["Mobile-responsive", "Table layout"],
		text: "An invitation e-mail with a fluid, mobile-responsive layout and an HTML button that holds up across e-mail clients.",
		image: allianceWelcome,
		subject: "Stansberry Alliance Invitation",
		sender: "Jamie Kerig",
		address: "jamiekerig@example.com",
		preview: "Keep this email. It contains your account access to the Stansberry Alliance...",
	},
];

export function getEmail(slug) {
	return emails.find((e) => e.slug === slug);
}

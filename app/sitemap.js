export const dynamic = "force-static";

const site = "https://jamiekerig.com";

/*generates sitemap.xml at build time. add new pages here*/
export default function sitemap() {
	const lastModified = new Date();

	return [
		{url: `${site}/`, lastModified, changeFrequency: "monthly", priority: 1},
		{url: `${site}/about/`, lastModified, changeFrequency: "yearly", priority: 0.8},
		{url: `${site}/web/`, lastModified, changeFrequency: "monthly", priority: 0.9},
		{url: `${site}/graphic/`, lastModified, changeFrequency: "monthly", priority: 0.9},
		{url: `${site}/contact/`, lastModified, changeFrequency: "yearly", priority: 0.7},
		{url: `${site}/privacypolicy.html`, lastModified, changeFrequency: "yearly", priority: 0.3},
		{url: `${site}/site-map/`, lastModified, changeFrequency: "yearly", priority: 0.3},
	];
}

export const dynamic = "force-static";

/*generates robots.txt at build time*/
export default function robots() {
	return {
		rules: [{userAgent: "*", allow: "/"}],
		sitemap: "https://jamiekerig.com/sitemap.xml",
	};
}

/*shared pieces for the json-ld on every page. the person and website get a fixed @id so other markup can point at them instead of repeating them*/
export const SITE = "https://jamiekerig.com";
export const PERSON_ID = `${SITE}/#person`;
export const WEBSITE_ID = `${SITE}/#website`;
export const personRef = {"@id": PERSON_ID};

/*an article page: who wrote it, who published it and when. author and publisher point at the person defined in the layout*/
export function articleJsonLd({slug, title, description, published}) {
	const url = `${SITE}/articles/${slug}/`;
	return {
		"@context": "https://schema.org",
		"@type": "Article",
		"@id": `${url}#article`,
		headline: title,
		description,
		url,
		mainEntityOfPage: url,
		datePublished: published,
		inLanguage: "en-US",
		image: `${SITE}/og-image.png`,
		author: personRef,
		publisher: personRef,
		isPartOf: {"@id": WEBSITE_ID},
	};
}

/*the contact page, about the person. no phone or email here on purpose: the page uses a form*/
export function contactJsonLd() {
	const url = `${SITE}/contact/`;
	return {
		"@context": "https://schema.org",
		"@type": "ContactPage",
		"@id": `${url}#webpage`,
		name: "Contact Jamie Kerig",
		url,
		inLanguage: "en-US",
		about: personRef,
		isPartOf: {"@id": WEBSITE_ID},
	};
}

export function JsonLdScript({data}) {
	return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(data)}} />;
}

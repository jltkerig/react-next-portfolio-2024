/*per-town content for the local seo pages.
each town gets its own copy (not just the name swapped): local context, who the work is for, example projects, services, faq and contact wording, so no two pages read alike*/
export const towns = {
	belair: {
		town: "Bel Air",
		slug: "web-design-bel-air-md",
		description: "Websites, logos and print design for Bel Air shops, practices and Main Street businesses, from Maryland web and graphic designer Jamie Kerig.",
		h1: ["Web design and branding for ", "Bel Air", " businesses"],
		servicesTitle: "How I help Bel Air businesses",
		services: [
			{title: "Websites", text: "Clear, credible sites for shops, practices and offices, with your hours, location and services easy to find on a phone.", href: "/web/"},
			{title: "Logo refresh", text: "Update a dated logo, or build a new identity that feels as established as your business.", href: "/graphic/"},
			{title: "Print to match", text: "Menus, signs, flyers and business cards that look like they came from the same place as your website.", href: "/graphic/"},
		],
		forWhoTitle: "Businesses I design for",
		examplesTitle: "What a Bel Air project might look like",
		areaTitle: "Close to Main Street",
		areaCopy: "I’m based in Maryland and work with businesses across Bel Air and the rest of Harford County. If it helps to meet and look over your shop or office together, we can. Everything else is easy to handle by phone, e-mail or video.",
		contactTitle: "Let’s talk about your Bel Air business",
		contactCopy: "Tell me what you do and what you’d like to change, whether that’s a new site, a logo refresh or a set of menus, and I’ll get back to you soon.",
		mapQuery: "Bel Air, MD",
		intro: "I help Bel Air businesses look professional and get found online, from a first logo to a fast, mobile-friendly website. You work with one designer who handles the branding, the website and the print pieces, so everything looks like it belongs together.",
		localTitle: "Design for Harford County’s county seat",
		local: [
			"Bel Air is the county seat of Harford County, and its historic Main Street mixes independent shops, restaurants, law and medical offices, and the county’s government and professional services. Many of those businesses compete for the same local customers, and the first place those customers check is usually a phone.",
			"That makes two things matter most here: a website that loads quickly and reads clearly on mobile, and a brand that feels established and trustworthy. Whether you’re a Main Street boutique, a practice near the courthouse, or a service business working out of Bel Air, I design sites and identities that make a strong first impression and make it easy to call, book or visit.",
		],
		forWho: ["Main Street shops and restaurants", "Law, medical and professional offices", "Local service businesses and contractors", "Nonprofits and community organizations"],
		examples: [
			{t: "A downtown shop", d: "A clean, mobile-first site with hours, location and a simple gallery, plus matching signage and menu or flyer designs."},
			{t: "A professional practice", d: "A calm, credible website with clear service pages and an easy contact form, backed by a refreshed logo and business cards."},
			{t: "An event or campaign", d: "A focused landing page and coordinated e-mail and print pieces for a launch, fundraiser or seasonal promotion."},
		],
		faq: [
			{q: "Can we meet in person in Bel Air?", a: "Yes, if that helps. Plenty of projects also run entirely by e-mail and video calls, so it’s up to you."},
			{q: "Can you redesign the website for my Main Street business?", a: "Yes. I can refresh the look, make it work properly on phones, and make your hours, location and contact details easy to find."},
			{q: "Can you design print pieces to match my website?", a: "Yes. Logos, menus, flyers, signage graphics and business cards can all be designed to match, so your brand feels consistent online and in person."},
			{q: "How long does a small business website take?", a: "It depends on the size of the site and how quickly content comes together, but a small site is usually a matter of weeks, not months. We’ll set a timeline at the start."},
		],
		nearby: ["Forest Hill", "Churchville", "Abingdon", "Fallston"],
	},
	abingdon: {
		town: "Abingdon",
		slug: "web-design-abingdon-md",
		description: "Lead-focused websites, landing pages and branding for Abingdon, MD businesses along the Route 24 corridor, by designer Jamie Kerig.",
		h1: ["", "Abingdon", " websites built to win new customers"],
		servicesTitle: "What I build for Abingdon businesses",
		services: [
			{title: "Lead-focused websites", text: "Fast, mobile-first sites built around one goal: getting people to call, book or ask for a quote.", href: "/web/"},
			{title: "Landing pages & e-mail", text: "Focused pages and matching e-mails for a single offer, service or ad campaign.", href: "/web/"},
			{title: "A brand from scratch", text: "A logo, colours and type for a new business, ready for your site, vehicle, signs and social posts.", href: "/graphic/"},
		],
		forWhoTitle: "A good fit if you run…",
		examplesTitle: "A few ways this could work",
		areaTitle: "Working along the Route 24 corridor",
		areaCopy: "From Box Hill to the neighbourhoods off Route 24 and I-95, I work with Abingdon businesses in person or remotely, whichever suits your schedule. Most projects run smoothly over e-mail and a couple of video calls.",
		contactTitle: "Ready for more calls and quote requests?",
		contactCopy: "Send me a few details about your business and what you’re hoping a new site or campaign will do, and I’ll reply with next steps.",
		mapQuery: "Abingdon, MD",
		intro: "Abingdon businesses deserve a website that works as hard as they do. I design and build clear, responsive sites and brands for local companies, so customers can find you, trust you and get in touch.",
		localTitle: "Design for a fast-growing community",
		local: [
			"Abingdon sits along the Route 24 and I-95 corridor, with busy shopping centres like the Boulevard at Box Hill and a steady stream of new neighbourhoods. That growth brings new customers, but also new competition, and a lot of people find local services by searching on their phones while they’re on the go.",
			"For Abingdon businesses that usually means a site built to turn searches into calls and quote requests: fast pages, obvious contact buttons, and landing pages for specific services or promotions. I’ve built lead-generation pages and campaign e-mails professionally for years, and I bring the same approach to local businesses.",
		],
		forWho: ["Retail and restaurants along Route 24", "Home services, trades and contractors", "Health, fitness and wellness businesses", "New businesses that need a brand from scratch"],
		examples: [
			{t: "A home services company", d: "A site with a page for each service, quote-request forms and a mobile layout built around a big “call now” button."},
			{t: "A new business launch", d: "A logo, colours and type, then a website and launch materials that all share the same identity from day one."},
			{t: "A seasonal promotion", d: "A single-purpose landing page and matching e-mail to drive sign-ups or bookings for a specific offer."},
		],
		faq: [
			{q: "Do you only work with Abingdon businesses?", a: "No. I work with businesses in Abingdon and across Harford County, and remotely with clients anywhere."},
			{q: "Can you build a website that brings in quote requests?", a: "Yes. I design pages around a clear next step, like calling, requesting a quote or booking, and build forms that are quick to fill in on a phone."},
			{q: "I’m just starting out. Can you create my brand from scratch?", a: "Yes. I can design your logo, choose colours and type, and carry that identity through your website, social graphics and print."},
			{q: "Do you build landing pages for ads or promotions?", a: "Yes. I’ve designed and built lead-generation landing pages professionally, and can create focused pages for a specific service, offer or campaign."},
		],
		nearby: ["Bel Air", "Edgewood", "Joppa", "Fallston"],
	},
	fallston: {
		town: "Fallston",
		slug: "web-design-fallston-md",
		description: "Simple websites, logos and print for Fallston’s owner-run and small businesses, designed by Maryland web and graphic designer Jamie Kerig.",
		h1: ["Simple, polished design for ", "Fallston", "’s small businesses"],
		servicesTitle: "Where I can help in Fallston",
		services: [
			{title: "Small, simple sites", text: "A few well-made pages that explain what you do, show your work and make it easy to reach you.", href: "/web/"},
			{title: "Logos & business cards", text: "A professional identity for an owner-run business, made directly with the designer, not passed through an agency.", href: "/graphic/"},
			{title: "Labels, signs & flyers", text: "Print pieces for farm stands, markets and events, set up properly for the printer.", href: "/graphic/"},
		],
		forWhoTitle: "Who this is for",
		examplesTitle: "Ideas for Fallston businesses",
		areaTitle: "Around Fallston and beyond",
		areaCopy: "Fallston businesses are spread out, so I keep things flexible: we can meet nearby, talk on the phone, or do the whole project remotely. Either way, you deal with me directly from start to finish.",
		contactTitle: "Tell me about your Fallston business",
		contactCopy: "A few lines is plenty: what you do, what you need, and anything you already have, like a logo or photos. I’ll get back to you as soon as I can.",
		mapQuery: "Fallston, MD",
		intro: "From logos to landing pages, I work with Fallston businesses to build a brand and website that feel polished and personal. You work directly with me, the designer and the developer, from the first sketch to launch.",
		localTitle: "Design for small and independent businesses",
		local: [
			"Fallston is a quieter, more spread-out part of Harford County, with homes, small farms and independent businesses along Belair Road and Route 152. Many businesses here are owner-run, home-based or seasonal, and rely on word of mouth, which makes a professional online presence the thing that turns a recommendation into a customer.",
			"Small businesses rarely need anything complicated. What helps most is a simple, good-looking site that explains what you do, shows your work, and makes it easy to get in touch, plus a logo and printed pieces that look as professional as the work you do.",
		],
		forWho: ["Owner-run and home-based businesses", "Farms, markets and seasonal businesses", "Trades and independent contractors", "Local makers, studios and instructors"],
		examples: [
			{t: "A home-based business", d: "A simple, affordable one- or few-page site with your services, a photo gallery and a contact form."},
			{t: "A farm or market", d: "A seasonal site with hours, what’s available and directions, plus signs, labels or flyers that match."},
			{t: "An independent tradesperson", d: "A logo and business cards, then a site that shows past jobs and makes it easy to request work."},
		],
		faq: [
			{q: "Do you work with home-based businesses?", a: "Yes. Owner-run and home-based businesses are a great fit. We start with a short conversation about what you need, then I put together a clear plan."},
			{q: "I only need a small website. Is that something you do?", a: "Yes. Many small businesses only need a few clear pages, and I’m happy to keep things simple and focused."},
			{q: "Can you make my site easy for me to update?", a: "Yes. We can talk about what you’ll want to change yourself, like hours or photos, and set the site up around that."},
			{q: "Do you design logos, labels and signs too?", a: "Yes. I design logos and print pieces like labels, signs, flyers and business cards to match your website."},
		],
		nearby: ["Bel Air", "Kingsville", "Jarrettsville", "Abingdon"],
	},
	whitehall: {
		town: "White Hall",
		slug: "wedding-websites-white-hall-md",
		featured: "wedding",
		title: "Wedding Websites & Invitations in White Hall, MD",
		crumb: "Wedding Websites in White Hall, MD",
		note: "Wedding websites, invitations and signs",
		serviceType: ["Wedding website design", "Invitation design", "Print design", "Signage design"],
		description: "Wedding websites, invitations and signs for couples marrying in White Hall, MD, from designer Jamie Kerig, who designed the website for a wedding at Camp Hidden Valley.",
		h1: ["Wedding websites and invitations in ", "White Hall", ", Maryland"],
		servicesTitle: "What I design for White Hall weddings",
		services: [
			{title: "A wedding website", text: "One clear page for the date, directions, places to stay and what to wear. This is the site I built for my own wedding at Camp Hidden Valley.", href: "/web/weddinginthewoods-2018/www/index.html", cta: "Visit the wedding website →"},
			{title: "Invitations & RSVP cards", text: "Save-the-dates, invitations and reply cards that match your website, set up properly for the printer.", href: "/graphic/"},
			{title: "Signs, programs & small details", text: "Welcome signs, direction signs and programs in the same style, so the whole day feels designed.", href: "/graphic/"},
		],
		forWhoTitle: "Who this is for",
		examplesTitle: "What a White Hall wedding project could look like",
		areaTitle: "Working with White Hall couples",
		areaCopy: "I’m based in Maryland and can work with you anywhere in northern Baltimore County. Most of a project happens by e-mail and video, and I’m glad to look at your venue together if that helps.",
		contactTitle: "Planning a wedding near White Hall?",
		contactCopy: "Tell me a little about your day, your venue and what you need, whether that’s a website, invitations or signs, and I’ll get back to you soon.",
		mapQuery: "Camp Hidden Valley, 4722 Mellow Rd, White Hall, MD 21161",
		intro: "White Hall is farm country: rolling hills, winding roads and wide open fields, and a beautiful place to get married. I designed the website for my own wedding at Camp Hidden Valley here, and I can do the same for you, from the website and invitations to the small details that help guests find you and feel at home.",
		localTitle: "Why a White Hall wedding needs clear design",
		local: [
			"White Hall is a quiet, rural community in northern Baltimore County. The roads out here are narrow, hilly and winding, with blind corners and the occasional tractor, so guests who have never been need clear directions before they set out. A good wedding website tells them where to turn, where to park and how to take the drive slowly.",
			"Camp Hidden Valley was the setting for my own wedding: an outdoor ceremony, a reception hall a short walk away, barrack-style cabins and room to pitch a tent for guests who wanted to stay overnight, and a hotel block about thirty minutes away for those who didn’t. Putting all of that in one place took a lot of stress off us, and it’s the kind of planning a website can handle for you.",
		],
		forWho: ["Couples planning a wedding at a White Hall or rural Baltimore County venue", "Couples whose guests are driving out to the country", "Camps, farms and venues that host events", "Wedding vendors who need a clean, mobile-friendly site"],
		examples: [
			{t: "Directions for a remote venue", d: "My own wedding site explained the winding roads, the farm equipment, where the road forks and where to park, with a map right on the page."},
			{t: "Places to stay in one place", d: "Camping and cabins on site, plus a hotel block about thirty minutes away, with the details and the reservation deadline."},
			{t: "What to wear and what to expect", d: "An outdoor ceremony on grass, a short walk to the reception hall, and a note about shoes, so guests know before they arrive."},
		],
		faq: [
			{q: "Did you really design a wedding website for a White Hall venue?", a: "Yes. I designed and built the website for my own wedding at Camp Hidden Valley in White Hall. You can see it in my web projects."},
			{q: "Can you include directions and a map for a remote venue?", a: "Yes. I can add clear step-by-step directions, a map and notes about the roads, so guests arrive without stress."},
			{q: "Can you design invitations and RSVP cards to match the website?", a: "Yes. Save-the-dates, invitations, reply cards and signs can all be designed to match, so everything looks like one set."},
			{q: "Can the website include places to stay?", a: "Yes. A wedding site can cover camping or cabins, a hotel block with its booking deadline, and anything else guests need to plan their trip."},
		],
		nearby: ["Monkton", "Parkton", "Hereford", "Jarrettsville"],
	},
};

/*town slug lookup, so "nearby" names that have their own page become links*/
export const townPages = Object.values(towns).reduce((m, t) => ({...m, [t.town]: `/${t.slug}/`}), {});

/*every town page, for the footer, sitemap page and "other areas" links*/
export const areaLinks = Object.values(towns).map((t) => ({
	href: `/${t.slug}/`,
	label: t.town,
	title: t.crumb || `Web design in ${t.town}, MD`,
	note: t.note || "Websites, logos and print for local businesses",
}));

/*google maps embed for the service-area map (no api key needed)*/
export const mapEmbed = (t) => `https://maps.google.com/maps?q=${encodeURIComponent(t.mapQuery)}&z=11&output=embed`;
export const mapLink = (t) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.mapQuery)}`;

/*page metadata shared by every town*/
export function seoMeta(t) {
	const title = t.title || `Web Design & Branding in ${t.town}, MD`;
	const description = t.description;
	return {
		title,
		description,
		alternates: {canonical: `/${t.slug}/`},
		robots: {index: true, follow: true},
		openGraph: {title: `${title} | Jamie Kerig`, description, url: `/${t.slug}/`, siteName: "Jamie Kerig", locale: "en_US", type: "website", images: ["/og-image.png"]},
	};
}

/*structured data: the design service + its service area, and the page's faq*/
export function jsonLd(t) {
	return [
		{
			"@context": "https://schema.org",
			"@type": "ProfessionalService",
			name: "Jamie Kerig, Web & Graphic Design",
			"@id": "https://jamiekerig.com/#business",
			url: `https://jamiekerig.com/${t.slug}/`,
			image: "https://jamiekerig.com/og-image.png",
			description: t.intro,
			areaServed: [{"@type": "City", name: `${t.town}, MD`}, ...t.nearby.map((n) => ({"@type": "City", name: `${n}, MD`}))],
			address: {"@type": "PostalAddress", addressRegion: "MD", addressCountry: "US"},
			hasMap: mapLink(t),
			founder: {"@type": "Person", name: "Jamie Kerig"},
			serviceType: t.serviceType || ["Website design", "Logo design", "Branding", "Print design"],
			sameAs: ["https://www.linkedin.com/in/jamieleedesign/", "https://www.figma.com/@jamieleedesign"],
		},
		{
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: [
				{"@type": "ListItem", position: 1, name: "Home", item: "https://jamiekerig.com/"},
				{"@type": "ListItem", position: 2, name: t.crumb || `Web Design in ${t.town}, MD`, item: `https://jamiekerig.com/${t.slug}/`},
			],
		},
		{
			"@context": "https://schema.org",
			"@type": "FAQPage",
			mainEntity: t.faq.map((f) => ({"@type": "Question", name: f.q, acceptedAnswer: {"@type": "Answer", text: f.a}})),
		},
	];
}

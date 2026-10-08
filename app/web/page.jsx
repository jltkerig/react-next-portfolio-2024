import ImageLightbox from "@/src/components/ImageLightbox";
import investingoutlook from "@/src/assets/web/investingoutlook.png";
import oneblade from "@/src/assets/web/oneblade-landing-screenshot.png";
import palwebsite from "@/src/assets/web/pal-image.png";
import widgetlanding from "@/src/assets/web/widget-landing-page.png";
import wedding2018 from "@/src/assets/web/wedding-head-block-ss.png";
import fauxreport from "@/src/assets/web/report-stock-meltup-blueprint.png";
import blackfriday from "@/src/assets/web/blackfriday-email-screenshot.png";
import investinghour from "@/src/assets/web/stansberry-investor-hour-email-ss-half.jpg";

export const metadata = {
	title: "Web Projects",
	description: "Web projects by Jamie Kerig: microsites, landing pages, lead-gen pages and e-mail templates.",
	alternates: {canonical: "/web/"},
	openGraph: {
		title: "Web Projects | Jamie Kerig",
		description: "Browse websites, microsites, lead-gen landing pages and e-mail templates designed and built by Maryland front-end developer Jamie Kerig.",
		url: "/web/",
		siteName: "Jamie Kerig",
		locale: "en_US",
		type: "website",
		images: ["/og-image.png"],
	},
	twitter: {
		card: "summary_large_image",
		title: "Web Projects | Jamie Kerig",
		description: "Browse websites, microsites, lead-gen landing pages and e-mail templates designed and built by Maryland front-end developer Jamie Kerig.",
		images: ["/og-image.png"],
	},
};

export default function Web() {
	return (
		<div>
			<div className="row">
				<div className="main-column main-column-p90">
					<section className="top-section top-column-padding">
						<div className="column-split center column-padding">
							<h1>
								<span className="divider-2">Web Projects</span>
							</h1>
							<h2>A Showcase of Web Creations</h2>
							<h3>Browse past projects.</h3>
							<p>This collection highlights a range of web projects, showcasing a dedication to design, development, and creating seamless user experiences.</p>
						</div>
					</section>
				</div>
			</div>

			{/*<div className="blue-container">*/}
			<div className="row">
				<div className="main-column bottom-padding-90">
					<div className="project-container" /*project container*/>
						<div className="project-tab project-tab-yellow" /*project 1*/>
							<div className="project-title">Stansberry Alliance</div>
							<div className="project-sub-title">Standalone website on Amazon s3</div>
							<div className="project-tab-divider-cyan">&nbsp;</div>
							<div className="project-briefing">Website was built for the direct mail team. Customers would recieve mail leading them to this site which would explain the product and offer signup.</div>

							<ImageLightbox id="pal" className="galleryThumbnail" imageUrl={palwebsite} alt="Stansberry Alliance standalone website screenshot" />
						</div>
						<div className="project-tab project-tab-yellow" /*project 2*/>
							<div className="project-title">Investing Outlook</div>
							<div className="project-sub-title">Micro Wordpress Website</div>
							<div className="project-tab-divider-cyan">&nbsp;</div>
							<div className="project-briefing">
								Deployed and built a standalone wordpress site that consisted of 4 or 5 pages. Customers were directed to it via ads and the microsite worked as a lead generator to active campaigns housed in Salesforce.
							</div>
							<ImageLightbox id="investing" className="galleryThumbnail" imageUrl={investingoutlook} alt="Investing Outlook WordPress microsite screenshot" />
						</div>
						<div className="project-tab project-tab-yellow" /*project 3*/>
							<div className="project-title">Oneblade</div>
							<div className="project-sub-title">Landing Page for Microsite</div>
							<div className="project-tab-divider-cyan">&nbsp;</div>
							<div className="project-briefing">
								Single page built to look like the wordpress sister site. This page acted as a lead generator and customers would land here, engage with the article and land on a purchase page after clicking through.
							</div>
							<ImageLightbox id="oneblade" className="galleryThumbnail" imageUrl={oneblade} alt="Oneblade microsite landing page screenshot" />
						</div>
					</div>

					<div className="project-container" /*project container*/>
						<div className="project-tab project-tab-yellow" /*project 4*/>
							<div className="project-title">Favorite Stocks</div>
							<div className="project-sub-title">Landing Page for Lead Gen</div>
							<div className="project-tab-divider">&nbsp;</div>
							<div className="project-briefing">Two page email capture landing page for a marketing campaign. Audience lands on page and are asked to input e-mail which leads to a thank you page.</div>
							<ImageLightbox id="widget" className="galleryThumbnail" imageUrl={widgetlanding} alt="Favorite Stocks lead generation landing page screenshot" />
						</div>
						<div className="project-tab project-tab-yellow" /*project 5*/>
							<div className="project-title">Jamie & Michael's Wedding</div>
							<div className="project-sub-title">Microsite for my own wedding</div>
							<div className="project-tab-divider">&nbsp;</div>
							<div className="project-briefing">Website built for my own wedding with focus on easy access and sharing of information with attendees about the event itself.</div>
							<ImageLightbox id="wedding" className="galleryThumbnail" imageUrl={wedding2018} alt="Jamie and Michael's wedding microsite screenshot" />
						</div>

						<div className="project-tab project-tab-yellow" /*project 7*/>
							<div className="project-title">Faux Report</div>
							<div className="project-sub-title">Leadgen webpage</div>
							<div className="project-tab-divider">&nbsp;</div>
							<div className="project-briefing">This page was built to look like an article in a PDF. Customers would read through, click the call to action links and be funneled into a sales page.</div>
							<ImageLightbox id="faux" className="galleryThumbnail" imageUrl={fauxreport} alt="Faux report lead generation webpage screenshot" />
						</div>
					</div>

					<div className="project-container" /*project container*/>
						<div className="project-tab project-tab-yellow" /*project 1*/>
							<div className="project-title">Black Friday E-mail</div>
							<div className="project-sub-title">E-mail Template</div>
							<div className="project-tab-divider-cyan">&nbsp;</div>
							<div className="project-briefing">An e-mail template constructed for a Black Friday event, designed for mobile and several different e-mail applications.</div>

							<ImageLightbox id="blackfriday" className="galleryThumbnail" imageUrl={blackfriday} alt="Black Friday e-mail template screenshot" />
						</div>
						<div className="project-tab project-tab-yellow" /*project 2*/>
							<div className="project-title">Investing Hour E-mail</div>
							<div className="project-sub-title">E-mail</div>
							<div className="project-tab-divider-cyan">&nbsp;</div>
							<div className="project-briefing">A long format e-mail template built for the Investing Hour Podcast. The e-mail contained many different sections for different purposes.</div>
							<ImageLightbox id="investinghour" className="galleryThumbnail" imageUrl={investinghour} alt="Investing Hour podcast e-mail screenshot" />
						</div>
						{/*
							<div className="project-tab project-tab-yellow" >
								{/*<div className="project-title">Oneblade</div>
								<div className="project-sub-title">Landing Page for Microsite</div>
								<div className="project-tab-divider-cyan">&nbsp;</div>
								<div className="project-briefing">
									Single page built to look like the wordpress sister site. This page acted as a lead generator and customers would land here, engage with the article and land on a purchase page after clicking through.
								</div>
								<ImageLightbox id="oneblade" className="galleryThumbnail" imageUrl={oneblade} alt="Oneblade microsite landing page screenshot" />
							</div>
								*/}
					</div>
				</div>
			</div>
		</div>
	);
}

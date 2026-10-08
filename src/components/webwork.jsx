function Web2() {
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
				<div className="main-column main-column-p90">
					<div className="project-container" /*project container*/>
						<div className="project-tab project-tab-blue" /*project 1*/>
							<div className="project-title">Stansberry Alliance</div>
							<div className="project-sub-title">Standalone website on Amazon s3</div>
							<div className="project-tab-divider-cyan">&nbsp;</div>
							<div className="project-briefing">Website was built for the direct mail team. Customers would recieve mail leading them to this site which would explain the product and offer signup.</div>

							<ImageLightbox id="pal" className="galleryThumbnail" imageUrl={palwebsite} />
						</div>
						<div className="project-tab project-tab-blue" /*project 2*/>
							<div className="project-title">Investing Outlook</div>
							<div className="project-sub-title">Micro Wordpress Website</div>
							<div className="project-tab-divider-cyan">&nbsp;</div>
							<div className="project-briefing">
								Deployed and built a standalone wordpress site that consisted of 4 or 5 pages. Customers were directed to it via ads and the microsite worked as a lead generator to active campaigns housed in Salesforce.
							</div>
							<ImageLightbox id="investing" className="galleryThumbnail" imageUrl={investingoutlook} />
						</div>
						<div className="project-tab project-tab-blue" /*project 3*/>
							<div className="project-title">Oneblade</div>
							<div className="project-sub-title">Landing Page for Microsite</div>
							<div className="project-tab-divider-cyan">&nbsp;</div>
							<div className="project-briefing">
								Single page built to look like the wordpress sister site. This page acted as a lead generator and customers would land here, engage with the article and land on a purchase page after clicking through.
							</div>
							<ImageLightbox id="oneblade" className="galleryThumbnail" imageUrl={oneblade} />
						</div>
					</div>
				</div>
			</div>
			{/*	</div>*/}
			<div className="blue-container">
				<div className="row">
					<div className="main-column main-column-p90">
						<div className="project-container" /*project container*/>
							<div className="project-tab project-tab-yellow" /*project 4*/>
								<div className="project-title">Favorite Stocks</div>
								<div className="project-sub-title">Landing Page for Lead Gen</div>
								<div className="project-tab-divider">&nbsp;</div>
								<div className="project-briefing">Two page email capture landing page for a marketing campaign. Audience lands on page and are asked to input e-mail which leads to a thank you page.</div>
								<ImageLightbox id="widget" className="galleryThumbnail" imageUrl={widgetlanding} />
							</div>
							<div className="project-tab project-tab-yellow" /*project 5*/>
								<div className="project-title">Jamie & Michael's Wedding</div>
								<div className="project-sub-title">Microsite for my own wedding</div>
								<div className="project-tab-divider">&nbsp;</div>
								<div className="project-briefing">Website built for my own wedding with focus on easy access and sharing of information with attendees about the event itself.</div>
								<ImageLightbox id="wedding" className="galleryThumbnail" imageUrl={wedding2018} />
							</div>

							<div className="project-tab project-tab-yellow" /*project 7*/>
								<div className="project-title">Faux Report</div>
								<div className="project-sub-title">Leadgen webpage</div>
								<div className="project-tab-divider">&nbsp;</div>
								<div className="project-briefing">This page was built to look like an article in a PDF. Customers would read through, click the call to action links and be funneled into a sales page.</div>
								<ImageLightbox id="faux" className="galleryThumbnail" imageUrl={fauxreport} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="main-column main-column-p90">
					<div className="project-container" /*project container*/>
						<div className="project-tab project-tab-blue" /*project 1*/>
							<div className="project-title">Stansberry Alliance</div>
							<div className="project-sub-title">Standalone website on Amazon s3</div>
							<div className="project-tab-divider-cyan">&nbsp;</div>
							<div className="project-briefing">Website was built for the direct mail team. Customers would recieve mail leading them to this site which would explain the product and offer signup.</div>

							<ImageLightbox id="pal" className="galleryThumbnail" imageUrl={palwebsite} />
						</div>
						<div className="project-tab project-tab-blue" /*project 2*/>
							<div className="project-title">Investing Outlook</div>
							<div className="project-sub-title">Micro Wordpress Website</div>
							<div className="project-tab-divider-cyan">&nbsp;</div>
							<div className="project-briefing">
								Deployed and built a standalone wordpress site that consisted of 4 or 5 pages. Customers were directed to it via ads and the microsite worked as a lead generator to active campaigns housed in Salesforce.
							</div>
							<ImageLightbox id="investing" className="galleryThumbnail" imageUrl={investingoutlook} />
						</div>
						<div className="project-tab project-tab-blue" /*project 3*/>
							<div className="project-title">Oneblade</div>
							<div className="project-sub-title">Landing Page for Microsite</div>
							<div className="project-tab-divider-cyan">&nbsp;</div>
							<div className="project-briefing">
								Single page built to look like the wordpress sister site. This page acted as a lead generator and customers would land here, engage with the article and land on a purchase page after clicking through.
							</div>
							<ImageLightbox id="oneblade" className="galleryThumbnail" imageUrl={oneblade} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Web2;

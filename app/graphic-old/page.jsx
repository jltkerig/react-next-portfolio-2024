import ImageLightbox from "@/src/components/ImageLightbox";
import PageHeader from "@/src/components/PageHeader";
import fabriclogo from "@/src/assets/graphic/fabric_sm.jpg";
import norselogo from "@/src/assets/graphic/norsehorse_sm.jpg";
import cubelogo from "@/src/assets/graphic/cubelogo_sm.jpg";
import bookcover from "@/src/assets/graphic/book_sm.jpg";
import bookpages from "@/src/assets/graphic/book3.jpg";
import messcover from "@/src/assets/graphic/bookcovers1_sm.jpg";
import messstack from "@/src/assets/graphic/bookcovers2_sm.jpg";
import cubemenu from "@/src/assets/graphic/coffee_lg.jpg";
import rvspcard from "@/src/assets/graphic/rsvp1_sm.jpg";
import heatwavelogo from "@/src/assets/graphic/wave_sm.jpg";
import wotsposter from "@/src/assets/graphic/wots_poster_sm.jpg";
import wotspaper from "@/src/assets/graphic/wots1_sm.jpg";

export const metadata = {
	title: "Graphic Projects",
	description: "Graphic design by Jamie Kerig: logos, book design, menus, posters and event invites.",
	alternates: {canonical: "/graphic/"},
	robots: {index: false}, /*old version kept for reference*/
	openGraph: {
		title: "Graphic Projects | Jamie Kerig",
		description: "See logos, book designs, menus, posters and invitations from Maryland graphic designer Jamie Kerig.",
		url: "/graphic/",
		siteName: "Jamie Kerig",
		locale: "en_US",
		type: "website",
		images: ["/og-image.png"],
	},
	twitter: {
		card: "summary_large_image",
		title: "Graphic Projects | Jamie Kerig",
		description: "See logos, book designs, menus, posters and invitations from Maryland graphic designer Jamie Kerig.",
		images: ["/og-image.png"],
	},
};

export default function GraphicOld() {
	return (
		<div>
			<PageHeader title="Graphic Projects" label="A Showcase of Graphic Works" sub="Browse past projects.">
				<p>
					I originally started college with being an illustrator as my goal but changed mid-way to finish in graphic design. I still love to do illustrations as a hobby and post them regularly on{" "}
					<a href="https://www.instagram.com/pumpkinphantompaintings/" target="_blank" rel="noopener noreferrer">
						instagram
					</a>
					. On this page you'll find my past graphic design projects.
				</p>
			</PageHeader>
			<div className="row">
				<div className="main-column">
					<div className="project-container-hor" /*project container*/>
						<div className="project-tab-hor" /*project 1*/>
							<div className="project-title">
								<em>A Fabric Place</em>
							</div>
							<div className="project-sub-title">Logo</div>
							<div className="project-tab-divider">&nbsp;</div>

							<ImageLightbox id="fabric" className="galleryThumbnail-logo thumbnail-center" imageUrl={fabriclogo} alt="A Fabric Place logo design" />
						</div>
						<div className="project-tab-hor" /*project 2*/>
							<div className="project-title">
								<em>Norse Horse</em>
							</div>
							<div className="project-sub-title">Logo</div>
							<div className="project-tab-divider">&nbsp;</div>

							<ImageLightbox id="norselogo" className="galleryThumbnail-logo thumbnail-center" imageUrl={norselogo} alt="Norse Horse logo design" />
						</div>
						<div className="project-tab-hor" /*project 3*/>
							<div className="project-title">Outside the Cube</div>
							<div className="project-sub-title">Logo</div>
							<div className="project-tab-divider">&nbsp;</div>

							<ImageLightbox id="cubelogo" className="galleryThumbnail-logo thumbnail-center" imageUrl={cubelogo} alt="Outside the Cube logo design" />
						</div>
						<div className="project-tab-hor" /*project 4*/>
							<div className="project-title">Outside the Cube</div>
							<div className="project-sub-title">Café Menu</div>
							<div className="project-tab-divider">&nbsp;</div>

							<ImageLightbox id="cubemenu" className="galleryThumbnail galleryThumbnail-hor thumbnail-center" imageUrl={cubemenu} alt="Outside the Cube café menu design" />
						</div>
						<div className="project-tab-hor" /*project 5*/>
							<div className="project-title">Lucian Bernhard - Cover</div>
							<div className="project-sub-title">Book design based on Lucian Bernhard</div>
							<div className="project-tab-divider">&nbsp;</div>

							<ImageLightbox id="bookcover" className="galleryThumbnail-logo thumbnail-center" imageUrl={bookcover} alt="Book cover design inspired by Lucian Bernhard" />
						</div>
						<div className="project-tab-hor" /*project 6*/>
							<div className="project-title">Lucian Bernhard - Inside</div>
							<div className="project-sub-title">Book design based on Lucian Bernhard</div>
							<div className="project-tab-divider">&nbsp;</div>

							<ImageLightbox id="bookpages" className="galleryThumbnail-logo thumbnail-center" imageUrl={bookpages} alt="Inside pages of a book design inspired by Lucian Bernhard" />
						</div>
						<div className="project-tab-hor" /*project 7*/>
							<div className="project-title">Keri Smith - Side</div>
							<div className="project-sub-title">Book covers redesigns</div>
							<div className="project-tab-divider">&nbsp;</div>

							<ImageLightbox id="messcover" className="galleryThumbnail-logo thumbnail-center" imageUrl={messcover} alt="Keri Smith book cover redesign, side view" />
						</div>
						<div className="project-tab-hor" /*project 8*/>
							<div className="project-title">Keri Smith - Front</div>
							<div className="project-sub-title">Book covers redesigns</div>
							<div className="project-tab-divider">&nbsp;</div>

							<ImageLightbox id="messstack" className="galleryThumbnail-logo thumbnail-center" imageUrl={messstack} alt="Keri Smith book cover redesign, front view" />
						</div>
						<div className="project-tab-hor" /*project 9*/>
							<div className="project-title">RSVP Card</div>
							<div className="project-sub-title">Event invite</div>
							<div className="project-tab-divider">&nbsp;</div>

							<ImageLightbox id="rvspcard" className="galleryThumbnail-logo thumbnail-center" imageUrl={rvspcard} alt="RSVP card event invite design" />
						</div>
						<div className="project-tab-hor" /*project 10*/>
							<div className="project-title">Heat Wave</div>
							<div className="project-sub-title">Logo</div>
							<div className="project-tab-divider">&nbsp;</div>

							<ImageLightbox id="heatwavelogo" className="galleryThumbnail-logo thumbnail-center" imageUrl={heatwavelogo} alt="Heat Wave logo design" />
						</div>
						<div className="project-tab-hor" /*project 10*/>
							<div className="project-title">Word on the Street</div>
							<div className="project-sub-title">Promotional Poster</div>
							<div className="project-tab-divider">&nbsp;</div>

							<ImageLightbox id="wotsposter" className="galleryThumbnail-logo thumbnail-center" imageUrl={wotsposter} alt="Word on the Street promotional poster design" />
						</div>
						<div className="project-tab-hor" /*project 10*/>
							<div className="project-title">Word on the Street</div>
							<div className="project-sub-title">Newspaper</div>
							<div className="project-tab-divider">&nbsp;</div>

							<ImageLightbox id="wotspaper" className="galleryThumbnail-logo thumbnail-center" imageUrl={wotspaper} alt="Word on the Street newspaper design" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

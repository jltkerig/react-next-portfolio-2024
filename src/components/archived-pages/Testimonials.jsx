import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
function Testimonial() {
	return (
		<>
			<hr className="style-soft" />
			<div className="rotating-testimonials">
				<h2>Recommendations</h2>
				<h3>Hear what others have to say</h3>
				<Carousel showArrows={false} infiniteLoop={true} autoPlay={true} showThumbs={false} showStatus={false} showIndicators={false} interval={6100}>
					<div>
						<p className="testimonial">
							<span className="tastefulQuote">&ldquo;</span>A really cool word from a client. The project went great and she was wonderful to work with! <span className="tastefulQuote2">&rdquo;</span>
							<div class="testimonial-sig">&ndash; John Doe</div>
						</p>
					</div>
					<div>
						<p className="testimonial">
							<span className="tastefulQuote">&ldquo;</span>Amazing! <span className="tastefulQuote2">&rdquo;</span>
							<br />
							<br />
							<div className="testimonial-sig">&ndash; Jane Doe</div>
						</p>
					</div>
				</Carousel>
			</div>
			<hr className="style-soft" />
		</>
	);
}

export default Testimonial;

import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import QuoteMark from "../QuoteMark";
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
							<QuoteMark className="tastefulQuote" />A really cool word from a client. The project went great and she was wonderful to work with! <QuoteMark close className="tastefulQuote2" />
							<div class="testimonial-sig">&ndash; John Doe</div>
						</p>
					</div>
					<div>
						<p className="testimonial">
							<QuoteMark className="tastefulQuote" />Amazing! <QuoteMark close className="tastefulQuote2" />
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

"use client";

import {useEffect} from "react";
import img1 from "@/src/assets/globe.svg";
import img2 from "@/src/assets/graphic/a-fabric-place-logo.jpg";
import img3 from "@/src/assets/graphic/baltimoreclayworks_lg.webp";
import img4 from "@/src/assets/graphic/book3.jpg";
import img5 from "@/src/assets/graphic/book_sm.jpg";
import img6 from "@/src/assets/graphic/bookcovers1_sm.jpg";
import img7 from "@/src/assets/graphic/bookcovers2_sm.jpg";
import img8 from "@/src/assets/graphic/coffee_lg.jpg";
import img9 from "@/src/assets/graphic/cubelogo_sm.jpg";
import img10 from "@/src/assets/graphic/norsehorse_sm.jpg";
import img11 from "@/src/assets/graphic/rsvp1_sm.jpg";
import img12 from "@/src/assets/graphic/wave_sm.jpg";
import img13 from "@/src/assets/graphic/wots1_sm.jpg";
import img14 from "@/src/assets/graphic/wots_poster_sm.jpg";
import img15 from "@/src/assets/greenery.png";
import img16 from "@/src/assets/jamie-headshot-sq.png";
import img17 from "@/src/assets/mouse-pointer-2.svg";
import img18 from "@/src/assets/name.png";
import img19 from "@/src/assets/smartphone.svg";
import img20 from "@/src/assets/web/blackfriday-email-screenshot.png";
import img21 from "@/src/assets/web/fabric-place-contact-ss.png";
import img22 from "@/src/assets/web/fabric-place-head-block-ss.png";
import img23 from "@/src/assets/web/investingoutlook.png";
import img24 from "@/src/assets/web/life-coach-head-block-ss.png";
import img25 from "@/src/assets/web/oneblade-landing-screenshot.png";
import img26 from "@/src/assets/web/pal-image.png";
import img27 from "@/src/assets/web/report-stock-meltup-blueprint.png";
import img28 from "@/src/assets/web/stansberry-investor-hour-email-ss-half.jpg";
import img29 from "@/src/assets/web/wedding-head-block-ss.png";
import img30 from "@/src/assets/web/widget-landing-page.png";

const images = [ img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30];

/*warms the browser cache with every page image once the current page has finished loading*/
function ImagePreloader() {
	useEffect(() => {
		const load = () => {
			images.forEach((img) => {
				new Image().src = img.src;
			});
		};
		if (document.readyState === "complete") load();
		else window.addEventListener("load", load, {once: true});
		return () => window.removeEventListener("load", load);
	}, []);
	return null;
}

export default ImagePreloader;

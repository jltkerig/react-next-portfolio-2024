// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const links = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
	const open = links.classList.toggle("open");
	toggle.setAttribute("aria-expanded", open);
	toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

links.addEventListener("click", (e) => {
	if (e.target.tagName === "A") {
		links.classList.remove("open");
		toggle.setAttribute("aria-expanded", false);
		toggle.setAttribute("aria-label", "Open menu");
	}
});

// Testimonial slider
const track = document.querySelector(".slider-track");
const quotes = [...track.querySelectorAll(".quote")];

// Distance between two cards, so it works for 1-up (tablet/phone) and 3-up (desktop)
const step = () => quotes[1].offsetLeft - quotes[0].offsetLeft;

function slide(direction) {
	const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 5;
	const atStart = track.scrollLeft <= 5;

	if (direction > 0 && atEnd) track.scrollTo({left: 0, behavior: "smooth"});
	else if (direction < 0 && atStart) track.scrollTo({left: track.scrollWidth, behavior: "smooth"});
	else track.scrollBy({left: step() * direction, behavior: "smooth"});
}

document.querySelector(".slider-arrow.prev").addEventListener("click", () => slide(-1));
document.querySelector(".slider-arrow.next").addEventListener("click", () => slide(1));

// Dots (shown on phones, where the arrows are hidden)
const dots = document.createElement("div");
dots.className = "slider-dots";
quotes.forEach((quote, i) => {
	const dot = document.createElement("button");
	dot.type = "button";
	dot.setAttribute("aria-label", `Show testimonial ${i + 1}`);
	dot.addEventListener("click", () => track.scrollTo({left: step() * i, behavior: "smooth"}));
	dots.append(dot);
});
track.after(dots);

function updateDots() {
	const current = Math.round(track.scrollLeft / step());
	[...dots.children].forEach((dot, i) => dot.setAttribute("aria-current", i === current));
}
track.addEventListener("scroll", updateDots, {passive: true});
updateDots();

// Contact form (demo only, nothing is sent)
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	form.querySelector(".form-note").hidden = false;
	form.reset();
});

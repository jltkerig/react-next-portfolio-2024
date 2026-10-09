const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll("#main-menu .nav-link").forEach((link) => {
	link.addEventListener("click", () => {
		const menu = bootstrap.Collapse.getInstance("#main-menu");
		if (menu) menu.hide();
	});
});

const form = document.querySelector(".newsletter-form, .contact-form");
if (form) {
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		form.querySelector(".form-note").textContent = form.dataset.message;
		form.reset();
	});
}

const status = document.getElementById("open-status");
const hourRows = document.querySelectorAll(".hours-table tr");
if (status && hourRows.length === 7) {
	const week = [null, [10, 21], [10, 17], [10, 17], [10, 21], [10, 17], [10, 17]];
	const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const parts = new Intl.DateTimeFormat("en-US", {
		timeZone: "America/New_York",
		weekday: "short",
		hour: "numeric",
		minute: "numeric",
		hourCycle: "h23",
	}).formatToParts(new Date());
	const part = (type) => parts.find((p) => p.type === type).value;
	const dayIndex = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(part("weekday"));
	const minutes = (parseInt(part("hour"), 10) % 24) * 60 + parseInt(part("minute"), 10);
	const label = (h) => (h % 12 || 12) + (h < 12 ? "am" : "pm");

	hourRows[(dayIndex + 6) % 7].classList.add("today");

	const today = week[dayIndex];
	let text;
	let open = false;
	if (today && minutes >= today[0] * 60 && minutes < today[1] * 60) {
		open = true;
		text = "Open now · Closes today at " + label(today[1]);
	} else {
		let next = null;
		for (let i = 0; i < 8 && !next; i++) {
			const d = (dayIndex + i) % 7;
			const hours = week[d];
			if (!hours || (i === 0 && minutes >= hours[0] * 60)) continue;
			next = { i, d, opens: hours[0] };
		}
		const when = next.i === 0 ? "today" : next.i === 1 ? "tomorrow" : dayNames[next.d];
		text = "Closed now · Opens " + when + " at " + label(next.opens);
	}
	status.textContent = text;
	status.classList.add(open ? "is-open" : "is-closed");
}

const dividers = document.querySelectorAll(".divider");
const targets = document.querySelectorAll(
	".section-head, .product-card, .info-card, .visit-photo, .category, .service, .perks li, .signup-card, .classes-text-inner, .notion-img, .check-list li, .faq-item, .legal-block, .tile, .message-grid, .closing-band .container"
);

if (reduceMotion || !("IntersectionObserver" in window)) {
	dividers.forEach((el) => el.classList.add("is-visible"));
} else {
	const counts = new Map();
	targets.forEach((el) => {
		const group = el.closest(".row, .interest-grid, ul, .faq-list, .legal") || el.parentElement;
		const n = counts.get(group) || 0;
		counts.set(group, n + 1);
		el.style.setProperty("--d", Math.min(n, 5) * 0.12 + "s");
		el.classList.add("reveal");
		el.addEventListener("transitionend", (e) => {
			if (e.target !== el || e.propertyName !== "transform") return;
			el.classList.remove("reveal", "is-visible");
			el.style.removeProperty("--d");
		});
	});

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				entry.target.classList.add("is-visible");
				observer.unobserve(entry.target);
			});
		},
		{ threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
	);
	targets.forEach((el) => observer.observe(el));
	dividers.forEach((el) => observer.observe(el));

	const bar = document.createElement("div");
	bar.className = "scroll-progress";
	bar.setAttribute("aria-hidden", "true");
	document.body.prepend(bar);
	const updateBar = () => {
		const max = document.documentElement.scrollHeight - window.innerHeight;
		bar.style.transform = "scaleX(" + (max > 0 ? window.scrollY / max : 0) + ")";
	};
	window.addEventListener("scroll", updateBar, { passive: true });
	updateBar();
}

if (location.hash.length > 1) {
	try {
		const answer = document.querySelector(location.hash + ".collapse");
		if (answer) {
			bootstrap.Collapse.getOrCreateInstance(answer, { toggle: false }).show();
			answer.scrollIntoView({ block: "center" });
		}
	} catch (err) {
		console.warn("Could not open section from link", err);
	}
}

document.addEventListener("keydown", (e) => {
	const control = e.target.closest ? e.target.closest("a[role=button]") : null;
	if (control && e.key === " ") {
		e.preventDefault();
		control.click();
	}
});

const slider = document.getElementById("carousel-a-fabric-place");
const toggle = slider ? slider.querySelector(".carousel-toggle") : null;
if (slider && toggle) {
	const carousel = bootstrap.Carousel.getOrCreateInstance(slider);
	const icon = toggle.querySelector("i");
	const setPaused = (paused) => {
		slider.classList.toggle("is-paused", paused);
		toggle.setAttribute("aria-label", paused ? "Play slideshow" : "Pause slideshow");
		icon.className = "bi " + (paused ? "bi-play-fill" : "bi-pause-fill");
		if (paused) carousel.pause();
		else carousel.cycle();
	};
	toggle.addEventListener("click", () => setPaused(!slider.classList.contains("is-paused")));
	if (reduceMotion) setPaused(true);
}

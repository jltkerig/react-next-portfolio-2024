"use client";

import {useEffect, useState} from "react";
import styles from "./ArticleVariants.module.css";

/*reading bar for the band article design: slides in under the site nav once the big header has scrolled away. shows the title, the section you're in, a contents menu and a progress line*/
export default function BandBar({title}) {
	const [shown, setShown] = useState(false);
	const [sections, setSections] = useState([]);
	const [active, setActive] = useState("");
	const [progress, setProgress] = useState(0);
	const [open, setOpen] = useState(false);
	const [top, setTop] = useState(81);

	useEffect(() => {
		const article = document.querySelector("[data-article]");
		const hero = article.querySelector("header");
		const found = [...article.querySelectorAll("h2:not([data-skip])")].map((h, i) => {
			if (!h.id) h.id = `section-${i + 1}`;
			return {id: h.id, text: h.textContent, el: h};
		});
		setSections(found.map(({id, text}) => ({id, text})));

		const onScroll = () => {
			const nav = document.querySelector(".navbar");
			if (nav) setTop(nav.getBoundingClientRect().bottom); /*sit flush under the nav whatever its height*/
			setShown(hero.getBoundingClientRect().bottom < 90);
			const rect = article.getBoundingClientRect();
			const total = rect.height - window.innerHeight;
			setProgress(total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0);
			let current = "";
			found.forEach((s, i) => {
				const line = i === found.length - 1 ? 0.8 : 0.35;
				if (s.el.getBoundingClientRect().top < window.innerHeight * line) current = s.id;
			});
			setActive(current);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, {passive: true});
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, []);

	const current = sections.find((s) => s.id === active);

	return (
		<div className={`${styles.bar} ${shown ? styles.barShown : ""}`} style={{top}} aria-hidden={!shown}>
			<div className={styles.barInner}>
				<span className={styles.barTitle}>{title}</span>
				<span className={styles.barSection}>{current ? current.text : ""}</span>
				{sections.length > 0 && (
					<button type="button" className={styles.barButton} aria-expanded={open} onClick={() => setOpen(!open)} tabIndex={shown ? 0 : -1}>
						Contents
					</button>
				)}
			</div>
			{open && (
				<ol className={styles.barMenu}>
					{sections.map((s) => (
						<li key={s.id}>
							<a href={`#${s.id}`} className={active === s.id ? styles.current : ""} onClick={() => setOpen(false)}>
								{s.text}
							</a>
						</li>
					))}
				</ol>
			)}
			<div className={styles.barProgress}>
				<span style={{width: `${progress * 100}%`}} />
			</div>
		</div>
	);
}

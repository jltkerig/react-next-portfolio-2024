"use client";

import {useEffect, useState} from "react";
import styles from "./ArticleVariants.module.css";

/*sticky side header for the sidebar article design: shrinks as you scroll, lists the article's sections, highlights the one you're in and fills a progress bar*/
export default function SidebarHead({title, subhead, date, dateLabel}) {
	const [compact, setCompact] = useState(false);
	const [sections, setSections] = useState([]);
	const [active, setActive] = useState("");
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const article = document.querySelector("[data-article]");
		const found = [...article.querySelectorAll("h2:not([data-skip])")].map((h, i) => {
			if (!h.id) h.id = `section-${i + 1}`;
			return {id: h.id, text: h.textContent, el: h};
		});
		setSections(found.map(({id, text}) => ({id, text})));

		const onScroll = () => {
			setCompact(window.scrollY > 160);
			const rect = article.getBoundingClientRect();
			const total = rect.height - window.innerHeight;
			setProgress(total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0);
			let current = "";
			/*the last section (citations) is short and the page ends soon after it, so it counts as reached sooner than the others*/
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

	return (
		<header className={`${styles.head} ${compact ? styles.compact : ""}`}>
			<div className={styles.progress} aria-hidden="true">
				<span style={{height: `${progress * 100}%`}} />
			</div>
			<div className={styles.meta}>
				<span className={styles.label}>Article</span>
				<time className={styles.date} dateTime={date}>
					{dateLabel}
				</time>
			</div>
			<h1 className={styles.title}>{title}</h1>
			<p className={styles.subhead}>{subhead}</p>
			{sections.length > 0 && (
				<nav className={styles.toc} aria-label="In this article">
					<h2 data-skip>In this article</h2>
					<ol>
						{sections.map((s) => (
							<li key={s.id}>
								<a href={`#${s.id}`} className={active === s.id ? styles.current : ""} aria-current={active === s.id ? "true" : undefined}>
									{s.text}
								</a>
							</li>
						))}
					</ol>
				</nav>
			)}
		</header>
	);
}

import {formatDate} from "@/app/articles/articles";
import styles from "./ArticleVariants.module.css";
import SidebarHead from "./SidebarHead";
import BandBar from "./BandBar";

/*alternate article designs for comparing: variant is "sidebar" or "band". same props as ArticleLayout*/
export default function ArticleVariant({variant, title, subhead, published, citations = [], children}) {
	const cites = citations.length > 0 && (
		<aside className={styles.citations} aria-labelledby="citations-title">
			<h2 id="citations-title">Citations</h2>
			<ol>
				{citations.map((c, i) => (
					<li key={i}>
						{typeof c === "string" ? (
							c
						) : (
							<a href={c.url} target="_blank" rel="noopener noreferrer">
								{c.text}
							</a>
						)}
					</li>
				))}
			</ol>
		</aside>
	);

	return (
		<article className={`${styles.article} ${styles[variant]}`} data-article>
			{variant === "sidebar" ? (
				<SidebarHead title={title} subhead={subhead} date={published} dateLabel={formatDate(published)} />
			) : (
			<header className={styles.head}>
				<div className={styles.meta}>
					<span className={styles.label}>Article</span>
					<time className={styles.date} dateTime={published}>
						{formatDate(published)}
					</time>
				</div>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.subhead}>{subhead}</p>
			</header>
			)}
			{variant === "band" && <BandBar title={title} />}
			{variant === "band" ? (
				<div className={styles.card}>
					<div className={styles.body}>{children}</div>
					{cites}
				</div>
			) : (
				<>
					<div className={styles.body}>{children}</div>
					{cites}
				</>
			)}
		</article>
	);
}

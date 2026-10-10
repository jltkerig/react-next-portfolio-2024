import PageHeader from "@/src/components/PageHeader";
import {formatDate} from "@/app/articles/articles";
import styles from "./ArticleLayout.module.css";

/*shared article page: title, subhead, published date, body, then a small citations list. citations is an array of strings or {text, url}*/
export default function ArticleLayout({title, subhead, published, citations = [], children}) {
	return (
		<article className={styles.article}>
			<PageHeader title={title} label="Article" sub={subhead}>
				<p className={styles.date}>
					Published <time dateTime={published}>{formatDate(published)}</time>
				</p>
			</PageHeader>
			<div className={styles.body}>
				{children}
				{citations.length > 0 && (
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
				)}
			</div>
		</article>
	);
}

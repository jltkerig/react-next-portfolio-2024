import PageHeader from "@/src/components/PageHeader";
import Link from "next/link";
import {articles, formatDate} from "./articles";
import styles from "./articles.module.css";

export const metadata = {
	title: {absolute: "Articles on Design and the Web | Jamie Kerig"},
	description: "Articles by Jamie Kerig, a Maryland web and graphic designer, on clear design, readable layouts and building for the web.",
	alternates: {canonical: "/articles/"},
};

export default function Articles() {
	return (
		<div>
			<PageHeader title="Articles" label="Writing" sub="Thoughts on design and the web.">
				<p>Things I've written, newest first.</p>
			</PageHeader>
			<ul className={styles.list}>
				{[...articles]
					.sort((a, b) => b.published.localeCompare(a.published))
					.map((a) => (
						<li key={a.slug}>
							<Link href={`/articles/${a.slug}/`} className={styles.item}>
								<time dateTime={a.published}>{formatDate(a.published)}</time>
								<h2>{a.title}</h2>
								<p>{a.subhead}</p>
							</Link>
						</li>
					))}
			</ul>
		</div>
	);
}

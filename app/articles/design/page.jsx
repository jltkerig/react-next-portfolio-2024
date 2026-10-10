import ArticleLayout from "@/src/components/ArticleLayout";

export const metadata = {
	title: "Design",
	description: "Placeholder subhead: a one-sentence summary of the article goes here.",
	alternates: {canonical: "/articles/design/"},
};

export default function DesignArticle() {
	return (
		<ArticleLayout
			title="Design"
			subhead="Placeholder subhead: a one-sentence summary of the article goes here."
			published="2026-10-09"
			citations={["Placeholder citation: Author. Title of source. Publisher, year.", {text: "Placeholder linked citation", url: "https://example.com"}]}>
			<p>Placeholder text. This first paragraph gets a large drop cap. Replace everything in this article with your own writing; the title, subhead, date and citations are all set on this page.</p>
			<h2>A section heading</h2>
			<p>More placeholder text, to show how the body copy, headings and spacing look at reading width.</p>
		</ArticleLayout>
	);
}

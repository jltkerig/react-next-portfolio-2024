import ArticleVariant from "@/src/components/ArticleVariants";
import SampleArticleBody from "@/src/components/SampleArticleBody";

/*design preview only: not in the article list or sitemap*/
export const metadata = {title: "Design (layout D)", robots: {index: false, follow: false}};

export default function Page() {
	return (
		<ArticleVariant
			variant="band"
			title="Design"
			subhead="Placeholder subhead: a one-sentence summary of the article goes here."
			published="2026-10-09"
			citations={["Placeholder citation: Author. Title of source. Publisher, year.", {text: "Placeholder linked citation", url: "https://example.com"}]}>
			<SampleArticleBody />
		</ArticleVariant>
	);
}

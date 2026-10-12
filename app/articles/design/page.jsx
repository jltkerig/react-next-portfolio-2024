import ArticleLayout from "@/src/components/ArticleLayout";

const subhead = "Good design is a series of small decisions about clarity: what to show first, what to leave out, and how to make the rest easy to read.";

export const metadata = {
	title: "Design",
	description: subhead,
	alternates: {canonical: "/articles/design/"},
};

export default function DesignArticle() {
	return (
		<ArticleLayout
			title="Design"
			subhead={subhead}
			published="2026-10-09">
			<p>Most people notice design only when it goes wrong: a menu they can't find, a paragraph set too small to read, a page that asks for three things at once. When design works, it disappears and the reader simply gets what they came for. That quiet result is usually the goal.</p>
			<h2>Start with the reader</h2>
			<p>Before choosing a color or a typeface, it helps to answer two questions: who is this for, and what should they do next? A page for a customer ready to call a store has different needs than a page for someone comparing five options. Every choice that follows, from the headline to the size of a button, gets easier once those answers are clear.</p>
			<h2>Where I find inspiration</h2>
			<p>
				I start most projects by collecting ideas before I draw anything. On{" "}
				<a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
					Pinterest
				</a>{" "}
				I build a mood board of colors, textures, type and layouts that fit the feel of the project, so patterns show up quickly. For finished work from other designers I browse{" "}
				<a href="https://www.behance.net" target="_blank" rel="noopener noreferrer">
					Behance
				</a>
				, and for what is possible on the web right now I look at the award-winning sites on{" "}
				<a href="https://www.awwwards.com" target="_blank" rel="noopener noreferrer">
					Awwwards
				</a>
				. None of it is for copying. It is a way to learn what is working and to find my own direction.
			</p>
			<h2>Hierarchy tells people where to look</h2>
			<p>Readers scan before they read. Size, weight, color and spacing signal what matters most, what comes second and what can wait. If everything is bold, nothing is. A strong hierarchy lets someone grasp the point of a page in a few seconds and decide whether to stay.</p>
			<h2>White space is part of the design</h2>
			<p>Empty space isn't wasted space. Generous margins and room between elements separate ideas, slow the eye down and make a page feel calm rather than crowded. Cutting a third of what's on a page often makes the remaining two thirds work harder.</p>
			<h2>Make it readable for everyone</h2>
			<p>Readable type, strong contrast and clear links and buttons are not extras. Text that is easy for an older reader, or for someone on a phone in bright sunlight, is easier for everyone. Designing for accessibility from the start usually costs less than fixing it later, and the result tends to look cleaner too.</p>
			<h2>Be consistent</h2>
			<p>Using the same colors, spacing and patterns throughout a project teaches readers how it works. Once they have learned what a certain button style means, they never need to think about it again. Consistency builds trust, and trust is hard to earn back once a design starts to surprise people.</p>
			<h2>Test it, then simplify</h2>
			<p>The first version is rarely the best one. Viewing a design on a phone, printing it, or handing it to someone unfamiliar with the project shows problems the designer can no longer see. Then comes the most useful step: removing whatever didn't help.</p>
		</ArticleLayout>
	);
}

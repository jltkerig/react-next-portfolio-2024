/*placeholder article text for the design previews: shows headings, quotes, lists, links and other typography*/
export default function SampleArticleBody() {
	return (
		<>
			<p>
				Placeholder text, written only to show how a long article reads. Good design is rarely noticed when it works, and almost always noticed when it does not. A page with generous spacing, a steady rhythm and a clear order of importance lets the reader focus on the words instead of the
				layout around them.
			</p>
			<p>
				The first rule is simple: <strong>start with the reader</strong>. Before choosing a typeface or a color, ask who is reading, where they are reading, and what they need to do next. A reader on a phone in a doorway needs something very different from a reader at a desk with a
				cup of coffee. <em>Everything else follows from that answer.</em>
			</p>

			<h2>Type sets the tone</h2>
			<p>
				A typeface carries a voice before a single word is understood. A tall italic serif feels personal and a little theatrical; a condensed sans feels quick and practical. Pairing the two gives a page both a voice and a rhythm, as long as each has a clear job. For more on pairing, see
				the <a href="https://example.com">placeholder link to a source</a>, which is styled the same as every other link on the site.
			</p>
			<blockquote>
				<p>Placeholder quotation: design is not just what it looks like and feels like; design is how it works.</p>
				<cite>Placeholder Person, Placeholder Book</cite>
			</blockquote>
			<p>
				Line length matters just as much as the typeface. Somewhere between sixty and seventy-five characters per line is comfortable for most readers; much shorter and the eye jumps too often, much longer and it loses its place on the way back to the start of the next line. Line height does
				the same quiet work vertically, giving each line room to breathe.
			</p>

			<h3>A smaller heading</h3>
			<p>Smaller headings break a long section into pieces without needing a new big idea. They are a place for the eye to land while scanning, and a promise about what the next few paragraphs hold.</p>
			<ul>
				<li>Use one clear <strong>size scale</strong>, and stick to it.</li>
				<li>Let <em>whitespace</em> do the work that borders and boxes often try to do.</li>
				<li>Keep color for meaning: links, dates and emphasis, not decoration.</li>
				<li>Check the page on a small screen before calling it done.</li>
			</ul>

			<h2>Color and contrast</h2>
			<p>
				Color is the quickest way to tell a reader what matters. A single strong accent, used sparingly, guides the eye better than five competing ones. Text needs enough contrast to be read comfortably in poor light, and an accent that looks lovely on a large heading may be too faint for
				body copy.
			</p>
			<p className="pullquote">Placeholder pull quote: a single line lifted from the article and set large.</p>
			<p>
				Once the basics are working, details start to matter: the space after a heading, the way a list is indented, the weight of a rule. None of these are individually important. Together they decide whether a page feels careful or careless, and readers sense the difference even
				when they cannot name it.
			</p>

			<figure>
				<div className="figure-placeholder" role="img" aria-label="Placeholder for an image" />
				<figcaption>Placeholder caption: a short line describing the image above, with a credit if needed.</figcaption>
			</figure>

			<h2>A short process</h2>
			<ol>
				<li>Write the words first, even roughly.</li>
				<li>Decide what the reader should notice first, second and third.</li>
				<li>Choose type and color to support that order.</li>
				<li>Test the page on a phone, then on a large screen.</li>
				<li>Remove anything that does not help.</li>
			</ol>
			<hr />
			<p>
				Placeholder closing paragraph. Replace all of this text with your own writing. The title, subhead, date and citations are set where the article page is defined, and everything between them can be as long or as short as the article needs. Inline code such as{" "}
				<code>font-size: 1.2rem</code> and <abbr title="Search engine optimization">SEO</abbr> terms are styled too.
			</p>
		</>
	);
}

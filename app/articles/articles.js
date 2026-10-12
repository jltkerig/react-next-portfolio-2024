/*list of articles shown on /articles/. add a new entry here, then a page in app/articles/<slug>/page.jsx*/
export const articles = [
	{
		slug: "design",
		title: "Design",
		subhead: "Good design is a series of small decisions about clarity: what to show first, what to leave out, and how to make the rest easy to read.",
		published: "2026-10-09",
	},
];

export function formatDate(iso) {
	return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {year: "numeric", month: "long", day: "numeric"});
}

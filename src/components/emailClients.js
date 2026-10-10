/*mimics how each e-mail app rewrites e-mail html. these are approximations, not real renders*/

/*css the Word engine (Outlook 2016 desktop) ignores*/
const OUTLOOK_IGNORED = ["max-width", "min-width", "max-height", "min-height", "border-radius", "box-shadow", "text-shadow", "overflow", "float", "position", "opacity", "transform", "filter", "object-fit", "flex", "flex-direction", "flex-wrap", "gap", "justify-content", "align-items", "background-size", "background-position", "background-repeat", "white-space"];
const IGNORED_RE = new RegExp(`(?<![\\w-])(?:${OUTLOOK_IGNORED.join("|")}|-webkit-[\\w-]+|-moz-[\\w-]+)\\s*:\\s*[^;}"]*;?`, "gi");

/*removes @media blocks (Outlook ignores them) and @import rules, keeps the rest*/
function stripAtRules(css, {media}) {
	let out = css.replace(/@import[^;]*;/gi, "");
	if (!media) return out;
	let i;
	while ((i = out.search(/@media/i)) !== -1) {
		const open = out.indexOf("{", i);
		if (open === -1) break;
		let depth = 1;
		let j = open + 1;
		while (j < out.length && depth > 0) {
			if (out[j] === "{") depth++;
			if (out[j] === "}") depth--;
			j++;
		}
		out = out.slice(0, i) + out.slice(j);
	}
	return out;
}

/*Outlook shows content inside "if mso" comments and hides "if !mso" content*/
function applyMsoComments(html) {
	return html
		.replace(/<!--\[if !mso[^\]]*\]><!-->([\s\S]*?)<!--<!\[endif\]-->/gi, "")
		.replace(/<!--\[if (?:gte |lte )?mso[^\]]*\]>([\s\S]*?)<!\[endif\]-->/gi, "$1");
}

/*client: "gmail" | "apple" | "outlook". base is the folder the e-mail's relative images live in*/
export function buildEmailDoc(html, client, base) {
	const source = client === "outlook" ? applyMsoComments(html) : html;
	const doc = new DOMParser().parseFromString(source, "text/html");

	/*relative images load from the e-mail's own folder; links never navigate*/
	const baseEl = doc.createElement("base");
	baseEl.setAttribute("href", base);
	baseEl.setAttribute("target", "_blank");
	doc.head.prepend(baseEl);

	if (client === "gmail") {
		/*Gmail drops @import web fonts, so the fallback font shows*/
		doc.querySelectorAll("style").forEach((s) => (s.textContent = stripAtRules(s.textContent, {media: false})));
		doc.querySelectorAll("title, meta[name=viewport]").forEach((n) => n.remove());
	}

	if (client === "outlook") {
		doc.querySelectorAll("style").forEach((s) => (s.textContent = stripAtRules(s.textContent, {media: true}).replace(IGNORED_RE, "")));
		doc.querySelectorAll("[style]").forEach((n) => {
			n.setAttribute("style", n.getAttribute("style").replace(IGNORED_RE, ""));
		});
		doc.querySelectorAll("title, meta[name=viewport]").forEach((n) => n.remove());
		/*unstyled text falls back to Word's default serif font*/
		const defaults = doc.createElement("style");
		defaults.textContent = 'body, td, p { font-family: "Times New Roman", serif; font-size: 12pt; }';
		baseEl.after(defaults);
	}

	return "<!DOCTYPE html>" + doc.documentElement.outerHTML;
}

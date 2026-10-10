import fs from "node:fs";
import path from "node:path";
import {notFound} from "next/navigation";
import EmailViewer from "@/src/components/EmailViewer";
import {emails, getEmail} from "../emails";

export const dynamicParams = false;

export function generateStaticParams() {
	return emails.map((e) => ({slug: e.slug}));
}

export async function generateMetadata({params}) {
	const email = getEmail((await params).slug);
	if (!email) return {};
	return {
		title: `${email.title} E-mail Preview`,
		description: `${email.title} e-mail template previewed in Gmail, Apple Mail and Outlook 2016.`,
		alternates: {canonical: `/email/${email.slug}/`},
		robots: {index: false, follow: false},
	};
}

export default async function EmailPreview({params}) {
	const email = getEmail((await params).slug);
	if (!email) notFound();

	/*read at build time and pass to the viewer, so no fetch is needed in the browser*/
	const html = fs.readFileSync(path.join(process.cwd(), "public", "email", email.slug, email.file), "utf8");

	return (
		<div>
			<EmailViewer email={email} html={html} />
		</div>
	);
}

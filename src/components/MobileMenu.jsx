"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

const links = [
	{href: "/about/", label: "About"},
	{href: "/web/", label: "Web"},
	{href: "/graphic/", label: "Graphic"},
	{href: "/contact/", label: "Contact"},
];

/*hamburger button and dropdown panel for the nav at 800px and narrower. hidden on larger screens by index.css*/
export default function MobileMenu() {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	useEffect(() => {
		if (!open) return;
		const onKey = (e) => e.key === "Escape" && setOpen(false);
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);

	return (
		<>
			<button type="button" className={`menu-button${open ? " menu-open" : ""}`} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
				<span />
				<span />
				<span />
			</button>
			<div id="mobile-menu" className={`menu-panel${open ? " menu-panel-open" : ""}`} hidden={!open}>
				<ul>
					{links.map((l) => (
						<li key={l.href}>
							<Link href={l.href} onClick={() => setOpen(false)}>
								{l.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

"use client";

import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import {buildEmailDoc} from "./emailClients";
import styles from "./EmailViewer.module.css";

const clients = [
	{id: "gmail", label: "Gmail", note: "Gmail on the web. Web fonts from @import are dropped, so the fallback font shows."},
	{id: "apple", label: "Apple Mail", note: "Apple Mail on a Mac. Modern CSS and media queries work, so this is closest to the original design."},
	{id: "outlook", label: "Outlook 2016", note: "Outlook 2016 for Windows uses Word to draw e-mail, so it ignores media queries, max-width, rounded corners and more."},
];

/*the e-mail itself, drawn in a sandboxed iframe that grows to fit its content*/
function EmailFrame({html, client, base, phone}) {
	const ref = useRef(null);
	const [doc, setDoc] = useState("");

	useEffect(() => {
		setDoc(buildEmailDoc(html, client, base));
	}, [html, client, base]);

	const fit = () => {
		const el = ref.current?.contentDocument?.documentElement;
		if (el) ref.current.style.height = el.scrollHeight + "px";
	};

	const onLoad = () => {
		fit();
		const el = ref.current?.contentDocument?.documentElement;
		if (el && "ResizeObserver" in window) new ResizeObserver(fit).observe(el);
	};

	return (
		<div className={`${styles.paper} ${phone ? styles.phone : ""}`}>
			{doc && <iframe ref={ref} className={`${styles.frame} ${client === "outlook" ? styles.fixed : ""}`} title="E-mail preview" scrolling="no" sandbox="allow-same-origin allow-scripts" srcDoc={doc} onLoad={onLoad} />}
		</div>
	);
}

function Gmail({email, children}) {
	return (
		<div className={styles.gmail}>
			<div className={styles.gmTop}>
				<span className={styles.gmMenu}>☰</span>
				<span className={styles.gmLogo}>Mail</span>
				<span className={styles.gmSearch}>Search mail</span>
				<span className={styles.gmAvatar} />
			</div>
			<div className={styles.gmBody}>
				<nav className={styles.gmNav}>
					<span className={styles.gmCompose}>✎ Compose</span>
					<span className={styles.gmActive}>Inbox <b>1</b></span>
					<span>Starred</span>
					<span>Snoozed</span>
					<span>Sent</span>
					<span>Drafts</span>
				</nav>
				<main className={styles.gmMain}>
					<div className={styles.gmTools}>← &nbsp; ⬒ &nbsp; ⓘ &nbsp; 🗑 &nbsp; ✉</div>
					<h3 className={styles.gmSubject}>{email.subject} <span className={styles.gmChip}>Inbox</span></h3>
					<div className={styles.gmFrom}>
						<span className={styles.gmInitial}>{email.sender[0]}</span>
						<div>
							<b>{email.sender}</b> <small>&lt;{email.address}&gt;</small>
							<div className={styles.gmTo}>to me ▾</div>
						</div>
						<small className={styles.gmDate}>9:41 AM (2 hours ago)</small>
					</div>
					{children}
				</main>
			</div>
		</div>
	);
}

function Apple({email, children}) {
	return (
		<div className={styles.apple}>
			<div className={styles.apBar}>
				<span className={styles.apLights}><i /><i /><i /></span>
				<span className={styles.apTitle}>Inbox <small>1 message</small></span>
			</div>
			<div className={styles.apBody}>
				<nav className={styles.apSide}>
					<small>Favorites</small>
					<span className={styles.apActive}>✉ Inbox</span>
					<span>★ VIPs</span>
					<span>⚑ Flagged</span>
					<span>✎ Drafts</span>
					<span>➤ Sent</span>
				</nav>
				<div className={styles.apList}>
					<div className={styles.apRow}>
						<b>{email.sender}</b> <small>9:41 AM</small>
						<div>{email.subject}</div>
						<small>{email.preview}</small>
					</div>
				</div>
				<main className={styles.apRead}>
					<div className={styles.apHead}>
						<span className={styles.apInitial}>{email.sender[0]}</span>
						<div>
							<b>{email.sender}</b>
							<div>{email.subject}</div>
							<small>To: Me</small>
						</div>
						<small className={styles.apDate}>Today at 9:41 AM</small>
					</div>
					{children}
				</main>
			</div>
		</div>
	);
}

function Outlook({email, children}) {
	const tabs = ["File", "Home", "Send / Receive", "Folder", "View", "Help"];
	const groups = [
		["New", ["New Email", "New Items"]],
		["Delete", ["Ignore", "Delete", "Archive"]],
		["Respond", ["Reply", "Reply All", "Forward"]],
		["Move", ["Move", "Rules", "OneNote"]],
		["Tags", ["Unread / Read", "Categorize", "Follow Up"]],
	];
	return (
		<div className={styles.outlook}>
			<div className={styles.olTitle}>Inbox - you@example.com - Outlook</div>
			<div className={styles.olTabs}>
				{tabs.map((t) => (
					<span key={t} className={t === "Home" ? styles.olTabOn : t === "File" ? styles.olFile : ""}>{t}</span>
				))}
			</div>
			<div className={styles.olRibbon}>
				{groups.map(([name, items]) => (
					<div key={name} className={styles.olGroup}>
						<div className={styles.olItems}>{items.map((i) => <span key={i}>{i}</span>)}</div>
						<small>{name}</small>
					</div>
				))}
			</div>
			<div className={styles.olBody}>
				<nav className={styles.olFolders}>
					<small>Favorites</small>
					<span className={styles.olActive}>Inbox <b>1</b></span>
					<span>Sent Items</span>
					<span>Deleted Items</span>
					<span>Drafts</span>
				</nav>
				<div className={styles.olList}>
					<div className={styles.olRow}>
						<b>{email.sender}</b>
						<div>{email.subject}</div>
						<small>{email.preview}</small>
					</div>
				</div>
				<main className={styles.olRead}>
					<div className={styles.olHead}>
						<span className={styles.olInitial}>{email.sender[0]}</span>
						<div>
							<small>10/10/2022 9:41 AM</small>
							<div><b>{email.sender}</b> <small>&lt;{email.address}&gt;</small></div>
							<h3>{email.subject}</h3>
							<small>To: You</small>
						</div>
					</div>
					{children}
				</main>
			</div>
		</div>
	);
}

const chrome = {gmail: Gmail, apple: Apple, outlook: Outlook};

export default function EmailViewer({email, html}) {
	const [client, setClient] = useState("gmail");
	const [phone, setPhone] = useState(false);
	const Chrome = chrome[client];
	const current = clients.find((c) => c.id === client);

	return (
		<section className={styles.viewer}>
			<div className={styles.top}>
				<Link href="/web/" className={styles.back}>← Web projects</Link>
				<h1 className={styles.name}>{email.title}</h1>
			</div>
			<div className={styles.controls}>
				<div className={styles.tabs} role="tablist" aria-label="E-mail app">
					{clients.map((c) => (
						<button key={c.id} role="tab" aria-selected={client === c.id} className={client === c.id ? styles.tabOn : ""} onClick={() => setClient(c.id)}>
							{c.label}
						</button>
					))}
				</div>
				{client !== "outlook" && (
					<button className={`${styles.toggle} ${phone ? styles.tabOn : ""}`} aria-pressed={phone} onClick={() => setPhone(!phone)}>
						Phone width
					</button>
				)}
			</div>
			<p className={styles.note}>{current.note}</p>
			<Chrome email={email}>
				<EmailFrame html={html} client={client} base={`/email/${email.slug}/`} phone={phone && client !== "outlook"} />
			</Chrome>
		</section>
	);
}

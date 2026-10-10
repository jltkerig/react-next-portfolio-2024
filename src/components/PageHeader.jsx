import styles from "./PageHeader.module.css";

/*editorial page header: oversized title over a rule, teal label + subline on the left, intro on the right*/
export default function PageHeader({title, label, sub, children}) {
	return (
		<header className={styles.header}>
			<h1 className={styles.title} style={{"--chars": String(title).length + 1}}>
				{title}
			</h1>
			<div className={styles.below}>
				<div className={styles.lead}>
					{label && <h2 className={styles.label}>{label}</h2>}
					{sub && <h3 className={styles.sub}>{sub}</h3>}
				</div>
				{children && <div className={styles.intro}>{children}</div>}
			</div>
		</header>
	);
}

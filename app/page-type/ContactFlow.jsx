import home from "../home.module.css";
import flow from "./flow.module.css";

/*options for how the credentials band flows into the contact section.
the form here is a static look-alike (unique ids per option), the real one is src/components/form.jsx*/
const stats = [
	{n: "10+", l: "Years designing for the web"},
	{n: "2-in-1", l: "Designer and front-end developer, from logo to launch"},
	{n: "BS", l: "Graphic Design, Towson University"},
	{n: "MD", l: "Maryland-based, working with local businesses"},
];

function Stats({className = home.stats, statClass = home.stat}) {
	return (
		<div className={className}>
			{stats.map((s) => (
				<div key={s.l} className={statClass}>
					<span className={home.statNum}>{s.n}</span>
					<span className={home.statLabel}>{s.l}</span>
				</div>
			))}
		</div>
	);
}

function ContactText({center}) {
	return (
		<div className={center ? flow.textCenter : undefined}>
			<p className={home.kicker}>Contact</p>
			<h2 className={flow.h2}>Have a question?</h2>
			<p className={flow.copy}>Got questions about web or design? Whether you need advice, have a project idea, or just want to chat about creative solutions, drop me a message and I’ll get back to you as soon as I can.</p>
		</div>
	);
}

function MockForm({id}) {
	return (
		<form className={flow.form} aria-label="Contact form preview">
			<label htmlFor={`${id}-name`}>Name</label>
			<input id={`${id}-name`} type="text" placeholder="Name" />
			<label htmlFor={`${id}-email`}>Email</label>
			<input id={`${id}-email`} type="email" placeholder="email@gmail.com" />
			<label htmlFor={`${id}-msg`}>Comments/Questions</label>
			<textarea id={`${id}-msg`} placeholder="Send me an email" />
			<button className="contact" type="button">
				Submit
			</button>
		</form>
	);
}

export const flowOptions = [
	{
		name: "1 · Credentials as one bordered bar with dividers, then a 2-column contact",
		el: (
			<div className={flow.barWrap}>
				<Stats className={flow.statBar} statClass={flow.statBarItem} />
				<div className={flow.split}>
					<ContactText />
					<div className={flow.card}>
						<MockForm id="f1" />
					</div>
				</div>
			</div>
		),
	},
	{
		name: "2 · Gold credentials band, then contact on white",
		el: (
			<>
				<div className={flow.goldBand}>
					<Stats statClass={`${home.stat} ${flow.statOnGold}`} />
				</div>
				<div className={`${flow.split} ${flow.splitPad}`}>
					<ContactText />
					<div className={flow.card}>
						<MockForm id="f2" />
					</div>
				</div>
			</>
		),
	},
	{
		name: "3 · Two columns: contact text with a 2×2 credentials grid, form on the right",
		el: (
			<div className={flow.sideBySide}>
				<div>
					<ContactText />
					<Stats className={flow.statsGrid} statClass={flow.statSmall} />
				</div>
				<div className={flow.card}>
					<MockForm id="f3" />
				</div>
			</div>
		),
	},
	{
		name: "4 · Credentials on white, dark blue contact band, form card overlapping its edge",
		el: (
			<div>
				<section className={home.statsBand}>
					<Stats />
				</section>
				<div className={flow.darkBandShort}>
					<div className={flow.darkText}>
						<ContactText center />
					</div>
				</div>
				<div className={flow.overlapCard}>
					<MockForm id="f4" />
				</div>
			</div>
		),
	},
	{
		name: "5 · Credentials as the contact heading: big statement, then form",
		el: (
			<div className={flow.statement}>
				<p className={home.kicker}>10+ years · designer &amp; developer · Maryland-based</p>
				<h2 className={flow.bigH2}>Let’s build something that works for your business</h2>
				<Stats />
				<div className={flow.formNarrow}>
					<MockForm id="f5" />
				</div>
			</div>
		),
	},
];

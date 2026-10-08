import Link from "next/link";
import {JsonLd, ContactBand, ServiceCards, Faq, Featured, LocalContext, Examples, ServiceArea} from "./parts";
import seo from "./seo.module.css";

/*the chosen local seo template ("split hero"): headline + intro beside featured work, local context, services, example projects, service-area map, faq, contact.
every town page renders this with its entry from content.js*/
export default function LocalPage({t}) {
	return (
		<div>
			<JsonLd t={t} />
			<section className={seo.splitHero}>
				<div>
					<p className={seo.kicker}>Maryland Web &amp; Graphic Designer</p>
					<h1 className={seo.h1}>
						{t.h1[0]}
						<em>{t.h1[1]}</em>
						{t.h1[2]}
					</h1>
					<p className={seo.copy}>{t.intro}</p>
					<div className="two-column-button">
						<Link href="/contact/">
							<button className="blue" type="button">
								Get a quote
							</button>
						</Link>
						<Link href="/web/">
							<button className="white" type="button">
								See my work
							</button>
						</Link>
					</div>
				</div>
				<Featured />
			</section>

			<section className={seo.section}>
				<LocalContext t={t} />
			</section>

			<section className={seo.tintBand}>
				<div className={seo.section}>
					<h2 className={seo.h2}>{t.servicesTitle}</h2>
					<ServiceCards t={t} />
				</div>
			</section>

			<section className={seo.section}>
				<h2 className={seo.h2}>{t.examplesTitle}</h2>
				<Examples t={t} />
			</section>

			<section className={seo.tintBand}>
				<div className={seo.section}>
					<ServiceArea t={t} />
				</div>
			</section>

			<section className={seo.section}>
				<h2 className={seo.h2}>Common questions</h2>
				<Faq t={t} />
			</section>

			<ContactBand t={t} />
		</div>
	);
}

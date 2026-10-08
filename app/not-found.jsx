import Link from "next/link";

export const metadata = {
	title: "Page Not Found",
	robots: {index: false, follow: true} /*keep 404 out of search results*/,
};

export default function NoMatch() {
	return (
		<div>
			<div className="row">
				<div className="main-column main-column-p90">
					<section className="top-section top-column-padding">
						<div className="column-split center column-padding">
							<h1>
								<span className="divider-2">404</span>
							</h1>

							<h2>Page not found</h2>
							<h3>Sorry, that page doesn't exist or has moved.</h3>
							<p>Try one of the links above, or head back to the home page or my web projects.</p>
							<div className="two-column-button">
								<Link href="/">
									<button className="blue" type="button">
										Home
									</button>
								</Link>
								<Link href="/web/">
									<button className="white" type="button">
										Web Projects
									</button>
								</Link>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}

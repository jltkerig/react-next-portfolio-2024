import Logo from "../assets/name.png";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home, About, Contact, Web, Illustration} from "../components/Pages";

function Navbar() {
	return (
		<>
			<nav className="navbar">
				<img className="navbar-logo" src={Logo} alt="Logo" />
				<Routes></Routes>
			</nav>
		</>
	);
}
/*<nav className="navbar">
				<img className="navbar-logo" src={Logo} alt="Logo" />
					<ul>
						<li>
							<a href="/">home</a>
						</li>
						<li>
							<a href="/about">about</a>
						</li>
						<li>
							<a href="/web">web</a>
						</li>
						<li>
							<a href="/illustration">illustration</a>
						</li>
						<li>
							<a href="/contact">contact</a>
						</li>
					</ul>
			</nav>
 */
export default Navbar;

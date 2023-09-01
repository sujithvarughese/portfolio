import links from "../links.js";
import { NavLink } from "react-router-dom";

const Navbar = () => {

	return (

			<nav className="flex justify-around py-5 font-serif text-white">
					{links.map(link => {
						return (
							<div key={link.name}>
								<NavLink
									to={link.url} className="cursor-pointer">{link.name}
								</NavLink>
							</div>
						)
					})}
			</nav>

	);
};

export default Navbar;
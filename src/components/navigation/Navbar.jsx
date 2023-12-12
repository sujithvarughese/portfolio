import classes from "./styles/Navbar.module.css";
import links from "./links.js";
import { NavLink } from "react-router-dom";

const Navbar = () => {

	return (

			<nav className={classes.container}>
					{links.map(link => {
						return (
							<div key={link.name} className={classes.link}>
								<NavLink
									to={link.url}>{link.name}
								</NavLink>
							</div>
						)
					})}
			</nav>

	);
};

export default Navbar;
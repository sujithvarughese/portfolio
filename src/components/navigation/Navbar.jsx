import classes from "./styles/Navbar.module.css";
import { NavLink } from "react-router-dom";
import NavbarLinks from "./NavbarLinks.jsx";
const Navbar = () => {

	return (
		<nav className={classes.container}>
			<NavbarLinks />
		</nav>

	);
};


export default Navbar;

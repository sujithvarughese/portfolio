import classes from "./styles/Navbar.module.css";
import { NavLink } from "react-router-dom";
import NavbarLinks from "./NavbarLinks.jsx";
const Navbar = () => {

	return (
		<nav className={classes.container}>
			<div className={classes.backdrop}></div>
			<NavbarLinks />
		</nav>

	);
};


export default Navbar;

import classes from "./styles/Navbar.module.css";
import { NavLink } from "react-router-dom";
import profileIMG from "../../assets/images/profile.jpg"
import NavbarLinks from "./NavbarLinks.jsx";
const Navbar = () => {

	return (
		<nav className={classes.container}>
			<div className={classes.name}>
				Sujith Varughese
			</div>
			<div className={classes.profilePic}>
				<img src={profileIMG} className={classes.image} alt="profile pic" />
			</div>
			<NavbarLinks />
		</nav>

	);
};


export default Navbar;

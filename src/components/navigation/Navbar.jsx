import classes from "./styles/Navbar.module.css";
import { NavLink } from "react-router-dom";
import profileIMG from "../../assets/images/profile.jpg"
const Navbar = () => {

	return (
		<nav className={classes.container}>
			<div className={classes.name}>
				Sujith Varughese
			</div>
			<div className={classes.profilePic}>
				<img src={profileIMG} className={classes.image} alt="profile pic" />
			</div>

			<ul className={classes.links}>
				{links.map(link => {
					return (
						<li key={link.name} className={classes.link}>
							<NavLink
								to={link.url}
								className={({ isActive }) => [classes.link, isActive ? classes.active : undefined].join(" ")}
							>{link.name}
							</NavLink>
						</li>
					)
				})}
			</ul>
		</nav>

	);
};

const links = [
	{
		name: "About Me",
		url: "/"
	},
	{
		name: 'Resume',
		url: '/resume',
	},
	{
		name: 'Portfolio',
		url: '/portfolio',
	},
	{
		name: 'Contact',
		url: '/contact',
	}
]

export default Navbar;

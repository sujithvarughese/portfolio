import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components/index.js";
import links from '../utils/links.js'
import classes from "./styles/Layout.module.css";

const Layout = () => {

	return (
		<div className={classes.container}>
			<Navbar links={links}/>
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
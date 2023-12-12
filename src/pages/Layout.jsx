import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components/index.js";
import classes from "./styles/Layout.module.css";
import StatusBarMobile from "../components/navigation/StatusBarMobile.jsx";


const Layout = () => {

	return (
		<div className={classes.container}>
			<Navbar />

			<StatusBarMobile />

			<div className={classes.content}>
				<Outlet />
				<Footer />
			</div>

		</div>
	);
};

export default Layout;
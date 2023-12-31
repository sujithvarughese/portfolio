import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components/index.js";
import classes from "./styles/Layout.module.css";

const Layout = () => {

	return (
		<div className={classes.container}>


			<div className={classes.content}>
				<Navbar />
				<Outlet />
				<Footer />
			</div>

		</div>
	);
};

export default Layout;
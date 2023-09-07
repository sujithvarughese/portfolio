import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components/index.js";
import links from '../links.js'

const Layout = () => {

	return (
		<div className="max-w-5xl mx-auto overflow-hidden">
			<Navbar links={links}/>
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
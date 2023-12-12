import classes from "./styles/NavbarMobile.module.css";
import { NavModal } from "../../ui"
import { Navbar } from "../"
const NavbarMobile = () => {
    return (
        <NavModal>
            <Navbar />
        </NavModal>
    );
};

export default NavbarMobile;
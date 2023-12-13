import classes from "./styles/NavbarLinks.module.css";
import {NavLink} from "react-router-dom";
import { IoIosContact } from "react-icons/io";
import { FaProjectDiagram } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";
import { MdPermPhoneMsg } from "react-icons/md";

const NavbarLinks = ({ closeNavbar }) => {
    return (
        <div className={classes.links}>
            {links.map(link => {
                return (
                    <NavLink
                        key={link.url}
                        to={link.url}
                        className={({ isActive }) => [classes.link, isActive ? classes.active : undefined].join(" ")}
                    >
                        <>
                            <div className={classes.icon}>{link.icon}</div>
                            <div className={classes.name}>{link.name}</div>
                        </>
                    </NavLink>

                )
            })}
        </div>
    );
};
const links = [
    {
        name: "About Me",
        url: "/",
        icon: <IoIosContact />
    },
    {
        name: 'Resume',
        url: '/resume',
        icon: <GrDocumentUser />
    },
    {
        name: 'Portfolio',
        url: '/portfolio',
        icon: <FaProjectDiagram />
    },
    {
        name: 'Contact',
        url: '/contact',
        icon: <MdPermPhoneMsg />
    }
]
export default NavbarLinks;
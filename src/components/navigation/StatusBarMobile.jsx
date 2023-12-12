import classes from "./styles/StatusBarMobile.module.css";
import {useState} from "react";
import NavbarMobile from "./NavbarMobile.jsx";
import { RiMenuUnfoldFill, RiMenuFoldFill } from "react-icons/ri";
import {ButtonIcon} from "../../ui/index.js";

const StatusBarMobile = () => {

    const [showNav, setShowNav] = useState(false)

    return (
        <div className={classes.container}>

            <div className={classes.button}>
                {showNav ?
                    <ButtonIcon onClick={()=>setShowNav(false)} >
                        <RiMenuFoldFill />
                    </ButtonIcon>
                    :
                    <ButtonIcon onClick={()=>setShowNav(true)}>
                        <RiMenuUnfoldFill />
                    </ButtonIcon>
                }
            </div>


            <div className={classes.navbar}>
                {showNav && <NavbarMobile />}
            </div>

        </div>
    );
};

export default StatusBarMobile;
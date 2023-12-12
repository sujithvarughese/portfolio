import classes from "./styles/MenuButtonMobile.module.css";
import { RiMenuUnfoldFill, RiMenuFoldFill } from "react-icons/ri";

const MenuButtonMobile = () => {
    return (
        <div>
            <RiMenuUnfoldFill />
            <RiMenuFoldFill />
        </div>
    );
};

export default MenuButtonMobile;
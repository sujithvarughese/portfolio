import classes from "./styles/ScreenshotDisplays.module.css";
import DesktopScreen from "./DesktopScreen.jsx";
import MobileScreen from "./MobileScreen.jsx";
const ScreenshotDisplays = ({ image }) => {
    return (
        <div className={classes.container}>
            <div className={classes.desktop}>
                <DesktopScreen image={image} />
            </div>
            <div className={classes.mobile}>
                <MobileScreen image={image} />
            </div>

        </div>
    );
};

export default ScreenshotDisplays;
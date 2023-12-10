import classes from "./styles/ScreenshotDisplays.module.css";
import DesktopScreen from "./project/DesktopScreen.jsx";
import MobileScreen from "./project/MobileScreen.jsx";

const ScreenshotDisplays = ({ desktop, mobile }) => {
    return (
        <div className={classes.container}>
            <div className={classes.desktop}>
                <DesktopScreen image={desktop} />
            </div>
            <div className={classes.mobile}>
                <MobileScreen image={mobile} />
            </div>

        </div>
    );
};

export default ScreenshotDisplays;
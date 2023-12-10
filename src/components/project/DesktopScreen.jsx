import classes from "./styles/DesktopScreen.module.css";

const DesktopScreen = ({ image }) => {
    return (
        <div className={classes.container}>
            <img src={image} className={classes.image} alt="image" />
        </div>
    );
};

export default DesktopScreen;
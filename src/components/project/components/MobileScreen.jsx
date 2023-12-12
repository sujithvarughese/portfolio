import classes from "../styles/MobileScreen.module.css";

const MobileScreen = ({ image }) => {
    return (
        <div className={classes.container}>
            <img src={image} className={classes.image} alt="image" />
        </div>
    );
};

export default MobileScreen;
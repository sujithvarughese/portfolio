import classes from "./styles/Header.module.css";
import ProfilePic from "./ProfilePic.jsx";
const Header = () => {
    return (
        <div className={classes.container}>
            <div className={classes.greeting}>
                <p className={classes.hello}>
                    Hello, I'm
                </p>
                <p className={classes.name}>
                    Sujith Varughese
                </p>
                <p className={classes.title}>
                    Software Developer
                </p>
            </div>
            <div className={classes.pic}>
                <ProfilePic />
            </div>
        </div>
    );
};

export default Header;
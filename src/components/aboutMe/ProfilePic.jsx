import classes from "./styles/ProfilePic.module.css";
import profileIMG from "../../assets/images/profile.jpg"
const ProfilePic = () => {
    return (
        <div className={classes.container}>

            <img src={profileIMG} className={classes.image} alt="proile-pic"/>
        </div>

    )
};

export default ProfilePic;
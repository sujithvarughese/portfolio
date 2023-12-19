import classes from "./styles/Header.module.css";
import profileIMG from "../../assets/images/profile.png"
import diamondBg from "../../assets/images/graphic-diamond.png"
const ProfilePic = () =>
    <div className={classes.imageContainer}>

            <img src={diamondBg} className={classes.bg} alt="bg"/>


            <img src={profileIMG} className={classes.image} alt="proile-pic"/>


    </div>


export default ProfilePic;
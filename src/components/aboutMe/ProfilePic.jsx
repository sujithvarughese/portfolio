import classes from "./styles/ProfilePic.module.css";
import profileIMG from "../../assets/images/profile.jpg"
const ProfilePic = () => <img src={profileIMG} className={classes.image} alt="proile-pic"/>;

export default ProfilePic;
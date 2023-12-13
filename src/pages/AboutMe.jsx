import classes from "./styles/AboutMe.module.css";
import profileIMG from "../assets/images/profile.jpg"
import { Bio, MySkills } from "../components"
const AboutMe = () => {
    return (
        <div className={classes.container}>

            <Bio />
            <MySkills />

        </div>
    );
};

export default AboutMe;
import classes from "./styles/AboutMe.module.css";
import profileIMG from "../assets/images/profile.jpg"
import { Bio, Skills } from "../components"
const AboutMe = () => {
    return (
        <div className={classes.container}>

            <Bio />
            <Skills />

        </div>
    );
};

export default AboutMe;
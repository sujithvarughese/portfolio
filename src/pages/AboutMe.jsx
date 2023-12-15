import classes from "./styles/AboutMe.module.css";
import profileIMG from "../assets/images/profile.jpg"
import { Bio, MySkills } from "../components"
import Header from "../components/aboutMe/Header.jsx";
const AboutMe = () => {
    return (
        <div className={classes.container}>
            <Header />
            <Bio />
            <MySkills />

        </div>
    );
};

export default AboutMe;
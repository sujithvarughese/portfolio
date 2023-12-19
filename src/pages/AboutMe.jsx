import classes from "./styles/AboutMe.module.css";
import profileIMG from "../assets/images/profile.jpg"
import { Bio, Contact, MySkills } from "../components"
import Header from "../components/aboutMe/Header.jsx";
import {useEffect} from "react";
const AboutMe = () => {

    // scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className={classes.container}>
            <Header />
            <Bio />
            <MySkills />
            <Contact />
        </div>
    );
};

export default AboutMe;
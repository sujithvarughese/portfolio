import classes from "./styles/AboutMe.module.css";
import profileIMG from "../assets/images/profile.jpg"
const AboutMe = () => {
    return (
        <div className={classes.container}>
            <p>
                Hello! I'm Sujith. I graduated in December 2022 with a Bachelor's in Computer Science.

                Since graduating, I have been tuning my full-stack development skills through bootcamps and personal projects.

                Check out my resume and portfolio to view some projects!
            </p>

        </div>
    );
};

export default AboutMe;
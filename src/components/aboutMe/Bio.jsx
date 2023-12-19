import classes from "./styles/Bio.module.css"
import {Button} from "../../ui/index.js";
import { FaProjectDiagram } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";
import {useNavigate} from "react-router-dom";
import { motion } from "framer-motion"
import graphicSpotlightImage from "../../assets/images/graphic-spotlight.png"
import graphicSideImage from "../../assets/images/graphic-sides.png"

const Bio = () => {

    const navigate = useNavigate()

    return (
        <div className={classes.container}>

            <div className={classes.bio}>
                <motion.h3 className={classes.heading}
                    whileHover={{ scale: 1.05 }}
                    transition={{type: "spring"}}
                >
                    About Me
                </motion.h3>

                <div className={classes.text}>
                    <p>Hello! My name is Sujith. I am a full-stack software developer based in Miami, FL. I recently graduated with a Bachelor's of Computer Science from Florida International University.</p>

                    <p>As a developer, I have been enthralled by being able to identify a problem and having the ability to directly plan and create a solution. My goal in designing software is to solve problems by creating intuitive software that is both adaptable and scalable.</p>

                    <p>I am most experienced in JavaScript, HTML, CSS, React, Node with Express, and Mongo Database (MERN Stack).

                        I also have experience Java, C++, Python, and SQL. However, I am quite the tech junkie and I love learning new technologies.</p>

                    <p>Please check out my resume and portfolio to view some applications I have created.</p>
                </div>


            </div>

            <div className={classes.buttons}>

                <Button onClick={()=>navigate("/portfolio")}><FaProjectDiagram />View Portfolio</Button>
                <Button onClick={()=>navigate("/resume")}><GrDocumentUser />View Resume</Button>
            </div>
        </div>
    );
};

export default Bio;
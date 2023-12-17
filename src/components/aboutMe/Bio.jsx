import classes from "./styles/Bio.module.css"
import {Button} from "../../ui/index.js";
import { FaProjectDiagram } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";
import {useNavigate} from "react-router-dom";
import { motion } from "framer-motion"

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
                    <p>Hello! My name is Sujith. I am a full-stack web developer based in Miami, FL. I recently graduated with a Bachelors in Computer Science.</p>

                    <p>My goal in designing software is to solve problems by creating intuitive software that is both adaptable and scalable.</p>

                    <p>I am most experienced in HTML, CSS, and developing in Javascript using React, Node with Express, and Mongo Database (MERN Stack).

                        I also have experience Java, C++, and Python and SQL Databases.</p>

                    <p>Please check out my resume and portfolio to view my most recent applications.</p>
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
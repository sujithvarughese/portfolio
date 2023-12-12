import classes from "./styles/Bio.module.css"
import {Button} from "../../ui/index.js";
import { FaProjectDiagram } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";
import {useNavigate} from "react-router-dom";

const Bio = () => {

    const navigate = useNavigate()

    return (
        <div className={classes.container}>
            <div className={classes.name}>
                Sujith Varughese
            </div>
            <div className={classes.title}>
                Software Developer
            </div>
            <div className={classes.bio}>
                <p>
                    Hello! I'm Sujith. I graduated in December 2022 with a Bachelor's in Computer Science.
                    Since graduating, I have been tuning my full-stack development skills through bootcamps and personal projects.
                    Check out my resume and portfolio to view some projects!
                </p>
            </div>

            <div className={classes.buttons}>
                <Button onClick={()=>navigate("/portfolio")}><FaProjectDiagram />View Portfolio</Button>
                <Button onClick={()=>navigate("/resume")}><GrDocumentUser />View Resume</Button>
            </div>
        </div>
    );
};

export default Bio;
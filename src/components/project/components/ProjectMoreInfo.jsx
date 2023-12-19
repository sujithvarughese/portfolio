import classes from "../styles/Project.module.css";
import {FaAnglesDown, FaAnglesUp} from "react-icons/fa6";
import ButtonIcon from "../../../ui/ButtonIcon.jsx";
import {ButtonPlain} from "../../../ui/index.js";

const ProjectMoreInfo = ({ showPreviews, setShowPreviews }) => {
    return (
        <div className={classes.arrow}>
            <ButtonIcon className={classes.togglePreview} onClick={()=>setShowPreviews(!showPreviews)}
                        animate={{ rotate: showPreviews ? 180 : 0 }}
                        transition={{ duration: 0.01 }}
            >
                <FaAnglesDown style={{fontSize: "24px"}}/>
            </ButtonIcon>
            <ButtonPlain
                onClick={()=>setShowPreviews(!showPreviews)}
                fontSize="18px"

            >
                {showPreviews ? "Hide" : "More"}
            </ButtonPlain>
        </div>



    );
};

export default ProjectMoreInfo;
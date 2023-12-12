import classes from "../styles/Project.module.css";
import {FaAnglesDown, FaAnglesUp} from "react-icons/fa6";
import ButtonIcon from "../../../ui/ButtonIcon.jsx";

const ProjectMoreInfo = ({ showPreviews, setShowPreviews }) => {
    return (
        <div>
            {showPreviews ?
                <ButtonIcon className={classes.togglePreview} onClick={()=>setShowPreviews(false)}>
                    <FaAnglesUp style={{fontSize: "32px"}}/>Hide
                </ButtonIcon>
                :
                <ButtonIcon className={classes.togglePreview} onClick={()=>setShowPreviews(true)}>
                    <FaAnglesDown style={{fontSize: "32px"}}/>More
                </ButtonIcon>
            }
        </div>
    );
};

export default ProjectMoreInfo;
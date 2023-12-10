import classes from "./styles/Project.module.css";
import {FaAnglesDown, FaAnglesUp} from "react-icons/fa6";

const ProjectMoreInfo = ({ showPreviews, setShowPreviews }) => {
    return (
        <div>
            {
                showPreviews ?
                    <div className={classes.previewsToggle} onClick={()=>setShowPreviews(false)}>
                        <FaAnglesUp /><div>Hide</div>
                    </div>
                    :
                    <div className={classes.previewsToggle} onClick={()=>setShowPreviews(true)}>
                        <FaAnglesDown /><div>More Info</div>
                    </div>
            }
        </div>
    );
};

export default ProjectMoreInfo;
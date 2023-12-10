import classes from "./styles/ProjectPreview.module.css";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6";

import ProjectPreview from "./ProjectPreview.jsx";

const PreviewContainer = ({ previews }) => {
    return (
        <div className={classes.container}>
            <div className={classes.scroll}>
                <FaAngleLeft />
            </div>

            <div className={classes.content}>
                {previews?.map((preview, index) => <ProjectPreview key={index} preview={preview} />)}
            </div>

            <div className={classes.scroll}>
                <FaAngleRight />
            </div>

        </div>
    );
};

export default PreviewContainer;
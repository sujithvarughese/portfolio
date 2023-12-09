import classes from "./styles/PreviewContainer.module.css";
import {CgScrollH} from "react-icons/cg";
import ProjectPreview from "./ProjectPreview.jsx";

const PreviewContainer = ({ previews }) => {
    return (
        <div className={classes.container}>
            <div className={classes.scroll}>
                <CgScrollH />
            </div>
            <div className={classes.content}>
                {
                    previews?.map((preview, index) => <ProjectPreview key={index} preview={preview} />)
                }
            </div>

        </div>
    );
};

export default PreviewContainer;
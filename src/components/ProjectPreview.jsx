import classes from "./styles/ProjectPreview.module.css";
import {CgScrollH} from "react-icons/cg"

const ProjectPreview = ({ previews }) => {

    return (
        <div className={classes.container}>
            <div className={classes.scroll}>
                <CgScrollH />
            </div>
            <div className={classes.content}>
                {
                    previews.length > 0 &&
                    previews.map((preview, index) => {
                        return (
                            <div key={index} className={classes.section}>
                                <div className={classes.imageContainer}>
                                    <img className={classes.image} src={preview.image} alt={preview.image}/>
                                </div>
                                <div className={classes.captions}>
                                    {
                                        preview.captions.map((caption, index) =>
                                        <div key={index} className={classes.caption}>{caption}</div>)
                                    }
                                </div>


                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default ProjectPreview;
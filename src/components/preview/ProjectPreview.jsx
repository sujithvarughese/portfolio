import classes from "./styles/ProjectPreview.module.css";

const ProjectPreview = ({ preview }) => {

    return (
        <div className={classes.preview}>
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
    );
};

export default ProjectPreview;
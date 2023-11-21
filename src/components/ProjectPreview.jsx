import classes from "./styles/ProjectPreview.module.css";

const ProjectPreview = (previews) => {

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                {
                    previews.length > 0 &&
                    previews.map((preview, index) => {
                        return (
                            <div key={index} className={classes.section}>
                                <img className={classes.image} src={preview.image} alt={preview.image}/>
                                <div className={classes.caption}>{preview.caption}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProjectPreview;
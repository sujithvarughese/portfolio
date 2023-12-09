import classes from "./styles/Project.module.css";

const ProjectCaption = ({ caption }) => {
    return (
        <div className={classes.caption}>
            {caption}
        </div>
    );
};

export default ProjectCaption;
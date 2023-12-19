import classes from "../styles/Project.module.css";

const ProjectHeading = ({ heading }) => {
    return (
        <div className={classes.heading}>
            {heading}
        </div>
    );
};

export default ProjectHeading;
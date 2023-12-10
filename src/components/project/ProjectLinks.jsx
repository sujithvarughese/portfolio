import classes from "./styles/Project.module.css";

const ProjectLinks = ({ link, github }) => {
    return (
        <div className={classes.links}>
            <div className={classes.preview}>
                <a href={link} target="_blank" rel="noreferrer">Preview App</a>
            </div>
            <div className={classes.github}>
                <a href={github} target="_blank" rel="noreferrer">GitHub Link</a>
            </div>
        </div>
    );
};

export default ProjectLinks;
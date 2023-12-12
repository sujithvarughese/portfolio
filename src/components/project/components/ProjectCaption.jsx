import classes from "../styles/Project.module.css";

const ProjectCaption = ({ captions }) => {
    return (
        <ul className={classes.captions}>
            {captions.map((caption, index) => <li key={index}>{caption}</li>)}
        </ul>
    );
};

export default ProjectCaption;
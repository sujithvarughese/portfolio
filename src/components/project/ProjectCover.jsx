import classes from "./styles/Project.module.css";

const ProjectCover = ({ coverImage, title }) => {
    return <img src={coverImage} alt={title} className={classes.coverImage} />
};
export default ProjectCover;
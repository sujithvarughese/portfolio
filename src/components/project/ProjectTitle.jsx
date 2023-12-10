import React from 'react';
import classes from "./styles/Project.module.css";

const ProjectTitle = ({ title }) => {
    return (
        <div className={classes.title}>
            {title}
        </div>
    );
};

export default ProjectTitle;
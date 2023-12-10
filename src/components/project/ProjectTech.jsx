import classes from "./styles/Project.module.css";
import {JavascriptIcon, MongoIcon, NodeIcon, ReactIcon} from "../../icons/Icons.jsx";

const icons = {
    "javascript": <JavascriptIcon width="24px"  />,
    "node": <NodeIcon width="24px"/>,
    "react": <ReactIcon width="24px"/>,
    "mongodb": <MongoIcon width="60px"/>
}
const ProjectTech = ({ tech }) => {

    return (
        <div className={classes.tech}>
            {tech.map((techElement, index) => <div key={index}>{icons[techElement]}</div>)}

        </div>
    );
};

export default ProjectTech;
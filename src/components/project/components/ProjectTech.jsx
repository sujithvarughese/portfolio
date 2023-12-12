import classes from "../styles/Project.module.css";
import {JavascriptIcon, MongoIcon, NodeIcon, ReactIcon} from "../../../icons/Icons.jsx";

const icons = {
    "javascript": <JavascriptIcon width="28px"  />,
    "node": <NodeIcon width="36px"/>,
    "react": <ReactIcon width="28px"/>,
    "mongodb": <MongoIcon width="72px"/>
}
const ProjectTech = ({ tech }) => {

    return (
        <div className={classes.tech}>
            {tech.map((techElement, index) => <div key={index}>{icons[techElement]}</div>)}

        </div>
    );
};

export default ProjectTech;
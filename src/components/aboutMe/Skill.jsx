import classes from "./styles/Skill.module.css";
import {ButtonIcon} from "../../ui/index.js";
import {JavascriptIcon, ReactIcon, NodeIcon, GitIcon, MongoIcon, HtmlIcon, CssIcon} from "../../icons/Icons.jsx";

const icons = [
    {
        name: "javascript",
        icon: <JavascriptIcon/>
    },
    {
        name: "node",
        icon: <NodeIcon/>
    },
    {
        name: "react",
        icon: <ReactIcon/>
    },
    {
        name: "mongoDB",
        icon: <MongoIcon />
    },
    {
        name: "HTML",
        icon: <HtmlIcon />
    },
    {
        name: "CSS",
        icon: <CssIcon />
    },
    {
        name: "git",
        icon: <GitIcon />
    }

]

const Skill = ({ name, description }) => {
    return (
        <div>
            <div className={classes.icon}>
                {icons.find(icon => icon.name === name).icon}
            </div>
            <div className={classes.name}>
                {name}
            </div>
            <div className={classes.description}>
                {description}
            </div>
        </div>
    );
};

export default Skill;
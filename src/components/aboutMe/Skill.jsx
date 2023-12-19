import classes from "./styles/Skills.module.css";
import {ButtonIcon} from "../../ui/index.js";
import {JavascriptIcon, HtmlCssIcon, ReactIcon_, NodeIcon, GitIcon, MongoIcon } from "../../ui/Icon.jsx";

const icons = [
    {
        name: "javascript",
        icon: <JavascriptIcon />
    },
    {
        name: "node",
        icon: <NodeIcon/>
    },
    {
        name: "react",
        icon: <ReactIcon_ />
    },
    {
        name: "mongoDB",
        icon: <MongoIcon />
    },
    {
        name: "htmlCss",
        icon: <HtmlCssIcon />
    },
    {
        name: "git",
        icon: <GitIcon />
    }
]

const Skill = ({ name, description }) => {

    return (
        <div className={classes.skill}>
            <div className={classes.content}>
                {icons.find(icon => icon.name === name).icon}
            </div>

            <ul className={classes.description}>
                {description.map((element, index) => <li key={index}>{element}</li>)}
            </ul>
        </div>
    );
};

export default Skill;
import classes from "./styles/Skills.module.css";
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

const Skill = ({ name, description, showName}) => {

    return (
        <div className={classes.skill}>

            {   // if skill item is an array of more than 1 skill
                typeof name === 'object' ?
            <div className={classes.content}>
                <div className={classes.icons}>
                    {name.map(element =>
                        <div key={element}>
                            {icons.find(icon => icon.name === element).icon}
                        </div>)
                    }
                </div>
                <div className={classes.name}>
                    {showName &&
                        // & sign after all elements except the last one
                        name.map(element => {
                        if (name[name.length - 1] !== element) {
                            return `${element} & `
                        } else {
                            return element
                        }})

                    }
                </div>

            </div>
            :
            <div className={classes.content}>
                <div className={classes.icon}>
                    {icons.find(icon => icon.name === name).icon}
                </div>
                <div className={classes.name}>
                    {showName && <>{name}</>}
                </div>
            </div>
            }
            <ul className={classes.description}>
                {description.map((element, index) => <li key={index}>{element}</li>)}
            </ul>
        </div>
    );
};

export default Skill;
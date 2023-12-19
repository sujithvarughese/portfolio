import classes from "./styles/Skills.module.css";
import Skill from "./Skill.jsx";

const MySkills = () => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                Skills
            </div>
            <div className={classes.skills}>
                {skills.map((skill, index) => <Skill key={index} name={skill.name} description={skill.description}/>)}
            </div>
        </div>
    );
};

const skills = [
    {
        name: "javascript",
        description: ["Data Structures", "Async/await", "Callback functions", "Event Loops"],
    },
    {
        name: "node",
        description: ["Express", "Interacting with APIs", "HTTP signed cookies", "JWT"],
    },
    {
        name: "react",
        description: ["State Management", "Router", "Context/Reducer", "Dynamic DOM manipulation"],
    },
    {
        name: "mongoDB",
        description: ["Mongoose models", "CRUD operations", "Pagination"],
    },
    {
        name: "htmlCss",
        description: ["Web/Mobile Design", "Dynamic Layouts", "Grid/Flexbox"],
    },
    {
        name: "git",
        description: ["All basic git functionality"],
    }


]
export default MySkills;
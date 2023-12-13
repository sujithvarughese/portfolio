import classes from "./styles/Skills.module.css";
import Skill from "./Skill.jsx";

const MySkills = () => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                Skills
            </div>
            <div className={classes.skills}>
                {skills.map((skill, index) => <Skill key={index} name={skill.name} description={skill.description} showName={skill.showName}/>)}
            </div>
        </div>
    );
};

const skills = [
    {
        name: "javascript",
        description: ["Data Structures", "Async/await", "Callback functions", "Event Loops"],
        showName: false
    },
    {
        name: "node",
        description: ["Express", "Interacting with APIs", "HTTP signed cookies", "JWT"],
        showName: false
    },
    {
        name: "react",
        description: ["State Management", "Router", "Context", "Reducer"],
        showName: false
    },
    {
        name: "mongoDB",
        description: ["Mongoose models", "CRUD operations", "Pagination"],
        showName: false
    },
    {
        name: "htmlCss",
        description: ["Web/Mobile Design", "Dynamic Layouts", "Grid/Flexbox"],
        showName: false
    },
    {
        name: "git",
        description: ["All basic git functionality"],
        showName: false
    }


]
export default MySkills;
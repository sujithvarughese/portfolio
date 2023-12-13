import classes from "./styles/Skills.module.css";
import Skill from "./Skill.jsx";

const MySkills = () => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                My Skills
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
        description: ["Data Structures", "async/await", "Callback functions", "Event Loops"],
        showName: true
    },
    {
        name: "node",
        description: ["Express", "Interacting with APIs", "HTTP signed cookies", "JWT"],
        showName: false
    },
    {
        name: "react",
        description: ["State Management", "Router", "Context", "Reducer"],
        showName: true
    },
    {
        name: "mongoDB",
        description: ["Mongoose models", "CRUD operations", "Pagination"],
        showName: false
    },
    {
        name: ["HTML", "CSS"],
        description: ["Web/Mobile Design", "Dynamic Layouts", "Grid/Flexbox"],
        showName: true
    },
    {
        name: "git",
        description: ["All basic git functionality"],
        showName: false
    }


]
export default MySkills;
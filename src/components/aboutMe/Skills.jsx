import classes from "./styles/Skills.module.css";
import Skill from "./Skill.jsx";

const Skills = () => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                My Skills
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
        description: "javascript professional"
    },
    {
        name: "node",
        description: "node professional"
    },
    {
        name: "react",
        description: "react professional"
    },
    {
        name: "mongoDB",
        description: "Amazing at mongos"
    },
    {
        name: "HTML",
        description: "Amazing at htmls"
    },
    {
        name: "CSS",
        description: "Amazing at all cssess"
    },
    {
        name: "git",
        description: "git champ is here"
    }


]
export default Skills;
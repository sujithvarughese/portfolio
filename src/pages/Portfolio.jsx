import classes from "./styles/Portfolio.module.css";
import {projects} from "../data/projects.js";
import {Project} from "../components"
import {projectsText} from "../data/projectsText.js";

const Portfolio = () => {
	return (
		<div className={classes.container}>
			<div className={classes.title}>Portfolio</div>

			<div className={classes.text}>
				{projectsText.map((text, index) => <p key={index}>{text}</p>)}
			</div>

			<div className={classes.projects}>
				{
					projects.map((project, index) => {
						return <Project key={index} {...project} />
					})
				}
			</div>

		</div>
	);
};

export default Portfolio;
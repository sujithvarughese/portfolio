import classes from "./styles/Projects.module.css";
import {projects} from "../data/projects.js";
import {Project} from "../components"
import {projectsText} from "../data/projectsText.js";

const Projects = () => {
	return (
		<div className={classes.container}>
			<div className={classes.title}>Projects</div>

			<div className={classes.text}>
				<div className={classes.text1}>
					{projectsText.map((text, index) => <p key={index}>{text}</p>)}
				</div>
				<div className={classes.text2}>
					Note: Since I am using Netlify and hosting the back-end elsewhere, cross-site tracking will need to be allowed if using Safari.
				</div>
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

export default Projects;
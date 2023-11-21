import classes from "./styles/Projects.module.css";
import { projects } from "../utils/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

const Projects = () => {
	return (
		<div className={classes.page}>
			<div className={classes.title}>Projects</div>

			<div>
				<div className={classes.text}>
					Welcome to my projects page! Projects are under construction but have working versions that can be previewed. There are also GitHub links with source code that can be viewed!
				</div>
				<div className={classes.text}>
					Note: I am using Netlify for front end, so browsers may not retrieve data from back end if cookies or cross-site tracking are disabled.
				</div>
			</div>

			<div className={classes.projects}>
				{
					projects.map((project, index) => {
						return <ProjectCard key={index} {...project} />
					})
				}
			</div>

		</div>
	);
};

export default Projects;
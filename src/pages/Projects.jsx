import classes from "./styles/Projects.module.css";
import {projects} from "../utils/projects.js";
import {Project} from "../components/project"

const Projects = () => {
	return (
		<div className={classes.container}>
			<div className={classes.title}>Projects</div>

			<div>
				<div className={classes.text}>
					Being a new graduate, the difficulties of landing the first job can be challenging with no work experience.
					I created this portfolio with a few personal projects I have created over the past few years while in school and since graduating.
					I hope potential employers will be able to get a sense of my abilities through viewing my portfolio.
					Realty Solutions and On the Books are the most recent apps, with a guest mode so the entire site can be previewed without login information.

				</div>
				<div className={classes.text}>
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
import classes from "./styles/Portfolio.module.css";
import {projects} from "../data/projects.js";
import {Project} from "../components"
import {projectsText} from "../data/projectsText.js";

const Portfolio = () => {
	return (
		<div className={classes.container}>
			<div className={classes.title}>Portfolio</div>



			<div className={classes.text}>
				<p>Welcome to my portfolio.</p>

				<p>Applications with required logins have a Preview Mode where the entire application can be accessed.</p>

				<p>Please note since I am using netlify to host the apps, cross-site tracking will need to be disabled (if using Safari) in order to retrieve data from the back-end.</p>
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
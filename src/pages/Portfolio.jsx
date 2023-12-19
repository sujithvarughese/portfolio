import classes from "./styles/Portfolio.module.css";
import {projects} from "../data/projects.js";
import {Project} from "../components"
import {projectsText} from "../data/projectsText.js";
import {useEffect} from "react";

const Portfolio = () => {
	// scroll to top on load
	useEffect(() => {
		window.scrollTo(0, 0)
	}, []);

	return (
		<div className={classes.container}>
			<div className={classes.title}>Portfolio</div>



			<div className={classes.text}>
				<p>Here are a few recent applications I have been working on since graduation. The projects were designed and created 100% by me in order to give an accurate representation of my ability and vision.</p>

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
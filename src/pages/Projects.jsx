import { projects } from "../assets/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

const Projects = () => {
	return (
		<div className="page">
			<div className="title">Projects</div>
			<div className="text-center mx-52 my-8">
				Welcome to my projects page! These are a few projects I have been working on. They are being updated regularly with fixes and new features. Feel free to take a tour!
				(Note: Some browsers are not retrieving data from server if cookies or cross-site tracking are disabled   )
			</div>
			<div className="text-center mx-52 my-8">
				Update: Some browsers are causing CORS issues. Working on update...
			</div>
			<div className="flex flex-wrap justify-around bg-gray-100 rounded-lg ">
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
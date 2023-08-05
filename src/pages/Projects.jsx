import { projects } from "../assets/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

const Projects = () => {
	return (
		<div className="page">
			<div className="title">Projects</div>
			<div className="text-center mx-52 my-8">
				Projects are working, but are being updated regularly with fixes and new features. Feel free to take a tour of the apps and check them out so far!
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
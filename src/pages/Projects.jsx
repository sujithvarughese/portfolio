import { projects } from "../assets/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

const Projects = () => {
	return (
		<div className="page">
			<div className="title">Projects</div>
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
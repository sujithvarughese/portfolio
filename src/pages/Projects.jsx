import { projects } from "../assets/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

const Projects = () => {
	return (
		<div className="my-12">
			<div className="text-4xl text-center my-12">Projects Page</div>
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
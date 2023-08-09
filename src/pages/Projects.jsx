import { projects } from "../assets/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

const Projects = () => {
	return (
		<div className="page">
			<div className="title">Projects</div>
			<div className="text-center md:mx-52 my-8">
				Welcome to my projects page! These are a few projects I have been working on. I am still developing them, so they are being updated regularly with fixes and new features. I set up links to access the apps without creating an account, so feel free to take a tour! There are also GitHub links with source code that can be viewed!

			</div>
			<div className="text-center md:mx-52 my-8">
				Note: Projects are optimized for desktop. Some browsers are not retrieving data from server if cookies or cross-site tracking are disabled. Also, I am using free servers on netlify so might be a little slow to load at first.
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
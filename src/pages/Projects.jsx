import { projects } from "../assets/projects.js";
import ProjectCard from "../UI/ProjectCard.jsx";
import { PropertyAssistant } from "./index.js";
import PropertyAssistantCard from "../components/PropertyAssistantCard.jsx";
import ScreenshotDisplays from "../UI/ScreenshotDisplays.jsx";
import image from "../assets/images/propertyasssitant/messages.png"

const Projects = () => {
	return (
		<div className="page bg-black">
			<div className="title text-white">Projects</div>
			<div className="text-center md:mx-52 my-8 text-white">
				Welcome to my projects page! Projects are under construction but have working versions that can be previewed. There are also GitHub links with source code that can be viewed!
			</div>
			<div className="text-center md:mx-52 my-8 text-white">
				Note: I am using Netlify for front end, so browsers may not retrieve data from back end if cookies or cross-site tracking are disabled.
			</div>
			<div className="projects flex flex-wrap justify-around bg-gray-100 rounded-lg ">
			<ScreenshotDisplays image={image}/>
				{/*<PropertyAssistantCard />*/}

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
import { useState } from "react";
import iconX from "../assets/images/x_icon.svg"

const ProjectCard = ({ title, cover, caption, details, link }) => {

	const [showDetails, setShowDetails] = useState(false)

	return (
		<div className="m-6 bg-white rounded-lg overflow-hidden relative shadow-lg md:w-1/3 sm:w-1/2">
			{
				showDetails ?
					<div className="my-4">

						<img
							src={iconX}
							className="absolute right-3 w-6 right-0 hover:bg-gray-200 hover:cursor-pointer"
							alt="X"
							onClick={() => setShowDetails(false)}
						/>
						<img
							className="h-28 mx-auto rounded-lg shadow-md"
							src={cover}
							alt={title}
						/>
						<div className="text-lg text-center my-4">
							{title}
						</div>
						<div className="mx-4 my-2 h-52">
							{details}
						</div>
						<div className="text-center text-lg text-blue-600">
							<a href={link}>Go to App!</a>
						</div>
					</div>
					:
					<div
						className="h-full mx-auto hover:bg-gray-200 hover:cursor-pointer flex px-4 flex-col py-12"
						onClick={() => setShowDetails(true)}
					>
						<img
							className="rounded-lg h-44 shadow-md"
							src={cover} alt="bookshelf"
						/>
						<div
							className="text-2xl text-center py-14">
							{title}
						</div>
						<div className="text-sm text-center px-10">
							{caption}
						</div>
					</div>
			}
		</div>
	);
};

export default ProjectCard;
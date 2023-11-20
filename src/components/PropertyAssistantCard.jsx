import property from "../assets/images/property-cover.jpeg"
import { useNavigate } from "react-router-dom";

const card = {
	title: "Realty Solutions",
	cover: property,
	caption: "Real solutions to manage all your properties with one simple App.",
	details: "Whether you're managing a single unit or if you're a real estate mogul, the responsibilities of day-to-day operations can be overwhelming. Property Management Assistant simplifies your job by organizing your tasks and keeping track of all your units, all in one place.",
	link: 'https://realty-solutions.netlify.app',
	github: 'https://github.com/sujithvarughese/realty-solutions'
}

const PropertyAssistantCard = () => {

	const navigate = useNavigate()
	return (
		<div className="m-6 bg-white rounded-lg overflow-hidden relative shadow-lg md:w-1/3 sm:w-1/2">
			<div
				className="h-full mx-auto hover:bg-gray-200 hover:cursor-pointer flex px-4 flex-col py-12"
				onClick={()=>navigate('/property-app')}
			>
				<img
					className="rounded-lg h-44 shadow-md"
					src={card.cover} alt="cover"
				/>
				<div
					className="text-2xl text-center py-14">
					{card.title}
				</div>
				<div className="text-sm text-center px-10">
					{card.caption}
				</div>
			</div>

		</div>
	);
};

export default PropertyAssistantCard;
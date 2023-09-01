import fmrIMG from "../assets/images/propertyasssitant/fmr.png"
import messagesIMG from "../assets/images/propertyasssitant/messages.png"
import serviceIMG from "../assets/images/propertyasssitant/service.png"
import unitsIMG from "../assets/images/propertyasssitant/units.png"
import searchIMG from "../assets/images/propertyasssitant/search.png"
import property from "../assets/images/property-cover.jpeg"

const link = 'https://prop-management-assistant.netlify.app'
const github = 'https://github.com/sujithvarughese/property-management-app'

const PropertyAssistant = () => {
	return (
		<div className="flex flex-col bg-gradient-to-r from-cyan-500 to-blue-500 gap-8">


			<div className="container py-4">

				<div className="card block sm:flex h-screen sm:h-fit">
					<div className="m-auto flex flex-col gap-6 h-2/6">
						<p className="m-auto text-center text-4xl">All your properties.</p>
						<p className="m-auto text-center text-4xl">All in one place.</p>
					</div>
					<img className="preview w-5/6 sm:w-2/5 mx-auto" src={unitsIMG} alt="units"/>
				</div>


				<div className="card block sm:flex p-6 h-screen sm:h-fit">
					<img className="preview sm:w-2/5 mx-auto" src={messagesIMG} alt="messages"/>
					<div className="m-auto p-10 flex flex-col gap-6 h-2/6">
						<p className="m-auto text-center text-white text-4xl">Exchange messages.</p>
						<p className="m-auto text-center text-white text-4xl">Flag important conversations.</p>
					</div>
				</div>


				<div className="card block sm:flex p-6 h-screen sm:h-fit">
					<div className="m-auto flex flex-col gap-6 h-1/6 text-center">
						<p className="text-4xl">Get market rents anywhere in the US.</p>
					</div>
					<img className="preview sm:w-1/3 mx-auto" src={fmrIMG} alt="units"/>
				</div>

				<div className="card block sm:flex p-6 h-screen sm:h-fit ">
					<img className="preview sm:w-2/5  m-auto" src={searchIMG} alt="messages"/>
					<div className="m-auto p-10 flex flex-col gap-6">
						<p className="m-auto text-center text-white text-4xl ">Search to easily find and organize properties.</p>
					</div>
				</div>

				<div className="card block sm:flex p-6 h-screen sm:h-fit">
					<div className="m-auto flex flex-col gap-6 p-10 text-center">
						<p className="text-4xl">Tenants can report issues anytime.</p>
					</div>
					<img className="preview sm:w-1/4 m-auto" src={serviceIMG} alt="units"/>
				</div>


				<div className="card flex flex-col p-12 gap-8 h-screen sm:h-fit">

					<div className="mx-auto text-white text-5xl p-2">Property Management Assistant</div>

					<div className="block sm:flex justify-around">
						<img className="preview sm:w-3/4" src={property} alt="property"/>

						<div>
							<div className="text-center underline hover:cursor-pointer text-4xl text-white my-12">
								<a href={link} target="_blank" rel="noreferrer">Preview App!</a>
							</div>
							<div className="text-center underline hover:cursor-pointer text-4xl text-white">
								<a href={github} target="_blank" rel="noreferrer">GitHub Link</a>
							</div>
						</div>

					</div>
				</div>
			</div>


		</div>
	);
};

export default PropertyAssistant;
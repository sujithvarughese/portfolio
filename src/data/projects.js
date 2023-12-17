import bookshelf from "../assets/images/bookshelf-cover.jpeg"
import sketch from "../assets/images/sketch-cover.jpeg"
import blackjack from "../assets/images/blackjack-cover.jpeg"
import property from "../assets/images/property-cover.jpeg"
import rsDesktop from "../assets/images/previews/rs-desktop.png"
import rsMobile from "../assets/images/previews/rs-mobile.png"
import otbDesktop from "../assets/images/previews/otb-desktop.png"
import otbMobile from "../assets/images/previews/otb-mobile.png"
import bjDesktop from "../assets/images/previews/bj-desktop.png"
import bjMobile from "../assets/images/previews/bj-mobile.png"
import sketchDesktop from "../assets/images/previews/sketch-desktop.png"
import sketchMobile from "../assets/images/previews/sketch-mobile.png"

import fmrIMG from "../assets/images/propertyasssitant/fmr.png"
import messagesIMG from "../assets/images/propertyasssitant/messages.png"
import serviceIMG from "../assets/images/propertyasssitant/service.png"
import unitsIMG from "../assets/images/propertyasssitant/units.png"
import searchIMG from "../assets/images/propertyasssitant/search.png"

const realtySolutionsPreviews = [
	{
		captions: ["All Your Properties.", "All in one Place"],
		image: unitsIMG
	},
	{
		captions: ["Exchange messages.", "Flag important conversations."],
		image: messagesIMG
	},
	{
		captions: ["Get market rents from anywhere in the US"],
		image: fmrIMG
	},
	{
		captions: ["Search to easily find and organize properties"],
		image: searchIMG
	},
	{
		captions: ["Tenants can report issues anytime"],
		image: serviceIMG
	}
]
export const projects = [
	{
		title: "Realty Solutions",
		coverImage: property,
		desktopImage: rsDesktop,
		mobileImage: rsMobile,
		heading: "A property management app for small business owners to organize finances and communicate with tenants.",
		captions: [
			"Calculate mortgage payments, compare payments with different interest rates, view live payoff quotes, view both monthly and yearly profits and losses",
			"Separate user roles for system admin, account admin (property manager) and users (tenants)",
			"Tokens attached to signed HTTP cookies for verification",
			"Messaging functionality for landlord-tenant communication",
			"HUD.gov API to retrieve rental rates for any location in the US.",
		],
		link: 'https://realty-solutions.netlify.app',
		github: 'https://github.com/sujithvarughese/realty-solutions',
		previews: realtySolutionsPreviews,
		tech: ["javascript", "node", "react", "mongodb"],
		type: "main"
	},
	{
		title: "On the Books.",
		coverImage: bookshelf,
		desktopImage: otbDesktop,
		mobileImage: otbMobile,
		heading: "A personal library designed to take notes, rate, and keep track of their status of each book.",
		captions: [
			"OpenLibrary API where users can search for books, get recommendations, and view book previews",
			"Save books to library and create an organized notebook for easy to use note-taking",
			"React context/reducer/router"
		],
		link: 'https://on-the-books.netlify.app',
		github: 'https://github.com/sujithvarughese/on-the-books',
		previews: [],
		tech: ["javascript", "node", "react", "mongodb"],
		type: "main"
	},
	{
		title: "Beat Blackjack",
		coverImage: blackjack,
		desktopImage: bjDesktop,
		mobileImage: bjMobile,
		heading: "Play blackjack with live assistance!",
		captions: [
			"Get the correct play by the book in any situation as you play",
			"Customize your bankroll, change number of decks used"
		],
		link: 'https://blackjack-suj.netlify.app',
		github: 'https://github.com/sujithvarughese/blackjack-js/tree/master/react',
		previews: [],
		tech: ["javascript", "react"],
		type: ""
	},
/*	{
		title: "Sketch",
		coverImage: sketch,
		desktopImage: sketchDesktop,
		mobileImage: sketchMobile,
		heading: "A simple etch-a-sketch app where users can create artistic expressions. In full color and with adjustable grid sizes.",
		captions:[

		],
		link: 'https://sketch-suj.netlify.app',
		github: 'https://github.com/sujithvarughese/odin-etch-a-sketch/tree/main/react',
		previews: [],
		tech: ["javascript", "react"],
		type: ""
	},*/

]


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
		captions: [
			"A property management app where small business owners can organize finances amd communicate with tenants.",
			"Owners can manage income/expenses, calculate mortgage payments with different interest rates, view live payoff quotes, and more.",
			"Built in messaging functionality for landlord-tenant communication",
			"Uses HUD.gov API to retrieve rental rates for any location in the US.",
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
		captions: [
			"A personal library designed to take notes, rate, and keep track of their status of each book.",
			"App uses the OpenLibrary API where users can search by genre, get current editor's picks, and view book previews"
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
		captions: [
			"Play blackjack with live assistance that tells you the correct book play in any situation!",
			"Customize your bankroll, number of decks, and other options to find your edge!"
		],
		link: 'https://blackjack-suj.netlify.app',
		github: 'https://github.com/sujithvarughese/blackjack-js/tree/master/react',
		previews: [],
		tech: ["javascript", "react"],
		type: ""
	},
	{
		title: "Sketch",
		coverImage: sketch,
		desktopImage: sketchDesktop,
		mobileImage: sketchMobile,
		captions:[
			"A simple etch-a-sketch app where users can create artistic expressions. In full color and with adjustable grid sizes."
		],
		link: 'https://sketch-suj.netlify.app',
		github: 'https://github.com/sujithvarughese/odin-etch-a-sketch/tree/main/react',
		previews: [],
		tech: ["javascript", "react"],
		type: ""
	},

]


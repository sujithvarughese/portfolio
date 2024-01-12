import onTheBooksCoverImg from "../assets/images/on-the-books/on-the-books-cover.jpeg"
import blackjackCoverImg from "../assets/images/blackjack/blackjack-cover.jpeg"
import realtyCoverImg from "../assets/images/realty-solutions/realty-solutions-cover.jpeg"
import rsDesktop from "../assets/images/previews/rs-desktop.png"
import rsMobile from "../assets/images/previews/rs-mobile.png"
import otbDesktop from "../assets/images/previews/otb-desktop.png"
import otbMobile from "../assets/images/previews/otb-mobile.png"
import bjDesktop from "../assets/images/previews/bj-desktop.png"
import bjMobile from "../assets/images/previews/bj-mobile.png"

import fmrIMG from "../assets/images/realty-solutions/fmr.png"
import messagesIMG from "../assets/images/realty-solutions/messages.png"
import serviceIMG from "../assets/images/realty-solutions/service.png"
import unitsIMG from "../assets/images/realty-solutions/units.png"
import searchIMG from "../assets/images/realty-solutions/search.png"

import bookDiscoverIMG from "../assets/images/on-the-books/discover.png"
import notebookIMG from "../assets/images/on-the-books/notebook.png"
import bookPreviewIMG from "../assets/images/on-the-books/preview.png"
import bookSearchIMG from "../assets/images/on-the-books/search.png"

import simplerFitnessCover from "../assets/images/simpler-fitness/simper-fitness-cover.jpeg"

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
		captions: ["Search, create, and send rent receipts"],
		image: serviceIMG
	}
]

const onTheBooksPreviews = [
	{
		captions: ["Search millions of on-the-books using openLibrary."],
		image: bookDiscoverIMG
	},
	{
		captions: ["Notebooks for each book make note-taking a breeze."],
		image: notebookIMG
	},
	{
		captions: ["Search for any book within your library."],
		image: bookSearchIMG
	},
	{
		captions: ["Get book details and previews."],
		image: bookPreviewIMG
	},
]
export const projects = [
	{
		title: "Simpler Fitness",
		coverImage: simplerFitnessCover,
		desktopImage: rsDesktop,
		mobileImage: rsMobile,
		heading: "Making getting in shape easier than ever with access to thousands of workouts with detailed instructions and animated images",
		captions: [
			"Browse by target muscles, available equipment, or experience level",
			"Animated images showing proper technique",
			"Create an account to save favorite workouts for quick re-access",
			"Search by name through the database of more than a thousand exercises"
		],
		link: 'https://simpler-fitness.netlify.app',
		github: 'https://github.com/sujithvarughese/simple-fitness',
		previews: realtySolutionsPreviews,
		tech: ["javascript", "node", "react", "mongodb"],
	},
	{
		title: "Realty Solutions",
		coverImage: realtyCoverImg,
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
	},
	{
		title: "On the Books.",
		coverImage: onTheBooksCoverImg,
		desktopImage: otbDesktop,
		mobileImage: otbMobile,
		heading: "A personal library designed to take notes, rate, and keep track of their status of each book.",
		captions: [
			"OpenLibrary API where users can search for on-the-books, get recommendations, and view book previews",
			"Save on-the-books to library and create an organized notebook for easy to use note-taking",
			"React context/reducer/router"
		],
		link: 'https://on-the-books.netlify.app',
		github: 'https://github.com/sujithvarughese/on-the-books',
		previews: onTheBooksPreviews,
		tech: ["javascript", "node", "react", "mongodb"],
	},
	{
		title: "Beat Blackjack",
		coverImage: blackjackCoverImg,
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
	},
]


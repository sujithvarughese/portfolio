import simplerFitnessCoverIMG from "../assets/images/simpler-fitness/cover.jpeg"
import fitnessBrowseIMG from "../assets/images/simpler-fitness/browse.png"
import fitnessSearchIMG from "../assets/images/simpler-fitness/search.png"
import fitnessInstructionsIMG from "../assets/images/simpler-fitness/instructions.png"

import realtyCoverIMG from "../assets/images/realty-solutions/cover.jpeg"
import realtyScreenshots from "../assets/images/realty-solutions/home-combined.png"
import fmrIMG from "../assets/images/realty-solutions/fmr.png"
import messagesIMG from "../assets/images/realty-solutions/messages.png"
import receiptsIMG from "../assets/images/realty-solutions/receipts.png"
import mobileFinancesIMG from "../assets/images/realty-solutions/mobile-finances.png"
import searchIMG from "../assets/images/realty-solutions/search.png"

import onTheBooksCoverIMG from "../assets/images/on-the-books/cover.jpeg"
import onTheBooksScreenshots from "../assets/images/on-the-books/on-the-books-screenshot.png"
import bookDiscoverIMG from "../assets/images/on-the-books/discover.png"
import notebookIMG from "../assets/images/on-the-books/notebook.png"
import bookPreviewIMG from "../assets/images/on-the-books/preview.png"
import bookSearchIMG from "../assets/images/on-the-books/search.png"

import blackjackScreenshots from "../assets/images/blackjack/blackjack-screenshots.png"
import blackjackCoverIMG from "../assets/images/blackjack/cover.jpeg"
import blackjackCongratsIMG from "../assets/images/blackjack/congrats-blackjsck.png"
import blackjackMobileDoubleIMG from "../assets/images/blackjack/mobile-double.png"
import blackjackPlayerWinIMG from "../assets/images/blackjack/player-win.png"

import rsDesktop from "../assets/images/realty-solutions/home-desktop.png"
import rsMobile from "../assets/images/realty-solutions/home-mobile.png"
import otbDesktop from "../assets/images/on-the-books/on-the-books-desktop.png"
import otbMobile from "../assets/images/on-the-books/on-the-books-mobile.png"
import bjDesktop from "../assets/images/blackjack/blackjack-desktop.png"
import bjMobile from "../assets/images/blackjack/blackjack-mobile.png"

export const projects = [
	{
		title: "Simpler Fitness",
		coverImage: simplerFitnessCoverIMG,
		heading: "Fitness app makes getting in shape simple with access to thousands of workouts with detailed instructions and animated images",
		captions: [
			"Browse by target muscles, available equipment, and experience level with paginated results using react query and infinite scroll",
			"Create an account to save favorite workouts for quick access",
			"Search by name through the database of more than a thousand exercises"
		],
		images: [fitnessBrowseIMG, fitnessSearchIMG, fitnessInstructionsIMG],
		image: realtyScreenshots,
		link: 'https://simpler-fitness.netlify.app',
		github: 'https://github.com/sujithvarughese/simple-fitness',
		tech: ["javascript", "node", "react", "mongodb"],
		featured: true,
	},
	{
		title: "Realty Solutions",
		coverImage: realtyCoverIMG,
		heading: "A property management app for small business owners to keep up with finances and communicate with tenants.",
		captions: [
			"Calculate mortgage payments and live payoff quotes, get monthly and yearly profits, all managed in state",
			"User roles for tenants and managers, authenticated using JWT and signed HTTP cookies",
			"HUD.gov API to retrieve rental rates for any location in the US.",
		],
		images : [searchIMG, messagesIMG, mobileFinancesIMG, receiptsIMG, fmrIMG],
		image: realtyScreenshots,
		desktop: rsDesktop,
		mobile: rsMobile,
		link: 'https://realty-solutions.netlify.app',
		github: 'https://github.com/sujithvarughese/realty-solutions',
		tech: ["javascript", "node", "react", "mongodb"],
		featured: true,
	},
	{
		title: "On the Books.",
		coverImage: onTheBooksCoverIMG,
		heading: "A personal library designed to take notes, rate, and keep track of their status of each book.",
		captions: [
			"OpenLibrary API for access to books, recommendations, and previews",
			"Global state management with Context API and Reducer",
			"Search feature to find any book in your library",
		],
		images: [bookDiscoverIMG, notebookIMG, bookSearchIMG, bookPreviewIMG],
		image: onTheBooksScreenshots,
		desktop: otbDesktop,
		mobile: otbMobile,
		link: 'https://on-the-books.netlify.app',
		github: 'https://github.com/sujithvarughese/on-the-books',
		tech: ["javascript", "node", "react", "mongodb"],
		featured: false,
	},
	{
		title: "Beat Blackjack",
		coverImage: blackjackCoverIMG,
		heading: "Play blackjack with live assistance!",
		captions: [
			"Get the correct play by the book in any situation as you play",
			"Customize your bankroll, change number of decks used"
		],
		images: [blackjackCongratsIMG, blackjackMobileDoubleIMG, blackjackPlayerWinIMG],
		image: blackjackScreenshots,
		desktop: bjDesktop,
		mobile: bjMobile,
		link: 'https://blackjack-suj.netlify.app',
		github: 'https://github.com/sujithvarughese/blackjack-js/tree/master/react',
		tech: ["javascript", "react"],
		featured: false,
	},
]


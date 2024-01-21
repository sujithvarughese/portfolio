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

import rsDesktop from "../assets/images/previews/rs-desktop.png"
import rsMobile from "../assets/images/previews/rs-mobile.png"
import otbDesktop from "../assets/images/previews/otb-desktop.png"
import otbMobile from "../assets/images/previews/otb-mobile.png"
import bjDesktop from "../assets/images/previews/bj-desktop.png"
import bjMobile from "../assets/images/previews/bj-mobile.png"

export const projects = [
	{
		title: "Simpler Fitness",
		coverImage: simplerFitnessCoverIMG,
		heading: "Making getting in shape easier than ever with access to thousands of workouts with detailed instructions and animated images",
		previews: [
			{
				caption: "Browse by target muscles, available equipment, or experience level",
				image: fitnessBrowseIMG
			},
			{
				caption: "Animated images showing proper technique",
				image: fitnessInstructionsIMG
			},
			{
				caption: "Create an account to save favorite workouts for quick access",
				image: fitnessInstructionsIMG
			},
			{
				caption: "Search by name through the database of more than a thousand exercises",
				image: fitnessSearchIMG
			},
		],
		captions: [
			"Browse by target muscles, available equipment, or experience level",
			"Animated images showing proper technique",
			"Create an account to save favorite workouts for quick access",
			"Search by name through the database of more than a thousand exercises"
		],
		images: [fitnessBrowseIMG, fitnessSearchIMG, fitnessInstructionsIMG],
		image: realtyScreenshots,
		link: 'https://simpler-fitness.netlify.app',
		github: 'https://github.com/sujithvarughese/simple-fitness',
		tech: ["javascript", "node", "react", "mongodb"],
	},
	{
		title: "Realty Solutions",
		coverImage: realtyCoverIMG,
		heading: "A property management app for small business owners to organize finances and communicate with tenants.",
		previews: [
			{
				caption: "Calculate mortgage payments, compare payments with different interest rates, view live payoff quotes, view both monthly and yearly profits and losses",
				image: mobileFinancesIMG
			},
			{
				caption: "Separate user roles for system admin, account admin (property manager) and users (tenants)",
				image: searchIMG
			},
			{
				caption: "Tokens attached to signed HTTP cookies for verification",
				image: receiptsIMG
			},
			{
				caption: "Messaging functionality for landlord-tenant communication",
				image: messagesIMG
			},
			{
				caption: "HUD.gov API to retrieve rental rates for any location in the US.",
				image: fmrIMG
			},
		],
		captions: [
			"Calculate mortgage payments, compare payments with different interest rates, view live payoff quotes, view both monthly and yearly profits and losses",
			"Separate user roles for system admin, account admin (property manager) and users (tenants)",
			"Tokens attached to signed HTTP cookies for verification",
			"Messaging functionality for landlord-tenant communication",
			"HUD.gov API to retrieve rental rates for any location in the US.",
		],
		images : [searchIMG, messagesIMG, mobileFinancesIMG, receiptsIMG, fmrIMG],
		image: realtyScreenshots,
		link: 'https://realty-solutions.netlify.app',
		github: 'https://github.com/sujithvarughese/realty-solutions',
		tech: ["javascript", "node", "react", "mongodb"],
	},
	{
		title: "On the Books.",
		coverImage: onTheBooksCoverIMG,
		heading: "A personal library designed to take notes, rate, and keep track of their status of each book.",
		previews: [
			{
				caption: "Uses OpenLibrary API for access to millions of books, recommendations, and previews",
				image: bookDiscoverIMG
			},
			{
				caption: "Save on-the-books to library and create an organized notebook for easy to use note-taking",
				image: notebookIMG
			},
			{
				caption: "Search feature to find any book in your library",
				image: bookSearchIMG
			},
			{
				caption: 	"Search database for book by genre",
				image: bookPreviewIMG
			}
		],
		captions: [
			"Uses OpenLibrary API for access to millions of books, recommendations, and previews",
			"Save on-the-books to library and create an organized notebook for easy to use note-taking",
			"Search feature to find any book in your library",
			"Search database for book by genre"
		],
		images: [bookDiscoverIMG, notebookIMG, bookSearchIMG, bookPreviewIMG],
		image: onTheBooksScreenshots,
		link: 'https://on-the-books.netlify.app',
		github: 'https://github.com/sujithvarughese/on-the-books',
		tech: ["javascript", "node", "react", "mongodb"],
	},
	{
		title: "Beat Blackjack",
		coverImage: blackjackCoverIMG,
		heading: "Play blackjack with live assistance!",
		previews: [
			{
				caption: "Get the correct play by the book in any situation as you play",
				image: blackjackCongratsIMG
			},
			{
				caption: "Customize your bankroll, change number of decks used",
				image:blackjackMobileDoubleIMG
			},
			{
				caption: "See if you can beat the house",
				image: blackjackPlayerWinIMG
			}
		],
		captions: [
			"Get the correct play by the book in any situation as you play",
			"Customize your bankroll, change number of decks used"
		],
		images: [blackjackCongratsIMG, blackjackMobileDoubleIMG, blackjackPlayerWinIMG],
		image: blackjackScreenshots,
		link: 'https://blackjack-suj.netlify.app',
		github: 'https://github.com/sujithvarughese/blackjack-js/tree/master/react',
		tech: ["javascript", "react"],
	},
]


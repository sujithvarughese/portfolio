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
import blackjackMobileDoubleIMG from "../assets/images/blackjack/mobile-double.png"
import blackjackPlayerWinIMG from "../assets/images/blackjack/player-win.png"

import rsDesktop from "../assets/images/realty-solutions/home-desktop.png"
import rsMobile from "../assets/images/realty-solutions/home-mobile.png"
import otbDesktop from "../assets/images/on-the-books/on-the-books-desktop.png"
import otbMobile from "../assets/images/on-the-books/on-the-books-mobile.png"
import bjDesktop from "../assets/images/blackjack/bj-desktop.png"
import bjMobile from "../assets/images/blackjack/bj-mobile2.png"

export const projects = [
	{
		title: "Simpler Fitness",
		coverImage: simplerFitnessCoverIMG,
		heading: "Fitness app makes getting in shape simple by filtering workouts to your criteria and displaying detailed instructions and animated images",
		captions: [
			"Browse by target muscles, available equipment, and experience level",
			"Back end sends paginated results which are rendered with infinite scroll using React",
			"Start typing the name of any workout as results populate from a database of more than a thousand exercises"
		],
		images: [fitnessBrowseIMG, fitnessSearchIMG, fitnessInstructionsIMG],
		image: realtyScreenshots,
		link: 'https://simpler-fitness.netlify.app',
		github: 'https://github.com/sujithvarughese/simple-fitness',
		tech: ["javascript", "node", "react", "mongodb"],
		featured: true,
	},
	{
		title: "Beat Blackjack",
		coverImage: blackjackCoverIMG,
		heading: "Learn perfect strategy and beat the house with live feedback after each move, and an ROI tracker to calculate how profitable you can be.",
		captions: [
			"Customizable settings- Choose number of decks, blackjack payouts, your bankroll, number of splits allowed, and more.",
			"Live stat tracker that automatically updates with the amount won or lost, and your current return on investment percent.",
			"Stuck on the right move? Ask for help at any time during a hand.",
		],
		images: [blackjackMobileDoubleIMG, blackjackPlayerWinIMG],
		image: blackjackScreenshots,
		desktop: bjDesktop,
		mobile: bjMobile,
		link: 'https://beat-blackjack-suj.netlify.app',
		github: 'https://github.com/sujithvarughese/blackjack-js/tree/master/react',
		tech: ["javascript", "react"],
		featured: false,
	},
	{
		title: "Realty Solutions",
		coverImage: realtyCoverIMG,
		heading: "Full-fledged property management app to stay on top of finances and efficient owner-tenant messaging.",
		captions: [
			"Retrieve mortgage information, then determine monthly payments, view live payoff quotes, and get profits/losses all managed and calculated in React state",
			"Separate user roles for tenants and managers, authorized and authenticated using JWT and signed HTTP cookies",
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
		heading: "A personal library designed to help you retain and remember what you read.",
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

]


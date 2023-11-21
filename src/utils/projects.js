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
		caption: "Real solutions to manage your properties.",
		details: "",
		link: 'https://realty-solutions.netlify.app',
		github: 'https://github.com/sujithvarughese/realty-solutions',
		previews: realtySolutionsPreviews
	},
	{
		title: "On the Books.",
		coverImage: bookshelf,
		desktopImage: otbDesktop,
		mobileImage: otbMobile,
		caption: "Discover new reading. Organize your collection.",
		details: "Bookshelf is a personal reading organizer that uses the OpenLibrary API to connect users to millions of books. Find books based on subject matter, take notes, and organize your favorite books into your own bookshelf!",
		link: 'https://on-the-books.netlify.app',
		github: 'https://github.com/sujithvarughese/on-the-books',
		previews: []
	},
	{
		title: "Sketch",
		coverImage: sketch,
		desktopImage: sketchDesktop,
		mobileImage: sketchMobile,
		caption: "The original Sketch App. Now in Color.",
		details: "Etch-a-Sketch like never before. You pick the size. You pick the colors. The possibilities are endless.",
		link: 'https://sketch-suj.netlify.app',
		github: 'https://github.com/sujithvarughese/odin-etch-a-sketch/tree/main/react',
		previews: []
	},
	{
		title: "Beat Blackjack",
		coverImage: blackjack,
		desktopImage: bjDesktop,
		mobileImage: bjMobile,
		caption: "Want to test your luck while learning at the same time?",
		details: "Play blackjack with live assistance to tell you the exact book move recommended by the pros in any situation! Customize your bankroll and number of decks to give you that real casino feel!",
		link: 'https://blackjack-suj.netlify.app',
		github: 'https://github.com/sujithvarughese/blackjack-js/tree/master/react',
		previews: []
	},
]


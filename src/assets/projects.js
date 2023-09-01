import bookshelf from "./images/bookshelf-cover.jpeg"
import sketch from "./images/sketch-cover.jpeg"
import blackjack from "./images/blackjack-cover.jpeg"

export const projects = [

	{
		title: "bookshelf.",
		cover: bookshelf,
		caption: "Discover new reading. Organize your collection.",
		details: "Bookshelf is a personal reading organizer that uses the OpenLibrary API to connect users to millions of books. Find books based on subject matter, take notes, and organize your favorite books into your own bookshelf!",
		link: 'https://bookshelf-suj.netlify.app',
		github: 'https://github.com/sujithvarughese/bookshelf-app'
	},
	{
		title: "Sketch",
		cover: sketch,
		caption: "The original Sketch App. Now in Color.",
		details: "Etch-a-Sketch like never before. You pick the size. You pick the colors. The possibilities are endless.",
		link: 'https://sketch-suj.netlify.app',
		github: 'https://github.com/sujithvarughese/odin-etch-a-sketch/tree/main/react'
	},
	{
		title: "Beat Blackjack",
		cover: blackjack,
		caption: "They say the house has the edge. Let's find out",
		details: "Choose your starting bankroll. Choose how many decks. Choose the rules.",
		link: 'https://blackjack-suj.netlify.app',
		github: 'https://github.com/sujithvarughese/blackjack-js/tree/master/react'
	},
]
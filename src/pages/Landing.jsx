import profileIMG from "../assets/images/profile.jpg"

const Landing = () => {
	return (
		<main className="mx-auto my-12">
			<div className="text-center m-5 text-2xl">Sujith Varughese</div>

			<div className="max-w-xl m-auto">
				<img src={profileIMG} alt="profile"/>
			</div>

			<div className="py-4 max-w-lg text-xl m-auto">
				I am a recent computer science graduate, passionate about engineering projects which solve problems. I hope to bring my abilities developing full-stack applications to a team where I can provide value and help create and maintain useful software solutions.
			</div>

		</main>

	);
};

export default Landing;
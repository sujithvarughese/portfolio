import profileIMG from "../assets/images/profile.jpg"

const Landing = () => {
	return (
		<main className="mx-auto my-12">
			<div className="text-center m-5 text-2xl">Sujith Varughese</div>

			<div className="max-w-xl m-auto">
				<img src={profileIMG} alt="profile"/>
			</div>



		</main>

	);
};

export default Landing;
import profileIMG from "../assets/images/profile.jpg"

const Landing = () => {
	return (
		<main className="mx-auto my-12">
			<div className="title">Sujith Varughese</div>
			<div className="description">
				Hello! My name is Sujith Varughese. I recently graduated with a Bachelor's in Computer Science from Florida International University.
			</div>

			<div className="max-w-xl m-auto">
				<img src={profileIMG} alt="profile"/>
			</div>



		</main>

	);
};

export default Landing;
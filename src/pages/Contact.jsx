import githubIcon from "../assets/images/github-mark.png"
import emailIcon from "../assets/images/email-icon.jpeg"
import phoneIcon from "../assets/images/phone-icon.svg"

const Contact = () => {
	return (
		<div className="contacts-page text-white">
			<div className="title">Contact Information</div>
			<div className="content">
				<div className="contact-row">
					<img src={emailIcon} alt="email-icon" className="icon bg-white"/>
					<a href="mailto:sujith.varug@gmail.com" className="info">sujith.varug@gmail.com</a>
				</div>

				<div className="contact-row">
					<img src={phoneIcon} alt="phone-icon" className="icon bg-white"/>
					<a href="tel:+13058591695" className="info">(305) 859-1695</a>
				</div>

				<div className="contact-row">
					<img src={githubIcon} alt="github-icon" className="icon bg-white"/>
					<a href="https://github.com/sujithvarughese" target="_blank" rel="noreferrer" className="info">sujithvarughese</a>
				</div>
			</div>

		</div>
	);
};

export default Contact;
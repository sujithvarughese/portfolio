import classes from "./styles/Contact.module.css"
import {GithubLink, MailLink, PhoneLink} from "../../icons/Icons.jsx";

const Contact = () => {
	return (
		<div className={classes.container}>
			<div className={classes.links}>
				<MailLink link="mailto:sujith.varug@gmail.com" label="sujith.varug@gmail.com"/>
				<PhoneLink link="tel:+13058591695" label="305-859-1695" />
				<GithubLink link="https://github.com/sujithvarughese" label="sujithvarughese" />
			</div>


		</div>
	);
};

export default Contact;
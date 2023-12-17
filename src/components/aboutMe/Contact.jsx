import classes from "./styles/Contact.module.css"
import { LinkIcon } from "../../ui"

const Contact = () => {
	return (

		<div className={classes.container}>
			<LinkIcon
				icon="email"
				link="mailto:sujith.varug@gmail.com"
				label="sujith.varug@gmail.com"
			/>
			<LinkIcon
				icon="phone"
				link="tel:+13058591695"
				label="305-859-1695"
			/>
			<LinkIcon
				icon="github"
				link="https://github.com/sujithvarughese"
				label="sujithvarughese"
			/>
		</div>



	);
};

export default Contact;
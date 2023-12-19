import classes from "./styles/Contact.module.css";
import {LinkIcon} from "../ui/index.js";
import { ContactForm } from "../components"
const Contact = () => {
    return (
        <div className={classes.container}>
            <div className={classes.text}>
                <p>Thank you for taking the time to view my portfolio!
                    I would love to hear from you with any questions or feedback.
                </p>
            </div>

            <ContactForm />

            <div className={classes.links}>
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

        </div>
    );
};

export default Contact;
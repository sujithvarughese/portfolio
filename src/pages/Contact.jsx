import classes from "./styles/Contact.module.css";
import {LinkIcon} from "../ui/index.js";
import { ContactForm } from "../components"
const Contact = () => {
    return (
        <div className={classes.container}>

            <div className={classes.heading}>
                Contact Me
            </div>
            <p className={classes.text}>
                Thank you for taking the time to view my portfolio!
                Feel free to use the contact form below to reach out, or contact me by phone or email.
                I would love to hear from you with any questions or feedback.
            </p>

            <div className={classes.contact}>

                <ContactForm />
                <div className={classes.links}>
                    <LinkIcon
                        icon="email"
                        link="mailto:sujith.varug@gmail.com"
                        label="sujith.varug@gmail.com"
                        textFont="20px"
                    />
                    <LinkIcon
                        icon="phone"
                        link="tel:+13058591695"
                        label="305-859-1695"
                        textFont="20px"
                    />
                    <LinkIcon
                        icon="github"
                        link="https://github.com/sujithvarughese"
                        label="sujithvarughese"
                        textFont="20px"
                    />
                </div>
            </div>


        </div>
    );
};

export default Contact;
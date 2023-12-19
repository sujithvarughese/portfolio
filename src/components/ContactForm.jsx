import emailjs from "@emailjs/browser";
import classes from "../components/styles/ContactForm.module.css"
import {Button, Form, Input, Textarea} from "../ui/index.js";
import {useRef} from "react";
import Card from "../ui/Card.jsx";
import card from "../ui/Card.jsx";

const credentials = {
    serviceID: import.meta.env.VITE_SERVICE_ID,
    templateID: import.meta.env.VITE_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_PUBLIC_KEY
}

const ContactForm = () => {

    const formRef = useRef()
    const sendEmail = async (e) => {
        e.preventDefault()
        try {
            const response = await emailjs.sendForm(credentials.serviceID, credentials.templateID, formRef.current, credentials.publicKey)
            if (response.text === "OK") {
                formRef.current.reset()
            }
        } catch(error) {
            throw new Error(error)
        }
    }

    return (
        <div className={classes.container}>
            <form ref={formRef} onSubmit={sendEmail} className={classes.form}>
                <Input name='from_name' type="email" placeholder='Email' required />
                <Textarea name='message' placeholder='Write message...' required ></Textarea>
                <Button type="submit">Send Message</Button>
            </form>
        </div>
    )

}


export default ContactForm
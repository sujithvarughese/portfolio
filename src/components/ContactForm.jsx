import emailjs from "@emailjs/browser";
import classes from "../components/styles/ContactForm.module.css"
import {Button, Form, Input, Textarea} from "../ui/index.js";
import {useRef, useState} from "react";

const credentials = {
    serviceID: import.meta.env.VITE_SERVICE_ID,
    templateID: import.meta.env.VITE_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_PUBLIC_KEY
}

const ContactForm = () => {

    const formRef = useRef()
    const [buttonText, setButtonText] = useState("Send Message")
    const [messageSent, setMessageSent] = useState(false)

    const sendEmail = async (e) => {
        e.preventDefault()
        setButtonText("Sending...")
        try {
            const response = await emailjs.sendForm(credentials.serviceID, credentials.templateID, formRef.current, credentials.publicKey)
            if (response.text === "OK") {
                formRef.current.reset()
                setButtonText("Sent!")
                setMessageSent(true)
                setTimeout(() => {
                    setButtonText("Send Message")
                }, 3000)
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
                <div className={classes.button}>
                    <Button type="submit">{buttonText}</Button>
                </div>
                <div className={classes.mailSentMessage}>
                    {messageSent && mailSentMessage}
                </div>

            </form>
        </div>
    )
}

const mailSentMessage = "Your message has been sent. Thank you for your feedback!"

export default ContactForm
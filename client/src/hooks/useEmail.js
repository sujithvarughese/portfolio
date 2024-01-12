import { useState } from 'react'
import emailjs from "@emailjs/browser";

const credentials = {
  serviceID: import.meta.env.VITE_SERVICE_ID,
  templateID: import.meta.env.VITE_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_PUBLIC_KEY
}

const UseEmail = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const sendEmail = async (data) => {
    setIsLoading(true)
    try {
      //const response = await emailjs.sendForm(credentials.serviceID, credentials.templateID, data, credentials.publicKey)
      if (response.text === "OK") {
        setResponse({
          type: 'success',
          message: `Thanks for your submission ${data.name}, we will get back to you shortly!`,
        })
      }
    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      })
      throw new Error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return { sendEmail, response, isLoading }
}

export default UseEmail
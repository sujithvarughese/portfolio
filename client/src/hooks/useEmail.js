import { useState } from 'react'
import emailjs from "@emailjs/browser";
import { useGlobalContext } from '../context/GlobalContext.jsx'

const credentials = {
  serviceID: import.meta.env.VITE_SERVICE_ID,
  templateID: import.meta.env.VITE_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_PUBLIC_KEY
}

const UseEmail = () => {

  const { showAlert } = useGlobalContext()

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const sendEmail = async (data) => {
    console.log(data)
    setIsLoading(true)
    try {
      const response = await emailjs.sendForm(credentials.serviceID, credentials.templateID, data, credentials.publicKey)
      console.log(response)
      if (response.text === "OK") {
        showAlert({
          type: 'success',
          message: `Thanks for your message ${data.name}, I will get back to you shortly.`,
        })
      }
    } catch (error) {
      showAlert({
        type: 'error',
        message: 'Something went wrong, please try again.',
      })
      throw new Error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return { sendEmail, response, isLoading }
}

export default UseEmail
import { forwardRef, useEffect, useRef, useState } from 'react'
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Progress, Text, Textarea, VStack } from '@chakra-ui/react'
import Section from '../ui/Section.jsx'
import { useGlobalContext } from '../context/GlobalContext.jsx'
import { useFormik } from "formik";
import * as Yup from 'yup';
import bgKnight from "../assets/images/backgrounds/bg-knight.jpeg"
import bgChessKingPawn from "../assets/images/backgrounds/chess-pawn-king1.png"
import emailjs from "@emailjs/browser";
const credentials = {
  serviceID: import.meta.env.VITE_SERVICE_ID,
  templateID: import.meta.env.VITE_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_PUBLIC_KEY
}

const ContactMe = forwardRef((props, ref) => {

  const { setActiveLink, showAlert, hideAlert } = useGlobalContext()
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        setActiveLink("contact-me")
      }
    })
    observer.observe(ref.current)
  }, [])


  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef()

  const formik = useFormik({
    initialValues: {
      from_name: "",
      from_email: "",
      message: ""
    },
    onSubmit: async (values) => {
      setIsLoading(true)
      console.log(formRef.current)
      try {
        const response = await emailjs.sendForm(credentials.serviceID, credentials.templateID, formRef.current, credentials.publicKey)
        console.log(response)
        if (response.status === 200) {
          showAlert({
            type: 'success',
            message: `Thanks for your message ${values.from_name}. I will get back to you shortly.`,
          })
        }
      } catch (error) {
        showAlert({
          type: 'error',
          message: 'Something went wrong, please try again.',
        })
      } finally {
        setIsLoading(false)
        formik.resetForm()
      }
    },
    validationSchema: Yup.object({
      from_name: Yup.string().required("Required"),
      from_email: Yup.string().email("Invalid Email Address").required("Required"),
      message: Yup.string().required("Required")
    })
  });


  return (
    <Section
      bgImage={bgKnight} bgSize="contain" bgPosition="left"
      p={{ base: "12px"}} marginY="24px" 
    >
      {isLoading && <Progress isIndeterminate />}
        <Heading ref={ref} paddingTop="80px">Contact Me</Heading>
        <Box p="6" maxWidth="600px" fontSize="20px" text-align="justify">
          <Text>Feel free to contact me with any questions or enquiries.</Text>
          <Text>Any general feedback is also welcome and appreciated!</Text>
        </Box>
        <Box width="100%" p="6" maxWidth="800px">
          <form ref={formRef} onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.errors.from_name && formik.touched.from_name}>
                <FormLabel htmlFor="from_name">Name</FormLabel>
                <Input
                  id="from_name"
                  name="from_name"
                  type="text"
                  onBlur={formik.handleBlur}
                  value={formik.values.from_name}
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.from_name}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.from_email && formik.touched.from_email}>
                <FormLabel htmlFor="from_email">Email Address</FormLabel>
                <Input
                  id="from_email"
                  name="from_email"
                  type="email"
                  onBlur={formik.handleBlur}
                  value={formik.values.from_email}
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.from_email}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.errors.message && formik.touched.message}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="message"
                  name="message"
                  height={250}
                  value={formik.values.message}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="yellow" width="full" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>



    </Section>
  )
})

export default ContactMe
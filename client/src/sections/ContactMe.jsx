import { forwardRef, useEffect, useState } from 'react'
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import Section from '../ui/Section.jsx'
import { useGlobalContext } from '../context/GlobalContext.jsx'
import { useFormik } from "formik";
import * as Yup from 'yup';

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

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },
    onSubmit: async (values) => {
      try {
        setIsLoading(true)
        console.log('Submitting Form')
        showAlert('success', `Thank you for your submission ${values.name}, we will get back to you if you are deemed worthy`)
      } catch (error) {
        showAlert('error', 'Auto self-destructing in 5 seconds...')
      } finally {
        formik.resetForm()
        setIsLoading(false)
      }
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid Email Address").required("Required"),
      message: Yup.string().required("Required")
    })
  });


  return (
    <Section
      backgroundColor="#512DA8" color="white"
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading ref={ref}>Contact Me</Heading>
        <Box width="100%" p="6">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.errors.name && formik.touched.name}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
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
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>

      </VStack>

    </Section>
  )
})

export default ContactMe
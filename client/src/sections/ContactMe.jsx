import { forwardRef, useEffect } from 'react'
import { Heading } from '@chakra-ui/react'
import Section from '../ui/Section.jsx'
import { useGlobalContext } from '../context/GlobalContext.jsx'

const ContactMe = forwardRef((props, ref) => {

  const { setActiveLink } = useGlobalContext()

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        setActiveLink("contact-me")
      }
    })
    observer.observe(ref.current)
  }, [])

  return (
    <Section
      backgroundColor="gray"
    >
      <Heading ref={ref}></Heading>
    </Section>
  )
})

export default ContactMe
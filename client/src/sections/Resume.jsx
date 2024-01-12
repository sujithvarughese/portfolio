import { forwardRef, useEffect } from 'react'
import Section from '../ui/Section.jsx'
import { Heading, Image } from '@chakra-ui/react'
import { useGlobalContext } from '../context/GlobalContext.jsx'
import resume from "../assets/images/resume.png"

const Resume = forwardRef((props, ref) => {

  const { setActiveLink } = useGlobalContext()

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        setActiveLink("resume")
      }
    })
    observer.observe(ref.current)
  }, [])

  return (
    <Section
      backgroundColor="#f2ebe8"
    >
      <Heading ref={ref}></Heading>
      <Image src={resume}></Image>
    </Section>
  )
})

export default Resume
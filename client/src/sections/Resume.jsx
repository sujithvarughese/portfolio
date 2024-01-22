import { forwardRef, useEffect } from 'react'
import Section from '../ui/Section.jsx'
import { Heading, Image } from '@chakra-ui/react'
import { useGlobalContext } from '../context/GlobalContext.jsx'
import resume1 from "../assets/images/resume-2024 copy 2.png"
import resume2 from "../assets/images/resume-2024 copy 3.png"
import resume3 from "../assets/images/resume-2024 copy 4.png"
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
    <Section>
      <Heading ref={ref} paddingTop="80px"></Heading>
      <Image src={resume1}></Image>
      <Image src={resume2}></Image>
      <Image src={resume3}></Image>
    </Section>
  )
})

export default Resume
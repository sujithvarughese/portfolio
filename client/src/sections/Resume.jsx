import { forwardRef, useEffect } from 'react'
import Section from '../ui/Section.jsx'
import { Heading } from '@chakra-ui/react'
import { useGlobalContext } from '../context/GlobalContext.jsx'

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
      backgroundColor="#512DA8"
    >
      <Heading ref={ref}></Heading>
    </Section>
  )
})

export default Resume
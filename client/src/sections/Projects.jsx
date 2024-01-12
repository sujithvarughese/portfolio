import Section from '../ui/Section.jsx'
import { forwardRef, useEffect } from 'react'
import { Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { useGlobalContext } from '../context/GlobalContext.jsx'
import { projects } from "../data/projects.js";
import Project from "../components/Project.jsx"

const Projects = forwardRef((props, ref) => {

  const { setActiveLink } = useGlobalContext()

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        setActiveLink("projects")
      }
    })
    observer.observe(ref.current)

  }, [])

  return (
    <Section
      backgroundColor="#14532d"
      color="white"
      p="8"
      spacing="8"
    >
      <Heading ref={ref}>Projects</Heading>
      <SimpleGrid
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap="8"
      >
        {
          projects.map((project, index) => {
            return <Project key={index} {...project} />
          })
        }
      </SimpleGrid>
    </Section>
  )
})

export default Projects
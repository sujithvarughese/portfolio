import Section from '../ui/Section.jsx'
import { forwardRef, useEffect } from 'react'
import { Box, Heading, HStack, SimpleGrid, Text } from '@chakra-ui/react'
import { useGlobalContext } from '../context/GlobalContext.jsx'
import { projects } from "../data/projects.js";
import ProjectFront from "../components/ProjectFront.jsx"
import ProjectCard from '../ui/ProjectCard.jsx'

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
      <HStack
        flexWrap="wrap"
        gap="1rem"
        justifyContent="space-evenly"
      >
        {
          projects.map((project, index) => {
            return (
            <Box key={index} width="480px">
              <ProjectCard project={project} />
            </Box>
            )
          })
        }
      </HStack>
    </Section>
  )
})

export default Projects
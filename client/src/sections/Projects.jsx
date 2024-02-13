import Section from '../ui/Section.jsx'
import { forwardRef, useEffect, useRef } from 'react'
import { Box, Container, Heading, HStack, Image, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import { useGlobalContext } from '../context/GlobalContext.jsx'
import { projects } from "../data/projects.js";
import ProjectCardFront from "../components/ProjectCardFront.jsx"
import ProjectCard from '../ui/ProjectCard.jsx'
import bgBlur from "../assets/images/backgrounds/bg-blur.jpeg"
import Project from '../components/Project.jsx'
import diagonalLines from "../assets/images/backgrounds/gold-diagonal-lines.jpeg"
import bgLightFixture from "../assets/images/backgrounds/bg-light-fixture.png"
import bgRocky from "..//assets/images/backgrounds/black-rock.jpeg"
import bgTable from "../assets/images/backgrounds/bg-table.jpeg"
//import blackGoldFrame from "../assets/images/backgrounds/black-gold-frame.jpeg"
import blackGrunge from "../assets/images/backgrounds/Black-grunge.jpeg"

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
      bgImage={blackGrunge}
      bgSize="cover"
      bgPosition="center"
      p={{ base: "3", md: "8" }}
      spacing="8"
    >
      <Heading ref={ref} paddingTop="80px">Projects</Heading>

      <VStack
        display={{ base: "flex", md: "none" }}
        flexWrap="wrap"
        gap="24px"
        justifyContent="space-evenly"
      >
        {
          projects.map((project,index) => {
            return (
            <Box
              key={index}
            >
              <ProjectCard project={project} index={index}/>
            </Box>
            )
          })
        }
      </VStack>

      <VStack
        display={{ base: "none", md: "grid" }}
        gap="10rem"
        marginX="5rem"
        paddingBottom="72px"
      >
        {
          projects.map((project,index) => {
            return (
              <Box
                key={index}
              >
                <Project {...project} index={index}/>
              </Box>
            )
          })
        }
      </VStack>


    </Section>
  )
})

export default Projects
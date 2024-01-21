import { Box, Button, HStack } from '@chakra-ui/react'
import { useGlobalContext } from '../context/GlobalContext.jsx'

const Header = ({ scrollToLanding, scrollToProjects, scrollToResume, scrollToContactMe }) => {

  const { activeLink } = useGlobalContext()
  const projectsActive = () => activeLink === "projects" ? "800" : "500"
  const resumeActive = () => activeLink === "resume" ? "800" : "500"
  const contactMeActive = () => activeLink === "contact-me" ? "800" : "500"
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      backgroundColor="#18181b"
      zIndex="10"
    >
      <Box
        color="white"
        px={16}
        py={4}
        justifyContent="space-between"
        alignItems="center"
        direction="row"
      >

          <HStack as="nav">
            <Button variant="link" onClick={scrollToLanding}>Home</Button>
            <Button fontWeight={projectsActive} variant="link" onClick={scrollToProjects}>Projects</Button>
            <Button  fontWeight={resumeActive} variant="link" onClick={scrollToResume}>Resume</Button>
            <Button  fontWeight={contactMeActive} variant="link" onClick={scrollToContactMe}>Contact Me</Button>
          </HStack>

      </Box>

    </Box>
  )
}

export default Header
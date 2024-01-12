import { useRef } from 'react'
import { Header, Footer } from "./components"
import { Landing, Projects, Resume, ContactMe } from "./sections"
import { GlobalProvider } from './context/GlobalContext.jsx'
const App = () => {

  // refs are forwarded to appropriate components to ref component in that section
  // each component uses IntersectionObserver to observe if component is in view
  // When in view, activeLink global state updates to indicate section in view on navbar
  const landingRef = useRef()
  const projectsRef = useRef()
  const contactMeRef = useRef()
  const resumeRef = useRef()

  // scroll functions for above refs are passed to Heading.jsx as onClick for each navbar link
  const scrollToLanding = () => {
    landingRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
  const scrollToResume = () => {
    resumeRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
  const scrollToContactMe = () => {
    contactMeRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <GlobalProvider>

      <Header
        scrollToLanding={scrollToLanding}
        scrollToProjects={scrollToProjects}
        scrollToResume={scrollToResume}
        scrollToContactMe={scrollToContactMe}
      />
      <main>
        <Landing ref={landingRef}/>
        <Projects ref={projectsRef}/>
        <Resume ref={resumeRef}/>
        <ContactMe ref={contactMeRef}/>
      </main>

      <Footer />


    </GlobalProvider>
  )
}

export default App

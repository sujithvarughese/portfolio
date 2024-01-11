import { ChakraProvider } from '@chakra-ui/react'
import { Header, Footer } from "./components"
import { Landing, Projects, Resume, ContactMe } from "./sections"
const App = () => {


  return (
    <ChakraProvider>

      <Header />
      <main>
        <Landing />
        <Projects />
        <Resume />
        <ContactMe />
      </main>

      <Footer />


    </ChakraProvider>
  )
}

export default App

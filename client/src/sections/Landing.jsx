import React, { forwardRef, useEffect } from 'react'
import Section from '../ui/Section.jsx'
import { Avatar, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'

import avatarIMG from "../assets/images/profile.png"
import { useGlobalContext } from '../context/GlobalContext.jsx'
const greeting = "Hello, I am Sujith!";
const bio1 = "Software developer";
const bio2 = "Specializing in MERN Stack Applications";

const Landing = forwardRef((props, ref) => {

  const { setActiveLink } = useGlobalContext()

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        setActiveLink("home")
      }
    })
    observer.observe(ref.current)
  }, [])
  return (
    <Section
      backgroundColor="#2A4365"
      color="white"
    >
      <Heading ref={ref}></Heading>
      <Section
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        height="100vh"
      >
        <Avatar src={avatarIMG} size="2xl"></Avatar>
        <Text fontWeight="bold">{greeting}</Text>
        <Heading>{bio1}</Heading>
        <Heading>{bio2}</Heading>
      </Section>


    </Section>
  )
})

export default Landing
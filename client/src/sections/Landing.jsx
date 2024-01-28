import React, { forwardRef, useEffect } from 'react'
import Section from '../ui/Section.jsx'
import { Avatar, Box, Container, Heading, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'

import avatarIMG from "../assets/images/profile/profile.png"
import { useGlobalContext } from '../context/GlobalContext.jsx'
import { intro, aboutMe, skills } from "../data/data.js";
import bgKnight from "../assets/images/backgrounds/bg-knight.jpeg"
import bgKnight1 from "../assets/images/backgrounds/bg-knight copy.png"

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
      bgImage={bgKnight}
      bgSize="cover"
      bgPosition="center"
    >
        <SimpleGrid>
          <Heading ref={ref} fontSize="64px" paddingTop="80px">Welcome.</Heading>
          <VStack margin="8" gap="8" alignItems="start" maxWidth="520px">
            <Text>{intro}</Text>
            <Text>{aboutMe}</Text>
            <Avatar marginY="20rem" src={avatarIMG} size="2xl"></Avatar>
            <Text fontWeight="600">{skills}</Text>
          </VStack>
        </SimpleGrid>

    </Section>
  )
})

export default Landing
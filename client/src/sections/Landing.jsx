import React, { forwardRef, useEffect } from 'react'
import Section from '../ui/Section.jsx'
import { Avatar, Box, Container, Heading, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'

import avatarIMG from "../assets/images/profile/profile.png"
import { useGlobalContext } from '../context/GlobalContext.jsx'
import { intro, aboutMe, skills } from "../data/data.js";
import bgBlackGoldFrameIMG from "../assets/images/backgrounds/bg-gold&black-frame.png"
import bgAbstractLines from "../assets/images/backgrounds/abstract-lines.jpeg"
import bgKnight from "../assets/images/backgrounds/bg-knight.jpeg"


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
    return observer.disconnect()
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
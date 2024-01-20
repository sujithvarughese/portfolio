import React, { forwardRef, useEffect } from 'react'
import Section from '../ui/Section.jsx'
import { Avatar, Heading, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'

import avatarIMG from "../assets/images/profile.png"
import { useGlobalContext } from '../context/GlobalContext.jsx'
import { intro, aboutMe, skills } from "../data/data.js";
import bgBlackGoldFrameIMG from "../assets/images/backgrounds/bg-gold&black-frame.png"


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
      bgImage={bgBlackGoldFrameIMG}
      bgSize="cover"
      bgPosition={{ base: "left", lg: "center"}}
    >
        <SimpleGrid>
          <HStack justifyContent="space-between">
            <Heading ref={ref} fontSize="64px">Welcome.</Heading>
            <Avatar src={avatarIMG} size="2xl"></Avatar>
          </HStack>

          <VStack margin="8" gap="8" alignItems="start">
            <Text>{intro}</Text>
            <Text>{aboutMe}</Text>
            <Text>{skills}</Text>
          </VStack>
        </SimpleGrid>

    </Section>
  )
})

export default Landing
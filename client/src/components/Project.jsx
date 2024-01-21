import { Box, Button, ButtonGroup, Card, CardBody, CardHeader, Container, Flex, Heading, HStack, Icon, Image, Link, SimpleGrid, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { FaCircleArrowRight } from "react-icons/fa6";
import {IoLogoGithub, IoRocketSharp} from "react-icons/io5";
import bgBlur from "../assets/images/backgrounds/bg-blur.jpeg"
import { useState } from 'react'
import ProjectModal from "./ProjectModal.jsx"
import PhoneImageContainer from '../ui/PhoneImageContainer.jsx'
import DesktopMobileImageContainer from '../ui/DesktopMobileImageContainer.jsx'
const Project = ({ title, coverImage, heading, link, github, captions, images, image, desktop, mobile, index }) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const direction = index % 2 === 0 ? "row" : "row-reverse"

  return (
    <VStack justifyContent="space-around" alignItems="center">

      {
        index === 0 ?


    <Container display="flex" position="relative" height="500px">
      <PhoneImageContainer image={images[0]}/>
      <PhoneImageContainer image={images[1]}/>
      <PhoneImageContainer image={images[2]}/>
    </Container>

          :
    <Box>
      {/*<Image src={image} alt="image"></Image>*/}
      <DesktopMobileImageContainer desktop={desktop} mobile={mobile} />
    </Box>

      }




      <VStack display="flex" flexDir="column" gap="9px" alignItems="center">
        <HStack>
          <Heading fontSize="20px">{title}</Heading>
        </HStack>


        <Text color="whitesmoke">{heading}</Text>

        <ButtonGroup fontSize="24px">
          <Link href={link} target="_blank" rel="noreferrer" onClick={e=>e.stopPropagation()}><HStack><IoRocketSharp /><Text>Go Live!</Text></HStack></Link>
          <Link href={github} target="_blank" rel="noreferrer" onClick={e=>e.stopPropagation()}><HStack><IoLogoGithub /><Text>Github</Text></HStack></Link>
          <Icon as={FaCircleArrowRight} onClick={onOpen} fontSize="32px" alignSelf="flex-end" marginBottom="3" marginRight="3"></Icon>
        </ButtonGroup>
      </VStack>

      { isOpen && <ProjectModal isOpen={isOpen} onClose={onClose} captions={captions} images={images} image={image} coverImage={coverImage}/> }


    </VStack>





  )
}

export default Project
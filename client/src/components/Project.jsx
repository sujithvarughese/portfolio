import { Box, Button, ButtonGroup, Card, CardBody, CardHeader, Container, Flex, Heading, HStack, Icon, Image, Link, ListItem, SimpleGrid, Stack, Text, UnorderedList, useDisclosure, VStack } from '@chakra-ui/react'
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
    <Stack flexDirection={{md: "column", xl: direction }} justifyContent="space-between">

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




      <SimpleGrid>
        <HStack justifyContent="space-between">
          <Heading fontSize="28px" textTransform="uppercase">{title}</Heading>
          <ButtonGroup fontSize="20px">
            <Link href={link} target="_blank" rel="noreferrer"><HStack><IoRocketSharp /><Text>Launch Demo</Text></HStack></Link>
            <Link href={github} target="_blank" rel="noreferrer"><HStack><IoLogoGithub /><Text>Code</Text></HStack></Link>
          </ButtonGroup>
        </HStack>

        <Text color="whitesmoke" fontSize="18px" fontWeight="600">{heading}</Text>

        <UnorderedList>
          {captions.map((caption, index) => <ListItem key={index}>{caption}</ListItem>)}
        </UnorderedList>


      </SimpleGrid>

      { isOpen && <ProjectModal isOpen={isOpen} onClose={onClose} captions={captions} images={images} image={image} coverImage={coverImage}/> }


    </Stack>





  )
}

export default Project
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
    <Stack
      flexDirection={{md: "column", lg: direction }}
      gap="42px"
      justifyContent="space-between"
    >

      {
        index === 0 ?
      <Container display="flex" position="relative">
        <PhoneImageContainer images={images}/>
      </Container>

            :
      <Box>
        {/*<Image src={image} alt="image"></Image>*/}
        <DesktopMobileImageContainer desktop={desktop} mobile={mobile} />
      </Box>

      }

      <SimpleGrid
        gap="24px"
        maxWidth={{lg: "240px", xl: "420px" }}
      >


        <Heading fontSize="28px" textTransform="uppercase">{title}</Heading>


        <Text color="whitesmoke" fontSize="18px" fontWeight="600">{heading}</Text>

        <UnorderedList spacing="12px">
          {captions.map((caption, index) => <ListItem key={index}>{caption}</ListItem>)}
        </UnorderedList>

        <ButtonGroup fontSize="20px" gap="8px" maxHeight="45px">
          <Link sx={{ color: "gray", border: "gray 2px solid", borderRadius: "5px", padding: "5px", minWidth: "141px", textAlign: "center" }}
                href={link} target="_blank" rel="noreferrer">
            Launch Demo
          </Link>
          <Link sx={{ color: "gray", border: "gray 2px solid", borderRadius: "5px", padding: "5px", minWidth: "141px", textAlign: "center" }}
                href={github} target="_blank" rel="noreferrer">
            View Code
          </Link>
        </ButtonGroup>

      </SimpleGrid>

      {/*
        // not in use
        isOpen && <ProjectModal isOpen={isOpen} onClose={onClose} captions={captions} images={images} image={image} coverImage={coverImage}/>
      */}


    </Stack>





  )
}

export default Project
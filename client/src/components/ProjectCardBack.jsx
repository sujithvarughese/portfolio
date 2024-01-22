import React from 'react'
import { Box, Card, CardBody, Container, Heading, Icon, Image, ListItem, SimpleGrid, Text, UnorderedList } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import ProjectPreview from './ProjectPreview.jsx'
import { FaCircleArrowLeft } from 'react-icons/fa6'
import PhoneImageContainer from '../ui/PhoneImageContainer.jsx'
import DesktopMobileImageContainer from '../ui/DesktopMobileImageContainer.jsx'


const ProjectCardBack = ({ captions, images, image, desktop, mobile, link, github, flipCard, index }) => {
  return (
    <Card height={{base: "600px", sm: "700px"}} onClick={flipCard}>
      <CardBody paddingBottom="0" >
        {/*<AnimatePresence>
          <ProjectPreview captions={captions} images={images} />
        </AnimatePresence>*/}

        {
          index === 0 ?


            <Container display="flex" position="relative" height={{ base: "260px", sm: "450px" }}>
              <PhoneImageContainer image={images[0]}/>
              <PhoneImageContainer image={images[1]}/>
              <PhoneImageContainer image={images[2]}/>
            </Container>

            :
            <SimpleGrid placeItems="center" margin="auto" alignItems="center" justifyItems="center" justifyContent="center">
              {/*<Image src={image} alt="image"></Image>*/}
              <DesktopMobileImageContainer desktop={desktop} mobile={mobile} />
            </SimpleGrid>

        }

        <UnorderedList spacing="3" paddingY="5">
          {
            captions.map((caption, index) => <ListItem key={index}>{caption}</ListItem>)
          }
        </UnorderedList>

      </CardBody>
      <Icon as={FaCircleArrowLeft} fontSize="32px" alignSelf="flex-start" marginBottom="3" marginLeft="3"></Icon>
    </Card>
  )
}

export default ProjectCardBack
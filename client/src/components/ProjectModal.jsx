import React from 'react'
import { Card, CardBody, Heading, Icon, Image, Modal, ModalContent, ModalOverlay, Text, useDisclosure, keyframes, HStack, VStack, Box, UnorderedList, ListItem } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import ProjectPreview from './ProjectPreview.jsx'
import { FaCircleArrowLeft } from 'react-icons/fa6'
import bgSpotlightIMG from "../assets/images/backgrounds/bg-spotlight.jpeg"
import bgTableIMG from "../assets/images/backgrounds/bg-table.jpeg"
import bgBlackGoldExhibit from "../assets/images/backgrounds/black-gold-exhibit.jpeg"
const ProjectModal = ({ isOpen, onClose, captions, coverImage, images, image, link, github }) => {

  return (
    <Modal isOpen={isOpen} isCentered onClose={onClose}>
      <ModalOverlay>
        <ModalContent placeItems="center" borderRadius="20px">
          <Card
            width="80vw"
            minWidth="470px"
            maxWidth="800px"
            bgImage={bgBlackGoldExhibit}
            bgSize="cover"
            bgPosition="bottom"
            borderRadius="20px"
          >
            <CardBody paddingBottom="0">

              <AnimatePresence>
                <ProjectPreview captions={captions} images={images} image={image}/>
              </AnimatePresence>

              <HStack>
                <Box>
                  <Image src={coverImage} alt="cover-img" width="200px"></Image>
                </Box>
                <UnorderedList color="white">
                  {captions.map((caption, index) => <ListItem key={index}>{caption}</ListItem>)}
                </UnorderedList>
              </HStack>

            </CardBody>
            <Icon as={FaCircleArrowLeft} fontSize="32px" alignSelf="flex-start" marginBottom="3" marginLeft="3"></Icon>
          </Card>
        </ModalContent>
      </ModalOverlay>
    </Modal>

  )
}

export default ProjectModal
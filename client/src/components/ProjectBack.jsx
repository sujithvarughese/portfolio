import React from 'react'
import { Card, CardBody, Heading, Icon, Modal, ModalContent, ModalOverlay, Text, useDisclosure, keyframes } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import ProjectPreview from './ProjectPreview.jsx'
import { FaCircleArrowLeft } from 'react-icons/fa6'
import bgSpotlightIMG from "../assets/images/backgrounds/bg-spotlight.jpeg"
import bgTableIMG from "../assets/images/backgrounds/bg-table.jpeg"

const ProjectBack = ({ captions, images, link, github, flipCard, isFlipped }) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const spin = keyframes`
    from {transform: rotateY(90deg); opacity: 0; scale: (2%)}
    to {transform: rotateY(0deg); opacity: 1;  }
  `;
  const spinAnimation = `${spin} 1 1s ease-in-out`;

  return (
    <Modal isOpen={isFlipped} isCentered onClose={flipCard}>
      <ModalOverlay>
        <ModalContent placeItems="center">
          <Card
            height="80vh"
            width="80vw"
            maxWidth="800px"
            onClick={flipCard}
            bgImage={bgSpotlightIMG}
            bgSize="cover"
            bgPosition="center"
            borderRadius="20px"
          >
            <CardBody paddingBottom="0">
              <AnimatePresence>
                <ProjectPreview captions={captions} images={images} />
              </AnimatePresence>
            </CardBody>
            <Icon as={FaCircleArrowLeft} fontSize="32px" alignSelf="flex-start" marginBottom="3" marginLeft="3"></Icon>
          </Card>
        </ModalContent>
      </ModalOverlay>
    </Modal>

  )
}

export default ProjectBack
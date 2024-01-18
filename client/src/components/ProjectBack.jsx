import React, { useState } from 'react'
import { Card, CardBody, Heading, Icon, Modal, ModalContent, ModalOverlay, Text, useDisclosure, keyframes } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import ProjectPreview from './ProjectPreview.jsx'
import { FaCircleArrowLeft } from 'react-icons/fa6'


const ProjectBack = ({ captions, images, link, github, flipCard, isFlipped }) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const spin = keyframes`
    from {transform: rotateY(180deg); opacity: 0;  }
    to {transform: rotateY(0deg); opacity: 1;  }
  `;
  const spinAnimation = `${spin} 1 .4s ease-in-out`;

  const animatedClose = keyframes`
    0% {
    transform: rotateY(0);
    filter: hue-rotate(0);
    } 
    80% {
    transform: rotateY(360deg);
      filter: hue-rotate(180deg);
      opacity: 1;
    } 
    100% {
      opacity: 0;
      display: none;
    }`

  const [close, setClose] = useState(false)

  const closeModal = () => {
    setClose(true)
    setTimeout(() => {
      flipCard()
    }, 2000)

  }
  const setAnimation = close ? animatedClose : spinAnimation
  return (
    <Modal isOpen={isFlipped} isCentered motionPreset="scale" onClose={closeModal}>
      <ModalOverlay>
        <ModalContent placeItems="center" animation={setAnimation}>
          <Card height="80vh" width="80vw" maxWidth="800px" onClick={flipCard}>
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
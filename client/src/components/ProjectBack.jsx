import React from 'react'
import { Card, CardBody, Heading, Icon, Text } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import ProjectPreview from './ProjectPreview.jsx'
import { FaCircleArrowLeft } from 'react-icons/fa6'


const ProjectBack = ({ captions, images, link, github, flipCard }) => {
  return (
    <Card height="600px" onClick={flipCard}>
      <CardBody paddingBottom="0">
        <AnimatePresence>
          <ProjectPreview captions={captions} images={images} />
        </AnimatePresence>
      </CardBody>
      <Icon as={FaCircleArrowLeft} fontSize="32px" alignSelf="flex-start" marginBottom="3" marginLeft="3"></Icon>
    </Card>
  )
}

export default ProjectBack
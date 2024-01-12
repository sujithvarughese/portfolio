import React from 'react'
import { Card, CardBody, Heading, Text } from '@chakra-ui/react'

const ProjectBack = ({ title, coverImage, desktopImage, mobileImage, heading, captions, link, github, previews, flipCard }) => {
  return (
    <Card height="500px">
      <Heading>Back of Card</Heading>
      <CardBody>

      </CardBody>
      <Text onClick={flipCard}>Back</Text>
    </Card>
  )
}

export default ProjectBack
import { Box, Card, CardBody, CardHeader, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import ReactCardFlip from 'react-card-flip'
import { useState } from 'react'
const ProjectFront = ({ title, coverImage, desktopImage, mobileImage, heading, captions, link, github, previews, flipCard }) => {

  return (
    <Card height="550px" borderRadius="11px" boxShadow="dark-lg">
      <Image src={coverImage} alt="cover" borderRadius="10px" width="100%"></Image>

        <CardBody display="flex" flexDir="column" gap="9px">
          <Heading fontSize="20px">{title}</Heading>
          <Text color="gray.600">{heading}</Text>
        </CardBody>

      <Text onClick={flipCard}>More Info</Text>
    </Card>





  )
}

export default ProjectFront
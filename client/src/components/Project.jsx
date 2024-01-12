import { Card, CardBody, CardHeader, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'

const Project = ({ title, coverImage, desktopImage, mobileImage, heading, captions, link, github, previews }) => {
  return (
    <Card boxShadow="dark-lg" borderRadius="10px">
      <VStack>
        <Image src={coverImage} alt="cover" borderRadius="10px" height="320px" width="100%"></Image>

        <CardBody display="flex" flexDir="column" gap="9px">
          <Heading fontSize="20px">{title}</Heading>
          <Text>{heading}</Text>
        </CardBody>

      </VStack>
    </Card>
  )
}

export default Project
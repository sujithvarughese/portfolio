import { Box, Button, ButtonGroup, Card, CardBody, CardHeader, Heading, HStack, Icon, Image, Link, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import { FaCircleArrowRight } from "react-icons/fa6";
import {IoLogoGithub, IoRocketSharp} from "react-icons/io5";
import bgBlur from "../assets/images/backgrounds/bg-blur.jpeg"
const ProjectCardFront = ({ title, coverImage, heading, link, github, flipCard }) => {

  return (
    <Card minHeight={{base: "500px", sm: "575px"}} borderRadius="11px" boxShadow="dark-lg" onClick={flipCard}>
      <Image src={coverImage} alt="cover" borderRadius="10px"></Image>

      <CardBody display="flex" flexDir="column" gap="5px">
        <Heading fontSize="20px">{title}</Heading>
        <Text color="gray.600">{heading}</Text>

        <ButtonGroup fontSize="24px" justifyContent="space-around" placeItems="center" marginTop="10px" >
          <Link href={link} target="_blank" rel="noreferrer" onClick={e=>e.stopPropagation()}><HStack><IoRocketSharp /><Text>Demo</Text></HStack></Link>
          <Link href={github} target="_blank" rel="noreferrer" onClick={e=>e.stopPropagation()}><HStack><IoLogoGithub /><Text>Code</Text></HStack></Link>
        </ButtonGroup>
      </CardBody>

      <HStack justifyContent="space-between" margin="4">

        <Icon as={FaCircleArrowRight} fontSize="32px" alignSelf="flex-end"></Icon>
      </HStack>

    </Card>





  )
}

export default ProjectCardFront
import ReactCardFlip from 'react-card-flip'
import { Card, CardBody, Heading, Image, Text, VStack } from '@chakra-ui/react'
import ProjectFront from '../components/ProjectFront.jsx'
import ProjectBack from '../components/ProjectBack.jsx'
import { useState } from 'react'

const ProjectCard = ({ project }) => {

  const [isFlipped, setIsFlipped] = useState(false)
  const flipCard = () => setIsFlipped(!isFlipped)

  return (
    <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped} boxShadow="dark-lg">
      <ProjectFront { ...project } flipCard={flipCard} isFlipped={isFlipped}/>
      <ProjectBack { ...project } flipCard={flipCard} isFlipped={isFlipped}/>
    </ReactCardFlip>
  )
}

export default ProjectCard
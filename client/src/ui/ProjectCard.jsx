import ReactCardFlip from 'react-card-flip'
import { Card, CardBody, Heading, Image, Text, VStack } from '@chakra-ui/react'
import ProjectFront from '../components/ProjectFront.jsx'
import ProjectBack from '../components/ProjectBack.jsx'
import { useEffect, useRef, useState } from 'react'

const ProjectCard = ({ project }) => {

  const [isFlipped, setIsFlipped] = useState(false)
  const flipCard = () => setIsFlipped(!isFlipped)


  return (
    <>
      <ProjectFront { ...project } flipCard={flipCard} isFlipped={isFlipped} />
      <ProjectBack { ...project } flipCard={flipCard} isFlipped={isFlipped} />
    </>
  )
}

export default ProjectCard
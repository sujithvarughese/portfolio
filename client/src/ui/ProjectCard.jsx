import ReactCardFlip from 'react-card-flip'
import ProjectCardFront from '../components/ProjectCardFront.jsx'
import ProjectCardBack from '../components/ProjectCardBack.jsx'
import { useState } from 'react'

const ProjectCard = ({ project, index }) => {

  const [isFlipped, setIsFlipped] = useState(false)
  const flipCard = () => setIsFlipped(!isFlipped)


  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <ProjectCardFront { ...project } flipCard={flipCard} isFlipped={isFlipped} />
      <ProjectCardBack { ...project } flipCard={flipCard} isFlipped={isFlipped} index={index}/>
    </ReactCardFlip>
  )
}

export default ProjectCard
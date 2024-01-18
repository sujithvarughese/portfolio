import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Box, Button, ButtonGroup, HStack, Image, VStack } from '@chakra-ui/react'
import {FaAngleLeft, FaAngleRight, FaCircleArrowLeft, FaCircleArrowRight} from "react-icons/fa6";

const ProjectPreview = ({ captions, images }) => {

  const elementRef = useRef(null)
  const handleHorizontalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };

  return (
    <motion.div initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{y: -100, opacity: 0 }}
                style={{
                  scrollBehavior: "smooth", display: "flex", margin: "30px"
    }}
    >
      <VStack margin="auto">

        <HStack ref={elementRef} gap="2rem" overflowX="scroll" alignItems="flex-start" >
          {images.map((image, index) =>

              <Image
                key={index}
                borderRadius="11"
                border="black solid 8px"
                src={image}
                alt="image"
                height="640px"
                objectFit="cover"
              />


          )}
        </HStack>

        <ButtonGroup colorScheme="green">
          <Button
            onClick={(e)=> {
              e.stopPropagation()
              handleHorizontalScroll(elementRef.current, 25, 100, -10)
            }}
          ><FaAngleLeft />
          </Button>
          <Button
            onClick={(e)=> {
              e.stopPropagation()
              handleHorizontalScroll(elementRef.current, 25, 100, 10)
            }}
          >
            <FaAngleRight />
          </Button>
        </ButtonGroup>

      </VStack>
    </motion.div>
  )
}

export default ProjectPreview
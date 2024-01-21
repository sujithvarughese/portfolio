import phone from "../assets/images/backgrounds/phone-angled.png"
import { Box, Container, Image } from '@chakra-ui/react'
import fitnessBrowseIMG from "../assets/images/simpler-fitness/browse.png"
import fitnessSearchIMG from "../assets/images/simpler-fitness/search.png"
import fitnessInstructionsIMG from "../assets/images/simpler-fitness/instructions.png"
const PhoneImageContainer = ({ image }) => {
  return (

      <Container
        sx={{ perspective: "100em"}}
        position="relative"
      >
        <Image
          src={phone}
          position="absolute"
          top="0px"
          left={{ base: "8px", md: "13px" }}
          width={{base: "96%", md: "97%" }}
        >

        </Image>
        <Image
          src={image}
          alt="fit1"
          transform={{base: "rotateY(326deg) skewY(0deg)", md: "rotateY(332deg) skewY(.5deg)"}}
          borderTopRadius={{base: "22", md: "28px"}}
          borderBottomLeftRadius={{ base: "21px", md: "35px" }}
          borderBottomRightRadius={{ base: "21px", md: "30px" }}
          position="absolute"
          top={{ base: "8px", md: "15px"}}
          left="0"
        />
      </Container>



  )
}

export default PhoneImageContainer
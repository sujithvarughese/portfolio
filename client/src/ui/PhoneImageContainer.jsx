import phone from "../assets/images/backgrounds/phone-angled.png"
import { Box, Container, Image } from '@chakra-ui/react'
import fitnessBrowseIMG from "../assets/images/simpler-fitness/browse.png"
import fitnessSearchIMG from "../assets/images/simpler-fitness/search.png"
import fitnessInstructionsIMG from "../assets/images/simpler-fitness/instructions.png"
const PhoneImageContainer = () => {
  return (
      <Container
        sx={{ perspective: "220em"}}
        position="relative"
      >
        <Image
          src={phone}
          position="absolute"
          top="0px"
          left="25px"
          width="305px"
          height="740px"
        >

        </Image>
        <Image
          src={fitnessBrowseIMG}
          alt="fit1"
          transform="rotateY(327deg) skewY(-3.5deg)"
          borderRadius="50px"
          position="absolute"
          top="20px"
          left="0"
          width="327px"
          overflow="hidden"

        />
      </Container>

  )
}

export default PhoneImageContainer
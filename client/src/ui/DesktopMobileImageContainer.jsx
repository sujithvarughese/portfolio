import mobileScreen from "../assets/images/backgrounds/smartphone.png";
import desktopScreen from "../assets/images/backgrounds/monitor.png";
import { Box, Container, HStack, Image } from '@chakra-ui/react'
const DesktopMobileImageContainer = ({ desktop, mobile }) => {

  return (
    <Container>
      <HStack
        alignItems="flex-end"
        position="relative"
        zIndex="0"
        gap="0"
      >
        <Box>
          <Image
            src={desktopScreen}
            maxWidth={{base: "260px", md: "600px" }}
            height={{ base: "210px", md: "430px"}}
            borderRadius="18px"
          ></Image>
        </Box>

        <Box>
          <Image
            zIndex="10"
            src={mobileScreen}
            position="absolute"
            maxWidth={{ base: "65px", md: "150px"}}
            bottom={{ base: "0", md: "0"}}
            left={{ base: "210px", md: "500px" }}
          ></Image>
        </Box>


        <Image
          src={desktop}
          position="absolute"
          width={{ base: "242px", md: "562px" }}
          height={{ base: "182px", md: "380px" }}
          top={{ base: "13px", md: "22px" }}
          left={{ base: "9px", md: "18px" }}
          borderRadius="1px"
        ></Image>
        <Image
          zIndex="20"
          src={mobile}
          position="absolute"
          width={{ base: "59px", md: "134px" }}
          height={{ base: "124px", md: "285px" }}
          bottom={{ base: "3px", md: "8px" }}
          left={{ base: "213px", md: "508px" }}
          borderRadius={{base: "10px", md: "18px"}}
        ></Image>
      </HStack>
    </Container>

  )
}

export default DesktopMobileImageContainer
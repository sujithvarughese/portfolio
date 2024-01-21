import mobileScreen from "../assets/images/backgrounds/smartphone.png";
import desktopScreen from "../assets/images/backgrounds/monitor.png";
import { Box, Container, HStack, Image } from '@chakra-ui/react'
const DesktopMobileImageContainer = ({ desktop, mobile }) => {

  return (
    <HStack
      alignItems="flex-end"
      position="relative"
      zIndex="0"
    >
      <Box>
        <Image
          src={desktopScreen}
          maxWidth={{base: "300px", md: "600px" }}
          height={{ base: "230px", md: "430px"}}
          borderRadius="18px"
        ></Image>
      </Box>
      <Box>
        <Image src={mobileScreen} maxWidth={{ base: "80px", md: "150px"}}></Image>
      </Box>

      <Image
        src={desktop}
        position="absolute"
        width={{ base: "280px", md: "562px" }}
        height={{ base: "200px", md: "380px" }}
        top={{ base: "14px", md: "22px" }}
        left={{ base: "10px", md: "18px" }}
        borderRadius="1px"
      ></Image>
      <Image
        src={mobile}
        position="absolute"
        width={{ base: "72px", md: "133px" }}
        height={{ base: "152px", md: "285px" }}
        bottom={{ base: "4px", md: "8px" }}
        right={{ base: "4px", md: "8px" }}
        borderRadius={{base: "10px", md: "18px"}}
      ></Image>

    </HStack>
  )
}

export default DesktopMobileImageContainer
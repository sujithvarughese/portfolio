import { VStack } from '@chakra-ui/react'

const Section = (props) => {
  return (
    <VStack
      backgroundColor={props.backgroundColor}
      color={props.color}
    >
      <VStack maxWidth="1280px" width="100%" minHeight="100vh" {...props}>
        { props.children }
      </VStack>
    </VStack>
  )
}

export default Section
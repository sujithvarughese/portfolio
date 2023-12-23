import styled from "styled-components";
import { motion } from "framer-motion"

const StyledButtonIcon = styled(motion.button)`
	cursor: pointer;
	border: none;
    background-color: ${props=> props.backgroundColor || "inherit"};
    color: ${props => props.color || "var(--COLOR)"};
    font-size: ${props => props.fontSize || "inherit"};
	border-radius: 6px;
	transition: 0.2s ease-in-out all;
  

  @media (min-width: 640px) {
    font-size: 36px;
    &:hover {
      color: ${props=> props.hoverColor || "var(--COLOR-ALT)"};
    }
  }
`

const ButtonIcon = (props) =>
    <StyledButtonIcon
        { ...props }
        whileHover={{ scale: 1.03 }}
    >
        {props.children}
    </StyledButtonIcon>

export default ButtonIcon;
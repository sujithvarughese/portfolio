import styled from "styled-components";
import { motion } from "framer-motion"

const StyledButtonIcon = styled(motion.button)`
	cursor: pointer;
	border: none;
    background-color: ${props=> props.backgroundColor || "inherit"};
    color: ${props => props.color || "inherit"};
    font-size: ${props => props.fontSize || "inherit"};
	border-radius: 6px;
	transition: 0.2s ease-in-out all;
  
	&:hover {
		color: var(--COLOR-ALT);
	}
`

const ButtonIcon = (props) =>
    <StyledButtonIcon
        { ...props }
        whileHover={{ scale: 1.1 }}
    >
        {props.children}
    </StyledButtonIcon>

export default ButtonIcon;
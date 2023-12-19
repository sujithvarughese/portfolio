import styled from "styled-components";
import { motion } from "framer-motion"

const StyledButton = styled(motion.button)`
  background-color: ${props=> props.backgroundColor || "var(--COLOR)"};
  color: ${props => props.color || "#fefefe"};
  font-size: ${props => props.fontSize || "inherit"};
  width: ${props => props.width || "100%"};;
  gap: ${props => props.gap || "0.5rem"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;

  border: none;
  border-radius: 6px;
  padding: 17px 6px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
  0 2px 4px -1px rgba(0, 0, 0, 0.1);
  transition: 0.2s ease-in-out all;

  &:hover {
    color: var(--COLOR-ALT);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: 4px auto -webkit-focus-ring-color;
    outline-offset: -1px;
  }
  
  @media(min-width: 640px) {
    padding: 11px;
    width: 200px;
  }
`

const Button = (props) =>
    <StyledButton
        { ...props }
        whileHover={{ scale: 1.1 }}
    >
        {props.children}
    </StyledButton>

export default Button
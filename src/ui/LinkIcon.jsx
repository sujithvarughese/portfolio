import styled from "styled-components";
import { motion } from "framer-motion";
import {IoLogoGithub, IoRocketSharp} from "react-icons/io5";
import {FaPhone} from "react-icons/fa6";
import {RiMailSendFill} from "react-icons/ri";
const icons = {
    "launch": <IoRocketSharp />,
    "github": <IoLogoGithub />,
    "phone": <FaPhone />,
    "email": <RiMailSendFill />

}
const StyledLinkIcon = styled(motion.div)`
  cursor: pointer;
  border: none;
  font-size: ${props=> props.fontSize || "inherit"};
  color: ${props => props.color || "var(--COLOR)"};
  z-index: 10;
  transition: 0.2s ease-in-out all;
  &:hover {
    color: var(--COLOR-ALT);
  }
`

const LinkIcon = ({ icon, link, label, textFont, ...props }) =>
    <StyledLinkIcon
        { ...props }
        whileHover={{ scale: 1.1 }}
    >
        <a href={link} style={{display: "flex", alignItems: "center", gap: "0.3rem"}} target="_blank" rel="noreferrer">{icons[icon]}<span style={{fontSize: textFont}}> {label}</span></a>
    </StyledLinkIcon>



export default LinkIcon
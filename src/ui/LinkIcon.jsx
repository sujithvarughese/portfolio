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
  font-size: ${props=> props.fontSize || "inherit"};
  color: ${props => props.color || "var(--COLOR-DARK)"};
  z-index: 10
`

const LinkIcon = ({ icon, link, label, ...props }) =>
    <StyledLinkIcon { ...props }>
        <a href={link} target="_blank" rel="noreferrer">{icons[icon]}<span>{label}</span></a>
    </StyledLinkIcon>



export default LinkIcon
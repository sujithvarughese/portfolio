import styled from "styled-components";
import { motion } from "framer-motion"

const StyledForm = styled(motion.form)`
	display: flex;
	flex-direction: column;
`
const Title = styled.div`
	font-weight: 400;
	font-size: 28px;
	text-align: center;
	color: ${props => props.color || "inherit"};
`
const Form = ({ title, ...props }) => {
	return (
		<StyledForm {...props}
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			exit={{ scale: 0, opacity: 0 }}
		>
			{title && <Title {...props} >{title}</Title>}
			{props.children}
		</StyledForm>
	)
}

export default Form;
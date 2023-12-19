import styled from "styled-components";

const ButtonPlain = styled.button`
    cursor: pointer;
    border: none;
    transition: 0.2s ease-in-out all;
  background-color: ${props=> props.backgroundColor || "inherit"};
  color: ${props => props.color || "var(--COLOR)"};
  font-size: ${props => props.fontSize || "inherit"};


  
	&:hover {
		color: var(--COLOR-ALT);
	}
`
export default ButtonPlain;
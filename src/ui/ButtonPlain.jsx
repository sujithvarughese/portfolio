import styled from "styled-components";

const ButtonPlain = styled.button`
    cursor: pointer;
    border: none;
    transition: 0.2s ease-in-out all;
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    background-color: inherit;
  
	&:hover {
		color: var(--COLOR-ALT);
	}
`
export default ButtonPlain;
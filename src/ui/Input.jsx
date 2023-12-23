import styled from "styled-components"

const Input = styled.input`
    width: 100%;
	padding: 0.5rem;
    line-height: 1;
    font: inherit;
    color: var(--COLOR-DARK);
	border-radius: 5px;
	border: 1px solid #bcccdc;
	box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
	0 10px 10px -5px rgba(0, 0, 0, 0.04);
    background-color: #FFF8EC;
  
	&:focus {
	outline: 4px auto -webkit-focus-ring-color;
	outline-offset: -1px;
	}

`

export default Input
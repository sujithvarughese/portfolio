import styled from "styled-components";

const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #bcccdc;
  border-radius: 5px;
  height: 270px;
  font: inherit;
  width: 100%;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
  0 10px 10px -5px rgba(0, 0, 0, 0.04);
  resize: none;
  overflow:auto;
  background-color: var(--COLOR-BACKGROUND);
  
  &:focus {
    outline: 4px auto -webkit-focus-ring-color;
    outline-offset: -1px;
  }

`;

export default Textarea;

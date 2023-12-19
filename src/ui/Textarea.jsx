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
  background-color: var(--COLOR-LIGHTER);
  
  &:focus {
    outline: 4px auto -webkit-focus-ring-color;
    outline-offset: -1px;
  }
  @media (min-width: 361px) {
    height: 300px;
  }
  @media (min-width: 391px) {
    height: 380px;
  }
  @media (min-width: 431px) {
    height: 300px;
  }
  @media (min-width: 769px) {
    height: 350px;
  }
  @media (min-width: 821px) {
    height: 400px;
  }
  @media (min-width: 1000px) {
    height: 500px;
  }
  @media (min-width: 1025px) {
    height: 650px;
  }
  @media (min-width: 1201px) {
    height: 800px;
  }
  @media (min-width: 1281px) {
    height: 850px;
  }
  @media (min-width: 1441px) {
    height: 1000px;
  }
`;

export default Textarea;

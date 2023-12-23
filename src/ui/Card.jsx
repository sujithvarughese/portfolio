import styled from "styled-components";

const Card = styled.div`
  background-color: #fefefe;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.8),
  0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: 0.3s ease-in-out all;
  display: flex;
  flex-direction: column;


  @media (min-width: 640px) {
    &:hover {
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
  }
  
`

export default Card
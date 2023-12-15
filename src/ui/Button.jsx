import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  color: #fefefe;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  font-weight: 600;
  background: var(--COLOR);
  border: none;
  border-radius: 6px;
  padding: 17px 11px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
  0 2px 4px -1px rgba(0, 0, 0, 0.1);
  transition: 0.2s ease-in-out all;

  &:hover {
    color: var(--COLOR-DARK);
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

export default Button
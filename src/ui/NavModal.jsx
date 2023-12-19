import styled from "styled-components";
import {createPortal} from "react-dom";

const StyledNavModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  z-index: 100;
  padding: 1rem;
  width: 80vw;
`
const Backdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  padding: 5rem;
  overflow-y: auto;
  z-index: 100;
`
const NavModal = ({ closeFn, children }) => {
    return createPortal(
        <Backdrop onClick={closeFn}>
            <StyledNavModal onClick={(e) => e.stopPropagation()}>
                {children}
            </StyledNavModal>
        </Backdrop>
        , document.getElementById("modal"))

}

export default NavModal
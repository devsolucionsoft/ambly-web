import styled from "styled-components"

export const StyledModalBody = styled.div`
  padding-top: 10px;
  color: ${(props) => props.theme.colors.ligth};
`

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
  position: absolute;
  right: 0;
  top: 0;

  .button-close {
    background-color: transparent;
    border: none;
    cursor: pointer;
    .icon {
      color: #ffffff;
      font-size: 3rem;
    }
  }
`

export const StyledModal = styled.div`
  position: relative;
  background: ${(props) => props.theme.colors.dark};
  width: 40vw;
  border-radius: 15px;
  padding: 3em 2em 4em 2em;
  @media (max-width: ${(props) => props.theme.sizes.md}) {
    width: 80vw;
  }
`
export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 20;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`

export const StyledModalTitle = styled.h2`
  text-align: center;
  margin-bottom: 1em;
  color: ${(props) => props.theme.colors.ligth};
`

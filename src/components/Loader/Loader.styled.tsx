import styled, { keyframes } from "styled-components"

const ldsripple = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Main = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #000000ab;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 10;

  .lds-ring {
    display: inline-block;
    position: relative;
    width: 65px;
    height: 65px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 65px;
    height: 65px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: ${ldsripple} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
`

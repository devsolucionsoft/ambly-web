import styled from "styled-components"

export const Main = styled.header`
  position: fixed;
  width: 100%;
  z-index: 10;

  .contain {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em 5%;
    background-color: #000000bd;
    width: 100%;

    .open-menu,
    .user,
    .logo {
      cursor: pointer;
    }

    .logo {
      width: 150px;
      height: auto;
    }
  }
`

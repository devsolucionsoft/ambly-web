import styled from "styled-components"

export const Main = styled.header`
  position: fixed;
  width: 100%;
  z-index: 10;

  .contain {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em 5%;
    background-color: #000000bd;
    width: 100%;
    position: relative;
    .open-menu,
    .logo {
      cursor: pointer;
      position: relative;
      z-index: 2;
    }

    .links {
      position: absolute;
      display: flex;
      width: 100%;
      justify-content: center;
      left: 0;
      .link-item {
        margin: 0 1.5rem;
        a {
          color: white;
          font-size: 1.2rem;
          text-decoration: none;
        }
      }
    }

    .logo {
      width: 8rem;
      height: auto;
    }
  }
`

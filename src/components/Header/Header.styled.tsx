import styled from "styled-components"

export const Main = styled.header`
  position: fixed;
  width: 100%;
  z-index: 10;

  .contain {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6em 5% 0.4em 5%;
    background-color: #000000bd;
    width: 100%;
    position: relative;

    @media (max-width: ${(props) => props.theme.sizes.md}) {
      height: 45px;
    }
    .open-menu,
    .logo {
      cursor: pointer;
      position: relative;
      z-index: 2;
      margin-top: 0.3rem;
    }

    .links {
      position: absolute;
      display: flex;
      width: 100%;
      justify-content: center;
      left: 0;
      margin-top: 0.2rem;
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        display: none;
      }
      .link-item {
        margin: 0 1.2rem;
        a {
          color: white;
          font-size: 1.05vw;
          text-decoration: none;
        }
        .icon {
          font-size: 1.5rem;
        }
      }
    }

    .logo {
      width: 7vw;
      height: auto;
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        width: 5rem;
      }
    }
    .open-menu {
      .icon {
        font-size: 1.9vw;
        margin-bottom: 0.3rem;
        @media (max-width: ${(props) => props.theme.sizes.md}) {
          font-size: 1.5rem;
        }
      }
    }
  }
`

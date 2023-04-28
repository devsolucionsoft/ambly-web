import styled from "styled-components"

export const Main = styled.div<{ openNav: boolean }>`
  position: fixed;
  z-index: 15;
  width: 100%;
  height: 100%;
  background-color: #00000077;
  display: flex;
  justify-content: flex-end;
  width: 0%;
  overflow: hidden;

  ${(props) => props.openNav && `width: 100%;`}

  .nav-content {
    background-color: #131313;
    color: white;
    height: 100%;
    position: relative;
    overflow: hidden;
    max-width: 0px;
    padding: 2em 0em 2em 0em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${(props) => props.openNav && `max-width: 400px; padding: 2em 6em 1em 1em;`}
    @media (max-width: ${(props) => props.theme.sizes.md}) {
      ${(props) =>
        props.openNav && `max-width: 280px; padding: 2em 3em 2em 2em;`}
    }

    .logo {
      width: 5rem;
      height: auto;
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        width: 4rem;
      }
    }

    .icon-close {
      position: absolute;
      top: 1em;
      left: 1em;
      cursor: pointer;
      background-color: transparent;
      border: none;
      .icon {
        font-size: 1.5rem;
        color: white !important;
      }
    }
    .menu-title {
      text-align: center;
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 1em;
    }
    .nav-links {
      list-style-type: none;
      margin-top: 2em;
      margin-left: 0em;
      .nav-item {
        display: flex;
        align-items: center;
        color: white;
        font-size: 1rem;
        text-decoration: none;
        margin-bottom: 0.8rem;
        padding-bottom: 0.8rem;
        //border-bottom: 1px solid #6565655a;
        cursor: pointer;
        .icon {
          font-size: 1.3rem;
          margin-right: 1rem;
          color: white;
        }
        @media (max-width: ${(props) => props.theme.sizes.md}) {
          font-size: 0.8rem;
        }
      }
    }
  }
`

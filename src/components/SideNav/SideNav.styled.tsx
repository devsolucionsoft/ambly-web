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
    background-color: ${(props) => props.theme.colors.dark};
    color: white;
    height: 100%;
    padding: 2em 4em 2em 3em;
    position: relative;
    overflow: hidden;
    max-width: 0px;
    padding: 2em 0em 2em 0em;

    ${(props) => props.openNav && `max-width: 20vw; padding: 2em 4em 2em 3em;`}

    .icon-close {
      position: absolute;
      top: 1em;
      left: 1em;
      cursor: pointer;
      background-color: transparent;
      border: none;
      .icon {
        font-size: 2rem;
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
      .nav-item {
        display: flex;
        align-items: center;
        color: white;
        font-size: 1rem;
        text-decoration: none;
        margin-bottom: 0.8rem;
        padding-bottom: 0.8rem;
        border-bottom: 1px solid #6565655a;
        cursor: pointer;
        .icon {
          font-size: 1.3rem;
          margin-right: 1rem;
          color: white;
        }
      }
    }
  }
`

export const FormPassword = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`

import styled from "styled-components"

export const Main = styled.main`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.black};
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 600px) {
    display: none;
  }
  .shops-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 80%;

    .shops {
      display: flex;
      gap: 5vw;
      margin-top: 3em;

      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        font-size: 1.3rem;
        color: #ffffff;
        font-weight: 600;
        border: 1px solid #ffffff;
        padding: 1em;
        border-radius: 1em;
        .icon {
          margin-bottom: 0.5rem;
          font-size: 3rem;
        }
      }
    }
  }
`

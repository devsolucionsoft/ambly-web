import styled from "styled-components"

export const Main = styled.main`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.ligth};
  padding: 5% 0;
  @media (max-width: ${(props) => props.theme.sizes.sm}) {
  }
  .contain {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${(props) => props.theme.sizes.sm}) {
      justify-content: space-evenly;
    }

    .icon {
      width: auto;
      height: auto;
    }

    .divider {
      height: 1px;
      width: 400px;
      background-color: #ffffff74;
      @media (max-width: ${(props) => props.theme.sizes.sm}) {
        width: 80%;
      }
    }

    .init-session {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .shops-section {
      text-align: center;

      .shops {
        margin-top: 1em;
        display: flex;
        gap: 1rem;
        @media (max-width: ${(props) => props.theme.sizes.sm}) {
          flex-direction: column;
          gap: 0.5rem;
        }
        a {
          img {
            width: 250px;
          }
        }
      }
    }
  }
`

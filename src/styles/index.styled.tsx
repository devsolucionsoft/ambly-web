import styled from "styled-components"

export const Main = styled.main`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.ligth};
  padding: 5% 0;
  .contain {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .icon {
      width: auto;
      height: auto;
    }

    .divider {
      height: 1px;
      width: 400px;
      background-color: #ffffff74;
    }

    .init-session {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .shops-section {
      text-align: center;

      .shops {
        display: flex;
        gap: 6em;
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
  }
`

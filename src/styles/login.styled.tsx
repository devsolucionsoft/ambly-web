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
    justify-content: center;

    .form-login {
      width: 30%;
      margin-top: 3em;
      .forget-password {
        margin: 2em 0;
        p {
          text-align: center;
          text-decoration: underline;
          cursor: pointer;
        }
      }
      .politis {
        width: 80%;
        margin-left: 10%;
        p {
          text-align: center;
          span {
            text-align: center;
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }
      .button-contain {
        margin-top: 2em;
      }
    }
  }
`

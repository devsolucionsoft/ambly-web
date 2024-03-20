import styled from "styled-components"

export const Main = styled.main`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.ligth};

  .contain-page {
    h4 {
      font-size : 1.4rem;
    }
    padding: 5em 10% 6em 10%;
    font-size: 0.9rem;
    text-align: left;
    font-weight: 200;
    @media (max-width: ${(props) => props.theme.sizes.md}) {
      h4 {
        font-size : 1.2rem;
      }
    }
  }
`

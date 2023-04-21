import styled from "styled-components"

export const Main = styled.main`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.ligth};

  .contain-page {
    padding: 10em 10% 6em 10%;
  }
`

import styled from "styled-components"

export const Main = styled.main`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.ligth};
  padding: 0% 0;
  .content-page {
    position: relative;
    z-index: 1;
    padding: 10em 15% 6em 15%;

    @media (max-width: ${(props) => props.theme.sizes.md}) {
      padding: 10em 10% 6em 10%;
    }
  }
`

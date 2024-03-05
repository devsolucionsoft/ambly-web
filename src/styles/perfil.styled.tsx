import styled from "styled-components"

export const Main = styled.main`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.ligth};
  padding: 0% 0;
  .content-page {
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    z-index: 1;
    padding: 6em 0;
    width : 100%;

    div {
      width : 375px;
    }


    @media (max-width: ${(props) => props.theme.sizes.md}) {
      padding: 10em 10% 6em 10%;

      div {
        width : 100%;
      }
    }
  }
`

import styled from "styled-components"

export const Main = styled.div`
  width: 100%;
  margin: 3em 0 1.5em 0;
  .contain {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      font-size: 1.3vw;
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        font-size: 1rem;
      }
    }

    .action {
      background-color: transparent;
      border: none;
      font-size: 1vw;
      cursor: pointer;
      color: ${(props) => props.theme.colors.redPrimary};
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        font-size: 0.7rem;
      }
    }
  }
`

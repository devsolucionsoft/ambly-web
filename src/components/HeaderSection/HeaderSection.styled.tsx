import styled from "styled-components"

export const Main = styled.div`
  width: 100%;
  margin: 5em 0 1.5em 0;
  .contain {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .action {
      background-color: transparent;
      border: none;
      font-size: 1.2rem;
      cursor: pointer;
      color: ${(props) => props.theme.colors.redPrimary};
    }
  }
`

import styled from "styled-components"

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4em 6%;
  border-top: 1px solid #ffffff29;
  @media (max-width: ${(props) => props.theme.sizes.md}) {
    flex-direction: column;
    text-align: center;
  }
  .links {
    ul {
      list-style: none;
      .nav-item {
        color: ${(props) => props.theme.colors.ligth};
        font-size: 1rem;
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;
        @media (max-width: ${(props) => props.theme.sizes.md}) {
          justify-content: center;
        }
        .icon {
          margin-right: 1rem;
        }
      }
    }
  }
  .shops-section {
    display: flex;
    align-items: center;
    @media (max-width: ${(props) => props.theme.sizes.md}) {
      flex-direction: column;
      align-items: center;
      margin-top: 4em;
      p {
        text-align: center;
        margin-bottom: 1em;
      }
    }
    .shops {
      display: flex;
      gap: 1em;
      margin-left: 2em;

      @media (max-width: ${(props) => props.theme.sizes.md}) {
        margin-left: 0em;
        gap: 1em;
      }

      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        font-size: 1rem;
        color: #ffffff;
        font-weight: 600;
        border: 1px solid #ffffff;
        padding: 1em;
        border-radius: 1em;
        .icon {
          margin-bottom: 0.5rem;
          font-size: 2.8rem;
        }
      }
    }
  }
`

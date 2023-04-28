import styled from "styled-components"

export const Main = styled.main`
  border-top: 1px solid #ffffff29;
  padding: 4em 13% 2em 13%;
  h3 {
    font-size: 1.2 vw;
  }
  .footer-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media (max-width: ${(props) => props.theme.sizes.md}) {
      width: 100%;
      flex-direction: column;
      text-align: center;
    }
    .item-footer {
      width: 20%;
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        width: 100%;
        margin-bottom: 2em;
      }
    }
    .item-footer-2 {
    }
    .links {
      ul {
        list-style: none;
        .nav-item {
          color: ${(props) => props.theme.colors.ligth};
          font-size: 0.82vw;
          font-weight: 400;
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          text-decoration: none;
          @media (max-width: ${(props) => props.theme.sizes.md}) {
            justify-content: center;
            font-size: 0.7rem;
          }
        }
      }
    }
    .shops-section {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 20%;
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        flex-direction: column;
        align-items: center;
        width: 100%;
        p {
          text-align: center;
          margin-bottom: 0.8em;
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
          font-size: 0.62vw;
          color: #ffffff;
          font-weight: 600;
          border: 1px solid #ffffff;
          padding: 1em;
          border-radius: 1em;
          .icon {
            margin-bottom: 0.5rem;
            font-size: 2.5vw;
          }
          @media (max-width: ${(props) => props.theme.sizes.md}) {
            font-size: 0.62rem;
            .icon {
              font-size: 2.5rem;
            }
          }
        }
      }
    }
  }
  .footer-bottom {
    margin-top: 10em;
    text-align: center;
    font-size: 0.82vw;
    @media (max-width: ${(props) => props.theme.sizes.md}) {
      font-size: 0.82rem;
    }
  }
`

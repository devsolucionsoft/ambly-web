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
            font-size: 0.8rem;
          }
        }
      }
    }
    .shops-section {
      display: flex;
      align-items: flex-start;
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
        flex-direction: column;
        gap: 0.5rem;
        a {
          img {
            width: 150px;
            height: auto;
          }
        }
      }
    }
  }
  .footer-bottom {
    margin-top: 5em;
    text-align: center;
    p{
      font-size: 1.5rem;
    }
    @media (max-width: ${(props) => props.theme.sizes.md}) {
      p{
        font-size: 1rem;
      }
    }
  }
`

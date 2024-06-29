import styled from "styled-components"

export const Main = styled.main`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.ligth};

  .contain-page {
    padding: 5em 20%;
    font-size: 0.9rem;
    text-align: left;
    font-weight: 200;
    @media (max-width: ${(props) => props.theme.sizes.md}) {
      h4 {
        font-size : 1.2rem;
      }
    }
    ol{
      margin-left: 5%;
      list-style-type: decimal;
      li{
        ::marker{
          font-size: 2.3rem;
          font-weight: 500;
          @media (max-width: ${(props) => props.theme.sizes.md}) {
            font-size: 2rem;
          }
        }
        ol{
          li{
            ::marker{
              font-size: 1rem;
              line-height: 160%;
              letter-spacing: 0.05rem;
              @media (max-width: ${(props) => props.theme.sizes.md}) {
                font-size: 0.9rem;
              }
            } 
          }
        }
        .subtitle{
          .subtitle-li{
            ::marker{
              font-size: 1.9rem;
              font-weight: 500;
              @media (max-width: ${(props) => props.theme.sizes.md}) {
                font-size: 1.6rem;
              }
            }
          }
        }
      }
    }
    ul{
      margin-left:5%;
    }
  }
  p{
    font-size: 1rem;
    line-height: 160%;
    letter-spacing: 0.05rem;
    @media (max-width: ${(props) => props.theme.sizes.md}) {
      font-size: 0.9rem;
    }
    a{
      color: cyan;
      text-decoration: none;
      font-size: 1rem;
      line-height: 160%;
      letter-spacing: 0.05rem;
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        font-size: 0.9rem;
      }
    }
  }
`

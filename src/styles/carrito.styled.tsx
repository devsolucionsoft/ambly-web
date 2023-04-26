import styled from "styled-components"

export const Main = styled.main`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.ligth};
  padding: 0% 0;
  .content-page {
    position: relative;
    z-index: 1;
    padding: 10em 15% 6em 15%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: ${(props) => props.theme.sizes.md}) {
      padding: 10em 10% 6em 10%;
    }

    .items-carrito {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin-top: 2em;
      .item-carrito {
        display: flex;
        align-items: center;
        .flex {
          display: flex;
          align-items: center;
        }
        .image {
          width: 20%;
          height: auto;
          border-radius: 10px;
          @media (max-width: ${(props) => props.theme.sizes.md}) {
            width: 30%;
            height: 70px;
            object-fit: cover;
          }
        }
        .delete {
          cursor: pointer;
          font-size: 2rem;
          @media (max-width: ${(props) => props.theme.sizes.md}) {
            font-size: 1.5rem;
            margin-left: 1rem;
          }
        }
        .content {
          margin-left: 2em;
          @media (max-width: ${(props) => props.theme.sizes.md}) {
            margin-left: 1em;
          }
          h3 {
            font-size: 1.5rem;
            @media (max-width: ${(props) => props.theme.sizes.md}) {
              font-size: 1rem;
            }
          }
          h5 {
            font-size: 1.8rem;
            text-align: right;
            color: ${(props) => props.theme.colors.grayText};
            @media (max-width: ${(props) => props.theme.sizes.md}) {
              font-size: 1.2rem;
            }
          }
          .autor {
            h4 {
              font-size: 1.2rem;
              color: ${(props) => props.theme.colors.grayText};
              font-weight: 400;
              @media (max-width: ${(props) => props.theme.sizes.md}) {
                font-size: 0.7rem;
              }
            }
            display: flex;
            align-items: center;
            .icon {
              margin-right: 0.5rem;
              @media (max-width: ${(props) => props.theme.sizes.md}) {
                font-size: 0.7rem;
              }
            }
          }
        }
      }
    }
    .total {
      width: 100%;
      margin-top: 3em;
      text-align: right;
    }
    .divider {
      height: 1px;
      width: 100%;
      margin-top: 3em;
      background-color: ${(props) => props.theme.colors.ligth};
    }
    .form {
      margin-top: 4em;
      margin-bottom: 2em;
      display: flex;
      justify-content: space-between;
      & > div {
        width: 46%;
      }
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        flex-direction: column;
        & > div {
          width: 100%;
        }
      }
    }
  }
`

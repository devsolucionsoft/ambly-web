import styled from "styled-components"

export const Main = styled.main`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.ligth};
  padding: 0% 0;
  .content-page {
    position: relative;
    z-index: 1;
    padding: 10em 10% 6em 10%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 15%;

    @media (max-width: ${(props) => props.theme.sizes.md}) {
      padding: 10em 10% 6em 10%;
      flex-direction: column;
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
        width: 100%;
        margin-bottom: 2rem;
        .flex {
          width: 100%;
          display: flex;
          align-items: center;
        }
        .image {
          width: 15%;
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
          width: 70% !important;
          @media (max-width: ${(props) => props.theme.sizes.md}) {
            margin-left: 1em;
          }
          h3 {
            font-size: 1.2rem;
            @media (max-width: ${(props) => props.theme.sizes.md}) {
              font-size: 1rem;
            }
          }
          h5 {
            width: 100% !important;
            font-size: 1.5rem;
            text-align: right;
            color: ${(props) => props.theme.colors.grayText};
            @media (max-width: ${(props) => props.theme.sizes.md}) {
              font-size: 1.2rem;
            }
          }
          .autor {
            h4 {
              font-size: 1rem;
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
      margin-top: 2.4em;
      text-align: right;
    }

    .form {
      width: 100%;
      margin-bottom: 2em;
      display: flex;
      flex-direction: column;

      @media (max-width: ${(props) => props.theme.sizes.md}) {
        flex-direction: column;
        margin-top: 6em;
        & > div {
          width: 100%;
        }
      }
    }
  }
  .validateCupon {
    display : flex;
    flex-direction : column;
    gap : 10px;

    label {
      display : flex;
      gap : 10px;

    }
    section {
      display : flex;
      flex-direction : column;
      gap : 5px ;
      width : 250px;

      input {
        height: 40px;
        outline: none;
        width: 100%;
        border: none;
        border: 1px solid white;
        padding-inline: 5px;
        border-radius: 5px;
        background-color : black;
        color : white;
    
    }
    span {
      font-size : 12px;
      margin : 5px 0;
    }
    button {
      width : 80%;
      height: 30px;
      cursor : pointer;
      background-color : #FF3437;
      color : white;
      font-weight : bold;
      border : none ;
      border-radius : 5px;
    }
    }

  }
  
`

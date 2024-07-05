import styled from "styled-components"

export const Main = styled.main`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.ligth};
  padding: 0% 0;
  .form-login {
      max-width: 500px;
      width: 100%;
      margin-top: 2em;
      align-self: center;
      @media (max-width: ${(props) => props.theme.sizes.sm}) {
        width: 80%;
      }
      .forget-password {
        font-size: 1rem;
        margin: 3em 0 2em 0;
        p {
          text-align: center;
          text-decoration: underline;
          cursor: pointer;
        }
      }
      .politis {
        width: 80%;
        font-size: 1rem;
        margin-left: 10%;
        p {
          text-align: center;
          span {
            text-align: center;
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }
      .button-contain {
        margin-top: 1.6em;
       @media(max-width : 500px){
        button {
          font-size : .9rem;
        }
       }
      }
    }
  .content-page {
    position: relative;
    z-index: 1;
    padding: 5em 10% 6em 5%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 15%;
    .container {
      width: 80%;
      margin-inline : 10%;
    }

    @media (max-width: ${(props) => props.theme.sizes.md}) {
      padding: 4em 2em;
      flex-direction: column;

      .container {
        width : 100%;
        margin-inline : 0;

        .titleCarrito {
          font-size:1.2rem !important;
        }
      }
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
        position : relative;
       
        .flex {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content : start;
          gap : 20px;

          @media (max-width: ${(props) => props.theme.sizes.md}) {
            flex-direction : column;
            gap : 10px;
            align-items : start;

            .imgae {

            }
          }
        }
        .image {
          width: 250px;
          height: 150px;
          object-fit : cover;
          border-radius: 10px;
        }
        .delete {
          display : flex;
          align-items : center;
          gap : 10px;
          cursor: pointer;
          font-size: 1.5em;
          border-radius : 8px;
          padding : 10px;
          justify-content : center;
          position : absolute;
          right : 0;
          top : 0 ;

          &:hover {
            background : gray;
          }
          @media (max-width: ${(props) => props.theme.sizes.md}) {
            font-size: 1.5rem;

            .icon {
              position : absolute;
              right : 1rem;
            }
          }
        }
        .content {
          h3 {
            font-size: 1.2rem;
            @media (max-width: ${(props) => props.theme.sizes.md}) {
              font-size: 1.1rem !important;
              font-weight : bold;
            }
          }
          h4 {
            font-size : 1rem;
          }
          h5 {
            width: 100% !important;
            font-size: 1.8rem;
            text-align: right;
            color: white;
            @media (max-width: ${(props) => props.theme.sizes.md}) {
              font-size: 1.2rem;
            }
          }
          h6 {
            @media (max-width: ${(props) => props.theme.sizes.md}) {
              margin-top : 0 !important;
              font-size : 1.5rem;
            }

          }
          .autor {
            h4 {
              font-size: 1rem;
              color: ${(props) => props.theme.colors.grayText};
              font-weight: 400;
              @media (max-width: ${(props) => props.theme.sizes.md}) {
                font-size: .9rem;
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
          .description{
            p{
              font-size: 1rem;
              color: ${(props) => props.theme.colors.grayText};
              font-weight: 400;
              @media (max-width: ${(props) => props.theme.sizes.md}) {
                font-size: .9rem;
              }
            }
          }
        }
      }
    }
    .total {
      width: 100%;
      margin-top: 1em;
      text-align: right;
      display : flex;
      flex-direction : column;
      gap : 5px;

   
  
      section {
        display : flex;
        align-items : center;
        justify-content : space-between;
        padding : 10px 0
      }
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        section {
          align-items : end;
          flex-direction : column;
          gap : 10px;
          padding : 0;

          h6 {
            text-align : right !important;
          }
        }
      }
    }
    .continueBuying {
      display : flex;
      align-items : center;
      gap : 5px;
      font-size : 1.2em;
      cursor : pointer;
      font-weight : bold;

      a {
        text-decoration : none;
        color : white;
      }
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        font-size : 1rem;
      }

      
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
      font-size: 1.1em;

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

    @media (max-width: ${(props) => props.theme.sizes.md}) {
      section {

        span {
          margin : 0;
        }
      }
    }
  }

  .button-contain {
      margin-top: 1.6em;
      margin-bottom: 1.6em;
      max-width : 30%;
      align-self: center;
      @media(max-width : 500px){
      button {
        font-size : .9rem;
      }
      max-width: 100%;
    }
  }
  .button-contain.continue{
    max-width : 100% !important;
  }
`

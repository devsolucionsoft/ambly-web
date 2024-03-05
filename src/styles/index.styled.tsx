import styled from "styled-components"

export const Main = styled.main`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.ligth};
  padding: 5% 0;
  @media (max-width: ${(props) => props.theme.sizes.sm}) {
  }
  .contain {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${(props) => props.theme.sizes.sm}) {
      justify-content: space-evenly;
    }

    .icon {
      width: auto;
      height: auto;
    }

    .divider {
      height: 1px;
      width: 400px;
      background-color: #ffffff74;
      @media (max-width: ${(props) => props.theme.sizes.sm}) {
        width: 80%;
      }
    }

    .init-session {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .shops-section {
      text-align: center;

      .shops {
        margin-top: 2em;
        display: flex;
        justify-content: center;
        flex-wrap : wrap;
        gap: 1rem;
        @media (max-width: ${(props) => props.theme.sizes.sm}) {
          gap: 0.5rem;
        }
        a {
          width: 150px;
          img {
            width: 100%;
          }
        }
      }
    }
  }
  .errorMain {
    display : flex;
    justify-content : center ;
    gap : 40px;
    flex-wrap : wrap;

    .errorContainer {
      display : flex;
      flex-direction : column;
      gap : 40px;
      width : 500px;
      max-width : 500px;
      justify-content : center;
      padding : 20px;

    }

    section {
      display : flex;
      align-items : center;
      gap : 10px;
      background-color : #FF3437;
      margin-top : 20px;
      height : 40px;
      border-radius : 10px;
      cursor : pointer;
      width : 100%;
      justify-content : center;

      &:hover {
        opacity : .7;
      }
      
      small {
        font-size : 16px;
        font-weight : bold;
        letter-spacing : 1px;

      }
    }
    .errorImage {
      width : 375px;
      height : 375px;
      max-width : 100%
      object-fit : cover;


    }
  
  }
  .iconBack {
    font-size : 28px;
    cursor : pointer;
    top : 20px;
    left : 15px;
  }
  .socialButtons {
    display : flex;
    flex-direction : column;
    gap : 5px;
    margin-bottom : 10px;
  }
  .buttonSocial {
    display : flex;
    align-items : center;
    height : 40px !important;
    border : 1px solid gray;
    padding : 10px;
    border-radius : 5px;
    width : 300px;
    gap : 10px;
    cursor : pointer;
    justify-content : center;
    transition : all .3s ease;

    &:hover {
      opacity : .8;
    }

    &:first-child {
      svg {
        color : red;
      }
    }
    &:last-child {
      color : blue;
    }
  }
`

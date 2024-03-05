import styled from "styled-components"

export const Main = styled.main`
  color: ${(props) => props.theme.colors.ligth};
  padding: 0% 0;
  position: relative;

  .top {
    position: relative;
    .image-course {
      width: 100%;
      height: 65vh;
      object-fit: cover;

      object-position: top;
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        height: 30vh;
        margin-top: 45px;
      }
    }
    .overlay {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 70%;
      background: rgb(0, 0, 0);
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }
    .top-content {
      position: absolute;
      bottom: 0;
      padding-left: 15%;
      margin-bottom: 0em;
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        margin-bottom: 1em;
        padding-left: 8%;
      }
      .image-name {
        width: 18vw;
        height: auto;
        margin-bottom: 1rem;
        @media (max-width: ${(props) => props.theme.sizes.md}) {
          width: 40vw;
        }
      }
      .autor {
        font-size: 1vw;
        @media (max-width: ${(props) => props.theme.sizes.md}) {
          font-size: 1rem;
        }
        .icon {
          margin-right: 1rem;
        }
      }
    }
  }

  .content-page {
    position: relative;
    z-index: 1;
    padding: 4em 15% 6em 15%;

    @media (max-width: ${(props) => props.theme.sizes.md}) {
      padding: 2em 8% 6em 8%;
    }

    .description {
      font-size: 1vw;
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        font-size: 0.9rem;
        text-align : center;
      }
    }

    .price {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin: 2em 3% 2em 3%;
      gap: 2em;

      .text-price {
        display: flex;
        h6 {
          margin-right: 1rem;
        }
      }

      .price-text {
        font-size: 2vw;
        @media (max-width: ${(props) => props.theme.sizes.md}) {
          font-size: 1.5rem;
        }
      }

      button {
        width: auto;
        margin-left: 3em;
        padding: 0.6em 1.7em;
        font-size: 1.1rem;
      }

      @media (max-width: ${(props) => props.theme.sizes.md}) {
        flex-direction: column;
        align-items: center;
        gap: 0em;
        margin : 1em;

        button {
          margin-left: 0em;
          margin-top: 2em;
          @media (max-width: ${(props) => props.theme.sizes.md}) {
            margin-top: 1em;
          }
        }
      }
    }

    .button-action {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 2em;
      utton {
        width: auto;
        margin-left: 3em;
      }
    }

    .caracteristics {
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 5em;
      gap : 10px;
      .caracteristics-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 20%;
        padding: 1.2em 0.8em;
        border: 2px solid #52525293;
        border-radius: 20px;
        text-align: center;

        .icon {
          margin-bottom: 1em;
          width: auto;
          height: 40px;
        }
        p {
          font-size: 1vw;
          font-weight: 500;
        }
        span {
          margin-top: 0.2rem;
          font-size: 0.7vw;
          color: ${(props) => props.theme.colors.redPrimary};
        }
      }
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        flex-wrap: wrap;
        .caracteristics-item {
          width: 45%;
          padding: 1em 1em;
          margin-bottom: 0;
          p {
            font-size: 1rem;
          }
          span {
            font-size: 0.8rem;
          }
          .icon {
            height: 60px;
          }
        }
      }
    }

    .modulos-title {
      font-size: 1.8vw;
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        font-size: 1.3rem;
      }
    }
    .modulos-section {
      margin-top: 2em;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (max-width: ${(props) => props.theme.sizes.md}) {
        margin-top: 3em;
      }

      .modulos-subtitle {
        font-size: 1vw;
        @media (max-width: ${(props) => props.theme.sizes.md}) {
          font-size: 0.9rem;
        }
      }

      .divider {
        width: 100px;
        height: 10px;
        border-radius: 10px;
        margin: 2em 0;
        background-color: ${(props) => props.theme.colors.redPrimary};
      }

      .ModulesList-contain {
        padding: 0 5%;
      }
    }

    .teacher-section {
      margin-top: 6em;
      padding: 0 5%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        margin-top: 4em;
        .description {
          text-align : center;
  
        }
      }
      

      .avatar {
        margin: 1.5em 0;
        margin-bottom: 2.5em;
        width: 180px;
        height: 180px;
        border-radius: 100%;
        object-fit: cover;
        @media (max-width: ${(props) => props.theme.sizes.md}) {
          width: 30vw;
          height: 30vw;
          margin: 1em 0;
        }
      }

      .image-teacher {
        margin: 4em 0;
        width: 70%;
        height: auto;
        border-radius: 20px;
        @media (max-width: ${(props) => props.theme.sizes.md}) {
          width: 90%;
          margin: 2em 0;
          height: auto;
        }
      }
    }
  }
`

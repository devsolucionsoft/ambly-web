import styled from "styled-components"

export const Main = styled.main`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.ligth};
  padding: 0% 0;
  min-height: 100vh;
  .content-page {
    position: relative;
    z-index: 1;
    padding: 5em 15% 6em 15%;
    @media (max-width: ${(props) => props.theme.sizes.md}) {
      padding: 5em 8% 6em 8%;
    }

    .my-courses-list {
      display: flex;
      flex-wrap: wrap;
      margin-top: 3em;
      gap: 9%;
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        gap: 15%;
      }
      .teacher-item {
        width: 18%;
        margin-bottom: 2em;
        cursor: pointer;
        text-decoration: none;
        color: ${(props) => props.theme.colors.ligth};
        display: flex;
        flex-direction: column;
        align-items: center;
        .teacher-image {
          width: 13vw;
          height: 13vw;
          object-fit: cover;
          border-radius: 10%;
        }
        .teacher-title {
          margin-top: 1.2rem;
          font-size: 1.2vw;
          text-align: left;
        }
        @media (max-width: ${(props) => props.theme.sizes.md}) {
          width: 42%;
          .teacher-image {
            width: 35vw;
            height: 35vw;
          }
          .teacher-title {
            font-size: 0.9rem;
            line-height: 110%;
            text-align: center;
          }
        }
      }
    }
  }
`
export const MainDetail = styled.main`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.ligth};
  padding: 0% 0%;
  min-height: 100vh;
  .teacher-image {
    position: relative;
    .image {
      height: 70vh;
      width: 100%;
      object-fit: cover;
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        height: 40vh;
        margin-top : 50px;
      }
    }
    .overlay {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 90%;
      background: rgb(0, 0, 0);
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 22%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }
  .content-page {
    position: relative;
    z-index: 1;
    padding: 5em 15% 6em 15%;
    @media (max-width: ${(props) => props.theme.sizes.md}) {
      padding: 6em 8% 0em 8%;
    }
    .teacher-content {
      position: relative;
      z-index: 2;
      margin-top: -20em;
      padding: 0 2em;
      .avatar-image {
        width: 13vw;
        height: 13vw;
        object-fit: cover;
        border-radius: 100%;
        margin-bottom: 1em;
      }
      h1 {
        font-size: 2vw;
        margin-bottom: 1em;
      }
      p {
        font-size: 0.9vw;
        margin-bottom: 1em;
      }
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        padding: 0;
        .avatar-image {
          width: 25vw;
          height: 25vw;
        }
        h1 {
          font-size: 1.4rem;
          margin-bottom: 1em;
        }
        p {
          font-size: 0.9rem;
          font-weight : 200;
          padding-inline : 2%;
          margin-bottom :0 ;
        }
        
      }
    }
  }
  .image-teacher {
    margin: 4em 0;
    width: 70%;
    height: auto;
    border-radius: 20px;
    @media (max-width: ${(props) => props.theme.sizes.md}) {
      width: 100%;
      margin: 2em 0;
      height: auto;
    }
  }
`

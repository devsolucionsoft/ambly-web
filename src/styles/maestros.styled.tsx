import styled from "styled-components"

export const Main = styled.main`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.ligth};
  padding: 0% 0;
  min-height: 100vh;
  .content-page {
    position: relative;
    z-index: 1;
    padding: 10em 10% 6em 10%;

    .my-courses-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 3em;
      .teacher-item {
        width: 250px;
        margin-bottom: 2em;
        cursor: pointer;
        .teacher-image {
          width: 250px;
          height: 250px;
          object-fit: cover;
          border-radius: 10%;
        }
        .teacher-title {
          margin-top: 1.5rem;
          font-size: 1.2rem;
          text-align: left;
        }
        @media (max-width: ${(props) => props.theme.sizes.md}) {
          width: 46%;
          .teacher-image {
            width: 100%;
            height: 38vw;
          }
          .teacher-title {
            font-size: 1.1rem;
            line-height: 110%;
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
  .content-page {
    position: relative;
    z-index: 1;
    padding: 5em 10% 6em 10%;
    .teacher-image {
      position: relative;
      .image {
        height: 70vh;
        width: 100%;
        object-fit: cover;
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
    .teacher-content {
      position: relative;
      z-index: 2;
      margin-top: -20em;
      padding: 0 2em;
      .avatar-image {
        width: 200px;
        height: 200px;
        object-fit: cover;
        border-radius: 100%;
        margin-bottom: 1em;
      }
      h1 {
        margin-bottom: 1em;
      }
      p {
        margin-bottom: 1em;
      }
    }
  }
`

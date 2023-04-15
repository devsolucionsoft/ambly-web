import styled from "styled-components"

export const Main = styled.main`
  color: ${(props) => props.theme.colors.ligth};
  padding: 0% 0;

  .top {
    position: relative;
    .image-course {
      width: 100%;
      height: 80vh;
      object-fit: cover;
      object-position: top;
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
      padding-left: 10%;
      margin-bottom: 3em;
      .image-name {
        width: 25vw;
        height: auto;
        margin-bottom: 1rem;
      }
      .autor {
        .icon {
          margin-right: 1rem;
        }
      }
    }
  }

  .content-page {
    position: relative;
    z-index: 1;
    padding: 4em 10% 6em 10%;

    .description {
    }

    .price {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin: 2em 0 4em 0;
      gap: 2em;
    }

    .caracteristics {
      display: flex;
      justify-content: space-evenly;
      .caracteristics-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 20%;
        padding: 2em 1em;
        border: 2px solid #52525293;
        border-radius: 20px;
        text-align: center;
        .icon {
          margin-bottom: 1em;
          width: auto;
          height: 100px;
        }
        p {
          font-size: 1.2rem;
          font-weight: 500;
        }
        span {
          margin-top: 0.5rem;
          font-size: 1.1rem;
          color: ${(props) => props.theme.colors.redPrimary};
        }
      }
    }

    .modulos-section {
      margin-top: 6em;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;

      .divider {
        width: 100px;
        height: 10px;
        border-radius: 10px;
        margin: 2em 0;
        background-color: ${(props) => props.theme.colors.redPrimary};
      }

      .ModulesList-contain {
        padding: 0 10%;
      }
    }

    .teacher-section {
      margin-top: 6em;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .avatar {
        margin: 2em 0;
        width: 230px;
        height: 230px;
        border-radius: 100%;
      }

      .image-teacher {
        margin: 3em 0;
      }
    }
  }
`

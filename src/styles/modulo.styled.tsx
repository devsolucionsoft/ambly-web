import styled from "styled-components"

export const Main = styled.main`
  color: ${(props) => props.theme.colors.ligth};
  padding: 0% 0;

  .page-content {
    padding: 5em 10% 8em 10%;
    @media (max-width: ${(props) => props.theme.sizes.md}) {
      padding: 5em 5% 8em 5%;
    }

    .action-buttons {
      display: flex;
      justify-content: space-between;
      .action-button {
        padding: 1em 1.5em;
        border: none;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        border-radius: 10px;
        color: ${(props) => props.theme.colors.ligth};
        background-color: ${(props) => props.theme.colors.redPrimary};
        @media (max-width: ${(props) => props.theme.sizes.md}) {
          padding: 0.6em 1em;
        }
        &:disabled {
          opacity: 0.5;
        }
      }
    }

    .page-top {
      display: flex;
      justify-content: space-between;
      .page-top-video {
        width: 60%;
        border-radius: 15px;
      }
      .page-top-content {
        width: 35%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        flex-direction: column;
        .page-top-video {
          width: 100%;
        }
        .page-top-content {
          width: 100%;
          margin-top: 2em;
          h2 {
            font-size: 1.8rem;
          }
          p {
            margin: 1em 0 3em 0;
            font-size: 0.8rem;
          }
        }
      }
    }
    .page-module-content {
      display: flex;
      justify-content: space-between;
      margin-top: 1em;
      .title {
        margin-bottom: 0.8em;
        margin-top: 2em;
      }

      @media (max-width: ${(props) => props.theme.sizes.md}) {
        flex-direction: column;
      }

      .list-videos-module {
        .video-item-active {
          border: 1px solid ${(props) => props.theme.colors.redPrimary};
        }
        .video-item {
          display: flex;
          margin-bottom: 1.5em;
          padding: 1em;
          border-radius: 15px;
          background-color: ${(props) => props.theme.colors.dark};
          cursor: pointer;

          .video-image-contain {
            width: 20%;
            position: relative;
            .icon-play {
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              margin: auto;
              font-size: 3rem;
              color: ${(props) => props.theme.colors.yellowPrimary};
            }
            .video-image {
              width: 100%;
              height: auto;
              border-radius: 10px;
            }
          }
          .video-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-left: 2em;
            color: ${(props) => props.theme.colors.ligth};
          }
        }
      }

      .moduleslist-contain {
        width: 48%;
        @media (max-width: ${(props) => props.theme.sizes.md}) {
          width: 100%;
        }
      }

      .fileslist-contain {
        width: 40%;
        @media (max-width: ${(props) => props.theme.sizes.md}) {
          width: 100%;
        }
        .list-files {
          display: flex;
          flex-direction: column;

          .file-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1em;
            background-color: ${(props) => props.theme.colors.graySecondary};
            padding: 1em;
            border-radius: 15px;
            text-decoration: none;
            color: ${(props) => props.theme.colors.ligth};

            .item-info {
              display: flex;
              align-items: center;
              .icon {
                font-size: 3rem;
                margin-right: 0.5em;
              }
            }
            .action {
              background-color: ${(props) => props.theme.colors.redPrimary};
              border-radius: 100%;
              height: 2.5rem;
              width: 2.5rem;
              display: flex;
              align-items: center;
              justify-content: center;
              .action-icon {
                font-size: 2rem;
              }
            }
          }
        }
      }
    }
  }
`

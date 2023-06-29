import styled from "styled-components"

export const Main = styled.main`
  color: ${(props) => props.theme.colors.ligth};
  padding: 0% 0;

  .page-content {
    padding: 67px 15% 8em 15%;
    @media (max-width: ${(props) => props.theme.sizes.md}) {
      padding: 45px 8% 5em 8%;
    }

    .action-buttons {
      display: flex;
      justify-content: space-between;
      .action-button {
        padding: 0.6vw 1.2vw;
        border: none;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 1vw;
        font-weight: bold;
        cursor: pointer;
        border-radius: 10px;
        color: ${(props) => props.theme.colors.ligth};
        background-color: ${(props) => props.theme.colors.redPrimary};
        @media (max-width: ${(props) => props.theme.sizes.md}) {
          padding: 0.6em 1em;
          font-size: 1rem;
        }
        &:disabled {
          opacity: 0.5;
        }
      }
    }

    .page-top {
      display: flex;
      justify-content: space-between;
      padding-top: 1em;
      .page-top-video {
        width: 50%;
        min-height: 15em;
        display: flex;
        align-items: center;
        justify-content: center;
        .top-video {
          border-radius: 15px;
          width: 100%;
        }
      }
      .page-top-content {
        width: 40%;
        min-height: 20em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h2 {
          font-size: 2vw;
        }
        p {
          font-size: 1vw;
        }
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
            font-size: 1.7rem;
          }
          p {
            margin: 1em 0 3em 0;
            font-size: 0.6rem;
          }
        }
      }
    }
    .page-module-content {
      display: flex;
      justify-content: space-between;
      margin-top: 1em;
      .title {
        font-size: 1.5vw;
        margin-bottom: 0.8em;
        margin-top: 2em;
      }

      @media (max-width: ${(props) => props.theme.sizes.md}) {
        flex-direction: column;
        .title {
          font-size: 1.1rem;
        }
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

          @media (max-width: ${(props) => props.theme.sizes.md}) {
            padding: 0.5em;
          }

          .video-image-contain {
            width: 15%;
            position: relative;
            @media (max-width: ${(props) => props.theme.sizes.md}) {
              width: 25%;
            }
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
            @media (max-width: ${(props) => props.theme.sizes.md}) {
              margin-left: 1.5em;
            }
            h6 {
              font-size: 1.1vw;
              @media (max-width: ${(props) => props.theme.sizes.md}) {
                font-size: 1rem;
              }
            }
          }
        }
      }

      .moduleslist-contain {
        width: 50%;
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
            h6 {
              font-size: 1.2vw;
            }
            .item-info {
              display: flex;
              align-items: center;
              .icon {
                font-size: 2.5vw;
                margin-right: 0.5em;
              }
            }
            .action {
              background-color: ${(props) => props.theme.colors.redPrimary};
              border-radius: 100%;
              height: 2.5vw;
              width: 2.5vw;
              display: flex;
              align-items: center;
              justify-content: center;
              .action-icon {
                font-size: 1.6vw;
              }
            }
            @media (max-width: ${(props) => props.theme.sizes.md}) {
              h6 {
                font-size: 1rem;
              }
              .item-info {
                .icon {
                  font-size: 2rem;
                  margin-right: 0.5em;
                }
              }
              .action {
                height: 2rem;
                width: 2rem;
                .action-icon {
                  font-size: 1.3rem;
                }
              }
            }
          }
        }
      }
    }
  }
`

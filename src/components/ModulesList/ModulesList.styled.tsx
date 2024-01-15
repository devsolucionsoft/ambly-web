import styled from "styled-components"

export const Main = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.sizes.md}) {
    width: 100%;
  }
  .modules-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    overflow: hidden;
    @media (max-width: ${(props) => props.theme.sizes.md}) {
      width: 90vw;
    }
    .module-item {
      border-bottom: 1px solid #ffffff;
      width : 90%;
      &:last-child {
        border-bottom: none;
      }
    }
  }
`

export const ModuleItemMain = styled.div<{ openItem: boolean }>`
  padding: 1.2em 3em;
  background-color: ${(props) => props.theme.colors.graySecondary};
  @media (max-width: ${(props) => props.theme.sizes.md}) {
    padding: 1em 1em;
  }
  &.module-item-active {
    border-radius: 20px 20px 0 0;
    border: 1px solid ${(props) => props.theme.colors.redPrimary};
    border-bottom: 1px solid ${(props) => props.theme.colors.redPrimary} !important;
  }
  .header-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    p {
      color: ${(props) => props.theme.colors.grayText};
    }
    .flex {
      display: flex;
      align-content: center;
      justify-content: flex-start;
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        width: 100%;
      }
      .icon-container {
        display: flex;
        align-items: center;
        .icon {
          font-size: 2.5vw;
          @media (max-width: ${(props) => props.theme.sizes.md}) {
            font-size: 2.2rem;
          }
        }
      }
    }
    .arrow {
      font-size: 2.1vw;
      margin-left: 3em;
      transition: 200ms;
      transform: rotate(${(props) => (props.openItem ? `90deg` : `00deg`)});
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        margin-left: 1em;
        font-size: 2rem;
      }
    }
    .header-content {
      margin-left: 2em;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      h6 {
        font-size: 1.2vw;
        line-height: 115%;
      }
      p {
        font-size: 0.8vw;
      }
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        width: 100%;
        margin-left: 1em;
        text-align: left;
        h6 {
          font-size: 0.9rem;
        }
        p {
          font-size: 0.7rem;
        }
      }
    }
  }
  .content {
    transition: 200ms;
    overflow: hidden;
    height: auto;
    ${(props) => (props.openItem ? `margin-top: 3em;` : `height: 0px;`)}
    .video-desription {
      font-size: 1vw;
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        font-size: 0.7rem;
      }
    }
    @media (max-width: ${(props) => props.theme.sizes.md}) {
      ${(props) => (props.openItem ? `margin-top: 1.5em;` : `height: 0px;`)}
    }
    .list-videos {
      display: flex;
      flex-direction: column;
      margin-top: 2em;
      background-color: ${(props) => props.theme.colors.dark};
      padding-top: 2em;
      padding-bottom: 1em;
      border-radius: 20px;
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        padding-top: 1em;
        padding-bottom: 0.5em;
      }
      p {
        color: ${(props) => props.theme.colors.grayText};
      }
      .video-item-active {
        border: 1px solid ${(props) => props.theme.colors.redPrimary};
      }
      .video-item {
        display: flex;
        width: 90%;
        margin-left: 5%;
        margin-bottom: 1em;
        align-items: center;
        cursor: pointer;
        @media (max-width: ${(props) => props.theme.sizes.md}) {
          margin-bottom: 1.5em;
          margin-bottom: 0.5em;
        }
        .video-image-contain {
          width: 15%;
          position: relative;
          display: flex;
          align-items: center;
          .icon-play {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            font-size: 3rem;
            color: ${(props) => props.theme.colors.yellowPrimary};
            @media (max-width: ${(props) => props.theme.sizes.md}) {
              font-size: 2rem;
            }
          }
          .video-image {
            width: 100%;
            height: auto;
            border-radius: 10px;
          }
          @media (max-width: ${(props) => props.theme.sizes.md}) {
            width: 25%;
          }
        }
        .video-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-left: 2em;
          h6 {
            font-size: 1.1rem;
          }
          p {
            font-size: 0.8rem;
          }
          @media (max-width: ${(props) => props.theme.sizes.md}) {
            margin-left: 1rem;
            h6 {
              font-size: 1rem;
            }
            p {
              font-size: 0.8rem;
            }
          }
        }
      }
    }
  }
`

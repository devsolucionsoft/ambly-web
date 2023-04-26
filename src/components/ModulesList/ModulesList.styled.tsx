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
      border-bottom: 2px solid #ffffff;
      &:last-child {
        border-bottom: none;
      }
    }
  }
`

export const ModuleItemMain = styled.div<{ openItem: boolean }>`
  padding: 1em 2em;
  background-color: ${(props) => props.theme.colors.graySecondary};
  @media (max-width: ${(props) => props.theme.sizes.md}) {
    padding: 1em 1em;
  }
  &.module-item-active {
    border-radius: 20px 20px 0 0;
    border: 2px solid ${(props) => props.theme.colors.redPrimary};
    border-bottom: 2px solid ${(props) => props.theme.colors.redPrimary} !important;
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
          font-size: 3rem;
        }
      }
    }
    .arrow {
      font-size: 2.5rem;
      margin-left: 3em;
      transition: 200ms;
      transform: rotate(${(props) => (props.openItem ? `90deg` : `00deg`)});
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        margin-left: 1em;
      }
    }
    .header-content {
      margin-left: 2em;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        width: 100%;
        margin-left: 1em;
        text-align: left;
        h6 {
          font-size: 1.2rem;
        }
        p {
          font-size: 0.8rem;
        }
      }
    }
  }
  .content {
    transition: 200ms;
    overflow: hidden;
    height: auto;
    ${(props) => (props.openItem ? `margin-top: 3em;` : `height: 0px;`)}
    .list-videos {
      display: flex;
      flex-direction: column;
      margin-top: 3em;
      background-color: ${(props) => props.theme.colors.dark};
      padding-top: 2em;
      border-radius: 20px;
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
        margin-bottom: 1.5em;
        cursor: pointer;
        @media (max-width: ${(props) => props.theme.sizes.md}) {
          margin-bottom: 1.5em;
        }
        .video-image-contain {
          width: 20%;
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
        }
        .video-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-left: 2em;
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

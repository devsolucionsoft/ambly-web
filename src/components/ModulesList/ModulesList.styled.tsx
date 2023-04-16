import styled from "styled-components"

export const Main = styled.div`
  display: flex;
  justify-content: center;
  .modules-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    overflow: hidden;
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
    }
    .icon {
      font-size: 4rem;
    }
    .arrow {
      font-size: 2.5rem;
      margin-left: 3em;
      transition: 200ms;
      transform: rotate(${(props) => (props.openItem ? `90deg` : `00deg`)});
    }
    .header-content {
      margin-left: 2em;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
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

      .video-item {
        display: flex;
        width: 90%;
        margin-left: 5%;
        margin-bottom: 1.5em;
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
        }
      }
    }
  }
`

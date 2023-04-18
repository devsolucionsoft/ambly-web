import styled from "styled-components"

export const Main = styled.main`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.ligth};
  padding: 0% 0;
  .content-page {
    position: relative;
    z-index: 1;
    padding: 10em 10% 6em 10%;

    .my-courses-list {
      display: flex;
      flex-wrap: wrap;
      margin-top: 3em;
      gap: 5%;
      .course-item {
        position: relative;
        width: 30%;
        height: 45vh;
        border-radius: 30px;
        overflow: hidden;
        margin-bottom: 3em;
        cursor: pointer;
        .overlay {
          position: absolute;
          height: 100%;
          width: 100%;
          bottom: 0;
          background: rgb(0, 0, 0);
          background: linear-gradient(
            0deg,
            #00000084 0%,
            rgba(255, 255, 255, 0) 100%
          );
        }
        .image-course {
          height: 100%;
          width: 100%;
          object-fit: cover;
          position: absolute;
        }
        .course-content {
          position: absolute;
          height: 100%;
          width: 100%;
          padding: 1.5em;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
          z-index: 2;
          .image-name {
            width: 70%;
            height: auto;
          }
          .autor {
            margin-top: 1em;
            .icon {
              margin-right: 10px;
            }
          }
        }
        @media (max-width: ${(props) => props.theme.sizes.md}) {
          width: 47.5%;
          height: 28vh;
          .course-content {
            .image-name {
              width: 90%;
              height: auto;
            }
            .autor {
              margin-top: 1em;
              font-size: 0.7rem;
              .icon {
                margin-right: 5px;
              }
            }
          }
        }
        .overlay {
        }
      }
    }
  }
`

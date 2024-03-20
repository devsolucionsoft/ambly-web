import styled from "styled-components"

export const Main = styled.main`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.ligth};
  padding: 0% 0;
  .content-page {
    position: relative;
    z-index: 1;
    padding: 5em 15% 6em 15%;

    p {
      font-size: 1rem;
      text-align: left;
      font-weight: 200;
      margin-top : 1.7rem;
  }

    @media (max-width: ${(props) => props.theme.sizes.md}) {
      padding: 5em 8% 6em 8%;

      p {
          font-size: 0.9rem;
          text-align: left;
          font-weight: 200;
          margin-top : 1.5rem;
      }
    }

    .my-courses-list {
      display: flex;
      flex-wrap: wrap;
      margin-top: 3em;
      gap: 5%;
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        gap: 10%;
      }
      .course-item {
        position: relative;
        width: 30%;
        height: 20vw;
        border-radius: 20px;
        overflow: hidden;
        margin-bottom: 3em;
        //cursor: pointer;
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
        .hover-content {
          position: absolute;
          height: 0%;
          width: 100%;
          bottom: 0;
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.6);
          overflow: hidden;
          transition: 200ms;
        }
        &:hover {
          .hover-content {
            height: 100%;
          }
            .image-course {
              height: 102%;
              width: 102%;
          }
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
            width: 50%;
            height: auto;
          }
          .autor {
            margin-top: 1em;
            font-size: 0.9vw;
            margin-left: 0.4rem;
            .icon {
              margin-right: 10px;
            }
          }
        
        }
        @media (max-width: ${(props) => props.theme.sizes.md}) {
          width: 100%;
          height: 40vw;
          margin-bottom: 2em;
          .course-content {
            padding: 1em;
            .image-name {
              width: 40%;
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

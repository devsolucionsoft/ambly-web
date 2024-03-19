import styled from "styled-components"

export const Main = styled.main`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.ligth};
  padding: 0% 0;
  .content-page {
    position: relative;
    z-index: 1;
    padding: 10em 10% 6em 10%;

    @media (max-width: ${(props) => props.theme.sizes.md}) {
      padding : 5em 10%;
    }

    .my-courses-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 3em;
      .emptyCourses {
        display : flex;
        flex-direction : column;
        gap : 20px;
      }
      .course-item {
        position: relative;
        width: 48%;
        height: 40vh;
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
        .image-name {
          height: 100%;
          width: 100%;
          object-fit: cover;
          position: absolute;
          transition: all 200ms;
        }
        .course-content {
          position: absolute;
          height: 100%;
          width: 100%;
          padding: 2em;
          display: flex;
          flex-direction: column;
          gap : 10px;
          justify-content: flex-end;
          align-items: flex-start;
          z-index: 2;
          h1 {
            line-height : 2rem;
          }
          .course-title {
            font-size: 1.5rem;
            width: 80%;
          }
          .course-datails {
            p {
              font-size: 0.9rem;
            }
          }
          .autor {
            display : flex;
            gap : 10px;
            font-size: .9rem;

          }
        }
        @media (max-width: ${(props) => props.theme.sizes.md}) {

          width: 100%;
          height: 25vh;
          .course-content {
            padding: .5em 1em;
            gap : 5px;
            h1 {
              line-height : 1.1rem;
            }
            .course-title {
              font-size: 1.1rem;
              margin : 0;

            }
  
            .course-datails {
              padding: 0;
              background : none;
              
              p {
                font-size: 0.7rem;
              }
            }
            .autor {
              font-size : .7rem;
              margin : 0;
            }
          }
        }
        &:hover {
          .image-name {
            height: 102%;
            width: 102%;
          }
        }
        .overlay {
        }
      }
    }
  }
`

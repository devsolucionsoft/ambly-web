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
      justify-content: space-between;
      margin-top: 3em;
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
        }
        .course-content {
          position: absolute;
          height: 100%;
          width: 100%;
          padding: 2em;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
          z-index: 2;
          .course-title {
            font-size: 2.5rem;
            width: 80%;
            margin-bottom: 20px;
          }
          .course-datails {
            padding: 10px 20px;
            border-radius: 30px;
            background-color: #00000061;
          }
        }
        .overlay {
        }
      }
    }
  }
`

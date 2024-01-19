import styled from "styled-components"

export const Main = styled.main`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.ligth};
  padding: 0% 0;

  .content-page-top {
    padding: 68px 0% 3.5em 0%;

    @media (max-width: ${(props) => props.theme.sizes.md}) {
      padding: 45px 0% 1.5em 0%;
    }
  }
  .content-page {
    position: relative;
    z-index: 1;
    padding: 0em 15% 0em 15%;

    @media (max-width: ${(props) => props.theme.sizes.md}) {
      padding: 0em 8% 0em 8%;
    }

    h1 {
      font-size: 1.6vw;
      width: 70%;
      margin-left: 15%;
      margin-bottom: 5em;
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        font-size: 1.2rem;
        width: 80%;
        margin-left: 10%;
      }
    }

    .teachers-list {
      display: flex;
      flex-wrap: wrap;
      gap: 6%;
      justify-content: space-between;
      padding: 0 0%;

      .teacher-item {
        width: 20%;
        margin-bottom: 2em;
        cursor: pointer;
        text-decoration: none;
        color: ${(props) => props.theme.colors.ligth};
        display: flex;
        flex-direction: column;
        align-items: center;
        transition : all .5s;

        &:hover {
          scale : 1.1;
        }
        .teacher-image {
          width: 11.5vw;
          height: 11.5vw;
          object-fit: cover;
          border-radius: 10px;
        }
        .teacher-title {
          margin-top: 0.8rem;
          font-size: 1vw;
          text-align: center;
        }
      }
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        justify-content: space-between;
        gap: auto;
        .teacher-item {
          width: 45%;
          .teacher-image {
            width: 34vw;
            height: 34vw;
            object-fit: cover;
          }
          .teacher-title {
            margin-top: 0.8rem;
            font-size: 0.8rem;
            line-height: 110%;
          }
        }
      }
      @media (max-width: ${(props) => props.theme.sizes.sm}) {
        .teacher-item {
          width: 45%;
        }
      }
    }

    .category-list {
      display: flex;
      flex-wrap: wrap;
      gap: 5%;
      justify-content: center;
      .category-item {
        position : relative;
        width: 150px;
        margin-bottom: 1.5em;
        display : flex;
        justify-content : center;
        align-items : center;
        cursor: pointer;
        transition : all .5s;
        &:hover {
          scale : 1.1;
        }
        .category-image {
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 100%;
        }
        .categoryName {
          position : absolute;
          left : 50;
          top : 50;
          color : white;
          text-decoration : none;
          font-weight : 600;
          font-size : 16px;
          text-align : center;
          padding : 0 10px

        }
        .dark-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5); /* Ajusta el valor alpha según sea necesario */
        }
      }
      // @media (max-width: ${(props) => props.theme.sizes.sm}) {
      //   gap: 10%;
      //   .category-item {
      //     width: 40%;
      //     .category-image {
      //       width: 100%;
      //       height: auto;
      //     }
      //   }
      // }
    }
    .text-bottom {
      font-size: 1.5rem;
      text-align: center;
      font-weight: 500;
      margin-bottom: 5em;
      margin-top: 3em;
    }
  }
`

export const MyCourses = styled.div`
  .my-courses-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 3em;
    .course-item {
      position: relative;
      width: 48%;
      height: 30vh;
      border-radius: 1rem;
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
        padding: 1.5em;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        z-index: 2;
        .course-title {
          font-size: 1.5rem;
          line-height: 110%;
          width: 80%;
          margin-left: 0px;
          margin-bottom: 0.5rem;
        }
        .course-datails {
          padding: 10px 20px;
          border-radius: 30px;
          background-color: #00000061;
          p {
            font-size: 0.9rem;
          }
        }
        .autor {
          margin-top: 0em;
          font-size: 0.9vw;
          margin-left: 0.4rem;
          .icon {
            margin-right: 10px;
          }
          @media (max-width: ${(props) => props.theme.sizes.md}) {
            font-size: 0.6rem;
          }
        }
      }
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        width: 100%;
        height: 25vh;
        .course-content {
          padding: 1.5em;
          .course-title {
            font-size: 1.3rem;
          }
          .course-datails {
            padding: 8px 15px;
            p {
              font-size: 0.7rem;
            }
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
`

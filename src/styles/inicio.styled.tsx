import styled from "styled-components"

export const Main = styled.main`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.ligth};
  padding: 0% 0;

  .content-page-top {
    margin-top: 20px;
    padding: 68px 0% 3.5em 0%;

    @media (max-width: ${(props) => props.theme.sizes.md}) {
      margin-top: 50px;
      padding : 0;

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
    .categoryContent {
      margin-bottom : 2em;
    }

    .category-list {
      display: flex;
      flex-wrap: wrap;
      gap: 5%;
      justify-content: center;
      margin-bottom : 5em;
      .category-item {
        position : relative;
        width: 150px;
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
      @media (max-width: ${(props) => props.theme.sizes.sm}) {
        gap: 20px;

        .category-item {
          width : 130px;
          .category-image {
            width: 130px;
            height: 130px;
          }
        }
      }
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
    // margin-top: 3em;
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
        padding: .5em 1em;
        gap : 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        z-index: 2;
        .course-title {
          font-size: 1.1rem;
          width: 80%;
          margin-left: 0px;
        }
        .course-datails {
          border-radius: 30px;
          p {
            font-size: 0.9rem;
          }
        }
        .autor {
          margin-top: 0em;
          font-size: 0.9vw;
          .icon {
            margin-right: 10px;
          }
          @media (max-width: ${(props) => props.theme.sizes.md}) {
            font-size: 0.6rem;
            margin-top : 6px;
          }
        }
      }
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        width: 100%;
        height: 25vh;
       
        .course-content {
          padding: .5em 1em;
          gap : 5px;
          .course-title {
            font-size: 1.1rem;
            margin : 0;
            width : 100%
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
`

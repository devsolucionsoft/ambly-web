import styled from "styled-components"

export const Main = styled.main`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.ligth};
  padding: 0% 0;

  .content-page-top {
    padding: 68px 0% 3.5em 0%;

    @media (max-width: ${(props) => props.theme.sizes.md}) {
      padding: 45px 0% 3.5em 0%;
    }
  }
  .content-page {
    position: relative;
    z-index: 1;
    padding: 0em 15% 6em 15%;

    @media (max-width: ${(props) => props.theme.sizes.md}) {
      padding: 0em 8% 6em 8%;
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
      padding: 0 3%;

      .teacher-item {
        width: 20%;
        margin-bottom: 3em;
        cursor: pointer;
        text-decoration: none;
        color: ${(props) => props.theme.colors.ligth};
        display: flex;
        flex-direction: column;
        align-items: center;
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
            width: 32vw;
            height: 32vw;
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
        width: 12vw;
        margin-bottom: 2em;
        cursor: pointer;
        .category-image {
          width: 12vw;
          height: 12vw;
          object-fit: cover;
          border-radius: 100%;
        }
      }
      @media (max-width: ${(props) => props.theme.sizes.sm}) {
        gap: 10%;
        .category-item {
          width: 40%;
          .category-image {
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }
`

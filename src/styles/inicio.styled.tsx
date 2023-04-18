import styled from "styled-components"

export const Main = styled.main`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.ligth};
  padding: 0% 0;

  .content-page-top {
    padding: 5em 0% 3em 0%;
  }
  .content-page {
    position: relative;
    z-index: 1;
    padding: 2em 10% 6em 10%;

    .teachers-list {
      display: flex;
      flex-wrap: wrap;
      gap: 5%;
      justify-content: center;

      .teacher-item {
        width: 250px;
        margin-bottom: 2em;
        cursor: pointer;
        .teacher-image {
          width: 250px;
          height: 250px;
          object-fit: cover;
          border-radius: 10px;
        }
        .teacher-title {
          margin-top: 1rem;
          font-size: 1.2rem;
          text-align: left;
        }
      }
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        justify-content: space-between;
        gap: auto;
        .teacher-item {
          width: 150px;
          .teacher-image {
            width: 100%;
            height: 120px;
            object-fit: cover;
          }
          .teacher-title {
            margin-top: 0.5rem;
            font-size: 1rem;
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
        width: 250px;
        margin-bottom: 2em;
        cursor: pointer;
        .category-image {
          width: 250px;
          height: 250px;
          object-fit: cover;
          border-radius: 100%;
        }
      }
      @media (max-width: ${(props) => props.theme.sizes.sm}) {
        .category-item {
          width: 45%;
          .category-image {
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }
`

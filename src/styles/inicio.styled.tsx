import styled from "styled-components"

export const Main = styled.main`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.ligth};
  padding: 0% 0;

  .content-page-top {
    padding: 5em 0% 6em 0%;
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
        cursor: pointer;
        .teacher-image {
          width: 250px;
          height: 250px;
          object-fit: cover;
          border-radius: 10%;
        }
        .teacher-title {
          margin-top: 1rem;
          font-size: 1.2rem;
          text-align: left;
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
        cursor: pointer;
        .category-image {
          width: 250px;
          height: 250px;
          object-fit: cover;
          border-radius: 100%;
        }
      }
    }
  }
`

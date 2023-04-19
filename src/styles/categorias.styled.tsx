import styled from "styled-components"

export const Main = styled.main`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.ligth};
  padding: 0% 0;
  min-height: 100vh;
  .content-page {
    position: relative;
    z-index: 1;
    padding: 10em 10% 6em 10%;

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

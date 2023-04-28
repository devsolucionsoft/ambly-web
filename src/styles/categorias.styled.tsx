import styled from "styled-components"

export const Main = styled.main`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.ligth};
  padding: 0% 0;
  min-height: 100vh;
  .content-page {
    position: relative;
    z-index: 1;
    padding: 6em 15% 6em 15%;

    h1 {
      font-size: 2.5vw;
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        font-size: 1.5rem;
      }
    }

    .category-list {
      display: flex;
      flex-wrap: wrap;
      gap: 5%;
      justify-content: center;
      .category-item {
        width: 20%;
        margin-bottom: 2em;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        .category-image {
          width: 13vw;
          height: 13vw;
          object-fit: cover;
          border-radius: 100%;
        }
      }
      @media (max-width: ${(props) => props.theme.sizes.sm}) {
        .category-item {
          width: 44%;
          .category-image {
            width: 30vw;
            height: 30vw;
          }
        }
      }
    }
  }
`

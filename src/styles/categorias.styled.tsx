import styled from "styled-components"

export const Main = styled.main`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.ligth};
  padding: 0% 0;
  min-height: 100vh;
  .content-page {
    position: relative;
    z-index: 1;
    padding: 5em 15% 6em 15%;

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
  }
`

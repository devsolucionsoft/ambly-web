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

    .my-courses-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 3em;
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
          margin-top: 1.5rem;
          font-size: 1.2rem;
          text-align: left;
        }
      }
    }
  }
`

import styled from "styled-components"

export const Main = styled.main`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.ligth};
  padding: 0% 0;
  .content-page {
    position: relative;
    z-index: 1;
    padding: 5em 10% 6em 10%;

    @media (max-width: ${(props) => props.theme.sizes.md}) {
      padding: 5em 8% 6em 8%;
    }

    .my-courses-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 3em;
      .course-item {
        position: relative;
        width: 24%;
        height: auto;
        margin-bottom: 3em;
        @media (max-width: ${(props) => props.theme.sizes.md}) {
          width: 100%;
          font-size: 0.8rem;
        }
      }
    }
  }
`

import styled from "styled-components"

export const Main = styled.div<{ variant: "new" | "popular" | "trailers" }>`
  padding: 0 ${(props) => (props.variant !== "new" ? "10%" : "0%")};
  @media (max-width: ${(props) => props.theme.sizes.md}) {
    padding: 0 0%;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: white;
  }

  .swiper-button-next {
    right: 15%;
    @media (max-width: ${(props) => props.theme.sizes.md}) {
      right: 5%;
    }
  }
  .swiper-button-prev {
    left: 15%;
    @media (max-width: ${(props) => props.theme.sizes.md}) {
      left: 5%;
    }
  }

  .swiper-pagination {
    .swiper-pagination-bullet {
      color: white;
      background-color: white;
    }
  }

  @media screen and (min-width: 640px) {
    .swiper-container {
      width: 640px;
    }
  }

  @media screen and (min-width: 768px) {
    .swiper-container {
      width: 768px;
    }
  }
`

export const SliderNew = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  .image-course {
    width: 100%;
    height: 50vh;
    object-fit: cover;
    object-position: top;
    display: none;
    @media (max-width: ${(props) => props.theme.sizes.md}) {
      display: block;
    }
  }
  .image-desktop {
    display: block;
    @media (max-width: ${(props) => props.theme.sizes.md}) {
      display: none;
    }
  }
  .slider-content {
    position: absolute;
    z-index: 2;
    bottom: 0;
    width: 90%;
    align-items: center;
    display: none;
    @media (max-width: ${(props) => props.theme.sizes.md}) {
      flex-direction: column-reverse;
      display: flex;
      button {
        padding: 0.3rem 2rem;
        font-size: 1rem;
        margin-left: 0.8rem;
      }
    }
    .content-1 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 90%;
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        width: 100%;
      }
      .image-name {
        width: 50%;
        height: auto;
      }

      .autor {
        margin: 1em 0;
        padding-left: 0.8rem;
        .icon {
          margin-right: 10px;
        }
      }

      @media (max-width: ${(props) => props.theme.sizes.md}) {
        .image-name {
          width: 60%;
          height: auto;
        }

        .autor {
          margin: 1em 0;
          font-size: 0.8rem;
          .icon {
            margin-right: 10px;
          }
        }
      }
    }

    .content-2 {
      width: 45%;
      text-align: right;
      h6 {
        font-weight: 300;
      }
      @media (max-width: ${(props) => props.theme.sizes.md}) {
        width: 100%;
        text-align: center;
        margin-bottom: 2em;
        h6 {
          font-size: 0.9rem;
          line-height: 110%;
        }
      }
    }
  }

  .overflow {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 70%;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    display: none;
    @media (max-width: ${(props) => props.theme.sizes.md}) {
      display: block;
    }
  }
`

export const SliderPopular = styled.section`
  height: 19vw;
  cursor: pointer;
  position: relative;
  @media (max-width: ${(props) => props.theme.sizes.sm}) {
    height: 23vh;
  }
  .image-course {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
  }
  .image-name {
    position: absolute;
    width: 70%;
    left: 10%;
    bottom: 5%;
    height: auto;
    z-index: 2;
  }
  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #00000058;
  }
`

export const SlidersTrailer = styled.section`
  position: relative;
  .click {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    z-index: 2;
    cursor: pointer;
  }
  .video-contain {
    position: relative;
    width: 100%;
    cursor: pointer;
    .video {
      width: 100%;
      height: auto;
      border-radius: 15px;
    }
    .icon-play {
      position: absolute;
      margin: auto;
      font-size: 3rem;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
  .trailer-title {
    font-size: 1vw;
    margin-top: 0.5em;
    @media (max-width: ${(props) => props.theme.sizes.sm}) {
      font-size: 0.8rem;
    }
  }
  .autor {
    margin: 8px 0;
    font-size: 0.8vw;
    @media (max-width: ${(props) => props.theme.sizes.sm}) {
      font-size: 0.6rem;
    }
    .icon {
      margin-right: 0.6rem;
    }
  }
`

import styled from "styled-components"

export const Main = styled.div`
  .swiper-button-next,
  .swiper-button-prev {
    color: white;
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
  }
  .slider-content {
    position: absolute;
    z-index: 2;
    bottom: 0;
    width: 80%;
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .image-name {
      width: 20%;
      height: auto;
    }

    .autor {
      margin: 1em 0;
      .icon {
        margin-right: 10px;
      }
    }

    @media (max-width: ${(props) => props.theme.sizes.md}) {
      .image-name {
        width: 80%;
        height: auto;
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
  }
`

export const SliderPopular = styled.section`
  height: 28vw;
  cursor: pointer;
  position: relative;
  @media (max-width: ${(props) => props.theme.sizes.sm}) {
    height: 30vh;
  }
  .image-course {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
  }
  .image-name {
    position: absolute;
    width: 80%;
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
    font-size: 1.2rem;
  }
  .autor {
    margin: 10px 0;
    font-size: 0.8rem;
    .icon {
      margin-right: 10px;
    }
  }
`

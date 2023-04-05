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
`

export const SliderNew = styled.section`
  position: relative;
  .image-course {
    width: 100%;
    height: 90vh;
    object-fit: cover;
  }
  .slider-content {
    position: absolute;
    z-index: 2;
    bottom: 0;
    width: 100%;
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
  .image-course {
    width: 100%;
    height: auto;
    border-radius: 25px;
  }
`

export const SlidersTrailer = styled.section`
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
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
  .autor {
    margin: 10px 0;
    .icon {
      margin-right: 10px;
    }
  }
`

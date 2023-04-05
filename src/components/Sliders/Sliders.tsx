import { HTMLAttributes } from "react"
import Image from "next/image"
import { Navigation, Pagination } from "swiper"
// Components
import { Button } from "../"
// Styled components
import {
  Main,
  SliderNew,
  SliderPopular,
  SlidersTrailer,
} from "./Sliders.styled"
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import ImageCourse from "../../assets/images/new-course.jpg"
import PopularCourse from "../../assets/images/popular.jpg"
import ImageName from "../../assets/images/svg-ejem.png"
import { FaUserAlt } from "react-icons/fa"
import { AiFillPlayCircle } from "react-icons/ai"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

interface SlidersProps {
  variant: "new" | "popular" | "trailers"
}

const items = [1, 2, 3, 4, 5]

type SlidersAttributes = SlidersProps & HTMLAttributes<HTMLDivElement>

const Sliders = (props: SlidersAttributes) => {
  const { variant } = props
  let slidesPerView = 1
  const swiper = useSwiper()

  if (variant === "popular" || variant === "trailers") {
    slidesPerView = 3
  }
  return (
    <Main>
      <Swiper
        style={{ paddingBottom: "3em" }}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={slidesPerView}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {items.map((item) => {
          if (variant === "new") {
            return (
              <SwiperSlide>
                <SliderNew>
                  <Image className="image-course" src={ImageCourse} alt="" />
                  <div className="slider-content">
                    <Image className="image-name" src={ImageName} alt="" />
                    <div className="autor">
                      <FaUserAlt className="icon" />
                      <span>Carlos Jaramillo</span>
                    </div>
                    <Button
                      text="Acceder"
                      bg
                      color="redPrimary"
                      variant="sm"
                      onClick={() => swiper.slideNext()}
                    />
                  </div>
                  <div className="overflow"></div>
                </SliderNew>
              </SwiperSlide>
            )
          }
          if (variant === "popular") {
            return (
              <SwiperSlide>
                <SliderPopular>
                  <Image className="image-course" src={PopularCourse} alt="" />
                </SliderPopular>
              </SwiperSlide>
            )
          }

          if (variant === "trailers") {
            return (
              <SwiperSlide>
                <SlidersTrailer>
                  <div className="video-contain">
                    <video
                      className="video"
                      src="https://joy1.videvo.net/videvo_files/video/free/video0455/large_watermarked/_import_609113a1be0e89.39394997_preview.mp4"
                    ></video>
                    <AiFillPlayCircle className="icon-play" size={80} />
                  </div>
                  <div className="slider-content">
                    <h3>Nombre del curso</h3>
                    <div className="autor">
                      <FaUserAlt className="icon" />
                      <span>Carlos Jaramillo</span>
                    </div>
                  </div>
                </SlidersTrailer>
              </SwiperSlide>
            )
          }
        })}
      </Swiper>
    </Main>
  )
}

export default Sliders

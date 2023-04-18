import { HTMLAttributes, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
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
import { log } from "console"

interface SlidersProps {
  variant: "new" | "popular" | "trailers"
  onClickSlider?: (item: any) => void
}

const items = [1, 2, 3, 4, 5]

type SlidersAttributes = SlidersProps & HTMLAttributes<HTMLDivElement>

const Sliders = (props: SlidersAttributes) => {
  const router = useRouter()
  const { variant, onClickSlider = () => false } = props
  const swiper = useSwiper()

  const [slidesPerView, setSlidesPerView] = useState(1)
  useEffect(() => {
    console.log(window.innerWidth)

    if (variant === "popular") {
      setSlidesPerView(3)
    }
    if (variant === "trailers") {
      setSlidesPerView(4)
    }
    if (variant !== "new") {
      if (window.innerWidth < 992) {
        setSlidesPerView(2.4)
      }
      if (window.innerWidth < 768) {
        setSlidesPerView(1.4)
      }
    }
  }, [variant])

  return (
    <Main>
      <Swiper
        style={{ paddingBottom: "3em" }}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        slidesPerView={slidesPerView}
      >
        {items.map((item, index) => {
          if (variant === "new") {
            return (
              <SwiperSlide key={index}>
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
                      onClick={() => router.push("/usuario/curso/1")}
                    />
                  </div>
                  <div className="overflow"></div>
                </SliderNew>
              </SwiperSlide>
            )
          }
          if (variant === "popular") {
            return (
              <SwiperSlide key={index}>
                <SliderPopular>
                  <Image className="image-course" src={PopularCourse} alt="" />
                </SliderPopular>
              </SwiperSlide>
            )
          }

          if (variant === "trailers") {
            return (
              <SwiperSlide key={index}>
                <SlidersTrailer
                  onClick={(ev) =>
                    onClickSlider({
                      title: "Titulo del video",
                      video:
                        "https://app-ambly.s3.amazonaws.com/static/uploads/57865ccfb2df78a10ec0-pexels-pressmaster-3209828-3840x2160-25fps.mp4",
                    })
                  }
                >
                  <div className="video-contain">
                    <video
                      className="video"
                      src="https://joy1.videvo.net/videvo_files/video/free/video0455/large_watermarked/_import_609113a1be0e89.39394997_preview.mp4"
                    ></video>
                    <AiFillPlayCircle className="icon-play" />
                  </div>
                  <div className="slider-content">
                    <h3 className="trailer-title">Nombre del curso</h3>
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

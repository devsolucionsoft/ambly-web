import { HTMLAttributes, useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { Navigation, Pagination } from "swiper"
// Components
import { Button, Typography } from "../"
// Styled components
import {
  Main,
  SliderNew,
  SliderPopular,
  SlidersTrailer,
} from "./Sliders.styled"
import Pintura from "../../assets/images/lago.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { FaUserAlt } from "react-icons/fa"
import { AiFillPlayCircle } from "react-icons/ai"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

interface SlidersProps {
  variant: "new" | "popular" | "trailers"
  onClickSlider?: (item: any) => void
  items?: any
}

type SlidersAttributes = SlidersProps & HTMLAttributes<HTMLDivElement>

const Sliders = (props: SlidersAttributes) => {
  const router = useRouter()
  const [width, setWidth] = useState(0)

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    handleResize()
  }, [])

  const {
    variant,
    onClickSlider = () => false,
    items = [1, 2, 3, 4, 5],
  } = props
  const swiper = useSwiper()

  const [slidesPerView, setSlidesPerView] = useState(1)
  useEffect(() => {
    if (variant === "popular") {
      setSlidesPerView(4)
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
    <Main variant={variant}>
      <Swiper
        style={{ paddingBottom: "3em" }}
        modules={variant === "new" ? [] : [Navigation, Pagination]}
        navigation={variant !== "new"}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        centeredSlides={width < 720}
      >
        {items.map((item: any, index: number) => {
          if (variant === "new") {
            return (
              <SwiperSlide key={index}>
                <SliderNew>
                  <Image
                    className="image-course image-desktop"
                    src={Pintura}
                    alt=""
                    height={1000}
                    width={1000}
                  />
                  <Image
                    className="image-course"
                    src={item?.image_course}
                    alt=""
                    height={1000}
                    width={1000}
                  />
                  <div className="slider-content">
                    <div className="content-1">
                      <Image
                        className="image-name"
                        src={item?.image_name}
                        height={100}
                        width={100}
                        alt=""
                      />
                      <div className="autor">
                        <FaUserAlt className="icon" />
                        <span>{item?.instructor?.name_instructor} </span>
                      </div>
                      <Button
                        text="Acceder"
                        bg
                        color="redPrimary"
                        variant="sm"
                        onClick={() => router.push(`/curso/${item.id}`)}
                      />
                    </div>
                    {/* <div className="content-2">
                      <Typography
                        variant="H6"
                        text={`${item?.description.substr(0, 180)}...`}
                      />
                    </div> */}
                  </div>
                  <div className="overflow"></div>
                </SliderNew>
              </SwiperSlide>
            )
          }
          if (variant === "popular") {
            return (
              <SwiperSlide key={index}>
                <SliderPopular onClick={() => router.push(`/curso/${item.id}`)}>
                  <Image
                    className="image-course"
                    src={item?.image_course}
                    alt=""
                    height={500}
                    width={500}
                  />
                  <Image
                    className="image-name"
                    src={item?.image_name}
                    alt=""
                    height={100}
                    width={100}
                  />
                  <div className="overlay"></div>
                </SliderPopular>
              </SwiperSlide>
            )
          }

          if (variant === "trailers") {
            return (
              <SwiperSlide key={index}>
                <SlidersTrailer>
                  <div
                    className="click"
                    onClick={(ev) => {
                      onClickSlider({
                        title: "Titulo del video",
                        video: item?.video,
                      })
                    }}
                  ></div>
                  <div className="video-contain">
                    <video
                      className="video"
                      style={{ userSelect: "none" }}
                      src={
                        "https://joy1.videvo.net/videvo_files/video/free/video0455/large_watermarked/_import_609113a1be0e89.39394997_preview.mp4"
                      }
                    ></video>
                    <AiFillPlayCircle className="icon-play" />
                  </div>
                  <div className="slider-content">
                    <h3 className="trailer-title">{item?.course_name}</h3>
                    <div className="autor">
                      <FaUserAlt className="icon" />
                      <span>{item?.instructor}</span>
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

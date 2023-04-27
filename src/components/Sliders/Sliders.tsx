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
  const {
    variant,
    onClickSlider = () => false,
    items = [1, 2, 3, 4, 5],
  } = props
  const swiper = useSwiper()

  const [slidesPerView, setSlidesPerView] = useState(1)
  useEffect(() => {
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
        slidesPerView={slidesPerView}
      >
        {items.map((item: any, index: number) => {
          if (variant === "new") {
            return (
              <SwiperSlide key={index}>
                <SliderNew>
                  <Image
                    className="image-course"
                    src={item.image_course}
                    alt=""
                    height={100}
                    width={100}
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
                        onClick={() => router.push(`/usuario/curso/${item.id}`)}
                      />
                    </div>
                    <div className="content-2">
                      <Typography
                        variant="H6"
                        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                      />
                    </div>
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
                  <Image
                    className="image-course"
                    src={item?.instructor?.image_instructor}
                    alt=""
                    height={100}
                    width={100}
                  />
                  <Image
                    className="image-name"
                    src={item.image_name}
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
                        video: item.video,
                      })
                    }}
                  ></div>
                  <div className="video-contain">
                    <video
                      className="video"
                      style={{ userSelect: "none" }}
                      src={item.video}
                    ></video>
                    <AiFillPlayCircle className="icon-play" />
                  </div>
                  <div className="slider-content">
                    <h3 className="trailer-title">{item.course_name}</h3>
                    <div className="autor">
                      <FaUserAlt className="icon" />
                      <span>{item.instructor}</span>
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

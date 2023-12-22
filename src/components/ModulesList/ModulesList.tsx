// React
import Image from "next/image"
import { HTMLAttributes, useState } from "react"
// Styled components
import { Main, ModuleItemMain } from "./ModulesList.styled"
import { AiFillPlayCircle } from "react-icons/ai"
import { BsFillPlayFill } from "react-icons/bs"
import { useRouter } from "next/router"

import { IoIosArrowForward } from "react-icons/io"
import Typography from "../Typography"
import ImageCourse from "../../assets/images/new-course.jpg"
import Swal from "sweetalert2"

interface ModulesListProps {
  items: Array<any>
  currentModule?: number
  currentVideo?: number
  idCourse?: number
  includeCourse? : boolean

}

type ModulesListAttributes = ModulesListProps & HTMLAttributes<HTMLElement>

const ModuleItem = ({
  module,
  indexModule,
  active,
  currentVideo,
  idCourse,
  includeCourse
}: {
  module: any
  indexModule: number
  active?: boolean
  currentVideo?: number
  idCourse?: number
  includeCourse? : boolean
}) => {
  const [openItem, setOpenItem] = useState(false)
  const router = useRouter()

  const showVideo = (indexVideo : number) => {
    if (includeCourse) {
      router.push(
        `/modulo/${idCourse}?modulo=${indexModule}&video=${indexVideo}`
      )
    } else {
      Swal.fire({
        icon : 'info',
        text : 'Para poder acceder al material del curso, por favor, compra el curso.',
        confirmButtonText : 'Comprar curso',
        showCancelButton : true,
        cancelButtonText : 'Seguir explorando',
        
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.setItem("cart_products", JSON.stringify([idCourse]))
          setTimeout(() => {
            router.push("/comprarCurso")
          }, 300) 
        }
      })
    }
  }
  
  return (
    <ModuleItemMain
      openItem={openItem}
      className={`module-item ${active && `module-item-active`}`}
    >
      <div className="header-item" onClick={() => setOpenItem(!openItem)}>
        <div className="flex">
          <div className="icon-container">
            <AiFillPlayCircle className="icon" />
          </div>
          <div className="header-content">
            <Typography
              text={module.name_module}
              variant="H6"
              style={{ textAlign: "left" }}
            />
            <Typography text={`${module.time_module} Horas`} variant="P" />
          </div>
        </div>
        <IoIosArrowForward className="arrow" />
      </div>
      <div className="content">
        <Typography
          text={module.description}
          className="video-desription"
          variant="P"
        />
        <div className="list-videos">
          {module.videos.map((video: any, index: number) => (
            <div
              className={`video-item ${
                currentVideo == index && `video-item-active`
              }`}
              key={index}
              onClick={() =>showVideo(index)}
            >
              <div className="video-image-contain">
                <BsFillPlayFill className="icon-play" />

                <video className="video-image" src={includeCourse ? video.video : ''}></video>
              </div>
              <div className="video-content">
                <Typography text={video.name_video} variant="H6" />
                <Typography text="3:00:00 minutos" variant="P" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ModuleItemMain>
  )
}

const ModulesList = (props: ModulesListAttributes) => {
  const { items, currentModule, idCourse, includeCourse } = props

  return (
    <Main>
      <div className="modules-list">
        {items?.map((item, index) => (
          <ModuleItem
            key={index}
            module={item}
            indexModule={index}
            idCourse={idCourse}
            active={currentModule === index}
            includeCourse={includeCourse}
          />
        ))}
      </div>
    </Main>
  )
}

export default ModulesList

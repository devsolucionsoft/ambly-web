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

interface ModulesListProps {
  items: Array<any>
}

type ModulesListAttributes = ModulesListProps & HTMLAttributes<HTMLElement>

const ModuleItem = ({ module }: { module: any }) => {
  const [openItem, setOpenItem] = useState(false)
  const router = useRouter()
  return (
    <ModuleItemMain openItem={openItem} className="module-item">
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
            <Typography text={module.time_module} variant="P" />
          </div>
        </div>
        <IoIosArrowForward className="arrow" />
      </div>
      <div className="content">
        <Typography text={module.description} variant="P" />
        <div className="list-videos">
          {module.videos.map((video: any, index: number) => (
            <div
              className="video-item"
              key={index}
              onClick={() =>
                router.push(`/usuario/modulo/${module.id}?video=${video.id}`)
              }
            >
              <div className="video-image-contain">
                <BsFillPlayFill className="icon-play" />

                <video className="video-image" src={video.video}></video>
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
  const { items } = props
  return (
    <Main>
      <div className="modules-list">
        {items.map((item, index) => (
          <ModuleItem key={index} module={item} />
        ))}
      </div>
    </Main>
  )
}

export default ModulesList

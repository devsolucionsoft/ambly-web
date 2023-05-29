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
  currentModule?: number
  currentVideo?: number
}

type ModulesListAttributes = ModulesListProps & HTMLAttributes<HTMLElement>

const ModuleItem = ({
  module,
  indexModule,
  active,
  currentVideo,
}: {
  module: any
  indexModule: number
  active?: boolean
  currentVideo?: number
}) => {
  const [openItem, setOpenItem] = useState(false)
  const router = useRouter()

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
            <Typography text={module.time_module} variant="P" />
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
              onClick={() =>
                router.push(`/modulo/${indexModule}?video=${index}`)
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
  const { items, currentModule } = props
  return (
    <Main>
      <div className="modules-list">
        {items.map((item, index) => (
          <ModuleItem
            key={index}
            module={item}
            indexModule={index}
            active={currentModule === index}
          />
        ))}
      </div>
    </Main>
  )
}

export default ModulesList

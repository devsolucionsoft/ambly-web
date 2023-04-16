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

interface ModulesListProps {}

type ModulesListAttributes = ModulesListProps & HTMLAttributes<HTMLElement>

const ModuleItem = () => {
  const [openItem, setOpenItem] = useState(false)
  const router = useRouter()
  return (
    <ModuleItemMain openItem={openItem} className="module-item">
      <div className="header-item" onClick={() => setOpenItem(!openItem)}>
        <div className="flex">
          <AiFillPlayCircle className="icon" />
          <div className="header-content">
            <Typography text="titulo del modulo" variant="H6" />
            <Typography text="3:00:00 minutos" variant="P" />
          </div>
        </div>
        <IoIosArrowForward className="arrow" />
      </div>
      <div className="content">
        <Typography
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          variant="P"
        />
        <div className="list-videos">
          {[1, 2, 3, 4].map((video) => (
            <div
              className="video-item"
              key={video}
              onClick={() => router.push("/usuario/modulo/1")}
            >
              <div className="video-image-contain">
                <BsFillPlayFill className="icon-play" />
                <Image className="video-image" src={ImageCourse} alt="" />
              </div>
              <div className="video-content">
                <Typography text="titulo del modulo" variant="H6" />
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
  const {} = props
  return (
    <Main>
      <div className="modules-list">
        <ModuleItem />
        <ModuleItem />
      </div>
    </Main>
  )
}

export default ModulesList

// Styled components
import { Main } from "./MobileContent.styled"
import Typography from "../Typography"
import { BsGooglePlay } from "react-icons/bs"
import { SiAppstore } from "react-icons/si"

const MobileContent = () => {
  return (
    <Main>
      <div className="shops-section">
        <Typography
          text="Para difrutar de nuestro contenido en tu movil descarga nuestra App:"
          variant="H5"
        />
        <div className="shops">
          <a href="#">
            <BsGooglePlay className="icon" />
            <p>Play Store</p>
          </a>

          <a href="#">
            <SiAppstore className="icon" />
            <p>App Store</p>
          </a>
        </div>
      </div>
    </Main>
  )
}

export default MobileContent

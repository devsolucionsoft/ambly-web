// React
import Link from "next/link"
// Styled components
import { Typography } from "../"
import { Main } from "./Footer.styled"
import { BiHelpCircle } from "react-icons/bi"
import { TfiWorld } from "react-icons/tfi"
import { MdLocalPolice } from "react-icons/md"
import { BsGooglePlay } from "react-icons/bs"
import { SiAppstore } from "react-icons/si"

interface FooterProps {}

const Footer = (props: FooterProps) => {
  const {} = props
  return (
    <Main>
      <div className="links">
        <ul>
          <li>
            <Link href="/politicas" className="nav-item">
              <TfiWorld className="icon" />
              Terminos y condiciones
            </Link>
          </li>
          <li>
            <Link href="/politicas" className="nav-item">
              <MdLocalPolice className="icon" />
              Políticas de privacidad
            </Link>
          </li>
          <li>
            <Link href="/" className="nav-item">
              <BiHelpCircle className="icon" />
              Ayuda y soporte
            </Link>
          </li>
        </ul>
      </div>
      <div className="shops-section">
        <Typography
          text="Descarga nuestra App:"
          variant="P"
          style={{ fontSize: "1.1rem", textAlign: "center" }}
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

export default Footer

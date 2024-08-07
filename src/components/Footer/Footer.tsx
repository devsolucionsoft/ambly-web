// React
import Link from "next/link"
import Image from "next/image"
// Styled components
import { Main } from "./Footer.styled"
import GooglePlay from "../../assets/images/google-play.png"
import AppStore from "../../assets/images/app-store.png"

interface FooterProps {}

const Footer = (props: FooterProps) => {
  const {} = props
  return (
    <Main>
      <div className="footer-top">
        <div className="item-footer">
          <h3 style={{ marginBottom: "1em" }}>Sobre Ambly</h3>
          <div className="links">
            <ul>
              <li>
                <Link href="/about" className="nav-item">
                  {/* <TfiWorld className="icon" /> */}
                  About
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="nav-item">
                  {/* <TfiWorld className="icon" /> */}
                  Terminos y condiciones
                </Link>
              </li>
              <li>
                <Link href="/politicas" className="nav-item">
                  {/* <MdLocalPolice className="icon" /> */}
                  Políticas de privacidad
                </Link>
              </li>
              <li>
                <Link href="mailto:at@ambly.co" target="_blank" className="nav-item">
                  {/* <BiHelpCircle className="icon" /> */}
                  Ayuda y soporte
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="item-footer">
          <h3 style={{ marginBottom: "1em" }}>Descubre Ambly</h3>
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
        </div> */}

        <div className="item-footer">
          <h3 style={{ marginBottom: "1em" }}>Social Ambly</h3>
          <div className="links">
            <ul>
              <li>
                <Link href="https://www.facebook.com/ambly.co" target="_blank" className="nav-item">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/ambly.co/" target="_blank" className="nav-item">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/@ambly_co" target="_blank" className="nav-item">
                  YouTube
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="shops-section">
          <h3 style={{ marginBottom: "1em" }}>Ambly App</h3>
          <div className="shops">
            <a href="#">
              <Image className="icon" src={GooglePlay} alt="" />
            </a>

            <a href="#">
              <Image className="icon" src={AppStore} alt="" />
            </a>
          </div>
        </div> */}
      </div>
      <div className="footer-bottom">
        <p>&#169; 2024 Ambly </p>
      </div>
    </Main>
  )
}

export default Footer
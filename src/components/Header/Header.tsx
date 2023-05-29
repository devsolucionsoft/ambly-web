// React
import { HTMLAttributes, Fragment } from "react"
import Image from "next/image"
import MobileContent from "../MobileContent"
// Styled components
import { Main } from "./Header.styled"
// Images
import IconAmbly from "../../assets/images/icon-ambly.png"
import { HiMenu } from "react-icons/hi"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { BiUser } from "react-icons/bi"

// Redux
import { useAppDispatch } from "../../store"
import { onSideNav } from "../../store/SideNav/actions"
import Link from "next/link"
import { withIronSessionSsr } from "iron-session/next"

import {
  sessionOptions,
  sessionVerificationNotCreated,
} from "../../../lib/session"

interface HeaderProps {
  minimal?: boolean
}

type HeaderAttributes = HeaderProps & HTMLAttributes<HTMLDivElement>

const Header = (props: HeaderAttributes) => {
  const { minimal } = props

  const appDispatch = useAppDispatch()

  const openSidenav = () => {
    appDispatch(onSideNav(true))
  }

  return (
    <Main>
      <div className="contain">
        <Link href="/">
          <Image className="logo" src={IconAmbly} alt="" />
        </Link>

        <div className="links">
          {minimal && (
            <div className="link-item">
              <Link href="/inicio">Iniciar sesion</Link>
            </div>
          )}
          <div className="link-item">
            <Link href="/categorias">Categorías</Link>
          </div>
          {!minimal && (
            <Fragment>
              <div className="link-item">
                <Link href="/mis-cursos">Mis cursos</Link>
              </div>

              <div className="link-item">
                <Link href="/perfil">
                  <BiUser className="icon" />
                </Link>
              </div>
            </Fragment>
          )}
          <div className="link-item">
            <Link href="/carrito">
              <AiOutlineShoppingCart
                className="icon"
                style={{ marginTop: "2px" }}
              />
            </Link>
          </div>
        </div>
        <div className="open-menu" onClick={openSidenav}>
          <HiMenu className="icon" />
        </div>
      </div>
    </Main>
  )
}

export default Header

export const getServerSideProps = withIronSessionSsr(
  sessionVerificationNotCreated,
  sessionOptions
)

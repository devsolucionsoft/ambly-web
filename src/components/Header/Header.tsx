// React
import { HTMLAttributes } from "react"
import Image from "next/image"
import MobileContent from "../MobileContent"
// Styled components
import { Main } from "./Header.styled"
// Images
import IconAmbly from "../../assets/images/icon-ambly.png"
import { HiMenu } from "react-icons/hi"
import { BiUserCircle } from "react-icons/bi"
// Redux
import { useAppDispatch } from "../../store"
import { onSideNav } from "../../store/SideNav/actions"
import Link from "next/link"
import { withIronSessionSsr } from "iron-session/next"
import {
  sessionOptions,
  sessionVerificationNotCreated,
} from "../../../lib/session"

interface HeaderProps {}

type HeaderAttributes = HeaderProps & HTMLAttributes<HTMLDivElement>

const Header = (props: HeaderAttributes) => {
  const {} = props

  const appDispatch = useAppDispatch()

  return (
    <Main>
      <div className="contain">
        <Link href="/usuario/inicio">
          <Image className="logo" src={IconAmbly} alt="" />
        </Link>

        <div className="links">
          <div className="link-item">
            <Link href="/usuario/inicio">Categorías</Link>
          </div>
          <div className="link-item">
            <Link href="/usuario/mis-cursos">Mis cursos</Link>
          </div>
          <div className="link-item">
            <Link href="/usuario/perfil">Perfil</Link>
          </div>
          <div className="link-item">
            <Link href="/usuario/carrito">Carrito</Link>
          </div>
        </div>

        <div className="open-menu" onClick={() => appDispatch(onSideNav(true))}>
          <HiMenu size={35} />
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

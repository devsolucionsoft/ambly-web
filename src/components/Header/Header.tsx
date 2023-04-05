// React
import { HTMLAttributes } from "react"
import Image from "next/image"
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

interface HeaderProps {}

type HeaderAttributes = HeaderProps & HTMLAttributes<HTMLDivElement>

const Header = (props: HeaderAttributes) => {
  const {} = props

  const appDispatch = useAppDispatch()

  return (
    <Main>
      <div id="modal-root"></div>
      <div className="contain">
        <div className="open-menu" onClick={() => appDispatch(onSideNav(true))}>
          <HiMenu size={35} />
        </div>
        <Link href="/usuario/inicio">
          <Image className="logo" src={IconAmbly} alt="" />
        </Link>

        <div className="user">
          <BiUserCircle size={50} />
        </div>
      </div>
    </Main>
  )
}

export default Header

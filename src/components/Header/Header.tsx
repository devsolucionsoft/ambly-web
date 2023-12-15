"use client"
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
import { IoMdArrowBack } from "react-icons/io";


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
  home? : boolean
}

type HeaderAttributes = HeaderProps & HTMLAttributes<HTMLDivElement>

const Header = (props: HeaderAttributes) => {
  const { minimal, home } = props
  let value = "[]"

  if (typeof window !== "undefined") {
    value = localStorage.getItem("cart_products") || "[]"
  }

  //const [stored, setStored] = useState(value)

  // useEffect(() => {
  //   let stored
  //   // Get the value from local storage if it exists
  //   stored = localStorage.getItem("cart_products") || "[]"
  //   setStored(JSON.parse(stored).length)
  // }, [])

  const appDispatch = useAppDispatch()

  const openSidenav = () => {
    appDispatch(onSideNav(true))
  }

  const handleGoBack = () => {
    window.history.back()
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
              <Link href="/inicio">Iniciar sesión</Link>
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
          {/* <div className="link-item item carrito">
            <span>{JSON.parse(value).length}</span>

            <Link href="/carrito">
              <AiOutlineShoppingCart
                className="icon"
                style={{ marginTop: "2px" }}
              />
            </Link>
          </div> */}
        </div>
        <div className="open-menu" onClick={openSidenav}>
          <HiMenu className="icon" />
        </div>
      </div>
      {!home && (
        <IoMdArrowBack className="iconBack"
        onClick={handleGoBack}  
        />
      )}
      
    </Main>
  )
}

export default Header

export const getServerSideProps = withIronSessionSsr(
  sessionVerificationNotCreated,
  sessionOptions
)

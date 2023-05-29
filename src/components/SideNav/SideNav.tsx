import { HTMLAttributes, useState, MouseEvent, Fragment } from "react"
import Link from "next/link"
import Image from "next/image"
import IconAmbly from "../../assets/images/icon-ambly.png"
// Styled components
import { Main } from "./SideNav.styled"
import { AiFillPlayCircle, AiFillBook } from "react-icons/ai"
import { MdOutlineSecurity } from "react-icons/md"
import { FaUser } from "react-icons/fa"
import { BiCategory } from "react-icons/bi"

import { IoExitOutline, IoCloseSharp } from "react-icons/io5"
import { BsCameraVideoFill, BsFillPeopleFill } from "react-icons/bs"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { FiHelpCircle } from "react-icons/fi"
import { TfiWorld } from "react-icons/tfi"
import { MdLocalPolice } from "react-icons/md"

// Redux
import { useAppSelector } from "../../store"
// Redux
import { useAppDispatch } from "../../store"
import { onSideNav } from "../../store/SideNav/actions"
import axios from "axios"
import { useRouter } from "next/router"
import ForgotPassword from "../ForgotPassword"

interface SideNavProps {
  minimal?: boolean
}

type SideNavAttributes = SideNavProps & HTMLAttributes<HTMLDivElement>

const SideNav = (props: SideNavAttributes) => {
  const router = useRouter()
  const { minimal } = props

  const openNav = useAppSelector((store) => store.SideNav)
  const appDispatch = useAppDispatch()

  const [showModal, setShowModal] = useState(false)

  const handleChildClick = (e: MouseEvent<HTMLElement>) => {
    //e.stopPropagation()
  }

  const handleLogout = async () => {
    try {
      await axios.post(`/api/logout`, {})
      router.replace("/inicio")
    } catch (error: any) {}
  }

  return (
    <Main openNav={openNav} onClick={() => appDispatch(onSideNav(false))}>
      <Fragment>
        <ForgotPassword
          showModal={showModal}
          closeModal={() => setShowModal(false)}
        />
        <nav className="nav-content" onClick={handleChildClick}>
          <button
            className="icon-close"
            onClick={(e) => {
              setShowModal(false)
              handleChildClick(e)
            }}
          >
            <IoCloseSharp className="icon" />
          </button>

          <ul className="nav-links">
            {!minimal && (
              <li>
                <Link href="/mis-cursos" className="nav-item">
                  <AiFillPlayCircle className="icon" />
                  Mis cursos
                </Link>
              </li>
            )}

            <li>
              <Link href="/cursos/todos" className="nav-item">
                <AiFillBook className="icon" />
                Todos los cursos
              </Link>
            </li>
            <li>
              <Link href="/trailers" className="nav-item">
                <BsCameraVideoFill className="icon" />
                Trailers
              </Link>
            </li>
            <li>
              <Link href="/maestros" className="nav-item">
                <BsFillPeopleFill className="icon" />
                Maestros
              </Link>
            </li>
            <li className="responsive-header">
              <Link href="/maestros" className="nav-item">
                <BiCategory className="icon" />
                Categorías
              </Link>
            </li>
            <li className="responsive-header">
              <Link href="/maestros" className="nav-item">
                <AiOutlineShoppingCart className="icon" />
                Carrito
              </Link>
            </li>
            <li className="responsive-header">
              <Link href="/politicas" className="nav-item">
                <FiHelpCircle className="icon" />
                Ayuda y soporte
              </Link>
            </li>
            <li className="responsive-header">
              <Link href="/politicas" className="nav-item">
                <TfiWorld className="icon" />
                Términos y condiciónes
              </Link>
            </li>
            <li className="responsive-header">
              <Link href="/politicas" className="nav-item">
                <MdLocalPolice className="icon" />
                Políticas de privacidad
              </Link>
            </li>
            {!minimal && (
              <li>
                <div onClick={() => setShowModal(true)} className="nav-item">
                  <MdOutlineSecurity className="icon" />
                  Cambiar contraseña
                </div>
              </li>
            )}

            {minimal ? (
              <li className="responsive-header">
                <Link href="/login" className="nav-item">
                  <FaUser className="icon" />
                  Iniciar sesion
                </Link>
              </li>
            ) : (
              <li>
                <div className="nav-item" onClick={handleLogout}>
                  <IoExitOutline className="icon" />
                  Cerrar sesión
                </div>
              </li>
            )}
          </ul>
          <Image className="logo" src={IconAmbly} alt="" />
        </nav>
        <div className="overflow"></div>
      </Fragment>
    </Main>
  )
}

export default SideNav

import { HTMLAttributes, useState, MouseEvent, Fragment } from "react"
import Link from "next/link"
// Styled components
import { Main } from "./SideNav.styled"
import { AiFillPlayCircle, AiFillBook } from "react-icons/ai"
import { MdOutlineSecurity, MdLocalPolice } from "react-icons/md"
import { BiHelpCircle } from "react-icons/bi"
import { TfiWorld } from "react-icons/tfi"
import { IoExitOutline, IoCloseSharp } from "react-icons/io5"
import { BsCameraVideoFill, BsFillPeopleFill } from "react-icons/bs"
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
    e.stopPropagation()
  }

  const handleLogout = async () => {
    try {
      await axios.post(`/api/logout`, {})
      router.replace("/")
    } catch (error: any) {}
  }

  return (
    <Main openNav={openNav} onClick={() => appDispatch(onSideNav(false))}>
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
        <h4 className="menu-title">Menú</h4>

        <ul className="nav-links">
          {!minimal && (
            <li>
              <Link href="/usuario/mis-cursos" className="nav-item">
                <AiFillPlayCircle className="icon" />
                Mis cursos
              </Link>
            </li>
          )}
          <li>
            <Link href="/usuario/cursos-populares" className="nav-item">
              <AiFillBook className="icon" />
              Cursos populares
            </Link>
          </li>
          <li>
            <Link href="/usuario/trailers" className="nav-item">
              <BsCameraVideoFill className="icon" />
              Trailers
            </Link>
          </li>
          <li>
            <Link href="/usuario/maestros" className="nav-item">
              <BsFillPeopleFill className="icon" />
              Maestros
            </Link>
          </li>
          {!minimal && (
            <Fragment>
              <li>
                <div onClick={() => setShowModal(true)} className="nav-item">
                  <MdOutlineSecurity className="icon" />
                  Cambiar contraseña
                </div>
              </li>
              <li>
                <Link href="/" className="nav-item">
                  <BiHelpCircle className="icon" />
                  Ayuda y soporte
                </Link>
              </li>
              <li>
                <Link href="/" className="nav-item">
                  <TfiWorld className="icon" />
                  Terminos y condiciones
                </Link>
              </li>
              <li>
                <Link href="/" className="nav-item">
                  <MdLocalPolice className="icon" />
                  Políticas de privacidad
                </Link>
              </li>
              <li>
                <div className="nav-item" onClick={handleLogout}>
                  <IoExitOutline className="icon" />
                  Cerrar sesión
                </div>
              </li>
            </Fragment>
          )}
        </ul>
      </nav>
      <div className="overflow"></div>
    </Main>
  )
}

export default SideNav

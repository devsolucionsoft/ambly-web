import { HTMLAttributes, useState, MouseEvent } from "react"
import Link from "next/link"
// Styled components
import { Main, FormPassword } from "./SideNav.styled"
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
// Component
import Modal from "../Modal"
import Input from "../Input"
import Button from "../Button"

interface SideNavProps {}

type SideNavAttributes = SideNavProps & HTMLAttributes<HTMLDivElement>

const SideNav = (props: SideNavAttributes) => {
  const {} = props

  const openNav = useAppSelector((store) => store.SideNav)
  const appDispatch = useAppDispatch()

  const [showModal, setShowModal] = useState(false)

  const handleChildClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation()
  }

  return (
    <Main openNav={openNav} onClick={() => appDispatch(onSideNav(false))}>
      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
        title="Recuperar contraseña"
      >
        <FormPassword action="">
          <Input type="mail" label="Email" />
          <Button text="Enviar" bg color="redPrimary" />
        </FormPassword>
      </Modal>
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
          <li>
            <Link href="/usuario/mis-cursos" className="nav-item">
              <AiFillPlayCircle className="icon" />
              Mis cursos
            </Link>
          </li>
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
            <Link href="/" className="nav-item">
              <IoExitOutline className="icon" />
              Cerrar sesión
            </Link>
          </li>
        </ul>
      </nav>
      <div className="overflow"></div>
    </Main>
  )
}

export default SideNav

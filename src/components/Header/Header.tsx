"use client"
// React
import { HTMLAttributes, Fragment, useEffect } from "react"
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

  useEffect(() => {
    // Add Google Analytics script
    const gtagScript = document.createElement("script")
    gtagScript.async = true
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-E51525C3XQ"
    document.head.appendChild(gtagScript)

    const gtagScriptConfig = document.createElement("script")
    gtagScriptConfig.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-E51525C3XQ');
    `
    document.head.appendChild(gtagScriptConfig)

    // Add Google Tag Manager script
    const gtmScript = document.createElement("script")
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-TQLXF6TM');
    `
    document.head.appendChild(gtmScript)

    // Add Google Tag Manager noscript
    const noscript = document.createElement("noscript")
    noscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TQLXF6TM"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `
    document.body.appendChild(noscript)

    return () => {
      document.head.removeChild(gtagScript)
      document.head.removeChild(gtagScriptConfig)
      document.head.removeChild(gtmScript)
      document.body.removeChild(noscript)
    }
  }, [])

  return (
    <Main>
      <div className="contain">
        <Link href="/">
          <Image className="logo" src={IconAmbly} alt="" />
        </Link>

        <div className="links">
          {minimal && (
            <div className="link-item">
              <Link href="/login">Iniciar sesión</Link>
            </div>
          )}
          {/* <div className="link-item">
            <Link href="/categorias">Categorías</Link>
          </div> */}
          {!minimal && (
            <Fragment>
              {/* <div className="link-item">
                <Link href="/mis-cursos">Mis cursos</Link>
              </div> */}

              <div className="link-item">
                <Link href="/perfil">
                  <BiUser className="icon" />
                </Link>
              </div>
            </Fragment>
          )}
          {/* <div className="link-item item carrito">
            <span>{JSON.parse(value).length}</span>

            <Link href="/comprarCurso">
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

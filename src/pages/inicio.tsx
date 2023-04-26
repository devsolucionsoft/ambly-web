import Head from "next/head"
import { useRouter } from "next/router"
// Styled components
import { Main } from "../styles/index.styled"
import Image from "next/image"
import IconAmbly from "../assets/images/icon-ambly.png"
// Components
import { Button, Typography } from "../components"
import { BsGooglePlay } from "react-icons/bs"
import { SiAppstore } from "react-icons/si"
import { withIronSessionSsr } from "iron-session/next"
import { sessionOptions, sessionVerificationCreated } from "../../lib/session"

export default function Home() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <div className="contain">
          <Image className="icon" src={IconAmbly} alt="" />
          <div className="init-session">
            <Typography
              text="Crea una cuenta para continuar"
              variant="H6"
              style={{ marginBottom: "1em" }}
            />
            <br />
            <br />
            <br />
            <Button
              text="Crear con correo electrónico"
              bg
              color="redPrimary"
              onClick={() => router.push("registro")}
            />
            <br />
            <br />
            <Button
              text="Accede a tu cuenta"
              style={{ textDecoration: "underline", textAlign: "center" }}
              onClick={() => router.push("login")}
            />
          </div>

          <div className="divider"></div>
          <div>
            <Button
              text="Explora nuestros cursos"
              bg
              color="ligth"
              style={{ color: "#000000" }}
              onClick={() => router.push("/")}
            />
          </div>
          <div className="divider"></div>

          <div className="shops-section">
            <Typography
              text="Descarga nuestra App:"
              variant="P"
              style={{ fontSize: "1.1rem" }}
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
        </div>
      </Main>
    </>
  )
}

export const getServerSideProps = withIronSessionSsr(
  sessionVerificationCreated,
  sessionOptions
)

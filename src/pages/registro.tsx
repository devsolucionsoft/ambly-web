import Head from "next/head"
// Styled components
import { Main } from "../styles/login.styled"
// Components
import { Button, Typography, Input } from "../components"

export default function Login() {
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
          <Typography text="Crea una cuenta" variant="H1" />
          <form className="form-login" action="">
            <Input type="text" label="Nombre" />
            <Input type="text" label="E-mail" />
            <Input type="password" label="Contraseña" />

            <div className="politis">
              <p>
                Al continuear acepto <span> términos y condiciones</span> y{" "}
                <span>políticas de privacidad</span>
              </p>
            </div>

            <div className="button-contain">
              <Button text="INICIAR" bg color="redPrimary" />
            </div>
          </form>
        </div>
      </Main>
    </>
  )
}

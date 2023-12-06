import Head from "next/head"
import { useState } from "react"
import { useRouter } from "next/router"

// Styled components
import { Main } from "../styles/login.styled"
// Components
import { Button, Typography, Input, Loader } from "../components"
import { withIronSessionSsr } from "iron-session/next"
import { sessionOptions, sessionVerificationCreated } from "../../lib/session"
// Api
import { AuthApi } from "./api/"
// Hooks
import useValidateForm, {
  InputValidationI,
  IErrorInputs,
} from "../hooks/useValidateForm"

import Swal from "sweetalert2"

export default function Login() {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const AuthApiModel = new AuthApi()

  const defaultInputs = {
    email: "",
    password: "",
    username: "",
  }
  // States inputs
  const [stateInputs, setStateInputs] = useState(defaultInputs)
  // Use Hook Validation
  const defaultValidation: InputValidationI = {
    email: { required: "email" },
    password: { required: "text" },
    username: { required: "text" },
  }
  const { validationInputs, getValidation } = useValidateForm({
    defaultInputs,
    defaultValidation,
  })
  const [errorInputs, setErrorInputs] = useState<IErrorInputs>(validationInputs)
  // Inputs keyup
  const handleKeyUp = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setStateInputs({
      ...stateInputs,
      [event.target.name]: event.target.value,
    })
    setErrorInputs(validationInputs)
  }

  const handleRegistry = async () => {
    const { errors, validation } = getValidation(stateInputs)

    if (validation) {
      setLoading(true)
      const repsonse = await AuthApiModel.UserRegister(stateInputs)
      switch (repsonse.status) {
        case 201:
          Swal.fire({
            title: "Registro exitoso.",
            text: "Ya puedes iniciar sesión",
            icon: "success",
            confirmButtonText: "Ir a inicio de sesión",
          }).then(() => {
            router.replace("/login")
          })
          break
        default:
          Swal.fire({
            title: "No se ha podido realizar el regístro.",
            text: "Comprueba tu email e intentalo mas tarde",
            icon: "error",
            confirmButtonText: "Aceptar",
          })
          break
      }
      setLoading(false)
    } else {
      setErrorInputs({
        ...errorInputs,
        ...errors,
      })
    }
  }

  return (
    <>
      <Head>
        <title>Ambly</title>
        <meta name="description" content="Generated by Ambly" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Loader loading={loading} />
        <div className="contain">
          <Typography text="Crea una cuenta" variant="H2" />
          <div className="form-login">
            <Input
              type="text"
              label="Nombre"
              name="username"
              onChange={handleKeyUp}
              error={errorInputs.username.error}
              message={errorInputs.username.message}
            />
            <Input
              type="text"
              label="E-mail"
              name="email"
              onChange={handleKeyUp}
              error={errorInputs.email.error}
              message={errorInputs.email.message}
            />
            <Input
              type="password"
              label="Contraseña"
              name="password"
              onChange={handleKeyUp}
              error={errorInputs.password.error}
              message={errorInputs.password.message}
            />

            <div className="politis">
              <p>
                Al continuar acepto <span> términos y condiciones</span> y{" "}
                <span>políticas de privacidad</span>
              </p>
            </div>

            <div className="button-contain">
              <Button
                text="INICIAR"
                bg
                color="redPrimary"
                onClick={handleRegistry}
              />
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

import { useRouter } from "next/router"
import Head from "next/head"
import { useState, useEffect } from "react"
// Styled components
import { Main } from "../styles/login.styled"
// Components
import {
  Button,
  Typography,
  Input,
  ForgotPassword,
  Loader,
} from "../components"
// Hooks
import useValidateForm, {
  InputValidationI,
  IErrorInputs,
} from "../hooks/useValidateForm"
import axios from "axios"
import { withIronSessionSsr } from "iron-session/next"
import { sessionOptions, sessionVerificationCreated } from "../../lib/session"
import Swal from "sweetalert2"

export default function Login() {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const [showModal, setShowModal] = useState(false)

  const defaultInputs = {
    email: "",
    password: "",
  }
  // States inputs
  const [stateInputs, setStateInputs] = useState(defaultInputs)
  // Use Hook Validation
  const defaultValidation: InputValidationI = {
    email: { required: "email" },
    password: { required: "text" },
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

  const handleLogin = async () => {
    const { errors, validation } = getValidation(stateInputs)

    if (validation) {
      setLoading(true)
      try {
        await axios.post(`/api/login`, stateInputs)
        router.replace("/")
      } catch (error: any) {
        setLoading(false)

        Swal.fire({
          title: "Valida tu usuario y contraseña",
          icon: "error",
          confirmButtonText: "Aceptar",
        })
      }
    } else {
      setLoading(false)
      setErrorInputs({
        ...errorInputs,
        ...errors,
      })
    }
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Loader loading={loading} />
        <ForgotPassword
          showModal={showModal}
          closeModal={() => setShowModal(false)}
        />
        <div className="contain">
          <Typography text="Iniciar sesion" variant="H1" />
          <div className="form-login">
            <Input
              type="email"
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

            <div className="forget-password">
              <p onClick={() => setShowModal(true)}>¿Olvidaste tu contraseña</p>
            </div>

            <div className="button-contain">
              <Button
                text="INICIAR"
                bg
                color="redPrimary"
                onClick={handleLogin}
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

import { useRouter } from "next/router"
import Head from "next/head"
import { useState } from "react"
import { withIronSessionSsr } from "iron-session/next"
import Swal from "sweetalert2"
// Styled components
import { Main } from "../../styles/login.styled"
// Components
import {
  Button,
  Typography,
  Input,
  ForgotPassword,
  Loader,
} from "../../components"
// Hooks
import useValidateForm, {
  InputValidationI,
  IErrorInputs,
} from "../../hooks/useValidateForm"
import { sessionOptions, sessionVerificationCreated } from "../../../lib/session"
// API
import { AuthApi } from "../../pages/api"

export default function NewPassword() {
  const router = useRouter()
  const { token }: any = router.query
  const AuthApiModel = new AuthApi()
  const defaultInputs = {
    password: "",
    passwordVerify: "",
  }
  // Use Hook Validation
  const defaultValidation: InputValidationI = {
    password: { required: "text",  },
    passwordVerify: { required: "text" },
  }
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [stateInputs, setStateInputs] = useState(defaultInputs)

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

  const handleNewPassword = async () => {
    const { errors, validation } = getValidation(stateInputs)
    if (validation) {
      if(stateInputs.password !== stateInputs.passwordVerify){
        Swal.fire({
          title: "Las contraseñas no coinciden...",
          icon: "error",
          confirmButtonText: "Aceptar",
        })
        setErrorInputs({
          ...errorInputs,
          ...errors,
        })
        return
      }
      setLoading(true)
      try {
        await AuthApiModel.ChangePassword(stateInputs.password, token)
        
        Swal.fire({
          title: "Contraseña guardada exitosamente!",
          icon: "success",
          confirmButtonText: "Aceptar",
        })
        router.replace("/login")
      } catch (error: any) {
        setLoading(false)
        Swal.fire({
          title: stateInputs.password.length < 6 ? "Su contraseña debe tener 6 caracteres mínimo..." : "Valida tu contraseña ingresa...",
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
          <Typography text="Recuperar contraseña" variant="H1" />
          <p className="subtitle">Ingrese su nueva contraseña a continuación:</p>
          <div className="form-login">
            <Input
              type="password"
              label="Contraseña"
              placeholder="Ingrese su contraseña"
              name="password"
              value={stateInputs.password}
              onChange={handleKeyUp}
              error={errorInputs.password.error}
              message={errorInputs.password.message}
            />
            <Input
              type="password"
              label="Repetir Contraseña"
              placeholder="Confirme su contraseña"
              name="passwordVerify"
              value={stateInputs.passwordVerify}
              onChange={handleKeyUp}
              error={errorInputs.passwordVerify.error}
              message={errorInputs.passwordVerify.message}
            />

            <div className="button-contain">
              <Button
                text="Guardar"
                bg
                color="redPrimary"
                onClick={handleNewPassword}
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

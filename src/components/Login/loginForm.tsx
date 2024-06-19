// components/LoginForm.tsx
import { useRouter } from "next/router"
import { useState } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import Link from "next/link"

import { Main } from "../../styles/login.styled"
import {
  Button,
  Typography,
  Input,
  ForgotPassword,
  Loader,
} from "../../components"
import useValidateForm, {
  InputValidationI,
  IErrorInputs,
} from "../../hooks/useValidateForm"

export default function LoginForm() {
  const router = useRouter()
  const currentPath = router.asPath;

  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const defaultInputs = {
    email: "",
    password: "",
  }
  const [stateInputs, setStateInputs] = useState(defaultInputs)
  const defaultValidation: InputValidationI = {
    email: { required: "email" },
    password: { required: "text" },
  }
  const { validationInputs, getValidation } = useValidateForm({
    defaultInputs,
    defaultValidation,
  })
  const [errorInputs, setErrorInputs] = useState<IErrorInputs>(validationInputs)

  const handleKeyUp = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setStateInputs({
      ...stateInputs,
      [event.target.name]: event.target.value,
    })
    setErrorInputs(validationInputs)
  }

  const handleKeyEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  }

  const handleLogin = async () => {
    const { errors, validation } = getValidation(stateInputs)

    if (validation) {
      setLoading(true)
      try {
        await axios.post(`/api/login`, stateInputs)
        const redirectPath = currentPath || "/";
        router.replace(redirectPath as string);
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
      <Loader loading={loading} />
      <ForgotPassword
        showModal={showModal}
        closeModal={() => setShowModal(false)}
      />
      <div className="containForm">
        <Typography text="Iniciar sesión" variant="H4" />
        <div className="form-login" onKeyUp={handleKeyEnter}>
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
            visible={true}
          />
          <div className="forget-password">
            <p onClick={() => setShowModal(true)}>¿Olvidaste tu contraseña?</p>
          </div>
          <div className="button-contain">
            <Button
              text="INICIAR SESIÓN"
              bg
              color="redPrimary"
              onClick={handleLogin}
            />
          </div>
          <div className="button-contain">
            <Link href="/registro">
                <Button
                text="REGISTRARSE"
                bg
                color="dark"
                />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
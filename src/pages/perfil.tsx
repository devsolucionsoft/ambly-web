import { useState, useEffect } from "react"
import Head from "next/head"
// Styled components
import { Main } from "../styles/perfil.styled"
// Components
import {
  Header,
  Typography,
  SideNav,
  Input,
  Button,
  Footer,
  Select,
} from "../components"
import { withIronSessionSsr } from "iron-session/next"
import {
  sessionOptions,
  sessionVerificationNotCreated,
} from "../../lib/session"
// Hooks
import useValidateForm, {
  InputValidationI,
  IErrorInputs,
} from "../hooks/useValidateForm"
import axios from "axios"
import Swal from "sweetalert2"
import { UserApi } from "./api"

export default function Perfil(props: any) {
  
  const UserApiModel = new UserApi()

  const defaultInputs = {
    username: "",
    email: "",
    phone: "",
  }
  // States inputs
  const [stateInputs, setStateInputs] = useState(defaultInputs)
  // Use Hook Validation
  const defaultValidation: InputValidationI = {
    username: { required: "text" },
    email: { required: "email" },
    phone: { required: "number", minLengt: 5 },
  }

  const { validationInputs, getValidation } = useValidateForm({
    defaultInputs,
    defaultValidation,
  })

  const [errorInputs, setErrorInputs] = useState<IErrorInputs>(validationInputs)
  // Inputs keyup
  const handleKeyUp = (value: string, name: string): void => {
    setStateInputs({
      ...stateInputs,
      [name]: value,
    })
    setErrorInputs(validationInputs)
  }
  
  useEffect(() => {
    ;(async () => {
      const response = await UserApiModel.GetUser(props.user.id)
      setStateInputs({
        username: response.data.user.username,
        email: response.data.user.email,
        phone: response.data.user.phone,
      })
    })()
  }, [])

  useEffect(() => {
    ;(async () => {})()
  }, [])

  const handleSend = async () => {
    const { errors, validation } = getValidation(stateInputs)
    
    if (validation) {
      const response = await UserApiModel.EditUser(props?.user.id, stateInputs, props?.user.token)
      if (response.status === 201) {
        Swal.fire({
          title: "Usuario editado",
          text: "",
          icon: "success",
          confirmButtonText: "Aceptar",
        })
      } else {
        Swal.fire({
          title: "Ha ocurrido un error.",
          text: "Intentalo mas tarde",
          icon: "error",
          confirmButtonText: "Aceptar",
        })
      }
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
        <SideNav />
        <Header />

        <div className="content-page">
          <Typography text="Perfil" variant="H4" />
          <br />
          <div>
          <Input
            type="text"
            label="Nombre"
            name="username"
            onChange={(ev) => handleKeyUp(ev.target.value, "username")}
            value={stateInputs.username}
            error={errorInputs.username.error}
            message={errorInputs.username.message}
          />
          <Input
            type="email"
            label="Email"
            disabled
            name="email"
            value={stateInputs.email}
            onChange={(ev) => handleKeyUp(ev.target.value, "email")}
          />
          <Input
            type="number"
            label="Teléfono"
            onChange={(ev) => handleKeyUp(ev.target.value, "phone")}
            name="phone"
            value={stateInputs.phone}
            error={errorInputs.phone.error}
            message={errorInputs.phone.message}
          />
          {/* <Select label="Ciudad" options={countries} /> */}
          <br />
          <br />
          <Button text="Aceptar" bg color="redPrimary" onClick={handleSend} />

          </div>
        </div>
        <Footer />
      </Main>
    </>
  )
}

export const getServerSideProps = withIronSessionSsr(
  sessionVerificationNotCreated,
  sessionOptions
)

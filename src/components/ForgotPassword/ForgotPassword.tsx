// React
import { useState } from "react"
// Styled components
import { FormPassword } from "./ForgotPassword.styled"
import Modal from "../Modal"
import Input from "../Input"
import Button from "../Button"
import { AuthApi } from "../../pages/api"
import Swal from "sweetalert2"

// Hooks
import useValidateForm, {
  InputValidationI,
  IErrorInputs,
} from "../../hooks/useValidateForm"
interface ForgotPasswordProps {
  showModal: boolean
  closeModal: any
}

type ForgotPasswordAttributes = ForgotPasswordProps

const ForgotPassword = (props: ForgotPasswordAttributes) => {
  const AuthApiModel = new AuthApi()

  const { showModal, closeModal } = props

  const defaultInputs = {
    email: "",
  }
  // States inputs
  const [stateInputs, setStateInputs] = useState(defaultInputs)
  // Use Hook Validation
  const defaultValidation: InputValidationI = {
    email: { required: "email" },
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
  const handleKeyEnter = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    const { errors, validation } = getValidation(stateInputs)

    if (validation) {
      await AuthApiModel.ForgotPassword(stateInputs.email)
      Swal.fire({
        title: "Revisa tu correo para continuar con el proceso",
        icon: 'success',
        confirmButtonText: "Aceptar",
      }).then(() => {
        closeModal();
      })
    } else {
      setErrorInputs({
        ...errorInputs,
        ...errors,
      })
    }
  }
  return (
    <Modal onClose={closeModal} show={showModal} title="Recuperar contraseña">
      <FormPassword onSubmit={handleSubmit}>
        <span style={{ marginBottom: "10px" }}>Confirma tu email para cambiar clave: </span>
        <Input
          type="email"
          label="Correo electrónico"
          name="email"
          onChange={handleKeyUp}
          onKeyUp={handleKeyEnter}
          error={errorInputs.email.error}
          message={errorInputs.email.message}
        />
        <Button text="Enviar" bg color="redPrimary" onClick={handleSubmit} style={{ marginTop: "1em", width: '70%' }} />
      </FormPassword>
    </Modal>
  )
}

export default ForgotPassword

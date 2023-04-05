// React
import { HTMLAttributes } from "react"
// Styled components
import { Main } from "./Input.styled"

interface InputProps {
  label?: string
  type: "text" | "mail" | "password"
}

type InputAttributes = InputProps & HTMLAttributes<HTMLInputElement>

const Input = (props: InputAttributes) => {
  const { type, label } = props
  return (
    <Main>
      <label htmlFor="">{label}</label>
      <input {...props} type={type} placeholder={label} />
    </Main>
  )
}

export default Input

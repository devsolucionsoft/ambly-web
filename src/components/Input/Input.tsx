// React
import { HTMLAttributes } from "react"
// Styled components
import { Main } from "./Input.styled"

export interface InputProps {
  label?: string
  name: string
  type: "text" | "email" | "password"
  error?: boolean
  message?: string
}

type InputAttributes = InputProps & HTMLAttributes<HTMLInputElement>

const Input = (props: InputAttributes) => {
  const { type, label, name, error, message } = props
  return (
    <Main {...props}>
      <label htmlFor={name}>{label}</label>
      <input {...props} type={type} placeholder={label} name={name} />
      {error && <label className="label-error">{message}</label>}
    </Main>
  )
}

export default Input

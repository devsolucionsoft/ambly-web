// React
import { HTMLAttributes, DetailedHTMLProps, InputHTMLAttributes } from "react"
// Styled components
import { Main } from "./Input.styled"

export interface InputProps {
  label?: string
  name: string
  type: "text" | "email" | "password" | "number"
  error?: boolean
  message?: string
}

type InputAttributes = InputProps &
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input = (props: InputAttributes) => {
  const { type, label, name, error = false, message } = props
  return (
    <Main error={error}>
      <label htmlFor={name}>{label}</label>
      <input {...props} type={type} placeholder={label} name={name} />
      {error && <label className="label-error">{message}</label>}
    </Main>
  )
}

export default Input

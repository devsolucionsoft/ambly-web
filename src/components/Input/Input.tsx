// React
import { HTMLAttributes, DetailedHTMLProps, InputHTMLAttributes, useState } from "react"
// Styled components
import { Main } from "./Input.styled"
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";



export interface InputProps {
  label?: string
  name: string
  type: "text" | "email" | "password" | "number"
  error?: boolean
  message?: string
  placeholder?: string
  visible?: boolean
}

type InputAttributes = InputProps &
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input = (props: InputAttributes) => {
  const { type, label, name, error = false, message, placeholder, visible } = props
  const [showPassword, setSetshowPassword] = useState(false)

  const changeVisibility = () => {
    setSetshowPassword(!showPassword)
  }
  return (
    <Main error={error}>
      <label htmlFor={name}>{label}</label>
      <section>
        <input {...props} type={showPassword ? "text" : type} placeholder={placeholder ?? label} name={name} />
        {visible ? !showPassword ? <FaRegEyeSlash className="icon" size={24} onClick={changeVisibility} /> : <FaRegEye className="icon" size={24} onClick={changeVisibility} /> : ''}
      </section>
      {error && <label className="label-error">{message}</label>}

    </Main>
  )
}

export default Input

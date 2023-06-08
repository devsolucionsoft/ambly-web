// React
import { HTMLAttributes, DetailedHTMLProps, InputHTMLAttributes } from "react"
// Styled components
import { Main } from "./Select.styled"
import { log } from "console"

export interface InputProps {
  label?: string
  error?: boolean
  message?: string
  options: Array<any>
}

type InputAttributes = InputProps &
  DetailedHTMLProps<InputHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

const Input = (props: InputAttributes) => {
  const { type, label, name, error = false, message, options } = props

  return (
    <Main error={error}>
      <label htmlFor={name}>{label}</label>
      <select name="" id="">
        <option value="" selected>
          Elija una opcion
        </option>
        {options.map((item) => (
          <option value={item.value} key={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </Main>
  )
}

export default Input

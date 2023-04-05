// React
import { HTMLAttributes } from "react"
// Styled components
import { Main } from "./Button.styled"

interface ButtonProps {}

type ButtonAttributes = ButtonProps & HTMLAttributes<HTMLButtonElement>

const Button = (props: ButtonAttributes) => {
  const {} = props
  return <Main></Main>
}

export default Button

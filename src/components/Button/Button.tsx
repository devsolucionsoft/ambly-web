// React
import { HTMLAttributes } from "react"
import { Main, MainSm } from "./Button.styled"
// Theme
import { paletteTypes } from "../../theme"

export interface ButtonProps {
  text: string
  bg?: boolean
  color?: paletteTypes
  variant?: "lg" | "sm"
}

type ButtonAttributes = ButtonProps & HTMLAttributes<HTMLButtonElement>

const Button = (props: ButtonAttributes) => {
  const { text, variant } = props

  if (variant === "sm") {
    return <MainSm {...props}>{text}</MainSm>
  }

  return <Main {...props}>{text}</Main>
}

export default Button

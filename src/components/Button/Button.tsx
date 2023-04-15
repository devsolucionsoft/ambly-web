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
  disabled?: boolean
}

type ButtonAttributes = ButtonProps & HTMLAttributes<HTMLButtonElement>

const Button = (props: ButtonAttributes) => {
  const { text, variant, disabled } = props

  if (variant === "sm") {
    return (
      <MainSm disabled={disabled} {...props}>
        {text}
      </MainSm>
    )
  }

  return (
    <Main disabled={disabled} {...props}>
      {text}
    </Main>
  )
}

export default Button

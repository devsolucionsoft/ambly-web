// React
import { HTMLAttributes } from "react"
// Components
import Typography from "../Typography"
// Styled components
import { Main } from "./HeaderSection.styled"

interface ButtonProps {
  title: string
  action?: any
}

type ButtonAttributes = ButtonProps & HTMLAttributes<HTMLButtonElement>

const Button = (props: ButtonAttributes) => {
  const { title, action } = props
  return (
    <Main>
      <div className="contain">
        <Typography text={title} variant="H2" />
        <div>{action && <button className="action">Ver todos</button>}</div>
      </div>
    </Main>
  )
}

export default Button

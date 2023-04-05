// React
import { HTMLAttributes } from "react"
// Styled components
import { H1, H2, H3, H4, H5, H6, P } from "./Typography.styled"

export interface TypographyProps {
  text: string
  variant: "H1" | "H2" | "H3" | "H4" | "H5" | "H6" | "P"
}

type TypographyAttributes = TypographyProps & HTMLAttributes<HTMLHeadingElement>

const Typography = (props: TypographyAttributes) => {
  const { variant, text } = props

  switch (variant) {
    case "H1":
      return <H1 {...props}>{text}</H1>
    case "H2":
      return <H2 {...props}>{text}</H2>
    case "H3":
      return <H3 {...props}>{text}</H3>
    case "H4":
      return <H4 {...props}>{text}</H4>
    case "H5":
      return <H5 {...props}>{text}</H5>
    case "H6":
      return <H6 {...props}>{text}</H6>
    case "P":
      return <P {...props}>{text}</P>
    default:
    case "P":
      return <P {...props}>{text}</P>
  }
}

export default Typography

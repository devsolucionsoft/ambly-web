import styled from "styled-components"
import { ButtonProps } from "./Button"
export const Main = styled.main<ButtonProps>`
  padding: 0.7em 1.8em;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 50px;
  text-align: center;
  ${(props) =>
    props.bg &&
    props.color &&
    `background-color: ${props.theme.colors[props.color]}`}; ;
`

export const MainSm = styled.main<ButtonProps>`
  padding: 0.5em 2.5em;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 10px;
  text-align: center;
  ${(props) =>
    props.bg &&
    props.color &&
    `background-color: ${props.theme.colors[props.color]}`}; ;
`

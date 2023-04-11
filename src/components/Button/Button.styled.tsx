import styled from "styled-components"
import { ButtonProps } from "./Button"
export const Main = styled.main<ButtonProps>`
  padding: 0.6em 1.7em;
  font-size: 1.1rem;
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
  padding: 0.4em 2.4em;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 10px;
  text-align: center;
  ${(props) =>
    props.bg &&
    props.color &&
    `background-color: ${props.theme.colors[props.color]}`}; ;
`

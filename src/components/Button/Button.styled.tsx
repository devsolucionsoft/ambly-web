import styled from "styled-components"
import { ButtonProps } from "./Button"
export const Main = styled.button<ButtonProps>`
  padding: 0.6em 1.7em;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 50px;
  text-align: center;
  border: none;
  color: ${(props) => props.theme.colors.ligth};
  width: 100%;
  ${(props) =>
    props.bg && props.color
      ? `background-color: ${props.theme.colors[props.color]}`
      : `background-color: transparent`}
`

export const MainSm = styled.button<ButtonProps>`
  padding: 0.4em 2.4em;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  color: ${(props) => props.theme.colors.ligth};
  text-align: center;
  ${(props) =>
    props.bg && props.color
      ? `background-color: ${props.theme.colors[props.color]}`
      : `background-color: transparent`}; ;
`

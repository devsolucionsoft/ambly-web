import styled from "styled-components"
import { InputProps } from "./Input"

export const Main = styled.div<{ error: boolean }>`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;

  label {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  input {
    background-color: transparent;
    font-size: 1rem;
    padding: 0.7rem 1.3rem;
    border-radius: 0.5rem;
    color: ${(props) => props.theme.colors.ligth};
    border: 1px solid
      ${(props) =>
        props.error ? props.theme.colors.redPrimary : props.theme.colors.ligth};
  }

  .label-error {
    margin-top: 0.5rem;
    color: ${(props) => props.theme.colors.redPrimary};
  }
`

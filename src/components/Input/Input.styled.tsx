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

  section {
    display : flex;
    justify-content : space-between;
    align-items : center;
    border-radius: 0.5rem;
    border: 1px solid;
    padding : 0 1em;
      ${(props) =>
    props.error ? props.theme.colors.redPrimary : props.theme.colors.ligth};
        input {
          background-color: transparent;
    font-size: 1rem;
    padding: 0.7rem 0;
    border : none;
    outline : none;
    color: ${(props) => props.theme.colors.ligth};
    width : 95%; 

    
  }
  .icon {
    cursor : pointer;
  }
  }

  .label-error {
    margin-top: 0.5rem;
    color: ${(props) => props.theme.colors.redPrimary};
  }
`

import styled from "styled-components"
// Types
import { TypographyProps } from "./Typography"

export const H1 = styled.h1<TypographyProps>`
  font-size: 3rem;
  font-weight: 500;
  @media (max-width: ${(props) => props.theme.sizes.md}) {
    font-size: 2rem;
  }
`
export const H2 = styled.h2<TypographyProps>`
  font-size: 2.4rem;
  font-weight: 500;
  @media (max-width: ${(props) => props.theme.sizes.md}) {
    font-size: 2.2rem;
  }
`
export const H3 = styled.h3<TypographyProps>`
  font-size: 2.3rem;
  font-weight: 500;
  @media (max-width: ${(props) => props.theme.sizes.md}) {
    font-size: 2rem;
  }
`
export const H4 = styled.h4<TypographyProps>`
  font-size: 1.9rem;
  font-weight: 500;
  @media (max-width: ${(props) => props.theme.sizes.md}) {
    font-size: 1.6rem;
  }
`
export const H5 = styled.h5<TypographyProps>`
  font-size: 1.5rem;
  font-weight: 500;
  @media (max-width: ${(props) => props.theme.sizes.md}) {
    font-size: 1.3rem;
  }
`
export const H6 = styled.h6<TypographyProps>`
  font-size: 1.3rem;
  font-weight: 500;
  @media (max-width: ${(props) => props.theme.sizes.md}) {
    font-size: 1.1rem;
  }
`
export const P = styled.p<TypographyProps>`
  font-size: 1rem;
  line-height: 160%;
  letter-spacing: 0.05rem;
  @media (max-width: ${(props) => props.theme.sizes.md}) {
    font-size: 0.9rem;
  }
`

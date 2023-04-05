import { DefaultTheme } from "styled-components"

export type paletteTypes =
  | "ligth"
  | "black"
  | "dark"
  | "graySecondary"
  | "grayText"
  | "redPrimary"
  | "yellowPrimary"
  | "yellowSecondary"
  | "blueText"
  | "blueRed"

export const theme: DefaultTheme = {
  margin: {
    vertical: "1em",
    horizontal: "2em",
  },
  colors: {
    ligth: "#FFFFFF",
    black: "#000000",
    dark: "#181818",
    grayText: "#B3B3B3",
    graySecondary: "#2B2B2B",
    grayTertiary: "#454545",
    redPrimary: "#FF3437",
    yellowPrimary: "#FBBC02",
    yellowSecondary: "#F8E84B",
    blueText: "#8FDDFE",
    blueRed: "#435B9A",
  },
  sizes: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
  },
}

export const palette = theme.colors

export const media = theme.sizes

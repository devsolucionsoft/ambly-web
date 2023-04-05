// import original module declarations
import "styled-components"

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    margin: {
      vertical: string
      horizontal: string
    }
    colors: {
      ligth: string
      black: string
      dark: string
      grayText: string
      graySecondary: string
      grayTertiary: string
      redPrimary: string
      yellowPrimary: string
      yellowSecondary: string
      blueText: string
      blueRed: string
    }
    sizes: {
      xxl: string
      xl: string
      lg: string
      md: string
      sm: string
    }
  }
}

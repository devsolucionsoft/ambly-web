import "@/styles/globals.css"
import type { AppProps } from "next/app"
// Styled components
import { ThemeProvider } from "styled-components"
// Theme
import { theme } from "../theme"
// Redux
import { Provider } from "react-redux"
import store from "../store"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <div id="modal-root"></div>
      </ThemeProvider>
    </Provider>
  )
}

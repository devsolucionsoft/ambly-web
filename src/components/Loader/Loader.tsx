// React
import { Fragment } from "react"
// Styled components
import { Main } from "./Loader.styled"

interface LoaderProps {
  loading: boolean
}

const Loader = (props: LoaderProps) => {
  const { loading } = props
  return (
    <Fragment>
      {loading && (
        <Main>
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Main>
      )}
    </Fragment>
  )
}

export default Loader

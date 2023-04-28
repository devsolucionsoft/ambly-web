import Head from "next/head"
import Image from "next/image"
import { useState, useEffect } from "react"
// Assests
// Styled components
import { Main } from "../../styles/categorias.styled"
// Components
import { Header, Typography, SideNav, Footer } from "../../components"
import { withIronSessionSsr } from "iron-session/next"
import {
  sessionOptions,
  getSessionVerificationNotCreated,
} from "../../../lib/session"
import { UserApi } from "../api"

const items = [1, 2, 3, 4]
const UserApiModel = new UserApi()

export default function Login(props: any) {
  const [topics, setTopics] = useState([])
  useEffect(() => {
    ;(async () => {
      const response = await UserApiModel.GetCategories()
      response.status === 200 && setTopics(response.data)
    })()
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <SideNav minimal={!props.user} />
        <Header minimal={!props.user} />

        <div className="content-page">
          <Typography text="Categorías" variant="H1" />
          <br />
          <br />
          <div className="category-list">
            {topics.map((item: any, index) => (
              <section key={index} className="category-item">
                <Image
                  className="category-image"
                  src={item.image}
                  alt=""
                  height={100}
                  width={100}
                />
              </section>
            ))}
          </div>
        </div>
        <Footer />
      </Main>
    </>
  )
}

export const getServerSideProps = withIronSessionSsr(
  getSessionVerificationNotCreated,
  sessionOptions
)

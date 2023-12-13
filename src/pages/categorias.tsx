import Head from "next/head"
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"
// Assests
// Styled components
import { Main } from "../styles/categorias.styled"
// Components
import { Header, Typography, SideNav, Footer, Loader } from "../components"
import { withIronSessionSsr } from "iron-session/next"
import {
  sessionOptions,
  getSessionVerificationNotCreated,
} from "../../lib/session"
import { UserApi } from "./api"

const UserApiModel = new UserApi()

export default function Login(props: any) {
  const [topics, setTopics] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    ;(async () => {
      const response = await UserApiModel.GetCategories()
      response.status === 200 && setTopics(response.data)
    })()
    setLoading(false)
  }, [])
  
  return (
    <>
      <Head>
        <title>Ambly</title>
        <meta name="description" content="Generated by Ambly" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Loader loading={loading} />
        <SideNav minimal={!props.user} />
        <Header minimal={!props.user} />

        <div className="content-page">
          <Typography text="Categorías" variant="H5" />
          <br />
          <br />
          <div className="category-list">
            {topics.map((item: any, index: number) => (
              <Link
                href={`/cursos/${item.name}`}
                key={index}
                className="category-item"
              >
                <Image
                  className="category-image"
                  src={item.image}
                  alt=""
                  height={100}
                  width={100}
                />
              </Link>
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
